# Getting Started with Create React App

Make sure to run npm i- to ensure you have all the dependecies 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Search Games`

Once inside the app you can search for games to add them to your backlog. 
At this point, Hours to Beat needs to be manually updated as their are no public free
APIs that share this data. 

### `Add Games`

If for whatever reason a game does not appear in the search or cannot be added, 
you can manually add the game to your Backlog by filling out the form under Add Games. 

### `What to Play Next`

This section shows your Backlog. The Default List is the order in which you added your games. 

You can organize your Backlog alphabetically or reverse alphabetically with the 'Organize A-Z' Button. 

The 'Organize Backlogs' Button will organize your Backlog based on Critic and Recommended Scores as well as 
how long it takes to beat each a game. This default Organize Button prioritizes shorter game lengths so you 
can finish the most games quicker. 

You can also organize your Backlog with a preference for game length. This prioritization still takes Critic and Recommend Scores
into account, but also puts a large emphasis on Hours to Beat, prioritizing the hours you selected. 

## Learn More

This is the MVP (Minimal Viable Product). Future editions will include 
- Visual UI updates
- Automatic extraction of 'Hours to Beat' variable
- Atomized Hours to Beat preference under 'Recommend' Button
- Ability to add Genre/Tag preferences to how the games are organized
- More! 
