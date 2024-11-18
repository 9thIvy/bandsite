const tabletWidth = window.matchMedia( "(min-width: 768px)");
const mobileWidth = window.matchMedia( "(max-width: 767px)");



const toggleVisibility = () =>{
    const listingElements = document.querySelectorAll('.shows__listing');
    const metaElements = document.querySelectorAll('.shows__meta-name');

    if(tabletWidth.matches){
        listingElements.forEach(element => {

            if(!element.querySelector('.invisible')){
                const invisibleElement = document.createElement('div');
                invisibleElement.classList.add('invisible');
                element.insertBefore(invisibleElement, element.firstChild);
            }
            element.style.display = "flex"
            element.style.justifyContent = "space-between";
        });

        metaElements.forEach(element => element.style.display = "none"); 
    }
    
    if(mobileWidth.matches){
        listingElements.forEach(element => {
            element.style.display = "block";
            const invisibleElement = element.querySelector('.invisible');
            if(invisibleElement){
                element.removeChild(invisibleElement);
            }            
        });
        metaElements.forEach(element => element.style.display = "block"); 
    } 

    

}
toggleVisibility();

tabletWidth.addEventListener('change', toggleVisibility);
mobileWidth.addEventListener('change', toggleVisibility);


