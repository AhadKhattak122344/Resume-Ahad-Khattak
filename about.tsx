'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { DownloadIcon } from 'lucide-react'
import { Timeline, TimelineItem } from '@/components/ui/timeline'

export default function About() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              I am an aspiring Computer Scientist and Software Engineer with a passion for creating innovative solutions to complex problems. My journey in the world of technology has equipped me with a diverse skill set and a keen eye for detail.
            </p>
            <p className="mb-4">
              As a multilingual individual fluent in English, Urdu, and Pashto, I bring a unique perspective to my work and can effectively communicate with diverse teams and clients.
            </p>
            <Button className="mt-4">
              <DownloadIcon className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Education & Career Timeline</h3>
            <Timeline>
              <TimelineItem title="Montgomery College" date="2021 - Present">
                Pursuing Associate's in Computer Science
              </TimelineItem>
              <TimelineItem title="FusionLabsDMV" date="2023">
                Web Developer Intern
              </TimelineItem>
              <TimelineItem title="Domino's Pizza" date="2022 - 2023">
                Assistant Manager
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

