# Issue: global Layout is remounting on error

## Install

Clone and run `npm install` in the directory.

Then, run `npm run dev` to start the server and open [http://localhost:5173](http://localhost:5173)

## Understand

There is a `GlobalComponent` (in `app` folder) that is mounted in the root layout. This component has it's own state that should only be initialized once during the whole app life. It is displayed at the bottom of the screen.

There is a menu with several links:
* **Home**: the home page
* **Other**: another page
* **Loader eroor**: a page where an error is thrown from the loader
* **Unknown**: an unexisting page

## What's wanted

The ability to have a global component that is never unmounted, even on error.

## Issue

When navigating from successfull pages to any page with error (or vice versa), the global layout is unmounted and remonted
when switching between the rendering of the global `ErrorBoundary` and the global `App` components.

Hence, there is no way to have a global component that is never unmounted, even if an error occured.

## Reproduce

1. Open [http://localhost:5173](http://localhost:5173). Check the value displayed at the bottom of the screen.
1. Open dev console (There is an Hydration error that can be ignored, it is due to randomness of the `GlobalComponent`'s state.)
1. Navigate from **Home** to **Other** and vice-versa. The content of the `GlobalComponent` does not change.
1. Navigate to either **Loader error** or **Unknown** and you'llfind that the content of `GlobalComponent` has changed since it as been unmounted and remounted (check console for proof).
1. From ther, navigating to **Loader error** & **Unknown** pages does not affect the state.
1. Navigate then to **Home** or **Other**, the state changes again.
