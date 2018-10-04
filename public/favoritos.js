const database = firebase.database();
$(document).ready(function(){
  dataFavoritesTickets();
});

const dataFavoritesTickets = () => {
  const currentItems = JSON.parse(localStorage.getItem("Favoritos"));
  currentItems.forEach(function(item) {
    console.log(item)
    const template = `
    <div class="card" data-task-id=${item.id}>
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.product}</p>
      <p class="card-text">${item.discount}</p>
      <p class="card-text">${item.quantity}</p>
    </div>
    <button data-get-id=${item.id} class="btn btn-details btn-success" data-toggle="modal" data-target="#tickets"> Ver mais </button>
    <button data-id=${item.id} class="btn-favorite"> <i class="fas fa-heart"></i> </button>
  </div>
  `
  $(".favorites-tickets").html("")
  $(".favorites-tickets").append(template)
  })
}

function modal(id){
  database.ref("tickets/").once('value')
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      var childData = childSnapshot.val();
      if(id === childKey) {
        $("#title-modal").text(childData.name);
        $("#body-modal").text(childData.product);
        $("#conter-body-modal").text(childData.quantity)
        $("#cupom-body-modal").text(childData.code).hide()
      }
     });
  });
}

function favorite(item) {
  console.log(item)
  if (typeof(Storage) !== "undefined") {
    const currentItems = JSON.parse(localStorage.getItem("Favoritos"));

    if (currentItems) { 
      localStorage.setItem("Favoritos", JSON.stringify([...currentItems, item]));
    } else {
      localStorage.setItem("Favoritos", JSON.stringify([item]));
    }
  } else {
      alert("Sorry! No Web Storage support..")
  }
}