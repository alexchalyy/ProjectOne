

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
            // console.log(dogData);
            for (var i = 0; i < 5; i++) {
                var dogData = response.petfinder.pets.pet[i];
                var dogPhoto = dogData.media.photos.photo[3].$t;
                console.log(dogPhoto);
                $("#dogPhoto"+i).attr("src", dogPhoto);
                var dogName = dogData.name.$t;
                console.log(dogName);
                $("#dogText"+i).html(dogName + "<br></br>Test");

                // console.log(dogData);
            }
        })
        // bryan b api info
        var dogBreed = [
            {dog:"pit_bull",
            pagenumber:"64235",
            },
            {dog:"beagle",
            pagenumber:"4368",
            },
            {dog:"husky",
            pagenumber:"530115",
            },
            {dog:"border_collie",
            pagenumber:"102136",
            },
            {dog:"bulldog",
            pagenumber:"242068",
            },
            {dog:"chihuahua_(dog)",
            pagenumber:"26998504",
            },
            {dog:"pug",
            pagenumber:"21234727",
            },
            {dog:"boxer_(dog)",
            pagenumber:"253409",
            },
            {dog:"german_shepherd",
            pagenumber:"79289",
            },
            {dog:"dobermann",
            pagenumber:"2139688",
            },
        ];
        console.log(dogBreed[9].dog);
    
        var queryUrl = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=5&titles="+ dogBreed[9].dog;
        
       
    $.ajax({
            url: queryUrl,
            method: "GET"
            })
            
            .then(function(response) {
                console.log(response);
                
                var dogPage = dogBreed[9].pagenumber;
                var results = response.query.pages[dogPage].extract;
                console.log(results);
                var title = response.query.pages[dogPage].title;
                console.log(title);
    
                // var head = $("<h3>");
                // head.text(title + " info");
    
                // $("#main").append(head);
    
                // var p = $("<p>");
                // p.text(results);
    
                // $("#main").append(p);
    
    
            });
    })
});
