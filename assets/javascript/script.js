

$(document).ready(function () {
    $("#submit_button").on("click", function (event) {
        event.preventDefault();
        var breed = "Pit Bull Terrier"
        console.log("Breed is " + breed);

        var pfApiKey = "3b7e9ed23b598ca17ae1d73381f1544f";
        var pfUrl = "https://api.petfinder.com/pet.find?key=" + pfApiKey + "&location=44216&status=A&breed=" + breed + "&count=5&output=basic&format=json";
        // console.log(pfUrl);
        var queryUrl = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=pit_bull";

        $.ajax({
            url: pfUrl,
            dataType: 'jsonp',
            method: "GET"
        }).then(function (response) {
            dogData = response.petfinder.pets.pet;
            console.log(dogData);
            for (var i = 0; i < 5; i++) {
                var dogData = response.petfinder.pets.pet[i];
                var dogPhoto = dogData.media.photos.photo[1].$t;
                console.log(dogPhoto);
                $("#dogPhoto"+i).attr("src", dogPhoto);
                var dogName = dogData.name.$t;
                console.log(dogName);
                $("#dogText"+i).html(dogName + "<br></br>Test");
            }
        })
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            // console.log(response);
            var results = response.query.pages[64235].extract;
            // console.log(results);
        });
    })
});
