const productos = [
    {id:1, foto:'../belenocc16\src\imagenes\pexels-anna-tarazevich-7772002.jpg', categoria:'diet', name:'porotos negros', price: 80},
    {id:2, foto:'../belenocc16\src\imagenes\pexels-bruno-scramgnon-938699.jpg', categoria:'diet', name:'mix semillas', price: 60},
    {id:3, foto:'../belenocc16\src\imagenes\pexels-burst-373882.jpg', categoria:'diet', name:'yogur natural', price: 250},
    {id:4, foto:'../belenocc16\src\imagenes\pexels-karolina-grabowska-4033325.jpg', categoria:'diet', name:'almendras', price: 500},
    {id:5, foto:'../belenocc16\src\imagenes\pexels-marina-leonova-7717463.jpg', categoria:'diet', name:'maní', price: 150},
    {id:6, foto:'../belenocc16\src\imagenes\pexels-marina-leonova-7717474.jpg', categoria:'diet', name:'garbanzos', price: 110},
    {id:7, foto:'../belenocc16\src\imagenes\pexels-polina-tankilevitch-3872436.jpg', categoria:'diet', name:'granola', price: 260},
    {id:8, foto:'../belenocc16\src\imagenes\pexels-polina-tankilevitch-4110541.jpg', categoria:'diet', name:'galletas de avena', price: 200},
];

export const getFetch = new Promise ((resolve)=>{
    setTimeout (()=>{
        resolve(productos)},
        3000)
})