document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        switchDivTextarea();
    } else if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        switchTextareaDiv();
    }
});


function switchDivTextarea(){
    var displayDiv = document.getElementById('displayDiv');
    var editTextArea = document.getElementById('editTextArea');
    var text = displayDiv.innerText;

    displayDiv.style.display = 'none';
    editTextArea.style.display = 'block';
    editTextArea.value = text;
    editTextArea.focus();
}


function switchTextareaDiv(){
    var displayDiv = document.getElementById('displayDiv');
    var editTextArea = document.getElementById('editTextArea');
    var newText = editTextArea.value;

    displayDiv.innerText = newText;
    displayDiv.style.display = 'block';
    editTextArea.style.display = 'none';
}

