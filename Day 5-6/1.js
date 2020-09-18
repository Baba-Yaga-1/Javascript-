// Question 1. Create a array containing five objects with properties { name, age , city , salary }
// A. Display all the objects in a table
// B. Create a search functionality for name and city
// C. Delete button to delete records
// D. Data is not permanent

let information = [
    {
      name: "Ava",
      age: 30,
      city: "Los Angeles",
      salary: "68,000",
    },
    {
      name: "Bonnie",
      age: 31,
      city: "Chicago",
      salary: "70,000",
    },
    {
      name: "Daniel",
      age: 32,
      city: "Houston",
      salary: "79,000",
    },
    {
      name: "Emma",
      age: 29,
      city: "San Diego",
      salary: "75,000",
    },
    {
      name: "Paul",
      age: 35,
      city: "Boston",
      salary: "85,000",
    },
  ];
  function display(superarray) {
    let tabledata = "";
    
    superarray.forEach(function(info, index){
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${info.name}</td>
      <td>${info.age}</td>
      <td>${info.city}</td>
      <td>${info.salary}</td>
      <td><button onclick="deleteInformation(${index})">Delete</button></td>
      <tr>`;

      tabledata += currentrow;
    
    });
    
    document.getElementsByClassName('tdata')[0].innerHTML = tabledata;

  }
  display(information);

  function search() {
    
    let searchValue=document.getElementById("search").value;
    
    let newValue =information.filter(function(info){
      return info.name.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
    });
    display(newValue);
  }

  function search1() {
    
    let searchValue=document.getElementById("search1").value;
    
    let newValue1 =information.filter(function(info){
      return info.city.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
    });
    display(newValue1);
  }

  function deleteInformation(index) {
    information.splice(index, 1);
    display(information);
  }