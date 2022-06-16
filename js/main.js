const btn = document.querySelector('#color');

btn.addEventListener('click', () => {
    var colors = ['1', '2', '3', '4', '5', '6', '7', '8', '9','A', 'B', 'C', 'D', 'E', 'F'];

    let ranCol_1 = Math.floor(Math.random()*colors.length);
    let ranCol_2 = Math.floor(Math.random()*colors.length);
    let ranCol_3 = Math.floor(Math.random()*colors.length);
    let ranCol_4 = Math.floor(Math.random()*colors.length);
    let ranCol_5 = Math.floor(Math.random()*colors.length);
    let ranCol_6 = Math.floor(Math.random()*colors.length);

    var tag = '#'+(colors[ranCol_1])+(colors[ranCol_2])+(colors[ranCol_3])+(colors[ranCol_4])+(colors[ranCol_5])+(colors[ranCol_6]);

    document.querySelector('h2').innerHTML = (tag);
    document.querySelector('body').style.backgroundColor = (tag);
})