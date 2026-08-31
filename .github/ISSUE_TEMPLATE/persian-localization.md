---
name: Persian localization (Vazirmatn + RTL)
about: Add Persian font and RTL support to the dashboard
title: "Add Persian font (Vazirmatn) + RTL support to dashboard"
labels: localization
assignees: ''
---

## Goal

Localize the main dashboard for Persian readers.

## Acceptance Criteria

- [ ] Vazirmatn loaded from a reliable CDN (Google Fonts).
- [ ] `<html dir="rtl" lang="fa">` set.
- [ ] Visible strings translated: "Dashboard", "Admin", "User", "Management", "Sales", "Reports".
- [ ] Only `index.html` is modified.

## Scope

Files: `index.html` only.

## Expected Output

One PR with font import, `dir="rtl"`, and translated visible strings.

## Reference

- SPEC.md in this repo.
