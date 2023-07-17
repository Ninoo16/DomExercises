const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redTxt = document.createElement('p');
redTxt.classList.add('redTxt');
redTxt.textContent = 'hi im red!';
redTxt.style.color = 'red'

container.appendChild(redTxt);

const blueH3 = document.createElement('h3')
blueH3.textContent = 'hi i am a blue h3';
blueH3.style.color ='blue';

container.appendChild(blueH3);

const div = document.createElement('div');
div.classList.add('grow');
div.setAttribute('style', 'border: black; background: pink;');


const otherH1 = document.createElement('h1');
otherH1.textContent = 'im in div';

div.appendChild(otherH1);

const anotherP = document.createElement('p');
anotherP.textContent = 'ME TOO!';

div.appendChild(anotherP);

container.appendChild(div);

const btn = document.querySelector('#btn');
btn.onclick = (event) => alert('hello world');

const btnn = document.querySelector('#btnn');

btnn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });




