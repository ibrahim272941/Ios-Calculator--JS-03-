const numberBtn = document.querySelectorAll('[number]');
const operationBtn = document.querySelectorAll('[operation]');
const equalsBtn =document.querySelector('[equals]') 
const delBtn = document.querySelector('[delete]');
const allClearBtn = document.querySelector('[all-clear]');
const previousOperandText = document.querySelector('.previous-operand');
const currentOperandText = document.querySelector('.current-operand');
const minusBtn = document.querySelector('[minus]')

function addNumber(number){
    if(number==='.'&&currentOperandText.innerText.includes('.')) return
    if(number==='-'&&currentOperandText.innerText.includes('-')) return
    if(currentOperandText.innerText.length>10) return
    
    currentOperandText.innerText+=number
}
function allClear(){
    currentOperandText.innerText=''
    previousOperandText.innerText=''
}
function selectOperand(button){
    if(currentOperandText.innerText==='') return
    if(previousOperandText.innerText!==''){
        
      
        
        
    }
    previousOperandText.innerText=currentOperandText.innerText+button
    currentOperandText.innerText=''
    
}

function operation(){
    let compute
    let prev = parseFloat(previousOperandText.innerText.slice(0,-1)) 
    let current =parseFloat(currentOperandText.innerText)
    if(previousOperandText.innerText.includes('+')){
        compute=prev+ current
        previousOperandText.innerText=''
        currentOperandText.innerText=compute
    }
    if(previousOperandText.innerText.includes('-')){
        compute=prev- current
        previousOperandText.innerText=''
        currentOperandText.innerText=compute
    }
    if(previousOperandText.innerText.includes('x')){
        compute=prev* current
        previousOperandText.innerText=''
        currentOperandText.innerText=compute
    }
    if(previousOperandText.innerText.includes('÷')){
        compute=prev/ current
        previousOperandText.innerText=''
        currentOperandText.innerText=compute
    }
    
}
function oneDell(){
    currentOperandText.innerText=currentOperandText.innerText.slice(0,-1)
}



numberBtn.forEach(button =>{
  button.addEventListener('click',()=>{
    addNumber(button.innerText)
  })
})
allClearBtn.addEventListener('click',()=>{
   allClear()
})
operationBtn.forEach(button =>{
    button.addEventListener('click',()=>{
        selectOperand(button.innerText)
        
    })
})
equalsBtn.addEventListener('click',()=>{
    operation()
})
delBtn.addEventListener('click',()=>{
    oneDell()
})



















































// allClear.addEventListener('click',function(){
// previousOperand.textContent=''
// currentOperand.textContent=''
// })

// numberBtn.forEach(button =>{
//     button.addEventListener('click',function(){
//         currentOperand.append(button.innerText)
//     })
// });
// console.log(previousOperand.textContent)
// operation.forEach(operand =>{
//     operand.addEventListener('click',function(){
        
//         previousOperand.append(currentOperand.innerText,operand.innerText)
//         currentOperand.textContent=''
        
//         switch(operand){
//             case '+':
//         }
       
//     })
// })
// function equals(summary){

//     equalsBtn.addEventListener('click',function(){
//         currentOperand.textContent=summary
//         previousOperand.textContent=''
//     })
// }