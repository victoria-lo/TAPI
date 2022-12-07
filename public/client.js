const dropdownItems = document.querySelectorAll(".dropdown-item");
const display = document.getElementById("display");
const options = document.getElementById("routes");

dropdownItems.forEach((node, index)=> {
    node.addEventListener("click",()=>{
      options.setAttribute("style", "display: none");
      display.classList.remove("none");
      display.innerHTML = node.text;

      switch(node.text) {
        case "Get All Tea":
          getAll();
          break;
        case "Get One Tea":
          getOne();
          break;
        case "Post new comment":
          postOne();
          break;
        case "Post New Tea (Admin only)":
          postNewTea();
          break;
        case "Delete All Tea (Admin only)":
          delAll();
          break;
        case "Delete One Tea (Admin only)":
          delOne();
          break;
        default:
          break;
      }
    })
  }
);

document.querySelector(".dropdown-toggle").addEventListener("click",()=>{
  if (options.style.display == "block"){
    options.setAttribute("style", "display: none");
  }else options.setAttribute("style", "display: block");
  
})

async function getAll(){
    const response = await fetch('https://tapi.onrender.com/tea');
    const data = await response.json();
    display.insertAdjacentHTML("beforeend","<pre>" + JSON.stringify(data, null, 2) + "</pre>");
}

function getOne(){
  display.insertAdjacentHTML("beforeend", '<br/><input type="text" id="getOne" name="name" placeholder="Tea name"><button type="button" class="form-btn" id="oneTea">Get My Tea!</button>')

  document.getElementById("oneTea").addEventListener("click",async ()=>{
    const response = await fetch('https://tapi.onrender.com/tea/' + document.getElementById("getOne").value);
    const data = await response.json();
    display.insertAdjacentHTML("beforeend","<pre>" + JSON.stringify(data, null, 2) + "</pre>");
  })
}

function postOne(){

  display.insertAdjacentHTML("beforeend", '<br/><input type="text" id="postOne" name="name" placeholder="Tea to comment">\
  <input type="text" id="comment" name="comment" placeholder="Comment">\
  <button type="button" class="form-btn" id="oneComment">POST Comment!</button>')

  
  let data=
  {"_id":"5fa401bcd5ba620017ec1c13","name":"white","image":"uploads/white.png","description":"Prevents skin aging and protects teeth from bacteria.","keywords":"refreshing, flower, light","origin":"China","brew_time":1,"temperature":85,"comments":[{"date":"Tue Oct 26 2021 08:22:01 GMT+0000 (Coordinated Universal Time)","_id":"6177baa9d44eef0017caa375","text":"this tea is good"},{"date":"Sun Nov 14 2021 02:25:37 GMT+0000 (Coordinated Universal Time)","_id":"619073a151e51100176203e1","text":"kolo"},{"date":"Tue Sep 06 2022 19:50:52 GMT+0000 (Coordinated Universal Time)","_id":"6317a49c00c1290017a8d4a7","text":"nice"},{"date":"Wed Sep 21 2022 18:29:12 GMT+0000 (Coordinated Universal Time)","_id":"632b57f8203e6b0017f8cdd6","text":"nice"}],"__v":4}

  document.getElementById("oneComment").addEventListener("click",async ()=>{
    alert("Removed due to too much spam comments :(")
  })
}

function postNewTea(){
  display.insertAdjacentHTML("beforeend", '<br/><input type="text" id="user-name" name="user-name" placeholder="Username">\
  <input type="text" id="password" name="password" placeholder="Admin Password">\
  <form method="post" enctype="multipart/form-data" id="myForm" name="myForm">\
  <input type="text" id="postTeaName" name="name" placeholder="Tea name">\
  <input type="text" id="description" name="description" placeholder="Description">\
  <input type="text" id="keywords" name="keywords" placeholder="Keywords">\
  <input type="text" id="origin" name="origin" placeholder="Origin">\
  <input type="number" id="time" name="brew_time" placeholder="Brew Time">\
  <input type="number" id="temperature" name="temperature" placeholder="Temperature">\
  <input type="file" id="img" name="image" accept="image/*"></form>\
  <button type="submit" class="form-btn" id="newTea">MAKE new tea!</button>')

}

function delAll(){
  display.insertAdjacentHTML("beforeend", '<br/><input type="text" id="user-name" placeholder="Username">\
  <input type="text" id="password" placeholder="Admin Password">\
  <button type="click" class="form-btn" id="delAll">DELETE ALL!</button>');

}

function delOne(){
  display.insertAdjacentHTML("beforeend", '<br/><input type="text" id="user-name" name="user-name" placeholder="Username">\
    <input type="text" id="password" name="password" placeholder="Admin Password">\
    <input type="text" id="delOne" name="name" placeholder="Tea to delete">\
    <button type="click" class="form-btn" id="delOneBtn">DELETE Tea!</button>');

}