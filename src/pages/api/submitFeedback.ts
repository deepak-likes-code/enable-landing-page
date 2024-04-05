// pages/api/submitFeedback.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Define the Props type for function parameters
type Props = {
    name: string;
    email: string;
    feedback: string;
};

// API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { name, email, feedback }: Props = req.body;

    // Ensure the environment variables are correctly typed
    const serviceAccountEmail: string | undefined = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey: string | undefined = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'); // Handling possible newline escape issue
    const sheetId: string | undefined = process.env.SHEET_ID;

    // Initialize the JWT client for Google authentication
    const serviceAccountAuth = new JWT({
        email: serviceAccountEmail,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    try {
        if (!sheetId) throw new Error('Sheet ID is not defined.');

        const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);

        await doc.loadInfo(); // Loads document properties and worksheets

        const sheet = doc.sheetsByIndex[0]; // Assuming you want to work with the first sheet

        if (!sheet) throw new Error('No sheet found.');

        await sheet.addRows([
            { Name: name, Email: email, Feedback: feedback },
        ]);

        // Respond with a success message
        res.status(200).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        console.error('Failed to submit feedback:', error);
        res.status(500).json({ error: 'Failed to submit feedback' });
    }
}
