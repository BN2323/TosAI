import React from 'react'
import Logo from '../assets/Logo.svg'
import { NavButton } from '../components/NavButton'


const Home = () => {
  return (
    <div className='gap-10 flex flex-col justify-around items-center m'>
      <img src={Logo} alt="" />
      <div className='flex gap-4'>
        <NavButton to="/lesson">Lesson</NavButton>
        <NavButton to="/minigame">Mini Games</NavButton>
      </div>
    </div>
  
  )
}

export default Home