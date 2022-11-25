const sections = document.querySelectorAll('.section');
const sctBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');
const flagsElement = document.getElementById('flags');

const changeLanguage = async language=>{
    const requestJson = await fetch(`./language/${language}.json`)
    const texts = await requestJson.json()

    console.log(texts)
}

function PageTransitions() {

    // Button click active class
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }

    // Sections active class
    addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove selected from the other btns
            sctBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);

            element.classList.add('active')
        }
    })
}

// Toogle Theme
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
})

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})


PageTransitions();