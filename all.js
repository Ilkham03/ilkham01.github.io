const tabsBtn = document.querySelectorAll(".nav__link");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function(item){
    item.addEventListener("click", function(){
        let btnActive  = item;
        let tabId = btnActive.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function(item){
            item.classList.remove('active');
        });

        tabsItems.forEach(function(item){
            item.classList.remove('active');
        });

        btnActive.classList.add('active');
        currentTab.classList.add('active');

    }); 
});




let button = document.querySelector('.button');
button.addEventListener("click", function(){
    if(!sitebar.classList.contains('none')){
        sitebar.classList.remove('is');
        sitebar.classList.add('none');
    }

    else if(sitebar.classList.contains('none')){

        sitebar.classList.remove('none');
        sitebar.classList.add('is');

    }
});

