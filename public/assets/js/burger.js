$("#submitButton").on("click", (event) => {
    event.preventDefault();
    console.log($("#burgerAdd").val().trim());

    var newBurger = {
        burger_name: $("#burgerAdd").val().trim(),
        devoured: false
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() => {
        console.log("New Burger Added!");
        location.reload();
    });
});

// Function tio eat a burger
$(() => {
    $(".change-devoured").on("click", (event) => {
        var id = parseInt(event.target.dataset.id);
        
        var devouredState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(() => {
            console.log("Ate burger " + id);
            location.reload();
        });
    });
});