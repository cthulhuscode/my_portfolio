import { useState } from "react";
import {HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setToggle(prevState => !prevState)
  }

  return <nav className="app__navbar">
    <div className="app__navbar-logo">
      {/* <img src={images.logo} alt="logo" /> */}
      <h1>enrique ruvalcaba</h1>
    </div>
    <ul className="app__navbar-links">
      {['home', 'skills', 'projects', "experience", 'contact'].map((item) => (
        <li className="app__flex p-text" key={`link-${item}`}>
          <div />
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </ul>

    <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={(e) => handleMenuClick(e)} />

        { toggle && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            transition={{duration: 0.85, ease: "easeOut"}}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={(e) => handleMenuClick(e)} />
            </motion.span>

            <ul>
              {['home', 'skills', 'projects', "experience", 'contact'].map((item) => (                
                <li key={item} >
                  <a 
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                  >{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
    </div>
  </nav>
}
