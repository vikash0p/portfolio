"use client"
import { fadeIn } from '@/variants'
import { motion } from 'framer-motion'
import React from 'react'

const Education = () => {
  return (
    <div className='w-full min-h-screen ps-5' id='education'>
      <motion.h1
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.6
        }}
        className='text-center text-5xl text-blue-400 mb-9'>My Jounary</motion.h1>
      <section className='flex flex-col lg:flex-row gap-9'>
        <div className='flex-1 flex flex-col gap-6'>
          <motion.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: false,
              amount: 0.6
            }}
            className='text-2xl'>Education</motion.h1>

          <ol className="relative border-l border-gray-200 ">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: false,
                  amount: 0.6
                }}
              >
                <h3 className="flex items-center mb-1 text-lg font-semibold text-white ">BCA</h3>
                <h4 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">XYZ university</h4>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

              </motion.div>

            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: false,
                  amount: 0.6
                }}
              >
                <h3 className="mb-1 text-lg font-semibold  text-white">senior secondary school</h3>
                <h4 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">XYZ School</h4>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
              </motion.div>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: false,
                  amount: 0.6
                }}>
                <h3 className="mb-1 text-lg font-semibold text-white">secondary school</h3>
                <h4 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">XYZ School</h4>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
              </motion.div>
            </li>
          </ol>




        </div>

        <div className='flex-1 flex flex-col gap-6'>
          <motion.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: false,
              amount: 0.6
            }}
            className='text-2xl'>Experience</motion.h1>
          <ol className="relative border-l border-gray-200 ">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: false,
                  amount: 0.6
                }}>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-white ">frontend developer</h3>
                <h4 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">XYZ company</h4>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

              </motion.div>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: false,
                  amount: 0.6
                }}>
                <h3 className="mb-1 text-lg font-semibold  text-white">frontend developer</h3>
                <h4 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">XYZ Company</h4>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
              </motion.div>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: false,
                  amount: 0.6
                }}>
                <h3 className="mb-1 text-lg font-semibold text-white">Frontend developer</h3>
                <h4 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">XYZ Companay</h4>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
              </motion.div>
            </li>
          </ol>


        </div>

      </section>
    </div>
  )
}

export default Education
