/**
 * Created by harsh on 5/1/2017.
 */

'use strict';

gameModule.controller('successController', successController);

function successController(userGameData) {
  var vm = this;


  vm.playAgain = playAgain;

  function playAgain() {
    userGameData.setCurrentLevel(10);
  }
}
