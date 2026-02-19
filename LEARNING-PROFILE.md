# Learning Profile: Jace Galloway

**Prepared:** February 2026
**Based on:** 10 structured coding milestones over multiple sessions, building a full React/Next.js web application from scratch
**Purpose:** To give Jace's tutor a detailed, actionable understanding of how he learns -- what works, what doesn't, what to expect, and how to adapt instruction for any programming language or framework.

---

## How to Use This Document

This isn't a list of what Jace knows. It's a map of how his brain processes new technical information, built from hundreds of specific observations across 10 teaching sessions. Every pattern described below was observed multiple times and confirmed across different topics.

The examples are from JavaScript/React, but the patterns apply universally. Each section includes a **"For Any Language"** note explaining how the pattern translates to Java, React Native, Angular, .NET, or whatever comes next.

---

## Section 1: Core Strengths

These are reliable. Build on them.

### 1. Pattern Replication Is Exceptional (Structure, Not Syntax)

Once Jace sees the **structure** of a pattern -- where it goes, what pieces it needs, how it connects to other code -- he can replicate it across multiple instances without additional guidance. After seeing one form input wired up with `value` + `onChange`, he typed the other three correctly with zero questions. After seeing one TypeScript interface created and attached to a component, he independently typed five more across the project.

**Important distinction:** This strength is about **structural and logical patterns**, not syntax memorization. Much of the syntactical accuracy during the project came from IDE autocomplete, not from memory. Jace is candid about this: he finds memorizing syntax near-impossible. The pattern he's replicating is "an interface goes above the function, it lists field names and types, then you attach it with `: InterfaceName` after the props" -- the shape and purpose of the pattern, not the exact characters. Autocomplete fills in the precise syntax. This is a valid and professional workflow, but it means **syntax recall without tooling assistance will be low.** See Section 5 for strategies.

**What this means for the tutor:** Show the pattern once with a thorough explanation of its structure and purpose. Then step back and let him repeat it. Don't over-explain the second, third, fourth instance. But don't mistake fast typing for memorized syntax -- the IDE is doing significant work. If you take the IDE away (whiteboard, paper, verbal quiz), expect syntax to be approximate. That's fine. Focus on whether he knows the structure and intent.

**For any language:** This applies to any repetitive structure: Java class definitions, Angular component decorators, .NET controller methods, React Native StyleSheet patterns. One structural example, then let him go. But always ensure he has IDE support available -- whiteboard coding without autocomplete will produce frustration, not learning.

### 2. Architectural Thinking Is Strong and Growing

Jace consistently thinks about where things belong before thinking about what they do. His instinct is to set up the file/folder structure first, then fill it in. By the end of the 10 milestones, he was independently making correct decisions about where state should live, which pieces of an app need their own files, and how data should flow between parts of a system.

When asked architecture questions (what components do we need? where does the data live? how do these pieces connect?), he answered quickly and correctly -- often in one word. This is his most natural mode of thinking about code.

**What this means for the tutor:** Lead with architecture discussions. "Before we write anything -- where does this live? What talks to what?" He'll engage immediately and make good decisions. This is also a productive way to check understanding: if his architecture answer is wrong, the concept hasn't clicked.

**For any language:** This maps to package/module structure in Java, folder conventions in Angular, project organization in .NET. He'll want to see the big picture before writing line one.

### 3. Honest Self-Assessment

Jace clearly distinguishes between "I don't know" (a learning opportunity -- slow down and teach) and "I don't care" (a delegation -- pick a reasonable default and move on). He also says "that's too much" or "too abstract" when instruction isn't landing, and "let's move on" when understanding is adequate but not solid.

He does not pretend to understand. He does not nod along. If he's lost, he'll say so. This is rare and valuable -- instruction can be calibrated in real time because his feedback is honest.

**What this means for the tutor:** Trust his signals. When he says "I don't know," teach. When he says "I don't care," decide for him and move on. When he says "too abstract" or "too much," switch to showing code immediately. When he says "let's move on," note that the concept isn't fully solid and expect to revisit it later.

**For any language:** These signals are language-independent. They're about cognitive load, not content.

### 4. Self-Generated Mental Models

When a concept is too abstract, Jace builds physical analogies to make it concrete. He's compared functions to toasters, data flow to shipping/factories, and state to computer hardware. These self-built models are more effective than teacher-provided ones because they connect to things he already understands deeply.

**What this means for the tutor:** When he starts building an analogy, validate and tighten it -- don't replace it with your own. His analogies stick better. BUT: he will extend the analogy past its breaking point. He doesn't self-regulate when sub-analogies start spawning. The tutor needs to say "the analogy helped, but let's drop it now and look at the actual code" before it causes more confusion than it resolves.

### 5. Learns by Experimenting

When asked whether two pieces of code could be combined, Jace didn't theorize -- he opened the editor, tried it, and discovered the problem (an infinite loop) firsthand. He also proactively adds styling, creates files ahead of schedule, and imports things before being told. He's an active learner, not a passive one.

**What this means for the tutor:** Encourage "try it and see what happens" whenever the environment is safe (dev server, easy to undo, no production risk). His experimentation instinct is a strength. The catch: he sometimes leaves broken/old code in the file when he moves on. After experiments and rewrites, prompt him to clean up: "did you remove the old version?"

---

## Section 2: How to Explain New Concepts

These are the specific strategies that work, in priority order.

### 1. Concrete Before Abstract (Non-Negotiable)

Abstract definitions don't register until they're followed by 3-5 specific concrete examples. When told that "side effects reach outside of React," Jace immediately asked "like what?" The definition meant nothing until grounded with instances (reading from storage, changing the page title, fetching data from a server).

**Rule:** Never give a definition alone. Always follow with: "For example: [specific thing], [specific thing], [specific thing]."

**For any language:** When introducing interfaces in Java, don't say "an interface defines a contract." Say: "An interface is a promise. Like Comparable promises the object can be sorted. Serializable promises it can be saved to a file. Runnable promises it can be executed as a task. You're saying 'I guarantee this object can do X.'"

### 2. Trace Through Data With Concrete Values

The single most effective teaching format observed across all 10 sessions. When explaining code that processes a list, walk through 3-4 example values showing the state at each step:

> "Start at 0. See the first bet: result is 50. Total becomes 0 + 50 = 50. See the second bet: result is -20. Total becomes 50 + (-20) = 30..."

Jace explicitly requested this format after seeing it once: "Can we do the same thing for this logic?" This is his gold-standard learning format.

**Rule:** When any code loops, filters, accumulates, or transforms data, trace it with real values. Don't describe what it does in prose.

**For any language:** This applies to for loops in Java, LINQ chains in .NET, Array methods in JavaScript, list comprehensions in Python -- any data transformation.

### 3. Label Where Every Piece Comes From

Jace asked: "Where did `reduce`, `total`, `Number`, and `result` come from?" He cannot always tell which parts of an expression are built into the language, which are names he's choosing right now, and which are data from another file.

**Rule:** For any expression with 3+ parts, label each one:
- "reduce" -- built into JavaScript, all arrays have it
- "total" -- a name you're making up right now for the running sum
- "Number" -- built into JavaScript, converts text to a number
- "result" -- a property on your bet object, defined in your types file

**For any language:** In Java: "String" is built into Java. "getName()" is a method you wrote. "person" is a variable from the line above. In .NET: "IEnumerable" is from the framework. "Where" is a LINQ method. "x => x.IsActive" -- "x" is a name you're choosing right now.

### 4. Visual Diagrams Over Prose Descriptions

Explaining that a component "outside the wrapper won't have access" didn't register. Drawing an indented tree with arrows and check/X marks did:

```
App
  ThemeProvider  ← broadcasts theme
    Header  ✓ has access
    Main    ✓ has access
  Footer        ✗ no access (outside the provider)
```

**Rule:** When explaining relationships between parts of a system (components, classes, modules, services), draw the tree. Don't describe it in sentences.

**For any language:** Class hierarchies in Java, dependency injection trees in Angular/.NET, component trees in React Native -- always draw it.

### 5. Simple Physical Analogies, Not Abstract Layers

"React's world vs the browser's world" -- too abstract, didn't land. "setTheme is flipping the light switch, useEffect is the wire that connects the switch to the light" -- clicked immediately.

**Rule:** When explaining why two systems need a bridge/connection, use a single physical cause-and-effect analogy. Avoid "layer" or "world" language.

### 6. Before/After Comparisons

Showing the old way and the new way side by side works better than just showing the new way. The contrast helps the concept click.

**Rule:** When introducing a new syntax or pattern, show the verbose/old version first, then the shorthand/new version, and say "these do the exact same thing."

---

## Section 3: How to Structure a Teaching Session

### The Build Loop That Works

Each teaching unit should follow this cycle:

1. **Architecture first:** Ask where things should go and how they connect. Jace will answer quickly and usually correctly. This is his warm-up.
2. **Explain one new concept** with a concrete example and data trace.
3. **Show the pattern once.** Jace types it.
4. **Step back.** Let him replicate the pattern across similar instances. Don't guide the repetitions unless he asks.
5. **Check understanding mid-build.** Don't wait until the end. Ask "before you type this, what do you think it will do?" His silence during building (responding only "ok," "ready," "done") is NOT evidence of understanding. In one session, he built everything perfectly but then missed 2 of 3 quiz questions.
6. **Quiz with multiple choice.** Open-ended questions on shaky concepts create friction. He explicitly asked for multiple choice. Use it.

### Pacing Signals

| What he says | What it means | What to do |
|---|---|---|
| One-word answers ("page.tsx", "Props", "BetCard") | He knows this -- move fast | Don't belabor it |
| "I don't know" | Genuine gap -- learning opportunity | Slow down. Teach. |
| "I don't care" | Not a learning moment -- he's delegating | Pick a default. Move on. Don't ask follow-ups. |
| "Too abstract" / "Too much talking" | Explanation isn't landing | Stop explaining. Show code immediately. |
| "Can I see the answer?" | 3+ unfamiliar concepts collided | Show it, then walk through it. Don't make him build blind. |
| "Let's move on" | Adequate understanding, not solid | Move on, but expect this to resurface later |
| "This is too much" | Cognitive overload from compound questions | Break it into single decisions. One at a time. |
| Restates understanding as a question ("So is X the same as Y?") | Verifying comprehension -- a strong learning habit | Confirm correct parts explicitly. Correct the rest gently. Don't re-explain from scratch. |
| Responds "ok" / "ready" / "cool" repeatedly during building | Building on autopilot -- understanding may be shallow | Inject a comprehension check before the next step |

### One Concept at a Time

When a task requires multiple new ideas at once (a new array method + unfamiliar math + a defensive check all in one line), Jace gets overloaded. He knows this about himself and will ask to see the answer.

**Rule:** If a single line of code requires 3+ unfamiliar concepts, don't ask him to build it from scratch. Show the finished line first, then trace through it piece by piece. He creates accurate mental models from good walkthroughs -- the investment pays off.

### Don't Batch Design Decisions

Asking "What should the chart show when empty? What about loading? What about errors?" all at once is too much. He said so explicitly. Ask one at a time.

---

## Section 4: Common Misconceptions to Watch For

These are mental model gaps that have surfaced repeatedly. They're not specific to one language -- they represent how Jace initially thinks about programming concepts.

### 1. Functions Are the Core Blocker

The struggle across early milestones wasn't with any specific method or syntax -- it was with what a function fundamentally **is**. Arrow functions, anonymous functions, callbacks, and nested functions all felt opaque because the base concept of "input -> process -> output" hadn't fully solidified.

**What to watch for:** When any function-heavy code confuses him, the issue is likely not the specific function -- it's the general concept. Back up to the three-part model: what goes IN, what the GUTS do, what comes OUT.

**Specific sub-gap -- anonymous/inline functions:** Jace's mental model assumed every function must have a `const name =` declaration. A function used inline once (like a callback) violated that assumption. When introducing callbacks or lambdas in any language, show the named version first, then the inline version, and say "these are identical."

**For Java:** Lambda expressions (`x -> x + 1`) will hit the same wall. Show the full anonymous class version first, then the lambda, and explain they're the same thing.

### 2. Names Must Be "Declared" Somewhere

Jace expects all names to exist somewhere before they can be used. The idea that you can invent a name on the spot -- like a parameter name in a callback, or a property name when passing data -- violated his model. He asked "where is this declared?"

**Rule:** When writing code that introduces a new name, say: "You're making this name up right now. It doesn't exist anywhere until you type it here."

**For any language:** Method parameter names in Java, variable names in lambda expressions, property names in JSON/objects, route parameter names -- all are "made up on the spot."

### 3. Strings vs. Variable References

The difference between `"bets"` (a string label, arbitrary, in quotes) and `bets` (a reference to an existing variable, no quotes) was genuinely unclear. He asked whether changing the string `"bets"` would break the variable `bets`.

**Rule:** Whenever code has a quoted string and an unquoted variable with similar names, explicitly call out: "Quotes = an arbitrary label you're choosing. No quotes = referring to your actual variable. They look similar but are completely unrelated."

**For any language:** This matters in Java (string keys vs variable names in Maps), .NET (string identifiers in configuration vs property names), and everywhere that strings and identifiers coexist.

### 4. Math Is a Separate Blocker

Jace explicitly said "I don't know this kind of math at all" when percentages came up. The coding task wasn't the hard part -- the arithmetic was. Percentages, division, and even what "wins out of total" means conceptually needed explanation before the code syntax.

**Rule:** When a coding task involves math, explain the math in plain English first, completely separate from the code. Don't assume basic arithmetic operations are obvious.

### 5. Forms = Server in His Mental Model

Jace's initial model of forms came from traditional web development where submitting means a server round-trip. He expected client-side forms to need a backend and a database. When working with local/client-side state in any context, proactively say: "There is no server involved. This lives entirely in your browser's/device's memory."

**For React Native:** This will likely resurface. AsyncStorage and local state will feel like they "should" involve a server. Preempt it.

### 6. Nesting Function Calls Instead of Chaining Steps

When a task requires multiple operations that feed into each other (get data, then parse it, then save it), Jace's instinct is to stuff one function inside another's argument list rather than saving intermediate results. He'll write `save(parse(get("key")))` instead of three separate lines.

**Rule:** Break chained operations into numbered steps with intermediate variables. "Step 1 gives you X. Step 2 takes X and does Y. Step 3 takes Y and does Z." Separate lines, not nested calls.

---

## Section 5: Syntax Memorization and Retention

### The Core Challenge: Syntax Does Not Stick

Jace finds memorizing syntax near-impossible. This is not a motivation issue or a practice issue -- it's a fundamental characteristic of how his memory works with symbolic/arbitrary sequences. During the BetTrackr project, much of his syntactical accuracy came from IDE autocomplete, not recall. He is honest about this.

**What this means practically:** If you ask Jace to write a Java method signature on a whiteboard from memory, he'll struggle with the exact order of keywords (`public static void`), where angle brackets go for generics, and precise punctuation. But he'll know *what* the method needs to do, *where* it belongs, and *what connects to it*. The architecture is solid; the spelling is not.

**This is not a barrier to being a competent developer.** Professional developers rely on autocomplete, documentation, and pattern-matching every day. But it does mean syntax needs to be treated as a separate challenge from conceptual understanding, with its own strategies.

### Strategies for Building Syntax Familiarity

These are approaches the tutor should integrate. No single strategy will solve this -- use them in combination.

**1. Autocomplete as a primary tool, not a crutch.**
Jace already leans on IDE autocomplete effectively. During the TypeScript milestone, he discovered `React.FormEvent<HTMLFormElement>` through autocomplete independently. This should be explicitly encouraged as a professional skill: "Knowing how to find the right syntax with your tools is more valuable than having it memorized." Frame autocomplete as a skill to develop, not a weakness to overcome.

**2. Recognize, don't recall.**
When testing syntax knowledge, don't ask "write a for loop from memory." Instead, show two versions and ask "which one is correct?" or "what's wrong with this one?" Recognition is dramatically easier than recall and is closer to how real programming works (you see syntax, you evaluate it, you fix it). This applies to quizzes too -- multiple choice plays to recognition over recall.

**3. Personal syntax reference cards.**
After each session, have Jace write down (in his own words, not copied from docs) the 3-5 syntax patterns he used that day. The act of writing helps, and the card becomes a reference he can scan before the next session. Key: these must be in his own language and format, not textbook definitions. Example:

> **useState with a type:**
> `useState<WhatTypeGoesHere>(startingValue)`
> The type in angle brackets tells it what kind of data. The starting value goes in parentheses.

**4. Repetition across sessions, not within sessions.**
Syntax that's used once in one session and never touched again will vanish completely (like `"use client"` -- taught in session 3, gone by session 7). The same syntax needs to appear in at least 3-4 sessions before it has any chance of sticking. When planning a curriculum, deliberately re-use syntax from previous sessions even if the lesson topic is different.

**5. Read other people's code.**
Expose Jace to working code and ask "what does this do?" rather than "write this from scratch." Reading syntax in context builds passive familiarity over time. This is lower-pressure than writing and still builds recognition.

**6. Typed-along examples over dictated code.**
When the tutor demonstrates a pattern, have Jace type it simultaneously on his machine (with autocomplete available) rather than watching and then trying to reproduce from memory. Muscle memory develops from fingers-on-keyboard, not from watching.

**7. Map syntax across languages explicitly.**
When learning a new language, show the same concept in the language he already knows side by side:

| What you want | JavaScript | Java |
|---|---|---|
| List of items | `string[]` | `List<String>` |
| Function that takes a number | `(id: number) => void` | `void methodName(int id)` |
| Optional value | `Bet \| null` | `@Nullable Bet` or `Optional<Bet>` |

This leverages his pattern-matching strength. The concept transfers; only the spelling changes.

**For the tutor:** Never frame syntax struggles as a failing. Frame them as "the syntax is different from what your brain is good at -- so we use tools and strategies to compensate, just like every professional developer does."

### What Sticks (Conceptual Retention)

- Structural patterns used repeatedly across sessions (component structure, state, props, data flow)
- Concepts he built his own mental model for (reduce as "its own internal variable")
- Anything taught with a concrete data trace
- Architecture decisions (where things go, how they connect)
- The **purpose** and **shape** of syntax patterns, even when exact characters fade

### What Fades

- Exact syntax, especially when not used for several sessions
- Concepts taught once and not revisited. Specific example: `"use client"` was taught in session 3, completely gone by session 7 ("I don't know what that means, not even a guess"). No shame or hedging -- just honest.
- Abstract definitions without grounding examples
- Anything taught right before a quiz via a catchy mnemonic (the mnemonic becomes the "loudest" thing in memory and gets used as the answer to unrelated questions)

**Rule:** When a previously-taught concept reappears, re-explain it briefly rather than assuming it was retained. A 10-second refresher ("Remember, this means X -- we used it back when we did Y") prevents a 5-minute confusion spiral. For syntax specifically, always allow him to look it up or use autocomplete rather than demanding recall.

### The Recency Bias on Quizzes

This pattern appeared in 4 of 10 sessions: when quizzed, Jace reaches for the most recently explained concept as his answer, even when the question is about something different. If you just spent 10 minutes explaining Concept A and then ask a question about Concept B, he'll answer with Concept A.

**Mitigation:** Before asking a quiz question, say: "This question is about [concept name]." This redirects his mental search to the right area. Also: avoid teaching catchy mnemonics right before quiz time.

---

## Section 6: Assessment Strategies

### Use Multiple Choice, Not Open-Ended

Jace explicitly asked for this. Open-ended recall on concepts that aren't fully solid feels like performing, not learning. Multiple choice lets him reason through options, which is how he processes best.

### Separate "Right Answer, Wrong Reason"

This is a recurring pattern. Jace often gets the behavioral observation correct (what happens) but the underlying mechanism wrong (why it happens). When this occurs, don't just say "partially right." Say: "Your answer is correct. But your reason isn't quite right. Here's the actual mechanism."

### When Answers Come With "?"

A question mark means he knows he's guessing. Don't re-teach from scratch. Redirect: "You're guessing. Think about which concept this question is actually about." This is more productive than a full re-explanation.

### Inject Checks Mid-Build, Not Just at the End

In one session, Jace built an entire feature with only "ok" and "ready" responses, then missed 2 of 3 quiz questions. Building ability has outpaced conceptual understanding. The build phase moves fast because pattern replication is strong -- but that doesn't mean the concepts are understood.

**Rule:** Every 2-3 steps during building, ask: "Before you type this, what do you think it will do?" or "Why are we putting this here instead of there?" Don't save all checks for the end.

---

## Section 7: Session Management Tips

1. **He prompt-engineers at session start.** He'll give explicit instructions about how the session should go. Follow them literally, even if they seem redundant.

2. **Decision speed tells you what to invest in.** Quick one-word answers = he knows this, move fast. Long pauses or questions = learning opportunity, slow down. Meta-learning discussions get deep engagement -- these are where the richest learning happens.

3. **He actively seeks challenge.** When given options, he's said "whatever you think would be hardest for me." Frame options by learning value, not convenience.

4. **Don't switch plans without announcing it.** If the approach changes mid-task, say: "We're changing the plan. Instead of X, we're going to do Y." He won't track a silent pivot.

5. **He curates his own learning notes with precision.** He rejects surface-level observations in favor of cognitive/learning insights. When discussing what he learned, lead with patterns in how he thinks, not facts about what was built.

6. **He reads ahead and pre-acts.** If he sees a plan or outline, he'll start working on future steps before being told. This is initiative, not impatience. Channel it -- when it leads to something premature, gently flag it ("we won't need that yet") rather than discouraging the behavior.

---

## Section 8: Current Technical Skill Levels

*As of February 2026, after completing the BetTrackr Lite project.*

| Skill Area | Level | Notes |
|---|---|---|
| CSS / Styling | 7/10 | Tailwind, flexbox, responsive design, dark mode. Gaps: transitions, grid, overflow, positioning. |
| Architecture | 7/10 | Reliably places state, identifies component boundaries, understands data flow. Strongest cognitive skill. |
| React Core | 7/10 | Props, state, effects, context, conditional rendering, list rendering, form handling. Gaps: custom hooks, context defaults vs provider values. |
| Tooling | 6/10 | Effective with IDE autocomplete (a genuine skill -- uses it to discover syntax independently). Git solid. Gaps: reading error messages, dev tools beyond Elements tab. |
| JavaScript | 6/10 | Understands array methods, destructuring, arrow functions, callbacks conceptually. Can use them with IDE assistance. Syntax recall without IDE is low. Gaps: async/await, closures, spread nuances. |
| Next.js | 4/10 | File-based routing, layouts. Gaps: metadata, API routes, special files, `use client` fades between sessions. |
| TypeScript | 4/10 | Understands interfaces, union types, generics, and function types **conceptually** -- knows when and why to use them. Syntax was produced with heavy autocomplete assistance. Without IDE, would struggle to write correct TS syntax from scratch. |
| Syntax Recall | 2/10 | This is a specific, persistent challenge. See Section 5 for detailed strategies. Not a measure of intelligence or programming ability -- it's a memory characteristic that requires tooling-based compensation. |

### What Transfers to Other Languages

| Concept Understood | Java Equivalent | .NET Equivalent | React Native |
|---|---|---|---|
| Interfaces (shape definitions) | Java interfaces / classes | C# interfaces / classes | Same as React |
| Type annotations on parameters | Method parameter types | Method parameter types | Same as React |
| Component architecture | Classes / modular design | MVC / service patterns | Same as React |
| State management | Instance variables | ViewModels / state | useState / Redux |
| Data flow (props down, events up) | Constructor injection / listeners | Events / delegates | Same as React |
| Array transformations (.map, .filter, .reduce) | Streams API | LINQ | Same as JavaScript |

---

## Section 9: Summary for the Tutor

**Jace is a structural thinker who learns by pattern replication and concrete examples.** He picks up architecture decisions quickly, replicates the shape and purpose of code patterns with high accuracy, and self-advocates clearly when instruction isn't landing.

**There is a split between two distinct skills, and they need to be treated differently:**

1. **Conceptual understanding and architecture** (strong and growing) -- he knows *what* to build, *where* it goes, and *why*. Invest teaching time here with data traces, concrete examples, and mid-build comprehension checks.
2. **Syntax recall** (persistently low) -- he cannot reliably reproduce exact syntax from memory. This is not a practice deficit; it's a fundamental memory characteristic. **Do not treat this as a problem to solve through repetition.** Instead, equip him with tooling strategies (autocomplete, reference cards, recognition-based testing) and frame those strategies as professional skills, not accommodations.

**The main teaching investment should be in explanations, not guidance.** He can build faster than he can explain why the code works. Close that gap by investing time in the "why" (data traces, concrete examples, mid-build comprehension checks) rather than the "how" (step-by-step build instructions).

**Four things to always do:**
1. Show one example, then let him replicate the pattern (with IDE available)
2. Trace through code with real data values (his gold-standard format)
3. Label where every piece of an expression comes from
4. Ensure autocomplete / IDE tooling is always available during building -- this is how he produces accurate syntax and it's a legitimate professional skill

**Four things to never do:**
1. Give abstract definitions without concrete examples
2. Batch multiple new decisions into one question
3. Assume silence during building means understanding
4. Test syntax recall from a blank page -- use recognition (spot the error, pick the correct version) instead of recall (write it from scratch)

**When he's stuck:** Back up to physical analogies and concrete data. When he's flying: get out of the way. Trust his signals -- they're accurate.

**On syntax specifically:** The goal is not to make him memorize syntax. The goal is to make him fast and confident at *finding* the right syntax using his tools. That means building autocomplete fluency, knowing what to search for, and recognizing correct vs incorrect syntax when he sees it. This is how most working developers operate. Frame it that way.
