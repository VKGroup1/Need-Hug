window.onload = function() {
    var teddySound = document.getElementById("teddy-sound");
    teddySound.play();

    var bgMusic = document.getElementById("bg-music");
    bgMusic.play();

    // Handwritten love letter effect
    var loveLetter = document.getElementById("love-letter");
    var loveMessage = `"My love for you grows more each day, Chrish 💜."`;

    let i = 0;
    function typeLetter() {
        if (i < loveMessage.length) {
            loveLetter.innerHTML += loveMessage.charAt(i);
            i++;
            setTimeout(typeLetter, 100);
        }
    }
    typeLetter();
}
