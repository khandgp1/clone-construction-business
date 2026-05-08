# Expand Hero Section Implementation Plan

The goal is to make the hero section expand to fit the remaining screen height, eliminating any white space below it on initial load.

## User Review Required

> [!NOTE]
> I will be using a combination of Flexbox on the main container and updating the Hero component's height properties to ensure it fills the available viewport height regardless of screen size.

## Proposed Changes

### Core Layout

#### [MODIFY] [App.tsx](file:///Users/khandpv1/Desktop/.AntiGrav/clone-construction-business/src/App.tsx)
- Add `flex flex-col` and `min-h-screen` to the main wrapper to allow the content area to expand.
- Add `flex-grow` to the `<main>` element.

### Hero Component

#### [MODIFY] [Hero.tsx](file:///Users/khandpv1/Desktop/.AntiGrav/clone-construction-business/src/components/Hero.tsx)
- Change `min-h-[580px] md:min-h-[620px]` to `min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-116px)]` or use a more dynamic approach if possible.
- Alternatively, set `min-h-full` if the parent is correctly configured.
- I will opt for `min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-116px)]` to account for the navbar and top-bar heights.

## Checklist

- [x] Modify `App.tsx` to use flexbox layout for full-screen height.
- [x] Update `Hero.tsx` to use dynamic minimum height based on viewport.
- [x] Verify hero section fills the screen on mobile.
- [x] Verify hero section fills the screen on desktop (accounting for top bar).
- [x] Ensure no unwanted scrollbars are introduced on initial load.

## Verification Plan

### Manual Verification
- Open the site in the browser and check if the hero section background and content fill the entire visible area without leaving white space at the bottom.
- Resize the window to test various breakpoints (mobile, tablet, desktop).
- Check with and without scroll to ensure the navbar's "fixed" behavior doesn't cause layout shifts.
