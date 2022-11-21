const firstString = "JavaScript is the programming language of the Web. The overwhelming majority of modern websites use JavaScript, and all modern web browsers — on desktops, game consoles, tablets, and smart phones —  include JavaScript interpreters, making JavaScript the most ubiquitous programming language in history. JavaScript is part of the triad of technologies that all Web  developers must learn: HTML to specify the content of web pages, CSS to specify the presentation of web pages, and JavaScript to specify the behavior of web pages."
const n = firstString.length;
let result = 0; 

for (let i=0; i <= n; i++) {
    if (firstString[i] == ' ') {
        result += 1; 
    }     
}

console.log('В тексте ' + result + 'символов пробел')