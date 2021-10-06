const dataProducts = [
    {
        id:1,
        title:"CAT CHOW ESTERILIZADOS",
        description:"Elaborado con una selección de ingredientes naturales sin colorantes ni sabores artificiales y mejorado con la inclusión de un prebiótico natural. Con PURINA® CAT CHOW®, construyes un escudo de protección alrededor de tu gato todos los días, mientras él disfruta de su delicioso sabor.",
        techInfo:"Harinas proteicas (pollo, res y/o cerdo), maíz*, gluten de maíz, soya*, fibra de soya*, grasa animal (res y/o cerdo) como fuente de omega 6, trigo*, harina de pescado (atún y/o salmón) y harina de alga (Schizochytrium sp.) como fuente de ácidos grasos omega 3, hidrolizado de pollo y/o cerdo, pirofosfato tetrasódico (TSPP)."
    },
    {
        id:2,
        title:"DEFENSE HYDRO® GATITOS CARNE",
        description:"El único alimento húmedo enfocado en proteger la salud de tu gatito.Contribuye a un tracto urinario saludable.",
        techInfo:"Agua suficiente para proceso, carne de pollo, gluten de trigo y/o gluten de maíz y/o harina de soya, hígado y/o corazón de pollo, carne de res, almidón de maíz, ortofosfato y/o carbonato de calcio, hígado y/o vísceras de cerdo, saborizante cárnico artificial y natural, sal**, colorantes (caramelo, óxido de hierro rojo), vitaminas (A, D-3, E, K-3, Complejo B, cloruro de colina)."
    },
    {
        id:3,
        title:"HOGAREÑOS CARNE",
        description:"Una buena nutrición es fundamental para proteger la salud de los gatos.  sin colorantes ni sabores artificiales.",
        techInfo:"Maíz*, harinas proteicas (pollo, res y/o cerdo), trigo*, soya*, gluten de maíz, fibra de soya*, grasa animal (res y/o cerdo) como fuente de omega 6, harina de pescado (atún y/o salmón) y harina de alga (Schizochytrium sp.) como fuente de ácidos grasos omega 3, arroz*, hidrolizado de pollo y/o cerdo, pirofosfato tetrasódico (TSPP), ácido fosfórico y/o bisulfato de sodio, cloruro de sodio."
    }
]




const getInfo = ()=>{
    for (const product of dataProducts){
let card = document.createElement('div');
card.classList.add('card');
let title = document.createElement('h3'); 
let description = document.createElement('h5'); 
let info = document.createElement('p');
title.textContent = `Nombre del Producto: ${product.title}`;
description.textContent = `Descripción: ${product.description}`;
info.textContent = `Información técnica: ${product.techInfo}`;
document.body.appendChild(card);
card.appendChild(title);
card.appendChild(description);
card.appendChild(info);


 }}   
 let btnInfo = document.getElementById('btn_info');
 btnInfo.addEventListener('click', getInfo);
