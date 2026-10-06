import Image from 'next/image';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import projects, { Project } from '@/data/projects';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project: Project | undefined = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24">
        <h2 className="text-2xl font-semibold">Project not found</h2>
        <p className="mt-4 text-gray-600">We couldn&apos;t find the project you&apos;re looking for.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-24" style={{ fontFamily: '"Atkinson Hyperlegible Mono", monospace' }}>
      <Link
        href="/#work"
        className="mb-8 inline-flex min-h-10 items-center gap-2 text-sm text-gray-700 transition-colors hover:text-gray-950"
      >
        <IconArrowLeft size={18} aria-hidden="true" />
        <span>Back to projects</span>
      </Link>
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 max-w-3xl text-gray-700">{project.description}</p>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-xl font-semibold">What I&apos;m building</h2>
        <p className="mt-3 leading-7 text-gray-700">
          {project.whatImBuilding || 'Add a detailed explanation of the problem this project solves and who it is for.'}
        </p>
      </section>

      <section className="mt-10 border-t border-gray-200 pt-8">
        <h2 className="text-xl font-semibold">How I&apos;m building it</h2>
        <p className="mt-3 leading-7 text-gray-700">
          {project.howImBuilding || 'Describe the architecture, tools, and process used to build this project.'}
        </p>
        <h3 className="mt-6 text-base font-semibold">Tech stack</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((technology: string) => (
            <span key={technology} className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm">
              {technology}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t border-gray-200 pt-8">
        <h2 className="text-xl font-semibold">Features</h2>
        {project.features?.length ? (
          <ul className="mt-4 space-y-3">
            {project.features.map((feature) => (
              <li key={feature} className="border-l-2 border-gray-300 pl-4 leading-7 text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-gray-500">Feature details coming soon.</p>
        )}
      </section>

      <section className="mt-10 border-t border-gray-200 pt-8">
        <h2 className="text-xl font-semibold">Images</h2>
        {project.images?.length ? (
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {project.images.map((image) => (
              <figure key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="h-64 w-full rounded-md border border-gray-200 object-cover"
                />
                {image.caption && <figcaption className="mt-2 text-sm text-gray-600">{image.caption}</figcaption>}
              </figure>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-gray-500">Project images coming soon.</p>
        )}
      </section>

      {project.github && (
        <div className="mt-8">
          <a href={project.github} target="_blank" rel="noreferrer noopener" className="text-sm text-blue-600">View source on GitHub</a>
        </div>
      )}
    </div>
  );
}
