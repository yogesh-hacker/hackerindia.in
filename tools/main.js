function formatParagraph() {
    const paragraphInput = document.getElementById('paragraph');

    if (paragraphInput.value.trim() === "") {
        alert("Please Write Something!!!");
        return;
    }

    // Convert new lines to <br/>
    const formattedParagraph = paragraphInput.value.replace(/\n/g, '<br/>');

    document.getElementById('formatted-text-result').innerHTML = cleanText(formattedParagraph);
    $(".button-copy").css("display", "block");
}

function cleanText(text) {
    const replacements = {
        "“": '"', "”": '"',
        "‘": "'", "’": "'",
        "\n\n": "<br><br>",
        "\n": " ",
        "\\": " | ",
        "/": " | ",
        "  ": " ",
        "…": "...",
        "*": "",
        "< | u>": "</u>",
        "< | i>": "</i>"
    };

    for (let oldText in replacements) {
        text = text.split(oldText).join(replacements[oldText]);
    }

    return text;
}

function copyToClipboard() {
    var resultDiv = $("#formatted-text-result");
    var tempTextArea = $('<textarea>');
    tempTextArea.val(resultDiv.html());
    $('body').append(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    tempTextArea.remove();
    alert('Result copied to clipboard!');
}

const paragraph = document.getElementById("paragraph");
const formatMenu = document.getElementById("formatMenu");
let startIndex = 0, endIndex = 0;

paragraph.addEventListener("mouseup", function(event) {
    const selection = paragraph.value.substring(paragraph.selectionStart, paragraph.selectionEnd).trim();

    if (selection) {
        startIndex = paragraph.selectionStart;
        endIndex = paragraph.selectionEnd;
        setTimeout(() => showFormatMenu(event.pageX, event.pageY), 10); // Delay ensures correct size calculations
    } else {
        formatMenu.style.display = "none";
    }
});

function showFormatMenu(x, y) {
    paragraph.style.userSelect = "none";
    formatMenu.style.display = "flex"; // Show to measure size
    formatMenu.style.visibility = "hidden"; // Hide it visually but keep it in layout

    const menuWidth = formatMenu.offsetWidth;
    const menuHeight = formatMenu.offsetHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Prevent right overflow
    if (x + menuWidth > screenWidth) {
        x = screenWidth - menuWidth - 10;
    }
    if (x < 10) x = 10; // Prevent left overflow

    // Prevent bottom overflow
    y += 30;
    if (y + menuHeight > screenHeight) {
        y = screenHeight - menuHeight - 10;
    }

    formatMenu.style.left = `${x}px`;
    formatMenu.style.top = `${y}px`;
    formatMenu.style.visibility = "visible"; // Now make it visible
}

function applyFormat(type) {
    if (startIndex === endIndex) return;
    let before = paragraph.value.substring(0, startIndex);
    let selectedText = paragraph.value.substring(startIndex, endIndex);
    let after = paragraph.value.substring(endIndex);
    
    switch (type) {
        case 'bold': selectedText = `<b>${selectedText}</b>`; break;
        case 'italic': selectedText = `<i>${selectedText}</i>`; break;
        case 'underline': selectedText = `<u>${selectedText}</u>`; break;
        case 'highlight': selectedText = `<mark>${selectedText}</mark>`; break;
    }
    paragraph.value = before + selectedText + after;
    formatMenu.style.display = "none";
    paragraph.setSelectionRange(startIndex + selectedText.length, startIndex + selectedText.length);
    paragraph.focus();
}

// Hide menu when clicking outside
document.addEventListener("click", (event) => {
    if (!formatMenu.contains(event.target)) {
        formatMenu.style.display = "none";
    }
});

let isSelecting = false;

// Hide menu when selection starts
paragraph.addEventListener("touchstart", () => {
    isSelecting = true;
    formatMenu.style.display = "none";
});

// Detect selection change (works for mobile selection handles)
document.addEventListener("selectionchange", () => {
    if (!isSelecting) {
        const selection = paragraph.value.substring(paragraph.selectionStart, paragraph.selectionEnd).trim();
        if (selection) {
            startIndex = paragraph.selectionStart;
            endIndex = paragraph.selectionEnd;
            const rect = paragraph.getBoundingClientRect();
            showFormatMenu(rect.left + window.scrollX, rect.top + window.scrollY);
        }
    }
});

// Show menu only when selection is complete
paragraph.addEventListener("touchend", () => {
    setTimeout(() => isSelecting = false, 100);
});