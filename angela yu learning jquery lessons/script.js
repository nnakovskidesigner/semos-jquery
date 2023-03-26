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
$('h1').text("bye");

//updating multiple items at the same time with queryselector:
$("button").text("Don't click me");

//the vanilla js of this code would be .innerHTML, that not only allowed us to manipulate items but to also add html
            //.innerHTML is the same as
$("button").html("<em>Hey</em>")
$("button").text("<em>Hey</em>")//this works similarly to xmp, its hows text in the button

//new lessons manipulating atributes with jquery

console.log($("img").attr("src"));//accesing attributes inside elements with jq


$("a").attr("href", "https://www.yahoo.com");// this changes the attribute to yahoo.com

//remeber that a class is also an html attribute:
//that means that:
//if we select an element and get classes thourgh jquery 
console.log($("h1").attr("class"));//this prints out all the classes that a certain element has


//newlesson adding event listerner with jquery


