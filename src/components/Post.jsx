import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/mautsotelo.png" />
          <div className={styles.authorInfo}>
            <strong>Maurício Sotelo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="" dateTime="">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário"/>
        <footer >
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}