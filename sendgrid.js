
window.SendGridMail =function(mailfrom,mailto,mailsubject,mailhtml){
  SendMail(mailfrom,mailto,mailsubject,mailhtml)
};

function SendMail(mailfrom,mailto,mailsubject,mailhtml)
{

 var sendgridapiid = "3nZYDI9mSaGFctKSOltg0Q";
 var sendgridapikey = "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";
 
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(sendgridapikey);
sgMail.client.setDefaultRequest('baseUrl', 'http://localhost/');
const msg = {
  to: mailto,
  from: mailfrom,
  subject: mailsubject,
  text: 'and easy to do anywhere, even with Node.js',
  html: mailhtml
};
sgMail.send(msg);
}