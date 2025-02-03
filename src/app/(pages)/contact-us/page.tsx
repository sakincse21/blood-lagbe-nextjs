// contact page to provide links to contact me
import saleheen from '../../../../public/img/saleheen.png'
import Image from 'next/image'
import { Code2Icon, CodeIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from 'lucide-react'

const ContactUs = () => {
  return (
    <div className="mockup-phone h-full">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <div className='flex flex-col justify-center items-center '>
            
            <div className='filter drop-shadow-2xl'>
              <Image src={saleheen} alt="saleheen" width={200}/>
            </div>
            <div className='flex flex-row justify-center items-center gap-4 bg-base-200 p-4 filter drop-shadow-2xl'>
              <span><a href="https://facebook.com/saleheen.sakin"><FacebookIcon/></a></span>
              <span><a href="https://instagram.com/saleheen.sakin"><InstagramIcon/></a></span>
              <span><a href="https://www.linkedin.com/in/saleheen-sakin/"><LinkedinIcon/></a></span>
              <span><a href="https://github.com/sakincse21"><GithubIcon/></a></span>
              <span><a href="http://codeforces.com/profile/piro-_-panda"><Code2Icon/></a></span>
              <span><a href="https://leetcode.com/u/saleheen7"><CodeIcon/></a></span>
              <span><a href="mailto:saleheen.sakin@gmail.com"><MailIcon/></a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs