$(document).ready(function () {
    $(document).on("click", ".navbar-toggle", function() {
        $(this).blur();
    });
    $(document).on("change", ".dealer-select", function () {
        $(this).blur();
        triggerLoader();
    });
    $(document).on("click", ".search-button", function () {
        $(this).blur();
        if (!$(".navbar-toggle").hasClass("collapsed")) {
            $(".navbar-toggle").trigger("click");
        }
        triggerLoader();
    });
    $(document).on("submit", ".search-form", function (e) {
        $(".search-field").blur();
        if (!$(".navbar-toggle").hasClass("collapsed")) {
            $(".navbar-toggle").trigger("click");
        }
        e.preventDefault();
        triggerLoader();
        return false;
    });
});
var spinner;
var spinnerOptions = {
    length: 28, width: 7, radius: 30, top: "220px"
};
function triggerLoader() {
    spinner = new Spinner(spinnerOptions).spin(document.getElementById("loader"));
    $("#loader, #pageloader").fadeIn("200");
    setTimeout(function () {
        $("#loader, #pageloader").fadeOut("200");
        setTimeout(function () {
            spinner.stop();
        }, 200);
    }, 3000);
}