var errorType
const e = new URLSearchParams(window.location.search);
var errorType = e.get('err_code');

$(document).ready(function() {
    if (errorType === "400" || errorType === "" || errorType == null) {
        err_400()
    }
    if (errorType === "403") {
        err_403()
    }
    if (errorType === "404") {
        err_404()
    }
    if (errorType === "499") {
        err_499()
    }
    if (errorType === "500") {
        err_500()
    }
})

function err_400() {
    $(".statusCode").text("400");
    $(".statusCodeDef").text("Bad request!")
    $(document).prop('title', 'Bad request!');
}

function err_403() {
    $(".statusCode").text("403");
    $(".statusCodeDef").text("You don't have permission to access this resource.")
    $(document).prop('title', 'Unauthorize access!');
}

function err_404() {
    $(".statusCode").text("404");
    $(".statusCodeDef").text("The resource requested could not be found on this server!")
    $(document).prop('title', 'Page not found!');
}

function err_499() {
    $(".statusCode").text("499");
    $(".statusCodeDef").text("Token required! but nothing declared")
    $(document).prop('title', 'Token required!');
}

function err_500() {
    $(".statusCode").text("500");
    $(".statusCodeDef").text("Internal server error!")
    $(document).prop('title', 'Server error!');
}