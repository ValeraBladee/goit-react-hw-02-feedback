// import { Section, Feedback, Statistics } from 'components';
import React, { Component } from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickOnButton = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const result = Math.ceil(
      ((this.state.good - this.state.bad + this.state.neutral) /
        this.countTotalFeedback()) *
        100
    ).toFixed(0);
    if (result < 0) {
      return 0;
    }
    return result;
  };

  onLeaveFeedback = evt => {
    const option = evt.target.textContent;
    this.clickOnButton(option);
  };

  render() {
    const state = this.state;

    return (
      <div className="App">
        <Section title={'Please leave feedback'}>
          <Feedback
            options={Object.keys(state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              total={this.countTotalFeedback()}
            />
          ) : (<Notification message="There is no feedback"/>)}
        </Section>
      </div>
    );
  }
}

export default App;
