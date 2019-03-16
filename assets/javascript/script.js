

$(document).ready(function () {
    $(".dropdown-item").on("click", function (event) {
        var breed = $(this).attr("value"); 
        var pfApiKey = "3b7e9ed23b598ca17ae1d73381f1544f";
        var pfUrl = "https://api.petfinder.com/pet.find?key=" + pfApiKey + "&location=44113&status=A&breed=" + breed + "&count=6&output=basic&format=json";
        var queryUrl = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=pit_bull";
        
        $.ajax({
            url: pfUrl,
            dataType: 'jsonp',
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (var i = 0; i < 6; i++) {            
                var dogData = response.petfinder.pets.pet[i];
                console.log(dogData);
                var dogPhoto = dogData.media.photos.photo[1].$t;
                console.log(dogPhoto);
                var dogName = dogData.name.$t;
                var dogLocation = dogData.contact.city.$t;
                var dogPhone = dogData.contact.phone.$t;
                $("#results").prepend("<div class=\"col-sm-2\"><p>" + dogName.toString() + "</p><p>" + dogLocation.toString() + "</p><p>" + dogPhone.toString() + "</p><img src = " + dogPhoto.toString() + "></div>");
            }
        })
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
        
        // console.log(dogBreed[$(this).attr("data-value")].dog);
        var getDog = [$(this).attr("data-value")];

        console.log("Get dog = " + getDog);
        
        // console.log(dogBreed[$(this).attr("data-value")].pagenumber);
        //console.log(dogBreed[data-value].dog);
        //console.log(dogBreed[data-value].pagenumber);
    
        var queryUrl = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=5&titles="+ dogBreed[getDog].dog;
        
       
    $.ajax({
            url: queryUrl,
            method: "GET"
            })
            
            .then(function(response) {
                console.log(getDog)
                
                var dogPage = dogBreed[getDog].pagenumber;
                // console.log(dogPage);
                var dogPage = dogBreed[getDog].pagenumber;
                var results = response.query.pages[dogPage].extract;
                // console.log(results);
                var title = response.query.pages[dogPage].title;
                // console.log(title);
    
                var head = $("<h3>");
                head.text(title + " info");
    
                $("#pet_description").append(head);
    
                var p = $("<p>");
                p.text(results);
    
                $("#pet_description").append(p);
    
    
            });
    })
});
