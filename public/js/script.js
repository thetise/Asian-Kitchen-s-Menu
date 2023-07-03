const FOODS = [
    {id: 1, title: "Tteokbokki", category: "Korea", price: 10.99, img: "/public/images/1.jpg", desc: "Spicy rice cakes, serving with fish cake."},
    {id: 2, title: "Bibimbap", category: "Korea", price: 8.99, img: "/public/images/2.jpg", desc: "Boiling vegetables, serving with special hot sauce."},
    {id: 3, title: "Jajangmyeon", category: "Korea", price: 15.99, img: "/public/images/3.jpg", desc: "Black bean sauce noodle, serving with green onion."},
    {id: 4, title: "Chicken Ramen", category: "Japan", price: 7.99, img: "/public/images/4.jpg", desc: "Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg."},
    {id: 5, title: "Onigiri", category: "Japan", price: 9.99, img: "/public/images/5.jpg", desc: "Rice Sandwich, serving with soy sauce."},
    {id: 6, title: "Doroyaki", category: "Japan", price: 3.99, img: "/public/images/6.jpg", desc: "Red bean paste dessert, serving with honey."},
    {id: 7, title: "Dan Dan Mian", category: "China", price: 5.99, img: "/public/images/7.jpg", desc: "Dan dan noodle, serving with green onion."},
    {id: 8, title: "Yangzhou Fried Rice", category: "China", price: 12.99, img: "/public/images/8.jpg", desc: "Yangzhou style fried rice, serving with bean and pickles"},
    {id: 9, title: "Ma Yi Shang Shu", category: "China", price: 12.99, img: "/public/images/9.jpg", desc: "Hot pepper sauce noodle, serving with soy bean and onion."},    
]

const foodsListDOM = document.querySelector('#foods')

const KOREAN_FOOD  = FOODS.filter(food => food.category === "Korea") 
const JAPAN_FOOD   = FOODS.filter(food => food.category === "Japan") 
const CHİNESE_FOOD = FOODS.filter(food => food.category === "China") 


function changeMenu(item) {
    //Buttona tıklandığında daha önceki içeriği siliyoruz
    if (foodsListDOM.firstChild) {
      while (foodsListDOM.firstChild) {
        foodsListDOM.removeChild(foodsListDOM.firstChild);
      }
    }
}

let All = document.querySelector("#All")
All.addEventListener("click", changeMenu)
All.addEventListener("click", domClick)
function domClick(){
    console.log("All'a tiklandi.")
    for(let i = 0; i < FOODS.length; i++){
        const liDOM = document.createElement("li")
        liDOM.innerHTML =   `<div class="w-full h-52 flex">
                                <!-- Food Photo Area -->
                                <div class="w-2/5">
                                    <img src="${FOODS[i].img}" alt="${FOODS[i].title}" class="w-52 h-52 rounded-lg border-8 border-black">
                                </div>
                                <!-- Food Description Area -->
                                <div class="text-orange-400 w-3/5 space-y-2">
                                    <div class="flex justify-between">
                                        <p>${FOODS[i].title}</p>
                                        <p>${FOODS[i].price}</p>
                                     </div>
                                    <div>
                                        <hr class="h-0.5 bg-gray-500">
                                    </div>
                                    <div class="text-black">
                                    <p>${FOODS[i].desc}</p>
                                    </div>
                                </div>
                            </div>`
                                                
        foodsListDOM.appendChild(liDOM)
    }
}


let Korea = document.querySelector("#Korea")
Korea.addEventListener("click", changeMenu)
Korea.addEventListener("click", koreaClick)
function koreaClick(){
    console.log("Korea tiklandi.")
    for(let i = 0; i < KOREAN_FOOD.length; i++){
        const liDOM = document.createElement("li")
        liDOM.innerHTML =   `<div class="w-full h-52 flex">
                                <!-- Food Photo Area -->
                                <div class="w-2/5">
                                    <img src="${KOREAN_FOOD[i].img}" alt="${KOREAN_FOOD[i].title}" class="w-52 h-52 rounded-lg border-8 border-black">
                                </div>
                                <!-- Food Description Area -->
                                <div class="text-orange-400 w-3/5 space-y-2">
                                    <div class="flex justify-between">
                                        <p>${KOREAN_FOOD[i].title}</p>
                                        <p>${KOREAN_FOOD[i].price}</p>
                                     </div>
                                    <div>
                                        <hr class="h-0.5 bg-gray-500">
                                    </div>
                                    <div class="text-black">
                                    <p>${KOREAN_FOOD[i].desc}</p>
                                    </div>
                                </div>
                            </div>`
                                                
        foodsListDOM.appendChild(liDOM)
    }
}


let Japan = document.querySelector("#Japan")
Japan.addEventListener("click", changeMenu)
Japan.addEventListener("click", japanClick)
function japanClick(){
    console.log("Japan tiklandi.")
    for(let i = 0; i < JAPAN_FOOD.length; i++){
        const liDOM = document.createElement("li")
        liDOM.innerHTML =   `<div class="w-full h-52 flex">
                                <!-- Food Photo Area -->
                                <div class="w-2/5">
                                    <img src="${JAPAN_FOOD[i].img}" alt="${JAPAN_FOOD[i].title}" class="w-52 h-52 rounded-lg border-8 border-black">
                                </div>
                                <!-- Food Description Area -->
                                <div class="text-orange-400 w-3/5 space-y-2">
                                    <div class="flex justify-between">
                                        <p>${JAPAN_FOOD[i].title}</p>
                                        <p>${JAPAN_FOOD[i].price}</p>
                                     </div>
                                    <div>
                                        <hr class="h-0.5 bg-gray-500">
                                    </div>
                                    <div class="text-black">
                                    <p>${JAPAN_FOOD[i].desc}</p>
                                    </div>
                                </div>
                            </div>`
                                                
        foodsListDOM.appendChild(liDOM)
    }
}


let China = document.querySelector("#China")
China.addEventListener("click", changeMenu)
China.addEventListener("click", chinaClick)
function chinaClick(){
    console.log("China tiklandi.")
    for(let i = 0; i < CHİNESE_FOOD.length; i++){
        const liDOM = document.createElement("li")
        liDOM.innerHTML =   `<div class="w-full h-52 flex">
                                <!-- Food Photo Area -->
                                <div class="w-2/5">
                                    <img src="${CHİNESE_FOOD[i].img}" alt="${CHİNESE_FOOD[i].title}" class="w-52 h-52 rounded-lg border-8 border-black">
                                </div>
                                <!-- Food Description Area -->
                                <div class="text-orange-400 w-3/5 space-y-2">
                                    <div class="flex justify-between">
                                        <p>${CHİNESE_FOOD[i].title}</p>
                                        <p>${CHİNESE_FOOD[i].price}</p>
                                     </div>
                                    <div>
                                        <hr class="h-0.5 bg-gray-500">
                                    </div>
                                    <div class="text-black">
                                    <p>${CHİNESE_FOOD[i].desc}</p>
                                    </div>
                                </div>
                            </div>`
                                                
        foodsListDOM.appendChild(liDOM)
    }
}

// to show all dishes when the page is first loaded.
window.addEventListener("DOMContentLoaded", () => domClick("All"));