const puter = () => {
    // figure out what device form factor this is
    // if browser is too old for matchMedia, use mobile layout
    let isMobile = !!(window.matchMedia && window.matchMedia("(max-width: 850px)").matches);
    window.formFactor = isMobile ? 'mobile' : 'desktop';
    let contentLayer = document.querySelector('.content-layer-'+formFactor);
    let loadingLayer = document.querySelector('.content-layer-loading');
    console.log(contentLayer, formFactor);

    let assets = {
        desktop: [
            'img/pitch-horizontal.jpg'
        ],
        mobile: [
            'img/pitch-vertical-0.jpg',
            'img/pitch-vertical-1.jpg',
            'img/pitch-vertical-2.jpg',
            'img/pitch-vertical-3.jpg',
            'img/pitch-vertical-4.jpg',
            'img/pitch-vertical-5.jpg',
            'img/pitch-vertical-6.jpg',
        ]
    };
    
    let promises = assets[formFactor].map(src => { 
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.src = src;
            img.onload = () => {
                console.log('loaded');
                resolve(img);
            }
        });
    });

    Promise.all(promises)
        .then(imgEls => {
            imgEls.forEach(imgEl => {
                contentLayer.querySelector('.before').appendChild(imgEl);
            });
            loadingLayer.classList.add('hidden');
            contentLayer.classList.remove('hidden');
        })

    if(formFactor == 'desktop'){
        document.documentElement.addEventListener('wheel', event => {
            event.preventDefault();
            if(event.deltaX){
                document.documentElement.scrollBy(event.deltaX, 0);
            } else if(event.deltaY){
                document.documentElement.scrollBy(event.deltaY, 0);
            }
        })

        document.documentElement.addEventListener('keyup', event => {
            if(event.key == " " || event.code == "Space" || event.keyCode == 32){
                event.preventDefault();
                document.documentElement.scrollBy({
                    left: 750,
                    behavior: 'smooth'
                });
            }
        })
    }
}

const pimpek = () => {
    let isMobile = !!(window.matchMedia && window.matchMedia("(max-width: 850px)").matches);
    let newFormFactor = isMobile ? 'mobile' : 'desktop';
    if(newFormFactor != window.formFactor){
        window.location.reload();
    }
}

window.addEventListener('DOMContentLoaded', puter);
window.addEventListener('resize', pimpek);