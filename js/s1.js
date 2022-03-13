mapboxgl.accessToken = "pk.eyJ1IjoiaGplaW9ueW5nIiwiYSI6ImNremt3NnFlaTRyNW4yeHByaHI5cTlqaGEifQ.XJY81iNB9TtDsdC1es__UA";

const map = new mapboxgl.Map({
    container: 'background-map', // id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [126.97, 37.55], // starting position [lng, lat]
    zoom: 15, // starting zoom
    bearing: 27,
    pitch: 45
});


const chapters = {
    'seoul': {
        bearing: 27,
        center: [126.97, 37.55],
        zoom: 15.5,
        pitch: 20
    },
    'wonju': {
        duration: 6000,
        center: [127.94431528427722, 37.35723101213057],
        bearing: 150,
        zoom: 15,
        pitch: 0
    },
    'busan': {
        bearing: 90,
        center: [129.04084576886882, 35.115982487399975],
        zoom: 13,
        speed: 0.6,
        pitch: 40
    },
    'daejeon': {
        bearing: 90,
        center: [127.43262312954555, 36.332075330117135],
        zoom: 12.3
    },
    'kwangju': {
        bearing: 45,
        center: [126.90872207071777, 35.165343609570996],
        zoom: 15.3,
        pitch: 20,
        speed: 0.5
    },
    'kangneng': {
        bearing: 180,
        center: [128.90021956211964, 37.76420555847541],
        zoom: 12.3
    },
    'incheon': {
        bearing: 90,
        center: [126.61768551547405, 37.4764764403891],
        zoom: 17.3,
        pitch: 40
    },
    'daegu': {
        bearing: 90,
        center: [128.5964009468844, 35.875941129944884],
        zoom: 14.3,
        pitch: 20
    }
};


let activeChapterName = 'seoul';

function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;
        
    map.flyTo(chapters[chapterName]);
        
    document.getElementById(chapterName).classList.add('active');
    document.getElementById(activeChapterName).classList.remove('active');
        
    activeChapterName = chapterName;
}
     
function isElementOnScreen(id) {
    const element = document.getElementById(id);
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
     
    // On every scroll event, check which element is on screen
window.onscroll = () => {
    for (const chapterName in chapters) {
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};