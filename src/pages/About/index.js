import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Ilman from '../../assets/faisilman.jpg';
import Arya from '../../assets/arya.jpg';
import Dani from '../../assets/Dani.jpg';

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
      <div className="container mx-auto mt-8 p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">  
      <div className='mb-8'>
        <img
          src={Ilman}
          alt="Description of the image"
          className="w-80 h-80 rounded-full border-8 border-gray-800"
        />
      </div>
      <div className="lg:w-3/4 mt-8">
        <h1 className="text-3xl font-bold mb-4">M. Fasrul Fais Ilman</h1>
        <p className="mb-4">
          Hello, I'm Ilman, a dedicated full-stack developer passionate about crafting seamless digital experiences. With expertise in both front-end and back-end technologies, I thrive on transforming innovative ideas into functional and user-friendly solutions. Let's build something amazing together!
        </p>
        <div className="flex gap-4 mt-4">
            <a href="https://github.com/ilmanfais">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.instagram.com/_ilmanfais/">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/ilmaannn/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
      </div>
      <div className='mb-8'>
        <img
          src={Dani}
          alt="Description of the image"
          className="w-80 h-80 rounded-full border-8 border-gray-800"
        />
      </div>
      <div className="lg:w-3/4 mt-8">
        <h1 className="text-3xl font-bold mb-4">Rio Aditya Ramadhani</h1>
        <p className="mb-4">
        Hi, I'm Rio, a dedicated full-stack developer with expertise in both front-end and back-end technologies. I excel at turning innovative ideas into user-friendly solutions. Proficient in JavaScript, Python, and Java, I design captivating interfaces and manage server-side operations efficiently. Known for creativity and problem-solving, I bring valuable skills to IT projects. Let's collaborate and create something amazing!
        </p>
        <div className="flex gap-4 mt-4">
            <a href="https://github.com/Riodhani23">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.instagram.com/rioadtyramdhan_/">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/rioo/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
      </div>
      <div className='mb-8'>
        <img
          src={Arya}
          alt="Description of the image"
          className="w-80 h-80 rounded-full border-8 border-gray-800"
        />
      </div>
      <div className="lg:w-3/4 mt-8">
        <h1 className="text-3xl font-bold mb-4">Aryadi Sumantri</h1>
        <p className="mb-4">
        Hi, I'm Arya, a skilled React developer passionate about crafting engaging user interfaces. With a strong focus on front-end technologies, I excel in creating seamless and visually appealing digital experiences. My expertise lies in leveraging React to build dynamic and responsive web applications. Let's bring your ideas to life with captivating React solutions!
        </p>
        <div className="flex gap-4 mt-4">
            <a href="https://github.com/sumantri29">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.instagram.com/comprokpo/">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="http://www.linkedin.com/in/coprokpo-arya-183915290">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
