const io = require('socket.io')(8666);
  
io.on('connection', function(socket){
  var clientIp = socket.request.connection.remoteAddress;
      console.log(clientIp);
      
   socket.on('chat message', function(msg){
     io.emit('chat message', msg);
     console.log(msg);
     
       });

   socket.on('ip message', function(){
      var clientIp = socket.request.connection.remoteAddress;
      console.log(clientIp);
      io.emit('chat message', clientIp);
      
      });



      

});
