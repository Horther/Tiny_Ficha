

var selectHerança = document.querySelector('select#heranças');
var divInfoHerança = document.querySelector('div#infoHerança');
var vida = document.querySelector('#vida');
var selectTracos = document.querySelector('select#traços')
var pgsTracos = document.querySelector('div#pgsTracos');

selecao=()=>{
    switch(selectHerança.selectedIndex){
        case 0: divInfoHerança.innerHTML = `Selecione uma Herança`;
                vida.value = `VIDA`; 
            break;

        case 1: divInfoHerança.innerHTML = `<img src="../img/png's/Humanos.png" height = 800px>`
                vida.value = `6`;
            break;

        case 2: divInfoHerança.innerHTML = `<img src="../img/png's/Fey.png" height = 800px>`
                vida.value = `6`;
            break;

        case 3: divInfoHerança.innerHTML = `<img src="../img/png's/Anões.png" height = 800px>`
                vida.value = `8`;
            break;

        case 4: divInfoHerança.innerHTML = `<img src="../img/png's/Goblins.png" height = 800px>`
                vida.value = `4`;
            break;

        case 5: divInfoHerança.innerHTML = `<img src="../img/png's/Salimar.png" height = 800px>`
                vida.value = `5`;
            break;

        case 6: divInfoHerança.innerHTML = `<img src="../img/png's/Arvorídeos.png" height = 800px>`
                vida.value = `9`;
            break;

        case 7: divInfoHerança.innerHTML = `<img src="../img/png's/Karhu.png" height = 800px>`
                vida.value = `7`;
            break;

        case 8: divInfoHerança.innerHTML = `<img src="../img/png's/Lagartinos.png" height = 800px>`
                vida.value = `6`;
            break;

    }


}

Traços=()=>{
    switch(selectTracos.selectedIndex){
        case 0: pgsTracos.innerHTML = ``;
            break;

        case 1: pgsTracos.innerHTML = `<img src="../img/traços_png's/Traços_pg1.png" height = 800px>`
            break;

        case 2: pgsTracos.innerHTML = `<img src="../img/traços_png's/Traços_pg2.png" height = 800px>`
            break;

        case 3: pgsTracos.innerHTML = `<img src="../img/traços_png's/Traços_pg3.png" height = 800px>`
            break;
        
        case 4: pgsTracos.innerHTML = `<img src="../img/traços_png's/Traços_pg4.png" height = 800px>`
            break;
    }
}

