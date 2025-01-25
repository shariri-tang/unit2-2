document.getElementById('start-button').addEventListener('click', function() {
  const button = document.getElementById('start-button');
  const img = document.getElementById('animation');
  const sweetImage = document.getElementById('sweet');
  const music = document.getElementById('music');

  
  music.play();
  button.style.visibility = 'hidden';  // Hide the button
  img.style.display = 'block';   // Show the GIF
  sweetImage.style.display = 'none';

  // Set the duration of the GIF (in milliseconds) here
  const gifDuration = 3000; // e.g., 5 seconds


  // Redirect to the next page after the GIF finishes
  setTimeout(function() {
    window.location.href = 'page3.html'; // Change to your desired URL
  }, gifDuration);
});