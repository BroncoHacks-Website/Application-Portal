import "../styles/FAQ.css";

import FAQCard from "../components/FAQCard";

const FAQ = () => {
  // this is mock data
  const questionAnswer = [
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
    {
      id: 4,
      question: "Q: Can I register if I am not a Cal Poly Pomona Student?",
      answer: "A: idk, i really dont know, lol",
    },
    {
      id: 5,
      question: "Q: Do competitors smell bad?",
      answer: "A: Yes, they are all CS majors and rarely shower. We recommend bringing deodorant and showering the night before.",
    },
    {
      id: 6,
      question: "Q: What is the meaning of life?",
      answer: "A: 42",
    },
  ];

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
