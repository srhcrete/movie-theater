function updateElementContents(element, contents) {
  var htmlString = '';

  contents = [].concat(contents);

  element.hide().empty();

  htmlString = contents.map(function(contentItem) {
    return '<p><span class="type">' + contentItem + '</span></p>';
  }).join('');

  element.append(htmlString);

  element.show();
}

window.utils = {
  updateElementContents: updateElementContents
};
