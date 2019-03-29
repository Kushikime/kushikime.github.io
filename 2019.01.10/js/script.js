function menuClick(){
    for(i=0;i < productsMenuItems.length; i++){
        productsMenuItems[i].addEventListener('click', function(e){
            for(i=0;i < productsMenuItems.length; i++){
                productsMenuItems[i].classList.remove('active');
            }
            if(e.target.classList != 'active'){
                e.target.classList.add('active');
                document.getElementById('productMenu').classList.remove('active_menu');
                document.getElementsByClassName('toggleButton')[0].classList.remove('active');
                productInfo();
            }
        });
    }
}

let socialButton = document.getElementById('socialHover');

socialButton.addEventListener('click', function(){
    document.getElementById('infoSocial').classList.add('activeSocial');
    let closeButton = document.getElementById('activeExit').addEventListener('click', function(){
        document.getElementById('infoSocial').classList.remove('activeSocial');
    });
})

function productInfo(){
    let productsMenu1 = document.getElementById('productMenu');
    let productsMenuItems1 = productsMenu.getElementsByTagName('a');
    
    for(i=0;i < productsMenuItems.length; i++){
        if(productsMenuItems[i].className == 'active'){

            product_index = productsMenuItems[i].id;

            let productMainName = document.getElementsByClassName('product_title')[0];
            let productCurrentPrice = document.getElementsByClassName('current_price')[0];
            let productOldPrice = document.getElementsByClassName('old_price')[0];
            let productImage = document.getElementById('productImage');

            productImage.src = productNames[product_index]['image'];
            productMainName.innerHTML = productNames[product_index]['name'];
            productCurrentPrice.innerHTML = productNames[product_index]['price'];

            if(productNames[product_index]['oldPrice'] != undefined){
                productOldPrice.innerHTML = productNames[product_index]['oldPrice'];
            }else{
                document.getElementsByClassName('current_price')[0].style.margin = '0';
                productOldPrice.style.display = 'none';
            };
        }
    };
}






let menuToggleButton = document.getElementsByClassName('toggleButton')[0];




menuToggleButton.addEventListener('click', function(menuToggleButton){
    document.getElementsByClassName('toggleButton')[0].classList.toggle('active');
    document.getElementById('productMenu').classList.toggle('active_menu');
    menuClick();
});

let productsMenu = document.getElementById('productMenu');
let productsMenuItems = productsMenu.getElementsByTagName('a');


/*for(i=0;i < productsMenuItems.length; i++){
    productsMenuItems[i].addEventListener('click', function(e){
        if(e.target.classList != 'active'){
            e.target.classList.toggle('active');
            currentActiveLink.classList.remove('active');
            productInfo();
        }
    });
}*/



let productNames = {
    product1: {
        oldPrice: "$29.50",
        price:"$19.99",
        name: "FOR GAMERS BY GAMERS TEE",
        image: "./img/prod_image.jpg"
    },
    product2: {
        price:"$49.99",
        name: "PRO GAMER SLASH HOODIE",
        image: "./img/product2.png"
    },
    product3: {
        price:"$24.99",
        name: "SPECTROOM GAMER TEE",
        image: "./img/product3.png"
    },
    product4: {
        oldPrice: "$29.50",
        price:"$19.99",
        name: "GAMING FOR GOOD TEE",
        image: "./img/product4.png"
    },
    product5: {
        price:"$60.00",
        name: "SPECTROOM WEB HOODIE",
        image: "./img/product5.png"
    },
    product6: {
        price:"$54.00",
        name: "SPECTROOM VARSITY HOODIE",
        image: "./img/product6.png"
    }
}



function getProductCards(){
    let productCardsList = document.getElementsByClassName('product_cards')[0];
    let productCards = productCardsList.getElementsByClassName('product');

    for(i=0; i < productCards.length; i++){
        let currentProd = productCards[i].className.match(/(\w+)/g)[1];
        
        let currentCardTitle = productCards[i].getElementsByClassName('title')[0];
        
        let currentCardPrice = productCards[i].getElementsByClassName('new_price')[0];
        
        
        currentCardPrice.innerHTML = productNames[currentProd]['price'];
        currentCardTitle.innerHTML = productNames[currentProd]['name'];
    }
}


productInfo();

let slideIndex = 1;
showSlides(slideIndex);

function doSlide(n){
    showSlides(slideIndex += n);
};

function currentSlide(n){
    showSlides(slideIndex = n);
};

function showSlides(n) {

let i;
let slides = document.getElementsByClassName('slide');
let productName = document.getElementById('product_name');
let productPrice = document.getElementsByTagName('span');



if (n > slides.length){
    slideIndex = 1;
    let productIndex = 'product'+slideIndex;
    product_name.innerHTML = productNames[productIndex]['name'];
}
else if (n < 1){
    slideIndex = slides.length;
}
for(i=0; i < slides.length ; i++){


    slides[i].style.display= "none";

    let productIndex = 'product'+slideIndex;
    //console.log(slides[i].className.last);

    productName.innerHTML = productNames[productIndex]['name'];

}

slides[slideIndex-1].style.display = "block";

let productIndex = slides[slideIndex-1].className.match(/(\w+)/g)[2];

var currentProd = slides[slideIndex-1].getElementsByTagName('span');

currentProd[0].innerHTML = productNames[productIndex]['price'];

};

function myFunctionFirst(y) {
    if (y.matches) {
        getProductCards();// If media query matches
    } else {
        
    }
}

var y = window.matchMedia("(min-width: 720px)")
myFunctionFirst(y) // Call listener function at run time
y.addListener(myFunctionFirst)


function myFunction(x) {
    let titleParent = document.getElementsByClassName('info__content')[0];
    if (x.matches) { // If media query matches
        titleFirst = titleParent.getElementsByClassName('title')[0].style.display = 'block';
        titleFirst = titleParent.getElementsByClassName('title')[1].innerHTML='SIZE:';
        titleFirst = titleParent.getElementsByClassName('title')[2].innerHTML='COLOR:';
    } else {
        titleFirst = titleParent.getElementsByClassName('title')[0].style.display = 'none';
        titleFirst = titleParent.getElementsByClassName('title')[1].innerHTML='SELECT A SIZE:';
        titleFirst = titleParent.getElementsByClassName('title')[2].innerHTML='SELECT A COLOR:';
    }
}

var x = window.matchMedia("(min-width: 720px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)