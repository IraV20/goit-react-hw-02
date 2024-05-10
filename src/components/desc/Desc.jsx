import css from "./Desc.module.css";

export default function Desc() {
  return (
    <div className={css.header}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
