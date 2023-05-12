import PropTypes from 'prop-types';
import './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = Object.keys(options).map((option, index) => (
    <li key={index}>
      <button onClick={() => onLeaveFeedback(option)}>{option}</button>
    </li>
  ));

  return <ul>{elements}</ul>;
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
