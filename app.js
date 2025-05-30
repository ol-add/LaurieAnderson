function loadSVG() {
    fetch("assets/final5.svg")
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
            end: "+=70000",
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
        gsap.to("#sticker11", 1, {
            translateY: -1700,
            translateX: 2600
        }),
        gsap.to("#sticker12", 1, {
            translateY: -1500,
            translateX: 2600
        }),
        gsap.to("#sticker13", 1, {
            translateY: -1300,
            translateX: 2600
        }),
        gsap.to("#sticker14", 1, {
            translateY: -1700,
            translateX: 2600
        }),
        gsap.to("#sticker15", 1, {
            translateY: -1500,
            translateX: 2600
        }),
        gsap.to("#sticker16", 1, {
            translateY: -1300,
            translateX: 2600
        }),
        gsap.to("#text3", 1, {
            translateY: -1600,
            translateX: 2600
        }),
        gsap.to("#text4", 1, {
            translateY: -1400,
            translateX: 2600
        }),
        gsap.to("#zickzackbg", 10, {
            scale: 5,
            transformOrigin: "50% 90%",
            
            
        }),
        gsap.to("#sticker4", 50, {
            translateX: 700,
            translateY: 300,
        }),
        gsap.to("#sticker5", 50, {
            translateX: 700,
            translateY: -1000,
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
        gsap.to("#text2", 10, {
            opacity: 0.5,
        }),
        gsap.to("#text1", 250, {
            scale: 3,
            transformOrigin: "50% 60%",
        }),
        gsap.to("#sticker17", 1, {
            scale: 3,
            translateY: -2000,

        }),
        gsap.to("#sticker18", 1, {
            scale: 3,
            translateY: -2400,

        }),
        gsap.to("#sticker19", 1, {
            scale: 3,
            translateY: -2800,

        }),
        gsap.to("#sticker20", 1, {
            scale: 3,
            translateY: -3200,
            translateX: -100


        }),
        gsap.to("#sticker21", 1, {
            scale: 3,
            translateY: -3600,
            translateX: -100

        }),
        gsap.to("#text5", 1, {
            scale: 5,
            translateY: -2400,
            translateX: -100


        }),
        gsap.to("#text6", 1, {
            scale: 5,
            translateY: -2200,
            translateX: -100


        })
    ])
        .add([
            gsap.to("#text1", 260, {
                opacity: 0,
            }),
            gsap.to("#text2", 200, {
                opacity: 1,
                scale: 3,
                transformOrigin: "50% 60%"
            })
        ])
        .add([
            gsap.to("#text2", 250, {
                opacity: 0,
            })
    ])
        .add([
       
            gsap.to("#bg_city svg", 160, {    
                scale: 20,
                transformOrigin: "50% 50%"
            }),
            gsap.to("#stern", 140, {
                opacity: 0,  
            }),
            gsap.to("#balken1", 1040, {
                translateY: 1400,
                translateX: -2300,
                onStart: () => playAudio(audio2) // Запускаємо другий трек
            }),
            gsap.to("#balken2", 940, {
                translateY: 1600,
                translateX: -2500
            }),
            gsap.to("#balken3", 1140, {
                translateY: 1200,
                translateX: -2100
            }),
            gsap.to("#sticker11", 1000, {
                translateY: 1200,
                translateX: -2000
            }),
            gsap.to("#sticker12", 1000, {
                translateY: 1000,
                translateX: -2000
            }),
            gsap.to("#sticker13", 1010, {
                translateY: 1000,
                translateX: -2000
            }),
            gsap.to("#sticker14", 1020, {
                translateY: 1200,
                translateX: -2000
            }),
            gsap.to("#sticker15", 1030, {
                translateY: 1000,
                translateX: -2000
            }),
            gsap.to("#sticker16", 1040, {
                translateY: 800,
                translateX: -2000
            }),
            gsap.to("#text3", 1200, {
                translateY: 600,
                translateX: -2000,
                rotation: -35
            }),
            gsap.to("#text4", 1200, {
                translateY: 400,
                translateX: -2000,
                rotation: -35
            })  
        ])        
            .add([
            gsap.to("#balken1", 1, {
                opacity: 0,
                onStart: () => playAudio(audio3) // Запускаємо другий трек
            }),
            gsap.to("#balken2", 1, {
                opacity: 0
            }),
            gsap.to("#balken3", 1, {
                opacity: 0
            }),
            gsap.to("#zickzackbg", 200, {
                scale: 5,
                transformOrigin: "50% 200%"
            }),
            gsap.to("#zickzackbg", 900, {
                scale: 0.5,
                opacity: 1
            }),
            
            gsap.to("#sticker17", 400, {
                scale: 5,
                translateY: 1600,
                rotation: 45,

            }),
            gsap.to("#sticker18", 400, {
                scale: 5,
                translateY: 1450,
                rotation: -45,

            }),
            gsap.to("#sticker19", 400, {
                scale: 5,
                translateY: 1200,
                rotation: 45,
 
            }),
            gsap.to("#sticker20", 400, {
                scale: 5,
                translateY: 1150,
                rotation: -45,

            }),
            gsap.to("#sticker21", 400, {
                scale: 5,
                translateY: 1000,
                rotation: 45,

            }),gsap.to("#text5", 500, {
                scale: 7,
                translateY: 1400,
                rotation: 45

            }),
            gsap.to("#text6", 550, {
                scale: 7,
                translateY: 1200,
                rotation: 30

            })
            
        ])
        .add([
            
            gsap.to("#zickzackbg", 250, {
                opacity: 0,
                onStart: () => playAudio(audio4) // Запускаємо другий тре
            }),
            gsap.to("#tunnel1", 1350, {
                scale: 260,
                rotation: -180,
                transformOrigin: "50% 50%"
            }),
            gsap.to("#sticker22", 1050, {
                scale: 380,
                translateX: 300,
                translateY: -1000
            }),
            gsap.to("#tunnel2", 1150, {
                scale: 260,
                rotation: 180,
                transformOrigin: "50% 50%"
            }),
            gsap.to("#sticker23", 1250, {
                scale: 380,
                translateX: -2000,
                translateY: 100
            }),
            gsap.to("#tunnel3", 1350, {
                scale: 260,
                rotation: -180,
                transformOrigin: "50% 50%"
            }),
            gsap.to("#sticker24", 1450, {
                scale: 380,
                translateX: -2800,
                translateY: -300

            }),
            gsap.to("#tunnel4", 1550, {
                scale: 280,
                rotation: 180,
                transformOrigin: "50% 50%"
            }),
            gsap.to("#sticker25", 1650, {
                scale: 400,
                translateX: -2000,
                translateY: 100
            }),
            
            gsap.to("#tunnel5", 1750, {
                scale: 300,
                rotation: -180,
                transformOrigin: "50% 50%"
            }),
            gsap.to("#tunnel6", 1850, {
                scale: 420,
                rotation: 180,
                transformOrigin: "50% 50%",
            }),

            gsap.to("#licht", 1950, {
                scale: 600,
                transformOrigin: "50% 45%"
            }),
            gsap.to("#text8", 100, {
                scale: 200,
                opacity: 0,
                
                transformOrigin: "50% 45%"
            }),
            gsap.to("#text7", 100, {
                scale: 200,
                opacity: 1,
                transformOrigin: "50% 45%"
            })
                
                
            
        ]) 
        .add([
            gsap.to("#text7", 100, {
                opacity: 0,
                transformOrigin: "50% 45%"
            }),
            gsap.to("#text8", 100, {
                scale: 200,
                opacity: 1,
                transformOrigin: "50% 45%"
            }),
            gsap.to("#text8", 100, {
                opacity: 0,
                transformOrigin: "50% 45%"
            }),
            
            gsap.to("#licht", 500, {
                opacity: 0,
                onStart: () => {
                    // mensch вже видно — робимо його клікабельним
                    document.querySelectorAll('#bg_city svg > *:not(#mensch)').forEach(el => {
                        el.style.pointerEvents = 'none';
                    });
                    const mensch = document.querySelector('#mensch');
                    if (mensch) mensch.style.pointerEvents = 'auto';
                },
                onStart: () => playAudio(audio5)
            }),
            
            gsap.to("#mensch", 600, {
                scale: 400,
                transformOrigin: "50% 45%"
                
            })
        /*gsap.to("#circle", 295, {
                scale: 540,
                transformOrigin: "50% 50%"
            })*/
        ])/*;*/
}
