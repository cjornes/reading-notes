### Structure web pages with HTML
#### Process & Design
* Every website should be designed for the **target** audience , you should determine **who** people will visit your website and **why** and **what** they need , and ask yourself set of questions to make determine the target more easily.

* should determine the **sitemap** to make the designing step more easily.that allow you to plan the structure of a site
![sitemap img](sitemap.png)

* **WireFrames** A wireframe is a simple sketch of the key information that needs to go on each page of a site. It shows the hierarchy of the information and how much space it might require.

 ![WireFrames](WireFrames.png)

 * **manage the content to** Organizing and prioritizing information on a page helps users understand its importance and what order to read it in.

 * **Visual hierarchy**  You can use contrast (size, color ,style) to create a visual hierarchy that gets across your key message and helps users find what they are looking for.

 * **grouping and Similarity** organize visual elements into groups (Proximity,Closure,White Sp ace,Continuance,color,Borders)

 * **Designing Navigation** helps people find where they want to go and understand what your site is about and how it is organized (*Concise,Clear,Selective,Context,Interactive,Consistent*)


#### HTML5 Layout
* HTML5 introduces a new set of elements that allow you to divide up the parts of a page. The names of these elements indicate the kind of content you will find in them.
     1. `<header>`,`<footer>`The main header or footer that appears at the top or bottom of every page on the site.
     2. `<nav>` navigation bar contain the main links (pages) on your website
     3. `<section>`element groups related content together, and typically each section would have its own heading.
     4. `<aside>`When the `<aside>` element is used inside an `<article>` element, it should contain information that is related to the article ,When the `<aside> `element is used outside of an `<article>` element, it acts as a container for content that is related to the entire page
     5. `<article>` container for any section of a page that could stand alone and potentially be syndicated.
     6. `<hgroup>` to group together a set of one or more `<h1>` through `<h6>` elements.
     7. `<figure>` contain images, Videos, Graphs,Diagrams, Code samples ,Text that supports the main body of an article.
     8. `<figcaption>` which provides a text decription for the content of the` <figure>` element.
     9. ` <div>` element will remain an important way to group together related elements.

* Older browsers that do not understand HTML5 elements need to be told which elements are block-level elements.

####  Extra Markup
1. `<! DOCTYPE ......>` to tell a browser which version of HTML the page is using.
3. `<!-- -->` make a comment are not visible to users in the main browser window in HTML `<!-- comment goes here -->`.
3. **id** attribute used to uniquely identify that element from other elements on the page. Its value should start with a letter or an underscore (not a number or any other character).
4. **class** attribute identify several element as being different from the other elements on the page.
5. **BLOCK** ELEMENT start on a new line in the browser window (`<p>`, `<h1>`).
6. **INLINE** ELEMENT appear to continue on the same line as their neighbouring elements(`<span>` , `<a>`).
7. `<span>` element acts like an inline equivalent of the `<div>` element. It is used to either:Contain a section of text where there is no other suitable element to differentiate it from its surrounding text , Contain a number of inline elements The most common reason why people use `<span> ` elements is so that they can control the
appearance of the content of these elements using CSS.
8. `<iframe>` common use to embed a Google Map into a page. `src` The src attribute specifies the URL of the page to show in the frame. `height` The height attribute specifies the height of the iframe in pixels. `width` The width attribute specifies the width of the iframe in pixels.`scrolling`indicates whether the iframe should have scrollbars or not ,`frameborder` indicates whether the frame should have a border or not. `seamless`where crollbars
are not desired.

9. special symbols 
![special symbols](shortcut.png)
