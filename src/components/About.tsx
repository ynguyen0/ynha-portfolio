"use client";
import Image from 'next/image';
import { IconDownload, IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons-react';
import { useState, useEffect } from "react";

const roles = ["fullstack dev", "design enthusiast", "open to work!"];

function TextCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeSlide = (newIndex: number) => {
    setVisible(false);

    setTimeout(() => {
      setIndex((newIndex + roles.length) % roles.length);
      setVisible(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(index + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        fontFamily: 'var(--font-atkinson)'
      }}
    >
      <button onClick={() => changeSlide(index - 1)}>
        {"<"}
      </button>

      <div
        style={{
          width: "200px",
          textAlign: "center",
          height: "1.5em"
        }}
      >
        <span
          style={{
            display: "inline-block",
            transition: "opacity 0.3s ease",
            opacity: visible ? 1 : 0,
            fontFamily: 'var(--font-atkinson)'
          }}
        >
          {roles[index]}
        </span>
      </div>

      <button onClick={() => changeSlide(index + 1)}>
        {">"}
      </button>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-32 mr-30">
      <div className="grid grid-cols-2 gap-16 items-center justify-items-center">
        <div className="justify-self-start max-w-2xl">
          <h1 className="text-5xl mb-6 mt-10 ml-7">
            <span style={{ fontFamily: 'var(--font-doto)', fontWeight: 'bold' }}>hello! </span>
            <span style={{ fontFamily: 'var(--font-atkinson)' }}>i&apos;m ynha.</span>
          </h1>
          <p className="text-[1.0625rem] mb-8 p-6 rounded-lg" style={{ color: 'var(--nav-bg)', backgroundColor: 'rgba(255, 255, 255, 0.5)', fontFamily: 'var(--font-atkinson)' }}>
            Hi! I&apos;m an MSSE student at SJSU specializing in Cloud Computing. I love designing unique interfaces and developing the systems behind them. Also familiar with deep learning, NLP, and data pipelines. Always looking for opportunities where good engineering and thoughtful design meet. ദ്ദി^ヮ^˶).ᐟ
          </p>
          <div className="flex gap-8 items-center ml-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:opacity-70 transition" title="GitHub">
              <IconBrandGithub size={35} stroke={2} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:opacity-70 transition" title="LinkedIn">
              <IconBrandLinkedin size={35} stroke={2} />
            </a>
            <a href="mailto:your-email@example.com" className="text-2xl hover:opacity-70 transition" title="Email">
              <IconMail size={35} stroke={2} />
            </a>
            <a href="/resume.pdf"
              download
              className="inline-flex px-4 py-2 rounded-full font-medium transition hover:opacity-90 items-center gap-2 ml-10"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--nav-bg)',
                border: '2px solid var(--nav-bg)',
                fontFamily: 'var(--font-atkinson)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--nav-bg)';
                e.currentTarget.style.color = 'var(--nav-text)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--nav-bg)';
              }}
            >
              <IconDownload size={18} stroke={2} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
              download CV
            </a>
          </div>
        </div>
        <div className="w-80 flex flex-col mt-15">
          <Image
            src="/headshot.jpg"
            alt="Ynha"
            width={400}
            height={400}
            priority
            className="w-full h-80 object-cover rounded-lg"
          />

          <div style={{ textAlign: 'center', marginTop: '24px', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '12px 20px', borderRadius: '8px', display: 'inline-block', margin: '24px auto 0' }}>
            <TextCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
