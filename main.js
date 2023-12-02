/**
 * Displays a message on the webpage.
 * @param {string} message - The message to be displayed.
 */
function show_message(message) {
  const message_element = document.createElement('h1');
  message_element.innerHTML = message;
  document.body.appendChild(message_element);
}

/**
 * Initializes the application.
 * @returns {void}
 */
function init() {
  fetch('https://sample-python-api-backend.vercel.app/api/index')
    .then((response) => response.text()) // or response.json() if you are sending JSON
    .then((data) => {
      /** @type {string} */
      let message = data; // data is the response from server
      console.log(message);
      show_message(message);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

init();
