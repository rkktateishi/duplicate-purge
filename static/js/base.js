function strip(list){
  var uniq = {};
  for(var i = 0; i < list.length; i++){
    if(typeof(uniq[list[i]]) == "undefined") {
      uniq[list[i]] = list[i];
    }
  }
  return uniq;
}
function tab(section){
  $("section").hide();
  $(section).show();
}
$(document).ready(function(){
  $('#strip-simple').click(function(){
    var starttime = new Date().getTime();
    var unique = strip(short_list);
    var endtime = new Date().getTime();
    var time = endtime - starttime;
    $('#short_list').hide();
    for(uniq in unique){
      $('#new_short').append('<li class="list-group-item col-xs-4">'+uniq+'</li>');
    }
    $('#new_short').show();
    $('#short_time').html(time);
    $('#short_length').html(Object.keys(unique).length);
    $('#short_info').show();
  });
  $('#strip-complex').click(function(){
    var starttime = new Date().getTime();
    var unique = strip(long_list);
    var endtime = new Date().getTime();
    var time = endtime - starttime;
    $('#long_list').hide();
    for(uniq in unique){
      $('#new_long').append('<li class="list-group-item col-xs-4">'+uniq+'</li>');
    }
    $('#new_long').show();
    $('#long_time').html(time);
    $('#long_length').html(Object.keys(unique).length);
    $('#long_info').show();
  });
  $('#strip-custom').click(function(){
    var custom_list = $('#my_list').val().split(',');
    var starttime = new Date().getTime();
    var unique = strip(custom_list);
    var endtime = new Date().getTime();
    var time = endtime - starttime;
    $('#long_list').hide();
    for(uniq in unique){
      $('#new_custom').append('<li class="list-group-item col-xs-4">'+uniq+'</li>');
    }
    $('#new_custom').show();
    $('#custom_time').html(time);
    $('#custom_length').html(Object.keys(unique).length);
    $('#original_length').html(custom_list.length);
    $('#custom_info').show();
  });


});
