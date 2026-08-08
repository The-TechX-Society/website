# Getting Started

## Local Environment Setup

1) Download Node.js and npm (you should have this already, but link is [here](https://nodejs.org/en/download))
2) Download pnpm (typically with npm: [link](https://pnpm.io/installation#using-npm))
3) Clone repository:
    * `cd /PATH/TO/SOFTWARE/PROJECTS` (for me, this is `~/Software/Web`, replace with whatever yours is)
    * `git clone https://github.com/The-TechX-Society/website.git`
4) Install dependencies: `pnpm i`
5) Create an `env.local` file by copying then renaming `.env.example`
    * If you're missing those environment values, ping someone on exec
6) Verify everything runs with `pnpm dev`

## Project Organization and Conventions

Project tree:
```
website/
| - app/ <-- main application, holds all pages and routes
    | - (protected)/ <-- all routes are under auth protection
        | - auth-test/
            | - page.tsx <-- What to show when you go to http://localhost:3000/auth-test
        | - ...
        | - layout.tsx <-- Common structure of all subpages of (protected)
    | - (public)/ <-- all routes visible to anyone    
        | - auth/ <-- all auth-related pages (generated from the template)
            | - confirm
                | - route.ts <-- this is a REST API route (backend logic)
            | - ...
    | - page.tsx <-- Displayed at http://localhost:3000/ (index route)
    | - ...
| - components/ <-- mirrors structure of app, holds UI 
    | - (protected)/
        | - ... 
    | - (public)/     
        | - auth/
            | - forgot-password/ <-- the directory stores components used in the corresponding page
                | - forgot-password-form.tsx
            | - ...
    | - ui/ <-- reusuable UI components
        | - ...        
| - lib/ <-- for logic and utilities
    | - config/
        | - routes.ts <-- configuration for which endpoints are public vs protected
    | - supabase/
        | - ...
    | - ...
| - .env.local <-- make this!
| - biome.json <-- linter configuration
| - package.json <-- commands, scripts, and project config
| - proxy.ts <-- intercepts requests and runs handling (in this case, auth check)
| - ...
```

These are just general guidelines, exceptions always exist. Use your best judgement.

### Tailwind CSS

This project has TailwindCSS configured, which gives you a bunch of pre-made CSS classes that you can use. E.g.
```
<div className="mt-4 text-center text-sm">
```

Which translates to:
```
.example-class {
    margin-top: 1rem; // mt-4
    text-align: center; // text-center
    font-size: 0.875rem; // text-sm
    line-spacing: 1.25rem; // text-sm
}
```

This means you don't have to make custom CSS classes, for the tradeoff that each element is individually styled (hard to change across the board). This is a fine tradeoff here because React mostly reuses components, so most of the time each element gets its own set of custom styles anyway. Feel free to use either, whichever you feel most comfortable with.

### Language Conventions

The normal set for TypeScript:
* Classes, Interfaces & Types - PascalCase
* variables & functions - camelCase
* files - kebab-case 

And same for CSS:
* selectors - kebab-case

### Next.js Server vs. Client components

At the top of some components (e.g. update-password-form.tsx), you'll see a `"use client"` directive. This marks a component as a client component, whereas no directive makes it a server component.

This distinction is necessary because Next.js utilizes server-side rendering (SSR), which basically means: "just in case the user's computer a potato from the 2000s and would load super slow, we'll pre-render the different webpages in this application on the server and send that over rather than having the user load the webpage".
This is a modern standard because of faster initial page loads (among other benefits, like SEO). But this capability doesn't extend to interactive components, so those will have to be rendered on the user's computer. For us, that basically means that anything using React hooks will need to be client components.

## Development Flow

1) Choose an issue from the Github issues list   
    * Or, if you have an idea you'd like to build out that's not in the list, write your own issue
2) Create branch off main for this feature + build it out
3) Test your feature (if applicable)
4) Put it in a PR (w/ a description referencing the ticket!), requesting an exec member to review
5) Good to merge yourself once PR is approved
