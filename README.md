# Sam Orend - Shopify Frontend Internship Challenge
The Shoppies!

This is the github repo for my Fall 2021 Shopify Frontend Internship Challenge!

Features I added beyond the challenge description:
- Auto-saving nominations using localStorage (You can refresh the page or return to the link at a later time and your nominations will still be there, no need to manually save)
- Click to View More Info About Your Nominees (You can click on the titles of your nominees to view a popup with more information about them!)

Design Choices:

- To try to align with Shopify's frontend stack, the webpage is built with React :)
- I chose to use React Bootstrap to help quickly stanardize the styling of my components
  - I could have also used Ant Design (internationalization support) or Material UI (many components). I elected for React-Bootstrap because it gives the developer lots of control over component functionallity and has great documentation
- I chose to send the OMDB API Requests using `fetch()` instead of bringing in a library like `Axios`
  - I made this choice mainly to keep the dependencies minimal
  - However, this does force us to manually convert the response of our request to json and sacrificies a bit of backwards compatibility that `Axios` has
- Lastly, the API Key for OMDB is in an environment variable which is encrypted by the service that I used to deploy the app (Vercel)
  - This way the key isn't sitting in the source code
  - Vercel encrypts API keys for security  

You can view the live version here: https://shopify-frontend-intern-challenge.vercel.app/

