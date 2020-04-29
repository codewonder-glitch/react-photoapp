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