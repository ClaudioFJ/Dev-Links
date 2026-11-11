import './Profile.css'

// Mostra o avatar e o @usuário.
// Recebe os dados por Props (nada de texto fixo aqui).
function Profile({ username, avatar, name }) {
  return (
    <header className="profile">
      <div className="profile__avatar-wrapper">
        <img
          className="profile__avatar"
          src={avatar}
          alt={`Foto de perfil de ${name}`}
        />
      </div>
      <p className="profile__username">{username}</p>
    </header>
  )
}

export default Profile
