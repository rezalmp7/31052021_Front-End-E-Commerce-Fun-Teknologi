
$(window).ready(function() {
    var widthbackground_rekomendasi = $('.background_rekomendasi').width();
    $('.background_rekomendasi').height(widthbackground_rekomendasi);

    var heightRekomendasi = $('#rekomendasi .uk-slider-items li').height();
    var heightbodyProduk = heightRekomendasi / 2;
    var heightProduk = heightbodyProduk-100;
    var widthgambar_produk = $('.gambar_produk').width();
    var widthgambar_produk_promo = $('.gambar_produk_promo').width();
    
    $('.gambar_produk_promo').height(widthgambar_produk_promo);

    if ($(document).width() > 640)
    {
        $('.bodyProduk>div').height(heightbodyProduk);
        $('.bodyProduk .gambar_produk_baru').height(heightProduk);
        $('.gambar_produk').height(widthgambar_produk);
        $('#cart #cart_produk_body_detail').removeClass('uk-padding-small');
        $('#cart #cart_produk_body_detail').addClass('uk-padding');
    }
    else
    {
        $('.gambar_produk_baru').height(100);
        $('.gambar_produk').height(widthgambar_produk);
        $('#cart #cart_produk_body_detail').addClass('uk-padding-small uk-padding-remove-horizontal');
        $('#cart #cart_produk_body_detail').removeClass('uk-padding');
    }

});
$(document).ready(function () {

});
$(document).ready(function () {

    $(".preview a").on("click", function () {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        var picture = $(this).data();

        event.preventDefault(); //prevents page from reloading every time you click a thumbnail

        $(".full img").fadeOut(100, function () {
            $(".full img").attr("src", picture.full);
            $(".full").attr("href", picture.full);
            $(".full").attr("title", picture.title);

        }).fadeIn();

    });// end on click

    $(".full").fancybox({
        helpers: {
            title: {
                type: 'inside'
            }
        },
        closeBtn: true,
    });

});