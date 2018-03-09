//获取当前用户的城市数据渲染到插件中
var mypcas = new PCAS('province,请选择省份', 'city,请选择城市', 'county,请选择县区');
layui.use(['form'], function() {
  var form = layui.form();
  //城市选择
  var province, city;
  form.on('select(province)', function(data) {
    console.log(data.elem); //得到select原始DOM对象
    console.log(data.value); //得到被选中的值
    province = data.value;
    mypcas.SetValue(data.value, "", "");
    form.render('select');
  });
  form.on('select(city)', function(data) {
    console.log(data.elem); //得到select原始DOM对象
    console.log(data.value); //得到被选中的值
    city = data.value;
    mypcas.SetValue(province, data.value, "");
    form.render('select');
  });
  form.on('select(county)', function(data) {
    console.log(data.elem); //得到select原始DOM对象
    console.log(data.value); //得到被选中的值
    mypcas.SetValue(province, city, data.value);
    form.render('select');
  });
  form.verify({
    username: function(value) {
      if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
        return '用户名不能有特殊字符';
      }
      if(/(^\_)|(\__)|(\_+$)/.test(value)) {
        return '用户名首尾不能出现下划线\'_\'';
      }
      if(/^\d+\d+\d$/.test(value)) {
        return '用户名不能全为数字';
      }
    },
    pass: [
      /(?!^\[0-9]+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{6,20}/, '密码必须6到20位，且不能出现空格'
    ],
    phone: function(value) {
      if(!new RegExp(/^0?(13|14|15|18|17)[0-9]{9}$/).test(value)) {
        return "手机号格式不正确"
      }
    },
    identity: function(value) {
      if(!new RegExp(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/).test(value)) {
        return "身份证号码格式不正确"
      }
    }
  })
  //监听提交
  form.on('submit(useradd)', function(data){
    layer.alert(JSON.stringify(data.field), {
      title: '最终的提交信息'
    })
    return false;
  });
})