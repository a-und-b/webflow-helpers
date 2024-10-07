$(document).ready(function() {
  // Function to create accordion from RTE content
  function createAccordionFromRTE() {
    $('.rte-accordion').each(function() {
      var $rteContent = $(this);
      var $accordion = $('<div class="accordion"></div>');

      // Find all heading elements followed by paragraphs in the RTE content
      $rteContent.find(':header').each(function() {
        var $question = $(this);
        var $answer = $question.next('p');

        if ($answer.length) {
          // Create accordion item
          var $item = $('<div class="accordion-item"></div>');
          var $header = $('<div class="accordion-header"></div>').html($question.clone().wrap('<div>').parent().html());
          var $content = $('<div class="accordion-content" style="display: none;"></div>').append($answer);

          $item.append($header).append($content);
          $accordion.append($item);
        }
      });

      // Replace RTE content with the created accordion
      $rteContent.replaceWith($accordion);
    });

    // Add click event to toggle accordion items
    $('.accordion-header').click(function() {
      var $header = $(this);
      var $content = $header.next('.accordion-content');
      var $item = $header.parent('.accordion-item');

      $item.toggleClass('active');
      $content.slideToggle(300);
    });
  }

  // Call the function when the document is ready
  createAccordionFromRTE();
});
