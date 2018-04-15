var listUl = document.getElementsByTagName('ul')[0];

var listLi = listUl.getElementsByTagName('li');

for (var i = 0; i < listLi.length; i++) {
  var li = listLi[i];

  var span = document.createElement('span');
  li.insertBefore(span, li.firstChild);
  span.appendChild(span.nextSibling); 
}

var tree = document.getElementsByTagName('ul')[0];

tree.addEventListener("click", function(event) {
  var target = event.target;

  if (target.tagName != 'SPAN') {
    return; 
  }
  var li = target.parentNode; 
  var children = target.parentNode.lastElementChild;
  console.log(children);
  if (!children) return; 
  children.hidden = !children.hidden;
})



