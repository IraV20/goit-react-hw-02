import css from "./Options.module.css";

export default function Option({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <ul className={css.btnList}>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("good")}>
          Good
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("neutral")}>
          Neutral
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("bad")}>
          Bad
        </button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button className={css.btn} onClick={resetFeedback}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
