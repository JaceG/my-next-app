# Milestone 6
_Exported on 2/18/2026 at 10:53:55 EST from Cursor (2.5.17)_

---

**User**

Read @GAMEPLAN.md  -- I just finished Milestone 5 and I'm starting
Milestone 6: localStorage + useEffect

Before we build anything, ask me how I think the file structure
should look.

---

**Cursor**

Great, I can see the full plan and all the learning notes from your previous milestones. Milestone 6 is all about **localStorage + useEffect** -- making your bets persist across page refreshes.

Here's what this milestone covers:
- **`useEffect`** -- a hook that lets you run code as a "side effect" outside of rendering (like reading/writing to storage)
- **Dependency arrays** -- how you tell `useEffect` *when* to run
- **`JSON.parse()` / `JSON.stringify()`** -- converting data to and from text so it can be stored
- **localStorage** -- a built-in browser feature that saves data even after you close the tab

Right now, every time you refresh the page, all your bets disappear because they only live in `useState` memory. After this milestone, they'll survive refreshes.

---

So, **Step 1 -- architecture questions for you:**

1. **Where does the localStorage logic need to go?** Think about your current file structure. Which file currently "owns" the bets array (the state)? Do you think the save/load logic belongs in that same file, or in a new file somewhere else?

2. **When should the app *load* saved bets?** Think about the lifecycle of your page -- when is the right moment to pull data out of localStorage and put it into state?

3. **When should the app *save* bets?** Every keystroke? Every time a bet is added or deleted? On some schedule? What triggers a save?

4. **Do you think you need any new components or files for this, or is it all changes to existing files?**

Take your time and tell me what you think the structure should look like.

---

**User**

1. Would it be a Store folder and File? @src/app/page.tsx:9-11 I think this is the bets array? So if not a new file then this file?

2. I think when the form is submitted or when an item deleted?

3. I feel like this one should have the answer for #2, so I got one of these wrong.

4. If I'm right about #1 then yes there might be a new file.

---

**Cursor**

Good thinking -- let me walk through each answer with you.

**#1: You're right that `page.tsx` is where the bets array lives.** You pointed right at it -- `setBets` and `bets` are the state, and that state lives in `page.tsx`. For this milestone, the localStorage logic goes **in that same file**. No new "store" folder or file needed. The reason: localStorage is just two lines of code (`localStorage.setItem` and `localStorage.getItem`), so putting them in a separate file would be like putting a sticky note in a filing cabinet. Later, if persistence got complex (like a database), *then* you'd separate it. But for now, keep it simple -- same file that owns the state.

**#2 and #3: You're right that you mixed these up, and good catch noticing it.** Here's the distinction:

- **SAVE** happens when the data changes -- so yes, when a bet is added or deleted. You got the *saving* answer right, you just put it under the "load" question.

- **LOAD** happens **once, when the page first opens**. Think of it like this: you walk up to your desk in the morning and check your notebook for yesterday's notes. You don't check the notebook every time you write something new -- you check it *once* at the start, then work from memory. Loading from localStorage is that "check the notebook when you sit down" moment.

This is exactly what `useEffect` is for -- running code at a specific moment (like "when the component first appears on screen") rather than during every render.

**#4: No new files needed.** Everything is changes to `page.tsx`. You're adding two behaviors to the file that already owns the data:
1. On first load: read from localStorage into state
2. When bets change: write state to localStorage

---

So the structure is simpler than you expected -- **no new files, no new folders, just new logic in `page.tsx`**. Does that make sense? If so, we can start building. Tell me when you're ready and I'll walk you through the first new concept: `useEffect`.

---

**User**

Okay let's move on

---

**Cursor**

Let me look at your current `page.tsx` so I know exactly what we're working with.

Good -- I can see your file. I notice you already have `useEffect` imported on line 3, so you're one step ahead.

Let's start with the concept before you type anything.

---

## What is `useEffect`?

Everything inside your `Home()` function runs **every time React renders the page** -- when it first loads, when state changes, etc. That's fine for calculating `winRate` or `totalPL`, because those are just math based on the current bets.

But some things **shouldn't run on every render**. Things like:
- Reading from localStorage (you only need to do this once, at the start)
- Saving to localStorage (you only need to do this when bets change)

These are called **side effects** -- they're things that reach *outside* of React (into the browser's storage, in this case). `useEffect` lets you say: "Run this code, but only at the right time."

Here's the shape of a `useEffect`:

```javascript
useEffect(() => {
    // code to run
}, [dependencies]);
```

There are **two parts**:
1. **The function** (the arrow function `() => { ... }`) -- this is the code that runs
2. **The dependency array** (the `[dependencies]` part) -- this tells React *when* to run it

The dependency array works like this:
- `[]` (empty array) = run **once**, when the component first appears on screen
- `[bets]` = run **every time `bets` changes**
- No array at all = run on **every single render** (you almost never want this)

---

## Step 1: Save bets to localStorage when they change

Let's start with saving, because it's the simpler one.

**Where to type:** In `page.tsx`, after your `const balance = totalPL;` line (line 23) and before the `return`, add a `useEffect`.

Inside that `useEffect`, you need to do one thing: save the `bets` array to localStorage. Here's what you need to know:

- `localStorage.setItem("key", "value")` saves a string to the browser's storage under a name you pick
- But `bets` is an **array**, not a string. localStorage can only store strings.
- `JSON.stringify(bets)` converts your array into a text string like `"[{id: 1, ...}, {id: 2, ...}]"`

So your useEffect needs to:
1. Call `JSON.stringify()` on the `bets` array
2. Save that string to localStorage with a key name (like `"bets"`)
3. Have `[bets]` as the dependency array, so it runs every time bets changes

Give it a try -- write the `useEffect` for saving. What do you come up with?

---

**User**

Could you share some examples of things that reach outside of React?

Here is my attempt for the useEffect, I don't know what goes in @src/app/page.tsx:27-28 

---

**Cursor**

Good question first. Examples of things that "reach outside of React":

- **localStorage** -- reading/writing to the browser's storage (what we're doing now)
- **Fetching data from an API** -- reaching out to a server over the network
- **Setting a timer** -- `setTimeout` or `setInterval` are browser features, not React
- **Changing the page title** -- `document.title = "something"` modifies the browser's actual page
- **Listening for window resize or scroll events** -- those are browser events, not React events

The common thread: React's job is to turn data into what you see on screen. Anything that talks to the *browser* or the *outside world* rather than just calculating what to display is a side effect.

---

Now, your attempt! Let me read the full thing.

You're really close! The structure is right -- `useEffect`, arrow function, `[bets]` dependency. You've got the right two pieces (`JSON.stringify` and `localStorage.setItem`), you just need to connect them together.

Right now you have two separate lines that don't talk to each other:
- Line 26 converts `bets` to a string... but doesn't save the result anywhere
- Line 27 calls `setItem()` with nothing inside the parentheses

`localStorage.setItem()` takes **two arguments**:
1. A **key** -- a name you pick, as a string (like `"bets"`)
2. A **value** -- the string you want to save

So you can actually do this in **one line** instead of two -- put the `JSON.stringify(bets)` *inside* `setItem` as the second argument. The shape looks like:

```javascript
localStorage.setItem("someName", JSON.stringify(someData));
```

Try combining your two lines into one. The key name can be whatever you want -- `"bets"` makes sense since that's what you're storing.

---

**User**

so is the someData (which I chose to be 'bets') the same as @src/app/page.tsx:9-10 the useState 'bets'? Like are we calling this or passing it as an arguement? It could be anything, so I feel like if they are the same what does that mean if we could name it something different?

---

**Cursor**

Great question -- there are actually **two different "bets"** happening in that line, and they do different things. Let me separate them:

```javascript
localStorage.setItem("bets", JSON.stringify(bets));
```

- **`"bets"` (with quotes)** -- This is just a label, a name tag for the storage slot. It's a plain string. You could make this `"myData"` or `"savedStuff"` or `"pizza"` -- localStorage doesn't care. It's like writing a label on a drawer. You just need to use the **same label** later when you want to get the data back out.

- **`bets` (no quotes)** -- This is **the variable** from line 9, your `useState` bets. No quotes means JavaScript looks for a variable with that name. This one is **not** arbitrary -- it **has to** be `bets` because that's the name you gave your state on line 9 with `const [bets, setBets] = useState([])`. If you renamed your state to `const [entries, setEntries] = useState([])`, then you'd write `JSON.stringify(entries)`.

So to directly answer: yes, `bets` inside `JSON.stringify(bets)` is the exact same `bets` from line 9. You're passing it as an argument -- saying "take this array that lives in state and convert it to a string."

The fact that the label and the variable happen to both be the word "bets" is just for convenience/readability. You could write:

```javascript
localStorage.setItem("xyz", JSON.stringify(bets));
```

That would work fine -- it just means your storage drawer is labeled "xyz" instead of "bets", which is confusing for a human reading the code but JavaScript doesn't care.

Go ahead and write the combined one-liner to replace your two lines. Then we'll move on to the loading side.

---

**User**

so the reason we use 'bets' is for a label, but the bets arguement will come up as a string for the entire object right?

---

**Cursor**

Exactly right. `JSON.stringify(bets)` takes your entire bets **array** (with all the bet objects inside it) and converts the whole thing into one long string. So if you had two bets, the string would look something like:

```
'[{"id":1,"date":"2026-02-17","stake":"50","result":"75","notes":"Chiefs game"},{"id":2,"date":"2026-02-16","stake":"25","result":"-25","notes":"Bad pick"}]'
```

That's the entire array -- every bet, every property -- squished into a text string. That's what gets stored in the `"bets"` drawer in localStorage.

And later, when we load it back, `JSON.parse()` does the reverse -- takes that long string and turns it back into a real JavaScript array of objects that React can work with.

Go ahead and write that combined line, then we'll tackle the loading side.

---

**User**

I wrote it

---

**Cursor**

That's perfect. Line 25-27 is exactly right:

```25:27:src/app/page.tsx
	useEffect(() => {
		localStorage.setItem('bets', JSON.stringify(bets));
	}, [bets]);
```

Every time `bets` changes (add or delete), this useEffect fires and saves the whole array to localStorage as a string. Nice work.

---

## Step 2: Load bets from localStorage on first page load

Now you need a **second** `useEffect` that does the reverse -- when the page first opens, check localStorage for saved bets and put them into state.

Here's what you need to know:

- `localStorage.getItem("bets")` is the opposite of `setItem` -- it reaches into that `"bets"` drawer and pulls out the string. If nothing's been saved yet, it returns `null`.
- `JSON.parse()` is the opposite of `JSON.stringify()` -- it converts that text string back into a real JavaScript array.
- You'll use `setBets()` to put the loaded data into state.

For this one, the dependency array should be `[]` -- **empty**. That tells React: "run this once, when the component first appears, and never again." You don't want to load from storage every time bets changes -- just once at startup.

One important thing: you need to **check if there's actually saved data before parsing it**. If someone visits for the first time, `getItem` returns `null`, and `JSON.parse(null)` would cause problems. So you'll want an `if` check.

Add a second `useEffect` (you can put it right above or below the save one). It should:
1. Get the item from localStorage using the same `"bets"` key
2. Check if it's not `null`
3. If it exists, parse it and set it as the bets state

Give it a shot!

---

**User**

Ok I tried

---

**Cursor**

I can see what you're going for -- you've got the right pieces (`getItem`, `JSON.parse`, the `[]` dependency), but they're connected wrong. Let me untangle it.

First, **delete the useEffect on lines 29-31** (the one with no dependency array). You only need one loading effect, and the one on lines 33-35 has the correct `[]` dependency.

Now, the issue with line 34: `getItem` only takes **one** argument -- just the key name. It **returns** the string back to you. And `JSON.parse` is a separate step you do *after* getting the string.

Think of it like a two-step process:

1. **Reach into the drawer:** `localStorage.getItem("bets")` gives you back the string (or `null` if nothing's saved)
2. **Convert the string back to an array:** `JSON.parse(thatString)` turns it into real data

So the flow inside your useEffect should be:

```javascript
const saved = localStorage.getItem("bets");
if (saved) {
    setBets(JSON.parse(saved));
}
```

Step by step:
- `getItem` pulls the string out and you store it in a variable called `saved`
- `if (saved)` checks that it's not `null` (meaning something was actually stored before)
- `JSON.parse(saved)` converts the string back into an array, and `setBets()` puts it into state

Try rewriting the useEffect on lines 33-35 with those three lines inside it. Keep the `[]` dependency array -- that part was right.

---

**User**

Okay check it out

---

**Cursor**

Almost there! Lines 31-34 are exactly right -- that's the correct loading logic. The only issue is **line 30** -- that's the old attempt still sitting there. You just need to delete that line:

```30:30:src/app/page.tsx
		localStorage.getItem('bets', JSON.parse(bets) 
```

Delete that entire line so your loading useEffect looks like:

```javascript
useEffect(() => {
    const saved = localStorage.getItem('bets');
    if (saved) {
        setBets(JSON.parse(saved));
    }
}, []);
```

Once you remove that leftover line, you should be good. Go ahead and delete it, then we can test it!

---

**User**

The bet history did not persist when I refreshed

---

**Cursor**

The code looks correct, but there's a sneaky **order problem**. Look at what happens when you refresh the page:

1. Component mounts, `bets` starts as `[]` (from `useState([])` on line 9)
2. React runs your useEffects **in order, top to bottom**
3. **Save effect (line 25) runs FIRST** -- it sees `bets` is `[]` and writes `[]` to localStorage, **overwriting your saved data**
4. **Load effect (line 29) runs SECOND** -- it reads from localStorage, but it now finds `[]` because the save effect just wiped it

The save effect is erasing your data before the load effect gets a chance to read it!

The fix is simple: **swap the order**. Put the load effect above the save effect, so loading happens first.

Move your load useEffect (lines 29-34) to **above** the save useEffect (lines 25-27). So it should look like:

```javascript
// LOAD first (runs once on mount)
useEffect(() => {
    const saved = localStorage.getItem('bets');
    if (saved) {
        setBets(JSON.parse(saved));
    }
}, []);

// SAVE second (runs when bets changes)
useEffect(() => {
    localStorage.setItem('bets', JSON.stringify(bets));
}, [bets]);
```

This way, load reads the real saved data *before* save gets a chance to overwrite it with `[]`.

This is an important lesson: **useEffects run in the order you write them**. When two effects touch the same data (localStorage in this case), the order matters.

Go ahead and swap them, then try adding a bet and refreshing again.

---

**User**

It worked!

---

**Cursor**

Looks clean. Nice work -- your bets now survive page refreshes!

---

## Step 3: Quiz time

Three questions about what you just built:

1. **What would happen if you changed `[bets]` on line 34 to `[]`?** Would saving still work? Why or why not?

2. **You have two useEffects. Why are they separate instead of combining everything into one useEffect?** Could you put both the load and save logic inside a single `useEffect(() => { ... }, [])`?

3. **We saw that the order of the two useEffects mattered -- save was wiping the data before load could read it. In your own words, why did swapping them fix it?**

---

**User**

1. No because it needs to load the bets state I think?

2. No I just tested it and it creates an infinite loop

3. It's order of operations. There was nothing to set because nothing had been gotten.

---

**Cursor**

Good effort -- let me give feedback on each.

**#1: Right answer, wrong reason.** Changing `[bets]` to `[]` on the save effect wouldn't affect *loading* -- loading is the other useEffect. The problem is that `[]` means "run only once, on mount." So it would save `[]` one time when the page loads, and then **never save again**. You could add 10 bets and it would never write them to localStorage because the save effect wouldn't know bets changed. The dependency array is how you tell useEffect "watch this variable and re-run whenever it changes." Take away `bets` from the array, and it stops watching.

**#2: Great that you actually tested it!** You're right that combining them causes a loop. Here's why: if you put load + save in one effect with `[bets]` as the dependency, the load calls `setBets`, which changes `bets`, which triggers the effect again, which calls `setBets` again, forever. And you can't use `[]` for both because then saving only happens once. They need **different dependency arrays** -- that's the fundamental reason they have to be separate effects. Load runs once (`[]`), save runs on every change (`[bets]`).

**#3: That's the right idea.** To make it a bit more precise: when they were in the wrong order, the save effect ran first and wrote `[]` to localStorage (because bets starts as an empty array). Then the load effect ran and read from localStorage -- but it found `[]` instead of the real saved data, because save had just overwritten it. Swapping them means load grabs the real data *before* save gets a chance to overwrite it.

---

That wraps up Milestone 6! You now understand:
- **`useEffect`** and when code runs (on mount vs on change)
- **Dependency arrays** control *when* an effect fires
- **`JSON.stringify` / `JSON.parse`** for converting data to and from strings
- **Effect order matters** when multiple effects touch the same resource

Ready to move on to Milestone 7 (the chart) when you are!

---

**User**

@GAMEPLAN.md I am going to each chat for each milestone I've done so far to ask in numerical order what you all learned about me as a human thinker, like you're a student counselor writing a report on how the student thinks and learns so teachers know how to better help them by putting it in this gameplan. Also make note of my strengths and weaknesses that you learned about. Let me review the changes you want to make before making them. Here are the previous milestone notes: @GAMEPLAN.md:201-230 

---

**Cursor**

Here's what I'd propose adding under the Milestone 5 section. Take a look and let me know if you want anything changed before I write it:

---

### Milestone 6
- **Reaches for structure/abstraction before considering simplicity:** First instinct was to create a new "Store" folder and file for localStorage. Correctly identified that `page.tsx` owns the state, but immediately jumped to adding architecture rather than asking "can I just add a few lines here?" When introducing new features, explicitly ask: "Does this need new files, or can it live in an existing one?" to help build that judgment.
- **Confuses input/output directions but self-corrects:** Swapped "load" and "save" answers -- put the save answer under the load question. But caught the mistake *themselves* before being told ("I feel like one of these is wrong"). Strong self-monitoring. When teaching paired concepts (read/write, get/set, load/save), present them side-by-side with clear labels rather than asking about them separately.
- **Has the right ingredients, struggles to wire them together:** First load useEffect attempt had `getItem`, `JSON.parse`, and the `"bets"` key -- all correct pieces -- but passed `JSON.parse` as a second argument to `getItem` instead of chaining them as separate steps. When a task requires multiple function calls that feed into each other, break it into numbered steps: "Step 1 gives you X. Step 2 takes X and does Y."
- **Strings vs variables is a real distinction gap:** Asked a thoughtful question about whether `bets` in `JSON.stringify(bets)` is "the same" as the `useState` bets, and whether renaming it would change behavior. The difference between `"bets"` (a label you pick, in quotes) and `bets` (a reference to existing data, no quotes) was genuinely unclear. Whenever code has a quoted string and an unquoted variable with similar names, explicitly call out: "quotes = arbitrary label, no quotes = referring to your variable."
- **Learns by experimenting:** When asked whether two useEffects could be combined, didn't just reason about it -- actually tried it in the editor and discovered the infinite loop firsthand. This is a strength. Encourage "try it and see what breaks" when the risk is low (dev environment, easy to undo).
- **Leaves old attempts in the code when iterating:** When rewriting the load useEffect, left the broken first attempt on line 30 alongside the new correct version. Didn't clean up before moving on. A minor habit to watch for -- gently prompt "did you remove the old version?" after rewrites.

---

What do you think? Want me to add, remove, or rephrase anything before I put it in the file?

---

**User**

great job, add it.

---

**Cursor**

Done -- Milestone 6 notes are in the GAMEPLAN. Ready for Milestone 7 whenever you are!

