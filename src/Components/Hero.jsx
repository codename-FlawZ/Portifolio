// Imports 
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Code
const Hero = () => {
  return (
	<section className="m-0 p-0 border-box w-[100%] bg-[url('../public/Images/Background.png')]">
    <nav class="w-[100%] h-[100px] m-[0] flex justify-start items-center uppercase flex-wrap flex-row">
        <div class="text-center flex-[1]">
          <div class="font-bold text-[#D0D0D0]">Pedro H. Alexandre</div>
        </div>
        <div class="text-right flex-[1]">
          <div class="search-icon">
            <FaGithub />
          </div>
        </div>
      </nav>
      <div class="images">
        <div className="bg-[url('../public/Images/Hero_img-2.jpg')] absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[300px] h-[400px] bg-black"></div>
        <div className="bg-[url('../public/Images/Hero_img-3.jpg')] absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[300px] h-[400px] bg-black"></div>
      </div>
      <div className="top-[0] w-[100%] h-[100vh] flex justify-center items-center">
        <div className="overflow-hidden relative m-[0] w-[50%] h-[100vh]">
          <div className="opacity-[1] absolute top-[0] bottom-[0] left-[0] right-[0] z-[2]"></div>
          <div>
            <img className="image" src="/public/Images/Hero_img-1.jpg" />
          </div>
        </div>
      </div>
      <div class="header"><p class="title">antidote</p></div>
      <div class="hero-container">
        <div class="sidebar-text">003</div>
        <div class="projects">projects</div>
        <div class="img-nav">
          <div class="prev">prev</div>
          <div class="next">next</div>
        </div>
      </div>
  </section>
  )
}

export default Hero