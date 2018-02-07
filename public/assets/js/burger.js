$(function () {
    $('#submit').on('click', function (event) {
        event.preventDefault();
        var newBurgerName = $('#newBurger').val();
        $.ajax("/api/burgers", {
            type: "POST",
            data: { name: newBurgerName }
        }).then(location.reload());
        $('#newBurger').val('');
    });
    $('body').on('click', '.devourBtn', function () {
        var id = $(this).data('id');
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: { devoured: true }
        }).then(location.reload());
    });
});