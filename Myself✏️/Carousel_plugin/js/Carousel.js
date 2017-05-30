// ここにJavascript
(function() {
  var Carousel = function($){
  //①ここに処理内容を書く（ここまでは基本、テンプレ）
    //②JSで使うパーツを定義する
    var  _main = $('.Carousel__main'),
         _item = $('.Carousel__item'),
         _nextButton = $('.Carousel__arrow--next'),
         _prevButton = $('.Carousel__arrow--prev'),
         _itemWidth = _item.width(),
         _clickCount = 0,
         _count,
         _clickEvent;
    //デバック
    // console.log(_main, _item, _prevButton, _nextButton);
    // console.log(_itemWidth);

    _main.css({
      'width': _itemWidth * _item.length
      //*5とかはセンスないで！！
    })
    //console.log(_main.width());

    _count = function(){
      if(_clickCount === 0) {
        //1つ目の画像の時
        _prevButton.hide();
        _nextButton.show();
      } else if(_clickCount >= _item.length -1) {
        //5つ目の画像の時
        _prevButton.show();
        _nextButton.hide();
      } else {
        //それ以外
        _prevButton.show();
        _nextButton.show();
      }
    }

    _move = function(){
      _main.animate({
        'left': -_itemWidth * _clickCount
      }, 700);
    }
    _clickEvent = function(){
      _nextButton.on('click', function(){
        _clickCount ++;
        _count();
        _move();
        // console.log(_clickCount);
      });

      _prevButton.on('click', function(){
        _clickCount --;
        _count();
        _move();
        // console.log(_clickCount);
      });
    }

    _count();
    _clickEvent();

  }(jQuery);

  Carousel();

})();
