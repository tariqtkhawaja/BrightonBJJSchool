# Brighton BJJ School

Building a website for my Brazilian Jiu Jitsu Club using React and Styled
Components.

## The Process

I set out to build a simple website for my BJJ club - Brighton BJJ School. I did
this as I wanted to help the club launch their new site and I saw it as an
opportunity to get more expierence with Tools I wanted to use. It was a useful
exchange and a project that I really learnt from, Mainly I wanted to get to
grips with using Styled Components

The Goal was to create a simple website made up of the following pages:

- Homepage
- Who We Are
- Our Values
- What is BJJ
- Timetable
- Contact Us

As the project grew so did my ambition for it. I decided to continue adding
features, I implemented a google-map like I had done previously in my Nam Yang
website and built a contact form which sends an email using nodemailer. This
taught me alot about OAuth2 as I had to configure OAuth Client so that the email
could send via gmail.

## The Tools

- React
- Styled Components
- `useState`
- Node
- Axios
- Express
- Nodemailer
- OAuth2
- `process.env`
- Netlify
- Netlify Serverless Functions
- Google APIs

## The Challenges

I've recently started learning node so this was a great challenge to implement
some of the ideas I'd been learning about. I created an async function called
`createTransporter` which handled the OAuth2 Client and set the credentials
correctly. I ran into a couple issues while creating this, one issue I had was
where the Access token wasn't being created correctly so the email wasn't
sending on a submission. I went through my code line by line using `console.log`
to try and find the issue.. It turns out that my `clientSecret` was spelt
incorrectly it was `process.env.REACT_APP_CLIENT_SECRET` When it should have
been `process.env.REACT_APP_GMAIL_CLIENT_SECRET`.

Another challenge I had was that I wanted the success or error boxes to pop up
and be green or red depending on whether the message was a success or failure.

I created a `Form` function and used `useState` to set the state of the form. to
display a pop up box, I wrote some javascript in my styled components to tie the
status of `setFormResultStatus` to the background colour of my
`FormResultWrapper`.

## To Do

- Implement Netlify Serverless functions so that the backend of the Form can run
  properly and debug stausCode 500 error
- shrink photo sizes to boost performance and speed up application.
- debug the logo colour issue in the deployed app
- fix the refresh router issue on the deployed app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.
