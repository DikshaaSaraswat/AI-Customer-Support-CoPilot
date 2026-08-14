export type Priority = "Low" | "Medium" | "High"

export type AnalysisResult = {
  ticket: string
  queue: string
  priority: Priority
  summary: string
  reply: string
}

const TICKET_KEY = "copilot:ticket"
const RESULT_KEY = "copilot:result"

export const priorityStyles: Record<Priority, string> = {
  Low: "bg-[#22c55e]/15 text-[#4ade80] border-[#22c55e]/30",
  Medium: "bg-[#3b82f6]/15 text-[#60a5fa] border-[#3b82f6]/30",
  High: "bg-[#ef4444]/15 text-[#f87171] border-[#ef4444]/30",
}


// ------------------------------------
// REAL API CALL
// ------------------------------------

export async function analyzeTicket(ticket: string): Promise<AnalysisResult> {
  const response = await fetch("http://127.0.0.1:8000/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ticket,
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to analyze ticket.")
  }

  const data = await response.json()

  return {
    ticket,
    queue: data.queue,
    priority: data.priority,
    summary: data.summary,
    reply: data.reply,
  }
}


// ------------------------------------

export function saveTicket(ticket: string) {
  try {
    sessionStorage.setItem(TICKET_KEY, ticket)
  } catch {}
}

export function loadTicket(): string | null {
  try {
    return sessionStorage.getItem(TICKET_KEY)
  } catch {
    return null
  }
}

export function saveResult(result: AnalysisResult) {
  try {
    sessionStorage.setItem(RESULT_KEY, JSON.stringify(result))
  } catch {}
}

export function loadResult(): AnalysisResult | null {
  try {
    const raw = sessionStorage.getItem(RESULT_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function clearAnalysis() {
  try {
    sessionStorage.removeItem(TICKET_KEY)
    sessionStorage.removeItem(RESULT_KEY)
  } catch {}
}
