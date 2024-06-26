import "./App.css";
import { useState, useEffect } from "react";

import Description from "../description/Description";
import Option from "../options/Options";
import Feedback from "../feedback/Feedback";
import Notification from "../notification/Notification";

const initState = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [clicks, setClicks] = useState(
    () => JSON.parse(localStorage.getItem("feedback")) ?? initState
  );

  const totalFeedback = clicks ? clicks.good + clicks.neutral + clicks.bad : 0;
  const positivePerc = clicks
    ? Math.round((clicks.good / totalFeedback) * 100)
    : 0;

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setClicks(initState);
  };

  useEffect(() => {
    if (clicks) {
      window.localStorage.setItem("feedback", JSON.stringify(clicks));
    }
  }, [clicks]);

  return (
    <>
      <Description />
      <Option
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={clicks.good}
          neutral={clicks.neutral}
          bad={clicks.bad}
          total={totalFeedback}
          positivePerc={positivePerc}
        />
      )}
    </>
  );
}

export default App;
