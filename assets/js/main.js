/* assets/js/main.js */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('text-form');
    const input = document.getElementById('input-text');
    const resultSection = document.getElementById('result-section');
    const resultText = document.getElementById('result-text');
  
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      let content = input.value.trim();
  
      if (!content) {
        alert('Please enter a URL or raw HTML.');
        return;
      }
  
      // If the input is a valid URL, fetch its content
      if (isValidUrl(content)) {
        try {
          const response = await fetch(content);
          if (!response.ok) {
            throw new Error('Failed to fetch the URL content.');
          }
          content = await response.text();
        } catch (error) {
          alert('Error fetching URL: ' + error.message);
          return;
        }
      }
  
      // Use js-beautify to format the HTML content
      try {
        // The html_beautify function is provided by the js-beautify library loaded via CDN
        const formatted = html_beautify(content, {
          indent_size: 2,
          wrap_line_length: 80
        });
        resultText.textContent = formatted;
        resultSection.style.display = 'block';
      } catch (error) {
        alert('Error formatting HTML: ' + error.message);
      }
    });
  });
  