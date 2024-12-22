const txt_inputer = document.getElementById("iteams");
const iteam1 = document.querySelector(".iteam1");
const iteam2 = document.querySelector(".iteam2");
const iteam3 = document.querySelector(".iteam3");
const iteam4 = document.querySelector(".iteam4");
const iteam5 = document.querySelector(".iteam5");
const btn = document.getElementById("add");
const i1b = document.querySelector(".i1b");
const i1 = document.querySelector(".i1");
const i2b = document.querySelector(".i2b");
const i2 = document.querySelector(".i2");
const i3b = document.querySelector(".i3b");
const i3 = document.querySelector(".i3");
const i4b = document.querySelector(".i4b");
const i4 = document.querySelector(".i4");
const i5b = document.querySelector(".i5b");
const i5 = document.querySelector(".i5");

if(iteam1.innerHTML === ""){
    iteam1.style.padding = "0";
}


btn.addEventListener('click',()=>{
    const txt  = txt_inputer.value;
    
    if(iteam1.innerHTML==""){
        iteam1.style.padding = "10px";
        iteam1.style.opacity = "1";
        iteam1.innerHTML=txt;
    }
    else if(iteam2.innerHTML == ""){
        iteam2.style.padding = "10px";                                                      
        iteam2.style.opacity = "1";
        iteam2.innerHTML=txt;
    }
    else if(iteam3.innerHTML == ""){
        iteam3.style.padding = "10px";
        iteam3.style.opacity = "1";
        iteam3.innerHTML=txt;
    }
    else if(iteam4.innerHTML == ""){
        iteam4.style.padding = "10px";
        iteam4.style.opacity = "1";
        iteam4.innerHTML=txt;
    }
    else if(iteam5.innerHTML == ""){
        iteam5.style.padding = "10px";
        iteam5.style.opacity = "1";
        iteam5.innerHTML=txt;
    }
    //   iteam1.style.paddingLeft="15px";
    //   iteam1.style.paddingTop="5px";    
    //   iteam1.style.paddingRight="15px";
    //   iteam1.style.paddingBottom="5px";
    txt_inputer.innerHTML=" ";
});
//iteam 1
iteam1.addEventListener('click',()=>{
    i1.style.display="block";
    i1b.style.display="block";
});
i1b.addEventListener('click',()=>{
    iteam1.innerHTML="";
    iteam1.style.padding="0";
    i1.style.display="none";
    i1b.style.display="none";
})
//iteam 2
iteam2.addEventListener('click',()=>{
    i2.style.display="block";
    i2b.style.display="block";
});
i2b.addEventListener('click',()=>{
    iteam2.innerHTML="";
    iteam2.style.padding="0";
    i2.style.display="none";
    i2b.style.display="none";
})
//iteam 3
iteam3.addEventListener('click',()=>{
    i2.style.display="block";
    i2b.style.display="block";
});
i3b.addEventListener('click',()=>{
    alert("hey")
    iteam3.innerHTML="";
    iteam3.style.padding="0";
    i3.style.display="none";
    i3b.style.display="none";
})
//iteam 4
iteam4.addEventListener('click',()=>{
    i4.style.display="block";
    i4b.style.display="block";
});
i4b.addEventListener('click',()=>{
    iteam4.innerHTML="";
    iteam4.style.padding="0";
    i4.style.display="none";
    i4b.style.display="none";
})
//iteam 5
iteam5.addEventListener('click',()=>{
    i5.style.display="block";
    i5b.style.display="block";
});
i5b.addEventListener('click',()=>{
    iteam5.innerHTML="";
    iteam5.style.padding="0";
    i5.style.display="none";
    i5b.style.display="none";
})