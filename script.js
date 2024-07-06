// Add event listener to the logo element
document.querySelector('.logo').addEventListener('mouseover', function() {
  // Add a class to the logo element to trigger the animation
  this.classList.add('hover');
});

document.querySelector('.logo').addEventListener('mouseout', function() {
  // Remove the class to reset the animation
  this.classList.remove('hover');
});

document.querySelector('.item').addEventListener('mouseover', function() {
    // Add a class to the logo element to trigger the animation
    this.classList.add('hover');
});

document.querySelector('.item').addEventListener('mouseout', function() {
    // Remove the class to reset the animation
    this.classList.remove('hover');
  });