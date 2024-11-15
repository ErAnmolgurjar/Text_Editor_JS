# Editor.js - A Simple WYSIWYG Text Editor

Editor.js is a lightweight, JavaScript-based text editor that allows users to format text using common text styling options such as bold, italic, underline, and highlights, as well as adding headings and links.

## Features

- **Bold Text**: Toggle bold formatting on and off.
- **Italic Text**: Toggle italic formatting on and off.
- **Text Highlighting**: Highlight text in yellow and remove the highlight.
- **Underline**: Toggle underline formatting on and off.
- **Ordered List**: Toggle to make ordered list.
- **Unordered List**: Toggle to make unordered list.
- **Headings**: Toggle between different heading types (e.g., H1, H2, H3).
- **Hyperlinks**: Add links to selected text by prompting the user to enter a URL.
- **Content Extraction**: Get content from the editor in both HTML and plain text formats.
- **Content Setting**: Replace editor content with custom HTML.

## Installation

To use this text editor, you can simply include the JavaScript code in your project. There is no need for any external dependencies.

1. **Download the Editor script**:

   Download the Editor script from github.
 
2. **Include the Editor script**:

   Include the downloaded script within a `<script>` tag to your html page.

   ```html
   <script src="editor.js"></script>  <!-- in src enter the location of editor.js in your project -->
   ```

3. **Add the html code for editor from editor.html**:

   Copy the HTML from editor.html and past it in your HTML where you want to add.

   ```html
   <div class="editor-box">
    <div class="btn-toolbar">
      <div class="btn-group">
        <button type="button" class="btn" data-original-title="Heading" onclick="toggleHeading('h2')"><i class="fas fa-heading"></i></button>
        <button type="button" class="btn" data-original-title="Paragraph" onclick="formatText('formatBlock', 'p')"><i class="fas fa-paragraph"></i></button>
        <button type="button" class="btn" data-original-title="Bold - Ctrl+B" onclick="toggleBold()"><i class="fas fa-bold"></i></button>
        <button type="button" class="btn" data-original-title="Italic - Ctrl+I" onclick="toggleItalic()"><i class="fas fa-italic"></i></button>
        <button type="button" class="btn" data-original-title="List" onclick="formatText('insertOrderedList')">
          <i><svg viewBox="0 0 18 18" style="float: left;height: 80%;">
            <line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"></line>
            <line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"></line>
            <line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"></line>
            <line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"></line>
            <path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"></path>
            <path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"></path>
            <path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"></path>
          </svg></i>
        </button>
        <button type="button" class="btn" data-original-title="List" onclick="formatText('insertUnorderedList')"><i class="fas fa-list"></i></button>
        <button type="button" class="btn" data-original-title="Highlight" onclick="toggleHighlight()"><i class="fas fa-highlighter"></i></button>
        <button type="button" class="btn" data-original-title="Underline" onclick="toggleUnderline()"><i class="fas fa-underline"></i></button>
        <button type="button" class="btn" data-original-title="AddLink" onclick="addLink()"><i class="fa-solid fa-link"></i></button>
      </div>
    </div>
    <div class="text-editor">
      <div class="text-editor-box" id="editorBox" contenteditable="true">
    </div>
    </div>
    </div>
   ```

4. **link editor.css file**:

   Link editor.css file in your HTML file head section.

   ```html
   <link rel="stylesheet" href="editor.css"> <!-- in href enter the location of editor.css in your project -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
   ```
   
5. **link font-awesome cdn in HTML file**:

   Link editor.css file in your HTML file head section.

   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
   ```

## Get or Set data from Editor

Here are some simple functions to get or set the data from Editor.

1. **getContentHtml()**:

   This function retrieves the HTML content inside the editor. It returns the inner HTML of the `editorBox` element.

   ```javascript
    // Use this code in your project to get the html code from editor in a hidden input name "Detailshtml":
   
   const editorBox = document.getElementById("editorBox");

    if (editorBox) {
       editorBox.addEventListener("input", function() {
          const hiddenInputHtml = document.querySelector('input[name="Detailshtml"]');
        
          if (hiddenInputHtml) {
            const htmlContent = getContentHtml();
            hiddenInputHtml.value = htmlContent;
          }
           else{
             console.log("No Input found for Html in the page");
           }
      });
    }
   else{
     console.log("No editor in the page");
   }
   ```
2. **getContentTxt()**:

    This function retrieves the plain text content inside the editor. It returns the inner text of the editorBox element, stripping out any HTML tags.

   ```javascript
    // Use this code in your project to get the plain text from editor in a hidden input name "Details":
   
   const editorBox = document.getElementById("editorBox");

    if (editorBox) {
       editorBox.addEventListener("input", function() {
          const hiddenInput = document.querySelector('input[name="Details"]');
        
          if (hiddenInputHtml) {
            const textContent = getContentTxt();
            hiddenInput.value = textContent;
          }
           else{
             console.log("No Input found for text in the page");
           }
      });
    }
   else{
     console.log("No editor in the page");
   }
   ```

3. **setContent(htmlContent)**:

    This function is used to set the content to the editorBox element.

   ```javascript
    // Use this code in your project to set the data in your editor using js:
     var HtmlContent = "<h2>Hello! I am <strong>anmol</strong></h2>"
     setContent(HtmlContent);
   ```
## Support
For any help or further inquiries, feel free to connect with me:
**[Portfolio URL](https://eranmolgurjar.github.io/)**
