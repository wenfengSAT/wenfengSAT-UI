//绘图板动画
(function () {
    
    /**
     * @type {HTMLCanvasElement} canvas 绘图板
    */
    let canvas = document.getElementById("loginAnime");
    console.log('canvas', canvas)
    let ctx = canvas.getContext("2d", { alpha: false });
    /**
     * @description 绘制一个三角形
     * @param {Array<number>} a 点A坐标[x,y]
     * @param {Array<number>} b 点B坐标[x,y]
     * @param {Array<number>} c 点C坐标[x,y]
     * @param {String} color 要绘制的颜色
    */
    function drawTriangle(a, b, c, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(b[0], b[1]);
        ctx.lineTo(c[0], c[1]);
        //console.log(color);
        ctx.fill();
    }

    //drawTriangle([10, 10], [50, 50], [0, 30], "#FF0000");
    //drawTriangle([60, 45], [170, 130], [110, 20], "#00FF00");
    //drawTriangle([300, 300], [300, 400], [200, 350], "#0000FF");

    /**
     * @param {number} percentComplete 移动完成百分比，最大1
    */
    function makeEaseInOut(percentComplete) {
        return percentComplete - Math.sin(percentComplete * 2 * Math.PI) / (2 * Math.PI);
    }

    /**
     * @param {number} percentComplete 移动完成百分比，最大1
    */
    function makeEaseInOut2(percentComplete) {
        if (percentComplete < 0.5) {
            percentComplete *= 2;
            return Math.pow(percentComplete, 2) / 2;
        } else {
            percentComplete = 1 - percentComplete;
            percentComplete *= 2;
            return 1 - Math.pow(percentComplete, 2) / 2;
        }
    }

    // /**
    //  * @description 使用一种缓动方式，移动一个点到x，y
    //  * @param {Array<number>} point 要移动的点
    //  * @param {number} t 移动所需总时间（ms）
    //  * @param {number} x 要移动到的目标x
    //  * @param {number} y 要移动到的目标y
    // */
    // function movePoint(point, t, x, y) {
    //     let startTime;
    //     let startX = point[0];
    //     let startY = piont[1];
    //     let toMoveX = 0, toMoveY = 0;
    //     if (x != null) toMoveX = x - startX;
    //     if (y != null) toMoveY = y - startY;
    //     function reSet(timestamp) {
    //         if (!startTime) startTime = timestamp;
    //         let progress = timestamp - startTime;
    //         let persent = progress / t;
    //         if (persent > 1) persent = 1;
    //         let persentRe = makeEaseInOut(persent);
    //         point[0] = startX + persentRe * toMoveX;
    //         point[1] = startY + persentRe * toMoveY;
    //         if (persent < 1) {
    //             window.requestAnimationFrame(reSet);
    //         }
    //     }
    //     window.requestAnimationFrame(reSet);
    // }

    /**
     * @description 按照一种缓动方式，得到某点在t毫秒时的x，y，返回一个数组[x,y]
     * @param {Array<number>} point 要移动的点
     * @param {number} t 单程移动所需时间（ms）
     * @param {number} g 已经经过的时间
     * @param {number} x 要移动到的目标x
     * @param {number} y 要移动到的目标y
    */
    function getMovePoint(point, t, g, x, y) {
        let startX = point[0];
        let startY = point[1];
        let toMoveX = 0, toMoveY = 0;
        if (x != null) toMoveX = x - startX;
        if (y != null) toMoveY = y - startY;
        let persent = g / t;
        persent %= 2;
        let persentRe;
        if (persent < 1) {
            persentRe = makeEaseInOut2(persent);
        } else {
            persentRe = 1 - makeEaseInOut2(persent - 1);
        }
        return [startX + persentRe * toMoveX, startY + persentRe * toMoveY];
    }

    /**
     * @description 质朴长存法  by lifesinger,
     * http://blog.csdn.net/aimingoo/article/details/4492592
     * @param {number} n 要处理的字符串或数字
     * @param {String|number} num 字符串需求长度
    */
    function padStr(num, n) {
        var len = num.toString().length;
        while (len < n) {
            num = "0" + num;
            len++;
        }
        return num;
    }


    /**
     * @description 按照等速渐变，得到某点在t毫秒时的颜色，返回一个字符串
     * @param {Array<number>} from 来源颜色
     * @param {number} t 单程移动所需时间（ms）
     * @param {number} g 已经经过的时间
     * @param {number} l 额外亮度增益，最大1，默认0
     * @param {Array<number>} to 目标颜色
    */
    function getMoveColor(from, to, t, gone, l) {
        let persent = gone / t;
        persent %= 2;
        if (persent > 1) persent = 2 - persent;
        let r = from[0] + (to[0] - from[0]) * persent;
        let g = from[1] + (to[1] - from[1]) * persent;
        let b = from[2] + (to[2] - from[2]) * persent;
        //如果存在亮度
        if (l > 0) {
            //if (r != 0) { r = (255 - r) * l + r }
            // if (g != 0) { g = (255 - g) * l + g }
            // if (b != 0) { b = (255 - b) * l + b }
            let bAdded;
            if (b != 0) {
                bAdded = (255 - b) * l;
                b = (255 - b) * l + b
            }
            if (g != 0) {
                //g = (255 - g) * l + g
                g += bAdded;
                if (g > 255) g = 255
            }
        }
        r = parseInt(r);
        g = parseInt(g);
        b = parseInt(b);
        //console.log(l);

        //return `rgb(${r},${g},${b})`;

        //For IE
        return "rgb(" + r + "," + g + "," + b + ")";

        // r = r.toString(16);
        // g = g.toString(16);
        // b = b.toString(16);
        // return `#${padStr(r, 2)}${padStr(g, 2)}${padStr(b, 2)}`;
    }


    /**
     * @description 随机得到一个rgb颜色数组
    */
    function getRandomRGB() {
        //return [20 + parseInt(Math.random() * 60), 100 + parseInt(Math.random() * 80), 180 + parseInt(Math.random() * 75)];
        let r = 0;
        let randomNum = Math.random();
        let g = 130 + parseInt(randomNum * 30);
        let b = 160 + parseInt(randomNum * 50);
        //if (g > b - 30);
        //g = b - 30;
        return [r, g, b];
    }

    /**
     * @description 随机得到一个亮一些的rgb颜色数组
    */
    function getRandomRGBLight() {
        //return [20 + parseInt(Math.random() * 60), 100 + parseInt(Math.random() * 80), 180 + parseInt(Math.random() * 75)];
        let r = 0;
        let randomNum = Math.random();
        randomNum = randomNum / 2 + 0.5
        let g = 140 + parseInt(randomNum * 45);
        let b = 180 + parseInt(randomNum * 55);
        //if (g > b - 30);
        //g = b - 30;
        return [r, g, b];
    }

    /**
     * @description 得到一个2维数组
     * @type {Array<Array<>>}
     * @param {number} x 第一层大小
     * @param {number} y 第二层大小
    */
    function creave2xArray(x, y) {
        let re = new Array(x);
        for (let i = 0; i < x; i++) {
            re[i] = new Array(y);
        }
        return re;
    }
    /**
     * @description 得到一个3维数组
     * @type {Array<Array<Array<>>>}
     * @param {number} x 第一层大小
     * @param {number} y 第二层大小
     * @param {number} z 第三层大小
    */
    function creave3xArray(x, y, z) {
        let re = new Array(x);
        for (let i = 0; i < x; i++) {
            re[i] = new Array(y);
            for (let j = 0; j < y; j++) {
                re[i][j] = new Array(z);
            }
        }
        return re;
    }

    /**
     * @description 设置图形亮度
     * @type {void}
     * @param {Array<Array<number>>} brightArr 要用于存放亮度的已经被清空的数组
     * @param {number} pointX 目标坐标X
     * @param {number} pointY 目标坐标Y
     * @param {number} decaySpeed 每一格光照强度等量衰减
     * @param {number} bright 目标所在的光照强度
    */
    function setBright(brightArr, pointX, pointY, decaySpeed, bright) {
        let brightSet;
        for (let i = 0; i < brightArr.length; i++) {
            for (let j = 0; j < brightArr[0].length; j++) {
                brightArr[i][j] = bright - decaySpeed * Math.sqrt((pointX - i) * (pointX - i) + (pointY - j) * (pointY - j)) * 0.7;
                if (brightArr[i][j] < 0) brightArr[i][j] = 0;
            }
        }
    }

    /**
     * @description 绘图主函数
     */
    function drawMain() {
        /**
         * 点用二维数组 包含 一维数组（实际三维，厚度2）
         * @type {Array<Array<Array<number>>>} 坐标点记录[行][列] [0]=>x [1]=>y
        */
        let points = creave3xArray(4, 12, 2);
        /**
         * 目标点位置用二维数组 包含 一维数组（实际三维，厚度2）
         * @type {Array<Array<Array<number>>>} 坐标点记录[行][列] [0]=>x [1]=>y
        */
        let pointsTarget = creave3xArray(4, 12, 2);
        /**
         * 点单程移动需要时间用二维数组
         * @type {Array<Array<number>>} 坐标点记录[行][列] [0]=>x [1]=>y
        */
        let pointsMoveTime = creave2xArray(4, 12);
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 12; j++) {
                points[i][j][0] = j * 140 - 600 + parseInt(Math.random() * 100);
                points[i][j][1] = i * 188 - 120 + parseInt(Math.random() * 20);;
                pointsTarget[i][j][0] = points[i][j][0] + parseInt(Math.random() * 260);
                pointsTarget[i][j][1] = points[i][j][1] + parseInt(Math.random() * 20);
                pointsMoveTime[i][j] = 5000 + parseInt(Math.random() * 3000);
                //pointsMoveTime[i][j] = 500 + parseInt(Math.random() * 1000);//某人恶趣味的速度
            }
        }
        /**
         * 点在特定时间的位置用二维数组 包含 一维数组（实际三维，厚度2）
         * @type {Array<Array<Array<number>>>} 坐标点记录[行][列] [0]=>x [1]=>y
        */
        let pointsNow = creave3xArray(4, 12, 2);
        /**
         * 三角形颜色用二维数组 包含 一维数组长度3
         * @type {Array<Array<>>} [0] => r, [1] => g, [2] => b
        */
        let shapeColorUP = creave2xArray(3, 11);
        let shapeColorDOWN = creave2xArray(3, 11);
        let shapeColorUPFrom = creave2xArray(3, 11);
        let shapeColorDOWNFrom = creave2xArray(3, 11);
        /**
         * 三角形目标颜色用二维数组 包含 一维数组长度3
         * @type {Array<Array<>>} [0] => r, [1] => g, [2] => b
        */
        let shapeColorUPTarget = creave2xArray(3, 11);
        let shapeColorDOWNTarget = creave2xArray(3, 11);
        /**
         * 三角形目标颜色转变，单程时长（ms）
         * @type {Array<Array<number>>} 坐标点记录[行][列] [0]=>x [1]=>y
        */
        let shapeColorUPTime = creave2xArray(3, 11);
        let shapeColorDOWNTime = creave2xArray(3, 11);
        /**
         * 三角形亮度二维数组 ，0-1
         * @type {Array<Array<number>>} 亮度[行][列]
        */
        let shapeBright = creave2xArray(3, 11);
        /**
         * 当前高亮位置，x，y
         * @type {Array<number>} 高亮位置x,y
        */
        let nowHiLightSpeed = [Math.random() * 0.06 - 0.03, Math.random() * 0.1 - 0.05];
        let nowHiLight = [1 + Math.random(), 5 + Math.random()];

        //设置颜色
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 11; j++) {
                shapeColorUPFrom[i][j] = getRandomRGB();
                shapeColorDOWNFrom[i][j] = getRandomRGB();
                shapeColorUPTarget[i][j] = getRandomRGBLight();
                shapeColorDOWNTarget[i][j] = getRandomRGBLight();
                shapeColorUPTime[i][j] = 1000 + parseInt(Math.random() * 2000);
                shapeColorDOWNTime[i][j] = 1000 + parseInt(Math.random() * 2000);
            }
        }

        //为了图像更自然，时间额外增加
        let extraTime = 20000 + parseInt(Math.random() * 20000);

        //每秒60次重绘
        function reDraw(timestamp) {
            let time = extraTime + timestamp
            ctx.moveTo(0, 0);
            ctx.fillStyle = "#00a6d0";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            //重算坐标位置
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 12; j++) {
                    pointsNow[i][j] = getMovePoint(points[i][j], pointsMoveTime[i][j], time, pointsTarget[i][j][0], pointsTarget[i][j][1]);
                }
            }


            //计算最新的高亮移动速度
            nowHiLightSpeed[0] += (Math.random() - 0.5) * 0.028;
            nowHiLightSpeed[1] += (Math.random() - 0.5) * 0.04;

            //限制最大速度
            if (nowHiLightSpeed[0] > 0.3) nowHiLightSpeed[0] = 0.3;
            if (nowHiLightSpeed[0] < -0.3) nowHiLightSpeed[0] = -0.3;
            if (nowHiLightSpeed[1] > 0.6) nowHiLightSpeed[1] = 0.6;
            if (nowHiLightSpeed[1] < -0.6) nowHiLightSpeed[1] = -0.6;


            //移动点
            nowHiLight[0] += nowHiLightSpeed[0];
            nowHiLight[1] += nowHiLightSpeed[1];

            if (nowHiLight[0] < 0) {
                nowHiLight[0] = 0;
                nowHiLightSpeed[0] = Math.random() * 0.014;
            }
            if (nowHiLight[0] >= 3) {
                nowHiLight[0] = 2.999;
                nowHiLightSpeed[0] = Math.random() * -0.014;
            }
            if (nowHiLight[1] < 0) {
                nowHiLight[1] = 0;
                nowHiLightSpeed[1] = Math.random() * 0.02;
            }
            if (nowHiLight[1] >= 11) {
                nowHiLight[1] = 10.999;
                nowHiLightSpeed[1] = Math.random() * -0.02;
            }
            setBright(shapeBright, nowHiLight[0], nowHiLight[1], 0.5, 1);
            //console.log(nowHiLight[0], nowHiLight[1])

            //绘制前最后的准备
            for (let j = 0; j < 11; j++) {
                for (let i = 0; i < 3; i++) {
                    //设置颜色
                    shapeColorUP[i][j] = getMoveColor(shapeColorUPFrom[i][j], shapeColorUPTarget[i][j], shapeColorUPTime[i][j], time, shapeBright[i][j]);
                    shapeColorDOWN[i][j] = getMoveColor(shapeColorDOWNFrom[i][j], shapeColorDOWNTarget[i][j], shapeColorDOWNTime[i][j], time, shapeBright[i][j]);
                    //绘制图像
                    drawTriangle(pointsNow[i][j], pointsNow[i][j + 1], pointsNow[i + 1][j], shapeColorUP[i][j])
                    drawTriangle(pointsNow[i][j + 1], pointsNow[i + 1][j], pointsNow[i + 1][j + 1], shapeColorDOWN[i][j])
                    //清除高亮记录
                    shapeBright[i][j] = 0;
                }
            }
            window.requestAnimationFrame(reDraw);
        }
        window.requestAnimationFrame(reDraw);
    }
    drawMain();

})();