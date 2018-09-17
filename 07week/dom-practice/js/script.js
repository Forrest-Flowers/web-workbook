'use strict';

// document.addEventListener("DOMContentLoaded", function(event) {
//
// });

window.onload = function(){

  var count = document.getElementsByTagName('li')
  alert('There are ' + count.length + ' items on your list.');

  document.querySelector('h1').insertAdjacentHTML('afterend', '<h2> You have ' + count.length + ' items in your cart. </h2>');

  var newInput = document.createElement('input');
  newInput.innerHTML="Add Items"
  newInput.setAttribute('placeholder', "Type to add");
  let list = document.getElementsByTagName('ul');
  count[0].after(newInput);
  newInput.setAttribute("id", "input-text");

  let newButton =
  document.createElement('button');
  newButton.innerHTML="Add items";
  newButton.setAttribute("id", "add-button");
  let nextButton =
  document.getElementsByTagName("input");


  // let list = document.getElementsByTagName('ul');
  //
  // let count = list[0].children.length;
  // return(count);
  //
  // let cart = document.createElement('h2')
  // cart.innerHTML="You have" count "in your cart."
}
