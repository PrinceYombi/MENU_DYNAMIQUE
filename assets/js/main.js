$(document).ready(function(){

    /**
     * Cette fonction permet d'effectuer un click sur le burger afin d'aaficher ou cacher le menu
     */
    $('.mobile-nav i').click(function(){

        $('.site-nav-menu').toggleClass('mobile-menu')
    })

    $('#services').mouseover(function(){

        $('#second-menu').addClass('sub')
    })
    $('#second-menu').mouseleave(function(){

        $('#second-menu').removeClass('sub')
    })
})



















