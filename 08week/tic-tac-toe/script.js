'use strict';

$(document).ready(function() {
  var turn = 'X';
  $('[data-cell]').on('click', function(){

  if($(this).text() === ''){

    $(this).text(turn);
    checkWin()
    if(turn === 'X'){
      console.log('hello')

      turn = 'O'
  }

    else{

    turn = 'X'
  }
  }
})

function checkWin(){
  if($('[data-cell="0"]').text() === turn &&
    $('[data-cell="1"]').text() === turn &&
    $('[data-cell="2"]').text() === turn){
    $('announce-winner').text(`${turn} wins!`);
  }
}
});
