export function tab_handle(id){
    var i;
    var tabs = document.querySelectorAll('.nav .link li .tab');
    var tabcontent = document.querySelectorAll('#content .tabcontent');
    for(i = 0;i < tabs.length ; ++i){
        tabs[i].classList.remove('active');
        tabcontent[i].style.display = 'none';
    }
    tabcontent[id].style.display = 'flex';
    tabs[id].classList.add('active');
}