export default function ContactCTA() {
  return (
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Hire Me
      </h2>
      <p class="text-gray-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
        I'm available for freelance projects. Let's build something great together!
      </p>
      <a
        href="https://fastwork.co/user/praphan"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-600 dark:bg-sky-400 dark:hover:bg-sky-500 text-white dark:text-slate-900 font-semibold rounded-lg transition-colors"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        Contact via Fastwork
      </a>
    </div>
  );
}
