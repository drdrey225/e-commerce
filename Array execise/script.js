var allProduct = []


function addToCart() {
   var product = item.value
   if(product == ""){
      alert("Input an item to add to your cart!")
   } else{
      allProduct.push(product)
      item.value = ""
      console.log(allProduct)
      display.innerHTML = allProduct
   }
}


function emptyCart() {
   var response = confirm('Are you sure you want to empty your cart?')

   if(allProduct == ""){
      alert("Your cart is empty")
   } else if(response == true){
      allProduct.splice(0)
      console.log("Deleted");
      display.innerHTML = ""
   }else{
      console.log("Do not delete")
   }
    
}


function popCart() {
   if(allProduct == ""){
      alert("No Item to delete")
   }else{
      allProduct.pop(item.value)
      console.log(allProduct);
      display.innerHTML = allProduct
      
   }
}


function shiftCart() {
   if(allProduct == ""){
      alert("Your cart is empty!")
   }else{
      var product = item.value
      allProduct.shift(product)
      console.log(allProduct)
      display.innerHTML = allProduct
   }
}

function spliceCart() {
   if(allProduct == ""){
      alert("Your cart is empty!")
   }else{
      var index = prompt("Which item do you want to delete?")
      allProduct.splice(index,1)
      console.log(allProduct)
      display.innerHTML = allProduct
   }
}

function editOneItem() {
   if(allProduct == ""){
      alert("Your cart is empty!")
   }else{
      var index = prompt("Which item do you want to delete?")
      var replacement = prompt("Enter new Item!")
      allProduct.splice(index,1,replacement)
      console.log(allProduct)
      display.innerHTML = allProduct
   }
}




