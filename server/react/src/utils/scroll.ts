import { scroller } from "react-scroll"

export const scrollTo = (id: string) => {
  scroller.scrollTo(id, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart"
  })
}
