import FeedbackButton from 'components/FeedbackButton/FeedbackButton';
import css from './Feedback.module.css';

export default function Feedback({ options, onLeaveFeedback }) {

  return (
    <ul className={css.buttonsList}>
      {options.map(option => (
        <li key={option}>
          <FeedbackButton
            text={option.toLowerCase()}
            functions={onLeaveFeedback}
          />
        </li>
      ))}
    </ul>
  );
}
