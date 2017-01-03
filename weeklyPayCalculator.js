function validateUserInput(monHour, monMin, tuesHour, tuesMin, wedHour, wedMin, thurHour, thurMin, friHour, friMin) {

    var hourTest = /^[\d][\d]?$/;
    var minuteTest = /(^[\d]$|^[1-5][\d]?$|^[6]?[0]$)/;

    /*Monday*/
    /*---------------------------------------------------------------------------------*/

    if (isNaN(monHour) || !hourTest.test(monHour)) {
        
        document.getElementById("mondayHours").style.borderColor = "red";
        document.getElementById("mondayHours").style.backgroundColor = "lightgrey";  
     
    } else {
        
        document.getElementById("mondayHours").style.borderColor = "";
        document.getElementById("mondayHours").style.backgroundColor = "";  

        monHour = Number(monHour);

    }

    if (isNaN(monMin) || !minuteTest.test(monMin) || monMin > 60) {
        document.getElementById("mondayMinutes").style.borderColor = "red";
        document.getElementById("mondayMinutes").style.backgroundColor = "lightgrey";
          
    } else {

        document.getElementById("mondayMinutes").style.borderColor = "";
        document.getElementById("mondayMinutes").style.backgroundColor = ""; 

        monMin = Number(monMin);
    }

    /*Tuesday*/
    /*---------------------------------------------------------------------------------*/

    if (isNaN(tuesHour) || !hourTest.test(tuesHour)) {
        
        document.getElementById("tuesdayHours").style.borderColor = "red";
        document.getElementById("tuesdayHours").style.backgroundColor = "lightgrey";  
     
    } else {
        
        document.getElementById("tuesdayHours").style.borderColor = "";
        document.getElementById("tuesdayHours").style.backgroundColor = "";  

        tuesHour = Number(tuesHour);

    }

    if (isNaN(tuesMin) || !minuteTest.test(tuesMin) || tuesMin > 60) {
        document.getElementById("tuesdayMinutes").style.borderColor = "red";
        document.getElementById("tuesdayMinutes").style.backgroundColor = "lightgrey";
          
    } else {

        document.getElementById("tuesdayMinutes").style.borderColor = "";
        document.getElementById("tuesdayMinutes").style.backgroundColor = ""; 

        tuesMin = Number(tuesMin);
    }

    /*Wednesday*/
    /*---------------------------------------------------------------------------------*/

    if (isNaN(wedHour) || !hourTest.test(wedHour)) {
        
        document.getElementById("wednesdayHours").style.borderColor = "red";
        document.getElementById("wednesdayHours").style.backgroundColor = "lightgrey";  
     
    } else {
        
        document.getElementById("wednesdayHours").style.borderColor = "";
        document.getElementById("wednesdayHours").style.backgroundColor = "";  

        wedHour = Number(wedHour);

    }

    if (isNaN(wedMin) || !minuteTest.test(wedMin) || wedMin > 60) {
        document.getElementById("wednesdayMinutes").style.borderColor = "red";
        document.getElementById("wednesdayMinutes").style.backgroundColor = "lightgrey";
          
    } else {

        document.getElementById("wednesdayMinutes").style.borderColor = "";
        document.getElementById("wednesdayMinutes").style.backgroundColor = ""; 

        wedMin = Number(wedMin);
    }

    /*Thursday*/
    /*---------------------------------------------------------------------------------*/

    if (isNaN(thurHour) || !hourTest.test(thurHour)) {
        
        document.getElementById("thursdayHours").style.borderColor = "red";
        document.getElementById("thursdayHours").style.backgroundColor = "lightgrey";  
     
    } else {
        
        document.getElementById("thursdayHours").style.borderColor = "";
        document.getElementById("thursdayHours").style.backgroundColor = "";  

        thurHour = Number(thurHour);

    }

    if (isNaN(thurMin) || !minuteTest.test(thurMin) || thurMin > 60) {
        document.getElementById("thursdayMinutes").style.borderColor = "red";
        document.getElementById("thursdayMinutes").style.backgroundColor = "lightgrey";
          
    } else {

        document.getElementById("thursdayMinutes").style.borderColor = "";
        document.getElementById("thursdayMinutes").style.backgroundColor = ""; 

        thurMin = Number(thurMin);
    }

    /*Friday*/
    /*---------------------------------------------------------------------------------*/

    if (isNaN(friHour) || !hourTest.test(friHour)) {
        
        document.getElementById("fridayHours").style.borderColor = "red";
        document.getElementById("fridayHours").style.backgroundColor = "lightgrey";  
     
    } else {
        
        document.getElementById("fridayHours").style.borderColor = "";
        document.getElementById("fridayHours").style.backgroundColor = "";  

        thurHour = Number(thurHour);

    }

    if (isNaN(friMin) || !minuteTest.test(friMin) || friMin > 60) {
        document.getElementById("fridayMinutes").style.borderColor = "red";
        document.getElementById("fridayMinutes").style.backgroundColor = "lightgrey";
          
    } else {

        document.getElementById("fridayMinutes").style.borderColor = "";
        document.getElementById("fridayMinutes").style.backgroundColor = ""; 

        friMin = Number(friMin);
    }

}
    
function convertMinutes(minutesWorked) {
    var x = 100 / 60;
    var y = minutesWorked * x;

    return y;
}

function solveDailyEarnings(hoursWorked, minutesWorked, payRate) {

    var overtimePayRate;
    var overtimeHours;
    var dailyTotal;

    if (hoursWorked >= 5) {
        overtimeHours = hoursWorked - 5;
        hoursWorked = 5;
        overtimePayRate = payRate * 1.5;
        dailyTotal = (hoursWorked * payRate) + (overtimeHours * overtimePayRate) + ((minutesWorked * overtimePayRate) / 100)

        weekGrossTotal += dailyTotal;
        return dailyTotal;
        
    } else {
        dailyTotal = ((payRate * minutesWorked) /100) + (hoursWorked * payRate);

        weekGrossTotal += dailyTotal;
        return dailyTotal;
    }

}

function solveTaxDeductable(grossEarnings, taxPercentage) {

    var taxConverted = (taxPercentage / 100); 
    var netEarnings = grossEarnings * taxConverted;

    return netEarnings;

}

function calculatePaycheck(monHour, monMin, tuesHour, tuesMin, wedHour, wedMin, thurHour, thurMin, friHour, friMin, hourlyWage) {

/*Creates variables for holding converted minutes
-------------------------------------------------------------------------------------------------------------------------*/    
    var mondayMinutes;
    var tuesdayMinutes;
    var wednesdayMinutes;
    var thursdayMinutes;
    var fridayMinutes;
/*-------------------------------------------------------------------------------------------------------------------------*/ 


/*Creates variables for holding daily earnings
-------------------------------------------------------------------------------------------------------------------------*/ 
    var mondayEarnings;
    var tuesdayEarnings;
    var wednesdayEarnings;
    var thursdayEarnings;
    var fridayEarnings;
/*-------------------------------------------------------------------------------------------------------------------------*/


/*Create and define variables as containers from HTML Elements 
-------------------------------------------------------------------------------------------------------------------------*/ 
    var mondayTotalOutput = document.getElementById("mondayTotalOutput");
    var tuesdayTotalOutput = document.getElementById("tuesdayTotalOutput");
    var wednesdayTotalOutput = document.getElementById("wednesdayTotalOutput");
    var thursdayTotalOutput = document.getElementById("thursdayTotalOutput");
    var fridayTotalOutput = document.getElementById("fridayTotalOutput");
    var weekGrossOutput = document.getElementById("weekGrossTotal");
    var weekTaxDeductableOutput = document.getElementById("taxDeductable");
    var weekNetOutput = document.getElementById("netTotalContainer");
    var userWage = document.getElementById("hourlyWage").value;
    var userTax = document.getElementById("taxPercentage").value;

    var weekGrossTotal;
    var weekNetTotal;

    validateUserInput(monHour, monMin, tuesHour, tuesMin, wedHour, wedMin, thurHour, thurMin, friHour, friMin);
    

/*Converts Minutes from 0 / 60 format to 0 / 100
-------------------------------------------------------------------------------------------------------------------------*/    
    mondayMinutes = convertMinutes(monMin);
    tuesdayMinutes = convertMinutes(tuesMin);
    wednesdayMinutes = convertMinutes(wedMin);
    thursdayMinutes = convertMinutes(thurMin);
    fridayMinutes = convertMinutes(friMin);
/*-------------------------------------------------------------------------------------------------------------------------*/    


/*Stores daily wage based on the day's (hour, minute, wage)
-------------------------------------------------------------------------------------------------------------------------*/
    mondayEarnings = solveDailyEarnings(monHour, mondayMinutes, userWage);
    tuesdayEarnings = solveDailyEarnings(tuesHour, tuesdayMinutes, userWage);
    wednesdayEarnings = solveDailyEarnings(wedHour, wednesdayMinutes, userWage);
    thursdayEarnings = solveDailyEarnings(thurHour, thursdayMinutes, userWage);
    fridayEarnings = solveDailyEarnings(friHour, fridayMinutes, userWage);
/*-------------------------------------------------------------------------------------------------------------------------*/


/*Stores weekly gross total based on Monday, Tuesday, Wednesday, Thursday, Friday Earnings
-------------------------------------------------------------------------------------------------------------------------*/
     weekGrossTotal = (mondayEarnings + tuesdayEarnings + wednesdayEarnings + thursdayEarnings + fridayEarnings);
/*-------------------------------------------------------------------------------------------------------------------------*/ 


/*Stores weekly tax deductable based on gross total, user tax percentage
-------------------------------------------------------------------------------------------------------------------------*/
     weekTaxDeductable = solveTaxDeductable(weekGrossTotal, userTax);
/*-------------------------------------------------------------------------------------------------------------------------*/ 


/*Stores weekly net total based on gross total minus tax 
-------------------------------------------------------------------------------------------------------------------------*/
     weekNetTotal = weekGrossTotal - weekTaxDeductable;
/*-------------------------------------------------------------------------------------------------------------------------*/ 


/*Outputs daily wage based on the day's (hour, minute, wage) 
-------------------------------------------------------------------------------------------------------------------------*/
    mondayTotalOutput.innerHTML = "$" + mondayEarnings.toFixed(2);
    tuesdayTotalOutput.innerHTML = "$" + tuesdayEarnings.toFixed(2);
    wednesdayTotalOutput.innerHTML = "$" + wednesdayEarnings.toFixed(2);
    thursdayTotalOutput.innerHTML = "$" + thursdayEarnings.toFixed(2);
    fridayTotalOutput.innerHTML = "$" + fridayEarnings.toFixed(2);
/*-------------------------------------------------------------------------------------------------------------------------*/ 


/*Outputs weekly gross total with stored value from WeekGrossTotal
-------------------------------------------------------------------------------------------------------------------------*/
     weekGrossOutput.innerHTML = "$" + weekGrossTotal.toFixed(2);
/*-------------------------------------------------------------------------------------------------------------------------*/ 


/*Outputs weekly tax deductable with stored value from weekTaxDeductable 
-------------------------------------------------------------------------------------------------------------------------*/
     weekTaxDeductableOutput.innerHTML = "-$" + weekTaxDeductable.toFixed(2);
/*-------------------------------------------------------------------------------------------------------------------------*/ 


/*Outputs weekly net total with stored value from weekNetTotal 
-------------------------------------------------------------------------------------------------------------------------*/
    weekNetOutput.innerHTML = "$" + weekNetTotal.toFixed(2);
/*-------------------------------------------------------------------------------------------------------------------------*/

}