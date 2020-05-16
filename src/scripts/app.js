import '../less/styles.less';
import { tab_handle } from './imports/tab';

window.addEventListener('load',()=>{
    let tabs = document.querySelectorAll('.nav .link li .tab');
    tabs[0].classList.add('active');
    tabs.forEach(tab => {
        tab.addEventListener('click',()=>{
           tab_handle(tab.id); 
        }   
        );
    });

})
