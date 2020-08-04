// GET DOM ACCESS TO THEME BUTTONS
let DOMStrings = {
    themeBtn: document.querySelectorAll('.menu_item'),
    themeLink: document.querySelector('link')
}

//CHANGE THEME FUNCTIONALITY
const changeTheme = (e) => {
    if (e.target.innerHTML === 'Theme 1') {
        DOMStrings.themeLink.setAttribute('href', './styles/modules/theme1.css');
    } else if (e.target.innerHTML === 'Theme 2') {
        DOMStrings.themeLink.setAttribute('href', './styles/modules/theme2.css');
    }
    return DOMStrings;
}

// LOOP THROUGH BUTTONS AND CALL CHANGETHEME() WHEN EACH IS CLICKED

for(let i = 0; i < DOMStrings.themeBtn.length; i++) {
    DOMStrings.themeBtn[i].addEventListener('click', changeTheme);
}
