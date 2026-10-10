# Handover Smoke Line in README Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `README.md`'s last line read exactly `Handover buttons smoke test passed.`, with no other change to the file.

**Architecture:** Single-file text edit. No code, no tests beyond a direct read-back of the file's last line.

**Tech Stack:** Plain text file edit (`README.md`); no build tooling involved.

**Spec:** `docs/superpowers/specs/2026-10-10-handover-smoke-readme-design.md`

## Global Constraints

- The added line must be the exact string `Handover buttons smoke test passed.` (no trailing punctuation changes, no heading).
- No other line in `README.md` may change.

## Review Focus

- A reviewer diffing the PR should see exactly one line added at the end of `README.md` and nothing else touched.
- The file must still end with a single trailing newline after the new line (no double blank line, no missing final newline).

---

### Task 1: Append the smoke line to README.md

**Files:**
- Modify: `README.md`

**Interfaces:**
- Consumes: nothing.
- Produces: `README.md` ending in the line `Handover buttons smoke test passed.`

- [ ] **Step 1: Read the current end of the file**

Run: `tail -n 5 README.md`
Note the current last line and whether the file already ends with a newline.

- [ ] **Step 2: Append the line**

Append a new final line containing exactly:

```
Handover buttons smoke test passed.
```

Use an editor or `printf '%s\n' 'Handover buttons smoke test passed.' >> README.md` — do not use a shell append that drops or duplicates the trailing newline.

- [ ] **Step 3: Verify the result**

Run: `tail -n 1 README.md`
Expected: `Handover buttons smoke test passed.`

Run: `git diff README.md`
Expected: exactly one line added, no other lines touched.

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "docs: add handover smoke test line to README"
```
