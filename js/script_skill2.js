$(function () {

  floatDiv();

  //마우스 휠 이벤트
  function floatDiv() {
    var contents = $('#section>div');

    //스크롤 이동시 컨텐츠 영역들 탑으로 이동
    $(window).scroll(function () {
      var sct = $(window).scrollTop();

      contents.each(function () {
        var tg = $(this);
        var i = tg.index();

        //스트롤탑의 위치가 top보다 크거나 같다면 tg를 특정좌표로 이동
        if (tg.offset().top <= sct) {
          switch (i) {
            case 0:
              skillsProgressbar();
              break;
          }
        }
      });
    });

    //마우스 휠 이벤트
    $('div.mn').each(function () {
      $(this).on("mousewheel DOMMouseScroll", function (e) {
        e.preventDefault();

        var delta = 0;

        if (!event) {
          event = window.event;
        }
        if (event.wheelDelta) {
          delta = event.wheelDelta / 120; //익스,크롬,오페라
        } else if (event.detail) {
          delta = -event.detail / 3 //파이어폭스
        }

        //마우스 휠을 위에서 아래로
        if (delta < 0) {
          if ($(this).next() != undefined) {
            moveTop = $(this).next().offset() ? $(this).next().offset().top : 4000;
          }
        } else { //마우스 휠을 아래에서 위로
          if ($(this).prev() != undefined) {
            moveTop = $(this).prev().offset().top;
          }
        }

        //화면이동 0.5초
        $('html, body').stop().animate({
          scrollTop: moveTop + 'px'
        }, {
          duration: 500
        });

      });
    });

  };



  /* skills */
  function skillsProgressbar() {
    var htmlNum = 85;
    var cssNum = 85;
    var javascriptNum = 70;
    var jqueryNum = 70;
    var photoshopNum = 85;
    var illustratorNum = 85;
    var reactNum = 60;
    var AfterEffectNum = 60;
    var githubNum = 60;
    var figmaNum = 60;
    var max = 100;
    var duration = 1500;

    //그래프 처음 위치 초기화
    $('.bar').css('right', '100%');

    //html
    $('#html_bar').stop().animate({
      'right': 100 - (htmlNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#html_cnt').text(Math.round(htmlNum * progress)); //반올림
      }
    });

    //css
    $('#css_bar').stop().animate({
      'right': 100 - (cssNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#css_cnt').text(Math.round(cssNum * progress)); //반올림
      }
    });

    //javascript
    $('#javascript_bar').stop().animate({
      'right': 100 - (javascriptNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#javascript_cnt').text(Math.round(javascriptNum * progress)); //반올림
      }
    });

    //jquery
    $('#jquery_bar').stop().animate({
      'right': 100 - (jqueryNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#jquery_cnt').text(Math.round(jqueryNum * progress)); //반올림
      }
    });

    //photoshop
    $('#photoshop_bar').stop().animate({
      'right': 100 - (photoshopNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#photoshop_cnt').text(Math.round(photoshopNum * progress)); //반올림
      }
    });

    //illustrator
    $('#illustrator_bar').stop().animate({
      'right': 100 - (illustratorNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#illustrator_cnt').text(Math.round(illustratorNum * progress)); //반올림
      }
    });

    //react
    $('#react_bar').stop().animate({
      'right': 100 - (reactNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#react_cnt').text(Math.round(reactNum * progress)); //반올림
      }
    });

    //AfterEffect
    $('#AfterEffect_bar').stop().animate({
      'right': 100 - (AfterEffectNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#AfterEffect_cnt').text(Math.round(AfterEffectNum * progress)); //반올림
      }
    });

    //GITHUB
    $('#github_bar').stop().animate({
      'right': 100 - (githubNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#github_cnt').text(Math.round(githubNum * progress)); //반올림
      }
    });

    //figma
    $('#figma_bar').stop().animate({
      'right': 100 - (figmaNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#figma_cnt').text(Math.round(figmaNum * progress)); //반올림
      }
    });
  }


});