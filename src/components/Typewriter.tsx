import { useState, useEffect } from "react";

interface Props {
  words: string[];
  loop?: boolean | undefined;
  cursor?: boolean | undefined;
  typeSpeed?: number | undefined;
  deleteSpeed?: number | undefined;
  delay?: number | undefined;
}

const Typewriter: React.FC<Props> = ({
  words,
  loop = true,
  cursor = true,
  typeSpeed = 150,
  deleteSpeed = 50,
  delay = 2000,
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    if (cursor) {
      const cursorInterval = setInterval(() => {
        setBlink((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [cursor]);

  // Typing effect
  useEffect(() => {
    if (index < words.length) {
      if (subIndex === words[index].length + 1 && !reverse) {
        setReverse(true);
        return;
      }

      if (subIndex === 0 && reverse) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const timeout = setTimeout(
        () => {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        },
        reverse ? deleteSpeed : typeSpeed
      );

      return () => clearTimeout(timeout);
    }
  }, [subIndex, index, reverse, words.length, typeSpeed, deleteSpeed]);

  useEffect(() => {
    if (
      !loop &&
      index === words.length - 1 &&
      subIndex === words[index].length
    ) {
      setReverse(true);
    }
  }, [loop, index, subIndex, words.length]);

  return (
    <span>
      I am a {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

export default Typewriter;
