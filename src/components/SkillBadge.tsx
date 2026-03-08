interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span class="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 font-medium">
      {skill}
    </span>
  );
}
