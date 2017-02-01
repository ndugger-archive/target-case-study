# Target Case Study

## Introduction
I went with React, as it's a react position, and it's also the library that I'm
currently most familiar with. In conjunction with React, I chose to use Styled
Components, which allowed me to define elements by their desired style. This
can help with cutting down on redundant elements in the DOM and allows you to
use JavaScript variables in your styles, like I've done in this exercise.

I do not own my own copy of PhotoShop, so I downloaded a PSD viewer and hoped
that it was as close to the actual design as possible. I only eyed the colors
and sizes, though I did pull a couple from target.com in hopes that they were
the same.

Since I was not able to open it up and pull out the icons and see the font, I
grabbed the closest match I could find from Google; Roboto + Material Icons.

There are some small differences in my product vs the design that I'm more than
willing to speak to and explain my decisions.

## Getting Started
First things first, let's install the project's dependencies via:

`npm install`

Since the code is ES6+, you will need to build the code; I decided to go with
Webpack + Babel. You can run the build process via:

`npm run build`

Once it's built, you'll find the bundled code in the newly created 'dist/'
directory. Once you're ready to run the code, you can do so via:

`npm run server` *(then navigate to localhost:8080)*

I opted to just use the simple 'http-server' module to fulfill the "run using
node" requirement. I did not see the need for a full fledged express app for
this exercise.

Here are some screenshots showing what you should be seeing:
- [Desktop](https://i.imgur.com/0LevEdA.png)
- [Mobile](https://i.imgur.com/Yh6rT4n.png)

I only wrote several tests in order to show that I'm competent with JS unit
testing, so there isn't any sort of impressive code coverage for this exercise,
but you can run the tests via:

`npm run test`

I used Jest as my test runner, Enzyme for shallow component rendering, and
a combination of the two for Jest's snapshot testing.

## Deployment
I would probably use tools like Git, Docker, and Jenkins to trigger continuous
deployment for this react app. The steps would look something like:

1. Develop code
- Push code to VCS (**Git**)
- Trigger automation tests (**Jenkins**)
- If tests pass, trigger build & deployment to staging server (**Docker**)
- Manually verify
- Deploy to production

If the automation tests do not pass, no build or deployment to staging was triggered.

If the manual verification failed, no deployment to production would have been triggered.
