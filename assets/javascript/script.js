/*  This script utilizes api get calls to get dog breed information by search result and pull up local pet shelter results. */

var pfApiKey = "3b7e9ed23b598ca17ae1d73381f1544f"; // Petfinder.com API key to be appended to Petfinder.com url

/*
This is no longer necessary since a drop down menu would be used instead.

function validSearch() {
    //  This is validation function that makes sure that user enters a correct value
    if ($("#text_box").val() === "") {
        console.log("User did not enter any string. No search is performed.");
        $("#myModal").modal();
        return false;
    }
    return true;
}*/

$(document).ready(function () {

    $("#submit_button").on("click", function (event) {
        //  This needs to become a select box so that the user input is idential to breed.list on the PetFinder.com api. The list is found here: https://api.petfinder.com/breed.list?animal=dog&format=json&key=8ed9687e011d3ec63d28893e2ae6348e.//

        //  This line prevents refreshing when user clicks on submit button.

        event.preventDefault();

        //  This is validation function that makes sure that user enters a correct value
        //  This is no longer necessary since drop down menu would be used.
        /*if (validSearch() == false) {
            return;
        }*/
        // var breed = $("#text_box").val(); // I've hardcoded var breed below for testing purposes. This is to be replaced such that var breed is the value (the breed name) from the select box
        var breed = "Pit Bull Terrier"
        console.log("Breed is " + breed);

        var pfUrl = "https://api.petfinder.com/pet.find?key=" + pfApiKey + "&location=44216&status=A&breed=" + breed + "&count=5&output=basic&format=json";
        console.log(pfUrl);
        var queryUrl = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=pit_bull";

        $.ajax({
            url: queryUrl,
            method: "GET"
        })

            .then(function (response) {
                console.log(response);
                var results = response.query.pages[64235].extract;
                console.log(results);
            });
        $.ajax({
            url: pfUrl,
            dataType: 'jsonp',
<<<<<<< HEAD
            method: "GET"
        }).then(function(response) {
            dogData = response.petfinder.pets.pet;
            console.log(dogData);
            for(var i = 0; i < 5; i++) {
                var dogData = response.petfinder.pets.pet[i];
            console.log(dogData.name.$t)
            console.log(dogData.media.photos.photo[0].$t);
            // console.log(dogData);
            console.log(dogData);
              
        }
            // console.log(response);
            // for(var i=0; 1 < 5; i++) {
            //     var dogName = dogData[i].petfinder.pets.pet.name;
            //     console.log(dogName);
            // }

        }
        
        )
    })
});
=======
            success: function (jsonpData) {
                console.log(jsonpData);
                /* Here is where we need to start pulling out things like name and a photo from jsonpData. The below is more pseudocode than anything else. 
                //jsonpData.petfinder.pets;
                var dogData = jsonpData.petfinder.pets.pet;
                console.log(dogData);
                for(var i=0;i<dogData.length;i++) {
                    var dogName = dogData[i].name;
                    console.log(dogName);
                }
                */

                //var dogPhoto = dogData.pets.pet.(img of some sort)
            }
        });

        //  These lines empty breed description and search results when submit button is clicked before new search is performed.

        $("#pet_description").empty();
        $("#results").empty();

        //  This clears the search box, after user clicks submit button.

        $("#text_box").val("");

    });
});

/*  This is for future use of retrieving data from wikipedia.

// this is the api call to wikipedia to call back the summarry from the pitbull page bryan
var queryUrl = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=pit_bull";

$.ajax({
    url: queryUrl,
    method: "GET"
})

    .then(function (response) {
        console.log(response);
        var results = response.query.pages[64235].extract;
        console.log(results);
    });
*/

//test
>>>>>>> 545f4e6305f9071a7c24560f2dda8580b15ed305
