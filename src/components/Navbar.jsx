import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

const sections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "volunteer", label: "Volunteer" },
]

function Navbar({ theme, setTheme }) {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (!el) continue

        const offsetTop = el.offsetTop
        const offsetHeight = el.offsetHeight

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.id)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight"
        >
          Rohan.dev
        </a>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm">
          {sections.map((section) => {
            const isActive = activeSection === section.id

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`transition relative
                  ${
                    isActive
                      ? "font-medium text-neutral-900 dark:text-neutral-100"
                      : "opacity-70 hover:opacity-100"
                  }
                `}
              >
                {section.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-current" />
                )}
              </a>
            )
          })}

          {/* Theme toggle */}
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
