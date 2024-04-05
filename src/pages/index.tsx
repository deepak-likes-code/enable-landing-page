import Image from "next/image";

import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto p-10">
        <main className="flex flex-col ">
          <div className="flex-1 mb-20">
            <div className="mb-8">
              <Image
                src="/img/enable_logo.jpeg"
                width={150}
                height={150}
                alt="Enable.AI Logo"
              />
            </div>
            <h1 className="text-6xl font-bold mb-4">Enable.AI</h1>
            <p className="text-2xl font-normal">
              Holistic AI wearable to push you towards the ultimate you
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <ContactForm />
          </div>
        </main>
      </div>
    </div>
  );
}
