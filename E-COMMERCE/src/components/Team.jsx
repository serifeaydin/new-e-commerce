import React from 'react';
import ErhanFirat from "../assets/erhanFirat.jfif";
import GokhanOzdemir from "../assets/gokhanOzdemir.jfif";
import SerifeAydin from "../assets/serifeAydin.jpg";

const teamMembers = [
  {
    name: 'Erhan FIRAT',
    position: ' Project Owner',
    description: 'the quick fox jumps over the lazy dog',
    image: ErhanFirat, 
  },
  {
    name: 'Gökhan ÖZDEMİR',
    position: 'Scrum Master',
    description: 'the quick fox jumps over the lazy dog',
    image: GokhanOzdemir, 
  },
  {
    name: 'Şerife AYDIN',
    position: 'Front-end Developer',
    description: 'the quick fox jumps  over the lazy dog',
    image: SerifeAydin, 
  },
  {
    name: 'Janberk ÖZKAN',
    position: 'Full Stack Developer',
    description: 'the quick fox jumps over the lazy dog',
    image: ErhanFirat,
  },
];

const Team = () => {
  return (
    <div className=" py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <p className="text-gray-600 mb-16 ">
          Problems trying to resolve the conflict between <br/>the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="max-w-xs bg-white  mx-16 my-8  text-center">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src={member.image}
                alt={member.name}
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-[#23A6F0]">{member.position}</p>
              <p className="text-gray-600 text-center w-36 mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;