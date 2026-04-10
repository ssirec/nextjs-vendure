"use client";

import { useLocale } from "next-intl";

export function LanguagePicker() {
  const locale = useLocale();
  return <span>{locale}</span>;
}
