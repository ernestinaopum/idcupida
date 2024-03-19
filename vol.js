if (entry.status === 401) {
  // Redirect to login page or show an error message
  window.location.href = '/login'; // Redirect to login page
  // Alternatively, you can display an error message to the user
  alert('Session expired. Please log in again.');
}
