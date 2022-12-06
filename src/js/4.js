document.addEventListener('DOMContentLoaded', () => {
    const tabsBtn    = document.querySelectorAll('.btn-tab');
    const tabsPane   = document.querySelectorAll('.tab-pane');
    const btnWrapper = document.querySelector('#button-wrapper')

    btnWrapper.addEventListener("click", (event) => {
        if ( !event.target.classList.contains('btn-tab') ) {
            return;
        }
            let currentBtn = event.target;
            let tabId = currentBtn.dataset.tab;
            let currentTab = document.querySelector(tabId); 
            console.log(currentTab);
          
            if ( !currentBtn.classList.contains('active') ) {
                tabsBtn.forEach(function(item) {
                    item.classList.remove('active');
                });
    
                tabsPane.forEach(function(item) {
                    item.classList.remove('active');
                });
            }
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
    }); 
});
