const productos = [
    {id:1, foto:'https://res.cloudinary.com/belenocc16/image/upload/v1639170604/samples/pexels-anna-tarazevich-7772002_hidbbf.jpg', categoria:'diet', name:'Porotos negros', price: 80},
    {id:2, foto:'https://res.cloudinary.com/belenocc16/image/upload/v1639170608/samples/pexels-bruno-scramgnon-938699_bvb4le.jpg', categoria:'diet', name:'Mix semillas', price: 60},
    {id:3, foto:'https://res.cloudinary.com/belenocc16/image/upload/v1639172870/samples/450_1000_dk2ntd.jpg', categoria:'diet', name:'Yogur natural', price: 250},
    {id:4, foto:'https://res.cloudinary.com/belenocc16/image/upload/v1639172621/samples/604204064a61a_s0suxp.jpg', categoria:'diet', name:'Almendras', price: 500},
    {id:5, foto:'https://res.cloudinary.com/belenocc16/image/upload/v1639170604/samples/pexels-marina-leonova-7717463_ijhy6t.jpg', categoria:'diet', name:'Maní', price: 150},
    {id:6, foto:'https://res.cloudinary.com/belenocc16/image/upload/v1639170604/samples/pexels-marina-leonova-7717474_wrfms8.jpg', categoria:'diet', name:'Garbanzos', price: 110},
    {id:7, foto:'https://res.cloudinary.com/belenocc16/image/upload/v1639172865/samples/Hofacker-32529956_m_fdad1m.jpg', categoria:'diet', name:'Granola', price: 260},
    {id:8, foto:'https://res.cloudinary.com/belenocc16/image/upload/v1639172859/samples/galletas-de-avena-2-655x368_ch7hq7.jpg', categoria:'veggie', name:'Galletas de avena', price: 200},
];

export const getFetch = new Promise ((resolve)=>{
    setTimeout (()=>{
        resolve(productos)},
        3000)
})