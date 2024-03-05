import { PrimaryButton } from "../ui/Buttons"
import img1 from '../../assets/images/bg.jpg'
import { useRef,useEffect } from "react"
import Typed from 'typed.js'
import { Link } from "react-router-dom"

const Hero = ()=>{
    const typedEl = useRef(null)
    return(
        <div id="hero" className="flex flex-col justify-center items-center px-10 md:flex-row text-white w-[100%] h-[100vh]">
           <div className="flex flex-col">
            <div className="space-y-5 flex flex-col my-6 mx-auto md:w-[22.5rem]">
             <h2 className="text-3xl text-center md:text-center md:text-5xl font-bold">Nigerian Police Force Recruitment Scheme</h2>
             <p className="text-md text-center">
             Welcome to the gateway of opportunity to serve and protect your community. At the Nigerian Police Force, we are more than just law enforcement; we are a family dedicated to safeguarding our neighborhoods, upholding justice, and fostering trust within our communities.
             Are you ready to make a difference? Our recruitment process offers a pathway for individuals who are passionate about making positive contributions and ensuring the safety and well-being of others.</p>
<div className="flex items-center justify-center">
<PrimaryButton style={'flex justify-between items-center space-x-4 text-center px-3'}>
    <Link to={'/apply'}>Apply</Link>
<i className="fas fa-angle-right"></i>
</PrimaryButton>
</div>
            </div>
                
           </div>
        </div>
    )
}
export default Hero