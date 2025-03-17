/* assets/js/helpers.js */

// Checks if a given string is a valid URL
function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }
  