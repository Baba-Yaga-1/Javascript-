//Question 2.  Create a blank array and later on create a add bus functionality bus object contains {name, source,
//     destination, number, passenger capacity}
//     A. A form to add new bus
//     B. Display data in table format
//     C. Search by source and destination
//     D. Data should be stored permanently in localstorage


window.onload = function() {

  let busInformation = [];

    if (localStorage.getItem("busInformation") == null) {
      let stringbusInformation=JSON.stringify(busInformation);
      localStorage.setItem("busInformation", stringbusInformation);
    }
};

function display(superarray = undefined) {
  let tabledata = "";
  let busInformation;
  if (superarray == undefined) {
    busInformation = JSON.parse(localStorage.getItem("busInformation"));
  } else {
    busInformation = superarray;
  }
  
  busInformation.forEach(function(busInfo, index){
    let currentrow = `<tr>
    <td>${busInfo.name}</td>
    <td>${busInfo.source}</td>
    <td>${busInfo.destination}</td>
    <td>${busInfo.number}</td>
    <td>${busInfo.capacity}</td>
    <tr>`;

    tabledata += currentrow;
    
  });
  document.getElementById('tdata').innerHTML = tabledata;
  // document.getElementsByClassName('tdata')[0].innerHTML = tabledata;

}
display();

function addBus(event) {

    event.preventDefault();
    let busInfo = {};
    let name=document.getElementById('name').value;
    let source=document.getElementById('source').value;
    let destination=document.getElementById('destination').value;
    let number=document.getElementById('number').value;
    let capacity=document.getElementById('capacity').value;

    busInfo.name=name;
    busInfo.source=source;
    busInfo.destination=destination;
    busInfo.number=Number(number);
    busInfo.capacity=capacity;

    let busInformation=JSON.parse(localStorage.getItem("busInformation"));
    busInformation.push(busInfo);
    localStorage.setItem("busInformation", JSON.stringify(busInformation));

    display(busInformation);

    document.getElementById('name').value="";
    document.getElementById('source').value="";
    document.getElementById('destination').value="";
    document.getElementById('number').value="";
    document.getElementById('capacity').value="";

  }

  function search() {
    
    let searchValue=document.getElementById("searchName").value;
    // console.log(searchValue);
    let busInformation = JSON.parse(localStorage.getItem("busInformation"));
    
    let result=busInformation.filter(function(busInfo){
      return busInfo.source.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
    });
    
    display(result);
  }

  function search1() {
    
    let searchValue=document.getElementById("searchName1").value;
    let busInformation = JSON.parse(localStorage.getItem("busInformation"));
    
    let result=busInformation.filter(function(busInfo){
      return busInfo.destination.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
    });
    
    display(result);
  }

  