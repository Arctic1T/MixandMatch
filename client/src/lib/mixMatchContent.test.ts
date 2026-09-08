import { describe, expect, it } from "vitest";
import {
  MIX_MATCH_HOURS,
  MIX_MATCH_LOCATION,
  MIX_MATCH_PHONE_PLACEHOLDER,
  getLanguageToggleLabel,
  getPhoneLabel,
} from "./mixMatchContent";

describe("Mix and Match content helpers", () => {
  it("keeps the supplied bilingual hours and location", () => {
    expect(MIX_MATCH_HOURS.en).toContain("Monday – Sunday");
    expect(MIX_MATCH_HOURS.es).toContain("Lunes – Domingo");
    expect(MIX_MATCH_LOCATION).toContain("Ciudad Sandino");
  });

  it("returns the opposite language toggle", () => {
    expect(getLanguageToggleLabel("en")).toBe("ES");
    expect(getLanguageToggleLabel("es")).toBe("EN");
  });

  it("keeps the phone contact visibly pending until the owner provides it", () => {
    expect(MIX_MATCH_PHONE_PLACEHOLDER).toBe("BLANK");
    expect(getPhoneLabel("en")).toContain("BLANK");
    expect(getPhoneLabel("es")).toContain("BLANK");
  });
});
