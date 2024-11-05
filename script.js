
const sensitiveContent = `
    <p>
        <a href="https://www.google.com/maps/place/Niederneuendorfer+Allee+5,+13587+Berlin,+Germany/data=!4m2!3m1!1s0x47a855e017f66137:0xe6863d16ee0c2261?sa=X&ved=1t:242&ictx=111" target="_blank" rel="noopener noreferrer">
            Niederneuendorfer Allee 5, 13587 Berlin, Germany
        </a>
    </p>
    <p>
        <a href="https://api.whatsapp.com/send/?phone=4917641623794&text=Hello%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
            <iconify-icon icon="simple-icons:whatsapp"></iconify-icon> WhatsApp
        </a>
        <a href="tel://+4917641623794/" target="_blank" rel="noopener noreferrer">+4917641623794</a>
    </p>
    <p>
        <a href="mailto:sergej@kulpinac.com" target="_blank" rel="noopener noreferrer">
            <iconify-icon icon="streamline:mail-send-email-message"></iconify-icon> sergej@kulpinac.com
        </a>
    </p>
    <p>
        <a href="https://www.linkedin.com/in/sergej-kulpinac-29ab04257/" target="_blank" rel="noopener noreferrer">
            <iconify-icon icon="bi:linkedin"></iconify-icon> LinkedIn 
        </a>
            <a href="https://links.kulpinac.com/@sergej" target="_blank" rel="noopener noreferrer">
            <iconify-icon icon="dashicons:admin-links"></iconify-icon> Links 
        </a>
        <a href="https://sergejkulpinac.dev" target="_blank" rel="noopener noreferrer">
            <iconify-icon icon="dashicons:portfolio"></iconify-icon> My Site
        </a>
    </p>
`;


function revealSensitiveInfo() {
    const password = prompt("Enter the password to reveal sensitive information:");

    if (password === "sergej") {
        
        document.getElementById("sensitive-info").innerHTML = sensitiveContent;

        
        document.getElementById("reveal-button").style.display = "none";
    } else {
        alert("Incorrect password!");
    }
}

const background = document.querySelector('.background');
let angle = 0; // Starting angle for rotation

function animate() {
    // Update the angle for the background's rotation
    angle += 0.15; // Adjust the rotation speed here (degrees per frame)
    
    // Move the ellipse to the mouse position
    background.style.left = `${mouseX}px`;
    background.style.top = `${mouseY}px`;

    // Apply the rotation to the background
    background.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

    requestAnimationFrame(animate); // Continue the animation
}

let mouseX = 0;
let mouseY = 0;

// Update mouse coordinates on mouse move
document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Start the animation loop
animate();
