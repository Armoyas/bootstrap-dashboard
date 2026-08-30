# SKILL: persian-dashboard-i18n

## Purpose

Localize the main dashboard by adding Vazirmatn font + RTL + translating visible strings.

## Inputs

- Repo: Armoyas/bootstrap-dashboard
- Issue: #1
- Spec: SPEC.md

## Steps

1. Read SPEC.md and Issue #1.
2. Read index.html from the master branch.
3. Add Vazirmatn import (head section).
4. Set `<html dir="rtl" lang="fa">`.
5. Translate visible strings: "Dashboard", "Admin", "User", "Management", "Sales", "Reports".
6. Keep changes minimal; do not refactor CSS/JS.
7. Create a branch: persian-localization.
8. Commit with a clear message referencing the issue.
9. Push the branch.
10. Open a PR targeting master, linking Issue #1, with a short Persian+English description.

## Guardrails

- Only index.html (+ spec/skill files).
- No unrelated files.
- PR description must mention acceptance criteria and spec.
