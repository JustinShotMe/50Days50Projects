const previousButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')
const progress = document.querySelector('.progress')

const whichCircleIsBlue = () => {
    let circle = 0
    for (i = 0; i < circles.length; i++) {
        if (circles[i].classList.contains('active')) {
            circle++
        }
    }
    return circle
}

const blueTheNextCircle = (circle) => {
    circles[circle].classList.add('active')
}

const unblueThePriorCircle = (circle) => {
    circles[circle - 1].classList.remove('active')
}

nextButton.addEventListener('click', () => {
    let circle = whichCircleIsBlue();
    switch (circle) {
        case 0:
            // do I even need this??
            previousButton.disabled = true;
            break;
        case 1:
            previousButton.disabled = false;
            progress.style.width = '25%'
            blueTheNextCircle(circle);
            break;
        case 2:
            progress.style.width = '50%'
            blueTheNextCircle(circle);
            break;
        case 3:
            progress.style.width = '75%'
            blueTheNextCircle(circle);
            break;
        case 4:
            progress.style.width = '100%'
            blueTheNextCircle(circle);
            nextButton.disabled = true;
            break;
    }
})

previousButton.addEventListener('click', () => {
    let circle = whichCircleIsBlue();
    switch (circle) {
        case 2:
            progress.style.width = '0%'
            unblueThePriorCircle(circle);
            previousButton.disabled = true;
            break;
        case 3:
            unblueThePriorCircle(circle);
            progress.style.width = '25%'
            break;
        case 4:
            unblueThePriorCircle(circle);
            progress.style.width = '50%'
            break;
        case 5:
            unblueThePriorCircle(circle);
            progress.style.width = '75%'
            nextButton.disabled = false;
            break;
    }
})