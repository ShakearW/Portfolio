// Footer.tsx
import { footerStyles } from "./style"

function Footer() {
  return (
    <div id="footer" style={footerStyles.footer}>
      <ul className="copyright">
        <li>&copy; Untitled. All rights reserved.</li>
        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>
  )
}

export default Footer
