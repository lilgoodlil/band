let HeaderSlider = [
    "./images/header1.webp",
    "./images/header2.webp",
    "./images/header3.webp"
]
const rangeInput = document.querySelectorAll(".range-input input")
const priceInput = document.querySelectorAll(".priceSlider input")
const progress = document.querySelector(".slider .progress")
let priceGap = 100000;
priceInput.forEach(input=>{
    input.addEventListener("input",e=>{
        let minVal = parseInt(priceInput[0].value)
        let maxVal = parseInt(priceInput[1].value)
        if ((maxVal - minVal >= priceGap)&& maxVal<=5000000){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minVal;
                progress.style.left = (minVal / rangeInput[0].max)*100 + "%";
            }else {
                rangeInput[1].value = maxVal;
                progress.style.right = 100 - (maxVal / rangeInput[1].max)*100 + "%";
                
            }
}});
});

rangeInput.forEach(input=>{
    input.addEventListener("input",e=>{
        let minVal = parseInt(rangeInput[0].value)
        let maxVal = parseInt(rangeInput[1].value)
        if (maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
            }else {
                rangeInput[1].value = minVal + priceGap;
                
            }
        }else{
            priceInput[0].value = minVal
            priceInput[1].value = maxVal
            progress.style.left = (minVal / rangeInput[0].max)*100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max)*100 + "%";
        }


    })
})


let index = 0
function nextSlide(next){
    if(next){
        index++
        if (index===3) index = 0
    } else {
        index--
        if (index===-1) index = 2
    }
    document.querySelector(".header-slider__img").src = HeaderSlider[index]
    
}


function dropMenu(event){
    event.preventDefault()
    showMenu()
}

function showMenu(){
    let headerMenu = document.querySelector(".header-menu")
    let headerLogo = document.querySelector(".header-logo")
    let headerDropdownSvg = document.querySelector(".header-dropdown-svg")
    let headerMenuStyle = getComputedStyle(headerMenu)
    if(headerMenuStyle.display === "none"){
        headerLogo.style.display = 'none'
        headerMenu.style.display = 'block'
        headerDropdownSvg.src = "./images/x.svg"

    }else{
        headerMenu.style.display = 'none'
        headerLogo.style.display = 'inline'
        headerDropdownSvg.src = "./images/list.svg"
    }
}

function seeMore(event){
    event.preventDefault()
    console.log(event.target.name);
}


function showAside(){
    let aside = document.querySelector('.aside')
    let asideStyle = getComputedStyle(aside)
    if (asideStyle.display==='block'){
        aside.style.display = 'none'
    } else {
        aside.style.display = 'block'
    }
    console.log(aside.style.display);
}