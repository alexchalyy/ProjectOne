/*  This script utilizes api get calls to get dog breed information by search result and pull up local pet shelter results. */

var breed;  //  This holds the dog breed name.

//----------------------------------------------------------------------------------------------------------

function validSearch() {

    //  This is validation function that makes sure that user enters a correct value

    if ($("#text_box").val() === "") {
        console.log("User did not enter any string. No search is performed.");
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