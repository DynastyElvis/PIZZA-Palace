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

$(document).ready(function(){
  
  $("button.proceed").click(function(event){
   let pname = $(".name option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });
  switch(psize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1500;
       console.log(price);
     break;
     case "medium":
       price = 1200;
       console.log("The price is "+price);
     break;
     case "small":
       price = 1000;
       console.log(price);
     default:
       console.log("error"); 
   }
    switch(pcrust){
      case "0":
        crust = 0;
      break;
      case "Crispy":
        crust_price = 200;
      break;
      case "Stuffed":
        crust_price = 250;
      break;
      case "Gluten-free":
        crust_price = 180;
      break;
      default:
        console.log("No price"); 
    }
     let topping_value = ptopping.length*50;
    console.log("toppins value" + topping_value);

    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);
    
    $("button.addPizza").click(function(){
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
      });
console.log(ptopping.join(" top "));
      switch(psize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1500;
           console.log(price);
         break;
         case "medium":
           price =1200;
           console.log("The price is "+price);
         break;
         case "small":
           price = 1000;
           console.log(price);
         default:
           console.log("make some corrections"); 

       }
    });
    
   event.preventDefault();
  });
});
