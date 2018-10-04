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

      $(".tickets-list").prepend(`
        <div class="col-4">
          <div data-task-id=${childKey} />
<<<<<<< HEAD
<<<<<<< HEAD
            <span>${childData.name}</span>
            <span>${childData.product}</span>
            <span>${childData.discount}</span>
            <span>${childData.quantity}</span>
            <button data-get-id=${childKey} class="btn btn-details" data-toggle="modal" data-target="#tickets"> Ver mais </button>
=======
=======
>>>>>>> ed2c468d9785da52db1c731baefa761c0330e49d
            <h3 class="h3">${childData.name}</h3>
            <h4>${childData.product}</h4>
            <h4 class="h4">${childData.discount}</h4>
            <h5 class="h5">${childData.quantity}</h5>
<<<<<<< HEAD
>>>>>>> b8af1fa5942065ba2a671cc14f83f1dc24593ede
=======
>>>>>>> ed2c468d9785da52db1c731baefa761c0330e49d
          </div>
        </div>`
      );
      $(".btn-details").click(function() {
        modal(childKey)
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
        $("#body-modal").text(childData.product);
        $("#cupom-body-modal").text(childData.code)

      }
     });
  });
}
