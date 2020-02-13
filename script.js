var clicks = 0;

/* This has bad style. Fix magic numbers. */
function toggle_second_screen() {
  var instructions = document.getElementsByTagName("EM")[0];
  if (clicks == 0) {
    instructions.style['text-transform'] = 'uppercase';
  } else if (clicks == 1) {
    instructions.style['text-decoration'] = 'underline';
  } else {
    var screen2 = document.getElementById("second_screen");
    screen2.style.display = "block";
  }
  clicks++;
}

function toggle_smiley() {
  var button = document.getElementById('smiley');
  if (button.checked) {
    var response = document.getElementById('smiley_response');
    response.style.display = "block";
    list_of_ids = ['meh_response', 'frowny_response'];
    set_display_to_none(...list_of_ids);
  }
}

function toggle_frowny() {
  var button = document.getElementById('frowny');
  if (button.checked) {
    var response = document.getElementById('frowny_response');
    response.style.display = "block";
    list_of_ids = ['meh_response', 'smiley_response'];
    set_display_to_none(...list_of_ids);
  }
}

function toggle_meh() {
  var button = document.getElementById('meh');
  if (button.checked) {
    var response = document.getElementById('meh_response');
    response.style.display = "block";
    list_of_ids = ['smiley_response', 'frowny_response'];
    set_display_to_none(...list_of_ids);
  }
}

function set_display_to_none(id1, id2) {
  document.getElementById(id1).style.display = "none";
  document.getElementById(id2).style.display = "none";
}