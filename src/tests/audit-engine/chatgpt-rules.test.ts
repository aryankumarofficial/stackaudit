// example test for setup testings
import { describe, it, expect } from "vitest"

describe("ChatGPT recommendation logic", () => {
  it("recommends plus for solo users", () => {
    const seats = 1
    const currentPlan = "team"

    const shouldDowngrade = currentPlan === "team" && seats <= 2

    expect(shouldDowngrade).toBe(true)
  })
})
