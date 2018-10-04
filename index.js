const database = firebase.database();

$(document).ready(function(){
  dataTickets()
});

const dataTickets = () => {
  // Carregar cupons
  database.ref("tickets/").once('value')
  .then(function(snapshot) {
    // console.log(snapshot.val())
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      console.log(childSnapshot.val())
      $(".tickets-list").prepend(`
        <li>
          <div data-task-id=${childKey} />
            <span>${childData.name}</span>
            <span>${childData.product}</span>
            <span>${childData.discount}</span>
            <span>${childData.quantity}</span>
          </div>
        </li>`
      );
     });
  });
}