# Intro To CSS

## What is CSS?
<ul> <li>CSS is a language for specifying how documents are presented to users — how they are styled, laid out, etc.</li> <li>A document is usually a text file structured using a markup language — HTML is the most common markup language, but you may also come across other markup languages such as SVG or XML.</li> <li></li> <ul>

<p>A document is usually a text file structured using a markup language — HTML is the most common markup language, but you may also come across other markup languages such as SVG or XML.

Presenting a document to a user means converting it into a form usable by your audience. Browsers, like Firefox, Chrome, or Edge , are designed to present documents visually, for example, on a computer screen, projector or printe</p>

<p>CSS is a rule-based language — you define rules specifying groups of styles that should be applied to particular elements or groups of elements on your web page. For example "I want the main heading on my page to be shown as large red text."</p> 
<ul> Ex. h1 {
    color: red;
    font-size: 5em;
} </ul>

## Adding CSS to your document

<p>The very first thing we need to do is to tell the HTML document that we have some CSS rules we want it to use. There are three different ways to apply CSS to an HTML document that you'll commonly come across, however, for now, we will look at the most usual and useful way of doing so — linking CSS from the head of your document.

Create a file in the same folder as your HTML document and save it as styles.css. The .css extension shows that this is a CSS file.

To link styles.css to index.html add the following line somewhere inside the <head> of the HTML document:</p>

<ul> Ex. <link rel="stylesheet" href="styles.css"> </ul>
<p>This <link> element tells the browser that we have a stylesheet, using the rel attribute, and the location of that stylesheet as the value of the href attribute. You can test that the CSS works by adding a rule to styles.css. Using your code editor add the following to your CSS file:</p>
