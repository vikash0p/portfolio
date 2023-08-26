"use client"
import Image from 'next/image'
import React from 'react'
import ReactTyped from 'react-typed'
import { DiGithubBadge } from 'react-icons/di';
import { SiNetlify, SiVercel } from 'react-icons/si';
import { AiFillInstagram } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

export const social = [
  {
    id: 1,
    icon: <DiGithubBadge />,
    href: 'https://github.com/vikash0p'
  },
  {
    id: 2,
    icon: <SiNetlify />,
    href: "https://app.netlify.com/teams/vikash2000158/overview",
  },
  {
    id: 3,
    icon: <AiFillInstagram />,
    href: 'https://www.instagram.com/v_pandat000/'
  },
  {
    id: 4,
    icon: <SiVercel />,
    href: "https://vercel.com/vikash0p"
  },



]

const Hero = () => {
  return (
    <section className='w-full min-h-[90vh]  mb-10 lg:mb-0 flex flex-col lg:flex-row place-items-center gap-9' id='home'>
      <div className='flex-1 flex flex-col gap-4 '>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.6
          }}
          className='text-3xl lg:text-5xl'>Hi, I am Vikash pandat.</motion.p>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.6
          }}
          className='text-lg lg:text-2xl text-blue-400 font-semibold'>
          <ReactTyped
            strings={[
              'Frontend developer',
              'ReactJs developer',
              'NextJs developer']}
            typeSpeed={40}
            backSpeed={50}
            loop />
          </motion.p>
        <motion.p
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.6
          }}
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quo ut tempora? Iste pariatur repellat, nobis, voluptas a id explicabo voluptatum doloremque doloribus molestias cumque amet expedita earum nesciunt perferendis.</motion.p>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.6
          }}
          className='flex flex-row gap-10'>
          <button type="button" className='px-7 rounded-lg py-2 border text-blue-400 transition-colors duration-200 hover:bg-blue-800 hover:text-white' >Hire Me</button>
          <button type="button" className='px-7 rounded-lg py-2 border text-blue-400 transition-colors duration-200 hover:bg-blue-800 hover:text-white' >Let&apos;	Talk</button>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.6
          }}
          className='flex items-center justify-start mt-4 gap-5'>
          {
            social.map((value, index) => {
              return (
                <a key={index} href={value.href}
                 target='_blank'
                  aria-label="Read more about the portfolio links" >
                  <h4 className='p-3 text-white transition-colors duration-300 border rounded-full border-gray hover:border-blue-600 hover:text-blue-600 '>{value.icon} </h4>
                </a>
              )
            })
          }
        </motion.div>
      </div>
      <div className='flex-1 '>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.6
          }}
         >
          <Image
            src={"/vikash.png"}
            alt='profile image'
            className='w-96 h-96 rounded-full object-contain hidden lg:block'
            sizes='400px'
            priority={true}
            width={300}
            height={300}
            // quality={60}
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
