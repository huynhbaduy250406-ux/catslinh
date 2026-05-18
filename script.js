// Open Letter Button
document.getElementById('btn__letter').addEventListener('click', function() {
    const boxLetter = document.getElementById('box__letter');
    const letterBorder = document.querySelector('.letter__border');
    boxLetter.style.display = 'block';
    letterBorder.style.display = 'block';
    
    // Add animations to hearts and images
    setTimeout(() => {
        document.getElementById('heart__letter').classList.add('animationOp');
        document.querySelector('.love__img').classList.add('animationOp');
        document.getElementById('mewmew').classList.add('animationOp');
        
        // Add animation to individual hearts
        const hearts = document.querySelectorAll('.content__letter .left .heart');
        hearts.forEach(heart => {
            heart.classList.add('animation');
        });
    }, 100);
});

// Close Letter Button
document.getElementById('close__letter').addEventListener('click', function() {
    const boxLetter = document.getElementById('box__letter');
    const letterBorder = document.querySelector('.letter__border');
    boxLetter.style.display = 'none';
    letterBorder.style.display = 'none';
    
    // Remove animations
    document.getElementById('heart__letter').classList.remove('animationOp');
    document.querySelector('.love__img').classList.remove('animationOp');
    document.getElementById('mewmew').classList.remove('animationOp');
    
    const hearts = document.querySelectorAll('.content__letter .left .heart');
    hearts.forEach(heart => {
        heart.classList.remove('animation');
    });
});

// Close letter when clicking outside
document.getElementById('box__letter').addEventListener('click', function(e) {
    if (e.target === this) {
        document.getElementById('close__letter').click();
    }
});

// Set animation delays for happy and birthday text
window.addEventListener('load', function() {
    const happySpans = document.querySelectorAll('.happy span');
    happySpans.forEach((span, index) => {
        span.style.setProperty('--t', (1 + index * 0.2) + 's');
    });
    
    const birthdaySpans = document.querySelectorAll('.birthday span');
    birthdaySpans.forEach((span, index) => {
        span.style.setProperty('--t', (2 + index * 0.2) + 's');
    });
});

// Confetti animation on page load (optional)
function createConfetti() {
    const confettiPieces = 50;
    const colors = ['#ff7882', '#FFD700', '#FF69B4', '#FFB6C1', '#ff1493'];
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '0';
        confetti.style.opacity = '0.7';
        
        document.body.appendChild(confetti);
        
        let x = parseFloat(confetti.style.left);
        let y = parseFloat(confetti.style.top);
        let vx = (Math.random() - 0.5) * 4;
        let vy = Math.random() * 3 + 2;
        
        const interval = setInterval(() => {
            y += vy;
            x += vx;
            vy += 0.1;
            
            if (y > window.innerHeight) {
                clearInterval(interval);
                confetti.remove();
            } else {
                confetti.style.top = y + 'px';
                confetti.style.left = x + 'px';
            }
        }, 30);
    }
}

// Create confetti when page loads
window.addEventListener('load', function() {
    setTimeout(createConfetti, 2000);
    setTimeout(createConfetti, 4000);
});
