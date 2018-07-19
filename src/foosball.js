{

  var listTeams = [
              {
                id: '001',
                team: 'England',
                player_001: 'Aaron',
                player_002: 'Zoltan',
              },
              {
                id: '002',
                team: 'China & Taiwan',
                player_001: 'Justin',
                player_002: 'Albert',
              },
              {
                id: '003',
                team: 'Spain',
                player_001: 'Chris',
                player_002: 'Ricardo',
              },
              {
                id: '004',
                team: 'Ukraine',
                player_001: 'Constantin',
                player_002: 'Cristian',
              },
              {
                id: '005',
                team: 'Wales',
                player_001: 'Dave',
                player_002: '???',
              },
              {
                id: '006',
                team: 'Brasil',
                player_001: 'Damany',
                player_002: 'Raj',
              },
              {
                id: '007',
                team: 'Slovenia',
                player_001: 'Vesna',
                player_002: '???',
              },
              {
                id: '008',
                team: 'Italy',
                player_001: 'Vicky',
                player_002: '???',
              }
          ];
  
  function findEmpty() {
           listTeams.forEach(function(team) {
                   if (team.player_002 === '???') {
                          team.player_002 = randomPlayer(listPlayers());
                          console.log(team.player_002);   
                   }
           });
  }
  findEmpty(listTeams);
  
  console.log(listTeams);
  
  function listPlayers() {
          return ['Aaron', 'Zoltan', 'Justin', 'Albert', 'Chris', 'Ricardo',
                  'Constantin', 'Cristian', 'Dave', 'Damany', 'Raj', 'Vesna',
                  'Vicky'];
  }
  
  function randomPlayer(players){
          let randomIndex = Math.floor(Math.random() * players.length)
          return players[randomIndex];
  }
  
  randomPlayer(listPlayers());
  
  }