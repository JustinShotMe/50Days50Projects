const panels = document.querySelectorAll('.panel')
const labels = document.querySelectorAll('h3')

const removeClass = (element, className) => {
    for (i = 0; i < element.length; i++) {
        element[i].classList.remove(className)
    }
}



panels.forEach(function (item) {
    item.addEventListener('click', function () {
        removeClass(panels, 'active');
        removeClass(labels, 'active');

        item.classList.add('active');
        item.firstElementChild.classList.add('active')
    });
});