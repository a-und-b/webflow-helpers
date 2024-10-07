document.addEventListener('DOMContentLoaded', function() {
  // Function to collect external links and build a reference list
  function collectExternalLinks() {
    const articleSections = document.querySelectorAll('.article-section_component');
    const linksList = document.createElement('ul');
    linksList.className = 'cf-references-collector_list';
    let linkCount = 0;

    articleSections.forEach((section) => {
      const sectionLinks = [];
      const sectionHeading = section.querySelector('h1, h2, h3, h4, h5, h6');
      const sectionTitle = sectionHeading ? sectionHeading.textContent : 'Untitled Section';

      section.querySelectorAll('a[href^="http"]:not([href^="' + window.location.origin + '"])').forEach(link => {
        const href = link.getAttribute('href');
        const text = link.textContent;

        linkCount++;
        const referenceNumber = '[' + linkCount + ']';

        // Add reference number to the link in the article
        const sup = document.createElement('sup');
        sup.textContent = referenceNumber;
        link.insertAdjacentElement('afterend', sup);

        // Add link to the section's collection
        sectionLinks.push('<li>' + referenceNumber + ' <a href="' + href + '" target="_blank">' + text + '</a></li>');
      });

      // If links were found in this section, add them to the list
      if (sectionLinks.length > 0) {
        const sectionHeader = document.createElement('li');
        sectionHeader.innerHTML = '<strong>' + sectionTitle + '</strong>';
        linksList.appendChild(sectionHeader);
        linksList.insertAdjacentHTML('beforeend', sectionLinks.join(''));
      }
    });

    // If any links were found, add the list to the specific div with id #references
    if (linkCount > 0) {
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