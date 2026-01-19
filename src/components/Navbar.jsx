import { Moon, Sun } from "lucide-react"

function Navbar({ theme, setTheme }) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-semibold tracking-tight">
          Rohan
        </span>

        <div className="flex items-center gap-8 text-sm">
          <a href="#projects" className="opacity-70 hover:opacity-100 transition">
            Projects
          </a>
          <a href="#about" className="opacity-70 hover:opacity-100 transition">
            About
          </a>
          <a href="#contact" className="opacity-70 hover:opacity-100 transition">
            Contact
          </a>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
