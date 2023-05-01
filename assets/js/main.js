$(function(){
    /**
     * @이벤트슬라이드
     */
    const eventSlide = new Swiper('.event-slide',{
        loop:true,
        effect: "fade",
        autoplay: {
            delay: 1700,
            disableOnInteraction: false
        },
    })
    /**
     * @주요제품소개슬라이드
     */
    const introSlide = new Swiper('.intro-slide',{
        loop:true,
        effect: "fade",
        autoplay: {
            delay: 1700,
            disableOnInteraction: false
        },
        pagination:{
            el:'.pagination',
        },
    })
    /**
     * @제품슬라이드
     */
    const prdSlide = new Swiper('.prd-slide',{
        spaceBetween:10,
        slidesPerView: 2.2,
        freeMode: true,
    })
    /**
     * @헤더
     */
    $(window).scroll(function(){
        curr=$(this).scrollTop();

        if (curr > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed')
        }
    })
    $(window).trigger('scroll');
    /**
     * @전체메뉴
     */
    $('.gnb .btn-all').click(function(){
        $('.gnb').toggleClass('open');
        $('.gnb .group-all').slideToggle();
    })
    /**
     * @메뉴창
     */
    $('.btn-menu').click(function(){
        $('.side-nav').addClass('on')
        $('body').addClass('hidden');
    })
    $('.side-nav .btn-close, .dimmed').click(function(){
        $('.side-nav').removeClass('on')
        $('body').removeClass('hidden');
    })
    /**
     * @검색창
     */
    $('.btn-search').click(function(){
        $('.popup-search').addClass('on')
    })
    $('.popup-search .close').click(function(){
        $('.popup-search').removeClass('on')
    })
    /**
     * @아코디언메뉴
     */
    $('.side-nav .nav').click(function(){
        $(this).toggleClass('on').siblings('.side-nav .depth2').stop().slideToggle();
    })
    /**
     * @베스트상품메뉴
     */
    $('.sc-prd .group-nav a').click(function(e){
        e.preventDefault();

        target=$(this).data('prd');

        $(this).addClass('active').siblings().removeClass('active');
        $(target).addClass('active').siblings().removeClass('active');
    })
    /**
     * @고정버튼
    */
    let lastScroll=0;
    $(window).scroll(function(){

        curr=$(this).scrollTop();

        if(curr >= 10){
            if(curr > lastScroll){
                $('.fix-btn').removeClass('show')
            }else{
                $('.fix-btn').addClass('show')
            }
        }else{
            $('.fix-btn').removeClass('show')
        }
        
        lastScroll = curr;
    })
    $('.fix-btn .btn-top').click(function(){
        window.scrollTo({top:0,behavior:"smooth"})
    })
})