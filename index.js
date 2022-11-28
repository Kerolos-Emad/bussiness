//window.alert("hello");

//consol.log("sasasasasas");

//document.getElementById("demo").innerHTML='web design';
/**
var username="ahmed"
    if(username=='ahmed'){
        console.log('welcome ahmed')
                    }
    else if(username=='ali'){   
        console.log('false')
    }

var x = 10;
var y = '10';
    if  (x===y)
        {
            console.log("true");
        }
else
        {
            console.log('false');
            
        }
        
        
for (var i = 0 ; i<100 ; i+=1)
    {
         console.log("welcome");console.log("welcome");
    }
    
        **/

/**
29/7/2019
____________------________-----_____-----_____-----_____________|
**/



    
function calcage(birthdate)
{
    var age = 2019- birthdate ;
    return age;
}

function retirment (birthdate , employeename)
{
    var employeeage = calcage(birthdate);
    var retirmentyears = 65- employeeage;
    if(retirmentyears<0)
        {
            console.log("already retired")
        
        }
    else 
        {
            console.log("Name : "+employeename+ " will retired after"+retirmentyears);
        }
}
retirment(1980,"ali");
retirment(1940,"mohamed");


/*

welcome("ahmed")


function welcome (username) // statment function (hosting bttrf3 lawl al code )
{
    console.log("welcome:"+username);
}
*/


var welcome= function(username) //expression function
{
    console.log("welcome :"+username);
}

welcome("ahmed");
