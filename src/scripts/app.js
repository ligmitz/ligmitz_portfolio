import '../less/styles.less';
import { tab_handle } from './imports/tab';

window.addEventListener('load',()=>{
    let tabs = document.querySelectorAll('.nav .link li .tab');
    tabs.forEach(tab => {
        tab.addEventListener('click',()=>{
           tab_handle(tab.id); 
        }   
        );
    });
    tabs[0].click();

})
