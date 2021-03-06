const total = document.getElementById("total");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const supply = document.getElementById("supply");
const tax = document.getElementById("tax");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const initial = document.getElementById("initial");
const change = document.getElementById("change");
const changeprice = document.getElementById("changeprice");
const differ = document.getElementById("differ");

//부가세계산
btn1.addEventListener("mouseover", function(){
    btn1.style.backgroundColor="rgb(53, 144, 156)";
    btn1.style.color="#fff";
    btn1.style.border="none";
})
btn1.addEventListener("mouseout", function(){
    btn1.style.backgroundColor="rgb(163, 218, 228)";
    btn1.style.color="rgb(53, 144, 156)";
})

btn2.addEventListener("mouseover", function(){
    btn2.style.backgroundColor="rgb(53, 144, 156)";
    btn2.style.color="#fff";
    btn2.style.border="none";
})
btn2.addEventListener("mouseout", function(){
    btn2.style.backgroundColor="rgb(163, 218, 228)";
    btn2.style.color="rgb(53, 144, 156)";
})
btn1. addEventListener("click", function(){
    
    supply.innerText =  `${Math.floor(total.value/11*10)}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    tax.innerText = `${Math.ceil(total.value/11)}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
})

total.addEventListener("keyup", function(e){
    e.preventDefault();
    if(e.key === 'Enter' && total.value != ""){
        supply.innerText =  `${Math.floor(total.value/11*10)}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    tax.innerText = `${Math.ceil(total.value/11)}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }})

btn2.addEventListener("click", function(){
    total.value="";
    supply.innerText="0";
    tax.innerText="0";
})

// 증감률
btn3.addEventListener("mouseover", function(){
    btn3.style.backgroundColor="rgb(53, 144, 156)";
    btn3.style.color="#fff";
    btn3.style.border="none";
})
btn3.addEventListener("mouseout", function(){
    btn3.style.backgroundColor="rgb(163, 218, 228)";
    btn3.style.color="rgb(53, 144, 156)";
})

btn4.addEventListener("mouseover", function(){
    btn4.style.backgroundColor="rgb(53, 144, 156)";
    btn4.style.color="#fff";
    btn4.style.border="none";
})
btn4.addEventListener("mouseout", function(){
    btn4.style.backgroundColor="rgb(163, 218, 228)";
    btn4.style.color="rgb(53, 144, 156)";
})

btn3. addEventListener("click", function(){
    
    changeprice.innerText = `${Math.floor((change.value-initial.value)/initial.value*10000)/100}%`;
    differ.innerText = `${change.value-initial.value}원`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
})
btn4.addEventListener("click", function(){
    initial.value="";
    change.value="";
    changeprice.innerText="0%";
    differ.innerText="0";
})

change.addEventListener("keyup", function(e){
    e.preventDefault();
    if(e.key === 'Enter' && change.value != ""){
        changeprice.innerText = `${Math.floor((change.value-initial.value)/initial.value*10000)/100}%`;
        differ.innerText = `${change.value-initial.value}원`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }})


//input창 마우스 오버 시 테두리
total.addEventListener("mouseover", function(){
    total.style.border="0.2px solid rgb(53, 144, 156)";
})
total.addEventListener("mouseout", function(){
    total.style.border="none";
})
initial.addEventListener("mouseover", function(){
    initial.style.border="0.2px solid rgb(53, 144, 156)";
})
initial.addEventListener("mouseout", function(){
    initial.style.border="none";
})
change.addEventListener("mouseover", function(){
    change.style.border="0.2px solid rgb(53, 144, 156)";
})
change.addEventListener("mouseout", function(){
    change.style.border="none";
})