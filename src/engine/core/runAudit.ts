import { AuditInput } from "@/types/audit"

import { cursorTeamsSmallTeam } from "../rules/cursorTeamsSmallTeam"

export async function runAudit(input: AuditInput) {
  const findings = []

  const rules = [cursorTeamsSmallTeam]

  for (const rule of rules) {
    const result = rule(input)

    if (result) {
      findings.push(result)
    }
  }

  return findings
}
