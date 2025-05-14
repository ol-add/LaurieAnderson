function loadSVG() {
    fetch("assets/2.svg")
        .then(response => { return response.text(); })
        .then((svg) => {
            document.getElementById('bg_city').innerHTML = svg;
            document.querySelector('#bg_city svg').setAttribute('preserveAspectRatio', 'xMidYMid slice');
            setAnimationScroll();
        })
}
loadSVG();
function setAnimationScroll() {
    gsap.registerPlugin(ScrollTrigger);
    let runAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#bg_city",
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true
        }
    });
    runAnimation.add([
        gsap.to("#bg_city svg", 2, {
            scale: 8
        })
    ])

}
