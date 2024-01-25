## README

Functionality and demo:

1. Post are shown in the homepage, with images / author and metadata included
2. Clicking on a post will show its comments
3. Clicking on a tag will filter and display all posts with that tag
4. Signing in with a Google Account will display an Admin view where you can see
   all accounts that have logged in with Google (protected view)
5. You can also log out and the views and protected routes will update accordingly

This is a Next.js project, it features:

* Server-side requests and rendering, for faster loading times
* Optimized fonts and images
* Clean architecture folder structure: /api, /components, /firebase and /types
* Basic unit tests of common components, jest configuration to extend testing
* Database persistance with Firestore + Google Sign In
* Responsive design and CSS Modules

## Commands:

```
// Run dev environment
npm run dev

// Run tests
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
