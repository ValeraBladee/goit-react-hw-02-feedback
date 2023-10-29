import { Section, Feedback, dataButtonKey, Statistics } from 'components';
import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
export class App extends Component {
  state = dataButtonKey();
  addFeedback = itemText => {
    this.setState({ [itemText]: this.state[itemText] + 1 });
    Notify.success(`Your feedback: ${itemText} is accepted`);
  };
  render() {
    return (
      <>
        <Section title="please leave feedback">
          <Feedback addFeedback={this.addFeedback} />
        </Section>
        <Section title="statistics">
          <Statistics data={this.state} />
        </Section>
      </>
    );
  }
}