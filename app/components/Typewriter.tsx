"use client";

import { useState, useEffect } from "react";

const words: string[] = ["Artists.", "Designers.", "Creators."];

const Typewriter: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === words[wordIndex]) {
      setIsPaused(true);
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && text === "") {
      setIsPaused(true);
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 300);
    } else {
      const speed = isDeleting ? 75 : 120;
      timeout = setTimeout(() => {
        const currentWord = words[wordIndex];
        if (isDeleting) {
          setText(currentWord.substring(0, text.length - 1));
        } else {
          setText(currentWord.substring(0, text.length + 1));
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="typeWriter">
      {text}
      <span
        style={{
          borderRight: "6px solid #f9d94d",
          marginLeft: "6px",
          animation: isPaused ? "blink 750ms step-end infinite" : "none",
          opacity: 1,
        }}
      />
      <style>{`
        @keyframes blink {
          0%, 50% { border-color: #f9d94d; }
          50.01%, 100% { border-color: transparent; }
        }
      `}</style>
    </span>
  );
};

export default Typewriter;
