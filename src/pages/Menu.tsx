import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Menu() {
  const { t } = useTranslation();
  return (
    <Row type="horizontal">
      <Heading as="h1">{t("pages.menu.title")}</Heading>
      <p>{t("pages.menu.test")}</p>
    </Row>
  );
}

export default Menu;
