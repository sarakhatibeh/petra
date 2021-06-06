alert("Welcom To Petra Website")

var name;
name="sara"; 

document.write("<p style='color:white;'> this is " + name + " from js </p>")

var usercountry = prompt(" Where Are You From?")

if (usercountry === "jordan"){alert ("welcom")}
else {alert ("WElcom To Jordan")}


var favPlace = prompt("Favorite tourist areas in Jordan : Dead sea, Aqaba, Petra");

  function favPlaceFun() {
    while (favPlace != "Dead sea" && favPlace != "Aqaba" && favPlace != "Petra") {

      favPlace = prompt("please enter on of : Dead sea, Aqaba, Petra");
   }

   document.write("<img src='https://images.memphistours.com/large/4afa23aacb6e4d0337dac29e6557420d.jpg'/>")
  }
   

  favPlaceFun();



var x = prompt("how many times do you want to see a camel image ?")

var camelFun = function () {
  var output='';
  var i = 0;
  while (i < x) {
    
   output = output + document.write( "<img src='https://www.tripsavvy.com/thmb/h1q2GeTSADs-0HXy-HcMMWb_u34=/1885x1414/smart/filters:no_upscale()/GettyImages-529579912-5822cbe83df78c6f6add2b85.jpg' />")

    // console.log(i,output)

    i++;
  }

  return output;

}
camelFun()

// for(var i=0 ;i<x;i++){


//     document.write("<img src='https://www.tripsavvy.com/thmb/h1q2GeTSADs-0HXy-HcMMWb_u34=/1885x1414/smart/filters:no_upscale()/GettyImages-529579912-5822cbe83df78c6f6add2b85.jpg'/>")
// }