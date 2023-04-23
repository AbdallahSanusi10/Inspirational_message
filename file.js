// Define arrays of data to be used in the random message
const inspirationalQuotes = [
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Your only limit is the amount of willingness you show to step outside of your comfort zone.",
  "Believe you can and you're halfway there.",
  "The future belongs to those who believe in the beauty of their dreams.",
];
const authors = [
  "Unknown",
  "Winston Churchill",
  "Roy T. Bennett",
  "Theodore Roosevelt",
  "Eleanor Roosevelt",
];
const actions = [
  "Take action today and make your dreams a reality!",
  "Don't wait for opportunities, create them!",
  "Make a difference in the world by being yourself!",
  "Keep moving forward and never give up!",
  "Stay positive and believe in yourself!",
];

// Define a function to generate a random inspirational message
function generateMessage() {
  // Choose a random quote from the array
  const quote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
  // Choose a random author from the array
  const author = authors[Math.floor(Math.random() * authors.length)];
  // Choose a random action from the array
  const action = actions[Math.floor(Math.random() * actions.length)];

  // Combine the three pieces of data into a single message
  const message = `${quote} - ${author}\n${action}`;

  // Return the message
  return message;
}

// Call the generateMessage function to generate and display a random message
console.log(generateMessage());