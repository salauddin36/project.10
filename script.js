const root =document.querySelector('#root');
const button = document.querySelector('button');


function createItem(item){
    //card
    const card = document.createElement('div');
    card.classList.add('card');

    //photo
    const photo = document.createElement('img');
    photo.src = item.image;

    //title
    const title = document.createElement('h4');
    title.innerText = item.title;

    card.appendChild(photo);
    card.appendChild(title);

    root.appendChild(card);
}


function displayImages(items){
    
    items.forEach(function(item){
        createItem(item);
    })
    
}


button.addEventListener('click',function(){

    fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(items => {
        displayImages(items);
    });

})




