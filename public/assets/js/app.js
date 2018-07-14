$("#submit").on("click" ,function(){
    var newBurger = {
        name: $("#userInput").val().trim(),
        devoured: false
    }
    
    $.post("/api/burgers", newBurger).then(function(res){
        console.log(res)
        location.reload();
    })

})

$(".devBtn").on("click", function(){
    var id = $(this).data("id");
    var newData = {devoured: true}
    $.ajax("/api/burgers/"+id, {
        method: "PUT",
        data: newData
    }).then(function(res){
        console.log(res)
        location.reload();
    })
})