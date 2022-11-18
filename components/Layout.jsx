import Footer from './Footer';
import BackToTop from './BackToTop';
import { IoMenu, IoClose, IoMoon, IoSunny, IoLogoReact } from "react-icons/io5";

import {useState} from 'react';

export default function Layout({children}){

  const [darkMode, setDarkMode] = useState(false);

  

  const showMenu = (e) => {

    let list = document.querySelector('ul')
    
    list.classList.remove("z-[-1]")

    list.classList.add('top-[75px]')
    list.classList.add('z-10')

    // Change icon
    document.getElementById('menuIcon').classList.add('hidden')
    document.getElementById('closeIcon').classList.remove('hidden')
    
  }

  const hideMenu = (e) => {

    let list = document.querySelector('ul')
    
    list.classList.add("z-[-1]")

    list.classList.remove('top-[75px]')
    list.classList.remove('z-10')

    // Change icon
    document.getElementById('menuIcon').classList.remove('hidden')
    document.getElementById('closeIcon').classList.add('hidden')
    
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

          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            <IoMenu id="menuIcon" onClick={showMenu} />
            <IoClose id="closeIcon" className="hidden" onClick={hideMenu}/>
          </span>

          <ul className="md:flex md:items-center z-[-1] bg-gray-800 md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 dark:bg-gray-400">
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

      <div className="progress_wrapper">
        <div className="bg-cyan-600 progress_bar" id="bar"></div>
      </div>

      <BackToTop />


      <main>
      {children}
      </main>
      
      <Footer />
    </div>
  )
}