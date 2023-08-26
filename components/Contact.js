
"use client"
import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';
import React from 'react';


const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" id='contact'>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.6
        }}
       className=" p-8 rounded shadow-md w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block font-medium mb-1">Name:</label>
            <input
              type="text"
              className="w-full border rounded py-2 px-3 bg-black"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Email:</label>
            <input
              type="email"
              className="w-full border rounded py-2 px-3 bg-black"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Message:</label>
            <textarea
              className="w-full border rounded py-2 px-3 bg-black"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="border border-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
