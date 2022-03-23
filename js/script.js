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
  // function assignments

  $("button.proceed").click(function(event){
   let pname = $(".name option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });

   console.log(ptopping.join("topping!"));
//beggining of conditional cases for large, medium and small pizzas
   switch(psize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1500;
       console.log(price);
     break;
     case "medium"://medium
       price = 1200;
       console.log("The price is "+price);
     break;
     case "small":
       price = 1000;
       console.log(price);
     default:
       console.log("error"); 
   }

   //beining of crust case
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

        //end of the crust case conditional statement
    }
    //toppings value at 65 each
    let topping_value = ptopping.length*65;
    console.log("toppins value" + topping_value);
    //empty selection
    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please select pizza size and crust"); //pop up warning to select
    }
    // conditional else
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }

    total = price + crust_price + topping_value;//tally
    console.log(total);//pop tally
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;//checkout

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);

    //add another pizza on list
    $("button.addPizza").click(function(){
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
      });


      // console prices after users input
      console.log(ptopping.join(" top ")); // defining pizza sizes according to price for user selection
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
           console.log("make some corrections"); //faulty
//switch to crust prices
       }
       switch(pcrust){
          case "0":
            crust_price = 0;
          break;
          case "Crispy":
            crust_price = 200;
          break;
          case "Stuffed":
            crust_price = 150;
          break;
          case "Gluten-free":
            crust_price = 180;
          break;
          default:
            console.log("price not applicable"); // error

        }
        let topping_value = ptopping.length*50;
        console.log("toppins value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
        
      // the constractor function
      var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);

      $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);


    });
    // final Checkout button
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });
    
   event.preventDefault();
  });
});
