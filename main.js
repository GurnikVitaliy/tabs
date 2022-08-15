const tabs = document.querySelectorAll('.tab'),
      contents = document.querySelectorAll('.content');


      tabs.forEach(function(item) {
        item.addEventListener('click', function() {
            tabs.forEach(function(item) {
                item.classList.remove('active');
            })
            contents.forEach(function(el) {
                el.classList.remove('active');
                if(item.dataset.tab === el.dataset.content) {
                    el.classList.add('active');
                }
            })
            item.classList.add('active');
        })
      })