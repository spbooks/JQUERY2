$(document).ready(function(){
  $('#a-list, #b-list').sortable({
    connectWith: '.connected',
    placeholder: 'ui-state-highlight',
    receive: function(event,ui) { adopt(this); },
    remove: function(event,ui) { orphan(this); }
  }).disableSelection();
});

function adopt(which) {
  if ($(which).hasClass('empty')) {
    $(which).removeClass('empty').find('.empty').remove();
  }
}

function orphan(which) {
  if ($(which).children().length == 0) {
    $(which).append($('<li class="empty">empty</li>')).addClass('empty');
  }
}
