# React Router Dom - Unexpected Route Behavior for Non-Existent Routes

This repository demonstrates a common issue encountered when using React Router Dom: unexpected behavior when navigating to non-existent routes.

The bug is caused by the absence of a catch-all route (`/*`) in the `Routes` component. Without a catch-all route, when a user attempts to navigate to a route that doesn't have a matching route definition, the application either displays a blank page or might unexpectedly crash, depending on other error handling in the app.

The solution shows how to add a catch-all route using `Route` component with `path="*"` which handles any unmatched routes allowing you to display a custom 404 page or handle the error in an appropriate way. 

## How to reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to a non-existent route like `/nonexistent`.

## Solution

The solution involves adding a `Route` component with `path="*"` within the `Routes` component to act as a catch-all route that displays a 404 page when the application doesn't find a match for the requested URL.