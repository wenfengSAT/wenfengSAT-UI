$(document).ready(function () {
  var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jplayer_N",
    cssSelectorAncestor: "#jp_container_N"
  }, [
      { title: "樱子小姐的脚下埋着尸体", artist: "大竹佑季", mp3: "http://music.163.com/song/media/outer/url?id=36271375.mp3", poster: "http://p1.music.126.net/Q4Dg5QXwft213TBKMv26_A==/3276544653004159.jpg?param=130y130" },
      { title: "非科学的表裏一体", artist: "豚乙女", mp3: "http://music.163.com/song/media/outer/url?id=30870899.mp3", poster: "http://p1.music.126.net/84dpde0vkfsDAVsNNjulXg==/7906588115750467.jpg?param=130y130" },
      { title: "You're the Shine", artist: "：FELT", mp3: "http://music.163.com/song/media/outer/url?id=26260757.mp3", poster: "http://p1.music.126.net/b04i7LFbHLJkmkzwhwRLMA==/2343059278838229.jpg?param=130y130" },
      { title: "旅の途中", artist: "清浦夏実", mp3: "http://music.163.com/song/media/outer/url?id=26220167.mp3", poster: "http://p1.music.126.net/4BgAnUbCDFex3m4z-hWULA==/2509085534622060.jpg?param=130y130" },
      { title: "夏祭り", artist: "東山奈央", mp3: "http://music.163.com/song/media/outer/url?id=488388729.mp3", poster: "http://p1.music.126.net/3eyBH8RjxjXG-EqWShU1wg==/18887410742154555.jpg?param=130y130" },
      { title: "Sway", artist: "Nevve", mp3: "http://music.163.com/song/media/outer/url?id=475073464.mp3", poster: "http://p1.music.126.net/KmPcFcxxg61d15R8yu5x_A==/18681802069425034.jpg?param=130y130" },
      { title: "Vanish", artist: " Breathe Carolina", mp3: "http://music.163.com/song/media/outer/url?id=427542077.mp3", poster: "http://p1.music.126.net/xaX_RkkW0cT4f38k62N8yg==/3413983630702236.jpg?param=130y130" },
      { title: "It's Over", artist: "MEIDEN", mp3: "http://music.163.com/song/media/outer/url?id=477933011.mp3", poster: "http://p1.music.126.net/foJM2P9nq8pXHnCZjcf75w==/19047939439716625.jpg?param=130y130" }
    ],
    {
      playlistOptions: {
        enableRemoveControls: true,
        autoPlay: false
      },
      swfPath: "js/jPlayer",
      supplied: "webmv, ogv, m4v, oga, mp3",
      useStateClassSkin: true,
      autoBlur: false,
      smoothPlayBar: true,
      keyEnabled: true,
      audioFullScreen: false
    });
  var latest = [
    { title: "The wheel of fortune", artist: "Yang Bingyin", mp3: "http://music.163.com/song/media/outer/url?id=476515941.mp3", poster: "http://p1.music.126.net/4xHOkSVWH-n6p5pB3Jf0yQ==/109951162922204274.jpg?param=130y130" },
    { title: "you are my king", artist: "梶浦由記", mp3: "http://music.163.com/song/media/outer/url?id=22731459.mp3", poster: "http://p1.music.126.net/Xy8iaLLLVT21Mr9wDDJBNQ==/792747883650465.jpg?param=130y130" },
    { title: "初恋的小美好", artist: "Sunny是个小太阳", mp3: "http://music.163.com/song/media/outer/url?id=529823229.mp3", poster: "http://p1.music.126.net/7DvTdaOADAw7KiKVkcMcag==/109951163105691071.jpg?param=130y130" },
    { title: "Lilac", artist: "MANYO", mp3: "http://music.163.com/song/media/outer/url?id=28466087.mp3", poster: "http://p1.music.126.net/scAe3f-GkQvo2h91Gpb0Bg==/1729531800492601.jpg?param=130y130" },
    { title: "一人静", artist: "姫神", mp3: "http://music.163.com/song/media/outer/url?id=25917069.mp3", poster: "http://p1.music.126.net/FnElEjsh00iuHWtHXrcY9g==/5638295627307829.jpg?param=130y130" },
    { title: "Through My Blood", artist: "Aimer", mp3: "http://music.163.com/song/media/outer/url?id=409872505.mp3", poster: "http://p1.music.126.net/45Qck88DR58FGgdHdDqfBw==/18181524277717113.jpg?param=130y130" },
    { title: "Too Late To Say", artist: "Sayulee", mp3: "http://music.163.com/song/media/outer/url?id=486194219.mp3", poster: "http://p1.music.126.net/Oa_1_y0a8NCmxB1zYKAFpw==/19187577416516096.jpg?param=130y130" },
    { title: "琥珀色の海へ", artist: "40㍍P", mp3: "http://music.163.com/song/media/outer/url?id=836411.mp3", poster: "http://p1.music.126.net/80iknoJfJHHLUSjz_EiSDw==/18736777650906624.jpg?param=130y130" },
    { title: "からくりピエロ (instrumental)", artist: "MUSIRISCA", mp3: "http://music.163.com/song/media/outer/url?id=33004714.mp3", poster: "http://p1.music.126.net/9kAx7AtyLbLop_XhJy3y5w==/3415083117091737.jpg?param=130y130" },
    { title: "M04", artist: "梶浦由記", mp3: "http://music.163.com/song/media/outer/url?id=591901.mp3", poster: "http://p1.music.126.net/Rm8d72Gom9BZcDOmPBPPkA==/2923601420858492.jpg?param=130y130" },
    { title: "M35", artist: "梶浦由記", mp3: "http://music.163.com/song/media/outer/url?id=28267707.mp3", poster: "http://p1.music.126.net/a-fgC2MhmKzNNOrmrQ_CMA==/5972547162126209.jpg?param=130y130" },
    { title: "哈尔的移动城堡", artist: "久石譲", mp3: "http://music.163.com/song/media/outer/url?id=481390254.mp3", poster: "http://p1.music.126.net/BmJ2bUsQwinDU2KiDsKkEQ==/5998935441331080.jpg?param=130y130" },
    { title: "流れ星 ", artist: "久石譲", mp3: "http://music.163.com/song/media/outer/url?id=26902975.mp3", poster: "http://p1.music.126.net/cJrHNkktHNG62uKdYvGahg==/4453022092508799.jpg?param=130y130" },
    { title: "Memories", artist: "Within Temptation", mp3: "http://music.163.com/song/media/outer/url?id=407002778.mp3", poster: "http://p1.music.126.net/cqNHhKOTcfkwIM8_YIaT1w==/3275445150564990.jpg?param=130y130" },
    { title: "それがあなたの幸せとしても", artist: "rairu", mp3: "http://music.163.com/song/media/outer/url?id=41654821.mp3", poster: "http://p1.music.126.net/SpovasHBud2A1qXXADXsBg==/109951163167455610.jpg?param=130y130" },
    { title: "Angel", artist: "阿桑", mp3: "http://music.163.com/song/media/outer/url?id=205276.mp3", poster: "http://p1.music.126.net/8cSVJulJa2tiLydRxyXuTg==/109951162938339077.jpg?param=130y130" },
    { title: "兰若词", artist: "刘亦菲", mp3: "http://music.163.com/song/media/outer/url?id=255739.mp3", poster: "http://p1.music.126.net/L4Sah2hA5QYBPUnpjjUQ0Q==/26388279081790.jpg?param=130y130" },
    { title: "Pieces Of My Words-言の花-", artist: "刘亦菲", mp3: "http://music.163.com/song/media/outer/url?id=255805.mp3", poster: "http://p1.music.126.net/L4Sah2hA5QYBPUnpjjUQ0Q==/26388279081790.jpg?param=130y130" }
  ];

  var spirit = [
    { title: "M19+20", artist: "梶浦由記", mp3: "http://music.163.com/song/media/outer/url?id=591753.mp3 ", poster: "http://p1.music.126.net/lW4YKD6cMgm32nI66CzWVg==/5702067301704441.jpg?param=130y130" },
    { title: "Sis puella magica!", artist: "梶浦由記", mp3: "http://music.163.com/song/media/outer/url?id=496902072.mp3", poster: "http://p1.music.126.net/tFTRt1H87rReNTyO1K9IDQ==/18498183627713149.jpg?param=130y130" },
    { title: "月は优しく (月)", artist: "梶浦由記", mp3: "http://music.163.com/song/media/outer/url?id=590623.mp3", poster: "http://p1.music.126.net/7xaV2qB-T1d9m8b1XZC6tQ==/725677674344222.jpg?param=130y130" },
    { title: "Euterpe エウテルペ ", artist: "染音若蔡", mp3: "http://music.163.com/song/media/outer/url?id=452654214.mp3", poster: "http://p1.music.126.net/Iqckrd2sOB1ztqrSOw4XzA==/109951162841140691.jpg?param=130y130" },
    { title: "幻光", artist: "杨秉音", mp3: "http://music.163.com/song/media/outer/url?id=526989692.mp3", poster: "http://p1.music.126.net/4xHOkSVWH-n6p5pB3Jf0yQ==/109951162922204274.jpg" },
    { title: "世界の約束", artist: "神罗Shinra", mp3: "http://music.163.com/song/media/outer/url?id=429460870.mp3", poster: "http://p1.music.126.net/rkJSVKRZkfLXOoVwXtiB4w==/18283778858733705.jpg?param=130y130" },
    { title: "Cave OF Mind", artist: "久石譲", mp3: "http://music.163.com/song/media/outer/url?id=28457572.mp3", poster: "http://p1.music.126.net/HdmtedPRZEEBduHcmUnk3w==/853221023209311.jpg?param=130y130" },
    { title: "幽灵公主", artist: "K. Williams", mp3: "http://music.163.com/song/media/outer/url?id=22812274.mp3", poster: "http://p1.music.126.net/GNKtRK8w7edPw3jAsavL2A==/5980243743832365.jpg?param=130y130" },
    { title: "心之逆鳞", artist: "魏小涵", mp3: "http://music.163.com/song/media/outer/url?id=591753.mp3", poster: "http://p1.music.126.net/k_WRxDY1qQ4ztB5uFFrvoA==/17907745881679448.jpg?param=130y130" },
    { title: "愛を教えてくれた君へ", artist: "Qaijff", mp3: "http://music.163.com/song/media/outer/url?id=521416051.mp3", poster: "http://p1.music.126.net/-c3qURPNRNLe-YJMbiZoKA==/109951163072509863.jpg?param=130y130" },
    { title: "群雄疾走", artist: "川井憲次", mp3: "http://music.163.com/song/media/outer/url?id=448153.mp3", poster: "http://p1.music.126.net/r4TK33y6f8cwlntVidXZbQ==/931286348726555.jpg?param=130y130" },
    { title: "Ghost of a smile", artist: "EGOIST", mp3: "http://music.163.com/song/media/outer/url?id=35955908.mp3", poster: "http://p1.music.126.net/ivONokvElv9ZCzyrZp84FQ==/3297435373557125.jpg?param=130y130" },
    
  ];
  $(document).on($.jPlayer.event.pause, myPlaylist.cssSelector.jPlayer, function () {//$(document).on('click','要选择的元素',function(){})  on方法包含很多事件，点击，双击等等事件。
    $('.musicbar').removeClass('animate'); //look this class and remove it
    $('.jp-play-me').removeClass('active');
    $('.jp-play-me').parent('li').removeClass('active');
  }); 28718070

  $(document).on($.jPlayer.event.play, myPlaylist.cssSelector.jPlayer, function () {
    $('.musicbar').addClass('animate');// when the player add a animate
  });
  $("#before,#after").addClass("set_imd");

  $(document).on('click', '.jp-play-me', function (e) {
    e && e.preventDefault();
    var $this = $(e.target);
    if (!$this.is('a')) $this = $this.closest('a');//closest() 方法获得匹配选择器的第一个祖先元素，从当前元素开始沿 DOM 树向上。
    $('.jp-play-me').not($this).removeClass('active');
    $('.jp-play-me').parent('li').not($this.parent('li')).removeClass('active');

    $this.toggleClass('active');
    $this.parent('li').toggleClass('active');
    if (!$this.hasClass('active')) {
      myPlaylist.pause();
    } else {
      var k = $(this).parent("li").index();

      $(".poster-img").attr("src", latest[k].poster);//此方法返回一个函数改变src   $('a.cover1').html('<img src="' + latest[k].poster );
      $(".musicbar").addClass("animate").index();
      myPlaylist.add({
        title: latest[k].title,
        artist: latest[k].artist,
        mp3: latest[k].mp3,
        poster: latest[k].poster
      });
      myPlaylist.play(-1);
    }
  });

  $(document).on('click', '.jp-play-fun', function (e) {
    e && e.preventDefault();
    var $this = $(e.target);
    if (!$this.is('a')) $this = $this.closest('a');//closest() 方法获得匹配选择器的第一个祖先元素，从当前元素开始沿 DOM 树向上。
    $('.jp-play-fun').not($this).removeClass('active');
    $('.jp-play-fun').parent('li').not($this.parent('li')).removeClass('active');

    $this.toggleClass('active');
    $this.parent('li').toggleClass('active');
    if (!$this.hasClass('active')) {
      myPlaylist.pause();
    } else {
      var k = $(this).parent("li").index();
      $(".poster-img").attr("src", spirit[k].poster);
      //此方法返回一个函数改变src   $('a.cover1').html('<img src="' + spirit[k].poster );
      myPlaylist.add({
        title: spirit[k].title,
        artist: spirit[k].artist,
        mp3: spirit[k].mp3,
        poster: spirit[k].poster
      });
      myPlaylist.play(-1);
    }
  });
});
