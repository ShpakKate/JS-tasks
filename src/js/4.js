document.querySelector('.b-1').addEventListener('click', () => {
    
    let a = +document.querySelector('.i-1').value;
    let b = +document.querySelector('.i-2').value;
    let sum = a + b;

    document.querySelector('.out').innerHTML = sum;
})