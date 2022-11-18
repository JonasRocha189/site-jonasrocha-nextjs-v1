import Footer from './Footer';
import { IoMenu, IoClose, IoMoon, IoSunny, IoLogoReact } from "react-icons/io5";

import {useState} from 'react';

export default function Layout({children}){

  const [darkMode, setDarkMode] = useState(false);

  const handleMenu = (e) => {

    // Toggle mobile menu
    let list = document.querySelector('ul')
    list.classList.toggle('top-[75px]')
    list.classList.toggle('z-10')

    // Change icon
    document.getElementById('menuIcon').classList.toggle('hidden')
    document.getElementById('closeIcon').classList.toggle('hidden')
  }
  return(
    <div className={darkMode ? "dark" : ""}>    
      <header className="shadow bg-gray-800 text-gray-200 dark:text-gray-800 dark:bg-gray-400">
        
        <nav className="p-5 shadow flex justify-between items-center">
          <span className="text-2xl justify-between cursor-pointe font-bold">  
            <IoLogoReact className='inline text-[40px]' />         
            Jonas Rocha
          </span>

          <span  
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl"
          >
            { darkMode ? <IoMoon /> : <IoSunny /> }
          </span>

          <span onClick={handleMenu} className="text-3xl cursor-pointer mx-2 md:hidden block">
            <IoMenu id="menuIcon" />
            <IoClose id="closeIcon" className="hidden"/>
          </span>

          <ul className="md:flex md:items-center z-[-1] bg-gray-600 md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7">
            <li className="mx-4 my-6 md:my-0" ><a className="text-xl hover:text-cyan-500 duration-500" href="#">Home</a></li>
            <li className="mx-4 my-6 md:my-0" ><a className="text-xl hover:text-cyan-500 duration-500" href="#">Sobre</a></li>
            <li className="mx-4 my-6 md:my-0" ><a className="text-xl hover:text-cyan-500 duration-500" href="#">Portifólio</a></li>
            <li className="mx-4 my-6 md:my-0" ><a className="text-xl hover:text-cyan-500 duration-500" href="#">Blog</a></li>

            <button className="bg-cyan-400 text-white duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded dark:bg-cyan-800 dark:hover:bg-cyan-600">
              Contato
            </button>
          </ul>
        </nav>
      </header>


      <main>
      {children}
      </main>
      
      <Footer />
    </div>
  )
}