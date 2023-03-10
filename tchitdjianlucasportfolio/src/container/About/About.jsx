import React from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { images } from '../../constants/';

const abouts = [
  {
    title: 'Web Developement',
    description: 'I am a good developer',
    imgUrl: images.about01,
  },
  {
    title: 'Web Design',
    description: 'I am a good designer',
    imgUrl: images.about02,
  },
  {
    title: 'UI/UX',
    description: 'I am a good developer',
    imgUrl: images.about03,
  },
  {
    title: 'Front-end Developement',
    description: 'I am a good developer',
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Je sais qu'un <span>Bon Code </span>
        <br />
        signifie <span>affaires fructueuses</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
