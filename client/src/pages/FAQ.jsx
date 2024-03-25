import "../styles/FAQ.css";

import { useState } from "react";
import FAQCard from "../components/FAQCard";

const FAQ = () => {
  const [questionAnswer, setQuestionAnswer] = useState([
    {
      id: 1,
      question: "Q: What are the allowed team sizes",
      answer: "A: Only team sizes 2-4 are allowed",
    },
    {
      id: 2,
      question: "Q: What is the price to register for this event",
      answer: "A: Entry for this event is free!",
    },
    {
      id: 3,
      question: "Q: Do I need former programming experience",
      answer: "A: All experience levels are welcome",
    },
  ]);

  return (
    <div className="FAQ">
    <div className="qaContainer">
      <h1>Frequently Asked Questions</h1>
      {questionAnswer.map((qa) => (
        <FAQCard key={qa.id} question={qa.question} answer={qa.answer} />
      ))}
      </div>
    </div>
  );
};

export default FAQ;
