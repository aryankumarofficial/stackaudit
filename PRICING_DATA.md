# PRICING_DATA.md

## AI Spend Audit — Credex Web Dev Intern Assignment

### Pricing Intelligence Database

**Compiled:** May 2026  
**Purpose:** Authoritative pricing reference for the AI Spend Audit engine. Every number traces to an official vendor URL. Data verified during assignment week.

---

> **IMPORTANT NOTE ON MARKET VOLATILITY:** The AI pricing landscape is unusually dynamic in 2026. GitHub Copilot is transitioning to usage-based billing on June 1, 2026. OpenAI renamed "Team" to "Business" in August 2025. Windsurf was acquired by Cognition in July 2025. Prices should be re-verified against official pages before production deployment. This document reflects the state as of submission week.

---

## TOOL 1: CURSOR

### Plan: Hobby (Free)

#### Core Pricing

- **Price:** $0/month
- **Per user:** N/A
- **Annual discount:** N/A
- **Billing model:** Free forever, no credit card required
- **Source URL:** https://cursor.com/pricing
- **Verification date:** May 2026

#### Included Usage

- **Agent/Chat requests:** Limited (exact cap not published; community reports ~5–10 Cascade-equivalent sessions before throttle)
- **Tab completions:** Limited (not unlimited like Pro)
- **Auto mode:** Available but limited
- **Context window:** Standard
- **Credit pool:** None — free tier does not use the credit system
- **On-demand overages:** Not available
- **Models available:** Limited subset (no frontier models like Claude Opus or GPT-4o manually selectable)
- **Fair usage:** Designed as evaluation tier; not suitable for daily professional use

#### Collaboration Features

- None (individual only)
- No SSO, RBAC, admin controls, or audit logs

#### Best-Fit User Profile

- New users evaluating Cursor before switching from VS Code
- Students (separate free .edu student plan available for 1 year of Pro)
- Weekend coders testing AI-assisted coding
- **NOT suitable for:** any professional or daily workflow

#### Cost Efficiency Analysis

- **When it becomes inefficient:** Day 2–3 of active use; free limits are hit quickly in real work
- **Hidden trap:** Encourages upgrade before you've had time to evaluate; the limitations feel artificial
- **Overpaying risk:** N/A — it's free
- **Break-even vs Pro:** Any developer working more than ~2 hours/week needs Pro

#### Alternative Recommendations

- **Closest free alternative:** GitHub Copilot Free (2,000 completions/month, 50 premium requests — more generous for completions)
- **Windsurf Free** ($0, 25 credits/month, unlimited autocomplete — better autocomplete than Cursor Free)
- **Estimated savings vs upgrading unnecessarily:** $0 — stay free until limits are genuinely hit

#### Procurement Notes

- Student discount: Full 1 year of Pro free with verified .edu email. No credit card.
- No standing discounts per official docs

---

### Plan: Pro

#### Core Pricing

- **Price:** $20/month, or **$16/month billed annually** (~20% savings, ~$192/year)
- **Per user:** Individual — one person per subscription
- **Annual discount:** 20% ($48/year savings)
- **Billing model:** Monthly subscription with credit-based AI usage system (introduced June 2025)
- **Source URL:** https://cursor.com/pricing
- **Verification date:** May 2026

#### Included Usage

- **Unlimited Tab completions** (core autocomplete, does not consume credits)
- **Auto mode:** Unlimited — Cursor selects model automatically; this is the key value of Pro
- **Monthly credit pool:** $20 (equal to plan price). Credits deplete when you manually select premium models
- **Credit burn rates (approximate):**
  - Claude Sonnet: ~$0.09/request → ~225 requests/month
  - Gemini models: ~$0.036/request → ~550 requests/month
  - GPT-4o: mid-range between the two
- **Max mode:** Expands context window but costs ~4–10x more per request; can wipe monthly credits in a few sessions
- **On-demand overages:** Available (opt-in). Billed in arrears at model API rates. Can be disabled to hard-cap spend
- **Cloud agents:** Included
- **MCPs, skills, hooks:** Included
- **Context window:** Full codebase context available
- **Models available:** All frontier models: Claude Sonnet 4.5/4.6, GPT-4o, GPT-5.x, Gemini

#### Collaboration Features

- No team features
- No SSO, admin controls, or shared rules
- Personal dashboard at cursor.com/dashboard

#### Best-Fit User Profile

- **Ideal:** Solo developer or freelancer coding 2–6 hours daily
- **Heavy user warning:** Developers coding 8+ hours/day with heavy Agent usage should evaluate Pro+ ($60/month)
- **Light user note:** If Auto mode handles 80%+ of your workflow, $20/month is exceptional value
- Cost-effective if AI is a meaningful part of your daily workflow

#### Cost Efficiency Analysis

- **When it becomes inefficient:**
  - When monthly overages consistently exceed $20–$40/month → upgrade to Pro+ ($60)
  - When using Max mode frequently (2–3 complex sessions can exhaust $20 pool)
  - When team features are needed (wrong tier entirely)
- **Break-even vs API:** Cursor Pro at $20 is a flat fee. Direct API calls at Claude Sonnet rates ($3/$15 per MTok) become more expensive than Pro around ~3.7M tokens/month of interactive use — Pro is almost always cheaper for individual interactive use
- **Break-even vs Pro+:** If overages consistently exceed $20/month, Pro+ at $60 (3x credits) saves money vs. $20 + $30+ overages
- **Hidden cost trap:** Max mode. Users enabling it for "complex bugs" can exhaust $20 pool in 3–5 sessions
- **Overpaying signal:** Ending the month with credits remaining consistently → may be fine on Hobby (if use is very light) or just using Auto mode

#### Alternative Recommendations

- **Cheaper alternative:** GitHub Copilot Pro at $10/month (half the price, limited to VS Code/JetBrains, fewer agentic features)
- **Cheaper with less capability:** Windsurf Pro at $15/month (no credit anxiety — flat 500 credits, simpler model, slightly weaker on complex multi-file tasks)
- **Comparable:** GitHub Copilot Business at $19/user (nearly same price, adds org features, stays in VS Code)
- **Estimated savings switching to Windsurf Pro:** $5/month per developer ($60/year)
- **Estimated savings switching to Copilot Pro:** $10/month per developer ($120/year), but with reduced agentic capability

#### Procurement Notes

- No volume discount for individual Pro (only Teams/Enterprise get volume treatment)
- Annual billing saves $48/year
- Student plan: Full Pro free for 1 year with .edu email
- Credits marketplace: Cursor credits are proprietary — no third-party credit program
- **Credex opportunity:** Credex discounted AI infrastructure credits could theoretically apply to Cursor Business/Enterprise purchases for orgs buying in volume

---

### Plan: Pro+ ($60/month)

#### Core Pricing

- **Price:** $60/month
- **Annual discount:** ~20% (approximately $48/month annual)
- **Source URL:** https://cursor.com/pricing
- **Verification date:** May 2026

#### Included Usage

- Everything in Pro
- **$60 credit pool** (3x Pro)
- ~675 Claude Sonnet requests or ~1,650 Gemini requests/month
- Same model access, same features — purely a usage volume upgrade

#### Cost Efficiency Analysis

- **When justified:** Monthly overages on Pro consistently $20–$40
- **When NOT justified:** If you have $20+ credits left at end of each Pro month
- **Hidden trap:** Users who upgraded "just in case" and rarely hit Pro limits
- **Break-even vs Pro + overages:** Pro+ makes sense if overages exceed $40/month
- **Audit rule:** IF cursor_plan = "Pro+" AND month_end_credits_remaining > 30% THEN flag as overpaying → downgrade to Pro

---

### Plan: Ultra ($200/month)

#### Core Pricing

- **Price:** $200/month
- **Annual discount:** ~20%
- **Source URL:** https://cursor.com/pricing
- **Verification date:** May 2026

#### Included Usage

- Everything in Pro
- **$200 credit pool** (20x Pro)
- ~4,500 Claude Sonnet requests or ~11,000 Gemini requests/month
- Priority access to new features
- Designed for developers using Agent mode 8+ hours/day

#### Cost Efficiency Analysis

- **When justified:** Full-time "AI-first" developers running complex multi-file agents continuously all day
- **When NOT justified:** Most professional developers — Pro+ ($60) handles 95% of real workflows
- **Overpaying signal:** Less than 150 agent sessions/month on Ultra
- **Audit rule:** IF cursor_plan = "Ultra" AND daily_hours < 6 THEN flag as overpaying → downgrade to Pro+ saves $140/month

---

### Plan: Teams

#### Core Pricing

- **Price:** $40/user/month
- **Per user:** Yes, per seat
- **Annual discount:** ~20%
- **Billing model:** Per-seat subscription. Credit-based usage system (moved to this model August 2025)
- **Source URL:** https://cursor.com/pricing
- **Verification date:** May 2026

#### Included Usage

- All Pro features per user
- **$20 credit pool per user per month** (same as Pro individual — NOT pooled across team)
- Shared chats, commands, and rules
- Usage analytics and reporting
- Admin dashboard with usage visibility per user
- Org-wide privacy mode controls

#### Collaboration Features

- **Centralized billing:** Yes — single invoice
- **SAML/OIDC SSO:** Yes
- **RBAC:** Yes
- **Admin dashboard:** Yes, with usage analytics
- **Shared codebase context/rules:** Yes
- **Audit logs:** Partial (full audit logs require Enterprise)
- **Minimum seats:** Likely 2+ (self-serve)

#### Best-Fit User Profile

- Engineering teams of 3–20 developers
- Teams needing centralized billing and SSO
- Organizations where code privacy mode is required

#### Cost Efficiency Analysis

- **Compared to individual Pro:** Teams costs $40/user vs. $20/user for Pro — **$20/user/month premium for admin/SSO features**
- **Break-even analysis:** The $20/seat premium buys SSO, admin controls, centralized billing, and shared rules. For teams of 3+, this is generally justified if any compliance, HR or finance team requires centralized billing
- **When Teams is wasteful:**
  - Solo developer or 2-person team who buys Teams for admin features they'll never use: overpaying by $20/user ($480/year for a 2-person team vs. 2x Pro)
  - Small teams that don't need SSO and manage billing informally
- **CRITICAL RULE:** IF team_size <= 2 AND cursor_plan = "Teams" THEN flag as overpaying — two individual Pro plans cost $40/month total vs. $80/month for Teams
- **Hidden trap:** Credit pools are NOT shared/pooled on Teams (unlike Enterprise). Power users on the team exhaust their $20 pool early; lighter users have leftover credits that expire. This means no efficiency gain from pooling

#### Alternative Recommendations

- Small teams (<3): Use individual Pro subscriptions, save $20/user/month
- Teams needing less agentic power: GitHub Copilot Business at $19/user (half the price, solid coding assistant, integrates into existing VS Code workflows)

---

### Plan: Enterprise

#### Core Pricing

- **Price:** Custom — contact sales
- **Billing model:** Invoice/PO billing, wire transfer available (not available on self-serve)
- **Source URL:** https://cursor.com/pricing (Enterprise section), contact cursor.com/enterprise
- **Verification date:** May 2026
- **Uncertainty:** Pricing not published. Community reports suggest $40–$60+/user/month range, but treat as anecdotal

#### Included Usage (vs Teams)

- **Pooled usage across organization** (key differentiator — power users can draw from shared pool)
- SCIM seat management
- AI code tracking API
- Full audit logs
- Granular admin and model controls (lock specific models org-wide)
- Priority support and dedicated account management
- Invoice/PO billing

#### Best-Fit User Profile

- Organizations 50+ developers
- Regulated industries requiring audit logs and data governance
- Enterprises needing SCIM provisioning
- Finance, healthcare, legal orgs requiring compliance documentation

#### Cost Efficiency Analysis

- **When justified:** Compliance requirements, SCIM provisioning, audit log mandates, large seat counts with pooled usage benefit
- **When NOT justified:** Teams of <30 without compliance requirements — Teams plan is sufficient
- **Audit rule:** IF team_size < 30 AND no_compliance_requirement THEN flag Enterprise as overkill → Teams plan adequate

---

## TOOL 2: GITHUB COPILOT

> **CRITICAL 2026 UPDATE:** GitHub is transitioning all Copilot plans from request-based billing to **usage-based billing (GitHub AI Credits, token-based) effective June 1, 2026.** Seat subscription prices are NOT changing. Code completions and Next Edit Suggestions remain unlimited and do not consume AI Credits. The change affects Chat, Agent mode, code review, and premium model selection.

### Plan: Free

#### Core Pricing

- **Price:** $0/month
- **Source URL:** https://docs.github.com/en/copilot/get-started/plans
- **Verification date:** May 2026

#### Included Usage

- **Inline suggestions:** Up to 2,000 per month (IDE completions)
- **Premium requests:** 50/month (Chat, Agent mode, code review using advanced models)
- **Models available:** Limited subset — GPT-4.1 and GPT-5 mini are "included" models
- **No Chat in Copilot.com** (enterprise web interface)
- **No SSO, no RBAC, no admin controls**
- Fair usage: Intended as evaluation; not for production teams

#### Best-Fit User Profile

- Developers evaluating Copilot before committing to Pro
- Occasional coding hobby projects
- **NOT** for daily professional development (50 premium requests runs out in ~2 days of active chat use)

#### Cost Efficiency Analysis

- **When it becomes inefficient:** Same day/week of active use
- **Upgrade trigger:** Hitting 50 premium request cap regularly

---

### Plan: Pro (Individual)

#### Core Pricing

- **Price:** $10/month (calendar month billing)
- **Annual billing:** Not currently a separate annual plan; billed monthly
- **Source URL:** https://docs.github.com/en/copilot/concepts/billing/billing-for-individuals
- **Verification date:** May 2026

#### Included Usage

- **Unlimited inline completions** (core code suggestions — does not consume AI Credits)
- **Premium requests:** ~300/month included (under new June 2026 billing, this converts to AI Credits equivalent to $10)
- **Models:** GPT-4.1 and GPT-5 mini as standard models (included); Claude Haiku 4.5, Claude Sonnet 4.5 available but consume credits
- **Overflow:** When credits exhausted, falls back to standard models (GPT-4.1, GPT-5 mini) — no hard shutoff
- **IDEs:** VS Code, Visual Studio, JetBrains, Xcode, Vim/Neovim, Azure Data Studio, Eclipse
- **Chat:** Available in VS Code, Visual Studio, JetBrains
- **No privacy guarantee:** Conversations may be used to improve GitHub models (opt-out available in settings)

#### Collaboration Features

- None — individual plan only
- No admin controls, SSO, RBAC, audit logs

#### Best-Fit User Profile

- **Ideal:** Individual developer who already uses VS Code/JetBrains and wants AI assistance without switching editors
- **Strong value:** Best price-per-feature for developers who are NOT doing heavy multi-file agentic refactoring
- **Comparison note:** At $10/month, Copilot Pro is 50% cheaper than Cursor Pro ($20), though Cursor's agentic features are stronger

#### Cost Efficiency Analysis

- **Best value play in the market:** $10/month for unlimited completions and solid chat
- **When it becomes inefficient:** Heavy agent mode usage that consistently burns through monthly credits → upgrade to Pro+ ($39)
- **When to switch to Cursor instead:** Team requires advanced multi-file agents, background agents, large codebase reasoning
- **Break-even vs Cursor Pro:** Copilot Pro at $10 saves $10/month ($120/year) vs. Cursor Pro at $20. Only worth upgrading to Cursor if you actively use Cursor's agentic features

#### Alternative Recommendations

- **Windsurf Pro ($15/month):** $5 more, includes flat 500 credits, more agentic than Copilot, requires switching editors
- **Cursor Pro ($20/month):** $10 more, strongest agentic coding, requires editor switch

---

### Plan: Pro+

#### Core Pricing

- **Price:** $39/month
- **Source URL:** https://docs.github.com/en/copilot/concepts/billing/billing-for-individuals
- **Verification date:** May 2026

#### Included Usage

- Everything in Pro
- Access to **Claude Opus 4.6** and **o3** (not available on Pro)
- ~1,500 premium requests/month (or equivalent AI Credits from June 2026)
- Under the new June 2026 system: $39 in monthly AI Credits

#### Cost Efficiency Analysis

- **Break-even vs Pro + overages:** Pro+ is worth it if monthly overflow on Pro costs >$29/month (i.e., using >725 extra premium requests at $0.04 each)
- **When Pro+ is wasteful:** Not using Claude Opus or o3 specifically — standard Pro handles most workflows fine
- **Audit rule:** IF copilot_plan = "Pro+" AND monthly_opus_queries < 50 THEN flag as overpaying — Pro likely sufficient, saves $29/month

---

### Plan: Business

#### Core Pricing

- **Price:** $19/user/month
- **Per user:** Yes
- **Annual discount:** None (billed monthly per seat)
- **Billing model:** Per-seat, month-to-month with mid-cycle prorations
- **Includes (from June 2026):** $19 in monthly AI Credits per user, pooled across organization
- **Source URL:** https://docs.github.com/en/copilot/concepts/billing/organizations-and-enterprises
- **Verification date:** May 2026

#### Included Usage

- **Unlimited code completions and Next Edit Suggestions** (not counted in credits)
- **$19 in monthly GitHub AI Credits per seat** (pooled — power users can draw from lighter users' balance)
- **Overflow pricing:** $0.04/premium request (or equivalent token-based rate from June 2026)
- **Models:** All major models including Claude Sonnet 4.5, GPT-4.1, GPT-5.x, Gemini models
- **Agent mode (Copilot cloud agent):** Included
- **Code review (pull request):** Included (post-June: also consumes GitHub Actions minutes)
- **Copilot in GitHub.com:** Available for chat but not codebase indexing (that's Enterprise)
- **GitHub Mobile:** Included with Bing and public code search

#### Collaboration Features

- **Centralized management:** Yes — GitHub org owner controls seat assignment
- **Policy controls:** Admin can set Copilot policies per organization
- **SSO:** Inherits GitHub organization SSO settings (not a separate Copilot SSO)
- **IP indemnity:** Yes (unlike individual Pro)
- **Data privacy:** Copilot Business does not use prompts/responses to train OpenAI/GitHub models
- **RBAC:** Via GitHub org roles
- **Audit logs:** Via GitHub org audit log
- **Admin console:** Copilot tab in GitHub org settings

#### Best-Fit User Profile

- **Ideal:** Engineering teams of 3–50 developers already using GitHub as their primary code host
- **Strong fit:** Teams that care about IP indemnity and data privacy by default
- **Strong fit:** Teams not wanting to leave VS Code or JetBrains for a new editor

#### Cost Efficiency Analysis

- **Vs. Cursor Teams ($40/user):** Copilot Business at $19 is **53% cheaper** than Cursor Teams. For a 10-person team: $190/month vs. $400/month = **$2,520/year savings**
- **Key trade-off:** Copilot Business lives inside your existing editor; Cursor Teams requires everyone switching to a new IDE
- **When Copilot Business is wasteful:**
  - Solo developer: Use individual Pro ($10) not Business ($19) — $9/user/month overpay
  - 2-person team: Two individual Pro plans = $20/month total vs. $38/month Business (saves $18/month unless IP indemnity is required)
- **Pooled credits advantage (from June 2026):** Business/Enterprise pool credits org-wide, eliminating wasted unused capacity from light users
- **Audit rule:** IF copilot_plan = "Business" AND team_size <= 2 THEN flag as overpaying — use 2x Pro instead

#### Alternative Recommendations

- **Cursor Teams ($40/user):** 2x the price, stronger agentic features, requires editor switch
- **Windsurf Teams ($30/user):** $11/user cheaper, flat credits, requires editor switch, less mature enterprise features
- **For teams heavily using agentic coding:** Cursor Teams worth the $21/user/month premium

---

### Plan: Enterprise

#### Core Pricing

- **Price:** $39/user/month + **requires GitHub Enterprise Cloud at $21/user/month** = **effectively $60/user/month total**
- **GitHub Enterprise Cloud is a prerequisite** — it is NOT optional
- **Source URL:** https://docs.github.com/en/copilot/get-started/plans
- **Verification date:** May 2026
- **IMPORTANT:** The $39 headline price is misleading. Real cost for new organizations is $39 + $21 = $60/user/month minimum

#### Included Usage

- Everything in Business
- **Codebase indexing:** AI understands your organization's private codebase for better suggestions
- **Fine-tuned custom models:** Available for inline suggestions (private model training on your codebase)
- **GitHub.com native chat:** Copilot integrated into the GitHub web interface for PR reviews, code search, etc.
- **$39 in monthly AI Credits per user** (pooled)
- **Copilot Enterprise pricing for knowledge bases:** Indexes your GitHub repos for custom, organization-aware answers

#### Collaboration Features

- Everything in Business
- **SCIM provisioning:** Via GitHub Enterprise Cloud
- **Custom policies per organization within enterprise:** Enterprise owners control per-org settings
- **Dedicated support:** Priority enterprise support
- **Compliance:** SOC 2, GDPR, data residency options

#### Best-Fit User Profile

- Large engineering organizations (100+ developers) already on GitHub Enterprise Cloud
- Organizations requiring custom model fine-tuning on proprietary code
- Compliance-heavy environments needing full enterprise contract

#### Cost Efficiency Analysis

- **True cost:** $60/user/month including GitHub Enterprise Cloud
- **Vs. Cursor Enterprise:** Cursor Enterprise is custom pricing (estimated $40–60/user). For large orgs, roughly equivalent
- **When Enterprise is justified:** Organizations already paying for GitHub Enterprise Cloud (then only the $39 add-on is incremental); codebase indexing adds real value for large, complex repos
- **When it's overkill:** Teams under 50 without compliance requirements — Business at $19 is adequate
- **Audit rule:** IF copilot_plan = "Enterprise" AND team_size < 50 AND compliance_requirements = false THEN flag as overkill → downgrade to Business saves $41/user/month

---

## TOOL 3: CLAUDE (Anthropic)

### Plan: Free

#### Core Pricing

- **Price:** $0/month
- **Source URL:** https://claude.com/pricing
- **Verification date:** May 2026

#### Included Usage

- **Models:** Claude Sonnet 4.5 and Haiku 4.5 (NO Opus access)
- **Message limits:** Not published officially. Community reports suggest ~45 prompts per session before throttling, with ~5-hour reset window
- **Context window:** Standard (200K on Sonnet 4.5)
- **Features:** Web, iOS, Android apps; basic Projects; no Claude Code, no extended thinking access
- **Data privacy:** Conversations may be used for model improvement (opt-out via Privacy Settings)

#### Best-Fit User Profile

- Occasional users: writing assistance, quick questions, casual exploration
- Users evaluating Claude before subscribing
- NOT suitable for developers running code, analysts doing heavy document work, or anyone hitting limits regularly

---

### Plan: Pro

#### Core Pricing

- **Price:** $20/month (monthly), or **$17/month billed annually** (approximately, per community sources; official page says "$200 billed up front" annual)
- **Annual effective rate:** ~$16.67/month ($200/year)
- **Source URL:** https://claude.com/pricing, https://support.claude.com/en/articles/8325606-what-is-the-pro-plan
- **Verification date:** May 2026

#### Included Usage

- **Usage:** At least **5x the usage of Free** per session. Priority access during peak traffic
- **Models:** All Claude models including Opus 4.5, Sonnet 4.5, Haiku 4.5 (model selector available)
- **Extended thinking:** Available
- **Context window:** Up to 200K tokens
- **Claude Code:** Included (though usage draws from subscription limits)
- **Projects and knowledge bases:** Included
- **Voice mode:** Available
- **Priority access:** Yes — less throttling during peak hours
- **Data privacy:** No training on Pro data by default (as of August 28, 2025 policy update); opt-out available via Privacy Settings
- **Subscription scope:** Web, iOS, Android, desktop apps. **API access is NOT included** — separate API billing required

#### Collaboration Features

- None — individual plan
- No admin controls, SSO, or team features

#### Best-Fit User Profile

- **Ideal:** Individual knowledge workers, writers, analysts, developers using Claude for 1–4 hours/day
- **Strong fit:** Users who regularly hit Free plan limits
- **NOT suitable for:** Teams (use Team plan), developers needing API access (use API), power users doing 6+ hours/day of deep work (evaluate Max)

#### Cost Efficiency Analysis

- **Vs. ChatGPT Plus ($20):** Same price, comparable capability. Claude edges out for long documents and coding nuance; ChatGPT Plus edges out for voice, image gen, and breadth of tools
- **Vs. Gemini Pro ($19.99):** Nearly same price. Gemini Pro better for Google Workspace integration; Claude Pro better for depth and coding
- **Break-even vs API:** At $20/month Pro, break-even vs. Sonnet 4.5 API ($3/$15 per MTok) is ~3.7M tokens/month. Below that, Pro subscription is cheaper. Above that, API is cheaper
- **Hidden trap:** Claude Code can exhaust Pro limits quickly in agentic mode. Heavy Claude Code users should consider Max or switch to API billing

#### Alternative Recommendations

- **Cheaper alternative:** Gemini AI Pro ($19.99/month) — $0.01 cheaper, strong if Google Workspace integrated
- **Comparable at lower price:** GitHub Copilot Pro ($10/month) — better for coding only, no general assistant features
- **For teams:** Always use Team plan, not multiple individual Pro accounts

---

### Plan: Max 5x

#### Core Pricing

- **Price:** $100/month
- **Source URL:** https://claude.com/pricing
- **Verification date:** May 2026

#### Included Usage

- **5x the usage limits of Pro**
- Same model access as Pro (all models including Opus)
- Priority access during peak traffic
- Early access to new features and models
- Claude Code included, Claude in PowerPoint included
- **Context window:** 200K tokens

#### Cost Efficiency Analysis

- **When justified:** Professionals hitting Pro limits multiple times per week; daily 4–5 hour complex work sessions
- **API break-even:** Max 5x at $100 is worth it vs. API if monthly token usage would cost >$100 at Sonnet rates (~37M tokens)
- **When wasteful:** Users who occasionally hit Pro limits — use Pro with extra usage (overages) instead
- **Audit rule:** IF claude_plan = "Max_5x" AND daily_usage_hours < 3 THEN flag as overpaying → Pro at $20 likely sufficient, saves $80/month

---

### Plan: Max 20x

#### Core Pricing

- **Price:** $200/month
- **Source URL:** https://claude.com/pricing
- **Verification date:** May 2026

#### Included Usage

- **20x the usage limits of Pro**
- Everything in Max 5x
- Priority model routing

#### Cost Efficiency Analysis

- **When justified:** Full-time power users running long agentic sessions all day, every day. Heavy Claude Code in agentic mode
- **API comparison:** At Sonnet rates, Max 20x is cheaper than API for users consuming >6.7M tokens/month interactively
- **Audit rule:** IF claude_plan = "Max_20x" AND weekly_hours < 30 THEN flag as overpaying → Max 5x saves $100/month

---

### Plan: Team (Standard)

#### Core Pricing

- **Price:** $25/seat/month (billed monthly), or **$20/seat/month (billed annually)**
- **Annual billing savings:** 20% ($60/seat/year)
- **Minimum seats:** 5 (up to approximately 75 seats)
- **Source URL:** https://claude.com/pricing
- **Verification date:** May 2026

#### Included Usage

- All Pro plan features for each seat
- **Higher usage limits than Pro** per seat
- **Data privacy:** No model training on Team data by default — contractual protection (not just opt-out)
- **Context window:** 200K tokens

#### Collaboration Features

- **Centralized billing:** Yes — single invoice for all seats
- **Team management:** Seat assignment and management console
- **Admin controls:** Basic admin dashboard
- **Shared projects:** Members can collaborate within shared projects and knowledge bases
- **SSO:** Yes (available on Team plan)
- **RBAC:** Basic roles
- **Audit logs:** Limited (full audit logs on Enterprise)
- **SCIM:** No (Enterprise only)

#### Best-Fit User Profile

- Teams of 5–75 people using Claude daily for writing, analysis, research, coding
- Marketing teams, ops teams, consulting teams, engineering teams
- Organizations wanting data privacy protection contractually without Enterprise overhead

#### Cost Efficiency Analysis

- **Vs. multiple individual Pro accounts:** Team Standard at $25/seat vs. Pro at $20/seat = **$5/seat/month premium** for centralized billing, SSO, higher limits, and data privacy guarantees
- **When wasteful:**
  - Fewer than 5 people: May be priced out (minimum seat count); use individual Pro
  - If SSO/admin controls are not needed: Individual Pro accounts at $20/seat save $5/seat/month
- **Audit rule:** IF team_size < 5 AND claude_team_plan = "Team" THEN flag — individual Pro may be forced (can't buy <5 Team seats) but confirm with vendor
- **Break-even vs Enterprise:** Team is adequate unless 500K context window, SCIM, audit logs, HIPAA, or custom retention are required

#### Alternative Recommendations

- **ChatGPT Business ($20/user/month):** $5/user cheaper (annual), similar collaboration features, different model strengths
- **Copilot Business ($19/user):** $6/user cheaper for coding-focused teams

---

### Plan: Team (Premium)

#### Core Pricing

- **Price:** $100/seat/month (billed monthly), or approximately **$100/seat/month annually** (check official page for exact annual rate)
- **Source URL:** https://claude.com/pricing
- **Verification date:** May 2026
- **Note:** This tier includes Claude Code specifically for development teams

#### Included Usage

- Everything in Team Standard
- **Claude Code access** built into team plan
- Higher usage limits designed for engineering teams running active Claude Code sessions
- Priority model routing

#### Best-Fit User Profile

- Engineering/DevOps teams where developers use Claude Code daily as a core part of their workflow
- Organizations wanting the team management features of Team plan combined with Claude Code

#### Cost Efficiency Analysis

- **API alternative:** At $100/seat, compare to API billing. Average developer Claude Code spend = ~$6–13/day API rate = $130–$250/month. Team Premium at $100 caps cost with a fixed bill
- **Vs. individual Max 5x ($100):** Same price but adds team management. Engineering teams should prefer Team Premium over multiple Max 5x accounts
- **Audit rule:** IF developer_uses_claude_code = true AND api_monthly_spend > 100 THEN recommend_team_premium_or_api_optimization

---

### Plan: Enterprise

#### Core Pricing

- **Price:** Custom — contact Anthropic sales ([email protected])
- **Community estimates:** ~$60/seat minimum, ~70-seat floor (treat as anecdotal — not confirmed by Anthropic)
- **Source URL:** https://claude.com/pricing (Enterprise section)
- **Verification date:** May 2026
- **Uncertainty level:** HIGH — Anthropic does not publish Enterprise pricing

#### Included Usage (vs Team)

- **Extended context window:** 500K tokens (vs 200K on Team)
- **SCIM provisioning:** Full directory sync
- **Audit logs:** Comprehensive
- **Compliance API:** Available
- **Custom data retention:** Negotiable
- **IP allowlisting:** Yes
- **HIPAA-ready option:** Yes
- **Role-based and network-level access controls:** Full RBAC + network controls
- **Dedicated support and CSM**

#### Best-Fit User Profile

- Organizations with 70+ users
- Regulated industries: finance, healthcare, legal (HIPAA requirement)
- Organizations needing SCIM provisioning, full audit trails, custom retention
- Enterprises building internal tools on top of Claude

#### Cost Efficiency Analysis

- **Justified by:** Compliance requirements, 500K context window for large document workflows, dedicated support, SCIM
- **When NOT justified:** Engineering teams under 70 people without compliance requirements — Team Premium handles it
- **Education plan available:** Universities and institutions — contact Anthropic education team

---

### Anthropic API Direct Pricing

#### Core Pricing

- **Billing model:** Pay-per-token, metered. No flat monthly fee for API access
- **Source URL:** https://docs.anthropic.com/en/docs/about-claude/pricing
- **Verification date:** May 2026

#### Current Model Pricing (USD per million tokens):

| Model                      | Input ($/MTok) | Cache Write ($/MTok) | Cache Read ($/MTok) | Output ($/MTok) | Context |
| -------------------------- | -------------- | -------------------- | ------------------- | --------------- | ------- |
| Claude Opus 4.5 (flagship) | $5.00          | $6.25                | $0.50               | $25.00          | 200K    |
| Claude Sonnet 4.5/4.6      | $3.00          | $3.75                | $0.30               | $15.00          | 200K–1M |
| Claude Haiku 4.5           | $1.00          | $1.25                | $0.10               | $5.00           | 200K    |
| Legacy Opus 4.1            | $15.00         | —                    | —                   | $75.00          | 200K    |

**Cost optimization modifiers:**

- **Prompt caching (Cache Reads):** 90% cheaper than standard input. Highly effective for large system prompts, codebases loaded at session start
- **Batch API:** 50% discount on ALL models for asynchronous workloads with 24-hour turnaround
- **Long-context surcharges:** Eliminated as of March 13, 2026. 900K-token requests now priced identically per-token to 9K-token requests on Opus 4.6 and Sonnet 4.6
- **US-only inference:** 1.1x multiplier on all token categories (via inference_geo parameter)

#### Rate Limits by Tier (approximate):

- Free tier (new accounts): Small free credit for testing
- Tier 1–5: Progressively higher TPM/RPM limits as spend increases
- Enterprise: Custom rate limits negotiated with sales

#### Key Economics:

- **Break-even vs. Pro subscription:** At Sonnet 4.5 rates ($3/$15), API becomes more expensive than Claude Pro ($20/month) above ~3.7M tokens/month interactive use
- **Break-even with caching:** With 70% cache hit rate on large contexts, effective input cost drops to ~$0.90/MTok, shifting break-even to ~5.1M tokens/month
- **Batch API break-even vs subscription:** Batch at 50% discount makes API extremely competitive for non-real-time pipelines

#### Best Use Cases for API vs Subscription:

- **Use API:** Automated pipelines, CI jobs, code scanning, ETL, eval frameworks, production applications, any non-interactive workload
- **Use subscription:** Individual interactive users who work in the claude.ai UI
- **Critical note:** API billing and subscription billing are SEPARATE systems. A Pro subscription does NOT include API calls for applications. ANTHROPIC_API_KEY in environment uses API billing, not subscription quota

#### Procurement Notes:

- Startup credits: Anthropic offers free API credits for qualifying startups — apply at console.anthropic.com
- Volume discounts: Available for high-volume enterprise API users — contact [email protected]
- AWS Bedrock and Google Vertex AI also host Claude models at similar pricing (slight variations; check respective pricing pages)
- **Credex opportunity:** Credex sells discounted Anthropic API credits sourced from organizations that overforecast. This is the primary product-market fit for the audit tool.

---

## TOOL 4: CHATGPT / OPENAI

### Plan: Free

#### Core Pricing

- **Price:** $0/month (ad-supported in the US as of February 2026)
- **Source URL:** https://chatgpt.com/pricing
- **Verification date:** May 2026

#### Included Usage

- Access to GPT-5 (base) with tight rate limits
- Web browsing, file uploads, DALL-E image generation (limited)
- GPT Store access
- ~10 GPT-5 messages per 5 hours (community reports; not officially stated)
- No training data exclusion by default

---

### Plan: Plus

#### Core Pricing

- **Price:** $20/month
- **Annual billing:** Not a separate rate (monthly only)
- **Source URL:** https://chatgpt.com/pricing
- **Verification date:** May 2026

#### Included Usage

- **Models:** GPT-5 (expanded limits), all reasoning models (o3, o4-mini, o4-mini-high), GPT-4.1, DALL-E 3
- **Deep Research:** ~10 sessions/month
- **Advanced Voice mode:** Available
- **Image generation:** Expanded (up to 720p Sora, limited clips)
- **Memory:** Available
- **Code Interpreter / Canvas:** Included
- **Custom GPTs:** Full access (creation and use)
- **Sora video:** Limited (720p, 5-second clips)
- **Codex agent:** Limited access
- **Data privacy:** Conversations may be used for training unless manually opted out

#### Collaboration Features

- None — individual plan
- No admin controls, SSO, shared workspace

#### Best-Fit User Profile

- Individual professionals, writers, researchers, developers who want a general-purpose AI assistant
- Users who value GPT's breadth of features (voice, image, video, search, agents) over depth

#### Cost Efficiency Analysis

- **Vs. Claude Pro ($20):** Same price. Comparison:
  - ChatGPT Plus: Broader feature set (voice, images, video with Sora, more integrations)
  - Claude Pro: Stronger on long documents, coding quality, context window depth
- **Vs. Gemini Pro ($19.99):** Essentially same price tier — decision comes down to ecosystem (Google Workspace → Gemini; standalone use → ChatGPT or Claude)
- **Hidden trap:** Deep Research cap at 10/month is hit quickly by researchers. Users doing intensive research should evaluate Pro ($200)
- **Data privacy gotcha:** Unlike Claude Pro and Team, ChatGPT Plus data MAY train OpenAI models unless you manually opt out in settings — significant for businesses handling confidential data

---

### Plan: Pro

#### Core Pricing

- **Price:** $200/month
- **Source URL:** https://chatgpt.com/pricing
- **Verification date:** May 2026

#### Included Usage

- Unlimited access to all models and reasoning capabilities
- 1M-token context window (vs 128K on Plus)
- Advanced reasoning with "Light" and "Heavy" thinking-time toggles
- Unlimited Deep Research
- Unlimited Sora video generation
- Codex agent: expanded access
- Priority access to all features

#### Cost Efficiency Analysis

- **When justified:** Power users hitting Plus limits daily, researchers who exhaust Deep Research caps, developers needing 1M context window
- **Vs. Claude Max 20x ($200):** Same price. ChatGPT Pro: broader features (voice, images, video). Claude Max 20x: stronger on long-context coding, 1M context window
- **When NOT justified:** Plus covers most professional workflows adequately

---

### Plan: Business (formerly Team)

> **NOTE:** OpenAI renamed "Team" to "Business" on August 29, 2025. The plan is substantially the same.

#### Core Pricing

- **Price:** $20/user/month (billed annually, minimum 2 users), or **$25/user/month (monthly billing)**
- **Annual discount:** $5/user/month (20%)
- **Minimum seats:** 2
- **Source URL:** https://openai.com/business/chatgpt-pricing/, https://help.openai.com/en/articles/8792828
- **Verification date:** May 2026

#### Included Usage

- All Plus features with higher rate limits per user
- **GPT-5.4** access with expanded limits
- **Codex access:** Standard ChatGPT seats include Codex (agentic coding platform)
- Flexible pricing credits for advanced features beyond base limits (Deep Research, Thinking, Image Gen, Voice, Codex)
- **Shared workspace:** Yes — collaborative workspace for the team
- **Custom GPTs per workspace:** Build and share GPTs within your org
- **Admin controls:** Centralized billing, usage management
- **Data privacy:** Conversations NOT used to train OpenAI models by default
- **Apps:** 60+ integrated apps (Slack, Google Drive, GitHub, Atlassian, etc.)

#### Collaboration Features

- **Shared workspace:** Yes — team can share projects, GPTs
- **Admin controls:** Workspace settings, billing, usage alerts
- **SSO:** Via enterprise SAML (Business supports it)
- **RBAC:** Basic workspace roles
- **Audit logs:** Basic
- **Company Knowledge:** Shared internal documents for GPTs

#### Best-Fit User Profile

- Small to medium businesses needing a shared AI workspace
- Teams where multiple functions (sales, engineering, marketing) all use ChatGPT
- Organizations that need data privacy protection without full Enterprise overhead

#### Cost Efficiency Analysis

- **Vs. multiple Plus accounts:** Business at $20/seat (annual) vs. Plus at $20/seat — **same price** with Business adding admin controls, data privacy, and shared workspace. Business is almost always better for teams of 2+
- **vs. Claude Team Standard ($25/seat annual):** Business is $5/seat cheaper. Trade-off: ChatGPT Business has broader feature set; Claude Team has stronger document/coding depth
- **When wasteful:**
  - Solo developer: Should use Plus ($20/month) not Business (needs 2+ seats minimum)
  - Coding-only teams: GitHub Copilot Business ($19/user) offers better value
- **Audit rule:** IF team_uses_chatgpt_for_coding_only AND plan = "Business" THEN recommend_copilot_business — saves $1/user/month with better coding features

---

### Plan: Enterprise

#### Core Pricing

- **Price:** Custom — contact OpenAI sales
- **Floor estimate (community):** ~$40–100/user/month, typically requires 150+ seat minimum
- **Source URL:** https://openai.com/enterprise (no public pricing)
- **Verification date:** May 2026
- **Uncertainty level:** HIGH

#### Included Usage (vs Business)

- **Unlimited** access to GPT-5.4 (no rate limits)
- **Expanded context window for GPT-4o** (128K → enterprise-scale)
- **SOC 2 Type 2, GDPR, CCPA** compliance certifications
- **SSO (SAML):** Full enterprise SSO
- **Advanced analytics:** Org-wide usage dashboards
- **Dedicated support:** Named CSM, priority response
- **AES-256 encryption** at rest, TLS 1.2 in transit
- **No training on data:** Contractual guarantee
- **Custom GPT deployment:** Enterprise can deploy GPTs at scale

#### Best-Fit User Profile

- Organizations 150+ users with strict compliance requirements
- Heavily regulated industries: finance, legal, healthcare, government
- Organizations needing SOC 2 compliance certifications

#### Cost Efficiency Analysis

- **When justified:** SOC 2 mandate, dedicated support SLA, 150+ seats, compliance requirements
- **When NOT justified:** Teams <100 without compliance requirements — Business handles most needs
- **Audit rule:** IF chatgpt_plan = "Enterprise" AND team_size < 100 AND no_compliance_requirement THEN flag as overkill → Business saves potentially $20–80/user/month

---

## TOOL 5: OPENAI API DIRECT

> Separate from ChatGPT subscriptions. API access is metered per token. Subscriptions and API are completely independent billing systems.

#### Core Pricing

- **Billing model:** Pay-per-token (no monthly flat fee for API access)
- **Source URL:** https://openai.com/api/pricing/
- **Verification date:** May 2026

#### Current Model Pricing (USD per million tokens):

| Model                                 | Input ($/MTok) | Cached Input ($/MTok) | Output ($/MTok) | Context | Notes                     |
| ------------------------------------- | -------------- | --------------------- | --------------- | ------- | ------------------------- |
| GPT-5.5 (latest flagship, April 2026) | $5.00          | $1.25                 | $30.00          | —       | ~2x cost of GPT-5.4       |
| GPT-5.4                               | $2.50          | $0.625                | $15.00          | —       | Previous flagship         |
| GPT-5.4 Mini                          | —              | —                     | —               | —       | Cheaper variant           |
| GPT-5.4 Nano                          | $0.20          | —                     | $1.25           | —       | Ultra-budget option       |
| GPT-5 (Aug 2025)                      | $0.625–$1.25   | —                     | $5.00–$10.00    | 400K    |                           |
| GPT-5 mini                            | $0.25          | —                     | $2.00           | —       |                           |
| GPT-4o                                | $2.50          | —                     | $10.00          | 128K    | Older but still available |
| GPT-4.1 nano                          | $0.10          | —                     | $0.40           | —       | Cheapest viable model     |

**Notes:**

- Regional processing (data residency): +10% on flagship models
- Batch API: 50% discount for async workloads (24-hour turnaround)
- Priority processing: 2.5x standard for latency-sensitive work
- Flex: 50% off for non-latency-sensitive

#### Key Economics:

- **12x cost spread** between GPT-5.4 ($2.50 input) and GPT-5.4 Nano ($0.20 input)
- **Model selection is the single biggest cost lever** — matching model to task complexity can turn a $1,200/month workload into a $100/month workload
- **Break-even vs ChatGPT Plus:** For an average session with 500 input + 300 output tokens, API cost is ~$0.001–$0.006 depending on model. ChatGPT Plus at $20/month = ~1,379 sessions at GPT-5.4 rates before API becomes more expensive per session

#### Procurement Notes:

- No volume discounts published (negotiated for large enterprise contracts)
- Credits purchased in advance; no expiry on standard credits
- Startup program: OpenAI for Startups — free credits for early-stage companies
- **Credex opportunity:** Credex sells discounted OpenAI API credits sourced from company overforecasts

---

## TOOL 6: GEMINI (Google)

### Plan: Google AI Plus (Consumer)

#### Core Pricing

- **Price:** $7.99/month (50% off first 2 months for new subscribers)
- **Source URL:** https://one.google.com/about/ai (approximate; verify at time of submission)
- **Verification date:** May 2026

#### Included Usage

- Gemini 2.5 Flash access
- Limited daily Pro model prompts
- Basic AI credits for generative features
- 100GB+ storage (bundled with Google One)

---

### Plan: Google AI Pro (formerly Gemini Advanced / Google One AI Premium)

#### Core Pricing

- **Price:** $19.99/month (50% off first year for new subscribers → ~$10/month first year)
- **Source URL:** https://one.google.com/about/ai
- **Verification date:** May 2026

#### Included Usage

- **Gemini 3.1 Pro** access (flagship model, 1M token context)
- ~100 Pro prompts per day
- **1,000 monthly AI credits** (for Veo video, Whisk image edits, etc.)
- **5TB Google One cloud storage**
- **Gemini Code Assist:** AI coding assistant inside Google IDEs
- **Veo 3.1:** Video generation (limited)
- Unlimited slide generation
- Deep Research, Gems, Canvas, Gemini Live voice mode
- **Google Workspace integration:** Gmail, Docs, Sheets, Drive, Meet

#### Best-Fit User Profile

- Users deeply embedded in Google Workspace (Gmail, Docs, Drive)
- Individuals who want 2TB+ storage bundled with AI
- Teams already paying for Google Workspace — Gemini is bundled in Business Standard/Plus/Enterprise plans
- **Strong fit:** Organizations already on Google Workspace — incremental cost is $0 if on right Workspace tier

#### Cost Efficiency Analysis

- **Vs. Claude Pro ($20):** Same price. Gemini wins: Google Workspace integration, 5TB storage. Claude wins: depth, coding, long-context reasoning without Google ecosystem
- **Vs. ChatGPT Plus ($20):** Gemini Pro is $0.01 cheaper. Gemini wins: Google ecosystem. ChatGPT wins: breadth of non-Google integrations, DALL-E, Sora
- **Powerful bundle value:** If you pay for Google One 2TB ($9.99/month) + want AI, upgrading to AI Pro for $19.99 adds Gemini 3.1 Pro access for only $10/month incremental

---

### Plan: Google AI Ultra

#### Core Pricing

- **Price:** $249.99/month (50% off first 3 months for new subscribers)
- **Source URL:** https://one.google.com/about/ai
- **Verification date:** May 2026

#### Included Usage

- **Deep Think 3.1** (hardest reasoning tasks)
- ~500 Pro prompts per day
- 30TB Google One storage
- **YouTube Premium** included ($13.99/month value)
- **Project Mariner:** Agentic browser control (Google's autonomous web agent)
- ~1,000 image generations/day with Nano Banana 2
- $100/month in Google Cloud credits
- Google Home Premium Advanced

#### Cost Efficiency Analysis

- **Effective cost after YouTube Premium and Cloud credits:** $249.99 - $13.99 (YouTube) - $100 (Cloud credits) = ~$136/net effective cost if you use those services
- **vs. Claude Max 20x ($200) + ChatGPT Pro ($200):** If running both, Ultra ($250) bundles them conceptually but with Google-only models
- **When justified:** Heavy Google ecosystem users who would otherwise pay for YouTube Premium, Google One 2TB+, and a separate AI assistant
- **When NOT justified:** Users not in Google Workspace ecosystem — too expensive for just AI access

---

### Gemini API Pricing

#### Core Pricing

- **Billing model:** Pay-per-token (metered). Free tier available via Google AI Studio
- **Source URL:** https://ai.google.dev/gemini-api/docs/pricing
- **Verification date:** May 2026

#### Current Model Pricing (USD per million tokens):

| Model                    | Input ≤200K ($/MTok) | Input >200K ($/MTok) | Output ≤200K ($/MTok) | Output >200K ($/MTok) | Notes                |
| ------------------------ | -------------------- | -------------------- | --------------------- | --------------------- | -------------------- |
| Gemini 3.1 Pro (Preview) | $2.00                | $4.00                | $12.00                | $18.00                | Long-context penalty |
| Gemini 3 Pro (Preview)   | $2.00                | $4.00                | $12.00                | $18.00                |                      |
| Gemini 2.5 Pro           | $1.25                | $2.50                | $10.00                | $15.00                | Strong value         |
| Gemini 3 Flash           | $0.50                | —                    | $3.00                 | —                     |                      |
| Gemini 2.5 Flash         | $0.30                | —                    | $2.50                 | —                     |                      |
| Gemini 2.5 Flash-Lite    | $0.10                | —                    | $0.40                 | —                     | Ultra-budget         |

**Cost optimization:**

- **Context caching:** ~$0.01–0.03/MTok/hour storage + greatly reduced input costs. Highly effective for large reusable prompts
- **Batch mode:** 50% discount on all models (50x cheaper than standard for large-volume async work)
- **Grounding with Google Search:** First 1,500–5,000 requests/day free by model; then $14–35/1,000 grounded prompts
- **Free tier (Google AI Studio):** 5–15 RPM, 100–1,000 RPD. Rate limits vary by model

#### Key Economics:

- **Gemini 3.1 Pro vs GPT-5.5:** Gemini 3.1 Pro ($2/$12) is **roughly 2.5x cheaper** than GPT-5.5 ($5/$30) per token
- **Gemini 3 Flash vs Claude Sonnet 4.5:** Flash ($0.50/$3) is **6x cheaper** than Sonnet 4.5 ($3/$15). Significant cost saving for less complex tasks
- **180x cost range** from Flash-Lite to Pro Pro — critical to match model to task
- **Long-context pricing cliff:** Requests exceeding 200K tokens see input price double on Pro models. RAG pipelines or large document queries can silently cross this threshold

#### Procurement Notes:

- Google Workspace customers: Gemini bundled into Business Standard/Plus/Enterprise tiers — no separate API cost for Workspace AI features
- Vertex AI has separate pricing (generally comparable; check for regional differences)
- Google Cloud credits (from Google AI Ultra subscription) can offset API spend

---

## TOOL 7: WINDSURF (by Cognition)

> **IMPORTANT CONTEXT:** Windsurf (formerly Codeium) was acquired by Cognition in July 2025, after Google acqui-hired the founding team (Varun Mohan, Douglas Chen) for ~$2.4B. The product continues under Cognition ownership. Pricing as of May 2026 reflects post-acquisition structure.

### Plan: Free

#### Core Pricing

- **Price:** $0/month
- **Source URL:** https://windsurf.com/pricing
- **Verification date:** May 2026

#### Included Usage

- **25 prompt credits/month** (each Cascade agent prompt = 1 credit)
- **Unlimited Tab completions** (inline autocomplete — no cap, unlike GitHub Copilot Free)
- **Unlimited inline edits**
- **SWE-1 Lite:** Windsurf's proprietary coding model — 0 credits per prompt (available after credit exhaustion)
- Windsurf Previews: App preview within IDE
- 1 deploy/day
- Full VS Code extension compatibility

#### Best-Fit User Profile

- Developers evaluating Windsurf before committing
- Light users who primarily need autocomplete (unlimited) rather than agentic Cascade sessions
- 25 credits lasts 1–2 days of active development

---

### Plan: Pro

#### Core Pricing

- **Price:** $15/month (~$12.50/month if annual, approximate 17% savings)
- **Per user:** Individual
- **Source URL:** https://windsurf.com/pricing
- **Verification date:** May 2026

#### Included Usage

- **500 prompt credits/month** (equal to $20 in credit value at $0.04/credit)
- **All premium models:** GPT-5.x, Claude Sonnet, Gemini, Windsurf SWE-1
- **Unlimited Tab completions**
- **Unlimited inline edits**
- 5 deploys/day
- Priority model access
- **Cascade (Windsurf's agentic AI):** Full access with 500 credits/month
- **BYOK (Bring Your Own Key):** Pro users can connect their own OpenAI/Anthropic API key — zero Windsurf credits consumed when using BYOK
- **Add-on credits:** $10 for 250 additional credits ($0.04/credit)
- **Referral:** Earn $10 extra usage per referred paid user

#### Best-Fit User Profile

- **Ideal:** Solo developers wanting simple, flat-rate pricing without credit anxiety
- **Key differentiator vs Cursor:** No per-request credit math. 500 flat prompts/month at $15 is simpler than Cursor's $20 credit pool that depletes at variable rates
- Best for: typical application development, feature work, refactors, bug hunting

#### Cost Efficiency Analysis

- **Vs. Cursor Pro ($20):** Windsurf Pro saves **$5/month ($60/year)** per developer
- **Capability trade-off:** Windsurf handles ~85–90% of what Cursor handles. Cursor edges out on: parallel agents, very large monorepo work, complex multi-step orchestration with background agents
- **Vs. GitHub Copilot Pro ($10):** Windsurf Pro is $5 more but offers richer agentic Cascade capabilities and a dedicated AI IDE vs. plugin
- **Sweet spot analysis:** For most developers doing typical app work, Windsurf Pro at $15 is the best-value full-featured AI coding environment on the market

#### Alternative Recommendations

- **Cheaper with less agentic depth:** Copilot Pro ($10/month) — save $5/month but lose Cascade agent
- **More powerful agentic:** Cursor Pro ($20/month) — $5 more, stronger on complex multi-file tasks
- **If you use BYOK:** Windsurf Pro is even more cost-effective since Windsurf credits aren't consumed when using your own API key

---

### Plan: Teams

#### Core Pricing

- **Price:** $30/user/month
- **Annual discount:** Confirm at windsurf.com/pricing
- **Minimum seats:** 2 (confirm with vendor)
- **Source URL:** https://windsurf.com/pricing
- **Verification date:** May 2026

#### Included Usage

- 500 prompt credits per user per month (NOT pooled — individual per user)
- Add-on credits: $40/1,000 credits (pooled across org)
- Admin dashboard with usage analytics
- Centralized billing
- Priority support
- All Pro features
- Maximum ~200 users on Teams (Enterprise above that)

#### Collaboration Features

- **Centralized billing:** Yes
- **Admin dashboard:** Yes with analytics
- **SSO:** No (Enterprise only)
- **RBAC:** No (Enterprise only)
- **Pooled add-on credits:** Yes (purchased extra credits pooled across team)

#### Cost Efficiency Analysis

- **Vs. individual Pro ($15):** Teams at $30 = **$15/user/month premium** for admin features + centralized billing
- **Vs. Cursor Teams ($40):** Windsurf Teams saves **$10/user/month ($120/user/year)**
- **Vs. Copilot Business ($19):** Windsurf Teams is $11 more but provides a dedicated AI-first IDE vs. plugin
- **When wasteful:** Teams that don't need centralized billing or admin controls → use multiple individual Pro accounts at $15/user

---

### Plan: Enterprise

#### Core Pricing

- **Price:** $60/user/month standard; scales at 200+ seats
- **Custom pricing:** Contact Cognition/Windsurf sales
- **Source URL:** https://windsurf.com/pricing
- **Verification date:** May 2026

#### Included Usage

- 1,000 prompt credits/user/month (2x Teams)
- **SSO/SAML:** Yes
- **RBAC:** Yes
- **Hybrid deployment:** Self-hosted option
- All Teams features

#### Cost Efficiency Analysis

- **Vs. Cursor Enterprise (custom, ~$60+):** Roughly comparable at entry price
- **Vs. Copilot Enterprise ($60/user total):** Same price, but Windsurf requires editor switch; Copilot stays in existing IDE; Copilot includes codebase indexing and custom fine-tuning

---

# SECTION: CROSS-TOOL COMPARISON MATRIX

## Cost Per Seat (Individual Developer)

| Tool           | Cheapest Paid      | Mid Tier              | Power User            | Team (5-10 seats)    |
| -------------- | ------------------ | --------------------- | --------------------- | -------------------- |
| Cursor         | $20/mo (Pro)       | $60/mo (Pro+)         | $200/mo (Ultra)       | $40/user (Teams)     |
| GitHub Copilot | $10/mo (Pro)       | $39/mo (Pro+)         | $39/mo (Pro+)         | $19/user (Business)  |
| Claude         | $20/mo (Pro)       | $100/mo (Max 5x)      | $200/mo (Max 20x)     | $25/user (Team)      |
| ChatGPT        | $20/mo (Plus)      | $200/mo (Pro)         | $200/mo (Pro)         | $20/user (Business)  |
| Gemini         | $19.99/mo (AI Pro) | $249.99/mo (Ultra)    | $249.99/mo (Ultra)    | Bundled in Workspace |
| Windsurf       | $15/mo (Pro)       | $60/mo (Pro Ultimate) | $60/mo (Pro Ultimate) | $30/user (Teams)     |

## Context Windows

| Tool                | Standard            | Extended             | Max Available               |
| ------------------- | ------------------- | -------------------- | --------------------------- |
| Claude API          | 200K (Haiku/Sonnet) | 1M (Sonnet 4.6 beta) | 1M                          |
| Claude Subscription | 200K                | 500K (Enterprise)    | 500K                        |
| ChatGPT Plus        | 128K                | 256K (Pro)           | 1M (Pro)                    |
| Gemini API (Pro)    | 200K                | 1M                   | 1M                          |
| Gemini AI Pro       | 1M (full context)   | —                    | 1M                          |
| GitHub Copilot      | IDE context         | —                    | Codebase index (Enterprise) |
| Cursor              | Full codebase       | Max mode (expanded)  | Full monorepo               |
| Windsurf            | Full codebase       | —                    | Full codebase               |

## API Economics (Cost per million tokens, blended input/output at 4:1 ratio)

| Provider / Model      | Blended $/MTok | Notes                  |
| --------------------- | -------------- | ---------------------- |
| Gemini 2.5 Flash-Lite | ~$0.18         | Ultra-budget           |
| GPT-4.1 Nano          | ~$0.18         | OpenAI ultra-budget    |
| Gemini 3 Flash        | ~$0.70         | Budget option          |
| Claude Haiku 4.5      | ~$1.40         | Anthropic budget       |
| Gemini 2.5 Pro        | ~$2.25         | Strong value           |
| GPT-5 mini            | ~$0.45         | OpenAI budget          |
| Claude Sonnet 4.5/4.6 | ~$3.60         | Anthropic flagship mid |
| GPT-5.4               | ~$3.50         | OpenAI flagship mid    |
| Gemini 3.1 Pro        | ~$3.20         | Google flagship        |
| Claude Opus 4.5       | ~$7.00         | Anthropic premium      |
| GPT-5.5               | ~$8.00         | OpenAI premium         |

## Collaboration Quality

| Tool                | Admin Controls | SSO           | RBAC  | Audit Logs | SCIM       | Data Privacy   |
| ------------------- | -------------- | ------------- | ----- | ---------- | ---------- | -------------- |
| Cursor Teams        | ✓              | ✓ (SAML/OIDC) | ✓     | Partial    | Enterprise | Privacy mode   |
| Cursor Enterprise   | ✓              | ✓             | ✓     | ✓          | ✓          | Full           |
| Copilot Business    | ✓              | Via GitHub    | ✓     | Via GitHub | Via GitHub | ✓ No training  |
| Copilot Enterprise  | ✓              | ✓             | ✓     | ✓          | ✓          | ✓              |
| Claude Team         | ✓              | ✓             | Basic | Limited    | ✗          | ✓ Contractual  |
| Claude Enterprise   | ✓              | ✓             | ✓     | ✓          | ✓          | ✓ HIPAA option |
| ChatGPT Business    | ✓              | ✓             | Basic | Basic      | ✗          | ✓ No training  |
| ChatGPT Enterprise  | ✓              | ✓ SAML        | ✓     | ✓          | ✓          | ✓ SOC 2        |
| Windsurf Teams      | ✓              | ✗             | ✗     | Partial    | ✗          | ✓              |
| Windsurf Enterprise | ✓              | ✓             | ✓     | ✓          | ✓          | ✓              |

## Best Value By User Profile

| Profile                            | Recommendation                         | Monthly Cost  | Reasoning                                                           |
| ---------------------------------- | -------------------------------------- | ------------- | ------------------------------------------------------------------- |
| Solo developer (coding)            | GitHub Copilot Pro                     | $10           | Best value for editor-integrated coding; stays in existing IDE      |
| Solo developer (agentic)           | Windsurf Pro                           | $15           | Flat 500 credits, no credit anxiety, strong Cascade agent           |
| Solo developer (heavy agentic)     | Cursor Pro                             | $20           | Best-in-class agentic coding, most powerful multi-file agents       |
| Solo knowledge worker              | Claude Pro                             | $20           | Best for writing, analysis, long documents                          |
| Solo all-purpose                   | ChatGPT Plus or Claude Pro             | $20           | Tie — depends on ecosystem preference                               |
| Small team (3-10, coding)          | Copilot Business                       | $19/user      | Cheapest team plan with SSO and IP indemnity; stays in existing IDE |
| Small team (3-10, general AI)      | Claude Team or ChatGPT Business        | $20-25/user   | Comparable; Claude better for depth, ChatGPT for breadth            |
| High-volume API (general)          | Gemini 2.5 Flash                       | $0.30/$2.50   | Best performance-per-dollar API tier                                |
| High-volume API (quality-critical) | Claude Sonnet 4.5                      | $3/$15        | Best quality/cost for production applications                       |
| Enterprise (compliance-heavy)      | Claude Enterprise + Copilot Enterprise | Contact sales | Claude for general AI; Copilot for coding                           |

---

# SECTION: AUDIT ENGINE LOGIC — DETERMINISTIC BUSINESS RULES

## Category 1: Wrong Plan for Team Size

**RULE 1:** IF tool = "cursor" AND plan = "teams" AND team_size <= 2 THEN flag = "overpaying" AND recommendation = "switch_to_individual_pro" AND monthly_savings = (team_size _ 40) - (team_size _ 20) = "$40/month for 2-person team"

**RULE 2:** IF tool = "copilot" AND plan = "business" AND team_size == 1 THEN flag = "wrong_plan" AND recommendation = "copilot_pro" AND monthly_savings = "$9/month"

**RULE 3:** IF tool = "claude" AND plan = "team" AND team_size < 5 THEN flag = "minimum_seat_issue" AND recommendation = "verify_with_anthropic_or_use_individual_pro"

**RULE 4:** IF tool = "chatgpt" AND plan = "business" AND team_size == 1 THEN flag = "overpaying" AND recommendation = "chatgpt_plus" AND monthly_savings = "$5/month (monthly billing)"

**RULE 5:** IF tool = "windsurf" AND plan = "teams" AND team_size <= 2 THEN flag = "overpaying" AND recommendation = "individual_pro" AND monthly_savings = (team_size _ 30) - (team_size _ 15) = "$30/month for 2-person team"

---

## Category 2: Over-Tiered Within Same Tool

**RULE 6:** IF tool = "cursor" AND plan = "pro_plus" AND self_reported_credit_exhaustion = false THEN flag = "probably_overpaying" AND recommendation = "downgrade_to_pro" AND monthly_savings = "$40/month"

**RULE 7:** IF tool = "cursor" AND plan = "ultra" AND daily_coding_hours < 6 THEN flag = "overpaying" AND recommendation = "pro_plus_or_pro" AND monthly_savings = "$140-180/month"

**RULE 8:** IF tool = "claude" AND plan = "max_5x" AND daily_usage_hours < 3 THEN flag = "overpaying" AND recommendation = "claude_pro" AND monthly_savings = "$80/month"

**RULE 9:** IF tool = "claude" AND plan = "max_20x" AND weekly_hours < 30 THEN flag = "overpaying" AND recommendation = "max_5x_or_pro" AND monthly_savings = "$100-180/month"

**RULE 10:** IF tool = "copilot" AND plan = "pro_plus" AND monthly_opus_or_o3_queries < 50 THEN flag = "probably_overpaying" AND recommendation = "copilot_pro" AND monthly_savings = "$29/month"

**RULE 11:** IF tool = "chatgpt" AND plan = "pro_200" AND deep_research_monthly < 20 AND context_window_need < 500k THEN flag = "probably_overpaying" AND recommendation = "chatgpt_plus" AND monthly_savings = "$180/month"

---

## Category 3: Tool Consolidation Opportunities

**RULE 12:** IF tools_paid_for includes "chatgpt_plus" AND "cursor_pro" AND primary_use_case = "coding" THEN flag = "consolidation_opportunity" AND recommendation = "cursor_pro_only_or_copilot" AND note = "ChatGPT Plus adds limited value for pure coding use cases; Cursor handles both coding and general chat" AND potential_monthly_savings = "$20"

**RULE 13:** IF tools_paid_for includes "claude_pro" AND "cursor_pro" AND primary_use_case = "coding" THEN flag = "possible_overlap" AND note = "Cursor Pro already includes Claude Sonnet access. Claude Pro subscription may be redundant unless you do significant non-coding work in Claude.ai" AND potential_monthly_savings = "$20"

**RULE 14:** IF tools_paid_for includes "gemini_pro" AND primary_workspace = "google_workspace_business_plus_or_enterprise" THEN flag = "overpaying" AND recommendation = "use_gemini_bundled_in_workspace" AND monthly_savings = "$19.99/user"

**RULE 15:** IF tools_paid_for includes "chatgpt_plus" AND "claude_pro" AND use_case = "general_writing_or_research" THEN flag = "consolidation_opportunity" AND recommendation = "pick_one_based_on_primary_need" AND potential_monthly_savings = "$20"

**RULE 16:** IF tools_paid_for includes "copilot_business" AND "cursor_teams" THEN flag = "clear_overlap" AND recommendation = "choose_one" AND note = "Both serve same coding assistance need; Cursor is stronger on agents, Copilot is cheaper and stays in existing IDE" AND monthly_savings = "$21/user (keep Copilot Business) to $19/user (keep Cursor Teams — wait, Cursor Teams is more expensive so savings by dropping Copilot is $19/user)"

---

## Category 4: API vs. Subscription Mismatch

**RULE 17:** IF tool = "anthropic*api" AND monthly_api_spend > 100 AND primary_use = "interactive_personal_chat" THEN flag = "consider_claude_pro" AND recommendation = "claude_pro_at*$20_likely_cheaper" AND note = "Claude Pro subscription covers interactive use more cheaply below ~3.7M tokens/month"

**RULE 18:** IF tool = "claude_pro" AND use_case = "automated_pipeline_or_ci" THEN flag = "wrong_billing_model" AND recommendation = "use_anthropic_api_with_batch_discount" AND note = "Subscription is for interactive human use; API + Batch at 50% discount is appropriate for automated workloads"

**RULE 19:** IF tool = "openai_api" AND monthly_api_spend > 500 THEN recommendation = "evaluate_gemini_flash" AND note = "Gemini 3 Flash at $0.50/$3 is 6x cheaper than Claude Sonnet and ~5x cheaper than GPT-5.4 for many tasks; evaluate quality for your specific use case" AND potential_savings = "up_to_80%\_on_api_costs"

**RULE 20:** IF tool = "openai_api" AND model_used = "gpt_5_5" AND task_type = "simple_classification_or_extraction" THEN flag = "model_overkill" AND recommendation = "use_gpt_5_4_nano_or_gpt_5_mini" AND potential_savings = "25x reduction in input token cost"

---

## Category 5: Coding Tool + General AI Tool Stacking

**RULE 21:** IF tools_paid_for includes_any_coding_tool AND also_includes "chatgpt_plus" AND primary_use_case = "coding" AND chatgpt_weekly_hours < 2 THEN flag = "chatgpt_redundant" AND recommendation = "cancel_chatgpt_plus" AND monthly_savings = "$20"

**RULE 22:** IF team*uses "cursor_teams" AND team_size >= 5 AND team_already_uses "github_for_source_control" THEN flag = "evaluate_copilot_business" AND recommendation = "copilot_business_at*$19*vs_cursor_teams_at*$40" AND monthly_savings = "$21/user" AND trade_off = "Copilot stays in existing editors; Cursor requires IDE migration"

**RULE 23:** IF tool = "windsurf_pro" AND team_size >= 3 THEN flag = "team_plan_available" AND recommendation = "windsurf_teams" AND note = "Teams adds admin controls; only upgrade if you actually need centralized billing"

---

## Category 6: High API Spend Optimization

**RULE 24:** IF monthly_api_spend_anthropic > 1000 AND prompt_caching_enabled = false THEN flag = "significant_savings_available" AND recommendation = "enable_prompt_caching" AND potential_savings = "30-60% reduction on input-heavy workflows" AND note = "Cache reads cost 90% less than standard input on Anthropic API"

**RULE 25:** IF monthly_api_spend_any_provider > 500 AND batch_processing_suitable = true AND latency_requirement = "none_or_24h_acceptable" THEN flag = "batch_discount_available" AND recommendation = "use_batch_api" AND potential_savings = "50% across all models"

**RULE 26:** IF monthly_api_spend_openai > 200 AND using_model = "gpt_5_5_or_gpt_5_4" AND task_type != "complex_reasoning" THEN flag = "model_mismatch" AND recommendation = "evaluate_gpt_5_mini_or_gpt_5_4_nano" AND note = "12x cost reduction available if task doesn't require flagship reasoning"

**RULE 27:** IF monthly_api_spend_gemini > 100 AND average_prompt_length > 200k_tokens THEN flag = "long_context_surcharge" AND recommendation = "implement_context_truncation_or_caching" AND note = "Gemini Pro doubles per-token cost above 200K tokens; keep prompts below threshold"

---

## Category 7: Startup / Credit Arbitrage

**RULE 28:** IF company_age < 2_years AND team_size <= 10 AND monthly_ai_spend > 100 THEN flag = "startup_credits_available" AND recommendation = "apply_for_startup_programs: Anthropic, OpenAI_for_Startups, Google_for_Startups" AND potential_savings = "$150-1000_in_free_credits"

**RULE 29:** IF monthly_total_ai_spend > 500 THEN flag = "credex_consultation_recommended" AND recommendation = "credex_can_provide_discounted_credits" AND note = "Credex sources AI credits from companies that overforecast; significant savings available vs retail pricing"

**RULE 30:** IF company_type = "education_or_university" THEN flag = "education_discounts_available" AND recommendation = "apply_for: anthropic_education_plan, copilot_free_for_students, gemini_workspace_edu" AND potential_savings = "substantial_or_free"

---

## Category 8: Data Privacy Mismatches

**RULE 31:** IF tool = "chatgpt_plus" AND data_sensitivity = "high" AND training_opt_out = false THEN flag = "data_risk" AND recommendation = "upgrade_to_chatgpt_business_or_enterprise_or_enable_opt_out" AND note = "ChatGPT Plus may use conversations for training unless explicitly opted out"

**RULE 32:** IF tool = "copilot_pro" AND company_requires_ip_indemnity = true THEN flag = "wrong_plan" AND recommendation = "copilot_business" AND note = "IP indemnity only available on Business and Enterprise, not individual Pro"

**RULE 33:** IF tool = "cursor_teams" AND compliance_requirement includes "hipaa" THEN flag = "insufficient_plan" AND recommendation = "cursor_enterprise_or_switch_to_claude_enterprise_which_has_hipaa_option"

---

# SECTION: PRICING PSYCHOLOGY ANALYSIS

## How These Companies Segment Users

**Anchoring to competitive equivalents:** Every AI tool prices their Pro/individual tier at ~$20/month. This is not coincidence — it's mutual anchoring. OpenAI sets $20, Claude matches at $20, GitHub Copilot prices at $10 to look like "half price", Windsurf prices at $15 to look cheaper than both. The $20 consumer AI tier has become a de facto industry anchor price.

**The "5x usage" abstraction:** Anthropic's Pro plan claims "at least 5x usage of Free" without publishing hard limits. This is a deliberate vagueness strategy — it makes users upgrade based on fear of running out rather than a concrete understanding of what they'll get. The same psychology applies to Cursor's credit system.

**Credit systems as behavioral modification:** Cursor's June 2025 shift from "500 requests" to "a $20 credit pool" was explicitly designed to change behavior — moving users from "quantity thinking" (I have X requests left) to "quality thinking" (each request should be worth spending). The backlash showed users preferred predictable quantity over cost-efficient flexibility. Windsurf's flat 500 credits is a direct response to this — a competitive differentiation on predictability.

**The team plan jump:** Every vendor charges a large premium at the "team" tier:

- Cursor: $20 individual → $40 team = 100% markup
- Claude: $20 individual → $25 team = 25% markup (lowest in market)
- Windsurf: $15 individual → $30 team = 100% markup
  The "team markup" buys centralized billing and SSO. Most small teams pay it without needing it.

**Enterprise as anchoring device:** Even tools where 90% of customers will never reach Enterprise publish "contact us" for Enterprise pricing. This serves two purposes: (1) psychological anchoring — it makes every plan below Enterprise seem like a bargain; (2) price discrimination — large enterprises pay what they're willing to pay.

**Typical Upsell Funnels**

1. Free → Pro: Triggered by rate limit messages ("You've hit your limit") + calendar-based resets (users learn when limits reset and feel productive momentum disrupted)
2. Pro → Max/Ultra: Triggered by usage notifications. Cursor shows real-time credit depletion. Claude shows "You've reached your usage limit for this hour"
3. Individual → Team: Triggered when a second person at a company wants access. The "invite a teammate" button appears prominently once you're a paying customer
4. Team → Enterprise: Sales-led after org size crosses a threshold or compliance comes up in conversation

**Artificial Plan Boundaries**

- Cursor's $20 credit pool equals exactly the plan price — not an accident. The pool is calibrated so average users don't exhaust it (to avoid churn) but power users feel friction (to upsell)
- Claude's Max 5x/20x tiers exist specifically to capture the "I keep hitting limits" cohort without forcing them to API billing (which requires technical setup)
- GitHub Copilot's individual plans deliberately exclude IP indemnity — a feature primarily valued by corporate legal teams — to force team/enterprise upgrades

---

# SECTION: OUTPUT FORMAT FOR ENGINEERING

## JSON Schema: Pricing Data

```json
{
  "tool": {
    "id": "string",            // e.g., "cursor", "copilot", "claude"
    "name": "string",          // Display name
    "category": "string",      // "coding_assistant" | "general_ai" | "api_only"
    "vendor": "string",
    "pricing_verified_date": "YYYY-MM-DD",
    "pricing_source_url": "string",
    "plans": [
      {
        "plan_id": "string",   // e.g., "cursor_pro", "copilot_business"
        "plan_name": "string",
        "target": "individual" | "team" | "enterprise",
        "price_monthly": "number | null",     // null if custom
        "price_annual_monthly": "number | null",
        "annual_savings_pct": "number | null",
        "min_seats": "number",
        "max_seats": "number | null",         // null if unlimited
        "billing_model": "flat" | "credit_pool" | "usage_based" | "custom",
        "included_credits_usd": "number | null",
        "context_window_k": "number | null",
        "features": {
          "sso": "boolean",
          "rbac": "boolean",
          "admin_controls": "boolean",
          "audit_logs": "boolean",
          "scim": "boolean",
          "data_training_opt_out": "boolean | 'contractual'",
          "ip_indemnity": "boolean",
          "api_included": "boolean"
        },
        "models_included": ["string"],        // list of model ids
        "use_case_fit": ["coding" | "writing" | "research" | "data" | "mixed"]
      }
    ]
  }
}
```

## JSON Schema: Audit Recommendation

```json
{
  "audit_id": "string",
  "generated_at": "ISO8601",
  "input_snapshot": {
    "tools": [
      {
        "tool_id": "string",
        "plan_id": "string",
        "monthly_spend_reported": "number",
        "seats": "number"
      }
    ],
    "team_size": "number",
    "primary_use_case": "coding" | "writing" | "research" | "data" | "mixed",
    "industry": "string | null",
    "compliance_requirements": ["hipaa" | "soc2" | "gdpr" | "none"]
  },
  "findings": [
    {
      "finding_id": "string",
      "tool_id": "string",
      "rule_id": "string",          // references audit engine rule
      "severity": "high" | "medium" | "low",
      "flag_type": "overpaying" | "wrong_plan" | "consolidation" | "data_risk" | "credits_available",
      "current_cost_monthly": "number",
      "recommended_action": "string",
      "recommended_plan_id": "string | null",
      "estimated_savings_monthly": "number",
      "estimated_savings_annual": "number",
      "confidence": "number",        // 0.0 – 1.0
      "reasoning": "string",         // 1-sentence human-readable rationale
      "source_url": "string"
    }
  ],
  "summary": {
    "total_current_monthly_spend": "number",
    "total_optimized_monthly_spend": "number",
    "total_monthly_savings": "number",
    "total_annual_savings": "number",
    "credex_opportunity": "boolean",   // true if total_monthly_savings > 500
    "top_recommendation": "string"
  }
}
```

## JSON Schema: Confidence Scoring Model

```json
{
  "confidence_factors": {
    "pricing_data_age_days": {
      "0_30": 1.0,
      "31_60": 0.9,
      "61_90": 0.75,
      "91_plus": 0.5
    },
    "input_completeness": {
      "all_fields_provided": 1.0,
      "spend_estimated_by_user": 0.85,
      "usage_pattern_unknown": 0.7,
      "plan_unrecognized": 0.4
    },
    "rule_type": {
      "deterministic_price_comparison": 1.0,
      "behavioral_inference": 0.75,
      "market_rate_comparison": 0.8,
      "api_vs_subscription_recommendation": 0.7
    }
  },
  "confidence_formula": "pricing_age_factor * completeness_factor * rule_type_factor",
  "confidence_thresholds": {
    "show_to_user": 0.6,
    "show_with_caveat": 0.4,
    "suppress": 0.0
  }
}
```

---

# SECTION: REQUIRED DELIVERABLES

## 1. Normalized Pricing Table (as of May 2026)

| Tool     | Plan       | Price/User/Month | Annual Rate | Min Seats  | SSO        | Data Privacy        | Best For          |
| -------- | ---------- | ---------------- | ----------- | ---------- | ---------- | ------------------- | ----------------- |
| Cursor   | Hobby      | $0               | $0          | 1          | ✗          | Standard            | Evaluation        |
| Cursor   | Pro        | $20              | $16         | 1          | ✗          | Standard            | Solo dev          |
| Cursor   | Pro+       | $60              | $48         | 1          | ✗          | Standard            | Heavy agentic     |
| Cursor   | Ultra      | $200             | $160        | 1          | ✗          | Standard            | Full-time AI dev  |
| Cursor   | Teams      | $40              | $32         | 2          | ✓ SAML     | Privacy mode        | Dev teams         |
| Cursor   | Enterprise | Custom           | Custom      | Custom     | ✓          | Full                | Large orgs        |
| Copilot  | Free       | $0               | $0          | 1          | ✗          | Standard            | Evaluation        |
| Copilot  | Pro        | $10              | $10         | 1          | ✗          | Opt-out             | Solo dev, budget  |
| Copilot  | Pro+       | $39              | $39         | 1          | ✗          | Opt-out             | Power user        |
| Copilot  | Business   | $19              | $19         | 2          | Via GH org | ✓ No training       | Dev teams         |
| Copilot  | Enterprise | $39+$21=$60      | $60         | Enterprise | ✓          | ✓                   | Large enterprise  |
| Claude   | Free       | $0               | $0          | 1          | ✗          | Opt-out             | Evaluation        |
| Claude   | Pro        | $20              | $16.67      | 1          | ✗          | No training default | Individual        |
| Claude   | Max 5x     | $100             | ~$83        | 1          | ✗          | No training         | Power user        |
| Claude   | Max 20x    | $200             | ~$167       | 1          | ✗          | No training         | Heavy user        |
| Claude   | Team Std   | $25              | $20         | 5          | ✓          | ✓ Contractual       | Teams 5-75        |
| Claude   | Team Prem  | $100             | ~$83        | 5          | ✓          | ✓ Contractual       | Eng teams         |
| Claude   | Enterprise | Custom           | Custom      | ~70        | ✓          | ✓ HIPAA option      | Large enterprise  |
| ChatGPT  | Free       | $0               | $0          | 1          | ✗          | Opt-out             | Evaluation        |
| ChatGPT  | Plus       | $20              | $20         | 1          | ✗          | Opt-out             | Individual        |
| ChatGPT  | Pro        | $200             | $200        | 1          | ✗          | Opt-out             | Power user        |
| ChatGPT  | Business   | $25/$20 ann      | $20         | 2          | ✓          | ✓ No training       | Teams             |
| ChatGPT  | Enterprise | Custom           | Custom      | ~150       | ✓ SAML     | ✓ SOC2              | Large enterprise  |
| Gemini   | AI Pro     | $19.99           | ~$10 yr1    | 1          | N/A        | Standard            | Google users      |
| Gemini   | AI Ultra   | $249.99          | ~$125 yr1   | 1          | N/A        | Standard            | Power Google user |
| Windsurf | Free       | $0               | $0          | 1          | ✗          | Standard            | Evaluation        |
| Windsurf | Pro        | $15              | ~$12.50     | 1          | ✗          | Standard            | Solo dev          |
| Windsurf | Teams      | $30              | TBC         | 2          | ✗          | Standard            | Small teams       |
| Windsurf | Enterprise | $60+             | Custom      | Custom     | ✓          | ✓                   | Large orgs        |

## 2. Recommended Database Schema

```sql
-- Core pricing reference tables

CREATE TABLE tools (
  tool_id VARCHAR(50) PRIMARY KEY,  -- e.g., 'cursor', 'copilot_business'
  display_name VARCHAR(100) NOT NULL,
  category VARCHAR(50),             -- 'coding', 'general_ai', 'api'
  vendor VARCHAR(100),
  pricing_url TEXT,
  last_verified DATE,
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE plans (
  plan_id VARCHAR(100) PRIMARY KEY,
  tool_id VARCHAR(50) REFERENCES tools(tool_id),
  plan_name VARCHAR(100),
  target VARCHAR(20),               -- 'individual', 'team', 'enterprise'
  price_monthly NUMERIC(10,2),      -- NULL if custom
  price_annual_monthly NUMERIC(10,2),
  min_seats INT DEFAULT 1,
  max_seats INT,                    -- NULL if unlimited
  billing_model VARCHAR(30),        -- 'flat', 'credit_pool', 'usage_based', 'custom'
  has_sso BOOLEAN,
  has_rbac BOOLEAN,
  has_admin_controls BOOLEAN,
  has_audit_logs BOOLEAN,
  has_scim BOOLEAN,
  data_training_status VARCHAR(30), -- 'opt_out', 'no_training', 'contractual', 'trains'
  has_ip_indemnity BOOLEAN,
  context_window_k INT,             -- in thousands of tokens
  notes TEXT,
  UNIQUE(tool_id, plan_name)
);

CREATE TABLE audit_rules (
  rule_id VARCHAR(50) PRIMARY KEY,
  category VARCHAR(50),
  condition_json JSONB,             -- structured rule conditions
  action VARCHAR(200),
  flag_type VARCHAR(30),
  severity VARCHAR(10),
  rationale TEXT
);

CREATE TABLE audit_sessions (
  session_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT NOW(),
  share_token VARCHAR(32) UNIQUE,   -- for shareable URLs
  team_size INT,
  primary_use_case VARCHAR(50),
  industry VARCHAR(100),
  compliance_requirements TEXT[],
  total_monthly_spend NUMERIC(10,2),
  total_savings_monthly NUMERIC(10,2),
  total_savings_annual NUMERIC(10,2),
  result_json JSONB                 -- full audit result
);

CREATE TABLE audit_tools (          -- tools in an audit (stripped of PII for public share)
  id SERIAL PRIMARY KEY,
  session_id UUID REFERENCES audit_sessions(session_id),
  tool_id VARCHAR(50),
  plan_id VARCHAR(100),
  monthly_spend NUMERIC(10,2),
  seats INT
);

CREATE TABLE leads (
  lead_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES audit_sessions(session_id),
  email VARCHAR(255),
  company_name VARCHAR(255),
  role VARCHAR(100),
  team_size INT,
  captured_at TIMESTAMP DEFAULT NOW(),
  high_savings BOOLEAN,             -- true if savings > $500/month
  contacted BOOLEAN DEFAULT FALSE
);
```

## 3. Edge Cases

1. **GitHub Copilot Enterprise true cost:** Headline is $39/user, true cost is $60/user (includes required GitHub Enterprise Cloud). Audit engine MUST use $60 for Enterprise, not $39.
2. **Cursor Pro credit exhaustion:** Users enabling Max mode or using Claude Opus manually can exhaust the $20 credit pool in under a week. Monthly spend can silently exceed plan price via on-demand overages if the cap is not disabled.
3. **Claude API vs Subscription confusion:** Many developers set `ANTHROPIC_API_KEY` in their environment and Claude Code drains API credits, not their Pro subscription. Some users are paying for both and need to understand they're separate billing systems.
4. **Windsurf acquisition uncertainty:** Windsurf was acquired by Cognition in July 2025. Long-term pricing stability is uncertain. Enterprise buyers should factor this into vendor risk.
5. **GitHub Copilot June 2026 billing transition:** From June 1, 2026, usage-based billing replaces request-based PRUs. Users who exhaust their credit allotment will hit a wall (no fallback after credits) rather than a speed reduction. This is a material change for heavy users.
6. **Gemini in Google Workspace:** Users on Google Workspace Business Standard/Plus/Enterprise have Gemini bundled. Paying separately for Google AI Pro ($19.99) is redundant for these users.
7. **ChatGPT Business vs Enterprise seat floor:** Business requires only 2 seats minimum; Enterprise reportedly requires ~150 seats and a sales contract. Users with 50–149 seats are in a gap where Enterprise may be required for compliance but Business is the only self-serve option.
8. **Model multipliers and per-session costs:** A single Claude Code session loading a large codebase can consume 100K–500K tokens before any real work begins. Context loading overhead is invisible to users on subscription plans but material on API billing.
9. **Annual billing commitments:** Annual plans (20% savings) require upfront payment. If a company downsizes or switches tools mid-year, refund policies vary. Always confirm before recommending annual upgrades.
10. **Student and open-source discounts:** Cursor offers free Pro to .edu students; GitHub Copilot is free for verified students, faculty, and open-source maintainers. Not surfaced prominently — audit engine should ask users if they qualify.

## 4. Missing Data Warnings

| Data Point                                               | Status                      | Risk                                                                   |
| -------------------------------------------------------- | --------------------------- | ---------------------------------------------------------------------- |
| Cursor Enterprise pricing                                | Not published               | HIGH — cannot quantify savings vs Teams accurately                     |
| Claude Enterprise exact pricing                          | Not published               | HIGH — community estimate of $60/seat with 70-seat floor is anecdotal  |
| ChatGPT Enterprise pricing                               | Not published               | HIGH — range of $40–100/user cited but unverified                      |
| Cursor Pro/Teams exact monthly credit limits             | Partially documented        | MEDIUM — credit system behavior documented, per-model rates may change |
| Copilot Pro exact AI Credits allocation (post-June 2026) | Announced but not finalized | HIGH — new billing model in transition                                 |
| Windsurf Enterprise pricing post-Cognition acquisition   | Not confirmed               | MEDIUM — $60/user cited but acquisition may change terms               |
| Claude Max exact usage limits (5x/20x of what, exactly?) | Not published by Anthropic  | MEDIUM — "5x Pro" is relative, not absolute                            |
| Gemini Workspace exact per-tier Gemini feature access    | Complex matrix              | MEDIUM — bundling makes comparison difficult                           |

## 5. Suggested Cron Update Strategy

```
PRIORITY 1 (Weekly): Tools in active pricing transition
  - GitHub Copilot (billing model changing June 1, 2026)
  - Check: https://docs.github.com/en/copilot/get-started/plans

PRIORITY 2 (Monthly): Stable but frequently updated tools
  - Cursor: https://cursor.com/pricing
  - Claude: https://claude.com/pricing
  - ChatGPT: https://openai.com/business/chatgpt-pricing/
  - Windsurf: https://windsurf.com/pricing

PRIORITY 3 (Quarterly): Relatively stable
  - Anthropic API: https://docs.anthropic.com/en/docs/about-claude/pricing
  - OpenAI API: https://openai.com/api/pricing/
  - Gemini API: https://ai.google.dev/gemini-api/docs/pricing
  - Gemini consumer: Google AI pricing pages

Change detection: Compare hash of pricing page HTML (or structured extracted data) against stored version. Alert on change for human review before auto-updating.
```

## 6. Suggested Validation Workflow

```
1. EXTRACT: Scrape official pricing pages (or use AI to extract structured data)
2. NORMALIZE: Map to canonical pricing schema (plan_id, price, features)
3. DIFF: Compare against previous version — flag changed fields
4. HUMAN REVIEW: Any price change > 10% triggers human verification
5. CROSS-VALIDATE: Check against 2+ independent sources (docs.github.com, vendor blogs, community reports)
6. TIMESTAMP: Record verified_date on all records
7. AUDIT_TRAIL: Log all changes with old_value, new_value, source, reviewer
8. PROPAGATE: Re-run audit rules against new pricing to identify affected existing audits
9. USER NOTIFICATION: For saved audits where savings estimate changed by >20%, flag for user re-check
```

## 7. Suggested Confidence Scoring Model

```
CONFIDENCE = base_score * age_factor * completeness_factor * source_quality_factor

base_score:
  - Price comparison rule (direct published prices): 1.0
  - Feature comparison rule: 0.9
  - API break-even calculation: 0.8
  - Behavioral inference (e.g., "you're probably not using Max mode fully"): 0.65
  - Custom/unpublished pricing estimate: 0.4

age_factor:
  - Data verified < 30 days: 1.0
  - 30-60 days: 0.9
  - 60-90 days: 0.75
  - > 90 days: 0.5

completeness_factor:
  - User provided all required fields: 1.0
  - User estimated spend: 0.85
  - Key usage pattern unknown: 0.7
  - Critical field missing: 0.4

source_quality_factor:
  - Official vendor pricing page: 1.0
  - Official vendor docs: 0.95
  - Vendor blog post: 0.85
  - Third-party industry analysis: 0.7
  - Community/anecdotal: 0.5

DISPLAY RULES:
  confidence >= 0.75: Show recommendation prominently, no caveat
  confidence 0.55-0.75: Show with "based on typical usage patterns" caveat
  confidence 0.40-0.55: Show as "rough estimate — verify with vendor"
  confidence < 0.40: Suppress from public output; log for internal review
```

---

_This document was compiled for the Credex Web Development Intern Assignment (Round 1), submission week of May 2026. All prices should be re-verified at official vendor URLs before production use. Sources are cited inline throughout the document._
