// just querying the DOM...like a boss!
var links = document.querySelectorAll('.itemLinks');
var wrapper = document.querySelector('#wrapper');

//setup up the event listners
for (let i = 0; i < links.length; i++) {
  // provides a pointer to the currently displayed item
  var activeLink = 0;
  const link = links[i];
  link.addEventListener('click', setClickedItem, false);
  // identify the item for the activeLink
  link.itemID = i;
}

// set first item as active
links[activeLink].classList.add('active');

function setClickedItem(e) {
  removeActiveLinks();
  var clickedLink = e.target;
  activeLink = clickedLink.itemID;
  changePosition(clickedLink);
}

function removeActiveLinks() {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }
}

// Handle changing the slider position as well as ensure
// the correct link is highlighted as being active
function changePosition(link) {
  var position = link.getAttribute('data-pos');
  var translateValue = 'translate3d(' + position + ', 0px, 0)';
  wrapper.style.transform = translateValue;
  link.classList.add('active');
}
