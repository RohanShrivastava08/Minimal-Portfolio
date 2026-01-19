import { resumeData } from "../data/resumeData"
import { Linkedin, Github, Users, PenLine } from "lucide-react"

function Home() {
  const { name, links = {} } = resumeData
  const firstName = name.split(" ")[0]

  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-3xl px-6">

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Hi, I’m {firstName}
        </h1>

        {/* One-liner */}
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400">
          I design and build minimal, high-performance web experiences  
          with a strong focus on clarity and usability.
        </p>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center items-center gap-8">
          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              <Linkedin size={22} />
            </a>
          )}

          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              <Github size={22} />
            </a>
          )}

          {links.peerlist && (
            <a
              href={links.peerlist}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Peerlist"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              <Users size={22} />
            </a>
          )}

          {links.blog && (
            <a
              href={links.blog}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blog"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              <PenLine size={22} />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Home
