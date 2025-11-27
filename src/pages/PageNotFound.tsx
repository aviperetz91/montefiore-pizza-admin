import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { useGoBack } from "../hooks/useGoBack";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  const { t } = useTranslation();
  const goBack = useGoBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">{t("pages.page_not_found.title")}</Heading>
        <Button onClick={goBack} size="large">
          &larr; {t("pages.page_not_found.go_back")}
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
