$(document).ready(function () {
    $("#carOrderForm").validate({
        rules: {
            fullname: "required",
            email: {
                required: true,
                email: true
            },
            deliveryLocation: "required",
            model: "required",
            color: "required",
            "extras[]": "required",
            terms: "required",
        },
        messages: {
            fullname: "Please enter your full name",
            email: "Please enter a valid email address",
            deliveryLocation: "Please select a delivery location",
            model: "Please select a Porsche model",
            color: "Please select the car color",
            "extras[]": "Please select at least one extra",
            terms: "Please accept the terms and conditions",
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") === "deliveryLocation" || element.attr("name") === "extras[]") {
                error.insertAfter(element.closest("p").find("label:last"));
            } else {
                error.insertAfter(element);
            }
        },
    });
});
