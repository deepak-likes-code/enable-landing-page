import React, { useState, useEffect, useRef, FC } from "react";

interface TypewriterProps {
  htmlContent: string;
}

const Typewriter: FC<TypewriterProps> = ({ htmlContent }) => {
  const [content, setContent] = useState<string>("");
  const index = useRef<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContent(
        (prevContent) => prevContent + htmlContent.charAt(index.current)
      );
      index.current += 1;
    }, 50); // Adjust the typing speed by changing the timeout duration

    if (index.current === htmlContent.length) {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [content, htmlContent]);

  return (
    <div
      className="typewriter-effect "
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Typewriter;
