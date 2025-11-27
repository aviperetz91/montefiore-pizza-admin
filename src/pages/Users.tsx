import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";

function NewUsers() {
  const { t } = useTranslation();
  return <Heading as="h1">{t("pages.users.title")}</Heading>;
}

export default NewUsers;
