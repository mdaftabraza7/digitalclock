let is24HourFormat = false;
//mdaftabraza
function updateTime() {
    const timeDisplay = document.getElementById('time');
    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = '';

    if (!is24HourFormat) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;  // Convert to 12-hour format
    }

    // Add leading zero to minutes if necessary
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const timeString = `${hours}:${minutes}:${seconds} ${!is24HourFormat ? ampm : ''}`;
    timeDisplay.textContent = timeString;
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    const toggleButton = document.getElementById('toggleFormat');
    toggleButton.textContent = is24HourFormat ? 'Switch to 12-hour format' : 'Switch to 24-hour format';
}

// Update time every second
setInterval(updateTime, 1000);

// Add event listener to the format toggle button
document.getElementById('toggleFormat').addEventListener('click', toggleFormat);

// Initialize clock display
updateTime();
