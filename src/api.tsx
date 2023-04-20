import imageheadset from "../src/image/headset-gamer.png"

import imagemouse from "../src/image/mouse-gamer.png"

const headset = {
    title: 'Headset Gamer Ninja Shadow, 3.5mm + USB, PC, Rainbow, Drivers 50mm, Black',
    img: imageheadset,
    cash: '170',
    link: "produto/HeadsetGamerNinjaShadow3Black"
}
const mouse = {
    title: 'Mouse Gamer Redragon Cobra M711 V2 ',
    img: imagemouse,
    cash:'R$152,99',
    
    
    link: "produto/HeadsetGamerNinjaShadow3Black"
}

export const api = new Promise( ( resolve) => {
   
     resolve(headset)

});
