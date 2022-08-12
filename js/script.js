var arrHeranças = [``,
`<p>Vida: 6 </p> Humanos selecionam um Traço adicional da Lista de Traços`,
`<p>Vida: 6 </p> Fey começam com o Traço de Herança <i>Especialização em Arco.</i><p><b>Especialização em Arco:</b> Você se Especializou em arcos e tem Vantagem ao usá-los. Isso é além da Arma Especializada escolhida na Criação de Aventureiro</p>`,
`<p>Vida: 8</p> Anões começam com o Traçõ de Herança <i>Visão no Escuro.</i><p><b>Visão no Escuro: </b>Você consegue enxergar na escuridão completa. Porém, se for exposta a explosões de luz (magias, bombas de luz de alquimistas), você sofre Desvantagem em seu próximo turno.</p>`,
`<p>Vida: 4</p> Goblins começam com Traço de Herança <i>Agilidade Goblin.</i><p><b>Agilidade Goblin: </b>Você pode fazer um teste de 1d6 sempre que for acertado por um inimigo. Se tiver sucesso no Teste, voce desvia do ataque e não recebe dano. Declarar Desviar como uma ação não oferece nenhum benefício adicional.</p>`,
`<p>Vida: 5</p>Salimar começam com um desses dois Traços de Herança: <i>Cura Pirotérmica ou Cura Criotérmica.</i><p><b>Cura Pirotérmica:</b> Qualquer dano que seria causado a você por qualquer fonte de fogo natural (não-mágico), na verdade te cura o mesmo valor.</p><p><b>Cura Criotérmica:</b> Qualquer dano que seria causado a você por uma fonte de frio extremo natural (não mágico), na verdade te cura o mesmo valor.</p>`,
`<p>Vida: 9</p> Arvorídeos começam com o Traço de Herança <i>Coração Ancestral.</i><p><b>Coração Ancestral:</b> Você não pode ser curado por nenhum outro meio além de sono e luz solar direta. Para cada Ponto de Vida a ser curado, você deve estar diretamente sobe o sol por uma hora (parada ou se movendo) ou usar as regras de sono.</p>`,
`<p>Vida: 7</p> Karhu começam com o Traço de Herança <i>Garras Poderosas.</i> <p><b>Garras Poderosas:</b> Você tem Garras como Arma Especializada. Você não pode usar armas à distância.</p>`,
`<p>Vida: 6</p> Lagartinos começam com o Traço de Herança <i>Sangue Frio.</i><p><b>Sangue Frio:</b> Qualquer tentativa de persuadir, influenciar ou manipular por meio de apelos a emoção ou sentimentos sofre Desvantagem.</p>`,
];

var selectHerança = document.querySelector('select#heranças');
var divInfoHerança = document.querySelector('div#infoHerança');
var vida = document.querySelector('#vida');

selecao=()=>{
    switch(selectHerança.selectedIndex){
        case 0: divInfoHerança.innerHTML = arrHeranças[0];
        break;
        case 1: divInfoHerança.innerHTML = arrHeranças[1] + '<style>#infoHerança { height: 50px; padding: 5px; }</style>';
        vida.value = '6';
        break;
        case 2: divInfoHerança.innerHTML = arrHeranças[2] + '<style>#infoHerança { height: 70px; padding: 5px; }</style>';
        break;
        case 3: divInfoHerança.innerHTML = arrHeranças[3] + 
        '<style>#infoHerança { height: 70px; padding: 5px; }</style>';
        break;
        case 4: divInfoHerança.innerHTML = arrHeranças[4] +
        '<style>#infoHerança { height: 70px; padding: 5px; }</style>';
        break;
        case 5: divInfoHerança.innerHTML = arrHeranças[5] + 
        '<style>#infoHerança { height: 110px; padding: 5px; }</style>';
        break;
        case 6: divInfoHerança.innerHTML = arrHeranças[6] + 
        '<style>#infoHerança { height: 70px; padding: 5px; }</style>';
        break;
        case 7: divInfoHerança.innerHTML = arrHeranças[7] +
        '<style>#infoHerança { height: 55px; padding: 5px; }</style>';
        break;
        case 8: divInfoHerança.innerHTML = arrHeranças[8] +
        '<style>#infoHerança { height: 70px; padding: 5px; }</style>';
        break;
    }
}

