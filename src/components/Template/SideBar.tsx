'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Jane Kamata" width={200} height={200} priority />
        </Link>
        <header>
          <h2>Jane Kamata</h2>
          <p>
            <a href="mailto:jane.m.kamata@gmail.com">jane.m.kamata@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Jane. I am a{' '}
          <a href="https://www.northeastern.edu/">Northeastern University</a> student graduating
          Spring 2026. Previously, I was a Business Systems Analyst co-op at{' '}
          <a href="https://baincapital.com">Bain Capital</a>. I am also an incoming summer Analytics
          intern at <a href="https://www.forvismazars.us/">Forvis Mazars</a>, and a two-time{' '}
          <a href="https://www.tableau.com/community/community-leaders/ambassadors">
            Tableau Ambassador and active Tableau community member
          </a>
          .
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Jane Kamata <Link href="/">mldangelo.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
