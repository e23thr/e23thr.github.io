interface Project {
  name: string;
  description: string;
  url: string;
  tech: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      class="group block p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-slate-700"
    >
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
        {project.name}
      </h3>
      <p class="mt-2 text-gray-600 dark:text-slate-400">{project.description}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span class="px-3 py-1 text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
