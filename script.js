document.addEventListener('DOMContentLoaded', function () {
    const wheel = document.getElementById('wheel');
    const phrases = [
        "Have you tried turning it off and on again?",
        "Have you tried unplugging it and plugging it back in?",
        "Have you tried restarting your computer?",
        "Is the cable plugged in?",
        "Is the device turned on?",
        "What is the error message?",
        "Is the device connected to the internet?",
        "Have you tried a different browser?",
        "Have you tried a different device?",
        "Have you tried a different network?",
    ];

    const colors = [
        "#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF",
        "#9BF6FF", "#A0C4FF", "#BDB2FF", "#FFC6FF",
    ];
    const numberOfSlices = phrases.length;
    const sliceDegrees = 360 / numberOfSlices;


    // Function to create and position slices
    function createWheelSlices() {
        for (let i = 0; i < numberOfSlices; i++) {
            const slice = document.createElement('div');

            slice.classList.add('wheel-slice');


            slice.textContent = phrases[i]; // Set the text for the slice

            const rotation = sliceDegrees * i;
            const translateY = -wheel.offsetHeight / 2;

            // Position the slice

            slice.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) translateY(${translateY}px)`;
            slice.style.transformOrigin = `50% 50%`;

            // Get the color for the slice from the colors array
            const color1 = colors[i % colors.length];

            // Set the background image with the colors
            slice.style.backgroundImage = `linear-gradient(to top right, transparent 50%, ${color1} 0),
        linear-gradient(to bottom right, ${color1} 50%, transparent 0)`;

            // set width and height of the slice
            slice.style.width = `100%`;
            slice.style.height = `100%`;

            wheel.appendChild(slice);
        }
    }

    // Initialize the wheel with slices
    createWheelSlices();

    // Spin button functionality
    document.getElementById('spin').addEventListener('click', function () {
        let degree = Math.floor(5000 + Math.random() * 5000); // Random spin degree
        // Set the transition on the wheel
        wheel.style.transition = 'transform 4s ease-out';
        wheel.style.transform = `rotate(${degree}deg)`;
        // Disable spin button
        this.setAttribute('disabled', true);
        // Enable spin button after 4.5 seconds (half a second before the transition ends)
        setTimeout(function () {
            document.getElementById('spin').removeAttribute('disabled');
        }, 4500);

        setTimeout(function () {
            wheel.style.transition = 'none';
            // Normalize the degree to be within 0-360 to find the winning slice
            let actualDegree = degree % 360;
            // Logic to determine the selected slice (not implemented here)
        }, 4000);
    });
});

