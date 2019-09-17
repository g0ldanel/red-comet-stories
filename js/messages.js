
$(document).ready(function() {


  Initializing(function() {
    $("#menus").removeClass("hidden");});

 });

function Initializing(_callback){

  _$("header", 100, 800)
    .type("Initializing Mother").wait(1000).speed(25).lineBreak()
    .type("Booting the kernel. ").wait(1000).speed(25).lineBreak()
    .type("BUG: Int 6: CR2 00000000").wait(1000).speed(25).lineBreak()
    .type("HardDrives: Attached.").wait(1000).speed(25).lineBreak()
    .type("Navigation: Connected. ").wait(1000).speed(25).lineBreak()
    .type("Communications Relay: Active. ").wait(1000).speed(25).lineBreak()
    .type("Running boot tests").wait(1000).speed(25).lineBreak()
    .type("..").wait(1000).speed(25).lineBreak()
    .type("..").wait(1000).speed(25).lineBreak()
    .type("..").wait(1000).speed(25).lineBreak()
    .type("StartUp complete. All systems nominal. ").wait(1000).speed(25).lineBreak();

  _callback();

}




function Message1(){
  _$("body", 100, 800)
  .type("--Begin Transmission").wait(1000).speed(25).lineBreak()
  .type("Incoming message").wait(1000).speed(25).lineBreak()
  .type("...").wait(1000).speed(50).lineBreak()
  .type("...").wait(1000).speed(50).lineBreak()
  .type("...").wait(1000).speed(50).lineBreak()
  .type("Handshake OK").wait(1000).speed(25).lineBreak()
  .type("Receiving packages").wait(1000).speed(25).lineBreak()
  .type("25%").wait(1000).speed(25).lineBreak()
  .type("50%").wait(1000).speed(25).lineBreak()
  .type("75%").wait(1000).speed(25).lineBreak()
  .type("100%").wait(1000).speed(25).lineBreak()
  .type("Message complete. 37% corrupted beyond retrieval. Playing...").wait(1000).speed(10).lineBreak().lineBreak().lineBreak().lineBreak()
  .type("&nbsp").lineBreak()
  .type("&nbsp").lineBreak()
  .type("&nbsp").lineBreak()
  .type("+++os! Las Sagradas Escrituras lo habían anticipado. El Día HA LLEGADO, los cielos se HAN ABIERTO para enviarnos el Instrumento prometido. Nuestro Deber es diseminarlo por la Galaxia. Nada debe detenernos,los +++++++. REGOCIJAOS +++++ +++ +++++++").wait(1000).speed(100)
  .type("Comms interrumpted.").wait(1000).speed(25).lineBreak()
  .type("Trying to Reconnect").wait(1000).speed(100).lineBreak()
  .type("...").wait(1000).speed(100).lineBreak()
  .type("...").wait(1000).speed(100).lineBreak()
  .type("...").wait(1000).speed(100).lineBreak()
  .type("Jerez Protocol active, impossible to reconnect").wait(1000).speed(100).lineBreak()
  .type("--End Transmission").wait(1000).speed(100)

  ;

}
