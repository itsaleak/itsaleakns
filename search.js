function search() {
  // Declare variables
  var input, filter, sections, section, text, i, j, txtValue;
  input = document.getElementById('searchBar');
  filter = input.value.toUpperCase();
  sections = document.querySelectorAll('section');

  // Loop through all sections and hide those who don't match the search query
  for (i = 0; i < sections.length; i++) {
    section = sections[i];
    text = section.getElementsByTagName('*');
    let matchFound = false;

    // Check all elements in the section for a match
    for (j = 0; j < text.length; j++) {
      if (text[j].textContent || text[j].innerText) {
        txtValue = text[j].textContent || text[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          matchFound = true;
          break;
        }
      }
    }

    // Show or hide the section based on the search result
    if (matchFound) {
      section.style.display = "";
    } else {
      section.style.display = "none";
    }
  }
}
