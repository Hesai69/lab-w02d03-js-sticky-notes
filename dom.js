createContainer();

function createContainer(){
  var container = document.createElement('div');
  container.classList.add('container');
  document.querySelector('#main').appendChild(container);
  createButton();
}

function createButton(){
  var button = document.createElement('button');
  var div = document.createElement('div');
  button.textContent = 'Add A Note';
  button.classList.add('button');
  div.classList.add('button');
  div.appendChild(button);
  document.querySelector('.container').appendChild(div);
  button.addEventListener('click', createNote);
}

function createNote(evt){
  var note = document.createElement('div');
  var p = document.createElement('p');
  var time = document.createElement('p');

  note.classList.add('note');
  time.classList.add('time');
  time.textContent = timeStamp();
  note.appendChild(time);
  // Editable note <p>
  p.setAttribute('contenteditable', 'true');
  // p.classList.remove('time');
  p.classList.add('noteText');
  p.textContent = 'Edit this text';
  note.appendChild(createRemove());
  note.appendChild(p);
  document.querySelector('.container').appendChild(note);
  updateNotes(noteCounter());
}

function createRemove(){
  var remove = document.createElement('h6');
  var text = document.createElement('span');
  text.classList.add('remove');
  text.textContent = 'x';
  remove.appendChild(text);
  text.addEventListener('click', removeNote);
  return remove;
}

function removeNote(evt){
  evt.target.parentNode.parentNode.remove();
  updateNotes(noteCounter());
}

function noteCounter(){
  return document.querySelectorAll('.note').length;
}

function updateNotes(count){
  var counter = document.querySelector('.counter');
  counter.textContent = count;
}

function timeStamp(){
  return Date().slice(0,21);
}
