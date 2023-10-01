const card = document.querySelectorAll('.cart');
const out = document.querySelector('.total b');

for(let i = 0; i < card.length; i++){
    card[i].addEventListener('click', ()=>{
        card[i].classList.toggle('cart-active');
        out.innerHTML = price() + '$';
        
    })
}


function price() {
    let sum = 0;
    for(let j = 0; j < card.length; j++) {
        let attr = card[j].getAttribute('data-price');
        if(card[j].classList.contains('cart-active')){
            sum += +attr;
        }
    }
    
    return sum ;
}