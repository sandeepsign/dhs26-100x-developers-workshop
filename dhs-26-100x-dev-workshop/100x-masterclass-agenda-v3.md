# The 100x Enterprise Software Development Age
## Applied AI Software Development Masterclass — Full-Day Agenda (v3)

> **Status:** Agenda for stakeholder verification. Detailed content, slides, and lab kits to be developed after sign-off.
> **Timeline:** 9:00 AM – 5:00 PM · **Format:** ~30% concepts / ~60% hands-on builds / ~10% showcase & roadmap

---

## 1. Program Snapshot

| Item | Detail |
|---|---|
| **Audience** | Everyone in the software organization: developers, PMs, architects, QA, program managers, technical directors, product owners |
| **Prerequisite** | Familiarity with the software industry — **no coding background required**; all hands-on is prompt-driven |
| **Platforms** | Claude Code (primary, used to teach all concepts) · OpenAI Codex · Cursor · Replit · V0 · Google Gemini (each demoed where it shines) |
| **Methodologies** | SpecKit (spec-driven development) · OpenSpec (collaborative spec workflows) |
| **Extensibility** | MCP servers · Skills · Sub-Agents |
| **Lifecycle coverage** | PRD → HLD/LLD → architecture diagrams → build (web, mobile, microservice) → docs → bug triage → code review → CI/CD |
| **Teaching principle** | **Claude explains and drives every concept; other tools are used only when demonstrating that specific tool.** |

### What attendees walk away with
Three applications built with their own hands (web app, mobile app, microservice), a complete AI-generated documentation suite, a working enterprise workflow (triage → fix → review → pipeline), fluency in two structured AI-development methodologies, hands-on exposure to six platforms, and a personal 100x roadmap.

---

## 2. Agenda at a Glance

| Time | Module | Hands-On Build | Tools in Play |
|---|---|---|---|
| 9:00 – 9:15 | Welcome · environment check · the 100x thesis | — | — |
| 9:15 – 10:00 | **M1 · Foundations of AI-Native Software Development** | **Build #0:** First feature, four ways (same prompt across tools) | Claude Code (teach) + Cursor, Codex, Gemini (demo) |
| 10:00 – 10:55 | **M2 · AI Development Methodologies & Frameworks** | **Build #1:** Task-tracker app via structured spec methodology | Claude Code + SpecKit, OpenSpec |
| 10:55 – 11:10 | ☕ Break | | |
| 11:10 – 12:10 | **M3 · Building Web Applications with AI** | **Build #2:** Complete web app, prototyped in V0/Replit, hardened in Claude Code, deployed | V0, Replit (demo+lab) · Cursor, Claude Code (lab) |
| 12:10 – 12:55 | 🍽 Lunch + "Ask Me Anything: which tool for which job?" panel/discussion | — | — |
| 12:55 – 1:45 | **M4 · Mobile Apps & Microservices** | **Build #3:** Expo mobile app + supporting microservice with generated API docs | Claude Code (primary) · Replit/Expo (demo) |
| 1:45 – 2:40 | **M5 · MCP Servers, Skills & Sub-Agents** | **Build #4:** Enterprise MCP integration (GitHub/Jira) + one custom Skill + a two-sub-agent workflow | Claude Code (primary) · Gemini CLI extensions (comparison demo) |
| 2:40 – 2:55 | ☕ Break | | |
| 2:55 – 3:40 | **M6 · Documentation & Artifact Generation** | **Build #5:** Full doc suite for Build #2/#3: PRD, HLD, LLD, architecture diagrams, user guide | Claude Code + Claude.ai artifacts (Mermaid diagrams) |
| 3:40 – 4:35 | **M7 · Enterprise Workflows & CI/CD Automation** | **Build #6:** AI-powered dev workflow: bug triage → fix → automated review → CI pipeline + generated tests | Claude Code (primary) · Codex cloud tasks (demo) |
| 4:35 – 5:00 | **Showcase, 100x Roadmap & Wrap** | 3-min team demos · personal transformation roadmap | — |

**Six builds + one comparative exercise. Every module ends with working output on the attendee's own machine or cloud workspace.**

---

## 3. Module Outlines

### M1 · Foundations of AI-Native Software Development (9:15–10:00, 45 min)
- **The paradigm shift:** from writing code to directing agents — the agentic loop (context → action → verification) taught live in Claude Code
- **Platform landscape map:** IDE-native (Cursor), terminal/agentic (Claude Code, Codex CLI, Gemini CLI), cloud/prototyping (Replit, V0), and where each fits in an enterprise
- **Prompting strategies for code generation:** explicit acceptance criteria, examples, plan-first prompting, iterate-with-feedback — concepts taught once in Claude, applicable to every tool
- **Choosing the right tool for the task:** a decision matrix attendees keep (prototype vs. production, solo vs. team, UI vs. backend, regulated vs. open)
- 🛠 **Hands-on (Build #0, 20 min):** environment check, then everyone runs the *same* structured prompt ("add a dark-mode toggle to this starter page") in Claude Code; instructor mirrors it live in Cursor, Codex, and Gemini — attendees compare outputs and behaviors to internalize the landscape

### M2 · AI Development Methodologies & Frameworks (10:00–10:55, 55 min)
- **Why methodology beats raw prompting:** ambiguity in = chaos out; the spec as the contract
- **SpecKit:** specification-driven development — constitution, specify, plan, tasks, implement phases (taught and driven from Claude Code)
- **OpenSpec:** lightweight collaborative spec workflows — change proposals, spec deltas, team review before code
- **From spec to orchestrated execution:** PRD → plan → parallelized, traceable tasks using Claude Code's native plan mode and task tracking
- **Turning ambiguous requirements into structured prompts:** live transformation of a vague stakeholder ask into a testable spec
- 🛠 **Hands-on (Build #1, 25 min):** in pairs, take a 3-line business idea (team task-tracker) through one methodology (rooms split across SpecKit / OpenSpec), produce the spec + plan, and let Claude Code implement the first slice; cross-team debrief on how the methodologies differ

### M3 · Building Web Applications with AI (11:10–12:10, 60 min)
- **Rapid prototyping tier:** V0 (design-to-React) and Replit (idea-to-deployed-app) — when speed-to-demo wins
- **Production tier:** Cursor and Claude Code for full-stack hardening — real repos, tests, review
- **Frontend generation patterns:** React/Next.js scaffolds, component iteration by screenshot, design consistency
- **Backend & APIs with AI:** REST endpoints, data models, validation — spec from M2 carries forward
- 🛠 **Hands-on (Build #2, 35 min):** the day's anchor app —
  1. Prototype the task-tracker UI in **V0 or Replit** (attendee's choice, 10 min)
  2. Import/rebuild into a real repo and harden with **Claude Code** (API routes, persistence, 2 tests)
  3. **Deploy** (Replit or Vercel) — everyone leaves with a live URL
- Non-coders succeed here: every step is prompt-driven; TAs assist with git/deploy clicks

### M4 · Mobile Apps & Microservices Development (12:55–1:45, 50 min)
- **Cross-platform mobile with AI:** React Native + Expo — one prompt-driven path from idea to phone (Expo Go on attendees' own devices)
- **Microservices architecture with AI assistance:** decomposition, service boundaries, and when a monolith is still right — Claude as architecture sparring partner
- **API design & documentation generation:** OpenAPI specs generated and kept in sync
- **Containerization & deployment strategies:** Dockerfile generation, container concepts for non-developers (survey-level)
- 🛠 **Hands-on (Build #3, 30 min):** generate an Expo mobile companion for the M3 task-tracker (list + add screens, live on attendees' phones via QR), then have Claude Code build a small notifications microservice with an auto-generated OpenAPI doc and Dockerfile

### M5 · MCP Servers, Skills & Sub-Agents — The Extensibility Layer (1:45–2:40, 55 min)
- **MCP architecture:** the open standard for connecting AI to enterprise systems — clients, servers, tools/resources (concepts taught in Claude Code; noted that Cursor, Codex, and Gemini all speak MCP too)
- **Connecting to enterprise systems:** live wiring of GitHub and Jira (Jenkins pattern shown); scopes, secrets hygiene, and third-party server risk
- **Custom Skills:** encoding organizational knowledge (standards, templates, procedures) so every AI session follows company rules
- **Sub-Agents:** autonomous specialists (reviewer, researcher, tester) with their own instructions and tool limits; orchestrating them while you focus on strategy
- 🛠 **Hands-on (Build #4, 30 min):**
  1. Configure the **GitHub MCP server** in Claude Code; create an issue from chat (10 min)
  2. Build one **Skill**: "our release-notes format" from a provided template (10 min)
  3. Create a **sub-agent** (code-reviewer with explicit checklist) and run it against Build #2's repo (10 min)
- Comparison demo: the same MCP server attached to Gemini CLI — one standard, many tools

### M6 · Documentation & Artifact Generation (2:55–3:40, 45 min)
- **PRDs in minutes:** interview-style prompting that extracts requirements from a stakeholder conversation
- **HLD & LLD creation:** architecture narratives and component-level designs generated from the actual codebase (not from imagination) — grounding docs in code
- **Auto-generated architecture diagrams:** Mermaid/C4-style diagrams that reflect the real system; regenerating on change
- **User guides & technical docs at scale:** docs-from-code, changelogs, onboarding guides; keeping docs alive in CI
- 🛠 **Hands-on (Build #5, 25 min):** point Claude Code at your Build #2 + #3 repos and generate the complete suite — 1-page PRD (retrofit), HLD with an architecture diagram, LLD for one service, and a non-technical user guide; peer-review a neighbor's PRD against a provided quality rubric

### M7 · Enterprise Workflows & CI/CD Automation (3:40–4:35, 55 min)
- **Intelligent bug triage & prioritization:** AI classifying, deduplicating, and routing incoming defects (Jira/GitHub Issues via M5's MCP wiring)
- **AI-accelerated bug fixing & code review:** reproduce → diagnose → fix → verify loop; sub-agent reviewer from M5 as a quality gate; keeping humans on the approval path
- **CI/CD pipeline configuration & automation:** generating GitHub Actions pipelines; headless AI review in CI; where Codex-style cloud task delegation fits (demo)
- **Test generation & QA strategies:** test suites and edge cases from requirements; QA professionals as AI test directors
- 🛠 **Hands-on (Build #6, 30 min):** on the anchor app —
  1. Seed 3 bugs (provided); have Claude **triage** and prioritize them via the GitHub MCP (8 min)
  2. **Fix** the top bug with a test-first loop (10 min)
  3. Generate a **GitHub Actions pipeline** (lint + tests + AI review step) and watch it run on the fix PR (12 min)

### Showcase, 100x Roadmap & Wrap (4:35–5:00, 25 min)
- Lightning showcase: volunteers demo their live web app / phone app (3 min each)
- **Personal 100x roadmap:** each attendee commits to (1) the tool + methodology they'll adopt Monday, (2) one workflow to automate this quarter, (3) one Skill/MCP integration to propose to their team
- Resource pack distribution (tool decision matrix, prompt pattern cards, methodology cheatsheets, links) · retro

---

## 4. Tool Coverage Matrix

| Tool | Role in the day | Modules |
|---|---|---|
| **Claude Code / Claude** | Primary teaching & building tool for all concepts (agents, specs, MCP, skills, sub-agents, docs, CI) | All |
| **Cursor** | IDE-native workflow demo; production-tier lab option | M1, M3 |
| **OpenAI Codex** | Landscape demo; cloud task-delegation demo in CI/CD | M1, M7 |
| **Replit** | Idea-to-deployed-app prototyping; deploy target | M1(opt), M3, M4 |
| **V0** | Design-to-React rapid UI prototyping | M3 |
| **Google Gemini** | Landscape demo; MCP-portability comparison demo | M1, M5 |

## 5. Requirements

**Participants**
- Laptop: macOS, Windows 10+, or Linux; 8 GB RAM min, ~10 GB free disk, admin rights to install software
- Windows users: WSL2 (or PowerShell) set up
- Node.js 18+, Git, and VS Code installed
- Claude Code installed and logged in with a **paid Claude subscription (Pro)** — provided per participant, set up before workshop day
- A personal email address (and phone) for on-the-fly free sign-ups: Cursor, Replit, V0, GitHub, Google/Gemini — free tiers only
- GitHub account (free)
- Smartphone with Expo Go app (optional, for the mobile lab)
- Basic familiarity with software development concepts — no coding skills required

**Venue / Organizer**
- Reliable Wi-Fi (~5 Mbps per person), no captive portal, AI/dev domains not blocked (claude.ai, github.com, npm, replit.com, v0.dev, etc.)
- Power outlet per seat, projector, pairs seating; TA per ~10 attendees
- Workshop GitHub repo with starter code, seeded bugs, skill/MCP templates, and methodology cheatsheets
- Instructor accounts for demo-only tools (Codex, Gemini, Cursor)
- 1–2 mobile hotspots as backup internet

## 6. Design Decisions Applied (from your direction)
1. **Wide, not deep:** the v2 Claude-certification deep-dive is retired; CCA-F content and exam prep are **dropped** entirely
2. **Claude teaches, others demo:** every concept (agent loop, specs, MCP, skills, sub-agents) is explained and practiced in Claude; Cursor/Codex/Replit/V0/Gemini appear only in demos or labs that showcase that tool's distinctive strength
3. **Your 7 modules kept intact** and time-boxed to 9–5; the abstract's promises (3 app types, 6 platforms, PRD/HLD/LLD/diagrams, bug triage, CI/CD, no-coding prerequisite) are each mapped to a specific module and build
4. **One anchor project** (task-tracker) threads through M2→M7 so artifacts compound instead of restarting each module

## 7. Open Points for Your Verification
1. **Mobile lab depth:** Expo-on-own-phone is the fastest path; confirm attendees may install Expo Go on personal devices (fallback: web preview)
2. **Enterprise systems for M5/M7:** labs use GitHub + a Jira sandbox; confirm if you want Jenkins wired live or shown as a pattern only
3. **Audience mix:** if >50% non-developers, I'd trim M4's microservice portion and extend the documentation module — confirm expected mix
