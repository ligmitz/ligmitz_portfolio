import '../less/styles.less';
import { tab_handle } from './imports/tab';
import { color_picker , set_color , create_cards} from './imports/color'; 

window.addEventListener('load',()=>{
    let tabs = document.querySelectorAll('.nav .link li .tab');
    tabs.forEach(tab => {
        tab.addEventListener('click',()=>{
           tab_handle(tab.id); 
        }   
        );
    });
    tabs[0].click();

    create_cards();

    document.getElementById('arrow').addEventListener( "click", () => {
        document.getElementById('swipe').classList.toggle('swipein');
    })
})
