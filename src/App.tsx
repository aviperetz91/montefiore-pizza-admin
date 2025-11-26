import { LanguageProvider } from "./context/LanguageContext";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <LanguageProvider>
        <AppLayout />
      </LanguageProvider>
    </>
  );
}

export default App;


