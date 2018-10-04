const database = firebase.database();
$(document).ready(function(){
  dataTickets()
});
const dataTickets = () => {
  database.ref("tickets/").once('value')
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      let fav = favoriteItems(childKey);

      $(".tickets-list").prepend(`
        <div class="col-4 mb-3">
          <div class="card-group">
            <div class="card" data-task-id=${childKey}>
            <img class="card-img-top" src="dist/assets/comida-natural.png" alt="comida natural" /> 
              <div class="card-body">
                <h5 class="card-title">${childData.name}</h5>
                <p class="card-text">${childData.product}</p>
                <p class="card-text">${childData.discount}</p>
                <p class="card-text">${childData.quantity}</p>
            </div>
            <button data-get-id=${childKey} class="btn btn-details btn-success" data-toggle="modal" data-target="#tickets"> Ver mais </button>
            <button data-id=${childKey} class="btn-favorite"> <i class="${fav} fa-heart"></i> </button>
          </div>
          </div>
        </div>`
      );
      $(".btn-details").click(function() {
        modal(childKey)
      })

      $(`.btn-favorite[data-id=${childKey}`).click(function() {
        const objFavorite = {
          id: childKey,
          name: childData.name,
          product: childData.product,
          discount: childData.discount,
          quantity: childData.quantity
        }
        favorite(objFavorite)
      })
     });
  });
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
        $("#body-modal").text("Produto: " + childData.product);
        $("#conter-body-modal").text("Quantidade de cupons: " + childData.quantity)
        $("#cupom-body-modal").text("Código de desconto" + childData.code).hide()
      }
     });
  });
}

function favorite(item) {
  if (typeof(Storage) !== "undefined") {
    const currentItems = JSON.parse(localStorage.getItem("Favoritos"));

    if (currentItems) { 
      localStorage.setItem("Favoritos", JSON.stringify([...currentItems, item]));
    } else {
      localStorage.setItem("Favoritos", JSON.stringify([item]));
    }

    $(`.btn-favorite[data-id=${item.id}] i`).removeClass("far").addClass("fas");
  } else {
      alert("Sorry! No Web Storage support..")
  }
}

function favoriteItems(id) {
  let status = "far"
  const currentItems = JSON.parse(localStorage.getItem("Favoritos"));
  if (currentItems) {
    currentItems.forEach(function(value) {

      if (value.id === id) {
        status = "fas"
      }
    })
  }

  return status
}
