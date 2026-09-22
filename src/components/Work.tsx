"use client";

import { useRouter } from 'next/navigation';
import projects, { Project } from '@/data/projects';
import { IconBrandGithub } from '@tabler/icons-react';

export default function Work() {
  const router = useRouter();

  return (
    <section id="work" className="max-w-6xl mx-auto px-4 py-24">
      <h2 className="text-4xl font-bold mb-8">projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p: Project) => (
          <div
            key={p.slug}
            role="button"
            onClick={() => router.push(`/projects/${p.slug}`)}
            className="cursor-pointer rounded-lg p-6 bg-white/60 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-atkinson)' }}>{p.title}</h3>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer noopener"
                onClick={(e) => e.stopPropagation()}
                className="text-gray-600 hover:text-gray-900"
                title="View on GitHub"
              >
                <IconBrandGithub size={20} />
              </a>
            </div>

            <p className="mt-3 text-sm text-gray-700">{p.description}</p>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t: string) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 border border-gray-200"
                    style={{ fontFamily: 'var(--font-atkinson)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/projects/${p.slug}`);
                }}
                className="text-sm text-blue-600 hover:underline"
                aria-label={`Read more about ${p.title}`}
              >
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
