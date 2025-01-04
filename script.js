document.addEventListener('DOMContentLoaded',()=>{
  const products=[
    {id:1, name:"Tea", price:40},
    {id:2, name:"Bread", price:30},
    {id:3, name:"Eggs", price:100},
  ];

  const cart=[]


  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  products.forEach(product=>{
    const productDiv=document.createElement('div')
    productDiv.classList.add('product')
    productDiv.innerHTML=`
    <span>${product.name} - Rs.${product.price.toFixed(2)}
    <button data-id="${product.id}">Add to cart</button>
    `
    
    productList.appendChild(productDiv);
  })

  productList.addEventListener('click', (e)=>{
    if(e.target.tagName==='BUTTON'){
      const productId=parseInt(e.target.getAttribute('data-id'))

      const product=products.find(p=>p.id===productId)
      addToCart(product)

    }
  })


  function addToCart(product){
    cart.push(product);
    renderCart();

  }

  function renderCart(){
    cartItems.innerHTML="";
    let totalPrice=0
    if (cart.length>0) {
      emptyCartMessage.classList.add('hidden')
      cartTotalMessage.classList.remove("hidden")
      cart.forEach((item,index)=>{
        totalPrice+=item.price
        const cartItem=document.createElement('div')
        cartItem.innerHTML=`
        ${item.name} - Rs. ${item.price.toFixed(2)}
        `
        cartItems.appendChild(cartItem)
        totalPriceDisplay.textContent=`Rs.${totalPrice.toFixed(2)}`

      })
    }
    else{
      emptyCartMessage.classList.remove('hidden');
      totalPriceDisplay.textContent=`0.00`
    }
  }

  checkOutBtn.addEventListener('click',()=>{
    cart.length=0
    alert("Checkout Successfully")
    renderCart()

  })



})