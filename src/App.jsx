import { useEffect, useState } from 'react'
import './App.css'
import { profile } from './data/profile'
import Profile from './components/Profile'
import ThemeToggle from './components/ThemeToggle'
import LinkList from './components/LinkList'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'

// Chave usada para salvar o tema no navegador
const STORAGE_KEY = 'devlinks-theme'

// Inicialização preguiçosa: essa função roda só uma vez,
// quando o App é montado, para ler o tema salvo.
function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem(STORAGE_KEY)
    // Só aceita "light" ou "dark"; caso contrário, usa "dark"
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark'
  } catch {
    // Se o localStorage estiver indisponível, começa com "dark"
    return 'dark'
  }
}

function App() {
  // ESTADO do tema: começa com o valor salvo (ou "dark")
  const [theme, setTheme] = useState(getInitialTheme)

  // Efeito que sincroniza o tema com o <html> (data-theme) e o localStorage.
  // Roda na montagem e sempre que o tema muda.
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Armazenamento indisponível: o tema ainda funciona nesta sessão
    }
  }, [theme])

  // Função de troca: alterna entre "dark" e "light".
  // Usamos a forma funcional para garantir o valor mais recente.
  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    )
  }

  return (
    <main className="app">
      <Profile
        username={profile.username}
        avatar={profile.avatar}
        name={profile.name}
      />
      {/* Passamos o tema atual e a função de troca por Props */}
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <LinkList links={profile.links} />
      <SocialLinks socials={profile.socials} />
      <Footer name={profile.name} />
    </main>
  )
}

export default App
