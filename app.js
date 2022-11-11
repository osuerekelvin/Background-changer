let change = document.getElementById('change')

let btn = document.getElementById('btn')

let arr = ['yellow', 'red', 'blue', 'brown', 'pink', 'purple']


btn.addEventListener('click', () =>{

    let randomNumber = Math.floor(Math.random() * 7)
    console.log(randomNumber);
    change.textContent = `You got ${arr[randomNumber]}`
    document.body.style.backgroundColor = arr[randomNumber];

    switch(arr[randomNumber]){
        case 'yellow':
            change.style.fontSize = '32px';
            break;
        case 'red': 
        change.style.fontSize = '42px';
            break;
        case 'blue':
            change.style.fontSize = '52px';
            break;
        case 'brown':
            change.style.fontSize = '62px'; 
            break;
        case 'pink':
            change.style.fontSize = '72px';
             break;
         case 'purple':
            change.style.fontSize = '82px';
            break;

    }
});


