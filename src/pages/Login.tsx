import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  const { t } = useTranslation();
  return <LoginLayout>{t("pages.login.title")}</LoginLayout>;
}

export default Login;
