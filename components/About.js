"use client"
import { fadeIn } from '@/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <div className='w-full mb-9 lg:mb-0 min-h-[80vh] ' id='about'>
      <motion.h1
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.6
        }}
       className='text-center  text-5xl text-blue-400 mb-9 '>About me</motion.h1>
      <div className='flex flex-col gap-8 items-center '>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.6
          }}
        >
          <Image
            src={"/vikash.jpg"}
            alt='profile image'
            className='w-52 h-52 rounded-full object-contain  '
            sizes="208px"
            priority={true}
            width={250}
            height={250}
          />
        </motion.div>
       
        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.6
          }}
           className='text-blue-400 text-lg'>Frontend developer!</motion.p>
        <motion.p
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.6
          }}
           className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis blanditiis numquam, illum, tempore accusantium modi quam nam praesentium excepturi voluptatum quod harum magni animi maiores sint culpa, quisquam facilis perferendis ad! Iure, recusandae. Praesentium necessitatibus corrupti totam error, non distinctio modi cumque magni ad aperiam! Excepturi omnis sequi cupiditate. Perferendis.</motion.p>
      </div>
    </div>
  )
}

export default About
