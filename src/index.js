import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
 document.querySelector("h1").addEventListener("click",function(e){
 alert("Bana tıkladın!")
 });
 document.querySelector("h1").addEventListener("click",function(e){
    alert("Bana tıkladın!")
    });
    window.addEventListener("load",(event) => {
       
       setTimeout((event) => { document.querySelector("body").setAttribute("style","background:red");
           
       }, 2000);
   
    });
    let images = document.querySelectorAll("img");
    const colors = ["white","blue","yellow","green","red"]
     images.forEach(image => {
       image.addEventListener("mouseover",(event)=>{
           event.target.classList.toggle("gri")
       })
       image.addEventListener("dblclick" , (event)=>{
           let index = Math.floor(Math.random()*5)
           document.querySelector("body").style.
           background=colors[index];
       })
     });
     let body = document.querySelector("body");
     window.addEventListener("resize",()=> {
       
       if(window.innerWidth < 200){
           body.style.background="red";
       }else if (window.innerWidth < 400){
           body.style.background="blue";
       }else if (window.innerWidth < 800){
           body.style.background="yellow";
       }else if (window.innerWidth < 1000){
               body.style.background="green";
       }else{
        body.style.background="unset";
     }
     });
   let input = document.querySelector("input");
   input.addEventListener("focus",()=>{
    input.style.border="2px solid red";
   });
   input.addEventListener("keydown",(event)=>{
    if(event.code == "Digit3"){
        body.style.background="red"
    }else if(event.code == "Digit2"){
        body.style.background="green"
    }
   })


// Kodlar buraya gelecek!