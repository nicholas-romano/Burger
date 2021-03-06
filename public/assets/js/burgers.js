$(function() {
  $('#burger_name').val('');

    $(".devour-it").on("click", function() {
        //console.log("devour it!");
        const id = $(this).data("id");

        const devour = {
            devoured: 1
        };

         // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devour
        }).then (
            function() {
                console.log("changed devour state to", devour);
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        const newBurger = {
          burger_name: $("#burger_name").val().trim(),
          devoured: 0
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });

    $(".delete").on("click", function() {

        const id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger");
            // Reload the page to get the updated list    
            location.reload();
          }
        );

    });

});