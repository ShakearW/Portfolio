import { useEffect, useState } from "react"

export const useActiveSection = (sectionIds: string[]) => {
  const [active, setActive] = useState("top")

  useEffect(() => {
    const handleScroll = () => {
      let current = "top"
      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (section && window.scrollY >= section.offsetTop - 100) {
          current = id
        }
      })
      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds])

  return active
}
