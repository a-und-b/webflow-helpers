# Webflow-Helpers

A collection of JavaScript helpers to enhance your Webflow projects. This library includes scripts for creating rich text accordions, generating tables of contents, and collecting external links into a reference list.

## Table of Contents

- [Features](#features)
  - [Rich Text Accordion](#rich-text-accordion)
  - [TOC Generator](#toc-generator)
  - [External Links Collector](#external-links-collector)
- [Installation](#installation)
- [Usage](#usage)
  - [Rich Text Accordion Usage](#rich-text-accordion-usage)
  - [TOC Generator Usage](#toc-generator-usage)
  - [External Links Collector Usage](#external-links-collector-usage)
- [Integrating with Webflow](#integrating-with-webflow)
- [Build](#build)
- [Deployment](#deployment)
- [License](#license)

## Features

### Rich Text Accordion

A script that converts rich text (RTE) content into an accordion, allowing for a clean and interactive FAQ section or collapsible content areas.

### TOC Generator

Automatically generates a table of contents (TOC) based on the headings in your content, complete with smooth scrolling and active state highlighting.

### External Links Collector

Collects all external links from specified sections of your article and compiles them into a numbered reference list at the end of the page.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/webflow-helpers.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd webflow-helpers
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

### Rich Text Accordion Usage

1. **Include the script:**

   Include the `rte-accordion.js` script in your Webflow project or use the compiled `webflow-helpers.min.js` from the `dist` folder.

2. **Add the class to your RTE:**

   Add the class `cf-rte-accordion` to any rich text element you want to convert into an accordion.

3. **Structure your content:**

   Use heading tags (`<h1>` to `<h6>`) for the questions and place the answers in block elements (e.g., `<p>`, `<div>`) immediately following the questions.

#### Example

```html
<div class="cf-rte-accordion">
  <h1>Question 1</h1>
  <p>Answer to question 1.</p>
  <h2>Question 2</h2>
  <p>Answer to question 2.</p>
  <h3>Question 3</h3>
  <p>Answer to question 3.</p>
</div>
```

### TOC Generator Usage

1. **Include the script:**

   Include the `toc-generator.js` script in your Webflow project or use the compiled `webflow-helpers.min.js` from the `dist` folder.

2. **Add the TOC container:**

   Insert a container element with the class `cf-toc_component` where you want the TOC to appear.

3. **Tag your headings:**

   Add `[TOC]` at the end of any heading (`<h1>` to `<h6>`) you want included in the TOC.

#### Example

```html
<div class="toc-container">
  <div class="cf-toc_component"></div>
</div>

<div class="content-container">
  <div class="article">
    <h2>Introduction [TOC]</h2>
    <p>Content of introduction.</p>

    <h3>Background [TOC]</h3>
    <p>Content of background.</p>

    <h2>Installation [TOC]</h2>
    <p>Content of installation.</p>

    <h2>Usage [TOC]</h2>
    <p>Content of usage.</p>

    <h2>Conclusion</h2>
    <p>Content of conclusion.</p>
  </div>
</div>
```

### External Links Collector Usage

1. **Include the script:**

   Include the `references-collector.js` script in your Webflow project or use the compiled `webflow-helpers.min.js` from the `dist` folder.

2. **Add classes to your sections:**

   Apply the class `article-section_component` to each section of your article containing external links.

3. **Create a references container:**

   Add a `<div>` with the id `references` where you want the list of external links to appear.

#### Example

```html
<div class="article-section_component">
  <h2>Introduction to Web Development</h2>
  <p>
    Web development includes technologies like
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>,
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>, and
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>.
  </p>
</div>

<!-- Other sections -->

<div id="references"></div>
```

## Integrating with Webflow

To use these helpers in your Webflow project, follow these steps:

1. **Build the project:**
   Run `npm run build` to generate the `webflow-helpers.min.js` file in the `dist` directory.

2. **Upload the script:**
   - In Webflow, go to your project settings.
   - Navigate to the "Custom Code" tab.
   - In the "Footer Code" section, add the following script tag:

     ```html
     <script src="https://your-server.com/path/to/webflow-helpers.min.js"></script>
     ```

   Replace `https://your-server.com/path/to/webflow-helpers.min.js` with the actual URL where you've hosted the script file.

3. **Add necessary HTML elements:**
   - For the Rich Text Accordion: Add the class `cf-rte-accordion` to your Rich Text elements.
   - For the TOC Generator: Add a div with the class `cf-toc_component` where you want the TOC to appear.
   - For the External Links Collector: Add the class `article-section_component` to your article sections and include a div with the id `references` where you want the reference list to appear.

4. **Custom styling:**
   You can add custom CSS in Webflow's designer to style the generated elements:
   - `.cf-rte-accordion` for the accordion container
   - `.cf-toc_component` and `.cf-toc_list` for the table of contents
   - `.cf-references-collector_list` for the external links list

5. **Test and publish:**
   Preview your Webflow site to ensure the scripts are working as expected, then publish your site.

Remember to update the script URL whenever you make changes to the helpers and redeploy the script file.

## Build

To build the project and generate the `webflow-helpers.min.js` file:

```bash
npm run build
```

This will use Webpack to compile and minify the JavaScript files into a single script located in the `dist` directory.

## Deployment

To deploy the built files to your FTP server, set up a `.env` file in the project root with your FTP credentials:

```env
FTP_USER=your_ftp_username
FTP_PASSWORD=your_ftp_password
FTP_HOST=your_ftp_host
FTP_PORT=21
FTP_REMOTE_ROOT=/path/on/ftp/server
```

Then run:

```bash
npm run deploy
```

This will upload the contents of the `dist` directory to your FTP server.

## License

This project is licensed under the MIT License.

---

Feel free to contribute to this project by submitting pull requests or opening issues.