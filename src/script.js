const toggleDarkBtn = document.querySelector('#toggleDarkBtn')
const toggleLightBtn = document.querySelector('#toggleLightBtn')
const hamburguerMenuBtn = document.querySelector('#hamburguerMenuBtn')
const hamburguerMenuReturnBtn = document.querySelector('#hamburguerMenuReturnBtn')

toggleDarkBtn.addEventListener('click', darkMode)
toggleLightBtn.addEventListener('click', lightMode)
hamburguerMenuBtn.addEventListener('click', openHmbgMenu)
hamburguerMenuReturnBtn.addEventListener('click', closeHmbgMenu)

function darkMode(){
    document.querySelector('html').classList.add('dark')
    toggleDarkBtn.classList.add('hidden')
    toggleLightBtn.classList.remove('hidden')
}

function lightMode(){
    document.querySelector('html').classList.remove('dark')
    toggleDarkBtn.classList.remove('hidden')
    toggleLightBtn.classList.add('hidden')
}

function openHmbgMenu(){
    document.querySelector('#hamburguerMenu').classList.remove('hidden')
}

function closeHmbgMenu(){
    document.querySelector("#hamburguerMenu").classList.add('hidden')
}