import { Moon, Sun } from "lucide-react"

function Navbar({ theme, setTheme }) {
  return (
    <nav className="sticky top-0 z-50 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Name + Role */}
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight">
            Rohan Shrivastava
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            Web Developer
          </span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm">
          <a href="#experience" className="opacity-70 hover:opacity-100 transition">
            Experience
          </a>
          <a href="#projects" className="opacity-70 hover:opacity-100 transition">
            Projects
          </a>
          <a href="#skills" className="opacity-70 hover:opacity-100 transition">
            Skills
          </a>
          <a href="#education" className="opacity-70 hover:opacity-100 transition">
            Education
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-2 p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
