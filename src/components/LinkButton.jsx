import './LinkButton.css'

// Um botão de link. Recebe texto e url por Props.
function LinkButton({ text, url }) {
  return (
    <a
      className="link-button"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}

export default LinkButton
