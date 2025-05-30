function loadSVG() {
    fetch("assets/final3.svg")
        .then(response => response.text())
        .then((svg) => {
            document.getElementById('bg_city').innerHTML = svg;
            document.querySelector('#bg_city svg').setAttribute('preserveAspectRatio', 'xMidYMid slice');
            // Додаємо клік на mensch
            setTimeout(() => {
                const mensch = document.querySelector('#mensch');
                if (mensch) {
                    mensch.style.cursor = 'pointer';
                    mensch.addEventListener('click', () => {
                        window.open('https://youtu.be/CL2a8fos5NI?si=O1-UlX4rXeltFaDo', '_blank');
                    });
                    mensch.addEventListener('touchend', () => {
                        window.open('https://youtu.be/CL2a8fos5NI?si=O1-UlX4rXeltFaDo', '_blank');
                    });
                }
            }, 100); // невелика затримка, щоб SVG точно вставився
            setAnimationScroll();
        });
}
loadSVG();

function setAnimationScroll() {
    gsap.registerPlugin(ScrollTrigger);
    const audio0 = new Audio('assets/part0_small.mp3');
    const audio1 = new Audio('assets/part01_small.mp3');
    const audio2 = new Audio('assets/part2_small.mp3');
    const audio3 = new Audio('assets/part3_small.mp3');
    const audio4 = new Audio('assets/part4_small.mp3');
    const audio5 = new Audio('assets/part5_small.mp3');

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
            end: "+=40000",
            scrub: true,
            pin: true
        }
    });

    /*let unscrubAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#bg_city",
            start: "top top",
            end: "+=10000",
            scrub: false,
            pin: true
        }
    });*/

    scrubAnimation.add([
        gsap.to("#bg_city svg", 50, {
            scale: 5,
            transformOrigin: "50% 50%",
            onStart: () => playAudio(audio0)
        }),
        gsap.to("#textstart", 0.5, {
            opacity: 0,
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
    ]).add([
        
        gsap.to("#stern", 120 , {
            scale: 0.5,
            transformOrigin: "50% 50%",
        }),
        gsap.to("#bg_city svg", 120, {
            scale: 10,
            transformOrigin: "50% 50%",
            onStart: () => playAudio(audio1)
        }),
        gsap.to("#zickzackbg", 1, {
            scale: 5,
            transformOrigin: "50% 90%",
            
            
        }),
        gsap.to("#sticker4", 50, {
            translateX: 700,
            translateY: 300,
        }),
        gsap.to("#sticker5", 50, {
            translateX: 700,
            translateY: -700,
        }),
        gsap.to("#sticker6", 50, {
            translateX: -700,
            translateY: 300,
        }),
        gsap.to("#sticker7", 50, {
            translateX: -700,
            translateY: 800,
        }),
        gsap.to("#sticker8",50, {
            translateX: -700,
            translateY: 300,
        }),
        gsap.to("#sticker9", 50, {
            translateX: 600,
            translateY: 300,
        }),
        gsap.to("#sticker10", 50, {
            translateX: -600,
            translateY: 300,
        }),
        gsap.to("#text2", 100, {
            opacity: 0.5,
        }),
        gsap.to("#text1", 100, {
            scale: 3,
            transformOrigin: "50% 60%",
        })
    ])/*;
       scrubAnimation*/.add([
        gsap.to("#text1", 150, {
            opacity: 0,
            scale: 0.5,
        }),
        gsap.to("#text2", 150, {
            opacity: 1,
            scale: 3,
            transformOrigin: "50% 60%",
        })
    ])/*;
    unscrubAnimation*/.add([
        gsap.to("#text2", 200, {
            opacity: 0,
        })
    ])/*;
    
    scrubAnimation*/.add([
            
        gsap.to("#bg_city svg", 30, {
                
            scale: 20,
            transformOrigin: "50% 50%"
                
                
                
        }),
        gsap.to("#stern", 50, {
            opacity: 0.5,
                
            
        })
    ])
        .add([
            gsap.to("#stern", 20, {
                opacity: 0,
                onStart: () => playAudio(audio2) // Запускаємо другий трек
            })  
        ])

        .add([
            gsap.to("#balken1", 940, {
                translateY: 1600,
                translateX: -2600
            }),
            gsap.to("#balken2", 940, {
                translateY: 1400,
                translateX: -2600
            }),
            gsap.to("#balken3", 940, {
                translateY: 1200,
                translateX: -2600
            })
        ])
        .add([
            gsap.to("#balken1", 20, {
                opacity: 0
            }),
            gsap.to("#balken2", 20, {
                opacity: 0
            }),
            gsap.to("#balken3", 20, {
                opacity: 0
            })
        ])
        .add([
                gsap.to("#zickzackbg", 800, {
                scale: 5,
                transformOrigin: "50% 250%",
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
            gsap.to("#zickzackbg", 10, {
                scale: 0.5,
                opacity: 0
            }),
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
            gsap.to("#tunnel4", 275, {
                scale: 280,
                rotation: 180,
                transformOrigin: "50% 50%",
                onStart: () => playAudio(audio5)
            }),
            gsap.to("#tunnel5", 315, {
                scale: 300,
                rotation: -180,
                transformOrigin: "50% 50%",
                onStart: () => {
                    // mensch вже видно — робимо його клікабельним
                    document.querySelectorAll('#bg_city svg > *:not(#mensch)').forEach(el => {
                        el.style.pointerEvents = 'none';
                    });
                    const mensch = document.querySelector('#mensch');
                    if (mensch) mensch.style.pointerEvents = 'auto';
                }
            }),
            gsap.to("#tunnel6", 255, {
                scale: 420,
                rotation: 180,
                transformOrigin: "50% 50%",
            }),
            gsap.to("#licht", 505, {
                scale: 540,
                transformOrigin: "50% 50%"
                
            }),
            gsap.to("#licht", 500, {
                opacity: 0
                
            }),
            
            gsap.to("#mensch", 500, {
                scale: 200,
                transformOrigin: "50% 50%"
                
            })
        /*gsap.to("#circle", 295, {
                scale: 540,
                transformOrigin: "50% 50%"
            })*/
        ])/*;*/
}
