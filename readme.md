# Webflow-Helpers

A collection of helpers for Webflow projects.

## Rich Text Accordion

A simple script to convert rich text (RTE) content into an accordion.

### Usage

Everywhere you have a rich text field, add a class of `rte-accordion` to the container. You can use any heading tags for the questions. The answers can be any block element that follows the question.

### Example

```html
<div class="rte-accordion">
    <h1>Question 1</h1>
    <p>Answer to question 1</p> 
    <h2>Question 2</h2>
    <p>Answer to question 2</p>
    <h3>Question 3</h3>
    <p>Answer to question 3</p>
</div>
```
