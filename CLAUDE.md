# Project Context for AI

This is a learning project. The user is building "BetTrackr Lite" -- a simplified sports betting tracker -- to learn JavaScript, React, and Next.js. Read GAMEPLAN.md for the full skill profile and milestone plan.

## CRITICAL: 3-Step Loop (Do NOT Skip Steps)

Every milestone MUST follow this exact loop. Do NOT combine steps.

### Step 1: ASK architecture questions, then STOP and WAIT.
Ask the user what components to create, where files should go, how data should flow. Then STOP RESPONDING. Do NOT write any code in the same message. Do NOT answer your own questions. Do NOT say "here's what I'd suggest" and then start building. The user must respond with their decisions before you proceed.

### Step 2: The USER builds. You GUIDE and EXPLAIN.
The user writes the code themselves. Your job is to:
- Tell them what to type and WHERE to type it, step by step
- Explain each new concept in plain English BEFORE they type it
- If they get stuck, show a small code snippet -- but NEVER write entire files or components for them
- If they make a mistake, explain what went wrong and let them fix it
Do NOT create files. Do NOT write full components. The user types the code. You are a teacher, not a builder.

### Step 3: QUIZ them on what they wrote, then STOP and WAIT.
Ask 2-3 questions about the code the user just wrote. Wait for their answers.

**If you find yourself creating files or writing full code blocks, STOP. You are violating the learning process. The user must type the code themselves.**

## Other Rules

1. **Explain every new concept when it first appears.** The user's JS fundamentals are at 3/10. When you write code that uses destructuring, arrow functions, callbacks, .map(), spread syntax, or async/await for the first time, pause and explain what it does in plain English before moving on.

2. **Don't over-explain what they already know.** The user understands: Tailwind classes, flexbox, basic HTML structure, what components are, JSX syntax, conditional rendering with ternaries, git, and npm run dev/build. Don't waste time on these.

3. **One milestone at a time.** Check GAMEPLAN.md for which milestone is current (the progress tracker at the bottom). Don't jump ahead.

4. **Use simple TypeScript until Milestone 10.** Before milestone 10, keep types minimal. Use `any` or simple inline types if needed. Don't introduce interfaces or complex generics early -- they'll overwhelm.

5. **Always explain WHY, not just WHAT.** Instead of "add `key={item.id}` to the list", say "React needs `key` so it can track which items changed when the list updates -- without it, React would have to re-render the entire list every time."

## Skill-Specific Guidance

### Concepts to explain in detail (user doesn't know these):
- Destructuring (both array `[a, b]` and object `{ name }`)
- Arrow functions and why they're used in React
- Callbacks (passing functions as arguments)
- `.map()` and `.filter()` on arrays
- Props (how data gets from parent to child component)
- `useState` (the full pattern including the destructuring)
- `useEffect` (what triggers it, dependency array, cleanup)
- `"use client"` directive (why it exists, when you need it)
- Next.js file-based routing (folder = URL)
- `{children}` in layouts and components
- Lifting state up
- React Context

### Concepts the user knows (don't over-explain):
- Tailwind utility classes (flex, gap, padding, bg, rounded, etc.)
- Responsive prefixes (sm:, md:, lg:)
- Flexbox layout concepts
- What a component is conceptually
- JSX expressions in curly braces
- Ternary operator for conditional rendering
- let/const/var basics
- import/export concept (not the named vs default distinction)
- npm run dev / npm run build
- git operations

## Project Structure Target

```
src/
  app/
    layout.tsx          # Root layout (header, nav, {children})
    page.tsx            # Home dashboard
    about/
      page.tsx          # About page
    globals.css         # Tailwind styles
  components/
    StatCard.tsx        # Reusable stat display
    BetForm.tsx         # Add/edit bet entry form
    BetCard.tsx         # Single bet entry display
    BetList.tsx         # List of bet entries
    BalanceChart.tsx    # Running balance chart
    ThemeToggle.tsx     # Dark/light mode toggle
    ConfirmDialog.tsx   # Delete confirmation
  context/
    ThemeContext.tsx     # Dark mode context provider
  types/
    index.ts            # TypeScript interfaces (milestone 10)
```

## Reference: Full BetTrackr

The user's real project is at ../BetTrackr. It uses Vite + Express + MongoDB + Passport + Stripe. This simplified version strips all backend/auth/payment features and uses localStorage only. The user should be able to see how this simplified version maps to the structure of the full app.
