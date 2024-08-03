let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let listCard = document.querySelector('.listCard');
let total = document.querySelector('.total');
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

                // Add to cart 

let openShopping =document.querySelector(".shopping");
let closeShopping=document.querySelector(".closeShopping");
let list=document.querySelector(".add-list");
let body=document.querySelector("body");
let totla = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click",()=>{body.classList.add("active")});
closeShopping.addEventListener("click",()=>{body.classList.remove("active")});

let products = [
    {
        id: 1,
        name: 'intro Fabric Designer ',
        image: 'cls1.jpg',
        price: 1999

    },
    {
        id: 2,
        name: 'Advanced Fabric Design ',
        image: 'cls2.jpg',
        price:4999
    },
    {
        id: 3,
        name: ' Security in Fabric Designer',
        image: 'cls3.jpg',
        price: 9000
    },
    {
        id: 4,
        name: ' Applications of Fabric Designer',
        image: 'cls4.jpg',
        price: 6999
    },
    {
        id: 5,
        name: 'Orchestration Fabric Designer',
        image: 'cls5.jpg',
        price: 7999
    },
    {
        id: 6,
        name: '.Certification Preparation',
        image: 'cls6.jpg',
        price: 2000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">BUY PLAN</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


// Form Validation 


let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let popup = document.querySelector('#popup');



let username = id("username"),
    email = id("email"),
    password = id("password"),
    conPass = id("confirmPass"),
    form1 = id("Regform"),
    errormsg = classes("error");

    successIcon = classes("success-icon"),
failureIcon = classes("failure-icon")


form1.addEventListener("submit", (e) => {
    
   e.preventDefault();
   

    inputValidation(username, 0, "username cannot be blank");
    inputValidation(email, 1, "mail cannot be blank");
    inputValidation(password, 2, "password cannot be blank");
    // inputValidation(confirmPassword, 3, "password cannot be blank");
    console.log(username.value!=="","#")
    if(username.value!==""&&email.value!==""&&password.value!=="") {
        // alert();
        popup.classList.add('open-pop');
    }
});


let inputValidation = (id, serial, message) => {

    if (id.value.trim() === "") {
        errormsg[serial].innerHTML = message;
        username.style.border = "2px solid red";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
        
    } else {

        errormsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";

        
        // alert('Registered Successfully');
    
    }
}



// openPop=()=>{
//     
   
// }

closePop=()=>{
    popup.classList.remove('open-pop');
}

