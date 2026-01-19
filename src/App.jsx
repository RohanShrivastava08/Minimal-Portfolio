import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Experience from "./sections/Experience"

function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const root = document.documentElement
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark")
  }, [theme])

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Experience />
    </div>
  )
}

export default App
