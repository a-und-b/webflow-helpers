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

## External Links Collector

A script that collects external links from article sections and creates a reference list.

### Usage

Add the class `cf-references-collector_section` to each section of your article. The script will automatically collect all external links within these sections and create a numbered reference list at the end of the page.

### Example

```html
<div class="article-section_component">
    <h2>Introduction to Web Development</h2>
    <p>Web development is a broad field. It includes frontend development using technologies like <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>, and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>.</p>
</div>
```

This helper enhances the functionality of your Webflow projects by automatically creating reference lists for external links in article-style pages.
