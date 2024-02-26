//showing real prodicts

var products = [
    {
        name:"white chare",
        headline:"so sofesticated",
        price:"15k",
        image:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name:"yellow chare",
        headline:"elegant look",
        price:"10k",
        image:"https://images.unsplash.com/photo-1631700679578-621a258507bb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name:"comfort sofa",
        headline:"feel onfy",
        price:"18k",
        image:"https://images.unsplash.com/photo-1611967164521-abae8fba4668?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

function showTheProduct(){
    var clutter = "";
    products.forEach(function(obj , index){
        clutter += ` <div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"><img src="${obj.image}" class="w-full h-full object-cover"></div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${obj.headline}.</h3>
                    <h4 class="font-semibold mt-2">$${obj.price}</h4>
                </div>
                <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                    <i data-index="${index}" class="add ri-add-line"></i>
                </button>
            </div>
        </div>
    </div>`
      })
      document.querySelector("#productfromjson")
      .innerHTML = clutter;
    }
//showing real popular products
var popproducts = [
    {
        name:"red chair",
        headline:"so elegant",
        price:"12k",
        image:"https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },{
        name:"sofae",
        headline:"so beutiful",
        price:"15k",
        image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },{
        name:"sofae",
        headline:"just looking",
        price:"17k",
        image:"https://images.unsplash.com/photo-1648657458755-74ceaf075f18?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },{
        name:"yellow chair",
        headline:"like a wow",
        price:"11k",
        image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

function showThePopularProduct(){
    var clutter = "";
    popproducts.forEach(function(obj){
        clutter += ` <div class="popular width bg-white p-2 rounded-2xl flex items-start gap-3 flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src=${obj.image}
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${obj.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">$${obj.price}</h4>
        </div>
    </div>`
    })
    document.querySelector("#popularproduct")
    .innerHTML = clutter;
}
//on click of product add buttom add it to the cart
//data-val attribute in html

var cart =[];
function addToCart() {
    document.querySelector("#productfromjson").addEventListener("click", function(details){
        if(details.target.classList.contains('add')){
            cart.push(products[details.target.dataset.index]);
            // console.log(cart);
        }
    })
    
}

function showcart() {
    document.querySelector(".carticon")
    .addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";

        var clutter = "";
        cart.forEach(function (prods,index) {
            clutter += `
            <div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500"><img class="h-10 w-10 rounded-lg" src=${prods.image}/></div>
            <div>
               <h3 class="font-semibold">${prods.name} </h3>
               <h5 class="text-sm font-semibold opacity-80">${prods.price} </h5>


            </div>
            </div>
            `
            
        })
        document.querySelector(".cartexpnd")
        .innerHTML = clutter ;
    })
    
}
showcart();

showTheProduct();
showThePopularProduct();
addToCart() ;
