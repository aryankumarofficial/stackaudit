import { NextResponse } from "next/server"

import { runAudit } from "@/engine/core/runAudit"

export async function GET() {
  const result = await runAudit({
    teamSize: 2,

    primaryUseCase: "coding",

    tools: [
      {
        toolId: "cursor",

        planId: "cursor_teams",

        monthlySpend: 80,

        seats: 2,
      },
    ],
  })

  return NextResponse.json(result)
}
