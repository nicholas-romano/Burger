$(function () {

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burger_name").val().trim(),
          devoured: 0
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });

    // $("[name=devoured]:checked").val().trim();
    //<div class="form-group">
    // <label for="devoured">Devoured?</label><br>
    // <input type="radio" name="devoured" value="1" checked> Devoured<br>
    // <input type="radio" name="devoured" value="0"> Not Devoured
    //</div>

});