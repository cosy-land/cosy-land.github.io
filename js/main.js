window.addEventListener('DOMContentLoaded', () => {
    let contentIfBig = document.querySelector('.content-if-big')
    contentIfBig.addEventListener('wheel', event => {
        event.preventDefault();
        contentIfBig.scrollBy(event.deltaY, 0);
    })
});