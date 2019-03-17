$(document).ready(function() {
  let dropdown = $('#select-country');

  dropdown.empty();
  dropdown.niceSelect();
  dropdown.append('<option selected="true" disabled>Choose Country</option>');
  dropdown.prop('selectedIndex', 0);

  const path = '../js/countries.json';

  // Populate dropdown with list of provinces
  $.getJSON(path, function (data) {
    console.log(data);
    $.each(data, function (key, entry) {
      dropdown.append($('<option></option>').attr('value', entry.code).text(entry.name));
    })
  });
});
