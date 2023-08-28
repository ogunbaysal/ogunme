import { h } from 'preact'
import style from './style.css'
import IconButton from '../../components/IconButton'
import GithubIcon from '../../components/Icons/GithubIcon'

import { profile } from '../../../package.json'
import TwitterIcon from '../../components/Icons/TwitterIcon'
import LinkedinIIcon from '../../components/Icons/LinkedinIIcon'

import ProfileImage from '../../assets/profile.jpg'

function Home() {
  return (
    <section className={style.wrapper}>
      <div className={style.wrapper_inner}>
        <div className={style.container}>
          <img src={ProfileImage} alt={profile.name} className={style.user_logo} />
          <h1 className={style.name}>{profile.name}</h1>
          <h3 className={style.subtitle}>
            I'm <b>{profile.name}</b>, a {profile.role}
          </h3>
          <div className={style.buttons}>
            {profile.social.github && (
              <IconButton href={profile.social.github}>
                <GithubIcon />
              </IconButton>
            )}
            {profile.social.twitter && (
              <IconButton href={profile.social.twitter}>
                <TwitterIcon />
              </IconButton>
            )}
            {profile.social.linkedin && (
              <IconButton href={profile.social.linkedin}>
                <LinkedinIIcon />
              </IconButton>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
