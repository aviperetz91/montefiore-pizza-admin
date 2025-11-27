import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  const { t } = useTranslation();
  return (
    <>
      <Heading as="h1">{t("pages.account.title")}</Heading>

      <Row>
        <Heading as="h3">{t("pages.account.update_user_data.title")}</Heading>
        <p>{t("pages.account.update_user_data.description")}</p>
      </Row>

      <Row>
        <Heading as="h3">{t("pages.account.update_password.title")}</Heading>
        <p>{t("pages.account.update_password.description")}</p>
      </Row>
    </>
  );
}

export default Account;
