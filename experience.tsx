'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const experiences = [
  {
    company: 'FusionLabsDMV',
    position: 'Web Developer Intern',
    period: 'Summer 2023',
    description: 'Developed responsive web applications using Next.js and Tailwind CSS. Collaborated with senior developers to implement new features and improve existing ones.',
    projects: [
      'E-commerce platform redesign',
      'Company blog with CMS integration',
      'Internal dashboard for data visualization',
    ],
  },
  {
    company: "Domino's Pizza",
    position: 'Assistant Manager',
    period: '2022 - 2023',
    description: 'Managed daily operations, led a team of 15+ employees, and implemented strategies to improve customer satisfaction and operational efficiency.',
    achievements: [
      'Increased customer satisfaction score by 15%',
      'Reduced order preparation time by 20%',
      'Implemented new training program for new hires',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.company}</CardTitle>
                <CardDescription>{exp.position} | {exp.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      {exp.company === 'FusionLabsDMV' ? 'Projects' : 'Achievements'}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5">
                        {(exp.projects || exp.achievements).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

