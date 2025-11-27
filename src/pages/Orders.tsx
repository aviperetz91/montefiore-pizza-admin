import { useTranslation } from "react-i18next";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  const { t } = useTranslation();
  return (
    <Row type="horizontal">
      <Heading as="h1">{t("pages.orders.title")}</Heading>
      <p>{t("pages.orders.test")}</p>
    </Row>
  );
}

export default Bookings;
