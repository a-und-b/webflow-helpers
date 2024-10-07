document.addEventListener('DOMContentLoaded', function() {

  // Function to create accordion from RTE content
  function createAccordionFromRTE() {
    document.querySelectorAll('.cf-rte-accordion').forEach(function(rteContent) {
      const accordion = document.createElement('div');
      accordion.className = 'cf-rte-accordion';

      // Find all heading elements followed by paragraphs in the RTE content
      rteContent.querySelectorAll(':is(h1, h2, h3, h4, h5, h6)').forEach(function(question) {
        const answer = question.nextElementSibling;

        if (answer && answer.tagName === 'P') {
          // Create accordion item
          const item = document.createElement('div');
          item.className = 'cf-rte-accordion_item';

          const header = document.createElement('div');
          header.className = 'cf-rte-accordion_header';
          header.innerHTML = question.outerHTML;

          // Add arrow icon
          const icon = document.createElement('div');
          icon.className = 'cf-rte-accordion_icon';
          icon.textContent = '▶';
          header.appendChild(icon);

          const content = document.createElement('div');
          content.className = 'cf-rte-accordion_content';
          content.style.cssText = 'max-height: 0; overflow: hidden; opacity: 0; transition: max-height 0.3s ease-out, opacity 0.3s ease-out;';
          content.appendChild(answer.cloneNode(true));

          item.appendChild(header);
          item.appendChild(content);
          accordion.appendChild(item);
        }
      });

      // Replace RTE content with the created accordion
      rteContent.parentNode.replaceChild(accordion, rteContent);
    });

    // Add click event to toggle accordion items
    document.querySelectorAll('.cf-rte-accordion_header').forEach(function(header) {
      header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const item = this.parentElement;
        const arrow = this.querySelector('.cf-rte-accordion_icon');

        item.classList.toggle('active');
        
        if (item.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.opacity = '1';
          // Rotate arrow when open
          arrow.style.transform = 'rotate(90deg)';
        } else {
          content.style.maxHeight = '0';
          content.style.opacity = '0';
          // Reset arrow rotation when closed
          arrow.style.transform = 'rotate(0deg)';
        }
      });
    });
  }

  // Call the function when the document is ready
  createAccordionFromRTE();
});
