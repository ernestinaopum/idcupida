// Hide the email sign-in button and handle the sign-in process
auth.signInWithPopup(provider)
  .then(result => {
    // Handle the successful authentication result here
    // ...
  })
  .catch(error => {
    // Handle errors here, such as displaying a message to the user
    // ...
  });
