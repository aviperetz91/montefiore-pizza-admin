import "i18next";

import translationEN from "../locales/en/translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof translationEN;
    };
  }
}