export type ToolId =
  | "cursor"
  | "copilot"
  | "claude"
  | "chatgpt"
  | "gemini"
  | "windsurf"

export interface UserToolInput {
  toolId: ToolId

  planId: string

  monthlySpend: number

  seats: number
}

export interface AuditInput {
  teamSize: number

  primaryUseCase: "coding" | "writing" | "research" | "mixed"

  tools: UserToolInput[]
}

export interface AuditFinding {
  id: string

  severity: "high" | "medium" | "low"

  type: "overpaying" | "consolidation" | "wrong_plan"

  title: string

  reasoning: string

  recommendation: string

  monthlySavings: number
}
