function formatParagraph() {
    const paragraphInput = document.getElementById('paragraph');
    const underlinedWordsInput = document.getElementById('underlinedWords');
    if(paragraphInput.value.trim() === ""){
        alert("Please Write Something!!!");
        return;
    }

    const paragraph = paragraphInput.value.replace(/\n/g, '<br/>');
    const underlinedWords = underlinedWordsInput.value.split(',').map(word => word.trim()).filter(Boolean);

    const formattedParagraph = underlinedWords.reduce((result, word) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        return result.replace(regex, `<u>${word}</u>`);
    }, paragraph);

    document.getElementById('formatted-text-result').innerHTML = formattedParagraph;
    $(".button-copy").css("display","block")
}

function copyToClipboard() {
    var resultDiv = $("#formatted-text-result");
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = resultDiv.innerHTML;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Result copied to clipboard!');
}