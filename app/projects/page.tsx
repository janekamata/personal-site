import React from 'react';

import type { Metadata } from 'next';

import Cell from '@/components/Projects/Cell';
import data from '@/data/projects';

import PageWrapper from '../components/PageWrapper';

export const metadata: Metadata = {
  title: 'Projects',
  description: "Learn about Jane Kamata's projects.",
};

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2>Projects</h2>
          </div>
        </header>
        {data.map((project) => (
          <Cell data={project} key={project.title} />
        ))}
      </article>
    </PageWrapper>
  );
}
