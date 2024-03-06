function formatText(command, value = null) {
    document.execCommand(command, false, value);
}

function toggleBold() {
    var isBold = document.queryCommandState('bold');
    if (isBold) {
        document.execCommand('bold', false, null);
    } else {
        document.execCommand('bold', false, null);
    }
}

function toggleItalic() {
    document.execCommand('italic');
}

function toggleHighlight() {
    var isHighlighted = document.queryCommandValue('backColor') === 'rgb(255, 255, 0)';
    if (isHighlighted) {
        formatText('hiliteColor', 'transparent');
    } else {
        formatText('hiliteColor', 'yellow');
    }
}

function toggleUnderline() {
    document.execCommand('underline');
}

function toggleHeading(headingType) {
    var currentBlock = document.queryCommandValue('formatBlock');
    if (currentBlock.toLowerCase() === headingType) {
        formatText('formatBlock', 'p'); // Set to paragraph if already a heading
    } else {
        formatText('formatBlock', headingType);
    }
}

function addLink() {
    var url = prompt("Enter the URL:");
    if (url) {
        document.execCommand('createLink', false, url);
    }
}

function getContentHtml() {
    var content = document.getElementById('editorBox').innerHTML;
    return content;
}

function getContentTxt() {
    var content = document.getElementById('editorBox').innerText;
    return content;
}

function setContent(htmlContent) {
    document.getElementById('editorBox').innerHTML = htmlContent;
}