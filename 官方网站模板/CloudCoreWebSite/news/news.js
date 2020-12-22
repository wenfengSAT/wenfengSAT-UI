jQuery(document).ready(function() {
    "use strict";

    /* -------- Appears Menu 滚动显示scroll ------ */
    $(window).on('ready , scroll', function() {
        if ($(window).scrollTop() > 30) {
            $('.main-menu').addClass('minified');
        } else {
            $('.main-menu').removeClass('minified');
        }
    });

    /* ---------- Hide Menu-------- */
    jQuery(".nav a").on("click", function () {
        jQuery("#nav-menu").removeClass("in").addClass("collapse");
    });

    /* ---------- Wow Js ---------- */
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'wow animated', // animation css class (default is animated)
            offset:       250,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
                $('.hidddden').removeClass('hidddden');
            }
        }
    );
    wow.init();

    /*--------------底部切换-------------*/
    $('.contact div').mouseover(function(){
        $('.contact div').removeClass('active');
        $(this).addClass('active');
        $('footer .content p').removeClass('active');
        $("footer .content p:eq("+ $(this).index() +")").addClass('active');
    });


    var data=[
        {det:'newsDet_43.html',image:'../assets/images/news/20180924.jpg',position_x:'0px',position_y:'-182px',date:'2018-09-24',title:'云核网络祝各位新老客户中秋快乐！阖家幸福.'},
        {det:'newsDet_42.html',image:'../assets/images/news/20180915.jpg',date:'2018-09-15',position_x:'0px',position_y:'0px',title:'热烈祝贺昆山农村商业银行企业网上银行、企业手机银行，成功上线',content:'热烈祝贺昆山农村商业银行企业网上银行、企业手机银行，成功上线！企业网上银行支持Windows、Mac OS操作系统，其中 Mac OS 客户端企业网银是中国银行业首家。'},
        {det:'newsDet_41.html',image:'../assets/images/news/20180908.jpg',date:'2018-09-08',title:'热烈祝贺太仓农村商业银行企业网银成功上线',content:'热烈祝贺太仓农村商业银行企业网上银行、企业手机银行，成功上线'},
        {det:'newsDet_40.html',image:'../assets/images/news/20180810.png',position_x:'0px',position_y:'558px',date:'2018-08-10',title:'热烈祝贺晋城银行新核心项目群投产成功',content:'新核心  新征程 热烈祝贺晋城银行新核心项目群投产成功!'},
        {det:'newsDet_39.html',date:'2018-07-20',title:'公司在海口农村商业银行第二季度考核综合评价中排名第一',content:' 在海口农村商业银行股份有限公司信息科技项目2018年度第二季度服务提供商（12家）考核综合评价中，云核网络以满分成绩获得综合排名第一。'},
        {det:'newsDet_1.html',image:'../assets/images/news/20180618.jpg',position_x:'0px',position_y:'188px',date:'2018-06-18',title:'端午节快乐',content:'河道弯曲，然自有规律'},

        {det:'newsDet_38.html',date:'2018-06-16',title:'公司与平安集团深圳壹账通签署银行云服务战略合作框架协议',content:'公司与平安集团深圳壹账通智能科技有限公司签署银行云服务战略合作框架协议。'},
        {det:'newsDet_37.html',date:'2018-06-05',title:'公司在海口农村商业银行第一季度考核综合评价中排名第一',content:'在海口农村商业银行股份有限公司信息科技项目2018年度第一季度服务提供商（10家）考核综合评价中，云核网络以满分成绩获得综合排名第一。'},
        {det:'newsDet_2.html',image:'../assets/images/news/20180501.png',position_x:'0px',position_y:'-102px',date:'2018-05-01',title:'劳动光荣',content:'劳动光荣！向公司还坚守岗位的项目组、研发部致敬！'},
        {det:'newsDet_3.html',image:'../assets/images/news/20180405.jpg',position_x:'0px',position_y:'-206px',date:'2018-04-05',title:'清明怀古 缅怀先祖'},
        {det:'newsDet_4.html',image:'../assets/images/news/20180302.png',position_x:'0px',position_y:'-50px',date:'2017-03-02',title:'祝各位元宵佳节快乐！'},
        {det:'newsDet_5.html',image:'../assets/images/news/20180216.png',position_x:'0px',position_y:'-144px',date:'2017-02-16',title:'春节快乐',content:'在狗年到来之际，云核网络给所有亲朋好友同学同事拜年啦！祝您及家人春节快乐！身体健康！阖家幸福！万事如意！感谢一路上有您！2018我们继续加油！'},

        {det:'newsDet_6.html',image:'../assets/images/news/20180101.png',position_x:'0px',position_y:'-124px',date:'2017-01-01',title:'元旦快乐',content:'祝福大家 新的一年 元气满满 旦种暮成'},
        {det:'newsDet_7.html',image:'../assets/images/news/20171004-1.jpg',position_x:'0px',position_y:'-5px',date:'2017-10-04',title:'中秋国庆双双庆 月圆人圆事事圆',content:'感谢您一直以来对云核网络的支持！在国庆中秋双节到来之际，云核网络祝愿您：中秋国庆双双庆，月圆人圆事事圆。'},
        {det:'newsDet_8.html',image:'../assets/images/news/20170707.jpg',position_x:'0px',position_y:'-50px',date:'2017-07-07',title:'祭奠同胞 勿忘国耻',content:'七七事变七十周年 祭奠同胞 勿忘国耻'},
        {det:'newsDet_9.html',image:'../assets/images/news/20170211.jpg',position_x:'0px',position_y:'-108px',date:'2017-02-11',title:'闹元宵 猜灯谜',content:'元宵节，又称小正月、元夕或灯节，是春节之后的第一个重要节日。其中吃元宵、舞龙舞狮、赏花灯、猜灯谜等狮元宵节几项重要民间习俗。在此，云核网络恭祝全体员工以及广大新老客户元宵佳节快乐！ '},
        {det:'newsDet_10.html',image:'../assets/images/news/20170128.jpg',position_x:'0px',position_y:'-8px',date:'2017-01-28',title:'新年开鸿运',content:'云核网络祝您鸡年大吉！'},
        {det:'newsDet_11.html',image:'../assets/images/news/news_2_2.jpg',position_x:'0px',position_y:'-254px',date:'2017-01-11',title:'感谢有你.共同成长----云核网络2016年度优秀员工表彰大会成功落幕',content:'2017年1月7-8日，云核网络2016年度优秀员工表彰大会在南京顺利召开。会议中，总经理戴林巧先生做了精彩致辞，副总经理罗勇先生进行了年度工作总结报告！'},

        {det:'newsDet_12.html',image:'../assets/images/news/news_3.jpg',position_x:'0px',position_y:'-104px',date:'2016-12-02',title:'三省吾身，厚积薄发 —热烈祝贺云核网络成立三周年',content:'一个品牌的声誉与成功绝非只有偶然，只有历经客户的认可，才能赢得市场。云核网络，2013年仅仅还是进入国内金融服务行业中的新兵，三年时间，稳扎稳打，潜心抓产品质量与服务意识，赢得了客户的认可和赞赏，在行业内取得了不俗的成绩，收获了一个又一个丰硕成果。'},
        {det:'newsDet_13.html',date:'2016-11-22',title:'云核网络承建深圳农商银行信用卡手机银行项目',content:'云核网络承建的深圳农村商业银行信用卡手机银行系统项目为满足多平台用户的需要、提升用户体验主要涉及venus-native-iphone、venus-native-android、venus-h5三个客户端框架的开发，整个项目将分为三期逐步实现建设目的。截止发稿日，该项目已进入三期建设阶段，已上线的系统运行平稳，得到深圳农商银行领导的一致认可。'},
        {det:'newsDet_14.html',date:'2016-10-21',title:'云核网络中标昆山农村商业银行互联网统一支付平台项目',content:'近年来，随着互联网金融的不断发展，在基于互联网的个人金融服务中，线上支付业务是发展最快的服务。随着互联网的普及和网络安全技术的迅速完善，它凭借着其便捷和易用的优势在电子商务的支付手段中日益成为一个主要的支付手段。'},
        {det:'newsDet_15.html',date:'2016-10-20',title:'云核网络承建平安银行网上银行及手机银行安全输入系统国密化改造工作',content:'人民银行、国家密码管理局、发改委、银监会、工信部、公安部等11个部委联合于2012年年中制定了《金融信息系统国产密码应用推广实施方案》，要求按照“总体规范、重点突破、分布实施、稳步推进”的原则，坚持统筹协调、分工负责、科学摆布、平稳过渡、持续发展，又好又快地推进国产密码在金融领域的全面应用，切实提升金融信息安全自主可控能力。在7月底，人民银行召开专项会议，向全国政策性银行、商业银行等金融机构传达了《金融信息系统国产密码应用推广实施方案》，要求各金融机构启动信息系统国产密码应用相关工作。'},
        {det:'newsDet_16.html',date:'2016-09-18',title:'云核网络助力昆山农商行打造自主可控的KAAP应用开发平台'},
        {det:'newsDet_17.html',image:'../assets/images/news/news_11.png',position_x:'0px',position_y:'0px',date:'2016-09-12',title:'2016中秋快乐'},

        {det:'newsDet_18.html',date:'2016-08-17',title:'云核网络承建汉口银行统一消息中心项目',content:'汉口银行统一消息中心项目主要实施功能点分为统一信息推送功能、通道管理功能、消息管理、客户签约管理、模板管理、黑名单管理、数据迁移、动账通知，此次项目实施，为保证项目保质保量的完成，项目主要分为 2 个阶段来进行实施，预计2016年12月正式上线。'},
        {det:'newsDet_19.html',date:'2016-08-05',title:'云核网络与紫金农村商业银行签署2016年下半年手机银行现场服务合同',content:'云核网络出色完成了紫金农村商业银行2016年上半年手机银行现场服务，受到行领导的一致肯定和好评，并于2016年8月3日签署了2016年下半年手机银行现场服务合同，相信通过云核网络现场服务人员的不懈努力，将会使紫金农商银行手机银行在功能、性能上均有较大提升！     '},
        {det:'newsDet_20.html',date:'2016-08-03',title:'云核网络中标鄞州银行手机银行改版项目',content:'鄞州银行为实现电子银行业务再次转型，搭建起移动应用平台级产品，突破原有手机银行需线下获客的瓶颈，积极应对移动互联网的挑战，抢占II类账户全面放开的先机，对鄞州银行现有手机银行进行改版。改版后的手机银行将实现从渠道类产品向平台类产品转变、从服务类产品向营销类产品的转变。'},
        {det:'newsDet_21.html',image:'../assets/images/news/news_18_1.png',position_x:'0px',position_y:'0px',date:'2016-01-16',title:'云核网络2015年“感谢有你 · 共同成长”主题年会圆满结束',content:'云核网络2015年“感谢有你·共同成长”主题年会于2016年1月10日在无锡太湖风景区圆满结束，会议中云核网络公司总经理戴林巧先生致辞，副总经理罗勇先生做2015年度工作总结报告，同时本次年会还对2015年度优秀员工进行了表彰。'},
        {det:'newsDet_22.html',image:'../assets/images/news/news_19.jpg',position_x:'0px',position_y:'0px',date:'2016-01-09',title:'感谢有你 · 共同成长 ——暨云核网络2015年员工表彰大会如期召开',content:'  云核网络2015年员工表彰大会于2016年1月9日在无锡太湖顺利召开，根据前期优秀员工评选活动，本次共产生10名优秀员工。'},
        {det:'newsDet_23.html',image:'../assets/images/news/news_22.jpg',position_x:'0px',position_y:'0px',date:'2015-12-16',title:'云核网络与昆山农商银行建立战略合作伙伴关系'},

        {det:'newsDet_24.html',date:'2015-10-20',title:'云核网络中标宁波市资金清算中心移动金融公共服务平台跨行移动支付平台项目',content:' 为贯彻落实人民银行宁波市中心支行关于建设“宁波普惠金融综合示范区”的工作部署，构建“全面覆盖、重点渗透、服务便利、信用完善、权益保障”的普惠金融体系，在全面深化改革背景下推进宁波市金融业的转型升级。'},
        {det:'newsDet_25.html',date:'2015-10-19',title:'云核网络进驻宁波银行为其提供专业的技术服务',content:'团队精英、技术领先、懂核心、懂直销、懂安全、懂规划'},
        {det:'newsDet_26.html',date:'2015-06-19',title:'云核网络中标太仓农村商业银行手机银行项目',content:'  随着智能手机的普及，传统金融服务模式正受着前所未有的冲击。几乎人人都可通过安装手机银行客户端，将手机变成一个7x24小时提供服务并能随身携带的手机银行, 随时随地体验金融服务，享受移动商圈及移动支付等带来的优惠与便利。 '},
        {det:'newsDet_27.html',date:'2015-04-27',title:'云核网络中标江阴农村商业银行网银管家系统阿里云服务建设项目',content:' 网银管家系统是一个可以防止钓鱼、可以管理网银入口，可以简化网银环境设置的客户端程序。它在对网银客户端进行安全增强的同时，还降低了网银对用户的使用要求，从而使得用户在使用网银时既放心又舒心。'},
        {det:'newsDet_28.html',date:'2015-04-23',title:'云核网络中标鄞州银行支付平台与直销银行项目',content:'  鄞州银行顺应互联网金融的发展潮流，建设支付平台与直销银行系统，建设时间与时机恰到好处。支付服务是互联网金融的基础，是充值、提现的基础，是购买宝宝类产品的基础，是网上购物的基础，更是打造O2O闭环中的核心。在支付服务中引入电子账户可以为实现各类O2O支付服务场景提供基础。对某些存在顾虑的客户，通过设立独立的电子账户也可以达到控制资金风险的目的。本项目的特色在于将支付服务与电子账户有机结合，可以为客户提供基于电子账户的快捷支付服务。'},
        {det:'newsDet_29.html',date:'2015-01-30',title:'云核网络为北京众联财富投资有限公司打造线上平台系统',content:' 云核网络为北京众联财富投资有限公司打造众联财富线上平台销售系统 。         '},

        {det:'newsDet_30.html',date:'2014-12-27',title:'云核网络中标鄞州银行ESB项目',content:'   随着鄞州银行业务的快速发展，鄞州银行对IT架构提出了新的要求，要求实现全行业务系统功能服务化，通过服务化的功能组件复用和灵活组合，达到快速响应市场业务变化的目的。'},
        {det:'newsDet_31.html',date:'2014-11-15',title:'云核网络中标鄞州银行移动信贷项目',content:' 国家发展改革委办公厅、中国人民银行办公厅共同下发了《关于组织开展移动电子商务金融科技服务创新试点工作的通知》（发改办高技〔2014〕1100号），其中要求宁波作为试点城市之一，宁波市人民政府和人民银行宁波中心支行共同推动移动金融安全可信公共服务平台（MTPS）建设，组织建设符合法律和标准的城市移动金融安全可信服务管理系统（TSM），并开展相应的移动金融创新试点工作。'},
        {det:'newsDet_32.html',date:'2014-09-02',title:'云核网络与攀枝花市商业银行签署电子银行项目监理及安全监理合同',content:'   日前，云核网络与攀枝花市商业银行签署了网上银行系统、手机银行系统、直销银行系统的项目监理及安全监理项目合同。'},
        {det:'newsDet_33.html',date:'2014-08-08',title:'云核网络与南充市商业银行签署电子银行基础开发平台及电子银行系统技术支持服务合同',content:'  南充市商业银行近年来蓬勃发展，已经成为一家资产过千亿、员工过千人、有国际金融背景、跨区域、有特色的现代精品银行。近日，我公司与南充市商业银行签署了电子银行基础开发平台及电子银行系统的技术支持服务合同,将对南充市商业银行电子银行的发展起到积极推动作用。'},
        {det:'newsDet_34.html',date:'2014-08-07',title:'云核网络与拉卡拉支付有限公司签署技术服务合同',content:'近日，云核网络与拉卡拉支付有限公司签署技术服务合同，为拉卡拉提供用户中心系统，邮件账单系统的软件开发服务。'},
        {det:'newsDet_35.html',date:'2014-08-07',title:'云核网络与昆仑天地签署技术咨询服务合同',content:' 近日，云核网络与昆仑天地签署技术咨询服务合同，云核网络将为昆仑天地提供大数据情况下的应用服务架构与安全体系建设的技术咨询服务。'},

        {det:'newsDet_36.html',image:'../assets/images/news/news_70.jpg',position_x:'0px',position_y:'0px',date:'2011-11-10',title:'我公司总经理戴林巧在中国银行业信息科技风险管理2011年会上作主题演讲',content:'2011年11月8日，我公司总经理戴林巧先生在中国银行业信息科技风险管理2011年会上作“网上银行暨电子银行安全风险防控”主题演讲 。'},

    ];

    var n=1;

    //瀑布流
    var $container = $('#masonry');

    f1();

    //滑动到底部加载更多
    $(window).scroll(function() {
        if($('.grid-item').length){
            var max=Math.ceil(data.length/6);
            var scrollTop=$(document).scrollTop();
            var windowHeight=$(this).height();
            var scrollHeight=$(document).height();
            if (scrollTop + windowHeight >= scrollHeight-80 && n<=max){
                f();
            }
        }
    });

    //默认加载6条，初始化isotope
    function f1(){
        var html='';
        var len=data.length-(6*n-6)>=6 ? 6*n : 6*(n-1)+data.length-(6*n-6);
        for(var i=6*n-6;i<len;i++){
            var cur=data[i];
            if(cur.image&&cur.content){
                var imageUrl=cur.image;
                html+='<div class="grid-item news-topDate" onclick="location.href=\''+cur.det+'\'">' +
                    '               <div> <div class="news-img" style="background: url('+imageUrl+');background-size: cover;background-position: '+cur.position_x+' '+cur.position_y+'"></div></div>' +
                    '                <p>' +
                    '                    <b>'+cur.date.substr(8,2)+'</b>' +
                    '                    <span>/'+cur.date.substr(5,2)+'&nbsp;'+cur.date.substr(0,4)+'</span>' +
                    '                </p>' +
                    '                <div>' +
                    '                    <h4>'+cur.title+'</h4>' +
                    '                    <p class="multiline"> '+cur.content+'</p>' +
                    '                    <div>查看详情</div>' +
                    '                </div>' +
                    '            </div>';
            }else if(cur.image && !cur.content){
                var imageUrl=cur.image;
                html+='<div class="grid-item news-topDate" onclick="location.href=\''+cur.det+'\'">' +
                    '                <div><div class="news-img" style="background: url('+imageUrl+');background-size: cover;background-position: '+cur.position_x+' '+cur.position_y+'"></div></div>' +
                    '                <p>' +
                    '                    <b>'+cur.date.substr(8,2)+'</b>' +
                    '                    <span>/'+cur.date.substr(5,2)+'&nbsp;'+cur.date.substr(0,4)+'</span>' +
                    '                </p>' +
                    '                <div>' +
                    '                    <h4>'+cur.title+'</h4>' +
                    '                    <div>查看详情</div>' +
                    '                </div>' +
                    '            </div>';
            }else if(!cur.image && cur.content){
                html+='<div class="grid-item" onclick="location.href=\''+cur.det+'\'">' +
                    '                <p>' +
                    '                    <b>'+cur.date.substr(8,2)+'</b>' +
                    '                    <span>/'+cur.date.substr(5,2)+'&nbsp;'+cur.date.substr(0,4)+'</span>' +
                    '                </p>' +
                    '                <div>' +
                    '                    <h4>'+cur.title+'</h4>' +
                    '                    <p class="multiline"> '+cur.content+'</p>' +
                    '                    <div>查看详情</div>' +
                    '                </div>' +
                    '            </div>';
            }else{
                html+='<div class="grid-item" onclick="location.href=\''+cur.det+'\'">' +
                    '                <p>' +
                    '                    <b>'+cur.date.substr(8,2)+'</b>' +
                    '                    <span>/'+cur.date.substr(5,2)+'&nbsp;'+cur.date.substr(0,4)+'</span>' +
                    '                </p>' +
                    '                <div>' +
                    '                    <h4>'+cur.title+'</h4>' +
                    '                    <div>查看详情</div>' +
                    '                </div>' +
                    '            </div>';
            }
        }

        var $items=$(html);
        $container.append( $items );
        $container.isotope({
            itemSelector: '.grid-item',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        clampTxt();
        n++;
    }

    function f() {
        var html='';
        var len=data.length-(6*n-6)>=6 ? 6*n : 6*(n-1)+data.length-(6*n-6);
        for(var i=6*n-6;i<len;i++){
            var cur=data[i];
            if(cur.image&&cur.content){
                var imageUrl=cur.image;
                html+='<div class="grid-item news-topDate" onclick="location.href=\''+cur.det+'\'">' +
                    '               <div> <div class="news-img" style="background: url('+imageUrl+');background-size: cover;background-position: '+cur.position_x+' '+cur.position_y+'"></div></div>' +
                    '                <p>' +
                    '                    <b>'+cur.date.substr(8,2)+'</b>' +
                    '                    <span>/'+cur.date.substr(5,2)+'&nbsp;'+cur.date.substr(0,4)+'</span>' +
                    '                </p>' +
                    '                <div>' +
                    '                    <h4>'+cur.title+'</h4>' +
                    '                    <p class="multiline"> '+cur.content+'</p>' +
                    '                    <div>查看详情</div>' +
                    '                </div>' +
                    '            </div>';
            }else if(cur.image && !cur.content){
                var imageUrl=cur.image;
                html+='<div class="grid-item news-topDate" onclick="location.href=\''+cur.det+'\'">' +
                    '                <div><div class="news-img" style="background: url('+imageUrl+');background-size: cover;background-position: '+cur.position_x+' '+cur.position_y+'"></div></div>' +
                    '                <p>' +
                    '                    <b>'+cur.date.substr(8,2)+'</b>' +
                    '                    <span>/'+cur.date.substr(5,2)+'&nbsp;'+cur.date.substr(0,4)+'</span>' +
                    '                </p>' +
                    '                <div>' +
                    '                    <h4>'+cur.title+'</h4>' +
                    '                    <div>查看详情</div>' +
                    '                </div>' +
                    '            </div>';
            }else if(!cur.image && cur.content){
                html+='<div class="grid-item" onclick="location.href=\''+cur.det+'\'">' +
                    '                <p>' +
                    '                    <b>'+cur.date.substr(8,2)+'</b>' +
                    '                    <span>/'+cur.date.substr(5,2)+'&nbsp;'+cur.date.substr(0,4)+'</span>' +
                    '                </p>' +
                    '                <div>' +
                    '                    <h4>'+cur.title+'</h4>' +
                    '                    <p class="multiline"> '+cur.content+'</p>' +
                    '                    <div>查看详情</div>' +
                    '                </div>' +
                    '            </div>';
            }else{
                html+='<div class="grid-item" onclick="location.href=\''+cur.det+'\'">' +
                    '                <p>' +
                    '                    <b>'+cur.date.substr(8,2)+'</b>' +
                    '                    <span>/'+cur.date.substr(5,2)+'&nbsp;'+cur.date.substr(0,4)+'</span>' +
                    '                </p>' +
                    '                <div>' +
                    '                    <h4>'+cur.title+'</h4>' +
                    '                    <div>查看详情</div>' +
                    '                </div>' +
                    '            </div>';
            }
        }

        var $items=$(html);
        $container.append( $items );
        $container.imagesLoaded(function() {//图片加载完成之后再渲染新加的块儿
            $container.isotope( 'appended', $items ,true)
                .isotope('reloadItems');
        });
        clampTxt();
        n++;
    }

    //只显示四行文本，显示不下就显示...
    function clampTxt(){
        var nodes=document.getElementsByClassName("multiline");
        for(var i=0;i<nodes.length;i++){
            $clamp(nodes[i],{clamp:4});
        }
    }
    clampTxt();


});
