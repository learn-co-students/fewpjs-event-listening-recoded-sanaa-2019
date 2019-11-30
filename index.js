function addingEventListener(ev) {
  let input = document.getElementById('input');
  input.addEventListener(ev,function(event) {
  alert('I was clicked!');
});
}


addingEventListener('click');