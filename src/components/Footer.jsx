import './Footer.css'

// Rodapé com o nome do autor.
function Footer({ name }) {
  return (
    <footer className="footer">
      <p className="footer__text">
        Feito com <span aria-hidden="true">❤</span> por {name}
      </p>
    </footer>
  )
}

export default Footer
