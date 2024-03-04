let count = 0;
let c = 3;
var temp = "" + Math.round(Math.random()*10);

function change() {
    console.log(temp);
    var x = document.getElementById("tb").value; // Get the value of the textbox
    c--;
    count++;

    if (x === "" || x > 10 || x < 0) {
        document.getElementById("b1").innerHTML = "Invalid number";
        count = 0;
        c = 3;
        return;
    }
    if (temp === x) {
        document.getElementById("b1").innerHTML = "Winner";
        alert("congratulations !");
        console.log(true);
        count = 0;
        c = 3;
        temp = "" + Math.round(Math.random()*10);
        document.getElementById("tb").value = "";
    }
    else {
        if (count == 3) {
            document.getElementById("b1").innerHTML = "You Loose";
            document.getElementById("tb").value = "";
            count = 0;
            c = 3;
            temp = "" + Math.round(Math.random()*10);
            return;
        }
        else {
            if (c != 1) {
                document.getElementById("b1").innerHTML = "Try Again you have more "+ c +" chances";
                document.getElementById("tb").value = "";
            }
            else {
                document.getElementById("b1").innerHTML = "Try Again you have more "+ c +" chance";
                document.getElementById("tb").value = "";
            }
        }
    }
}