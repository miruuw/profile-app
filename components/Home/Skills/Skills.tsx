import SectionHeading from '@/components/Helper/SectionHeading'
import { skillsData } from '@/Data/data'
import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
      <SectionHeading>My Skills</SectionHeading>
      <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center'>
        {skillsData.map((skill, index) => {
          return (
            <div
              key={skill.id || index}
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${index * 150}`}
            >
              <SkillCard skill={skill} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
