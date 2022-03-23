//script js
//kipkemoi rono


// when one clicks place order button
// $("button#final-order").click(function(event){
//   event.preventDefault();


//   $("#pizzatotal").hide();
//   $(".delivery").hide();
//   $("button#final-order").hide();
//   let deliceryamount= checkoutTotal+150;
//   console.log("Final Tally "+deliceryamount);
//   let person = $("input#name").val();
//   let phone = $("input#phone").val();
//   let location = $("input#location").val();


//   if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){

//     $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
//     $("#totalbill").hide();
//     $("#finallmessage").slideDown(1200);

//   }
//   else {
//     alert("Please fill in the details for delivery!");
//     $(".delivery").show();
//     $("button#final-order").show();
//   }
// });

var price , crust_price, topping_price ; // declaration of variables price, crust and tpping price
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
