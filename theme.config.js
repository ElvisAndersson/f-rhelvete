const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> Kalmar, Sweden
      </small>
      <style jsx>{`
        footer {
          margin-bottom: 4rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
