import { BsLinkedin, BsGithub } from "react-icons/bs"

export const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://www.linkedin.com/in/ruvalsen/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/cthulhuscode" target="_blank">
          <BsGithub />
        </a>
      </div>      
    </div>
  )
}
