let productos=[];
const lista = "https://japceibal.github.io/emercado-api/cats_products/101.json";

function showCategoriesList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.products.length; i++){ 
        let products = array.products[i];
        htmlContentToAppend += `
        <div onclick="setCatID(${products.id})" class="list-group-item list-group-item-action cursor-active">
        <div class="row">
            <div class="col-3">
                <img src="${products.image}" alt="${products.description}" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">${products.name} - USD ${products.cost}</h4>
                    <small class="text-muted">${products.soldCount} artículos vendidos</small>
                </div>
                <p class="mb-1">${products.description}</p>
            </div>
        </div>
        </div>
        `
        document.getElementById("aca").innerHTML = htmlContentToAppend; 
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    getJSONData(lista).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productos = resultObj.data;
            showCategoriesList(productos);
        }
    });
});