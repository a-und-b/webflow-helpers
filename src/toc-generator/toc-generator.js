document.addEventListener('DOMContentLoaded', function() {
  // Function to generate TOC
  function generateTOC() {
    const tocContainer = document.querySelector('.cf-toc_component');
    if (!tocContainer) {
      console.error('TOC container with class .cf-toc_component not found');
      return;
    }

    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const tocList = document.createElement('ul');
    tocList.className = 'cf-toc_list';

    const topPadding = '80px';

    headings.forEach((heading, index) => {
      if (heading.textContent.includes('[TOC]')) {
        // Remove the '[TOC]' suffix from the heading text
        const headingText = heading.textContent.replace('[TOC]', '').trim();
        heading.textContent = headingText;

        // Create an id for the heading if it doesn't have one
        if (!heading.id) {
          heading.id = 'heading-' + index;
        }

        // Add top padding to the heading and set top margin to 0
        heading.style.paddingTop = topPadding;
        heading.style.marginTop = '0';

        // Create a list item for the TOC
        const listItem = document.createElement('li');
        listItem.className = 'cf-toc_item toc-' + heading.tagName.toLowerCase();

        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = headingText;
        link.className = 'cf-toc_link';

        listItem.appendChild(link);
        tocList.appendChild(listItem);
      }
    });

    tocContainer.appendChild(tocList);
  }

  // Initialize TOC
  generateTOC();
});
