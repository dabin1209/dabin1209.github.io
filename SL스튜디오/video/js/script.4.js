/*section01 header */

$(function () {
  /* nav */
  $("#nav > ul > li").hover(
    function () {
      $(this).find("ul").stop().slideDown(300);
    },
    function () {
      $(this).find("ul").stop().slideUp(300);
    }
  );

  $("#nav > ul > li").focusin(function () {
    $(this).find("ul").stop().slideDown(300);
  });
  $("#nav > ul > li ul li:last-child").focusout(function () {
    $(this).parent("ul").stop().slideUp(300);
  });

  /* sns */

  $("#header #social .socials > ul > li > a ").focusin(function () {
    $(this).next("ul").stop().slideDown(300);
  });
  $("#header #social .socials > ul > li > a + ul>li:last-child ").focusout(
    function () {
      $(this).parent("ul").stop().slideUp(300);
    }
  );

  $("#header #social .socials > ul > li").hover(
    function () {
      $(this).find("ul").stop().slideDown(300);
    },
    function () {
      $(this).find("ul").stop().slideUp(300);
    }
  );

  /* 검색 */

  $("#header #search .searchs  a").mouseover(function () {
    $(this).next(".search1").stop().slideDown(300);
  });

  $("#header #search .searchs  a").click(function () {
    $(this).next(".search1").stop().slideUp(300);
  });

  $("#header #search .searchs  button").click(function () {
    $(this).parent(".search1").stop().slideUp(300);
  });
});

/* section02 banner */
$(function () {
  var visual = $("#h_2>#slideWrap>.slide1>li"); // 슬라이드 이미지
  var leftBtn = $("#h_2 .prev");
  var rightBtn = $("#h_2 .next");
  var current = 0; // 현재 보이는 이미지
  var setIntervalId; // clearInterval을 쓰기 위해 변수명이 필요함

  timer(); //함수호출

  function timer() {
    setIntervalId = setInterval(function () {
      var prev = visual.eq(current);
      move(prev, 0, "-100%");

      current++;

      if (current == visual.size()) {
        current = 0;
      }

      var next = visual.eq(current);
      move(next, "100%", 0);

    }, 3000);
  }

  function move(tg, start, end) {
    tg.css("left", start)
      .stop()
      .animate({ left: end }, { duration: 500, ease: "easeOutCubic" }); //점점빨라지게
  }


  //호버시 멈추게 하는 기능
  $("#slideWrap").on({
    mouseover: function () {
      clearInterval(setIntervalId);
    },
    mouseout: function () {
      timer();
    },
  });

  /* 화살표클릭 */
  rightBtn.click(function () {
    var prev = visual.eq(current);
    move(prev, 0, "-100%");


    current++;

    if (current == visual.size()) {
      current = 0;
    }

    var next = visual.eq(current);


    move(next, "100%", 0);


    return false;
  });

  leftBtn.click(function () {
    var prev = visual.eq(current);
    move(prev, 0, "100%");


    current--;

    if (current == -visual.size()) {
      current = 0;
    }

    var next = visual.eq(current);

    move(next, "-100%", 0);


    return false;
  });

  /*section5 배경이미지 */
  



});
