export const MIX_MATCH_PHONE_PLACEHOLDER = "BLANK";

export const MIX_MATCH_HOURS = {
  en: "Monday – Sunday · 7:00–11:00 AM + 2:00–8:00 PM",
  es: "Lunes – Domingo · 7:00–11:00 AM + 2:00–8:00 PM",
} as const;

export const MIX_MATCH_LOCATION = "5M43+7X8, Ciudad Sandino, Nicaragua";

export function getLanguageToggleLabel(language: "en" | "es") {
  return language === "en" ? "ES" : "EN";
}

export function getPhoneLabel(language: "en" | "es") {
  return language === "en" ? `Call to order: ${MIX_MATCH_PHONE_PLACEHOLDER}` : `Llama para ordenar: ${MIX_MATCH_PHONE_PLACEHOLDER}`;
}
