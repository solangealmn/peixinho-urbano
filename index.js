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
      console.log(childSnapshot.val())
      $(".tickets-list").prepend(`
        <div class="card" data-task-id=${childKey}>
          <div class="card-body">
            <h5 class="card-title">${childData.name}</h5>
            <p class="card-text">${childData.product}</p>
            <p class="card-text">${childData.discount}</p>
            <p class="card-text">${childData.quantity}</p>
          </div>
        </div>`
      );
     });
  });
}
