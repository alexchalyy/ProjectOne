/*  This javascript dynamically generates results from petfinder api (dog pics and details from adoption results) and dog breed description 
    from wiki api based on a breed drop dowmn menu option selected by user. */

/*  This array contains parameters that should be used for search of dog breed descriptions thru wiki api (dog name and the pagenumber). */

var dogBreed = [
    {
        dog: "pit_bull",
        pagenumber: "64235",
    },
    {
        dog: "bulldog",
        pagenumber: "242068",
    },
    {
        dog: "chihuahua_(dog)",
        pagenumber: "26998504",
    },
    {
        dog: "boxer_(dog)",
        pagenumber: "253409",
    },
    {
        dog: "dobermann",
        pagenumber: "2139688",
    },
    {
        dog: "wolverine",
        pagenumber: "123"
    }
];

$(document).ready(function () {
    $(".dropdown-item").on("click", function (event) {

        //  This funciton is called when user selects a dog breed from the drop down menu.

        //  This sets up all variables for api get calls.

        var breed = $(this).attr("value"); // To be replaced with values from the select box.

        //Generate API URLs for Petfinder and Wikipedia.

        var pfApiKey = "3b7e9ed23b598ca17ae1d73381f1544f";
        var pfUrl = "https://api.petfinder.com/pet.find?key=" + pfApiKey + "&location=44113&status=A&breed=" + breed + "&count=6&output=basic&format=json";
        var getDog = [$(this).attr("data-value")];
        var queryUrl = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=5&titles=" + dogBreed[getDog].dog;

        //  This clears results before running all api get calls.

        $("#pet_description").empty();
        $("#results").empty();

        //  This activates pop-up message when user enters wolverine

        if (breed == "myModal") {
            $("#myModal").modal();
        } else {

            // Wikipedia API call.

            $.ajax({
                url: queryUrl,
                method: "GET"
            })
                .then(function (response) {
                    console.log("This is wiki response: ");
                    console.log(response);
                    var dogPage = dogBreed[getDog].pagenumber;
                    var results = response.query.pages[dogPage].extract;
                    var title = response.query.pages[dogPage].title;

                    $("#pet_description").prepend("<div id = \"title\"><h5>" + title.toString() + "</h5><p id = \"paragraph\">" +
                        results.toString() + "</p></div>");
                });

            // Petfinder API call.

            $.ajax({
                url: pfUrl,
                dataType: 'jsonp',
                method: "GET"
            }).then(function (response) {
                console.log("This is petfinder response: ");
                console.log(response);
                for (var i = 0; i < 4; i++) {
                    var dogData = response.petfinder.pets.pet[i];
                    var dogPhoto = dogData.media.photos.photo[2].$t;
                    console.log("dog photo = " + dogPhoto);
                    var dogName = dogData.name.$t;
                    var dogLocation = dogData.contact.city.$t;
                    var dogPhone = dogData.contact.phone.$t;

                    console.log("i = " + i);
                    $("#results").prepend("<div class=\"col-sm-3 pic\"><p>" + dogName.toString() + "</p><p>" + dogLocation.toString() +
                        "</p><p>" + dogPhone.toString() + "</p><img id = \"p\" src = " + dogPhoto.toString() + " class = \"dogImage\"></div>");
                }
            });
        }
})
});
