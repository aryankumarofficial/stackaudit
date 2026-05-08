import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative">
        <div className="container mx-auto px-6 py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-2 text-sm">
              AI Cost Optimization Platform
            </div>

            <h1 className="mt-8 text-7xl font-bold tracking-tight leading-none">
              Stop overpaying
              <br />
              for AI tools.
            </h1>

            <p className="mt-8 max-w-2xl text-xl text-muted-foreground leading-relaxed">
              Analyze Cursor, Claude, ChatGPT, Copilot,
              Gemini, and Windsurf spending with
              deterministic optimization rules.
            </p>

            <div className="mt-10 flex gap-4">
              <Button size="lg">
                Start Audit
              </Button>

              <Button
                variant="outline"
                size="lg"
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}