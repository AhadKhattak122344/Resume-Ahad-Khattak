'use client'

import { motion } from 'framer-motion'
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts'

const skills = [
  { name: 'Java', value: 90, fill: '#007396' },
  { name: 'Python', value: 85, fill: '#3776AB' },
  { name: 'JavaScript', value: 80, fill: '#F7DF1E' },
  { name: 'React', value: 75, fill: '#61DAFB' },
  { name: 'Node.js', value: 70, fill: '#339933' },
  { name: 'SQL', value: 80, fill: '#4479A1' },
  { name: 'Git', value: 85, fill: '#F05032' },
  { name: 'Docker', value: 65, fill: '#2496ED' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="10%"
              outerRadius="80%"
              barSize={10}
              data={skills}
            >
              <RadialBar
                minAngle={15}
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                clockWise
                dataKey="value"
              />
              <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </section>
  )
}

