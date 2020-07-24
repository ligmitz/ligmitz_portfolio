export function color_picker(){
    var colors = ['#b92e34','#1b03a3','#39ff14']
    return colors[Math.floor(Math.random() * (2) + 0.5)] 
}

export function set_color(){
    var cards = document.querySelectorAll('#content .tabcontent .cards .card');
    var hr = document.querySelector('#content .tabcontent .cards .card hr');
    for(var i = 0; i < cards.length ; i++){
        var item_color = color_picker();
        cards[i].style.color = item_color;
        cards[i].querySelector('.header .title a').style.color = item_color;
    }
}