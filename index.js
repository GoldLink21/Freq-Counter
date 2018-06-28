
document.getElementById("countButton").onclick = function() {
    var typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");

    letterCounts = {};

    //Counts letters
    for(let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        if(letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        }else{
            letterCounts[currentLetter]++;
        }
    }

    var words = typedText.split(/\s/);
    wordCounts={};

    //To count words
    for(let i = 0; i < words.length; i++) {
        currentWord = words[i];
        if(wordCounts[currentWord] === undefined) {
            wordCounts[currentWord]=1;
        }else{
            wordCounts[currentWord]++;
        }
    }

    //Clears the pannel so clicking the button again clears what was there before
    replaceChild('lettersDiv');
    replaceChild('wordsDiv');

    for(letter in letterCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }
    
    for(word in wordCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");
        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);
    }

 } 

function replaceChild(id){
    document.body.removeChild(document.getElementById(id));
    var div= document.createElement('div');
    div.id=id;
    document.body.appendChild(div);
}
 