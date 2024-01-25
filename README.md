## README

Access the website through https://infobae-challenge.vercel.app. Short navigation demo:

https://github.com/andrescuco/infobae-challenge/assets/36432023/080813d3-59e8-483a-9348-dec8ee480cc8

1. Post are shown in the homepage, with images / author and metadata included
2. Clicking on a post will show its comments
3. Clicking on a tag will filter and display all posts with that tag

Account Management Demo:

<img width="594" alt="image" src="https://github.com/andrescuco/infobae-challenge/assets/36432023/ca04376d-adc7-4fd8-b330-ce7f31a3a017">
<img width="1582" alt="image" src="https://github.com/andrescuco/infobae-challenge/assets/36432023/55900b76-0dd9-4f40-9a7a-8541fb1e00e9">

5. Signing in with a Google Account will display an Admin view where you can see
   all accounts that have logged in with Google (protected view)
6. You can also log out and the views and protected routes will update accordingly

This is a React project using Next.js, it features:

* Server-side requests and rendering, for faster loading times
* Optimized fonts and images
* Clean architecture folder structure: /api (calls to Firestore and Dummy API), /components, /firebase (Non-relational DB configuration) and /types
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
