import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from '../components/PageWrapper';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Articles about data visualization, Tableau, Microsoft Power BI, and other data analytics tools (Python, Excel, Alteryx) and practices by Jane Kamata and mldangelo.com',
};

export default function ArticlesPage() {
  return (
    <PageWrapper>
      <article className="post" id="stats">
        <header>
          <div className="title">
            <h2>
              <Link href="/articles">Articles</Link>
            </h2>
          </div>
        </header>
      </article>
    </PageWrapper>
  );
}
