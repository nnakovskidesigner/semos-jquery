// $('h1').css("color", "red");
//this is a code example written in jquery 
// changing the value of h1

//we can also use this code if we only want to run the code only when the website is loaded

// $(document).ready(function(){
//   $('h1').css("color", "red");
// });

//we can escape this way of using this code, (Ready) if we actually put the script of our js at the end of our page, that will basically do the same thing, that way we can maniupulate our html elements after they have been loaded up and rendered on our screen


//new lesson:2

// we would normally select something like this with vanilla js
// document.querySelector(h1).style.color = 'white';
// document.querySelectorAll(h1).style.color = 'white';

// with jquery we can do this with only this code:

$("h1"); //or
$("h1.title"); //there is no difference between seelcting one or selecting many


//new lesson:3 
$('h1').css("color", "green");

console.log($('h1').css("font-size")); //with this code we can display the properties set by the css, but its usually not a good practise, we always need to keep our css,js and html separate
console.log($('h1').css("color"));
console.log($('h1').css("background-color"));

$('h1').addClass("big-title");//this adds a class to our items
// we can also remove classes
// $('h1').removeClass("big-title");

//we can also add many classes to elements with the following code
$('h1').addClass("big-title margin-50");

//we can see if certain elements have the classes we want them to:
console.log($('h1').hasClass("margin-50")); //returns a boolean


//start lesson 6:
//changing(manipulating) text with jquery
// $('h1').text("bye");

//updating multiple items at the same time with queryselector:
$("button").text("Don't click me");

//the vanilla js of this code would be .innerHTML, that not only allowed us to manipulate items but to also add html
            //.innerHTML is the same as
$("button").html("<em>Hey</em>");
$("button").text("<em>Hey</em>")//this works similarly to xmp, its hows text in the button

//new lessons manipulating atributes with jquery

console.log($("img").attr("src"));//accesing attributes inside elements with jq


$("a").attr("href", "https://www.yahoo.com");// this changes the attribute to yahoo.com

//remeber that a class is also an html attribute:
//that means that:
//if we select an element and get classes thourgh jquery 
console.log($("h1").attr("class"));//this prints out all the classes that a certain element has


//newlesson adding event listerner with jquery 08
$("h1").click(function(){
  $("h1").css("color","purple")
})
//this code adds a click event listerner to the h1 element using jquery, when the h1 element is cliecked, the code changes its css 'color' property to purple.
//$h1 selects it, .click() adds a click event, and the color purple modifies the css


//with vanilla js for the next exercise our code will look something like this:
// for (var i = 0; i < 5; i++){
//   document.querySelectorAll('button')[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
//   })
// }
//here u can do a project with this (personaltips)

//easier code with jquery
$("button").click(function(){
  $("h1").css("color", "purple")
});

//we are not bothering here with a for loop, because beacuse by selecting for button, jquery will look though our website, and select all of the buttons, and if we combine that with a click method then it will add the click listenr to all the buttons that will find it, without it using for loop for the buttons 

//lets do a keypress event listener
//if we want to start decting for keystrokes inside that text-box, then we can use jquery to do that by targeting the input, and adding the keypress event 

$("input").keypress(function(event){
  console.log(event.key)
})

//pasted from gpt, make sure u think about this more when writing stuff down:
//$ is a function that returns a jQuery object. In this case, we're using it to select all input elements on the page.
// .keypress() is an event handler method in jQuery that attaches a function to be executed when a keypress event occurs on the selected element(s).
// function(event){} is the function that gets executed when the keypress event occurs. It takes an event object as its argument, which contains information about the event.
// console.log(event.key) is a line of code that logs the value of the key property of the event object to the console. This gives us the value of the key that was pressed.
// So, when a user presses a key while focused on an input element, the keypress event is triggered, and the function we defined logs the value of the pressed key to the console. This is useful for debugging and testing purposes.

// $(body).keypress(function(event){
//   console.log(event.key)
// })

$(document).keypress(function(event){
  console.log(event.key)
})


//exercise: each key should have shown in the website
$(document).keypress(function(event){
  $("h1").text(event.key);
})

//instead of using .cick. or .keypress there is more better way of adding an event lsitener, we can simply:
$("h1").on("mouseover", function(){
  $("h1").css("color", "purple")
})
//there is even more flexible event listener its called "on", and this takes two parameters, the first one is the event that we are going to listen for, and that can be any of the events that we have acess to from the mdn from the JS itself, for ex we can use the mouseover here 

//we are going to select h1 and detect for mouseover events , and when it does happen its the second parameter which is the callback functon 

$("h1").on("mouseout", function(){
  $("h1").css("color", "yellow")
})

$("h1").on("mousewheel", function(){
  $("h1").css("color", "black")
})

//link:
// https://developer.mozilla.org/en-US/docs/Web/Events

// the on method is used to attach one or more handlers to the selected elements it allows us to specify one or more events that we want to litsen for and function that should be executed when the event is triggered.

//lesson 09 adding and removing elements

//while our website is running, we can run jquery to add new elements on the fly, if we selected h1 and decided to add new button before the h1 we can use 
$("h1").before("<button>new button</button>")
$("h1").after("<button>new button</button>")
$("h1").prepend("<button>prepend</button>");
//prepend will add our new html element into the item that we selected , just after the openeing 
$("h1").append("<button>append</button>")
//append gets added after, but before the end of the h1


//chatgpt example:
// <!-- The button added using before() -->
// 	<button>new button</button>
// 	<h1>Hello World</h1>

// 	<!-- The button added using after() -->
// 	<h1>Hello World</h1>
// 	<button>new button</button>

// 	<!-- The button added using prepend() -->
// 	<h1>
// 		<button>prepend</button>
// 		Hello World
// 	</h1>

// 	<!-- The button added using append() -->
// 	<h1>
// 		Hello World
// 		<button>append</button>
// 	</h1>

//revoming all buttons 
// $("button").remove();


//lesson new 010 website animations:

//jquery makes it really easy when we want to make animations

// $("button").on("click", function(){
//   $("h1").hide();
// })

// $("button").on("click", function(){
//   $("h1").toggle();
// })

// $("button").on("click", function(){
//   $("h1").FadeOut();
// })
// $("button").on("click", function(){
//   $("h1").FadeIn();
// })

// $("button").on("click", function(){
//   $("h1").fadeToggle();
// })
// $("button").on("click", function(){
//   $("h1").slideUp();
// })
// $("button").on("click", function(){
//   $("h1").slideDown();
// }) //not working because its at the bottom
// $("button").on("click", function(){
//   $("h1").slideToggle();
// })
// $("button").on("click", function(){
//   $("h1").animate({opacity: 0.5});
// });
// $("button").on("click", function(){
//   $("h1").animate({margin: "20px"});
// });
$("button").on("click", function(){
  $("h1").animate({margin: "20px"});
});
//this allows to define some custom css that we want to gradually animate towards, we can only add css that has numeric value, we cant animatie to something like a color, we would get an error, 
//we can also chain elements
$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
//end of section