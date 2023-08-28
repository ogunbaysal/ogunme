import { h } from 'preact'
import style from './style.css'

import { profile } from '../../../package.json'
import GithubCornerIcon from '../Icons/GithubCornerIcon'

function GithubCorner() {
  if (!profile.social.github) return null

  return (
    <a href={profile.social.github} className={style.github_corner}>
      <GithubCornerIcon />
    </a>
  )
}

export default GithubCorner
