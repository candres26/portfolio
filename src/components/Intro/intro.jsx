import { Link } from 'react-scroll';
import './intro.css';
import btnImg from '../../assets/maletin.png';
import bg from "../../assets/chicoprogramador.png"

export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Andres</span> <br />Developer</span>
        <p className='introPara'>I am a skilled and creative developer. </p>
        <Link><button className="btn"><img src={btnImg} alt="" className='btnImg'/>Hire me</button></Link>
      </div>
      <img src={bg} alt="Profile" className='bg'/>
    </section>
  )
}