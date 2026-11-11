import './ThemeToggle.css'

// Ícones SVG inline (lua e sol)
function MoonIcon() {
  return (
    <svg
      className="theme-toggle__icon"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg
      className="theme-toggle__icon"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

// Switch do tema. Recebe o tema atual e a função de troca por Props.
function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label="Alternar entre tema claro e escuro"
      aria-pressed={theme === 'light'}
    >
      <span
        className={
          theme === 'light'
            ? 'theme-toggle__knob theme-toggle__knob--light'
            : 'theme-toggle__knob'
        }
      >
        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  )
}

export default ThemeToggle
