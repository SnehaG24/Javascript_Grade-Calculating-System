
function next() {

    var ip = parseInt(document.getElementById('inp1').value);    // user value will get accepted with the help of value
    var se = parseInt(document.getElementById('inp2').value);
    var cns = parseInt(document.getElementById('inp3').value);
    var eeb = parseInt(document.getElementById('inp4').value);
    var pce = parseInt(document.getElementById('inp5').value);

    var add = document.getElementById('spanid');
    var percent = document.getElementById('spanid1');
    var percentage;
    var sum = ip + se + cns + eeb + pce;
    var percentage = (sum / 500) * 100;
    add.innerHTML = sum;
    percent.innerHTML = percentage;

    if (percentage >= 80) {
        document.getElementById("Remarks").innerHTML = "<b>A</b>"
    }
    else if (percentage >= 70 && percentage <= 79) {
        document.getElementById("Remarks").innerHTML = "<b>B</b>"
    }
    else if (percentage >= 60 && percentage <= 69) {
        document.getElementById("Remarks").innerHTML = "<b>C</b>"
    }
    else if( percentage >= 35 && percentage <= 59 ) {
        document.getElementById("Remarks").innerHTML = "<b>D</b>"
    }

    else{
        document.getElementById("Remarks").innerHTML= "<i>Unsuccessful Result Fail!!<i>"
    }

}

function res() {
    document.getElementById('spanid').innerHTML = '';
    document.getElementById('spanid1').innerHTML = '';
    document.getElementById("Remarks").innerHTML='';
    document.getElementById('inp1').value="";
    document.getElementById('inp2').value="";
    document.getElementById('inp3').value="";
    document.getElementById('inp4').value="";
    document.getElementById('inp5').value="";

}

