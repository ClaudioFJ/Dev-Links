import LinkButton from './LinkButton'
import './LinkList.css'

// Lista de botões gerada com map().
function LinkList({ links }) {
  return (
    <nav className="link-list" aria-label="Links principais">
      <ul className="link-list__items">
        {links.map((link) => (
          <li key={link.url}>
            <LinkButton text={link.text} url={link.url} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default LinkList
