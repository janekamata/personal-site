import React from 'react';

import type { Metadata } from 'next';

import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Certifications from '@/components/Resume/Certifications';
import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import Skills from '@/components/Resume/Skills';
import certifications from '@/data/resume/certifications';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    "Jane Kamata's Resume. Forvis Mazars, Bain Capital, Tableau, and Northeastern University.",
};

const sections = [
  { name: 'Education', id: 'education' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Courses', id: 'courses' },
  { name: 'References', id: 'references' },
];

export default function ResumePage() {
  return (
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>Resume</h2>
          <a href="files/resume.pdf" download="Jane Kamata Resume">
            <p>
              <FontAwesomeIcon size={'lg'} icon={faDownload} /> Download PDF Resume
            </p>
          </a>
          <div className="link-container">
            {sections.map((section) => (
              <h4 key={section.id}>
                <a href={`#${section.id}`}>{section.name}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>

      <section id="education" className="education">
        <div className="link-to" />
        <Education data={degrees} />
      </section>

      <section id="experience" className="experience">
        <div className="link-to" />
        <Experience data={work} />
      </section>

      <section id="skills" className="skills">
        <div className="link-to" />
        <Skills skills={skills} categories={categories} />
      </section>

      <section id="certifications" className="certifications">
        <div className="link-to" />
        <Certifications data={certifications} />
      </section>

      <section id="courses" className="courses">
        <div className="link-to" />
        <Courses data={courses} />
      </section>

      <section id="references" className="references">
        <div className="link-to" />
        <References />
      </section>
    </article>
  );
}
