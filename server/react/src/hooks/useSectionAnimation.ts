import { useEffect } from "react"

export default function useSectionAnimation() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible") // animate in
          } else {
            entry.target.classList.remove("visible") // animate out
          }
        })
      },
      {
        threshold: 0.1, // triggers when 30% of section is visible
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])
}
