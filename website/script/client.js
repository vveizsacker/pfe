imageinput = document.getElementById("image-input");
imageupload = document.getElementById("image-upload");


imageinput.onchange = async event =>{

    const files = imageinput.files;
    file = files[0];                   
    if(files) imageupload.src = URL.createObjectURL(files[0]);    
}

bgcolor = document.getElementById("bgcolor");

/*
submit.addEventListener("click", event =>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST","admin/nice");
    data = "poggers";
    xhr.send(data);


    fetch("/admin/users").then(data => data.json()).then(data =>{
        console.log(data)
        data.products.forEach(element =>{
            alert(element);
        })
    });

});
*/

//add product
//manage orders
//manage users

/*
const manage_products = document.getElementById("productsbtn");

manage_products.addEventListener("click",async ()=>{
    
    products = await fetch("admin/users").then(data => data.json()).then(data => data);

});

*/

