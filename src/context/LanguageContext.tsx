import { createContext, useContext, type ReactNode } from "react";
import useLanguage from "../hooks/useLanguage";

interface LanguageContextValue {
  changeLanguage: (lng: string) => Promise<void>;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { changeLanguageAndDirection } = useLanguage();
  return (
    <LanguageContext.Provider
      value={{ changeLanguage: changeLanguageAndDirection }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguageContext must be used within LanguageProvider");
  return context;
};

export { LanguageProvider, useLanguageContext };
