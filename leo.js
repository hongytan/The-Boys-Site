document.querySelector('#page_leo').style.backgroundColor = 'red';

function blink() {
    let body = document.querySelector('#page_leo');
    if (body.style.backgroundColor === 'red')
    {
      body.style.backgroundColor = 'orange';
    }
    else if (body.style.backgroundColor === 'orange')
    {
      body.style.backgroundColor = 'yellow';
    }
    else if (body.style.backgroundColor === 'yellow')
    {
      body.style.backgroundColor = 'green';
    }
    else if (body.style.backgroundColor === 'green')
    {
      body.style.backgroundColor = 'blue';
    }
    else if (body.style.backgroundColor === 'blue')
    {
      body.style.backgroundColor = 'purple';
    }
    else if (body.style.backgroundColor === 'purple')
    {
      body.style.backgroundColor = 'red';
    }
}

// Blink every 500ms
window.setInterval(blink, 1000);
