# GitHub Issue Quick Reference

Keep this handy while you create issues!

---

## Title Format

```
tag: Name
```

| Tag | Use it when the issue... | Example |
|-----|--------------------------|---------|
| `feature:` | creates or changes a `.ts` or `.tsx` file (also when a CSS file changes in the same issue) | `feature: Create the PageLayout component` |
| `style:` | creates or changes only CSS, or visual files (fonts, icons, images) | `style: ProfileCard - equal card height` |
| `docs:` | creates or changes only documentation (`README.md`) | `docs: README - folder structure` |
| `test:` | only produces a test or audit report | `test: Keyboard test` |
| `chore:` | changes setup or config files (`.gitignore`, `.env.example`, `index.html`) | `chore: Create .env.example` |
| `fix:` | fixes something that is broken or wrong (use the **Bug** template) | `fix: ProfileCard - job title is cut off` |

**Which tag?** `.ts` or `.tsx` → `feature:` · only CSS → `style:` · only `README.md` → `docs:` · only a report → `test:` · config file → `chore:` · broken → `fix:`

A `.tsx` file plus a `.css` file in the same issue → `feature:`

---

## Which Template?

| I want to... | Template |
|--------------|----------|
| Create or change a component, style, README, report or config | **Task** |
| Fix something that is broken or wrong (also typos) | **Bug** |

Not sure? **Task**.

---

## Issue Text

```markdown
## Description
**Files:** `src/...`

What to do, and why. One to three short sentences.

---

## Acceptance Criteria
- [ ] Something you can test.

---

## Additional Context
Examples, WCAG number, links.
```

- **One file**, or **one component pair** (`x.tsx` + `x.module.css`). More files? Split the issue.
- Criteria are **testable**. No "make it nice".
- No "build works" or "no console errors". The pull request checklist covers it.
- Refer to other issues with `#number`.

---

## Blocked By

Never write "Depends on" in the text.

1. Create the issue.
2. Open it.
3. Right-hand sidebar → **Relationships** → **Blocked by**.
4. Select the issue(s) that must be finished first.

---

## Title Examples

✅ **Good:**
- `feature: Create the PageLayout component`
- `style: ProfileCard - equal card height`
- `docs: README - folder structure`
- `test: Color contrast audit`
- `chore: Ignore .env files in git`
- `fix: ProfileCard - job title is cut off`

❌ **Bad:**
- `ProfileCard` (no tag)
- `feature/add-login` (old format)
- `Feature: stuff` (uppercase tag, vague)
- `style: Fix all CSS` (too big)

---

## Before You Create the Issue

- [ ] Title is `tag: Name`
- [ ] **Files** has one file or one component pair
- [ ] Each acceptance criterion is testable
- [ ] Links open (MDN Web Docs)
- [ ] The comment at the top of the template is deleted
- [ ] After creating: **Blocked by** is set in the sidebar

---

## Before You Open the Pull Request

- [ ] Branch name: `issue-<number>-<short-description>`
- [ ] Only the files from the issue are changed
- [ ] `npm run build` works
- [ ] `npm run preview` works
- [ ] No errors in the browser console
- [ ] Pull request template is filled in, with `Closes #<number>`
- [ ] **Not** pushed to `main`

---

## Accessibility Numbers

| What | Requirement |
|------|-------------|
| Text contrast | at least **4.5:1** |
| Borders, icons, focus outline | at least **3:1** |
| Clickable size | at least **44 x 44 px** |
| Smallest screen | **320px** wide, no horizontal scroll |
| Keyboard | Tab, Enter and Space work, focus is visible |
| Color | never the only way to show something |

Check contrast: https://webaim.org/resources/contrastchecker/

---

## If You're Not Sure...

| Question | Answer |
|----------|--------|
| Which template? | Task. Bug only if something is broken |
| Which tag? | Look at the files. See the tag table |
| Is the issue too big? | More than one file or component pair? Split it |
| Does the issue already exist? | Search the Issues tab, or use the junior prompt file |
| Can I see examples? | `EXAMPLE_ISSUES.md` |
| Where is the full guide? | `ISSUE_GUIDE.md` |

---

## Key Numbers

- **6 tags:** feature, style, docs, test, chore, fix
- **2 templates:** Task, Bug
- **3 parts in the issue text:** Description, Acceptance Criteria, Additional Context
- **1 file** (or 1 component pair) per issue

---

## Get Help

- Full guide: `ISSUE_GUIDE.md`
- Examples: `EXAMPLE_ISSUES.md`
- Setup: see `SETUP_INSTRUCTIONS.md`
- Questions: write a comment on the issue, or ask your supervisor

**Remember: small, clear issues make development easier for everyone.**