
let ip = parseInt(document.getElementById('inp1').value);
let se = parseInt(document.getElementById('inp2').value);
let cns = parseInt(document.getElementById('inp3').value);
let eeb = parseInt(document.getElementById('inp4').value);
let pce = parseInt(document.getElementById('inp5').value);


let add = document.getElementById('spanid');
let percent = document.getElementById('spanid1');


let percentage;

function next() {
    
    let sum = ip + se + cns + eeb + pce;
    let percentage = (sum / 500) * 100;
    // console.log(sum);
    add.innerHTML = sum;
    percent.innerHTML = percentage;
}

function res(){
    // ip=0;
    // se=0;
    // cns=0;
    // eeb=0;
    // pce=0;
    document.getElementById('inp1').innerHTML=0;
    document.getElementById('inp2').innerHTML=0;
    document.getElementById('inp3').innerHTML=0;
    document.getElementById('inp4').innerHTML=0;
    document.getElementById('inp5').innerHTML=0;
    sum=0;
    percentage=0;
    document.getElementById('spanid').innerHTML=sum;
    document.getElementById('spanid1').innerHTML=percentage;

}

