const labels = document.querySelectorAll('.form label');

// labels.forEach(function (lab, i) {
    
//     lab.innerHTML = lab.innerText.split('').map(function (letter, ind) {
//         `<span style="transition-delay: ${ind * 50}ms">${letter}</span>`
//     }).join('');
// })


labels.forEach(function (lab, i) {
    lab.innerHTML = lab.innerText
    .split('')
    .map((letter,ind) => `<span class="spaa" style="transition-delay: ${ind * 50}ms">${letter}</span>`)
    .join('')
})









