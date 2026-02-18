# BetTrackr Lite -- Learning Gameplan

## What This Is

A structured learning plan to build a simplified version of [BetTrackr](../BetTrackr) from scratch in Next.js. The goal isn't to memorize syntax -- it's to understand architecture well enough to **guide AI** through building features, and to **review the code** it writes.

---

## My Skill Profile

Assessed Feb 2026. Update this as you learn.

### CSS / Styling -- 7/10
**Strongest area.** Knows Tailwind utility classes, flexbox, responsive breakpoints, centering, and `dark:` prefix. Proactively adds styling without being told.

**Gaps:**
- Padding vs margin (still mixed up sometimes)
- Overflow handling (unfamiliar)
- CSS transitions / animations
- Grid vs Flexbox (when to use which)
- CSS positioning beyond `absolute` and `sticky`

### Architecture -- 7/10
**Reliable judgment now.** Correctly places state, identifies where components belong, and answers architecture questions without guidance. Component folder structure, Context pattern, callback chains, and conditional component modes all understood.

**Gaps:**
- Loading states haven't been on my radar
- Vocabulary is improving but still occasionally imprecise

### React Core -- 7/10
**Building and understanding converging.** Props, children, useState, useEffect, Context, list keys, form wiring, conditional rendering with `&&`, `.map()` for array updates, and conditional component modes all working. Quiz performance now matches building ability (3/3 in M9).

**Gaps:**
- Custom hooks: heard of them, don't know what they are
- Distinguishing Context defaults from Provider values (confuses the placeholder with the real broadcast)
- Passing functions vs data as props -- gets it right when prompted but not instinctive yet

### Tooling -- 5/10
**Growing.** Installed third-party dependencies (recharts), responds to TypeScript hints from the IDE, solid on git.

**Gaps:**
- TypeScript syntax (`: string`, interfaces, `Readonly<>`) is still opaque
- Jump straight to Google on errors rather than reading them
- Dev tools beyond the Elements tab are unused

### JavaScript Fundamentals -- 6/10
**Solid on array methods and object handling.** Destructuring, arrow functions, .map(), .filter(), .reduce(), ternaries, object shorthand `{ id, date }`, and `||` for fallback values all used successfully. `.map()` for array replacement (find-and-swap pattern) understood.

**Gaps:**
- Async/await and fetch (wouldn't know where to start)
- Closures (just a word)
- When 3+ unfamiliar concepts collide in one expression, needs to see the answer first then walk through it
- Spread syntax used but distinction between spread-for-arrays and spread-for-objects still fuzzy

### Next.js -- 4/10
**Basics solid, details fade.** File-based routing understood, layouts understood, `use client` known but doesn't stick between milestones.

**Gaps:**
- `"use client"` needs re-explanation each time it comes up
- Metadata
- Special files (`loading.tsx`, `error.tsx`)
- API routes
- Why Next.js has its own Image/Link components

---

## The Key Insight

My biggest leverage point is **JavaScript fundamentals** -- specifically destructuring, callbacks, arrow functions, and array methods. These aren't separate topics; they're the same pattern React uses everywhere:

| JS Concept | Where React Uses It |
|---|---|
| Destructuring | `const [count, setCount] = useState(0)` |
| Arrow function callbacks | `onClick={() => doSomething()}` |
| `.map()` with callbacks | `items.map(item => <Card />)` |
| Object destructuring | `function Card({ title, body }) { ... }` |

Learning one cluster unlocks four React concepts.

---

## What We're Building

A simplified version of BetTrackr. Core features only, no backend.

### Included:
- Bet entry form (date, bet amount, winning amount, notes)
- Bet history table
- Running balance calculation + stats display
- Balance-over-time chart (recharts)
- localStorage persistence
- Dark mode toggle
- Multiple pages (dashboard + about/settings)

### Stripped (too complex for this phase):
- Auth / login / signup
- Stripe / subscriptions
- MongoDB / Express backend
- CSV import/export
- PDF reports
- Capital injections / tip expenses
- Streak analysis / weekly comparison / profit calculator
- Blog

---

## Milestones

### Milestone 1: Project Setup + Static Layout
**Learn:** Next.js file-based routing, `layout.tsx`, `{children}`, folder structure
**Already know:** Tailwind, flexbox, basic HTML
**Build:** Root layout with header/nav, home page (`/`), about page (`/about`). Static only.
**Key concept:** Folders become URLs. Layouts wrap pages.

### Milestone 2: First Component + Props
**Learn:** Props, destructuring, creating a components folder
**Already know:** What components are, JSX, decomposition
**Build:** A `StatCard` component used 4 times with different hardcoded data.
**Key concept:** One component, many uses, configured by props.

### Milestone 3: State + The Entry Form
**Learn:** `useState` fully, arrow functions, `"use client"`
**Already know:** Forms have inputs and buttons
**Build:** Bet entry form. Submitting adds to an in-memory list. `<BetList>` renders entries.
**Key concept:** State is data that changes and causes the screen to update.

### Milestone 4: Array Methods + List Rendering
**Learn:** `.map()`, callbacks, `key` prop, `.filter()`
**Already know:** Component composition
**Build:** Render entries with `.map()` as `<BetCard>` components. Delete with `.filter()`.
**Key concept:** Transform arrays of data into arrays of components.

### Milestone 5: Computed Stats + Lifting State
**Learn:** Lifting state, sibling component communication, derived values
**Already know:** StatCard, basic state
**Build:** Live stats (total P/L, win rate, balance). Form and stats are siblings sharing data.
**Key concept:** Data flows down through props, events flow up through callbacks.

### Milestone 6: localStorage + useEffect
**Learn:** `useEffect`, dependency arrays, JSON parse/stringify, side effects
**Already know:** State management
**Build:** Entries persist across refreshes via localStorage.
**Key concept:** Side effects happen outside of rendering -- like reading from storage.

### Milestone 7: The Chart
**Learn:** Installing dependencies, using third-party libraries, `useRef`
**Already know:** Array data, computed values
**Build:** Running-balance line chart using recharts.
**Key concept:** Libraries are building blocks you install and configure.

### Milestone 8: Dark Mode + Theme Toggle
**Learn:** React Context, deeper `"use client"` understanding, spread syntax
**Already know:** Tailwind dark: prefix
**Build:** Theme toggle in header, context shares theme across app.
**Key concept:** Context shares data without passing props through every layer.

### Milestone 9: Edit + Delete Flow
**Learn:** Conditional form modes, spread for object updates, complex state
**Already know:** Forms, state, callbacks
**Build:** Click entry to edit. Confirm dialog for deletes. Form switches add/edit modes.
**Key concept:** Components behave differently based on data received.

### Milestone 10: Polish + TypeScript
**Learn:** Interfaces, type annotations, reading error messages
**Already know:** Full app structure, all React patterns
**Build:** Add types for Entry, props, form data. Loading/empty/error states.
**Key concept:** TypeScript catches wrong data before the app runs.

---

## How Each Milestone Works

1. I read what the milestone teaches and what gets built
2. AI asks me architecture questions (what components, where they go, what data they need)
3. **I decide** the structure and tell the AI
4. **I write the code myself** -- AI guides me step by step and explains new concepts before I type them
5. If I get stuck, AI shows me a small snippet -- but I'm the one typing it into the files
6. AI quizzes me on what I just wrote to make sure I understand it

**I am the builder. AI is the teacher.**

---

## Learned from Milestone Chats (for AI)

*How this user learns and thinks. Accumulated from each milestone chat.*

### Milestone 1
- **Needs the "what" before the "how":** When stuck, user doesn't want the answer -- they want to know what options exist and what they do, then they'll pick. Give concepts and choices, not solutions.
- **Thinks in structure first:** Instinct is to create all folders and files before writing any code. Organizes the skeleton, then fills it in. Guide in that order.
- **Prompt-engineers the AI at session start:** Explicitly scripts how the AI should behave ("Before you build anything, ask me how I think the file structure should look"). Follow these instructions literally even if they seem redundant with the rules files.
- **Decision speed tracks learning value, not task complexity:** Architecture/structure questions get instant one-word answers. Meta-learning and concept discussions get deep engagement. Don't spend multiple messages on decisions the user will answer in one word -- save depth for concept explanations and quizzes.

### Milestone 2
- **Honest about knowledge gaps:** Clearly separates "I don't care" (delegation) from "I don't know" (learning opportunity). When they say they don't know, slow down and teach.
- **Thinks in systems:** Checks whether current decisions fit the bigger plan. Optimizes the process, not just the output.
- **Contrast helps concepts click:** Before/after comparisons (with `props.title` vs destructured) work better than just showing the final version.
- **Actively seeks challenge, not comfort:** When given choices, said "whatever you think would be hardest for me." Frame options by learning value ("this one is harder because...") rather than by convenience.
- **Open-ended quizzes on shaky concepts create friction:** Said "Can you take over the quiz?" when faced with an open-ended question they couldn't answer. For concepts still being learned, use multiple choice or offer the explanation and ask a verification question rather than asking them to explain from scratch.
- **Curates meta-learning notes with precision:** Rejects project-detail observations in favor of cognitive/learning insights. When proposing additions to learning notes, lead with cognitive patterns, not project facts.

### Milestone 3
- **Good instincts, imprecise vocabulary:** Said "global state" when the concept was "lifted state in a shared parent." Described the right architecture (bets live in page.tsx, form and list are children) but reached for the wrong term. Give the correct name for things after they describe the concept in their own words.
- **Pattern replication is strong:** After seeing one input wired with `value` + `onChange`, typed the other three correctly without questions. Teach by showing one example, then let them repeat the pattern. Don't over-explain the second, third, fourth instance.
- **Connects new concepts to existing knowledge (even when the connection is wrong):** On the quiz, answered the prop-naming question by talking about spread syntax instead -- they reached for the most recent concept they'd learned rather than the one being asked about. When correcting, explicitly name which concept the question is about before explaining.
- **Over-componentizes HTML elements:** Described the form as needing "several components like header, inputs, labels for inputs, a button." Doesn't yet fully distinguish between a React component (its own file, receives props) and HTML elements inside a component (just JSX tags). When introducing new components, say: "the inputs and buttons are just HTML elements *inside* this one component -- they don't each need their own file."
- **Forms = backend in their mental model:** Initially expected the form to need useEffect "to trigger the backend database" and server-side storage. Their mental model of forms comes from traditional web dev where submitting means a server round-trip. When introducing client-side state, say: "there is no server involved -- this lives entirely in your browser's memory."

### Milestone 4
- **Builds physical analogies to understand abstract concepts:** When functions and data flow felt too abstract, built elaborate real-world models (toasters, shipping/factories, computer hardware) to make them tangible. Analogies work best when kept simple -- when they get too complex they start causing confusion instead of resolving it. Offer a concrete analogy early, but switch to plain-English sentence readings of the code when the analogy stretches thin.
- **User-built analogies stick better than teacher-built ones:** Their own factory/shipping analogy became the most productive mental model of the session. When the user proposes their own analogy, tighten and validate it rather than replacing it. But say "let's drop the analogy" when it spawns sub-analogies -- the user will extend past the breaking point without self-regulating.
- **Functions are the core blocker, not syntax:** The struggle wasn't with `.filter()` or `.map()` specifically -- it was with what a function *is* at a fundamental level. Arrow functions, anonymous functions, callbacks, and nested functions all felt opaque because the base concept of "input -> process -> output" hadn't solidified. When any function-heavy code confuses them, back up to the three-part machine model (what goes IN, what the GUTS do, what comes OUT) before explaining the specific function.
- **Anonymous functions violated their mental model:** Asked "if this is a function, where is the `const [variable name]`?" Every function they'd seen had a `const name =` declaration. An inline function used once was surprising. When introducing anonymous functions, show the named version first, then the inline version, and explain they're identical.
- **Needs to trace the full journey, not just see the destination:** Understanding `onDelete` required walking through every stop it passes through (page.tsx -> BetList -> BetCard) with the name at each stop. Showing just the final usage isn't enough -- trace the complete path from creation to use.
- **Confuses callback parameters with props:** Wrote `bets.map((bet, onDelete) => ...)` -- tried to receive `onDelete` as the second argument to `.map()` instead of from component props. When a component needs both iterated data and parent-passed functions, explicitly label the two sources.
- **Expects all names to be "declared" somewhere before use:** Prop names being invented on the spot violated their assumption that names must exist in advance. Say: "you're making this name up right now -- it doesn't exist anywhere until you type it here."
- **Brings hardware mental models that mislead for client-side concepts:** Mapped React state to server storage and HTTP. This compounds with "forms = backend" from M3. When teaching state or data flow, proactively say: "this is NOT stored on a server -- it's a variable in your browser tab's memory."
- **"Let's move on" means adequate but not solid:** After re-explanations, says "let's move on" rather than "I get it." This means enough understanding to keep building, but expect the concept to resurface on quizzes.

### Milestone 5
- **Math is a separate blocker from code:** Explicitly said "I don't know this kind of math at all." The struggle with win rate wasn't JavaScript or React -- it was percentages. When a coding task involves math, explain the math concept in plain English first (what a percentage *is*, what division *means*) completely separate from the code syntax. Don't assume basic arithmetic operations are obvious.
- **Creates accurate mental models from good explanations:** After the step-by-step walkthrough of `.reduce()`, summarized the accumulator as "it's like reduce has its own internal `let` variable" -- which is precise and useful. When given thorough explanations, the user compresses them into compact, correct models that stick. Invest in the explanation; it pays off.
- **Concrete data traces are the gold-standard format:** After the reduce walkthrough (start at 0, see 50, total becomes 50...), the user proactively asked for the same treatment on winRate. This is the user identifying what works and requesting more. When introducing logic that processes a list, always trace through 3-4 example values showing state at each step.
- **Needs to know where every piece comes from:** Asked explicitly "where did reduce, total, Number, and result come from?" Every piece of an expression needs to be labeled by its origin -- is it built into JavaScript? A name you're choosing right now? Data from another file? Don't assume the user can tell which parts are "the language" vs "their code" vs "someone else's code."
- **Extract complex logic into named variables:** Got lost writing winRate math inline inside JSX. Moving calculations into named `const` variables above the `return` was immediately more manageable. When an expression combines multiple concepts (ternary + filter + division + multiplication), break it into named steps rather than one dense line.
- **Will ask for the answer when too many unknowns stack:** When the winRate line required a new array method + unfamiliar math + a defensive ternary all at once, the user asked to see the answer. They have good self-awareness of when they're in over their head. When three or more unfamiliar concepts collide in one expression, show the answer first, then walk through it -- don't make them build it blind.
- **Lifting state "through the parent" hasn't fully clicked yet:** On the quiz, said BetForm sends a message directly to StatCards. The concept that siblings never talk to each other -- everything routes through the parent via callbacks up and props down -- needs reinforcement in future milestones.
- **Confused by mid-stream plan changes:** When the AI pivoted from "do the math inline" to "extract into variables," the user didn't track the switch. Once committed to an approach, switching requires an explicit callout: "We're changing the plan. Instead of X, we're going to do Y."
- **Right answer, wrong reason is recurring:** Gets the behavioral observation right (StatCards update when bets change) but wrong mechanism (BetForm talks to StatCards directly). When the answer is correct but reasoning is wrong, separate the two explicitly.

### Milestone 6
- **Reaches for structure/abstraction before considering simplicity:** First instinct was to create a new "Store" folder and file for localStorage. Correctly identified that `page.tsx` owns the state, but immediately jumped to adding architecture rather than asking "can I just add a few lines here?" When introducing new features, explicitly ask: "Does this need new files, or can it live in an existing one?" to help build that judgment.
- **Confuses input/output directions but self-corrects:** Swapped "load" and "save" answers -- put the save answer under the load question. But caught the mistake *themselves* before being told ("I feel like one of these is wrong"). Strong self-monitoring. When teaching paired concepts (read/write, get/set, load/save), present them side-by-side with clear labels rather than asking about them separately.
- **Has the right ingredients, struggles to wire them together:** First load useEffect attempt had `getItem`, `JSON.parse`, and the `"bets"` key -- all correct pieces -- but passed `JSON.parse` as a second argument to `getItem` instead of chaining them as separate steps. When a task requires multiple function calls that feed into each other, break it into numbered steps: "Step 1 gives you X. Step 2 takes X and does Y."
- **Function argument nesting is a specific wiring gap:** Tries to stuff one function inside another's argument list rather than saving intermediate results or writing separate lines. This is the same pattern as "has the right ingredients." Emphasize: "these are separate lines, not nested calls."
- **Strings vs variables is a real distinction gap:** Asked a thoughtful question about whether `bets` in `JSON.stringify(bets)` is "the same" as the `useState` bets, and whether renaming it would change behavior. The difference between `"bets"` (a label you pick, in quotes) and `bets` (a reference to existing data, no quotes) was genuinely unclear. Whenever code has a quoted string and an unquoted variable with similar names, explicitly call out: "quotes = arbitrary label, no quotes = referring to your variable."
- **Verifies understanding by restating as a question:** Multiple times -- "so is the someData the same as the useState bets?" This is a strong learning habit. When they do this, confirm correct parts explicitly ("yes, exactly right") and gently correct the rest, rather than re-explaining from scratch.
- **Asks for concrete examples when given abstract definitions:** When told side effects "reach outside of React," immediately asked for examples. Abstract definitions don't land until grounded with 3-5 specific instances.
- **Learns by experimenting:** When asked whether two useEffects could be combined, didn't just reason about it -- actually tried it in the editor and discovered the infinite loop firsthand. This is a strength. Encourage "try it and see what breaks" when the risk is low (dev environment, easy to undo).
- **Leaves old attempts in the code when iterating:** When rewriting the load useEffect, left the broken first attempt on line 30 alongside the new correct version. Didn't clean up before moving on. A minor habit to watch for -- gently prompt "did you remove the old version?" after rewrites.

### Milestone 7
- **Concepts that aren't used regularly don't stick:** `'use client'` was taught in Milestone 3 but was completely gone by Milestone 7 -- said "I don't know what use client means, not even a guess." No shame or guessing, just honest. Concepts need repeated reinforcement across milestones, not just a one-time explanation. When a previously-taught concept reappears, re-explain it briefly rather than assuming it was retained.
- **Reads ahead in the GAMEPLAN and pre-acts:** Imported `useEffect` and `useRef` before being told to, because the milestone description mentioned them. This is initiative, but can lead to unused imports. When a milestone description mentions a concept that won't be needed, flag it early.
- **Traces data origins to the source, but misses intermediate transformations:** When asked where `dataKey="balance"` comes from, answered "from BetForm.tsx which sends them to page.tsx." Traced the data journey all the way back to the form -- which shows strong systems thinking -- but missed that `"balance"` specifically refers to a property name they created *in this file* during the `.map()` transformation. The distinction between "where the raw data originally comes from" and "where this specific label was defined" is a gap. When code transforms data into a new shape, explicitly point out: "you're creating new names here -- these don't exist anywhere else."
- **Reaches for the most recently explained concept on quiz questions:** When asked why the chart auto-updates, answered `'use client'` -- which had just been re-explained minutes earlier. This is the same pattern from Milestone 3 (answered a props question with spread syntax). The most recent explanation is "loudest" in memory. On quiz questions, it may help to preface with: "This answer is about a concept from an earlier milestone" to redirect their mental search.
- **Mnemonics make concepts louder, not clearer:** The memory trick "if it reacts to the user, use client" made `use client` the immediate quiz answer even when irrelevant. Mnemonics are useful for recall but dangerous right before quizzes. Either avoid them before quiz time, or say "the memory trick I just gave you is NOT the answer to these questions."
- **Silence during build predicts poor quiz performance:** Responses during building were "ready," "ok," "Cool" -- no questions. Then quiz revealed significant gaps (2 of 3 wrong). Minimal confirmations during the build phase are not evidence of understanding. Inject comprehension checks mid-build, not just at the end.
- **Building speed is increasing:** The actual coding went smoothly -- no errors, no getting stuck, no asking for answers. The struggles showed up in the *quiz* (understanding) rather than the *building* (execution). This means pattern replication is strong, but conceptual understanding lags behind mechanical ability. Invest more time in the quiz/explanation phase, less in the step-by-step build guidance.
- **Architecture independence is progressing:** Proactively created BalanceChart.tsx, imported it in page.tsx, and rendered `<BalanceChart bets={bets} />` with the correct prop -- all before being guided. Not just "thinks in structure first" anymore; correctly wiring data flow independently.

### Milestone 8
- **Abstract explanations don't land; concrete visual ones do:** "React's world vs the browser's world" was too abstract. The light switch analogy ("setTheme is flipping the switch, useEffect is the wire") clicked immediately. When explaining why two systems need a bridge, use a physical cause-and-effect analogy rather than abstract "worlds" or "layers."
- **Can't visualize tree structure from prose descriptions:** Explaining that ThemeToggle "outside the Provider" wouldn't work didn't register until it was shown as an indented tree diagram with arrows and ✓/✗ marks. When explaining component relationships or nesting, always draw the tree visually rather than describing it in sentences.
- **Traces Context path but confuses defaults with actual values:** When asked where `theme` and `toggleTheme` come from, pointed to the `createContext` defaults (lines 5-8) rather than the `useState` and function definition inside `ThemeProvider`. The distinction between "placeholder defaults" and "the real values being broadcast by the Provider" needs explicit labeling when teaching Context.
- **Building continues to be strong:** Coded everything correctly, added styling improvements on their own (Tailwind classes on the toggle button, `@apply` for body dark styles). Quiz understanding is catching up -- needed re-explanation on 2 of 3 questions, but the simpler re-explanations landed on the first try.

### Milestone 9
- **Architecture instincts are solidifying:** Immediately said `page.tsx` for where editing state belongs, knew ConfirmDialog should be its own component, answered "Props" for how BetForm should know its mode, and correctly identified `.map()` for updating. Every architecture question answered correctly without guidance. This is no longer "good instincts" -- it's reliable judgment.
- **Distinguishes functions from data when prompted, but not instinctively:** Passed `startEditing` (a function) as `editingBet` (which expects data), and `updateBet` as `onEdit` (which should have been `startEditing`). The distinction between "pass the data" and "pass the callback" is clear once pointed out but isn't automatic yet. When multiple props are functions vs data, explicitly label each: "this one is data, this one is a function."
- **"Too much talking not enough code" is a reliable self-advocacy signal:** When the `updateBet` explanation was too abstract, said "it's way too abstract for me" unprompted. This is the same pattern as M5 ("will ask for the answer when too many unknowns stack") but now more direct and confident. When the user says this, immediately switch to showing the code with a data trace -- don't try to re-explain abstractly.
- **Expected a popup for edit mode:** Said "I was expecting a popup but the form just changes." Mental model of "editing" was a separate modal UI, not the same form transforming in place. When introducing conditional component modes, set the expectation upfront: "the same component will change its behavior -- it won't spawn a new UI element."
- **Quiz performance was perfect (3/3).** First clean sweep in the project. Correctly reasoned about why `editingBet.id` preserves identity, why `showConfirm` belongs in BetCard (only that component cares), and what the `&&` pattern does. Understanding is now keeping pace with building ability.
- **Self-catches wiring errors before being told:** Noticed "I think I have a different editingBet" when the prop was wrong, and proactively added the Edit button to BetCard before being guided. Self-monitoring and initiative are both strong and growing.

---

## Progress Tracker

- [x] Milestone 1: Project Setup + Static Layout
- [x] Milestone 2: First Component + Props
- [x] Milestone 3: State + The Entry Form
- [x] Milestone 4: Array Methods + List Rendering
- [x] Milestone 5: Computed Stats + Lifting State
- [x] Milestone 6: localStorage + useEffect
- [x] Milestone 7: The Chart
- [x] Milestone 8: Dark Mode + Theme Toggle
- [x] Milestone 9: Edit + Delete Flow
- [ ] Milestone 10: Polish + TypeScript
