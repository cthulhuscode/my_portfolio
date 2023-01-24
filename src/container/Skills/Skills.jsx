import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './skills.scss';
import { urlFor, client } from '../../client';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Apps</span> <br />mean  <span>Good Business</span></h2>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="skill-item"
            key={skill.name + index}
          >
            <img src={urlFor(skill.imgUrl)} alt={skill.name} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{skill.name}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'skills'),
  'skills',
  'bg_white',
);
