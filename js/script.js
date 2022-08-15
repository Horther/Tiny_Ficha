

var selectHerança = document.querySelector('select#heranças');
var divInfoHerança = document.querySelector('div#infoHerança');
var vida = document.querySelector('#vida');

selecao=()=>{
    switch(selectHerança.selectedIndex){
        case 0: divInfoHerança.innerHTML = `Selecione uma Herança`;
                vida.value = `VIDA`; 
            break;

        case 1: divInfoHerança.innerHTML = `<img src="" alt="">`
            break;

        case 2: divInfoHerança.innerHTML = `<img src="" alt="">`
            break;

        case 3: divInfoHerança.innerHTML = `<img src="" alt="">`
            break;

        case 4: divInfoHerança.innerHTML = `<img src="" alt="">`
            break;

        case 5: divInfoHerança.innerHTML = `<img src="" alt="">`
            break;

        case 6: divInfoHerança.innerHTML = `<img src="" alt="">`
            break;

        case 7: divInfoHerança.innerHTML = `<img src="" alt="">`
            break;

        case 8: divInfoHerança.innerHTML = `<img src="" alt="">`
            break;

    }

}

