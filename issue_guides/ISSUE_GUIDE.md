# GitHub Issue Guide

Welcome! This guide explains how to create issues in the Profile Catalog repository.

You only need to remember four things:

1. **One issue = one file** (or one component pair: `x.tsx` + `x.module.css`).
2. **The title starts with a tag**, like `style: ProfileCard - equal card height`.
3. **The issue text has three parts:** Description, Acceptance Criteria, Additional Context.
4. **"Blocked by" is set in the sidebar**, not written in the text.

Short on time? Read `QUICK_REFERENCE.md`. Want to see real issues? Read `EXAMPLE_ISSUES.md`.

---

## Quick Start

1. Go to the **Issues** tab in the repository.
2. Click **New issue**.
3. Choose a template: **Task** (almost always) or **Bug**.
4. Write the title: `tag: Name`.
5. Fill in the three parts. Delete the comment at the top.
6. Click **Create**.
7. Open the new issue. In the right-hand sidebar, set **Blocked by** (if the issue must wait for another issue).

---

## The Title

### Format

```
tag: Name
```

- Start with a **tag** (see the table below), then a colon, then a space.
- The name is a short sentence with normal words and spaces. No kebab-case.
- For an existing component, write `ComponentName - what changes`, with a space, a hyphen and a space.
- For something new, write what you create, for example `Create the PageLayout component`.

### The tags

| Tag | Use it when the issue... | Example |
|-----|--------------------------|---------|
| `feature:` | creates or changes a `.ts` or `.tsx` file (also when a CSS file changes in the same issue) | `feature: Create the PageLayout component` |
| `style:` | creates or changes only CSS, or visual files (fonts, icons, images) | `style: ProfileCard - equal card height` |
| `docs:` | creates or changes only documentation (`README.md`) | `docs: README - folder structure` |
| `test:` | only produces a test or audit report | `test: Keyboard test` |
| `chore:` | changes setup or config files (`.gitignore`, `.env.example`, `index.html`) | `chore: Create .env.example` |
| `fix:` | fixes something that is broken or wrong (use the **Bug** template) | `fix: ProfileCard - job title is cut off` |

**Which tag do I choose?** Look at the files in the issue:

- A `.ts` or `.tsx` file? → `feature:`
- Only CSS (or fonts, icons, images)? → `style:`
- Only `README.md`? → `docs:`
- Only a report file (like `ACCESSIBILITY.md`)? → `test:`
- A setup or config file? → `chore:`
- Is something broken? → `fix:`

If an issue has both a `.tsx` file and a `.css` file, use `feature:`.

### Good and bad titles

✅ **Good:**
- `feature: ProfileCard - show the photo`
- `style: GroupNavigation - button style`
- `docs: README - purpose and installation`
- `fix: Header - logo overflows on small screens`

❌ **Bad:**

| Bad title | Problem |
|-----------|---------|
| `ProfileCard` | No tag, and not clear what to do |
| `feature/add-user-auth` | Old format. Use a colon and normal words |
| `feature: stuff` | Too vague |
| `Style: Fix everything in the grid` | Tags are lowercase, and "everything" is too big for one issue |

---

## The Templates

There are only two templates.

| Template | Use it for | Title tag |
|----------|-----------|-----------|
| **Task** | Almost everything: new components, styling, documentation, tests, setup | `feature:` `style:` `docs:` `test:` `chore:` |
| **Bug** | Something is broken or wrong, including typos | `fix:` |

Not sure? Use **Task**.

---

## The Issue Text

Every issue has three parts, in this order. Keep each part short.

### 1. Description

- The first line is **Files**: the file (or the two files) that this issue changes.
- Then write one to three short sentences: **what** to do, and **why**.

```markdown
## Description
**Files:** `src/components/profileCard/profileCard.tsx`

Add the optional profile photo above the name.
```

If you need to change more than one file (or more than one component pair), the issue is too big. Split it into several issues.

### 2. Acceptance Criteria

A checklist of things that must be true when the issue is done. Each point must be something you can **test** by looking at the page or the code.

✅ **Good:**
- `[ ] The image is round, 150 x 150 px, with object-fit: cover.`
- `[ ] Tested at 320px and 1200px wide, with no horizontal scroll.`
- `[ ] If photo is missing, no <img> is shown.`

❌ **Bad:**
- `[ ] Make it look nice.`
- `[ ] It works.`
- `[ ] Code is good.`

Tips:
- Write exact names, values and file paths.
- Add the tests for this issue as criteria (for example "Tested with the Tab key").
- Do **not** write general items like "build works" or "no console errors". The pull request checklist covers those (see the next section).

### 3. Additional Context

Everything that helps the person who does the issue to get started:

- **Why** this is needed.
- **Short code examples** (only what is needed to explain an idea).
- **WCAG number** when it is about accessibility, for example `WCAG 1.4.3 Contrast (Minimum)`.
- **Links** to read first. Use MDN Web Docs (https://developer.mozilla.org) for HTML and CSS:

```markdown
**Read these first (MDN Web Docs):**
- [CSS: object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/object-fit) – how an image fills its box
```

Only add a link if you have opened it and it works.

### Referring to other issues

Write `#` and the number, for example `#52`. GitHub makes it a link.

---

## Blocked By

Some issues cannot start before another issue is finished. For example, you cannot style a component before it exists.

- **Do not** write "Depends on" in the issue text.
- After you create the issue, open it, find **Relationships** in the right-hand sidebar, choose **Blocked by**, and select the issue(s) that must be finished first.

When do I need it?
- The new issue uses a file or a component that another issue creates.
- The new issue changes a file that another issue also changes. That other issue must be finished first.

---

## No "Definition of Done" in the Issue

The issues do not have a Definition of Done section. The same checklist is used for every pull request instead. It is in the **pull request template**, which appears when you open a pull request.

It checks things like:
- Only the files from the issue were changed.
- `npm run build` works without errors.
- No errors or warnings in the browser console.
- Colors come from CSS variables.
- Contrast and keyboard use are tested (when it matters).
- No secrets or `.env` files in the code.

So the issue only has to say **what** must be done. The pull request shows that it is **done right**.

---

## After You Create the Issue

1. Make a branch from `main`. Name it `issue-<number>-<short-description>`, for example `issue-44-card-photo`.
2. Do the work. Only change the files in the issue.
3. Open a pull request. Fill in the pull request template. Write `Closes #44` (with your number), so the issue closes when the pull request is merged.
4. Ask your supervisor to review.

**Never push to `main`.** `main` updates the live site.

---

## Step-by-Step: Creating an Issue

### Step 1: Find the files
Which file (or file pair) will change? If it is more than one, split the work.

### Step 2: Choose the template and tag
Almost always **Task**. Choose **Bug** if something is broken.

### Step 3: Write the title
`tag: Name`. Check the tag table.

### Step 4: Fill in the three parts
Description (with **Files**), Acceptance Criteria, Additional Context. Delete the comment at the top of the template.

### Step 5: Check before you create
- [ ] The title starts with a tag and a colon.
- [ ] **Files** lists only one file or one component pair.
- [ ] Each acceptance criterion can be tested.
- [ ] No "Depends on" in the text.
- [ ] Links open.

### Step 6: Create it, then set Blocked by
Click **Create**, open the issue, and set **Blocked by** in the sidebar.

---

## Tips for Writing Good Issues

### Be small
❌ `feature: Build the whole header`

✅ `feature: Create the Header component`, `style: Header - layout`, `feature: Header - space for navigation`

### Be specific
❌ "Make the cards look better."

✅ "The card has a 1px border, rounded corners and padding of at least 1rem."

### Think about accessibility
This project follows WCAG. When it fits, add criteria for:
- Contrast: **4.5:1** for text, **3:1** for borders, icons and focus outlines.
- Keyboard: it works with Tab, Enter and Space, and the focus is visible.
- Size: clickable things are at least **44 x 44 px**.
- Small screens: it works at **320px** wide.
- Color is never the only way to show something.

### Use the AI prompt when you need help
If you do not understand an issue, think it is too big, or want to add a new one, use the junior prompt file. It helps you explain, split and write issues, and it checks that the issue does not already exist.

---

## Common Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| No tag in the title | Nobody can see what kind of issue it is | Start with `tag:` |
| Old format `feature/add-login` | Does not match the project | Use `feature: Add login` style titles |
| More than one file in **Files** | The issue is too big | Split it |
| "Depends on" in the text | It is not tracked by GitHub | Use **Blocked by** in the sidebar |
| "Build works" as a criterion | Already in the pull request checklist | Remove it |
| Vague criteria ("make it nice") | Nobody can test it | Write exact, testable points |
| Broken or invented links | Wastes time | Open every link before you save |
| Pushing to `main` | Updates the live site | Always use a branch and a pull request |

---

## Questions?

- **Which template or tag?** Use the tables above, or ask your supervisor.
- **How to write a section?** Look at `EXAMPLE_ISSUES.md`.
- **Is there already an issue for this?** Search the Issues tab, or use the junior prompt file.
- **Unsure about anything else?** Write a comment on the issue and ask your supervisor.

Remember: **small, clear issues make the work easier for everyone.**