function stopAllAudio() {
    const allMediaElements = document.querySelectorAll('audio, video');

    allMediaElements.forEach((element) => {
        element.pause();
    });
}

function SmoothTransit(toPage) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'black';
    overlay.style.opacity = '0';
    document.body.appendChild(overlay);
    stopAllAudio();

    let opacity = 0;

    const fadeInInterval = setInterval(() => {
        opacity += 0.1;
        overlay.style.opacity = opacity.toString();

        if (opacity >= 1) {
            clearInterval(fadeInInterval);
            window.location.href = toPage+".html"
        }
    }, .000001);
}

function UnSmoothTransit() {
    const overlay = document.getElementById('Smooth')

    let opacity = 1;

    const fadeInInterval = setInterval(() => {
        opacity -= 0.1;
        overlay.style.opacity = opacity.toString();

        if (opacity >= 1) {
            clearInterval(fadeInInterval);
        }
    }, 15);
}
UnSmoothTransit();