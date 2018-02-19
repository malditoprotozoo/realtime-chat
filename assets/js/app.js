$(document).ready(function() {
  var socket = io('http://34.227.11.223:3000');
  createDialog();
  let nick = '';
  $('#send-nick').click(function(e) {
    e.preventDefault();
    nick = $('#input-nick').val();
    if (nick.trim().length <= 0) {
      nick = 'anon';
    }
    $( "#dialog" ).dialog('close');
  });

  $('form').submit(function(){
    socket.emit('chat message', `${$('#post').val()}`);
    $('#post').val('');
    return false;
  });

  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
});

/* <span style="color:#64E018;">${nick}:</span> */