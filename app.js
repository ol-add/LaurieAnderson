function loadSVG() {
    fetch("assets/mainstickertext1.svg")
        .then(response => response.text())
        .then((svg) => {
            document.getElementById('bg_city').innerHTML = svg;
            document.querySelector('#bg_city svg').setAttribute('preserveAspectRatio', 'xMidYMid slice');
            setAnimationScroll();
        });
}
loadSVG();

function setAnimationScroll() {
    gsap.registerPlugin(ScrollTrigger);
    const audio0 = new Audio('assets/part0.mp3');
    const audio1 = new Audio('assets/part01.mp3');
    const audio2 = new Audio('assets/part2.mp3');
    const audio3 = new Audio('assets/part3.mp3');
    const audio4 = new Audio('assets/part4.mp3');
    const audio5 = new Audio('assets/part5.mp3');

    function playAudio(audio) {
        [audio1, audio2, audio3].forEach(a => {
            if (a !== audio) {
                a.pause();
                a.currentTime = 0;
            }
        });

        audio.currentTime = 0;
        audio.play();
        console.log("Playing audio:", audio.src);
    }

    let scrubAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#bg_city",
            start: "top top",
            end: "+=10000",
            scrub: true,
            pin: true
        }
    });
    let unscrubAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#bg_city",
            start: "top top",
            end: "+=10000",
            scrub: false,
            pin: true
        }
    });

    scrubAnimation.add([
        gsap.to("#bg_city svg", 10, {
            scale: 5,
            transformOrigin: "50% 50%",
            onStart: () => playAudio(audio0)
        }),
        gsap.to("#sticker0", {
            onStart: () => document.querySelector("#sticker0").classList.add("shallow")
        }),
        gsap.to("#sticker1", {
            onStart: () => document.querySelector("#sticker1").classList.add("shallow")
        }),
        gsap.to("#sticker2", {
            onStart: () => document.querySelector("#sticker2").classList.add("shallow")
        }),
        gsap.to("#sticker3", {
            onStart: () => document.querySelector("#sticker3").classList.add("shallow")
        })
    ])
    scrubAnimation.add([
            gsap.to("#stern", 20, {
                scale: 0.5,
                transformOrigin: "50% 50%",
            }),
        gsap.to("#bg_city svg", 30, {
            scale: 10,
            transformOrigin: "50% 50%",
            onStart: () => playAudio(audio1)
        }),
        gsap.to("#zickzack", 10, {
            scale: 5,
            transformOrigin: "50% 60%",
            
            
        }),
        gsap.to("#sticker4", 20, {
            translateX: 300,
            translateY: 300,
        }),
        gsap.to("#sticker5", 20, {
            translateX: 300,
            translateY: -700,
        }),
        gsap.to("#sticker6", 20, {
            translateX: -300,
            translateY: 300,
        }),
        gsap.to("#sticker7", 20, {
            translateX: -300,
            translateY: 800,
        }),
        gsap.to("#sticker8", 20, {
            translateX: -300,
            translateY: 300,
        }),
        gsap.to("#sticker9", 20, {
            translateX: 600,
            translateY: 300,
        }),
        gsap.to("#sticker10", 20, {
            translateX: -600,
            translateY: 300,
        }),
        gsap.to("#text2", 5, {
        opacity: 0.5,
    }),
        gsap.to("#text1", 10, {
            scale: 3,
            transformOrigin: "50% 60%",
        })
        ])
        unscrubAnimation.add([
        gsap.to("#text1", 5, {
            opacity: 0,
        }),
            gsap.to("#text2", 10, {
            opacity: 1,
            scale: 3,
            transformOrigin: "50% 60%",
            })
        ])
        scrubAnimation.add([
        gsap.to("#text2", 5, {
            opacity: 0,
        })
    ])
    
        .add([
            
            gsap.to("#bg_city svg", 20, {
                
                scale: 20,
                transformOrigin: "50% 50%"
                
                
                
            }),
            gsap.to("#stern", 10, {
                opacity: 0.5,
                
            
            })
        ])        
        .add([
            gsap.to("#stern", 10, {
                opacity: 0
            }),
        ])

        .add([        
            gsap.to("#balken1", 40, {
                opacity: -0.5,
                translateY: 600,
                translateX: -1600
            }),
            gsap.to("#balken2", 60, {
                opacity: -0.5,
                translateY: 400,
                translateX: -1600
            }),
            gsap.to("#balken3", 80, {
                opacity: -0.5,
                translateY: 200,
                translateX: -1600,
                onStart: () => playAudio(audio2) // Запускаємо другий трек
            })
        ])
        .add([
            gsap.to("#balken1", 5, {
            opacity: 0
            }),
            gsap.to("#balken2", 5, {
            opacity: 0
            }),
            gsap.to("#balken3", 5, {
            opacity: 0
            })
        ])
        .add([
            gsap.to("#zickzack", 25, {
            opacity: 0
        }),
        gsap.to("#zickzack", 40, {
            scale: 3,
            transformOrigin: "50% 150%",
            onStart: () => playAudio(audio3) // Запускаємо другий трек
        
        })
        ])
        
        /*.add([
            gsap.to("#tunnel1", 20, {
                scale: 5,
                transformOrigin: "50% 50%",
                onStart: () => playAudio(audio4) // Запускаємо другий трек
            }),
            gsap.to("#tunnel2", 20, {
                scale: 5,
                transformOrigin: "50% 50%",
            }),
            gsap.to("#tunnel3", 20, {
                scale: 5,
                transformOrigin: "50% 50%",
            })
        ])*/
     
    .add([    
        gsap.to("#tunnel1", 55, {
            scale: 260,
            rotation: -180,
            transformOrigin: "50% 50%",
            onStart: () => playAudio(audio4) // Запускаємо другий тре
        }),
        gsap.to("#tunnel2", 135, {
            scale: 260,
            rotation: 180,
            transformOrigin: "50% 50%"
        }),    
        gsap.to("#tunnel3", 215, {
            scale: 260,
            rotation: -180,
            transformOrigin: "50% 50%"
        }),
        gsap.to("#tunnel4", 175, {
            scale: 280,
            rotation: 180,
            transformOrigin: "50% 50%"
        }),
        gsap.to("#tunnel5", 215, {
            scale: 300,
            rotation: -180,
            transformOrigin: "50% 50%"
        }),
        gsap.to("#tunnel6", 255, {
            scale: 420,
            rotation: 180,
            transformOrigin: "50% 50%"
        }),
        gsap.to("#mensch", 305, {
            scale: 540,
            transformOrigin: "50% 50%"
        })
        /*gsap.to("#circle", 295, {
            scale: 540,
            transformOrigin: "50% 50%"
        })*/
    ])
}
