import React from 'react'
import Logo from '../assets/Logo.svg'
import { NavButton } from '../components/NavButton'


const Home = () => {
  return (
    <div className='gap-10 flex flex-col justify-around items-center max-md:gap-16'>
      <img src={Logo} alt="" />
      <div className='flex gap-4 max-md:flex-col'>
        <NavButton to="/clue-game">Clue Game</NavButton>
        <NavButton to="/creature-lab">Creature Lab</NavButton>
      </div>
    </div>
  
  )
}

export default Home