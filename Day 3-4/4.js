// Question 4.Following the 3rd question
//             A. Write a function to display all the objects having age less than 30
//             B. Write a function to display all the objects having country India

let information = [
    {
        name : "Ava",
        age : 27,
        country : "Maldives",
        hobbies : ["Photography", "Drawing",],
    },
    {
        name : "Tom",
        age : 29,
        country : "Liberia",
        hobbies : ["Dance", "Driving",],
    },
    {
        name : "Bonnie",
        age : 30,
        country : "India",
        hobbies : ["Drama", "Filmmaking",],
    },
    {
        name : "Daniel",
        age : 32,
        country : "Denmark",
        hobbies : ["Calligraphy", "Video Editing",],
    },
    {
        name : "Emma",
        age : 28,
        country : "France",
        hobbies : ["Fashion Design", "Cooking",],
    },
    {
        name : "Paul",
        age : 31,
        country : "India",
        hobbies : ["Animation", "Board games",],
    },
];


function age(){
    console.log("People with age less than 30 - ")
        for(let i=0;i<information.length;i++){
        
            if(information[i].age<30){
                console.log(information[i]);
            }
        }
}
function country(){
    console.log("Resident of India - ")
        for(let i=0;i<information.length;i++){
        
            if(information[i].country=="India"){
                console.log(information[i]);
            }
        }
}
age();
country();
