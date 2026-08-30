# Spec: Persian Localization for SB Admin 2 Dashboard

## Problem

The dashboard is in English, left-to-right, with a generic font. Persian users cannot read it comfortably.

## Goal

Add Persian (Vazirmatn) font + RTL support + translate the most visible UI strings.

## Acceptance Criteria

- [x] Vazirmatn loaded from a reliable CDN (Google Fonts).
- [x] `<html dir="rtl" lang="fa">` set.
- [x] Visible strings translated: "Dashboard", "Admin", "User", "Management", "Sales", "Reports".
- [x] Only `index.html` is modified (no CSS/JS refactors for this demo).
- [x] One clean commit + one PR referencing the issue.

## Scope

Files: `index.html` only (+ spec files for the demo workflow).

Out of scope: dark mode, new KPIs, backend changes.

## Definition of Done

PR open, diff shows font import + `dir="rtl"` + translated strings, preview renders correctly on GitHub Pages.
