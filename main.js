fetch('https://sample-python-api-backend.vercel.app/api/index')
  .then((response) => response.text()) // or response.json() if you are sending JSON
  .then((data) => {
    let message = data; // data is the response from server
    console.log(message);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
