document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const gifContainer = document.querySelector('.gif-container');
    const randomTexts = [":CCC", "MONSTER", "Not Today", "Misclick right?", "Try Again","How could you?","</3"];
    let yesScale = 1;
    let noScale = 1;

    noBtn.addEventListener('mouseover', function(event) {
        let newX, newY;
        yesBtn.style.transform = `scale(${yesScale})`;
        yesScale += 0.1;
        noBtn.style.transform = `scale(${(noScale)}`;
        noScale -= 0.06;
        const margin = 20; // Prevents the button from touching the very edge of the screen.
        const noBtnWidth = noBtn.offsetWidth;
        const noBtnHeight = noBtn.offsetHeight;

        do {
            newX = Math.random() * (window.innerWidth - noBtnWidth);
            newY = Math.random() * (window.innerHeight - noBtnHeight);
        } while (newX < margin || newY < margin);

        noBtn.style.position = "fixed";
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
        noBtn.textContent = randomTexts[Math.floor(Math.random() * randomTexts.length)];
    });

    yesBtn.addEventListener('click', function() {
        // Remove emoverything
        document.body.removeChild(gifContainer);
        document.body.removeChild(document.querySelector('.response-buttons'));

        const replacement = document.createElement('div');
        replacement.setAttribute('class', 'replacement');
        replacement.innerHTML = `
            <p id="love-text">YAYYYYYY <3</p>
            <img src="https://media.tenor.com/WiQQRwR2QFAAAAAi/cute-panda.gif" alt="Response GIF" style="max-width: 100%; height: auto;">
        `;
        document.body.appendChild(replacement);
    });

    yesBtn.addEventListener('mouseover', function() {
        yesBtn.textContent = "<3";
    });
    yesBtn.addEventListener('mouseout', function() {
        yesBtn.textContent = "</3"; 
        setTimeout(() => {
            yesBtn.textContent = "Yes";
        }, 500); 
    });
});
