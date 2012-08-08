Drupal.behaviors.webform_multifile = function (context) {

  // Add the extra brakets to all the Multifile fields
  $("input[type=file].multi").each(function(){
    var $field = $(this);
    var newname = $field.attr('name') + '[]';
    if ($.browser.msie === true) {
      $field.replaceWith($($field.get(0).outerHTML.replace(/name=\w+/ig, 'name=' + newname)));
    }
    else {
      $field.attr('name', newname);
    }
  });

  // Re-initialize multifile fields with the proper settings
  if(typeof MultiFile_fields !== 'undefined'){
    for(var i=0; i<MultiFile_fields.length; i++){
      $('input[type=file].multi.'+MultiFile_fields[i].id).MultiFile(MultiFile_fields[i].properties);
    }
  }

  
}
