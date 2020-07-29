$( document ).ready( function () {
//    Скрипт для бургера

    $(  'a.burger' ).on( 'click', function () {
        console.log( $(this) );
        $( this )[0].classList.toggle( 'active' );
    } )
});
