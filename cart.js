let carttticon=document.querySelector(".carttticon");
let ordercart=document.querySelector(".ordercart")
let payment=document.querySelector(".payment");
let paymentsubmit=document.querySelector(".submit");

let checkorderpayment=document.querySelector(".checkbtn");


let totalitemincart=0;



let closecart=document.getElementById("close");
let productlisthtml=document.querySelector(".product");

let listproductjson=[];
let carts=[];
let orderitem=document.querySelector(".orderitem");
let iconspan=document.querySelector(".carttticon span");

let addcart=document.querySelector(".addcart");

// show order cart
carttticon.addEventListener("click",showcart);
function showcart(){
ordercart.style.right="0px"

}

// close order cart

closecart.addEventListener("click",() =>{
    ordercart.style.right="-350px"


})

checkorderpayment.addEventListener('click', () =>{
    payment.style.display="block"
})

// close payment form after you finish your payment

paymentsubmit.addEventListener('click', closepayment);

function closepayment(){
//     let lable=document.querySelector(".lable");
// let myname=document.querySelector("#name");
// let cardno=document.querySelector("#cardno");

// let pp=myname.value;
// let card=cardno.value;


    
    
        payment.style.display="none";
        alert("you Have finished your payment, Thanks you")
    

    

   
}
  





// Array to store cart items
// let cart = [];

// // Function to add item to cart
// function addToCart(productId, productName, productPrice, productImage,button) {
    
//     const existingItem = cart.find(item => item.id === productId);
//     if (existingItem) {
//         // Increase quantity if product is already in cart
//         existingItem.quantity += 1;
//     } else {
//         // Add new product to cart
//         cart.push({
//             id: productId,
//             name: productName,
//             price: productPrice,
//             image: productImage,
//             quantity: 1
//         });
//     }
//     button.textContent = ''; // Clear the button's displayed text

//         // Optionally, reset button content after a delay for visibility
//         setTimeout(() => {
//             button.textContent = `Add ${productName}`; // Restore original button text
//         }, 5000);
//     function increasetotalitem(){
//         const totalitem=document.querySelector(".totalitem") ;
//         totalitemincart ++;

//         totalitem.innerHTML=totalitemincart;

//     }
//     increasetotalitem();
    

//     // Update cart display
//     displayCart();
// }

// // Function to display cart items
// function displayCart() {
//     const cartItems = document.querySelector('.ordercart');
//     const cartTotal = document.querySelector('.Total');
    
//     // Clear cart items
//     // cartItems.innerHTML = '';
//     let total = 0;
//     // Display each cart item
//     cart.forEach(item => {  

//         let DivElement=document.querySelector(`order-item-${item.id}`)

//         if(DivElement){
//             itemElement.querySelector('.quantity').textContent = `x ${item.quantity}`;
//         }
//         else{

//          DivElement = document.createElement('div');
//          DivElement.id=`order-item-${item.id}`;
//         DivElement.innerHTML = `
//             <img src="${item.image}" alt="${item.name}" >
//             <p>${item.name} - $${item.price} x ${item.quantity} </p>
//         `;
//         cartItems.appendChild(DivElement);
//         DivElement.classList.add("orderitem");
//          cartItems.style.display="block"
//         total += item.price * item.quantity;}
//     });
//     // Update total price
//     cartTotal.textContent = `$${total}`;
// }
// // Add event listeners to buttons
// document.querySelectorAll('.addcart').forEach(button => {
//     button.addEventListener('click', () => {
//         const productId = button.getAttribute('data-id');
//         const productName = button.getAttribute('data-name');
//         const productPrice = button.getAttribute('data-price');
//         const productImage = button.getAttribute('data-image');

      
//         addToCart(productId, productName, productPrice, productImage,button);
//     });
// });












let cart = [];

// Function to add item to cart
function addToCart(productId, productName, productPrice, productImage, button) {
    // Check if the product is already in the cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        // Increase quantity if product is already in cart
        existingItem.quantity += 1;
    } else {
        // Add new product to cart
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }
     
function increasetotalitem(){
            const totalitem=document.querySelector(".totalitem") ;
            totalitemincart ++;
    
            totalitem.innerHTML=totalitemincart;
    
        }
        increasetotalitem();

    // Clear the button’s text immediately after adding to cart
    button.textContent = ''; // Clear the button's displayed text

    // Optionally, reset button content after a delay for visibility
    setTimeout(() => {
        button.textContent = `Add ${productName}`; // Restore original button text
    }, 500); // Adjust delay time as needed

    // Update cart display without clearing
    displayCart();
}

// Function to display cart items
function displayCart() {
    const cartItemsContainer = document.querySelector('.ordercart');
    const cartTotal = document.querySelector('.Total');

    let total = 0;
    cart.forEach(item => {
        // Check if the item already exists in the display
        let itemElement = document.querySelector(`#cart-item-${item.id}`);
        if (itemElement) {
            // If it exists, just update the quantity display
            itemElement.querySelector('.quantity').textContent = `x ${item.quantity}`;
        } else {
            // If it doesn't exist, create a new element for this item
            itemElement = document.createElement('div');
            itemElement.id = `cart-item-${item.id}`;
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" >
                <p>${item.name} - $${item.price} <span class="quantity">x ${item.quantity}</span></p>
            `;
            itemElement.classList.add("orderitem");
            cartItemsContainer.appendChild(itemElement);
        }
        
        // Calculate total
        total += item.price * item.quantity;
        let totalpayment=document.querySelector("#totalpayment");
        totalpayment.value= "$"+ total + ".00";
    });

  

    // Update total price
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Add event listeners to buttons
document.querySelectorAll('.addcart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price')); 
        const productImage = button.getAttribute('data-image');

        addToCart(productId, productName, productPrice, productImage, button); 
    });
});

































































// function  addToHtml(){
//     productlisthtml.innerHTML="";
//     if(listproductjson.length>0){
//         listproductjson.forEach(myproduct =>{
//             let newproduct=document.createElement("div");
//             newproduct.dataset.id=myproduct.id;
//             newproduct.classList.add("itemcart");
//             newproduct.innerHTML=`<img src="${myproduct.image}" alt="">
//             <p>${myproduct.name}</p>
//             <p>$${myproduct.price}</p><br>
//             <button class="addcart">add To cart</button>`;
//             productlisthtml.appendChild(newproduct);
//         })
//     }
   
// }

// productlisthtml.addEventListener("click", event =>{
//    let positionclick=event.target;
//    if(positionclick.classList.contains("addcart")){
//     let productid=positionclick.parentElement.dataset.id;
//     addtocartt(productid);
    
//    }
   
// })






// fetch("productlist.json")
//         .then(response => response.json())
//         .then(data =>{
//             listproductjson=data;
//             addToHtml();
//         })