import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Ilman from '../../assets/faisilman.jpg';

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
      <div className="container mx-auto mt-8 p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">  
      <div className='mb-8'>
        <img
          src={Ilman}
          alt="Description of the image"
          className="w-80 h-80 rounded-full border-8 border-gray-300"
        />
      </div>
      <div className="lg:w-3/4 mt-8">
        <h1 className="text-3xl font-bold mb-4">M. Fasrul Fais Ilman</h1>
        <p className="mb-4">
          Hello, I'm Ilman, a dedicated full-stack developer passionate about crafting seamless digital experiences. With expertise in both front-end and back-end technologies, I thrive on transforming innovative ideas into functional and user-friendly solutions. Let's build something amazing together!
        </p>
        <p>
          Let's build something amazing together!
        </p>
        {/* Tambahkan di sini icon untuk github intagram dan wathsapp */}
        <div className="flex gap-4 mt-4">
            <a href="#github-link">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="#instagram-link">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#whatsapp-link">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
        </div>
      </div>
      <div className='mb-8'>
        <img
          src={Ilman}
          alt="Description of the image"
          className="w-80 h-80 rounded-full border-8 border-gray-300"
        />
      </div>
      <div className="lg:w-3/4 mt-8">
        <h1 className="text-3xl font-bold mb-4">Rio Aditya Ramadhani</h1>
        <p className="mb-4">
          Hello, I'm Ilman, a dedicated full-stack developer passionate about crafting seamless digital experiences. With expertise in both front-end and back-end technologies, I thrive on transforming innovative ideas into functional and user-friendly solutions. Let's build something amazing together!
        </p>
        <p>
          Let's build something amazing together!
        </p>
        <div className="flex gap-4 mt-4">
            <a href="#github-link">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="#instagram-link">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#whatsapp-link">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
        </div>
      </div>
      <div className='mb-8'>
        <img
          src={Ilman}
          alt="Description of the image"
          className="w-80 h-80 rounded-full border-8 border-gray-300"
        />
      </div>
      <div className="lg:w-3/4 mt-8">
        <h1 className="text-3xl font-bold mb-4">Aryadi Sumantri</h1>
        <p className="mb-4">
          Hello, I'm Ilman, a dedicated full-stack developer passionate about crafting seamless digital experiences. With expertise in both front-end and back-end technologies, I thrive on transforming innovative ideas into functional and user-friendly solutions. Let's build something amazing together!
        </p>
        <p>
          Let's build something amazing together!
        </p>
        <div className="flex gap-4 mt-4">
            <a href="#github-link">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="#instagram-link">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#whatsapp-link">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
