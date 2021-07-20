# HTML
#### About HTML
<p></p>

#### HTML Tags and How To Push
<ul> h1/h1 - h6/h6 are all header tags (from most important to least important) <li>

p/p - paragraph tag <li>

br - used for line breaks in paragraphs <li>

em/em - stands for emphasis <li>

strong/strong - bolds the text <li>

strong/strong and em/em can be used within each other <li>

ul/ul stands for unordered list <li>

li/li stands for list item, whenever you want to add to list, you should insert this tag inside the <li>

ul/ul tag
Ex. <ul> Grocery List
                <li>
          </ul>

ol/ol - stands for ordered list or numbered list. (You still use <li></li> tag) <li>

img - stands for image tag, (needs the url).
       - Need to add an attribute <li> </ul>

  <p>ex. <img src=“”> <br>
       - Use alt text after inserting the source     image. Alt text is basically describing the picture.<br>
       -You can also use width=“” and height=“” to vary the size of your picture. (always only change one not both)<br>
(Must do this and all above before closing <img>tag)</p>

#### Terminal Commands
<p>git push - updates notes <br>

mkdir - which means make directory is a command that creates a new directory <br>

cd - which means change directories is a command that switches directories <br>

ls - which means list <br></p>

#### Steps to Pushing
<ol> <li> git add . <li>
    <li> git commit -m “edit growth mindset notes” <li>
    <li> git config space dash dash global user.email “jonesguy333@gmail.com” <li>
    <li> git config space dash dash global user.name “Colin Jones”<li>
    <li> git commit -m “edit growth mindset notes” <li>
    <li> git push <li>
    <li> git push dash dash force, only if push doesn't go through <li>
</ol>

# CSS

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

# JavaScript

<p>JavaScript "JS" for short is a full-fledged dynamic programming language that can add interactivity to a website. It was invented by Brendan Eich co-founder of the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation.</p>

##### How to add you JavaScript to your html file
<p> <script src="scripts/main.js"></script> This is doing the same job as the <link> element for CSS. It applies the JavaScript to the page, so it can have an effect on the HTML.</p>


## Java Script Statements
  ### console.log("Hello World");
    <ul> <li>console.log is the function of the statement</li> <br>
    <li>("Hello World") completes the statement</li> <br> 
    <li>It is reccomended that you use semi-colons to close out statements even though it is not needed for the JavaScript language. It helps the text easier to read for the code.</li> <br> </ul>
<strong> <p>JavaScript reads line to line, left to right, top to bottom. This means it is an interperative language.<p> </strong>

## Variables of JavaScript
  ### Definition of a Variable
    <ul> <li>A variable is a container that stores data, and these containers are named by the coder.</li> </ul>
  ### Steps to Creating a Variable
    <ul> <li>You must create a variable declaration.</li> </ul>
  <p>Ex. var x; //variable decalration<br>
     x = 20; // variable assignment<br> </p> <ul> <li>Must use quotes for plain text.</li> <br> <li>Variables must start with s letter and cannot have a space.</li> <br> <li>It can however contain a small selection of special characters.</li> <br> <li>Variable names should be 
     logical, or in other words make sense.</li> <br> </ul>

### Conditional Statements
  <ul> <li>A conditional statement is a yes or no question.</li> <li>The conditional statement must be put inside of the parentheses.</li> <ul>
  <p>Ex. if(conditional ==10){

 } </p>

 ## JavaScript Expressions and Operators
  ### Operators
<ol> <li>Assignment Operators</li> <br>
     <li>Comparison Operators</li> <br>
     <li>Arithmetic Operators</li> <br>
     <li>Bitwise Operators</li> <br>
     <li>Logical operators</li> <br>
     <li>String Operators</li> <br>
     <li>Conditional <em>ternary</em> Operators</li> <br>
     <li>Comma Operators</li> <br>
     <li>Unary Operators</li> <br>
     <li>Relational Operators</li> <br> </ol>
     <p>JavaScript has both binary and unary operators, and one special ternary operator, the conditional operator. A binary operator requires two operands, one before the operator and one after the operator.<br> Ex. 3+4 or x*y <br> A unary operator requires a single operand, either before or after the operator.<br> Ex. x++ or ++x<br> </p>
     
  #### Examples of an Operand and a Operator
  <ul> <li>Operand Ex. 1 2 3 4...<li> <br> <li>Operator Ex. ++,+, -, /, =</li> </ul>

## JavaScript Loops
  ### Statements
<ol> <li>For</li> <br>
     <li>Do... While</li> <br>
     <li>While</li> <br>
     <li>Labled</li> <br>
     <li>Break</li> <br>
     <li>Continue</li> <br>
     <li>For.. In</li> <br>
     <li>For... Of</li> <br> </ol>
