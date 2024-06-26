document.querySelectorAll('.box').forEach(ele => {
    ele.style.background = ele.getAttribute('data-clr');
});
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
const url_area = document.querySelector('.url_area'),
    box1 = document.querySelector('#box_1'),
    box2 = document.querySelector('#box_2');

url_area.addEventListener('mousemove', (e)=>{
    let cord_x = e.clientX
    box1.style.marginLeft = cord_x/4 + 'px';
    box1.style.marginLeft = cord_x/4 + 'px';
    box2.style.marginTop = -cord_x/4 + 'px';
    box1.style.marginTop = cord_x/4+ 'px';
});


gsap.from('.logo', {
    y: -20,
    delay: .5,
    opacity: 0,
    duration: .5,
});
gsap.from('.nav-link', {
    y: -20,
    delay: .1,
    opacity: 0,
    duration: .5,
    stagger: .5
});
gsap.from('.btn-login', {
    y: 10,
    scale: 0,
    delay: .5,
    opacity: 0,
    duration: 1,
});
gsap.from('.main-title', {
    y: 50,
    opacity: 0,
    delay: 0.5,
    duration: 0.5
});
gsap.from('.small-title', {
    opacity: 0,
    duration: .8,
    scale: 0,
    delay: .8
});
let deviceWidth = window.innerWidth
let finalPath = `M ${ deviceWidth*.1 } 100 Q ${deviceWidth * 0.5 } 100 ${deviceWidth * 0.9 } 100`
document.querySelector('svg path').setAttribute('d', finalPath);
document.querySelector('.svg-area').addEventListener('mousemove', (e)=> {
    let path = `M ${ deviceWidth*.1 } 100 Q ${deviceWidth * 0.5 } ${e.offsetY} ${deviceWidth * 0.9 } 100`
    gsap.to("svg path", {
        duration: 0.3,
        attr : { d: path},
        ease: "elastic.out(1, 0.2)",
    });
});
document.querySelector('.svg-area').addEventListener('mouseleave', (e)=> {
    gsap.to("svg path", {
        attr : { d: finalPath},
        ease: "elastic.out(1, 0.2)",
        duration: 1.5,
    });
});
document.querySelectorAll('.use-area i').forEach(ele => {
    ele.style.background = ele.getAttribute('data-clr')
})