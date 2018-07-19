{
  // make new teams order !!!
  
  let oldOrder = [0, 1, 2, 3, 4, 5, 6, 7];
  
  //console.log(oldOrder);
  
  function generateNewOrder(oldArray) {
  
          var newTeamOrder = [];
  
          for (var i=0; i=8; i--) {
  
                  let randomIndex = Math.floor(Math.random() * oldArray.length);
  
                  newTeamOrder.push(oldArray[randomIndex]);
                  oldOrder.splice(randomIndex, 1);
  
          };
  }
  
  generateNewOrder(oldOrder);
  
  }