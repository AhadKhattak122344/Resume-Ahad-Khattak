'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const awards = [
  {
    title: 'RSF Scholarship of Excellence',
    organization: 'Rising Scholars Foundation',
    year: '2023',
    description: 'Awarded for outstanding academic performance and community involvement.',
  },
  // Add more awards as needed
]

export default function Awards() {
  return (
    <section id="awards" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Awards & Honors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{award.title}</CardTitle>
                <CardDescription>{award.organization} | {award.year}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

