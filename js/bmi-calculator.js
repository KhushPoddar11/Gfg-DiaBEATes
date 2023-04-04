function computeBMI()
    {
  //Obtain user inputs
        var height=Number(document.getElementById("height").value);
        var heightunits=document.getElementById("heightunits").value;
        var weight=Number(document.getElementById("weight").value);
        var weightunits=document.getElementById("weightunits").value;
        
        var a = document.createElement('a');
        var linkText = document.createTextNode("Diet plan");
        a.appendChild(linkText);
        a.title = "This means you are slightly underweight for your height. Diet plan";
        a.href = "../Diet-plans/underweightDiet.html";
        document.body.appendChild(a);

        


        //Convert all units to metric
        if (heightunits=="inches") height/=39.3700787;
        if (weightunits=="lb") weight/=2.20462;

        //Perform calculation
        var BMI=weight/Math.pow(height,2);

        //Display result of calculation
        document.getElementById("output").innerText= "Your BMI is " + Math.round(BMI*100)/100;

        var output =  Math.round(BMI*100)/100;
        if (output < 10) 
        document.getElementById("comment").innerText = "you entered a wrong value!";
        else if (10 <= output && output < 14) 
        document.getElementById("comment").innerText = "This means you are seriously underweight for your height!" ; 
        else if (14 <= output && output < 18.5)
        {
          document.getElementById("comment").innerText = "This means you are slightly underweight for your height."+"\n ";
          document.getElementById("comment").appendChild(a);
        }
        
        else   if (output>=18.5 && output<=25)
        document.getElementById("comment").innerText = "This means you are in a healthy weight for your height.";
        else   if (output>=25 && output<=30)
        {
        document.getElementById("comment").innerText = "This means you are overweight for your height."+"\n";
        var a = document.createElement('a');
        var linktext = document.createTextNode("Diet Plan");
        a.appendChild(linktext);
        a.title = "Diet plan";
        a.href = "../Diet-plans/overweightDiet.html";
        document.body.appendChild(a);
        document.getElementById("comment").appendChild(a);
        }
        else if (30 <= output && output < 40)
        { 
        document.getElementById("comment").innerText = "This means you are obese for your height!"+"\n";
        var a = document.createElement('a');
        var linktext = document.createTextNode("Diet Plan");
        a.appendChild(linktext);
        a.title = "Diet plan";
        a.href = "../Diet-plans/overweightDiet.html";
        document.body.appendChild(a);
        document.getElementById("comment").appendChild(a);
        }
        else if (40 <= output && output < 50)
        {
        document.getElementById("comment").innerText = "This means you are mobidly obese for your height!"+"\n";
        var a = document.createElement('a');
        var linktext = document.createTextNode("Diet Plan");
        a.appendChild(linktext);
        a.title = "Diet plan";
        a.href = "../Diet-plans/overweightDiet.html";
        document.body.appendChild(a);
        document.getElementById("comment").appendChild(a);
      
        }
        else if(output>50)
        document.getElementById("comment").innerText = "Quite astonishing, you are still alive!";  
        else
        document.getElementById("comment").innerText = "You did not enter a number";    
 }

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', function(){
    reset();
});

 function reset(){
    var output = document.getElementById("output");
    var comment = document.getElementById("comment");

   output.textContent="?";
   comment.textContent="?";
 


 }