var settings = {
  "url": "https://tarakeswarcollege.in/Studentpart/ApplicationFormPrint.aspx?RegNo=4152202521",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Cookie": " ASP.NET_SessionId=rlwac5uytc35tltszmftiqkb"
  },
};

$.ajax(settings).done(function (response) {
  $("#result").append(response);
});