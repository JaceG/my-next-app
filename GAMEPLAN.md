# BetTrackr Lite -- Learning Gameplan

## What This Is

A structured learning plan to build a simplified version of [BetTrackr](../BetTrackr) from scratch in Next.js. The goal isn't to memorize syntax -- it's to understand architecture well enough to **guide AI** through building features, and to **review the code** it writes.

---

## My Skill Profile

Assessed Feb 2026. Update this as you learn.

### CSS / Styling -- 6/10
**Strongest area.** I know Tailwind utility classes, flexbox, responsive breakpoints (`sm:`, `md:`), and centering with flex. I can read most Tailwind class strings and understand what they do.

**Gaps:**
- Padding vs margin (I mix them up)
- Overflow handling (unfamiliar)
- CSS transitions / animations
- Grid vs Flexbox (when to use which)
- Dark mode (`dark:` prefix -- didn't know about it)
- CSS positioning beyond `absolute` and `sticky`

### Architecture -- 5/10
**Good instincts, missing vocabulary.** I naturally break UIs into the right number of components. I understand a Button should be configurable (one component, many styles) rather than making separate buttons. I think about error states.

**Gaps:**
- Don't know where files/folders should go (conventions)
- Don't understand where data "lives" in an app
- Persistence concepts (localStorage, databases) are unclear
- Loading states haven't been on my radar
- Can describe features to AI at a medium level, but lack the technical vocabulary to be specific

### React Core -- 4/10
**I think in components but can't wire them.** I know what components are, understand JSX (expressions, conditionals), and know state changes cause updates.

**Gaps:**
- Props: don't understand how a component receives data
- `{children}`: don't know the mechanism
- Lifting state: don't know how sibling components share data
- `useEffect`: heard of it, don't understand it
- List keys: never encountered
- Custom hooks: heard of them, don't know what they are
- Form wiring: know the pieces but can't connect them
- Event handlers: the arrow function syntax in `onClick={() => ...}` confuses me

### Tooling -- 4/10
**Can operate tools, can't read their language.** I know `npm run dev`/`build`, understand what TypeScript *is*, and I'm solid on git.

**Gaps:**
- TypeScript syntax (`: string`, interfaces, `Readonly<>`) is opaque
- Jump straight to Google on errors rather than reading them
- Don't know how to add dependencies beyond "npm install something"
- Dev tools beyond the Elements tab are unused

### JavaScript Fundamentals -- 3/10
**The foundation has holes that affect everything.** I know let/const/var, ternaries, and that imports pull from other files.

**Gaps:**
- Arrow functions (seen them, can't explain them)
- Destructuring (`const { name } = obj` confuses me)
- Spread syntax (`...` is unclear)
- Template literals (backtick strings are hazy)
- Callbacks (concept is fuzzy)
- Array methods (`.map()`, `.filter()` -- don't know these)
- Async/await and fetch (wouldn't know where to start)
- Closures (just a word)
- `const` with objects (didn't know you can change properties of a const object)

### Next.js -- 2/10
**Thinnest area.** Had a surface-level grasp of layouts but not the mechanics.

**Gaps:**
- File-based routing (don't know that folders become URLs)
- Server vs Client components (`"use client"` is new)
- Nested layouts and how `{children}` works in them
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

### Milestone 2
- **Honest about knowledge gaps:** Clearly separates "I don't care" (delegation) from "I don't know" (learning opportunity). When they say they don't know, slow down and teach.
- **Thinks in systems:** Checks whether current decisions fit the bigger plan. Optimizes the process, not just the output.
- **Contrast helps concepts click:** Before/after comparisons (with `props.title` vs destructured) work better than just showing the final version.

### Milestone 3
- **Good instincts, imprecise vocabulary:** Said "global state" when the concept was "lifted state in a shared parent." Described the right architecture (bets live in page.tsx, form and list are children) but reached for the wrong term. Give the correct name for things after they describe the concept in their own words.
- **Pattern replication is strong:** After seeing one input wired with `value` + `onChange`, typed the other three correctly without questions. Teach by showing one example, then let them repeat the pattern. Don't over-explain the second, third, fourth instance.
- **Connects new concepts to existing knowledge (even when the connection is wrong):** On the quiz, answered the prop-naming question by talking about spread syntax instead -- they reached for the most recent concept they'd learned rather than the one being asked about. When correcting, explicitly name which concept the question is about before explaining.

### Milestone 4
- **Builds physical analogies to understand abstract concepts:** When functions and data flow felt too abstract, built elaborate real-world models (toasters, shipping/factories, computer hardware) to make them tangible. Analogies work best when kept simple -- when they get too complex they start causing confusion instead of resolving it. Offer a concrete analogy early, but switch to plain-English sentence readings of the code when the analogy stretches thin.
- **Functions are the core blocker, not syntax:** The struggle wasn't with `.filter()` or `.map()` specifically -- it was with what a function *is* at a fundamental level. Arrow functions, anonymous functions, callbacks, and nested functions all felt opaque because the base concept of "input -> process -> output" hadn't solidified. When any function-heavy code confuses them, back up to the three-part machine model (what goes IN, what the GUTS do, what comes OUT) before explaining the specific function.
- **Needs to trace the full journey, not just see the destination:** Understanding `onDelete` required walking through every stop it passes through (page.tsx -> BetList -> BetCard) with the name at each stop. Showing just the final usage isn't enough -- trace the complete path from creation to use.

---

## Progress Tracker

- [ ] Milestone 1: Project Setup + Static Layout
- [ ] Milestone 2: First Component + Props
- [ ] Milestone 3: State + The Entry Form
- [ ] Milestone 4: Array Methods + List Rendering
- [ ] Milestone 5: Computed Stats + Lifting State
- [ ] Milestone 6: localStorage + useEffect
- [ ] Milestone 7: The Chart
- [ ] Milestone 8: Dark Mode + Theme Toggle
- [ ] Milestone 9: Edit + Delete Flow
- [ ] Milestone 10: Polish + TypeScript
