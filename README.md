# FUT - Team - Builder, a Python Django API and React app

My final dev project for the Software Engineering Immersive course, a complex full-stack application built with Django REST Framework and React.

FUT - Team - Builder is a Fifa Ultimate Team clone where users are able to choose from the best football(soccer) players in the English Premier League and add them to their squad. The users are able to make multiple teams and save them to their profile where they, as well as other users, are able to view the teams that have been created. 

## You will find the deployed app here: 

ADD DEPLOYED LINK FOR PROJECT HERE

### Code Installation: 

Clone or download the repo then do the following in Terminal:

Install back-end dependencies: pipenv
Enter Shell for project: pipenv shell
CD into backend folder and run the following:
Make Migrations: python manage.py makemigrations
Migrate: python manage.py migrate
Load Seed data for Formations: python manage.py loaddata formations/seeds.json
MAYBE ADD MORE TEAMS AND LOAD SEEDS FOR TEAMS
Load Seed data for Players: python manage.py loaddata players/seeds.json
Start back-end server: python manage.py runserver
Change into front-end directory: cd client
Install front-end dependencies: yarn
Start front-end server: yarn start

### The Brief

- Build a full-stack application by making your own backend and your own front-end
- Use a Python Django API using Django REST Framework to serve your data from a Postgres database
- Consume your API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
- Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers
- Be deployed online so it's publicly accessible
- Timeframe: 8 days

### Technologies Used:

- Django
- Django REST Framework
- PostgreSQL
- PyJWT
- JavaScript (ES6)
- React.js
- HTML, Sass
- Axios
- Git + GitHub
- react-router-dom
- react-select
- react-slick
- Bulma

# Approach Taken

## Planning

Initially my partner and I had decided to work alone for our last projects but after telling him about this bigger project idea i had for a full-stack app that resembled FIFA Ultimate Team, he immediately wanted to try and tackle it together. We set up our planning using Trello to help keep track of everything throuughout our project as well as creating a simple presentation for styling. Every morining we would meet up for a 10-15 min stand up to layout our day and what we specfically needed to get done. Then we would continur our work on a zoom call and speak to each other about what code we were working on and the way we would code it. We used Git and GitHub for version control and made sure to tell one another when we were pushing and what coding was being pushed to help avoid any potentioal merging or Git conflicts.

![](2021-05-10-13-23-06.png)

![](2021-05-10-13-25-11.png)

## Back-end (Day 1 & 2)
Creating our back-end using Python was something that was new to both of us but it turned out o be a great experience. We used Django and Django REST Framework to create a PostgreSql database with RESTful features. In total we agreeded on 4 models. I took charge of the back-end setup, including our seeds files, while my partner serached for useful API's. 



## Front-end (days 3 - 7)

For the front-end we used React Hooks throughout. I took charge are creating both the Login and Register page, half of the Home page, the Landing Page, the User Profile, View All Teams, and assisted with the Create A Team page. Each page I implemented react as well as sass using the framework BULMA. I used Axios for the data requests from the back-end and React-Router-Dom was used for page navigation. 

### Landing, Login and Register

For both the Login and Register I used the same simple responsive design with BULMA framework and adjusted their positioning using FlexBox. In the register form, the user is prompted to add in additoinal information such as their Gamertag, how many wins and losses they have, as well the amount of coins available just like one would while playing FIFA.

### Home Page

For the home page my partner and I agreed on how we wanted to design it and where the user will be able to explore throughout the app. Using an Axios request I grabbed the information the user presented us with when registering, and presented it at the top of certain pages to show which user profile you are looking at, or which user is logged in. Using BULMA's columns sizing, we were able to display our information in a grid with exact sizes, making it look identical to FIFA. From there the home page allows you to access the Create A Team page, User Profile, and View All Teams just with a click of a button. 

``` javascript
return (
    <>
      <div className="user-info">
        <div className="columns">
          <div className="column" id="nav-bar">
            <p>⚽️--- GAMERTAG ➖ {user.gamertag} </p>
            <p>💰--- COINS ➖ {user.coins} </p>
            <p>🏆---{user.wins} ➖ {user.losses} </p>
          </div>
        </div>
          <div className="columns mt-6  mb-0">
            <div className="column"></div>
            <div className="column"> </div>
            <div className="column is-4 pl-0 ml-2 p-0"> <p className="column-dark pl-2" id="top-bar m-1" > BUILD-THE-BEST-TEAM-POSSIBLE</p> 
            </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column "> </div>
            <div className="column "></div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
          </div>
        <div className="column">
          <div className="columns main-page-column">
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column is-6 column-dark m-2"> 
            <div className="column pl-0"><h1 className="team-builder"> FUT-TEAM-BUILDER </h1>  </div>
            <div className="columns"> 
            <div className="column"> <p className="p-explanation">Welcome to FUT-Team-Builder where you can create your favourite teams from FUT. You will have your choice from the top players in the english premier league.  </p>
            <div className="columns"> 

            <div className="column"></div>
            <img src={mane} alt="" className="image column image-mane mt-6  ml-0  " /></div></div>
            </div>
            </div>
            <div className="column is-3 column-dark m-2"> <h2>Squad--Building--Challenges </h2> 
            <p className="mt-3"> Create the best team possible when searching through our set of players. </p> 
            <img src={futchamp} alt="" className="image image-fut column "/></div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
            <div className="column"> </div>
          </div>
          <div >
            <div className="columns mt-6">
              <div className="column columns is-centered is-blue m-1">
                <Link to="/teams/new">
                  <p className="column">
                    Create A Team
              </p>
                </Link>
              </div>
              <div className="column columns is-centered is-blue m-1">
                <Link to={`users/${userId}`}>
                  <p className="column  is-vcentered">
                    Your profile
              </p>
                </Link>
              </div>
              <div className="column columns is-centered is-blue m-1">
                <Link to="/teamfeed">
                  <p className="column">
                    View All Teams
              </p>
                </Link>
              </div>
              <div className="column columns is-centered is-blue m-1">
                <Link onClick={handleLogout}>
                  <p className="column">
                    Log Out
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

```

### User Profile and View All Teams

The User Profile and View All Teams are quite similar in how I retracted the information from the back end. I made a simple get rquest to our users to get back all the information stored within the user. For the User Profile, I mapped over each of the users teams and displayed each one showing the name, abbreviaiton, and the formation. For my View All Teams page it was similar but I mapped over each team after mapping over the user itself, displaying all the teams each user has created. I as well added a Link to each User Profile so if you click on another user you will be taken to their profile and can view all their teams, Gamertag, wins and losses, as well as coins. 

``` javascript
const TeamFeed = () => {


  const [users, setUsers] = useState('')


  useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token')
      const { data } = await axios.get('/api/auth/login', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUsers(data)
    }
    getData()
  }, [])
```

### Create A Team 

The Create A Team page was the most challenging component in our app. Being that this was the main component of our app, we decided to spend most of our days having someone work on it while the other partner would focus on every other component. Initially I set up the Create a Team page with a strategy of what we want this page to do exactly. First we tackled the information we needed to get from our backend, this was done with an Axios request to our players seeds file. We then needed to create the initial state for each div that was then going to be populated with a player. We then set the idea of how to add the certain player to the users desired destination. We decided to correlate each players id to the index of our players array where the user would like to place them. From here we did not have much time left so I focused a majority of my time on the other componetns and styling for the page. 

``` javascript

//get all players
  const [allPlayers, setAllPlayers] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/players/')
      setAllPlayers(data)
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // add players to team
  let playerToPush
  let playerToDisplay
  const handleChangeTeam = event => {
    playerToPush = event.target.value
    playerToDisplay = event.target.name
  }

//add players to card
const [playersToDisplayPhoto, setPlayersToDisplayPhoto] = useState([{ photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}, { photo: "https://www.futwiz.com/assets/img/fifa19/leagues/2118.png"}])

```

## Styling (days 6 - 8)

As mentioned earlier, we used Bulma framework for the styling as well SASS for any additional styling. Initally I was not very confident with Flexbox or SASS but after styling this entire project using both tools, I became aware of how awarding styling can. The Bulma documentaion was very useful in creating the layout of our project, then Flexbox allowed me to position each page as needed. The final day of our project was spent finding the exact color schemas FIFA uses and making our page look identical. 

# Final Product - Walkthrough

ADD PCITURES

## Wins & Blockers

### Wins:

One major accomplishment was getting the functionality done for creating the team. Another was creating our own players seeds file and refractoring it so the information was identical to our model, this was hard especially having over 300 players to deal with. Another win would be the styling. Coming into this project I was not as confident with my styling ability and using flexbox, but after this project I really enjoyed the front-end and all the possibilities that comes with it. 

### Blockers:

Initially my partner and I were on track with our planning and having everything done that we wanted to however, once we came to the Create A Team page we spent a lot more time on it than we had planned. On the backend we created requests to add a player, edit a player and team, but with how important the Create A Team page was we directed our focus there. 

## Bugs 

One bug my partner was unaware of when he was adding to the Create A Team page was the styling behind it. He did all of his coding on a larger screen so when I displayed it on mine, all the styling went wrong but that is something I plan on fixing. Our mobile landscape is not as good or complete as we would have liked as well. 

## Key Learnings

There were 3 main learning opppurtunties that I gained during this project. First being a stronger understanding of relational databases and the entire backend setup process. I was timid coming into this wondering how I would get it done but in the end it became one of the most positive outcomes from this project. Secondly would be React Hooks. Having done 2 projects with React I did feel more comfotbale with it, but after this project I understand the true value of using Hooks. Finally I initially did not like Django and found it confusing but after playing around with it on my own I understand the process behind making a Django database. 

## Future Content & Improvements

As explained earlier, there were certain requests we added on the backend but were not able to add to the front end. This would be my first addition. I would as well change the styling on the Create A Team page so it is repsonsive to every screen size and not only larger screens. After these I would like to focus on allowing the user to view their team they have created and be able to edit and save them as well. 
