const $ = document

const btnWrapper = $.querySelector('.wrapper__btn')

const inputVlaue = $.querySelector("#value")

const btnEqual = $.querySelector('.btnEqual')

const displayResultText =$.querySelector('.display__result__text')

function addValueInput(event){
    if(event.target.tagName == "BUTTON" || event.target.tagName == "IMG"){
        
            if(event.target.id != "equal"){
                inputVlaue.value += event.target.value
                displayResultText.textContent = inputVlaue.value
            }
            if(event.target.id == "c"){
                inputVlaue.value = ""   
                displayResultText.textContent = inputVlaue.value
                
            }
            if(event.target.id == "ce"){
                let value = inputVlaue.value
                inputVlaue.value = value.slice(0, -1)
                
            }
    
}
}
btnEqual.addEventListener('click', function(){
    let result = eval(inputVlaue.value)
    inputVlaue.value = result
    
})

btnWrapper.addEventListener("click", addValueInput)

