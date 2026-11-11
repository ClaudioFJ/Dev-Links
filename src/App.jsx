import './App.css'
import { profile } from './data/profile'
import Profile from './components/Profile'
import ThemeToggle from './components/ThemeToggle'
import LinkList from './components/LinkList'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'

// Por enquanto o tema é fixo em "dark" (definido no index.html).
// A troca de tema entra na Tarefa 07.
function App() {
  return (
    <main className="app">
      <Profile
        username={profile.username}
        avatar={profile.avatar}
        name={profile.name}
      />
      <ThemeToggle />
      <LinkList links={profile.links} />
      <SocialLinks socials={profile.socials} />
      <Footer name={profile.name} />
    </main>
  )
}

export default App
