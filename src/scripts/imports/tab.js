export function tab_handle(id){
    var i;
    var tabs = document.querySelectorAll('.nav .link li .tab');
    for(i = 0;i < tabs.length ; ++i){
        tabs[i].classList.remove('active');
    }
    tabs[id].classList.add('active');
}