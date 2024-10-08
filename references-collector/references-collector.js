document.addEventListener('DOMContentLoaded', function() {
  // Function to collect external links and build a reference list
  function collectExternalLinks() {
    const linksList = document.createElement('ol');
    linksList.className = 'cf-references-collector_list';
    const uniqueLinks = new Set();
    let linkCounter = 1; // Initialize a counter for continuous numbering

    document.querySelectorAll('.article-section_component a[href^="http"]:not([href^="' + window.location.origin + '"])').forEach(link => {
      const href = link.getAttribute('href');
      if (!uniqueLinks.has(href)) {
        uniqueLinks.add(href);
        const listItem = document.createElement('li');
        listItem.value = linkCounter++; // Set the value attribute and increment the counter
        const linkElement = document.createElement('a');
        linkElement.href = href;
        linkElement.textContent = href;
        linkElement.target = '_blank';
        listItem.appendChild(linkElement);
        linksList.appendChild(listItem);
      }
    });

    // If any links were found, add the list to the specific div with id #references
    if (uniqueLinks.size > 0) {
      const referencesContainer = document.getElementById('references');
      if (referencesContainer) {
        referencesContainer.appendChild(linksList);
      } else {
        console.error('References container with id #references not found');
      }
    }
  }

  // Run the function when the document is ready
  collectExternalLinks();
});