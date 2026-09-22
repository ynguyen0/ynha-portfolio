import projects, { Project } from '@/data/projects';

interface Props {
  params: { slug: string };
}

export default function ProjectPage({ params }: Props) {
  const project: Project | undefined = projects.find((p) => p.slug === params.slug);

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
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-gray-700">{project.description}</p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Tech stack</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span key={t} className="text-sm px-3 py-1 rounded-full bg-gray-100 border border-gray-200">{t}</span>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">About</h3>
        <p className="mt-2 text-gray-700">Here you can add a longer writeup about the project: goals, approach, challenges solved, architecture, and anything else you&apos;d like to showcase.</p>
      </div>

      {project.github && (
        <div className="mt-8">
          <a href={project.github} target="_blank" rel="noreferrer noopener" className="text-sm text-blue-600">View source on GitHub</a>
        </div>
      )}
    </div>
  );
}
