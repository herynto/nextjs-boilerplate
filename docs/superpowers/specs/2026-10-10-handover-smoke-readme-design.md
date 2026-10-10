# Handover Smoke Line in README — Design

## Context

herynto/nextjs-boilerplate#7 asks for a smoke-test marker line to be added to
`README.md`, so a handover check has a known string to look for after a
pull request lands. The repo is a Next.js boilerplate based on the default
`create-next-app` README, already carrying a few prior lines of its own at
the end; there is no prior smoke-test convention.

## Goal

`README.md` ends with the exact line:

```
Handover buttons smoke test passed.
```

so any later process can grep for it to confirm the handover edit reached
`README.md`.

## Approaches considered

1. **Plain append (recommended).** Add the line as the last line of
   `README.md`, with no new heading or surrounding prose. Matches the issue's
   literal instruction, keeps the diff to one line, and keeps the done
   condition unambiguous (grep for the exact string at end of file).
2. **New `## Handover smoke test` section.** Wrap the line under a heading so
   it reads like a documented feature. Rejected: the issue did not ask for a
   documented feature, and inventing a heading risks disagreeing with what a
   later reviewer expects the README to say about itself.
3. **Insert under an existing section (e.g. "Learn More").** Rejected:
   placement inside existing prose is ambiguous and harder to verify
   mechanically than "last line of the file".

## Decision

Go with approach 1: append the line verbatim as the file's new last line,
with no heading and no other changes to `README.md`.

## Done when

- `README.md`'s last line is exactly `Handover buttons smoke test passed.`
- No other content in `README.md` is changed.
