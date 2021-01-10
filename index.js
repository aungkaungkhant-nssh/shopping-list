let input=document.querySelector(".input");
let shoppingTag=document.querySelector(".shoppingContiner");

let productId=1;
input.addEventListener("change",()=>{
    let inputValue=event.target.value;
    let spanTag=document.createElement("span");
    let parentDiv=document.createElement("div");
    let parentContainer=document.createElement("div");
    let trashIcon=document.createElement("i");
    parentDiv.classList.add("productName");
    parentDiv.addEventListener("click",()=>{
        let pur=spanTag.classList.contains("purcheased");
        if(pur){
            spanTag.classList.remove("purcheased");
        }else{
            spanTag.classList.add("purcheased");
        }
 
    });
    trashIcon.addEventListener("click",()=>{
        parentContainer.remove();
    })
    let product=productId.toString()+". "+inputValue;
    trashIcon.classList.add("far","fa-trash-alt");
    parentContainer.classList.add("parent");
    spanTag.append(product);
    parentDiv.append(spanTag);
    parentContainer.append(parentDiv,trashIcon);
    shoppingTag.append(parentContainer);
   
    input.value="";
    productId+=1;
})
// {/* <i class="far fa-trash-alt"></i> */}