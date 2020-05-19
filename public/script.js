// alert("i am connected");
// console.log(change);
// document.addEventListener('click', function(e) {
//     const change = document.getElementsByClassName('title').innerHTML = "helooooo";
    // console.log(change);
    // change.innerHTML = "i have changed";
    
    // change.textContent = "i just changed"
    // alert("i am clicked!!!")
    // console.log(e.target);
    
// });

$(document).ready(function() {
    var item = (localStorage.getItem("listItem"));
    // console.log(item);
    $(item).append("#list-items");
    
    // var newItem = localStorage.getItem("listItem");
    // console.log(newItem);
    
    // $("#list-items").append(item);
    // alert("am fucking ready");
    $(".add-items").submit(function (e) { 
        e.preventDefault();
        var item = $("#todo-list-item").val();
        // console.log(item);

        if (item) {
            $("#list-items").prepend("<li><input class='checkbox' type='checkbox'/>" + item + "<i class='remove fa fa-trash text-primary'></i><hr></li>");
            localStorage.setItem("listItem", $("#list-items").html());
            // localStorage.setItem("key", "Ajibola");
            $("#todo-list-item").val("");
            
        }
        
    });
    $(document).on("change", ".checkbox", function(){
        // console.log("checkbox checked");
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked")
        } else {
            $(this).attr("checked", "checked")
        }

        $(this).parent().toggleClass("completed");
        localStorage.setItem("listItems", $("#list-items").html())
    })  

    $(document).on("click", ".remove", function(){
        $(this).parent().remove()
        localStorage.setItem("listItems", $("#list-items").html())
        var item = (localStorage.getItem("listItem"));
    // console.log(item);
    $(item).append("#list-items");
    })  
})
