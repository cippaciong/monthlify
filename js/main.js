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
    document.querySelector('#items').innerHTML += `
      <div class="row">
        <div class="two columns">${name}</div>
        <div class="two columns">${price}</div>
        <div class="two columns">${years}</div>
        <div class="two columns">${Math.round(price / (12 * years))}</div>
        <div class="two columns"><button class="delete">Delete</button></div>
      </div>
      `;
    document.getElementById("add").reset();
    var current_items = document.querySelectorAll(".delete");
    for(var i=0; i<current_items.length; i++){
      current_items[i].onclick = function(){
        this.parentNode.parentNode.remove();
      }
    }
  }
}
