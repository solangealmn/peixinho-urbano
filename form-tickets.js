const USER_ID = window.location.search.match(/\?id=(.*?)/)[1];
const database = firebase.database();

$("#confirm").click(function(event){
  event.preventDefault();

  const nameValue = $("#input-name").val();
  const productValue = $("#input-product").val();
  const discountValue = $("#input-discount").val();
  const quantityValue = $("#input-quantity").val();

  const postFromDB = database.ref("tickets/" + USER_ID).push({
    name: nameValue,
    product: productValue,
    discount: discountValue,
    quantity: quantityValue
  });
  alert("Cupom cadastrado com sucesso!")
});