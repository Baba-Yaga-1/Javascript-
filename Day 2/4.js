// Program to display only elements containing 'a' in them from a array

let data1 = ["Pizza", "Burger", "Cake", "Ice-Cream", "Chocolate", "Chips", "Sweets"];
var a;
for(let i=0;i<data1.length;i++)
{
     a = data1[i].search('a');
    if(a>0)
    {
         console.log(data1[i]);
    }
}
