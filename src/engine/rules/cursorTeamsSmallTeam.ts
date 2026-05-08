import { AuditFinding, AuditInput } from "@/types/audit"

export function cursorTeamsSmallTeam(input: AuditInput): AuditFinding | null {
  const cursorTeams = input.tools.find((tool) => tool.planId === "cursor_teams")

  if (!cursorTeams) {
    return null
  }

  if (input.teamSize <= 2) {
    return {
      id: "cursor-teams-small-team",

      severity: "high",

      type: "overpaying",

      title: "Cursor Teams is unnecessary for small teams",

      reasoning:
        "Teams with 2 or fewer developers can use individual Cursor Pro plans instead.",

      recommendation:
        "Switch from Cursor Teams to individual Cursor Pro subscriptions.",

      monthlySavings: input.teamSize * 20,
    }
  }

  return null
}
