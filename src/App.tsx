import { useTranslation } from "react-i18next";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const { t } = useTranslation();
  return (
    <LanguageProvider>
      <h1>{t("welcome_message")}</h1>
    </LanguageProvider>
  );
}

export default App;
