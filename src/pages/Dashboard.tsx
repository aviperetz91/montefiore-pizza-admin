import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  const { t } = useTranslation();
  return (
    <Row type="horizontal">
      <Heading as="h1">{t("pages.dashboard.title")}</Heading>
      <p>{t("pages.dashboard.test")}</p>
    </Row>
  );
}

export default Dashboard;
