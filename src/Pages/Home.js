import React from 'react'
import "./Home.css";
import intr from "../Pages/home_ban.webp"
import { useNavigate } from 'react-router-dom';

const Home = () => 
{
    const navigate=useNavigate();
    const navigateRegister=()=>
    {
        navigate('/register');
    }
    const audio=new Audio('./kbc_intro.mp3');
    const audioplay=()=>
    {
      audio.play();
    }
    audioplay();
  return (
    <div className='Intro'>
      <img className="intr" src={intr} alt="" />
      <button onClick={navigateRegister} className='button'>Click Here To Register</button>
    </div>
  )
}

export default Home
