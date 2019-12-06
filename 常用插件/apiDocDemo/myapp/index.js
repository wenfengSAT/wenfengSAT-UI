   /**
    * @apiDescription 
    * Author: 张三
    * @api {post} /api/passwd/findback 找回密码
    * @apiName find_password
    * @apiGroup Auth
    * 
    * @apiParam {string} phone 手机号码
    * @apiParam {string} password 密码
    * @apiSuccessExample {json} Success-Response:
    *  HTTP/1.1 200 OK
    *   {
    *      "code": 10000,
    *      "msg": "密码修改成功"
    *    }
    * @apiErrorExample {json} Error-Response:
    *  HTTP/1.1 404 Not Found
    *   {
    *      "code" => 10014,
    *      "msg" => "重置密码失败"
    *   }
    */

   /**
    * @apiDescription 
    * Author: 李四
    * @api {post} /api/alliance/user/list 用户管理列表
    * @apiName PostUserList
    * @apiGroup User
    * 
    * @apiSuccessExample {json} Success-Response:
    *  HTTP/1.1 200 OK
    *   {
    *      "code": 10000,
    *      "msg": "成功",
    *      "data":
    *         { 
    *           "total":6          //总共的数据条数
    *           "per_page":100     //每页的数据条数
    *           "current_page":1   //当前页是第几页
    *           "last_page":1      //一共有多少页
    *           "next_page_url":null   //下一页的URL地址
    *           "prev_page_url":null   //上一页的URL地址
    *           "data":
    *             {
    *                'name':         //真实姓名
    *                'nickname':     //用户昵称
    *                'sex':          //性别
    *                'age':          //年龄
    *                'email':        //邮箱
    *                'phone':        //电话
    *              } 
    *         }
    *     }
    */