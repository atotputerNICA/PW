$(document).ready(function() {
  $('#select-country').niceSelect();
  $("#select-language").niceSelect();
  $('#select-country').empty();

  $('#select-country').append('<option selected="true" disabled>Choose Country</option>');
  // $('#select-country').prop('selectedIndex', 0);

  // Populate dropdown with list of provinces
  // console.log(countries);
  countries.forEach(function (entry, key) {
      console.log(key);
      $('#select-country').append($('<option></option>').val(entry.code).text(entry.name));
  })
  // $('#select-country').change();
  console.log( $('#select-country').html());

});
