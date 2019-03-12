/*  This script utilizes api get calls to get dog breed information by search result and pull up local pet shelter results. */

var breed;  //  This holds the dog breed name.
var empty_string_validation_message = "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\">Woof woof!</h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"false\">&times;</span></button></div><div class=\"modal-body\"><p>Please enter valid dog breed.</p></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button></div></div></div></div>";

//----------------------------------------------------------------------------------------------------------

function validSearch() {

    //  This is validation function that makes sure that user enters a correct value

    if ($("#text_box").val() === "") {
        console.log("User did not enter any string. No search is performed.");
        //$("#results").prepend(empty_string_validation_message);
        $("#myModal").modal();
    }
    else {
        breed = document.getElementById("text_box").value;
        console.log("user entered a value of " + breed);
    }
}

//----------------------------------------------------------------------------------------------------------

$("#submit_button").on("click",

    function (event) {

        //  This function is called when the user clicks submit button.
        //  It gets the value of text box.

        //  This line prevents refreshing when user clicks on submit button.

        event.preventDefault();

        //  These lines empty breed description and search results when submit button is clicked before new search is performed.

        $("#pet_description").empty();
        $("#results").empty();

        //  This is validation function that makes sure that user enters a correct value

        validSearch();

        //  This clears the search box, after user clicks submit button.

        $("#text_box").val("");

    });