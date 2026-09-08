import { describe, expect, it } from "vitest";

describe("Mix and Match branding", () => {
  it("exposes the corrected website title", () => {
    expect(import.meta.env.VITE_APP_TITLE).toBe("Mix and Match");
  });
});
