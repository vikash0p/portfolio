"use client"
import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';
import React from 'react';

const Skills = () => {

  const skills = [
    { name: 'HTML', level: 'Advanced', width: 90 },
    { name: 'CSS', level: 'Advanced', width: 90 },
    { name: 'JavaScript', level: 'Advanced', width: 85 },
    { name: 'Bootstrap', level: 'Advanced', width: 90 },
    { name: 'tailwind', level: 'Advanced', width: 90 },
    { name: 'React', level: 'Advanced', width: 85 },
    { name: 'Node.js', level: 'Intermediate', width: 30, },
    { name: 'Nextjs', level: 'Advanced', width: 85 },
  ];

  return (
    <div className=" p-8" id='skills'>
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.6
        }}
       className="text-2xl font-semibold mb-4">Skills</motion.h2>
      <motion.ul
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.6
        }}
       className="list-disc ml-6">
        {skills.map((skill, index) => (
          <li key={index} className="mb-3">
            <div><span className="font-semibold">{skill.name}:</span> {skill.level}</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div className={`bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 `} style={{ width: `${skill.width}%` }} ></div>
            </div>

          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Skills;
