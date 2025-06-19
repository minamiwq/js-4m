const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    }else {
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"
    }
}

/// tab slider

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

let index = 0

const hideTabContent = () => {
    tabContentBlocks.forEach(block => {
        block.style.display = 'none'
    })
    tabContentItems.forEach(block => {
        block.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (i = 0) => {
    let index = i
    if(tabContentItems.length <= i && tabContentItems.length <= i) index = 0
    tabContentBlocks[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item,index) => {
            if(event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}
setInterval(() => {
    index++
    if(index >= tabContentItems.length) {
        index = 0
    }
    hideTabContent()
    showTabContent(index)
},3000)

/// Converter

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

const converter = (element, targetEl1, targetEl2) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '../data/converter.json')
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.response)
            if(element.id === 'som'){
                targetEl1.value = (element.value / data.usd).toFixed(2)
                targetEl2.value = (element.value / data.eur).toFixed(2)
            }
            if(element.id === 'usd'){
                targetEl1.value = (element.value * data.usd).toFixed(2)
                targetEl2.value = (element.value * data.usd / data.eur).toFixed(2)
            }
            if(element.id === 'eur'){
                targetEl1.value = (element.value * data.eur).toFixed(2)
                targetEl2.value = (element.value * data.eur / data.usd).toFixed(2)
            }

            if(element.value === ''){
                targetEl1.value = ''
                targetEl2.value = ''
            }
        }
    }
}
converter(somInput, usdInput, eurInput)
converter(usdInput, somInput, eurInput)
converter(eurInput, somInput, usdInput)
