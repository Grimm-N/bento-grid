document.addEventListener('DOMContentLoaded', function () {
    let activeIndex = 0;
    const items = document.querySelectorAll('.bento__item');
    let autoSwitch;

    function setActiveItem(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    function startAutoSwitch() {
        autoSwitch = setInterval(() => {
            activeIndex = (activeIndex + 1) % items.length;
            setActiveItem(activeIndex);
        }, 3000); 
    }

    function stopAutoSwitch() {
        clearInterval(autoSwitch);
    }

    startAutoSwitch();

    items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            stopAutoSwitch();
            setActiveItem(index); 
        });

        item.addEventListener('mouseleave', () => {
            startAutoSwitch(); 
        });
    });
});
