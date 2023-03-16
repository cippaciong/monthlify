import { getState, setState } from "./state.js";

// Add entry to the state
function addEntry(name, price, years) {
  var state = getState()
  var newEntry = {"name": name, "price": price, "years": years}
  state.push(newEntry)
  setState(state)
  return state.length - 1
}

// Render an entry as HTML
function renderEntry(parentNode, index, name, price, years) {
  var html = `
    <div class="row">
      <div class="two columns">${name}</div>
      <div class="two columns">${price}</div>
      <div class="two columns">${years}</div>
      <div class="two columns">${Math.round(price / (12 * years))}</div>
      <div class="two columns"><button class="delete">Delete</button></div>
    </div>
    `;
  var element = htmlToElement(html)
  var deleteButton = element.querySelector(".delete")
  deleteButton.onclick = function(){
    deleteButton.parentNode.parentNode.remove()
    var state = getState()
    state.splice(index, 1)
    setState(state)
  }
  parentNode.appendChild(element)
}

/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

// On page reload, restore all entries from the state
var state = getState()
var itemsContainer = document.querySelector('#items')
for(var i=0; i<state.length; i++){
  var element = state[i]
  renderEntry(itemsContainer, i, element["name"], element["price"], element["years"])
}

// Add and remove items with the form
document.querySelector('#push').onclick = function(){
  if(document.querySelector("form[name='add'] input[name='name']").value.length == 0) {
    alert("Please Enter a Name")
  }
  else if(document.querySelector("form[name='add'] input[name='price']").value.length == 0) {
    alert("Please enter the price of the object")
  }
  else if(document.querySelector("form[name='add'] input[name='years']").value.length == 0) {
    alert("Please enter for how many years you had the object")
  }
  else{
    var name = document.querySelector("form[name='add'] input[name='name']").value
    var price = document.querySelector("form[name='add'] input[name='price']").value
    var years = document.querySelector("form[name='add'] input[name='years']").value
    var items = document.querySelector('#items')
    var stateIndex = addEntry(name, price, years)
    renderEntry(items, stateIndex, name, price, years)
    document.getElementById("add").reset();
  }
}
