function FizzBuzz()
{
    
}

FizzBuzz.prototype.say = function(number)
{
   function match(predicat, text)
   {
      return predicat ? text : "";
   } 
   
   var talk = "";  
    
    var transformations = [                           
        function (){
            talk += match((number % 3) === 0, "fizz");
        },
        function ( ){
            talk += match((number % 5) === 0, "buzz");       
        },
        function (){
            talk += match((number % 7) === 0, "bang");
        },  
        function (){
            talk += match(talk === "", number.toString());
        }
    ];     
       
    transformations.forEach( (t,i,a) =>  t());  
    return talk; 
}