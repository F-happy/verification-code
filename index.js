/**
 * Created by fuhuixiang on 16-7-19.
 */
'use strict';

exports.create = function () {
    var selfWidth  = 90,
        selfHeight = 30,
        canvas     = document.createElement('canvas'),
        ctx        = canvas.getContext('2d'),
        temp       = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPRSTUVWXYZ23456789'.split(''),
        vCode      = '',
        color      = 'rgb(' + randInt(1, 120) + ',' + randInt(1, 120) + ',' + randInt(1, 120) + ')';

    canvas.width = selfWidth;
    canvas.height = selfHeight;
    ctx.fillStyle = '#f3fbfe';
    ctx.fillRect(0, 0, selfWidth, selfHeight);
    ctx.globalAlpha = .8;
    ctx.font = '16px sans-serif';

    for (var _i = 0; _i < 10; _i++) {
        ctx.fillStyle = 'rgb(' + randInt(150, 225) + ',' + randInt(150, 225) + ',' + randInt(150, 225) + ')';
    }

    ctx.font = 'bold 32px sans-serif';
    for (var i = 0; i < 4; i++) {
        var temp_index = randInt(0, temp.length);
        ctx.fillStyle = color;
        ctx.fillText(temp[temp_index], 5 + i * 23, 25);
        ctx.transform(randFloat(0.85, 1.0), randFloat(-0.04, 0), randFloat(-0.3, 0.3), randFloat(0.85, 1.0), 0, 0);
        vCode += temp[temp_index];
    }

    ctx.beginPath();
    ctx.strokeStyle = color;
    var b         = randFloat(selfHeight / 4, 3 * selfHeight / 4),
        f         = randFloat(selfHeight / 4, 3 * selfHeight / 4),
        w         = 2 * Math.PI / (randFloat(selfHeight * 1.5, selfWidth)),
        linePoint = function (x) {
            return randFloat(10, selfHeight / 2) * Math.sin(w * x + f) + b;
        };

    ctx.lineWidth = 5;
    for (var x = -20; x < 200; x += 4) {
        ctx.moveTo(x, linePoint(x));
        ctx.lineTo(x + 3, linePoint(x + 3));
    }
    ctx.closePath();
    ctx.stroke();

    return {
        code: vCode.toLowerCase(),
        dataURL: canvas.toDataURL()
    };
};

/**
 * 随机获得一个范围内的浮点数
 * @param start
 * @param end
 * @returns {*}
 */
function randFloat(start, end) {
    return start + Math.random() * (end - start);
}

/**
 * 随机获得一个范围内的整数
 * @param start
 * @param end
 * @returns {*}
 */
function randInt(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}
