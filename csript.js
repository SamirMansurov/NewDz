const container = document.querySelector('.container');
const five = document.querySelector('.five')
const full = document.querySelector('.full')

reload(arr)

five.onclick = () => {
    reload(arr.slice(0, 5))
}

full.onclick = () => {
    reload(arr)
}





// Корзина 
const open_btn = document.querySelector('.open_btn')
const slider = document.querySelector('#sidebar')
const clouseBtn = document.querySelector('.clouse')

open_btn.onclick = () => {
    slider.classList.toggle('open')
}

clouseBtn.onclick = () => {
    slider.style.display = 'none'
}

// Удаление
const rem = document.querySelector('.rem')

rem.onclick = () => {
    const item_container = document.querySelector('.item-container')
    if (item_container) {
        item_container.remove()
    }
}

