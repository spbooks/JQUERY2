$(document).ready(function() { 
  $('p').bind('multihover', {times: 4}, function() {
    $(this).css('background-color', 'lemonchiffon');
  });
});

jQuery.event.special.multihover = { 
  setup: function(data, namespaces) {
    // Do when the first event is bound
    $(this)
      .data('times', data && data.times || 3)
      .bind('mouseover', jQuery.event.special.multihover.handler);
  }, add: function(handler, data, namespaces) {
    // Do every time you bind another event
  }, remove: function(namespaces) {
    // Do when an event is unbound
  }, teardown: function(namespaces) {
    // Do when the last event is unbound
    $(this)
      .removeData('times')
      .unbind('mouseover', jQuery.event.special.multihover.handler);
  }, handler: function(event) {
    // Do your logic
    var times = $(this).data('times') || 0;
    times--;
    $(this).data('times', times);
    
    if(times <= 0) {
      event.type = 'multihover';
      jQuery.event.handle.apply(this,arguments);
      
      $(this).unbind('multihover');
    }
  }
}