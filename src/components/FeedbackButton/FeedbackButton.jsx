import css from './FeedbackButton.module.css';

export default function Button({ functions, text }) {
  return (
    <button className={css.button} type="button" onClick={functions}>
      {text}
    </button>
  );
}

// const FeedbackButton = ({ text, addFeedback }) => {
//     return (
//         <>
//           {text && (
//             <button className={css.button} onClick={() => addFeedback(text)}>
//               {text}
//             </button>
//           )}
//         </>
//       );
//     };
//     export default FeedbackButton;
