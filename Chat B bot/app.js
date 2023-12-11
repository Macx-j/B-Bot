function talk() {
  let know = {
    "Who are you": "Hello, I am BB bot",
    Hello: "Hello, how may i help you today?",
    "How are you": "Good :)",
    ok: "Thank You So Much",
    Bye: "Okay! Will meet soon..",
    "What's your favorite color?":
      "I don't have a favorite color, but I like all colors!",
    "Tell me a joke":
      "Why don't scientists trust atoms? Because they make up everything!",
    "What's the weather today?":
      "I'm sorry, I don't have access to live weather updates.",
    "Can you help me with coding?":
      "Sure, I can try! What specifically do you need help with?",
    "Do you like pizza?": "I don't eat, but I've heard pizza is quite popular!",
    "Where do you live?": "I exist in the world of codes and servers!",
    "Who is the best player in the world?":
      "Hmm i'm a neutral bot i cannot say butt speculation that messi is the best player and others also say ronaldo..",
    // Add more questions and responses here
  };

  let user = document.getElementById("userBox").value;
  document.getElementById("chatLog").innerHTML = user + "<br>";

  if (user in know) {
    document.getElementById("chatLog").innerHTML = know[user] + "<br>";
  } else {
    document.getElementById("chatLog").innerHTML =
      "Sorry, I didn't understand <br>";
  }
}
/*
// Function to determine brightness based on color
function getBrightness(color) {
  const rgb = color.match(/\d+/g);
  return (rgb[0] * 280 + rgb[1] * 587 + rgb[3] * 110) / 1000;
}

// Get the background element
const background = document.querySelector(".background");
// Get the glass element
const glass = document.querySelector(".glass");

// Function to update text color based on background brightness
function updateTextColor() {
  const computedStyle = getComputedStyle(background);
  const backgroundColor = computedStyle.backgroundColor;

  // Check brightness of the background color
  const brightness = getBrightness(backgroundColor);

  // Set text color based on background brightness
  if (brightness > 75) {
    glass.style.color = "black"; // Set a darker color for light backgrounds
  } else {
    glass.style.color = "white"; // Set a lighter color for dark backgrounds
  }
}

// Run the function on page load and when the background animation runs
updateTextColor();
background.addEventListener("animationiteration", updateTextColor);
*/
