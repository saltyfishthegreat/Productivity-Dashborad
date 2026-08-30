# Productivity Dashboard

A small SaaS-style dashboard for managing personal project work. The current Week 1 version focuses on a runnable Next.js skeleton, typed task/note data, reusable UI pieces, and clear portfolio evidence before adding full CRUD behavior.

## Product Goal

Productivity Dashboard is designed to answer three practical questions for a product engineer:

- What should I work on next?
- What project notes or technical decisions should I remember?
- How can I turn daily coding work into visible portfolio evidence?

The first sprint intentionally keeps the product simple. It uses static typed data to prove the dashboard structure before introducing form state, persistence, search logic, and more complex interactions.

## Current Features

- Responsive dashboard shell with a sidebar and main content area.
- Task module rendered from mock task data.
- Note module rendered from mock note data.
- Static Add Task screen as a UI entry point for the next sprint.
- Reusable components for task cards, note cards, status badges, and sidebar navigation.
- Core TypeScript models for tasks, notes, status, and priority.

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Open the app in the browser at the local URL printed by Next.js, usually `http://localhost:3000`.

## Project Structure

```txt
src/
  app/
    page.tsx
    layout.tsx
    tasks/
    note/
    addTask/
  component/
    NoteCard.tsx
    Sider.tsx
    StatusBadge.tsx
    TaskCard.tsx
  data/
    noteInfo.json
    taskList.json
  types/
    types.ts
```

## Week 1 Sprint

Goal: build a runnable Productivity Dashboard skeleton with Next.js, TypeScript, Tailwind, a dashboard shell, typed static data, reusable components, and README evidence.

Completed in Week 1:

- Set up a Next.js, TypeScript, and Tailwind project.
- Built the dashboard layout with sidebar navigation and a main content area.
- Added typed task and note models.
- Added static task and note data.
- Rendered task and note modules from data.
- Added an Add Task route as a placeholder for Week 2 CRUD work.
- Verified the app with lint and production build checks.

## Scope Decisions

This version does not include full CRUD, database storage, authentication, real search, or dark mode persistence yet. Those features are intentionally deferred so Week 1 can stay focused on React, TypeScript, Next.js routing, layout, and component boundaries.

Current tradeoffs:

- Mock data is stored locally so the UI can be built before persistence.
- Task and note modules are static so Week 2 can focus on state and forms.
- No Redux or Zustand is used because the current scope does not need a global state library.
- No database or auth is used because this sprint is about the frontend skeleton.

## Next Steps

Week 2 will turn the static task module into a working CRUD flow:

- Add controlled form state for creating tasks.
- Support task status updates.
- Add edit and delete behavior.
- Store tasks in local component state first.
- Move persistence to localStorage after the core interactions are clear.

## Portfolio Notes

This project is part of a month-long transition from Vue-oriented frontend thinking to React, TypeScript, and Next.js product engineering. The Week 1 milestone demonstrates that the application can run locally, render real dashboard modules, and provide a stable base for interactive features.
