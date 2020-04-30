ajax({
    type: "GET",
    url: "https://api.wegmans.io/products/search?query=milk&results=100&page=1&api-version=2018-10-18",

    // Request headers
    beforeSend: function(xhrObj) {
        xhrObj.setRequestHeader("Cache-Control", "no-cache");
        xhrObj.setRequestHeader("Subscription-Key", "876c4e1543124d7eb8c01f94096a26ce");
        },
    })
.done(function (data) {
    alert("success");
})
.fail(function () {
    alert("error");


});

var UCRef=firebase.database().ref("users").child("-M5PuO4hTTp6nDZFjQrW").child("Photos").child("URL").once("value")
//      .then(snapshot=>{
//       this.setState({url1:snapshot.val()})
//         });
//     var UCRef=firebase.database().ref("users").child("-M5PuO4hTTp6nDZFjQrW").child("Photos").child("url2").once("value")
//      .then(snapshot=>{
//        this.setState({url2:snapshot.val()})
//         });
// var arr=[]
//         var UCRef=firebase.database().ref("users").child("-M5PuO4hTTp6nDZFjQrW").child("Photos").child("comments").limitToFirst(1).once("value")
//      .then(snapshot=>{
//         //  arr.push(snapshot.val())
//          this.setState({url3:snapshot.val()})
//      });