import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";

function Settings() {
  const { t } = useTranslation();
  return <Heading as="h1">{t("pages.settings.title")}</Heading>;
}

export default Settings;
