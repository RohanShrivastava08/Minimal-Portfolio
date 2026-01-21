import { NavLink } from "react-router-dom"
import { Moon, Sun } from "lucide-react"

const links = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact" }, // ✅ added
]

function Navbar({ theme, setTheme }) {
  return (
    <nav className="sticky top-0 z-50
                    bg-neutral-50/80 dark:bg-neutral-950/80
                    backdrop-blur
                    border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6
                      h-16 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-sm font-semibold tracking-tight
                     hover:opacity-80 transition"
        >
          Rohan.dev
        </NavLink>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative pb-1 transition
                 ${
                   isActive
                     ? "font-medium text-neutral-900 dark:text-neutral-100"
                     : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                 }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}

                  {/* Active underline */}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-px w-full
                                bg-current transition-transform duration-300
                                ${
                                  isActive
                                    ? "scale-x-100"
                                    : "scale-x-0 group-hover:scale-x-100"
                                }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
            className="ml-2 p-2 rounded-md
                       text-neutral-600 dark:text-neutral-400
                       hover:bg-neutral-200 dark:hover:bg-neutral-800
                       hover:text-neutral-900 dark:hover:text-neutral-100
                       transition"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
