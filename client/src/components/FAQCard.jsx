import "../styles/FAQCard.css";

import PropTypes from "prop-types";

const FAQCard = (props) => {
  return (
    <div className="FAQCard">
      <div className="question">{props.question}</div>
      <div className="answer">{props.answer}</div>
    </div>
  );
};

FAQCard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQCard;
