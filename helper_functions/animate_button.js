export function animateButton(button){
  // Remove any existing animation classes
  button.classList.remove("fade-out", "fade-in");
  
  // Add fade-out animation class
  button.classList.add("fade-out");
  
  // After the fade-out animation ends, add fade-in animation class to smoothly return to original state
  button.addEventListener("animationend", function() {
    button.classList.remove("fade-out");
    button.classList.add("fade-in");
  });
}