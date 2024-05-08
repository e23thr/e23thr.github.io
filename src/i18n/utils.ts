import { ui, defaultLang } from './ui-translation';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getSwitchLanguageUrl(url: URL) {
  const [, lang, ...rest] = url.pathname.split('/');
  return '/' + [lang === 'en' ? 'th' : 'en', ...rest].join('/');
}
