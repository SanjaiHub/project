// alert("tdhks")
function addNewWEfield() {
    // console.log("jdj")

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add("mt-2");
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here')

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQfield() {

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqfield');
    newNode.classList.add("mt-2");
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter hare');

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);


}

// build cv

function buildcv() {
    let namefield = document.getElementById('namefield').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = namefield;

    //direct
    // second name
    document.getElementById('nameT2').innerHTML = namefield;
    //contact
    document.getElementById('contT').innerHTML = document.getElementById('contactfield').value;
    //address
    document.getElementById('addressT').innerHTML = document.getElementById('addressfield').value;

    document.getElementById('gitT').innerHTML = document.getElementById('gitfield').value;
    document.getElementById('linkT').innerHTML = document.getElementById('linkfield').value;
    document.getElementById('instaT').innerHTML = document.getElementById('instafield').value;

    // objective

    document.getElementById('objT').innerHTML = document.getElementById('objfield').value;

    //work exp

    let wes = document.getElementsByClassName("wefield");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value}</li>`;
    }

    document.getElementById("weT").innerHTML = str;
    // academic quali

    let aqs = document.getElementsByClassName('aqfield');
    let str1 = "";
    for (let e of aqs) {
        str1 += `<li>${e.value}</li>`;
    }

    document.getElementById('aqT').innerHTML=str1;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-temp').style.display='block';

}

// print cv
function printCV(){
window.print();
}