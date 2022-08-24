

const tabs = document.querySelectorAll('.tabs'),
      cont = document.querySelectorAll('.cont');


tabs.forEach(function(item) {
    item.addEventListener('click', function() {

        tabs.forEach(function(item) {
            item.classList.remove('actv');
        })

        cont.forEach(function(el) {
            el.classList.remove('actv');
            if(item.dataset.tab === el.dataset.cont) {
                el.classList.add('actv');
            }
        })
        item.classList.add('actv');
    })
});
      