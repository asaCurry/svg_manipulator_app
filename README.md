
The intent of my approach was make use of React's asynchronous rendering to provide a smooth and highly scalable solution to the SVG problem.

While my initial setup to load and render a user submitted SVG file worked as intended, it proved significantly more difficult than I had expected to manipulate the svg.

One unexpected problem was an unexpected issue with rendering inline SVG's within react. I was able to get around it with an npm package, but this obscured the HTML that I had hoped to have better access to.

The next was the dynamic rendering of the attributes to allow for user manipulation. From my notes within app.js:

The intent here was to render out <input>s with default values based on the svgJSON state, and labeled based on the index of the loop.
The inputs would have an onChange event that would update the svgJSON object to the user inputted value.
Render could either be done asynchronously after a validation check on the input (for hex fills, for instance),
or via an onSubmit event triggered by the user clicking a button.
With either approach the svgJSON would be parsed back into HTML via the svgson package, and rerendered.

In hindsight, I feel that I could have completed the task as described using client side rendering with vanilla Javascript or Jquery, using onChange and onSubmit binds to reload the inline SVG,
but I didn't feel this solution was in the spirit of the challenge as it would feel less smooth onload and rerender, and not the same scalability and responsiveness to the UI.


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
