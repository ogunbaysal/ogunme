import { h } from 'preact'
import style from './style.css'

function IconButton({ href, children }) {
  return (
    <a href={href} className={style.button}>
      {children}
    </a>
  )
}

export default IconButton
