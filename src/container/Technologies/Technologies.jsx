import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Technologies.scss"

const Technologies = () => {
  const [experiences, setExperiences] = useState(null);
  const [technologies, setTechnologies] = useState(null);

  useEffect(() => {
    const experiencesQuery = "*[_type == 'experiences'] | order(year desc)";
    const skillsQuery = "*[_type == 'technologies']";

    client
      .fetch(experiencesQuery)    
      .then(data => {        
        setExperiences(data)                                 
      })

    client
      .fetch(skillsQuery)
      .then(data => {
        setTechnologies(data)                
      })

  }, []);

  return (
    <>
      <h2 className="head-text">Technologies & Experience</h2>

      {/* Technologies */}
      <div className="technologies-container">
        <motion.div className="technologies-list">
          {technologies?.map(((skill) => (
            <motion.div
              key={skill.name}
              className="technologies-item app__flex"
              skill={skill.name}
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
            >
              <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>

              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))) }
        </motion.div>

      {/* Experiences */}
      <motion.div className="technologies-exp">        
        {experiences?.map((expByYear) => (
          <motion.div
            key={expByYear.year}
            className="technologies-exp-item-cnt"
          >
            <div className="technologies-exp-item">
              <div className="technologies-exp-year">
                <p className="bold-text">{expByYear.year}</p>
              </div>

              <motion.div className="technologies-exp-roles">
                {expByYear?.roles?.map(role => (
                  <div key={role.name}>
                    <motion.div
                      className="technologies-exp-role"                    
                      skill={role.name}
                      whileInView={{opacity: [0, 1]}}
                      transition={{duration: 0.5}}
                      data-tip
                      data-for={role.name}
                    >
                      <Tippy content={role.description} className="technologies-tooltip">
                        <h4 className="bold-text" id={role.name}>{role.name}</h4>
                      </Tippy>
                      <p className="p-text">{role.company}</p>
                    </motion.div>
                                     
                  </div>
                ))}
              </motion.div>
            </div>            
          </motion.div>
        ))}          

      </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Technologies, "technologies"),
  "experience",
  "bg_white"
);