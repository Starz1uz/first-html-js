let box = document.createElement('div')
let under = document.createElement('div')

box.classList.add('box');
under.classList.add('under');

box.append(under)
document.body.append(box)