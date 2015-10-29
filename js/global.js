$(document).ready(function () {
    $(document).on("click", ".navbar-toggle", function() {
        $(this).blur();
    });
    $(document).on("change", ".dealer-select", function () {
        $(this).blur();
        triggerLoader();
    });
    $(document).on("click", "[data-temploader]", function () {
        $(this).blur();
        triggerLoader();
    });
    $(document).on("click", ".search-button", function () {
        $(this).blur();
        if (!$(".navbar-toggle").hasClass("collapsed")) {
            $(".navbar-toggle").trigger("click");
        }
        triggerLoader();
        setTimeout(function () {
            document.location = "search-results.html";
        }, 3000);
    });
    $(document).on("submit", ".search-form", function (e) {
        $(".search-field").blur();
        if (!$(".navbar-toggle").hasClass("collapsed")) {
            $(".navbar-toggle").trigger("click");
        }
        e.preventDefault();
        triggerLoader();
        setTimeout(function () {
            document.location = "search-results.html";
        }, 3000);
        return false;
    });
    $(document).on("click", ".toggle-left", function () {
        $(this).blur();
        $(".toggle-left").toggleClass("collapsed");
        $(".content-sides").toggleClass("show-left"); //also need to call these when something is selected to auto close
    });

    //manual toggles for checkout, this is dumb-ish, need to rework during programming
    $(document).on("click", "[data-temptoggle=account]", function () {
        $("#checkoutAcct").collapse("hide");
        $("#checkoutContact,.checkoutAcctConfirm").collapse("show");
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });

    $(document).on("click", "[data-temptoggle=contact]", function () {
        $("#checkoutContact").collapse("hide");
        $("#checkoutShip,.checkoutContactConfirm").collapse("show");
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });
    $(document).on("click", "[data-temptoggle=contactedit]", function () {
        $(".checkoutContactEdit").removeClass("hide");
        $(".checkoutContactStart").hide();
        $("#checkoutContact").collapse("show");
        $(".checkoutContactConfirm").collapse("hide");
    });
    $(document).on("click", "[data-temptoggle=contactsave]", function () {
        $("#checkoutContact").collapse("hide");
        $(".checkoutContactConfirm").collapse("show");
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });

    $(document).on("click", "[data-temptoggle=shipping]", function () {
        $("#checkoutShip").collapse("hide");
        $("#checkoutBilling,.checkoutShipConfirm").collapse("show");
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });
    $(document).on("click", "[data-temptoggle=shippingedit]", function () {
        $(".checkoutShipEdit").removeClass("hide");
        $(".checkoutShipStart").hide();
        $("#checkoutShip").collapse("show");
        $(".checkoutShipConfirm").collapse("hide");
    });
    $(document).on("click", "[data-temptoggle=shippingsave]", function () {
        $("#checkoutShip").collapse("hide");
        $(".checkoutShipConfirm").collapse("show");
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });

    $(document).on("click", "[data-temptoggle=billing]", function () {
        $("#checkoutBilling").collapse("hide");
        $("#checkoutReview,.checkoutBillConfirm").collapse("show");
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });
    $(document).on("click", "[data-temptoggle=billingedit]", function () {
        $(".checkoutBillEdit").removeClass("hide");
        $(".checkoutBillStart").hide();
        $("#checkoutBilling").collapse("show");
        $(".checkoutBillConfirm").collapse("hide");
    });
    $(document).on("click", "[data-temptoggle=billingsave]", function () {
        $("#checkoutBill").collapse("hide");
        $(".checkoutBillConfirm").collapse("show");
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });

    $(document).on("click", "[data-temptoggle=placeorder]", function () {
        $("#checkoutBilling,.checkoutBillConfirm").collapse("hide");
        $("#checkoutReceipt").collapse("show");
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });

    $(document).on("click", "#paymentMethod1", function () {
        $("#paymentMethod1Content").collapse("show");
        $("#paymentMethod2Content").collapse("hide");
    });
    $(document).on("click", "#paymentMethod2", function () {
        $("#paymentMethod1Content").collapse("hide");
        $("#paymentMethod2Content").collapse("show");
    });
});
$(window).scroll(function () {
    var currScrollTop = $(window).scrollTop();
    if (currScrollTop > 400) {
        $(".btn-totop").addClass("visible"); //show to top button
    } else {
        $(".btn-totop").removeClass("visible"); //hide it
    }
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