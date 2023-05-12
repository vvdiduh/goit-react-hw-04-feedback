import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const addFeedback = selectedOption => {
    setFeedback(prevState => ({
      ...prevState,
      [selectedOption]: prevState[selectedOption] + 1,
    }));
  };

  const total = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good * 100) / total());
  };

  const btn = {
    good: '',
    neutral: '',
    bad: '',
  };

  return (
    <Section title="Будь ласка залиште відгук">
      <FeedbackOptions options={btn} onLeaveFeedback={addFeedback} />
      {total() ? (
        <>
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 3,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };  ----- DONE

//   countPositiveFeedbackPercentage = () => {
//     return Math.round(
//       (this.state.good * 100) /
//         (this.state.good + this.state.neutral + this.state.bad)
//     );
//   }; ----- DONE

//   addFeedback = feedback => {
//     this.setState(prevState => {
//       return {
//         [feedback]: prevState[feedback] + 1,
//       };
//     });
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <Section title="Будь ласка залиште відгук">
//         <FeedbackOptions
//           options={this.state}
//           onLeaveFeedback={this.addFeedback}
//         />
//         {total ? (
//           <>
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positiveFeedbackPercentage}
//             />
//           </>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     );
//   }
// }

// export default App;
