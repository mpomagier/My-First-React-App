import styles from "./List.module.scss";

const List = () => {
  return (
    <div className={styles.List}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span className={styles.span}>soon!</span>
        </h2>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <section className={styles.columns}>
        <article>
          <h2 className={styles.title}>Books</h2>
        </article>
        <article>
          <h2 className={styles.title}>Movies</h2>
        </article>
        <article>
          <h2 className={styles.title}>Games</h2>
        </article>
      </section>
    </div>
  );
};

export default List;
