const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){
        navigation.classList.add('anim-nav');
    } else {
        navigation.classList.remove('anim-nav');
    }

})
const search = document.getElementById('searchbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){
        search.classList.add('anim-searchbar');
    } else {
        search.classList.remove('anim-searchbar');
    }

})

// SearchBar
function search_modal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('search');
    let y = document.getElementsByClassName('banner')
      
    for (i = 0; i < x.length; i++) { 
        if (!y[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="flex";                 
        }
    }
}

function bg_Acc(shouldPlay) {
    const e = document.getElementById('bg-Acc');
    if (shouldPlay) {
      e.src = '../asset/src/Accordion_Menu/screen/Accordion_Menu2.gif';
    } else {
      e.src = '../asset/src/Accordion_Menu/screen/panel_default.png';
    }
  }
