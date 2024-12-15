'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good morning')
    else if (hour < 18) setGreeting('Good afternoon')
    else setGreeting('Good evening')
  }, [])

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-16 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Ahad Khattak</h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
          <TypeAnimation
            sequence={[
              'Aspiring Computer Scientist',
              2000,
              'Software Engineer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
        <p className="text-xl mb-8">{greeting}, welcome to my portfolio!</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
      >
        <Image
          src="/placeholder.svg"
          alt="Ahad Khattak"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  )
}

