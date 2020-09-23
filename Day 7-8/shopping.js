
let products =[
    {
        id:1,
        name:"Casual Wear",
        size: "M", 
        color:"Grey",
        price: "1500",
        image:"product1.jpg",
        description:"Just Wear It"
    },
    {
        id:2,
        name:"Black shirt",
        size: "S" , 
        color:"Black",
        price: "1000",
        image:"product2.jpg",
        description:"Nice Shirt"
    },
    {
        id:3,
        name:"Suit",
        size: "M" , 
        color:"Black",
        price: "3000",
        image:"product3.jpg",
        description:"Suits"
    },
    {
        id:4,
        name:"Casual Business Wear",
        size: "S"  ,
        color:"White&Brown",
        price: "2500",
        image:"product4.jpg",
        description:"Shirt and Pant"
    },
    {
        id:5,
        name:"Dress",
        size: "M" ,
        color:"Floral print",
        price: "2000",
        image:"product5.jpg",
        description:"Beautiful dress"
    },
    {
        id:6,
        name:"Jeans",
        size: "M", 
        color:"Blue",
        price: "1000",
        image:"product6.jpg",
        description:"Nice jeans"
    },
    {
        id:7,
        name:"Winter Coat",
        size: "M", 
        color:"Black",
        price: "1300",
        image:"product8.jpg",
        description:"Long Winter Coat"
    },
    {
        id:8,
        name:"Trench Coat",
        size: "M", 
        color:"Blue",
        price: "1800",
        image:"product7.jpg",
        description:"Nice Coat"
    },
    {
        id:9,
        name:"Anarkali Suit",
        size: "M", 
        color:"Navy Blue",
        price: "3000",
        image:"product9.jpg",
        description:"Designer Suit"
    },
    {
        id:10,
        name:"Kurta set",
        size: "M", 
        color:"Maroon&Black",
        price: "2000",
        image:"product10.jpg",
        description:"Designer Suit"
    },
    {
        id:11,
        name:"Jumper",
        size: "S", 
        color:"Corduroy",
        price: "1600",
        image:"product11.jpg",
        description:"Jumper Dress"
    },
    {
        id:12,
        name:"Vintage Shirt",
        size: "S", 
        color:"Floral",
        price: "1100",
        image:"product12.jpg",
        description:"Button down shirt"
    }
];

cart = [];
count = 0;

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
      

    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;

    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);


function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }

let flag=false;
function addToCart(id) 
{
flag=false;
  let item = getProductByID(products, id);

  cart.forEach(function(element){
      if(element.id==item.id){
          flag=true;
      }
  
  })
  if (flag) {
      alert("The product is already in cart");
    return 0;
  }

  count += 1;
  document.getElementById("cart").innerText=count;
  document.getElementById("numb").innerText=count;
  
  cart.push(item);
  displayProducts(cart, "cart");
}

function removeFromCart(id) {
    
    let item = getProductByID(products,id);
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    cart.splice(index, 1);
    count-=1;
  
     document.getElementById("numb").innerText = count;
     displayProducts(cart, "cart");
  }

  function filter(){
    let minvalue=document.getElementById("minp").value;
    let maxvalue = document.getElementById("maxp").value;
    let items= products.filter(function (itemsl) {
        return itemsl.price>=minvalue && itemsl.price<=maxvalue;
    })
     displayProducts(items);
      document.getElementById("minp").value;
      document.getElementById("maxp").value;
  }