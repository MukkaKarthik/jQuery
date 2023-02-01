// @ts-nocheck

// forEach loop is used when an array consist of 5 elements and we want to pass function in all of these 5 elements

// for and in is used when we want to loop inside a variable(anonymous function) having all properties create using this property
function  AddSomething()
{
    var x = document.getElementById("input_text_1").value;

    if(x == "")
    {
        alert("First Number is required");
        return;
    }
    
    x = parseFloat(x);
    
    if(isNaN(x))
    {
        alert("Enter a valid first number from [0-9] apart from special characters");
        return;
    }


    var y = document.getElementById("input_text_2").value;

    if(y == "")
    {
        alert("Second Number is required");
        return;
    }

    y = parseFloat(y);

    if(isNaN(y))
    {
        alert("Enter a valid Second number from [0-9] apart from special characters");
        return;
    }

    var z = x + y;
    document.getElementById("input_text_3").value = z;


}


function ConcatenationAfterInputFeeding() {

    var str1 = document.getElementById("string1ID").value;

    var str2 = document.getElementById("string2ID").value;

    document.getElementById("ConcatResult").innerHTML = str1 + " " + str2 + 34 + 45;



}


function SampleConcat()
{

    var String1 = "Hyderabad";
    var String2 = "India"
    var ConcatString = String1 + " " + String2;

    document.getElementById("sampleConcatenation").innerHTML = ConcatString;
    
}

function callingDifferentDetails()
{
    var a = document.getElementById("changedToSomething").value;
    var b = document.getElementById("Input10th_element").value;
    var c = document.getElementById("Input11th_element").value;

    document.getElementById("collectingAllDetails").innerHTML = a + " " + b + " " + c;



}


function Display()
{
    document.write("Display Method");
}


function CallingDisplay()
{
    document.write('A "blue" bottle , in a "blue" glass, with a "blue" liquid , on the "blue" table');
    var ReadString = 'A "blue" bottle , in a "blue" glass, with a "blue" liquid , on the "blue" table';

    document.write("<br>");
    document.write("<br>");
    document.write("<br>");


    var ReplaceString = ReadString.replace(/blue/g,"green");
    document.write(ReplaceString);

}

function SubStringDisplay()
{
    var String_subString = "JavaScript tutorial";
    document.write(String_subString.substring(10));
    document.write("<br>");
    document.write(String_subString.substring(10,15));
}

function EmailFormValidation_WithoutFilling()
{

    var e1 = document.getElementById("email_address_id").value;

    var e2 = e1.substring(0,e1.indexOf("@"));
    document.getElementById("email_part_id").value = e2;

    var d1 =e1.substring(e1.indexOf("@")+1);

    document.getElementById("domain_address_id").value = d1;

}

function DomainFormValidation_UsingURL()
{
    var ee1 = document.getElementById("website_URL").value;

   var  ff2 = ee1.substring(ee1.lastIndexOf("."));

    document.getElementById("domain_last_name").value = ff2;
}

function Ternary_Operator()
{
    var Input = Number(prompt("Input a number",""));

     ResultInput = Input % 2 == 0;

    Input % 2 == 0  ? (alert("Input Number given is an even number"),
        alert("Number is divisible by 2"),alert("Number given is "+ ResultInput )): (alert("Input Number given is an odd number"),alert("Number is not divisible by 2"),alert("Number given is "+ResultInput ));
}

function Ternary_Operator_forCalendar()
{
    var Calendar_MonthNumber = Number(prompt("Enter any month number from calendar",""));

    Calendar_MonthNumber == 1 ? alert("January") :
        Calendar_MonthNumber == 2 ? alert("February") :
            Calendar_MonthNumber == 3 ? alert("March") :
                Calendar_MonthNumber == 4 ? alert("April") :
                    Calendar_MonthNumber == 5 ? alert("May") :
                        Calendar_MonthNumber == 6 ? alert("June") :
                            Calendar_MonthNumber == 7 ? alert("July") :
                                Calendar_MonthNumber == 8 ? alert("August") :
                                    Calendar_MonthNumber == 9 ? alert("September") :
                                        Calendar_MonthNumber == 10 ? alert("October") :
                                            Calendar_MonthNumber == 11 ? alert("November") :
                                                Calendar_MonthNumber == 12 ? alert("December") : alert("Not a valid number");
}


function whileLoop()
{
    var start =0;
    var TargetNumber = prompt("Enter a number","");

    while(start<TargetNumber)
    {
        document.write(start + "<br>");
        start = start +2;
    }
}


function forLoop()
{

    var TargetNumber = prompt("Enter a number","");

    var start =0;
    for(; ;start+2)
        {

            if(start>TargetNumber)
            {
                break;
            }
        document.write(start + "<br>");
        start = start +2;
    }
}


function ArrayLoop()
{
    var MyArray = [5,6,7,8,9];

    for( var i=0 ; i<=10 ; i++)
    {
        MyArray.unshift(i*10);
    }

    for( var k=0 ; k<=10 ; k++)
    {
      document.write("MyArray["+k + "] = " + MyArray[k] + "<br>")

    }

    document.write("<br>");
    document.write("<br>");

    for (var j=0;j<(MyArray.length-6);j++)
    {
        document.write("MyArray["+j + "] = " + MyArray.shift() + "<br>");
    }
}



function performSimpleAddition() {


    var firstNumber = parseInt(document.getElementById("firstNumber_ID").value);
    var secondNumber = parseInt(document.getElementById("secondNumber_ID").value);

    var resultAdd = firstNumber + secondNumber;

    document.getElementById("afterAddition").innerHTML = "Result after addition = " + resultAdd;

}


 var factorial_result =  (function computeFactorial(number)
{
    if(number <= 1)
    {
        return 1;
    }

    else
    {
        return number * computeFactorial(number-1);
    }
})(5);


function addNumbers(firstNumber , SecondNumber)
{
     var result = "Addition of 2 numbers are ";

     function addRandomNumbers()
     {
         return  result + (firstNumber + SecondNumber);

     }

     return addRandomNumbers();
}


function Click_function()
{
    var Click_Count_function = 0;
    return ++Click_Count_function;
}



var Click_Variable = (function ()
{
    var Click_Count = 0;

    return function ()
    {
       return  Click_Count++

    }

})();


function printArguments()
{
    document.write("Arguments Count = "+ arguments.length + "<br>");
    for (var i=0 ; i<arguments.length ; i++)
    {
        document.write("Arguments " + i +" = " + arguments[i] + "<br>");
    }
    document.write("<br>");
}

function addition_arguments()
{
    document.write("Number of arguments given : " + arguments.length + "<br>");
    var sum = 0;
    for (var i=0 ; i<arguments.length; i++)
    {
        document.write(arguments[i]+",");
        sum = sum + arguments[i];
    }
    document.write("<br>");
    document.write("Sum of arguments = "+ sum + "<br>");
}

function sorting_Arguments()
{
    var ConvertedArray = [].slice.call(arguments);
    ConvertedArray.sort();
    document.write(ConvertedArray);
}

function  NonRecursive_function(n)
{
    if (n==0 || n==1)
    {
        return 1;
    }

    var result = n;
    while (n>1)
    {
        result =  result * (n - 1);
        n=n-1;
    }
    return result;
}

function Recursive_function(n)
{
    if(n ==1)
    {
        return 1;
    }

    return n * Recursive_function(n-1);
}


function divide_function()
{
    try{

        var Numerator = prompt("Enter the numerator ","");
        var Denominator = prompt("Enter the denominator","");

        if(Denominator == 0)
        {
            throw{
                error : "Divide by zero error",
                message : "denominator can't be 0 . Please give a valid number between 0-9"

            }
        }

        else {
            var result = Numerator/Denominator;
            document.write("Result = " + result);
        }

    }

    catch (e)
    {
        document.write("Error = " + e.error + "<br>");
        document.write("Message = "+ e.message + "<br>");
    }
}

function ImageLoadingErrorEventHandler()
{
        alert("Image cannot load in browser as it is not present ");

}


function changeImage5_to_Image6()
{
    var x= document.getElementById("5th_Image").innerHTML;
    document.getElementById("6th_Image").innerHTML=x;
}


function function_DuringFocus(controlID)
{
    var control =document.getElementById("controlID");

    control.style.backgroundColor = "white";

    if(control.value == "") {

control.style.backgroundColor = "red";
    }
else
    {
        control.style.backgroundColor= "green";
    }

}



//Client Code
function ClientCode() {


    // Overriding function in Constructor function

    document.write("Converting company names to upper case " + "<br>");

    CompanyName.prototype.gettingName_InUpperCase = function () {
        return this.Company_PublicVariable.toUpperCase();
    }

    var Company2 = new CompanyName("abcdef");

    document.write("Invoking Company2 name using client code : " + Company2.gettingName_InUpperCase());
    document.write("<br>");

    var Company3 = new CompanyName("epsilon");

    document.write("Invoking Company3 name using client code : " + Company3.gettingName_InUpperCase());
    document.write("<br>");


    CompanyName.prototype.gettingName_inLowerCase = function () {
        return this.Company_PublicVariable.toLowerCase();
    }

    // Calling constructor function using Overriding function
    document.write("Converting company names to lower case " + "<br>");

    var Company2 = new CompanyName("ABCDEF");

    document.write("Invoking Company2 name using client code : " + Company2.gettingName_inLowerCase());
    document.write("<br>");

    var Company3 = new CompanyName("EPSILON");

    document.write("Invoking Company3 name using client code : " + Company3.gettingName_inLowerCase());
    document.write("<br>");

}
//calling Client code


function addSomething(firstNumber , SecondNumber)
{
    var result = firstNumber + SecondNumber;
    return result;
}

function addChildElement()
{
    var q = document.querySelector("section");
    var pa = document.createElement("p");
    pa.textContent = "Adding context through functions";

    var hElement = document.createElement("h2");
    hElement.innerHTML = "adding content from outside using JavaScript function";
    q.appendChild(pa);

    q.appendChild(hElement);


    var fig = document.querySelector("figure");

    var ImagePicture = document.getElementById("img_id");
    fig.appendChild(ImagePicture);


}

