let sales = [120, 85, 150, 95, 200, 60, 175];
let total = 0;
let highest = sales[0];
let lowest = sales[0];

for(let i=0;i<sales.length;i++){

    let status = "";

    if(sales[i] >= 170){
        status = "Excellent";
    }
    else if(sales[i] >= 100){
        status = "Good";
    }
    else{
        status = "Need Improvement";
    }

    document.write("Day " + (i+1) + " : " + sales[i] + " cups - " + status + "<br>");

    total += sales[i];

    if(sales[i] > highest){
        highest = sales[i];
    }

    if(sales[i] < lowest){
        lowest = sales[i];
    }

}

let average = total / sales.length;

document.write("<hr>");

document.write("Total Sales : " + total + " cups<br><br>");

document.write("Average Sales : " + average.toFixed(2) + " cups<br><br>");

document.write("Highest Sales : " + highest + " cups<br><br>");

document.write("Lowest Sales : " + lowest + " cups");
