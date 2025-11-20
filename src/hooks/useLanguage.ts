import { useTranslation } from 'react-i18next';
import { useEffect, useCallback } from 'react';

interface UseLanguageResult {
  changeLanguageAndDirection: (lng: string) => Promise<void>;
}

const useLanguage = (): UseLanguageResult => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  
  const isRtlLanguage = (lng: string): boolean => {
    return lng === 'he'; 
  };


  const changeLanguageAndDirection = useCallback(async (lng: string) => {
    await i18n.changeLanguage(lng);

    const isRtl = isRtlLanguage(lng);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    document.documentElement.setAttribute('lang', lng);
  }, [i18n]);


  useEffect(() => {
    if (language) {
      const isRtl = isRtlLanguage(language);
      document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', language);
    }
  }, [language]); 
  

  return { changeLanguageAndDirection };
};

export default useLanguage;