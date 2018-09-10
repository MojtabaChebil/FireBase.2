
document.getElementById('contactform').addEventListener('submit', submitForm);

function submitForm(e){
   e.preventDefault();
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    saveMessage(name, company, email, phone, message);
    document.getElementById('contactform').reset();
}

function saveMessage(name, company, email, phone, message){
  var messagesRef = firebase.database().ref('messages');
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
  toastr["error"]("Thank you", "hello")

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut",
}
}

function getInputVal(id){
  return document.getElementById(id).value;
  
}
