const descInput = document.querySelector('#description-input')
const dateInput = document.querySelector('#date-input')
const valueInput = document.querySelector('#value-input')
const submitButton = document.querySelector('#submit-button')
const totalField = document.querySelector('.tots')

const transArray = []


// console.log(descInput, dateInput, submitButton)



submitButton.addEventListener('click',(e)=>{
    let descriptionAdd = descInput.value
    let dateAdd = dateInput.value  
    let valueAdd = valueInput.value 
    e.preventDefault()
    console.log(descriptionAdd, dateAdd)

    const newTrans = document.querySelector('.transactions')
    const newLine = document.createElement('tr')
    newTrans.appendChild(newLine)
    
    const addtrans = document.createElement('td')
    newLine.appendChild(addtrans)
    addtrans.innerHTML = descriptionAdd
    
    const addDate = document.createElement('td')
    newLine.appendChild(addDate)
    addDate.innerHTML = dateAdd

    const addValue = document.createElement('td')
    newLine.appendChild(addValue)
    addValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(valueAdd)

    const delBtn = document.createElement('button')
    
    
    delBtn.classList.add('del') 
    newLine.appendChild(delBtn)
    

    transArray.push({description: descriptionAdd, date: dateAdd, value: Number(valueAdd)})
    console.log(transArray) 

    const total = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(transArray.reduce((sum, li)=>sum + li.value, 0)) 
    
    totalField.innerHTML = total

})
    
