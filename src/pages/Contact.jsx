import { useState } from "react"
import { resumeData } from "../data/resumeData"
import {
  Mail,
  Copy,
  Check,
  Linkedin,
  Github,
  Users,
  PenLine,
} from "lucide-react"

function Contact() {
  const { contact, links = {} } = resumeData
  const email = contact?.email || "rohansh0808@gmail.com"

  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      console.error("Failed to copy email")
    }
  }

  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-wide
                      text-neutral-500 dark:text-neutral-400">
          GET IN TOUCH
        </p>

        {/* Heading */}
        <h2 className="mt-3 text-3xl sm:text-4xl
                       font-semibold tracking-tight">
          Let’s connect
        </h2>

        {/* Description */}
        <p className="mt-5 text-neutral-600 dark:text-neutral-400
                      leading-relaxed">
          If you have an opportunity, a project in mind, or simply want
          to start a conversation, feel free to reach out.
        </p>

        {/* Email box */}
        <div
          className="mt-10 inline-flex items-center gap-3
                     rounded-xl border
                     border-neutral-300 dark:border-neutral-700
                     px-5 py-3
                     bg-white dark:bg-neutral-900"
        >
          <Mail size={18} className="text-neutral-500" />

          <a
            href={`mailto:${email}`}
            className="text-base font-medium
                       hover:underline"
          >
            {email}
          </a>

          <button
            onClick={handleCopy}
            aria-label="Copy email"
            className="ml-2 text-neutral-500
                       hover:text-neutral-900
                       dark:hover:text-neutral-100
                       transition"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>

        {/* Copy hint */}
        <p className="mt-3 text-xs text-neutral-500">
          {copied
            ? "Email copied to clipboard"
            : "Click to open mail app or copy address"}
        </p>

        {/* Divider */}
        <div className="mt-10 h-px w-24 mx-auto
                        bg-neutral-200 dark:bg-neutral-800" />

        {/* Socials */}
        <div className="mt-10 flex justify-center gap-8">
          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-500
                         hover:text-neutral-900
                         dark:hover:text-neutral-100
                         transition"
            >
              <Linkedin size={20} />
            </a>
          )}

          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-500
                         hover:text-neutral-900
                         dark:hover:text-neutral-100
                         transition"
            >
              <Github size={20} />
            </a>
          )}

          {links.peerlist && (
            <a
              href={links.peerlist}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Peerlist"
              className="text-neutral-500
                         hover:text-neutral-900
                         dark:hover:text-neutral-100
                         transition"
            >
              <Users size={20} />
            </a>
          )}

          {links.blog && (
            <a
              href={links.blog}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blog"
              className="text-neutral-500
                         hover:text-neutral-900
                         dark:hover:text-neutral-100
                         transition"
            >
              <PenLine size={20} />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
