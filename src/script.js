const toggleDarkBtn = document.querySelector('#toggleDarkBtn')
const toggleLightBtn = document.querySelector('#toggleLightBtn')

toggleDarkBtn.addEventListener('click', darkMode)
toggleLightBtn.addEventListener('click', lightMode)

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