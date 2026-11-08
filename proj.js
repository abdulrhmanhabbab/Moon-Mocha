var stars = document.getElementById('stars');
var moon = document.getElementById('moon');
var mountains3 = document.getElementById('mountains3');
var mountains4 = document.getElementById('mountains4');
var rivr = document.getElementById('rivr');
var boat = document.getElementById('boat');
var mocha = document.querySelector('.mocha');
var orderButton = document.getElementById('orderButton');
var orderForm = document.getElementById('orderForm');
var orderMessage = document.getElementById('orderMessage');

orderButton.onclick = function(event) {
    event.preventDefault();
    orderForm.classList.toggle('hidden');
     orderForm.classList.toggle('grid');
    orderForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

orderForm.onsubmit = function(event) {
    event.preventDefault();

    var customerName = document.getElementById('customerName').value ;
    var customerPhone = document.getElementById('customerPhone').value ;
    var orderItem = document.getElementById('orderItem').value;
    var orderQuantity = document.getElementById('orderQuantity').value ;

    if (customerName == '' || customerPhone == '' || orderItem == '' || orderQuantity == '') {
        orderMessage.textContent = 'please fill in all filds';
    } else {
        orderMessage.textContent = 'Your order has been received. We will prepare it soon!';
        orderForm.reset();
    }
}

window.onscroll = function(){
    var value = scrollY;
    stars.style.left = value + 'px' ;
     moon.style.top = value * 4 + 'px' ;
    mountains3.style.top = value *2 + 'px' ;
    mountains4.style.top = value *1.5 + 'px' ;
    rivr.style.top = value  + 'px' ;
    boat.style.top = value  + 'px' ;
    boat.style.left = value * 3  + 'px' ;
    mocha.style.fontSize = value + 'px' ;
    if(scrollY >= 67){
    mocha.style.fontSize = 67 + 'px' ;
    mocha.style.position = 'fixed' ;
    if(scrollY >= 500){
    mocha.style.display = 'none' ;
    }
    else{
    mocha.style.display = 'block' ;
    }
    if(scrollY >= 130){
        document.querySelector('.hero').style.background = 'linear-gradient(#376281,#10001f) ';
    }else{
        document.querySelector('.hero').style.background ='linear-gradient(#200016,#10001f) ';

    }
    }
}
