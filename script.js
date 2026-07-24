/* =========================================
   PAGE 1
   OPEN BIRTHDAY SURPRISE
========================================= */

function startBirthday() {

    window.location.href = "birthday.html";

}


/* =========================================
   PAGE 2
   BALLOON POP SYSTEM
========================================= */

let balloonsLeft = 6;


/* =========================================
   POP BALLOON
========================================= */

function popBalloon(balloon) {


    // Balloon ni position save karo

    const rect =
        balloon.getBoundingClientRect();


    const x =
        rect.left
        +
        rect.width / 2;


    const y =
        rect.top
        +
        rect.height / 2;


    // Balloon hide karo

    balloon.style.pointerEvents =
        "none";


    balloon.style.animation =
        "none";


    balloon.style.transform =
        "scale(0)";


    balloon.style.opacity =
        "0";


    // Main POP 💥

    createPopBurst(
        x,
        y
    );


    // Particles ✨

    createParticles(
        x,
        y
    );


    // Confetti 🎉

    createSmallConfetti(
        x,
        y
    );


    // Count decrease

    balloonsLeft--;


    const count =
        document.getElementById(
            "balloonCount"
        );


    if (
        balloonsLeft === 1
    ) {

        count.innerText =
            "1 balloon left 🎈";

    }

    else if (
        balloonsLeft > 0
    ) {

        count.innerText =
            balloonsLeft
            +
            " balloons left 🎈";

    }

    else {

        count.innerText =
            "YOU DID IT! 🎉";

    }


    // All balloons pop

    if (
        balloonsLeft === 0
    ) {

        setTimeout(

            showFinalSurprise,

            1000

        );

    }

}


/* =========================================
   POP BURST
========================================= */

function createPopBurst(
    x,
    y
) {


    const burst =
        document.createElement(
            "div"
        );


    burst.className =
        "pop-burst";


    burst.innerHTML =
        "💥";


    burst.style.left =
        x
        -
        20
        +
        "px";


    burst.style.top =
        y
        -
        20
        +
        "px";


    document
        .getElementById(
            "popEffects"
        )
        .appendChild(
            burst
        );


    setTimeout(

        () => {

            burst.remove();

        },

        900

    );

}


/* =========================================
   COLORFUL PARTICLES
========================================= */

function createParticles(
    x,
    y
) {


    const colors = [

        "#ff3cac",

        "#784ba0",

        "#2b86c5",

        "#00d9ff",

        "#ffd93d",

        "#ffffff",

        "#ff6bcb"

    ];


    for (

        let i = 0;

        i < 18;

        i++

    ) {


        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "pop-particle";


        particle.style.left =
            x
            +
            "px";


        particle.style.top =
            y
            +
            "px";


        particle.style.background =
            colors[
                Math.floor(
                    Math.random()
                    *
                    colors.length
                )
            ];


        const angle =
            Math.random()
            *
            Math.PI
            *
            2;


        const distance =
            50
            +
            Math.random()
            *
            100;


        const moveX =
            Math.cos(
                angle
            )
            *
            distance;


        const moveY =
            Math.sin(
                angle
            )
            *
            distance;


        particle.style.setProperty(

            "--x",

            moveX
            +
            "px"

        );


        particle.style.setProperty(

            "--y",

            moveY
            +
            "px"

        );


        document
            .getElementById(
                "popEffects"
            )
            .appendChild(
                particle
            );


        setTimeout(

            () => {

                particle.remove();

            },

            900

        );

    }

}


/* =========================================
   SMALL CONFETTI BURST
========================================= */

function createSmallConfetti(
    x,
    y
) {


    const colors = [

        "#ff3cac",

        "#784ba0",

        "#00d9ff",

        "#ffd93d",

        "#ffffff"

    ];


    for (

        let i = 0;

        i < 12;

        i++

    ) {


        const confetti =
            document.createElement(
                "div"
            );


        confetti.className =
            "pop-particle";


        confetti.style.left =
            x
            +
            "px";


        confetti.style.top =
            y
            +
            "px";


        confetti.style.width =
            "8px";


        confetti.style.height =
            "14px";


        confetti.style.borderRadius =
            "2px";


        confetti.style.background =
            colors[
                Math.floor(
                    Math.random()
                    *
                    colors.length
                )
            ];


        const moveX =
            (
                Math.random()
                -
                0.5
            )
            *
            200;


        const moveY =
            (
                Math.random()
                -
                0.5
            )
            *
            200;


        confetti.style.setProperty(

            "--x",

            moveX
            +
            "px"

        );


        confetti.style.setProperty(

            "--y",

            moveY
            +
            "px"

        );


        document
            .getElementById(
                "popEffects"
            )
            .appendChild(
                confetti
            );


        setTimeout(

            () => {

                confetti.remove();

            },

            900

        );

    }

}


/* =========================================
   FINAL SURPRISE
========================================= */

function showFinalSurprise() {


    const finalScreen =
        document.getElementById(
            "finalSurprise"
        );


    finalScreen.classList.add(
        "show"
    );


    createConfetti();


}


/* =========================================
   FULL SCREEN CONFETTI
========================================= */

function createConfetti() {


    const confettiContainer =
        document.getElementById(
            "confetti"
        );


    const colors = [

        "#ff3cac",

        "#784ba0",

        "#2b86c5",

        "#00d9ff",

        "#ffd93d",

        "#ffffff",

        "#ff6bcb"

    ];


    for (

        let i = 0;

        i < 120;

        i++

    ) {


        const piece =
            document.createElement(
                "div"
            );


        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random()
            *
            100
            +
            "vw";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random()
                    *
                    colors.length
                )
            ];


        piece.style.animationDelay =
            Math.random()
            *
            3
            +
            "s";


        piece.style.animationDuration =
            3
            +
            Math.random()
            *
            3
            +
            "s";


        confettiContainer.appendChild(
            piece
        );


    }

}


/* =========================================
   CELEBRATE AGAIN
========================================= */

function celebrateAgain() {


    location.reload();

}