const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//https://discordapp.com/api/webhooks/676118118082281513/ZS5YcWhurzokBrKX9NgexqtxrJA5Pu2Bo4i7_JsIxC-JIbPBVhSZkcVVukGOro52rnQA
/*<script>
    function sendMessage() {
      var request = new XMLHttpRequest();
      request.open("POST", "https://discordapp.com/api/webhooks/760174069562867772/X8peJc0Si14I0RKXKX5omz5uyopAlpkKe5HC3T6GkMoMtUxpZWi5k58GICbbvFJ9fuYT");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "My Webhook Name",
        avatar_url: "",
        content: "The message to send"
      }

      request.send(JSON.stringify(params));
    }
  </script>*/

function test(){
const { conversation } = require('@assistant/conversation');
const functions = require('firebase-functions');

const app = conversation();

app.handle('Testhandle', conv => {
  // Implement your code here
  conv.add("Hi there just testing");
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);
}