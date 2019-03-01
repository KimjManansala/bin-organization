# Bin Organizations

I am creating this personal project as a way to keep track of all my personal items in my own storage system.
Easily being able to search and fnd which bin a certain item is in and also the quanitity will help me in organizing my own 
personal belogings.





<!-- ## Built With -->




## Authors

* **Kim Jasper Manansala** - *Initial work* - [github](https://github.com/KimjManansala)



## License



# Bin-Oranization
---

##Live Demo
---
<!-- [Space Balls](http://paigeniedringhaus.com/spaceBalls/) -->
Link will be uploaded shortly

##Link to Video of Gameplay
---
<!-- <a href="https://www.youtube.com/watch?v=_gJCeyrkUkM" target="_blank"><img src="http://img.youtube.com/vi/_gJCeyrkUkM/0.jpg" width="240" height="180" border="10" /></a> -->

<a href='https://www.youtube.com/watch?v=X77VcPAnnFQ' target='_blank'> <img src='https://i.ytimg.com/vi/X77VcPAnnFQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCwUOu_3jisviQiICgEnKO7PJC_kQ' width="240" height="180" border="10" /></a>

##Contents
--- 
 * What It Is
  * What We Used
  * Challenges and Solutions
  * Our Stretch Goals
  * Authors
  * Screenshots
  * Github Link
  * Code Examples

##What It Is
---
This is a personal project, a simple way to keep my belongings organized. This project objective is to place users items into bins which then are organized into shelves. This is a project to practice using the Express Framework, HandleBarsJS and Sequelize.

##What We Used
---
  * HTML5
  * CSS3
  * JavaScript
  * Nodejs
  * Express
  * Postgress
  * Sequelize
  * bcrypt (password hashing module)

##Challenges and Solutions
---
This simple bin-organizer is a way to keep my personal belongings organized.

  * Challenge #1: Associations 
    Explanation to come

  More challenges to come as I continue to program



##Authors
---
  * [KimJ Manansala](https://github.com/KimjManansala)

##Github Link
---
[Github](https://github.com/KimjManansala/bin-organization)

##Screenshots
---

Home Screen
![screen shot 2019-02-12 at 3 27 42 pm](https://user-images.githubusercontent.com/40606399/53651563-862ed100-3c0c-11e9-9b6c-c817c4fd6057.png)

Login
![screen shot 2019-02-12 at 3 27 53 pm](https://user-images.githubusercontent.com/40606399/53651668-bb3b2380-3c0c-11e9-8cb9-5f47cf95c9cf.png)

Find or add shelves
![screen shot 2019-02-12 at 3 28 02 pm](https://user-images.githubusercontent.com/40606399/53651682-c8f0a900-3c0c-11e9-9108-d72246a2fd6d.png)

Find or add bins
![screen shot 2019-02-12 at 3 29 28 pm](https://user-images.githubusercontent.com/40606399/53651720-dad24c00-3c0c-11e9-98c8-7775baad801f.png)

Add items
![screen shot 2019-02-12 at 3 29 37 pm](https://user-images.githubusercontent.com/40606399/53651750-eaea2b80-3c0c-11e9-9b5c-eace8d4be18e.png)

Find Items
![screen shot 2019-02-12 at 3 30 44 pm](https://user-images.githubusercontent.com/40606399/53651789-03f2dc80-3c0d-11e9-9427-359118d926ae.png)


##Code Examples
---
Comming soon

<!-- This is the player constructor function we use for creating each new player on the canvas game board. It determines which color to make the player based on their team assignment (which happens when they enter the lobby), and sets up all the other things player objects can do like boosting their speed, sending out a flare to locate the flag, etc.

```javascript
Player = function (game, team, position, flag, game_id, id) {
    this.alive = true;
    this.game = game;
    if(team === 'Blue'){
        this.player = game.add.sprite(blue_position[position][0], blue_position[position][1], 'blue_player', 'blue_team');
        this.team_flag = 'blue_flag';
    }else{
        this.player = game.add.sprite(red_position[position][0], red_position[position][1], 'red_player', 'red_team');
        this.team_flag = 'red_flag';
    }
    this.player_id = game_id;
    this.unique_id = id;
    this.flare = game.add.weapon(10, 'flare');
    this.flare.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
    this.flare.bulletLifespan = 1000;
    this.flare.bulletSpeed = 300;
    this.flare.fireRate = 300;
    this.flare.trackSprite(this.player, 0, 0, true);
    this.boost = 0;
    this.boostTurn = 0;

    this.player.scale.setTo(0.35, 0.35);

    this.player.anchor.set(0.5, 0.5);

    game.physics.p2.enable(this.player);

};
```
This is where we put the Socket.io factory inside the Angular controller so Angular has access to it. Below are a couple of functions initializing the sockets as soon as a player arrives at the home page, and then updating a playerList array once they signed in and entered the lobby before the game starts.

```javascript
gameApp.controller('mainController', function($scope, $http, $cookies, $route, $location, $rootScope, $timeout, socket){
  var num_ready = 0;
  var apiPath = 'http://localhost:3000';

  socket.on('player_init', function(socket_id){
    console.log("Welcome, fool", socket_id);
    myId = socket_id;
  });

  function updateLobbyCount(){
    for(var i = 0; i < playerList.length; i++){
      if(playerList[i].socketID == myId){
        var lobbyPlayer = playerList[i];
      }
    }
    socket.emit('enter_lobby', {
      id: myId,
      player: lobbyPlayer
    });
    console.log('someone is entering the lobby');
  }
```

Socket.io JavaScript that actually starts the game when all the players in the lobby have clicked the 'Game Launch' button. This initializes the game, sets up the randomly moving flag and creates all the players on the board when it's loaded. 

```javascript
socket.on('init_game', function(data){
    console.log(data.num_ready, users.length);
    if(data.num_ready == users.length){
      console.log("users are ready");
      io.sockets.emit('game_launch', users);
        console.log('game launching');
      flag_x = Math.floor(Math.random() * 1900 + 10);
      flag_y = Math.floor(Math.random() * 1900 + 10);
      io.sockets.emit('flag_coord', {
        flag_x:flag_x,
        flag_y:flag_y
      });
    }else{
      io.sockets.emit('player_ready', data.num_ready);
        console.log('no launch yet'); 
    }
  })
  ``` -->
