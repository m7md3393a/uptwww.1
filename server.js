"use strict";
var _0xda4b = [
    "node-bash-title",
    "\ud83c\udf7b Dark Bot [DarkDevs]",
    "\nLoading...",
    "log",
    "If This Take Too long make sure u have add right token!",
    "fs",
    "js-yaml",
    "./config.yml",
    "readFileSync",
    "load",
    "discord.js",
    "quick.db",
    "path",
    "commands",
    "login",
    "jimp",
    "ms",
    "node-fetch",
    "DarkUpTime",
    "get",
    "url",
    "map",
    "",
    "forEach",
    "Pong",
    "ready",
    "isArray",
    "set",
    "on",
    "PLAYING",
    "setActivity",
    "user",
    "clear",
    "\u001b[36m%s\u001b[0m",
    "\r\n \u2593\u2588\u2588\u2588\u2588\u2588\u2584 \u2584\u2584\u2584 \u2588\u2588\u2580\u2588\u2588\u2588 \u2588\u2588 \u2584\u2588\u2580 \r\n \u2592\u2588\u2588\u2580 \u2588\u2588\u258c\u2592\u2588\u2588\u2588\u2588\u2584 \u2593\u2588\u2588 \u2592 \u2588\u2588\u2592 \u2588\u2588\u2584\u2588\u2592 \r\n \u2591\u2588\u2588 \u2588\u258c\u2592\u2588\u2588 \u2580\u2588\u2584 \u2593\u2588\u2588 \u2591\u2584\u2588 \u2592\u2593\u2588\u2588\u2588\u2584\u2591 \r\n \u2591\u2593\u2588\u2584 \u258c\u2591\u2588\u2588\u2584\u2584\u2584\u2584\u2588\u2588 \u2592\u2588\u2588\u2580\u2580\u2588\u2584 \u2593\u2588\u2588 \u2588\u2584 \r\n \u2591\u2592\u2588\u2588\u2588\u2588\u2593 \u2593\u2588 \u2593\u2588\u2588\u2592\u2591\u2588\u2588\u2593 \u2592\u2588\u2588\u2592\u2592\u2588\u2588\u2592 \u2588\u2584 \r\n \u2592\u2592\u2593 \u2592 \u2592\u2592 \u2593\u2592\u2588\u2591\u2591 \u2592\u2593 \u2591\u2592\u2593\u2591\u2592 \u2592\u2592 \u2593\u2592 \r\n \u2591 \u2592 \u2592 \u2592 \u2592\u2592 \u2591 \u2591\u2592 \u2591 \u2592\u2591\u2591 \u2591\u2592 \u2592\u2591 \r\n \u2591 \u2591 \u2591 \u2591 \u2592 \u2591\u2591 \u2591 \u2591 \u2591\u2591 \u2591 \r\n \u2591 \u2591 \u2591 \u2591 \u2591 \u2591 \r\n \u2591 ",
    "\n\u001b[32m%s\u001b[0m",
    " $[INFO]: Logged on ",
    "tag",
    "\u001b[32m%s\u001b[0m",
    " $[INFO]: PREFIX ",
    " $[EXTRA]: CUSTOM MADE TICKET-SYSTEM",
    "\n\u001b[31m%s\u001b[0m",
    " $[HOW]: To Check Commands List Type ",
    "help",
    "\u001b[31m%s\u001b[0m",
    " $[CREDITS]: Made By DarkBoy/DarkMisehl YT",
    " $[SUPPORT]: DarkDevs: https://discord.gg/rSvmYx8 ",
    ".js",
    "endsWith",
    "filter",
    "name",
    "message",
    "prefix_",
    "id",
    "guild",
    "bot",
    "author",
    "type",
    "channel",
    "dm",
    "startsWith",
    "content",
    "split",
    "trim",
    "length",
    "slice",
    "toLowerCase",
    "shift",
    "has",
    "run",
    "error",
];
var setTitle = require(_0xda4b[0]);
setTitle(_0xda4b[1]);
console[_0xda4b[3]](_0xda4b[2]);
console[_0xda4b[3]](_0xda4b[4]);
var fs = require(_0xda4b[5]);
var yaml = require(_0xda4b[6]);
var _yaml$_0xda4b$ = yaml[_0xda4b[9]](fs[_0xda4b[8]](_0xda4b[7]));
var mainprefix = _yaml$_0xda4b$.mainprefix;
var token = _yaml$_0xda4b$.token;
var status = _yaml$_0xda4b$.status;
var Discord = require(_0xda4b[10]);
var client = new Discord.Client();
var db = require(_0xda4b[11]);
var _require = require(_0xda4b[12]);
var join = _require.join;
var _require2 = require(_0xda4b[5]);
var readdirSync = _require2.readdirSync;
client[_0xda4b[13]] = new Discord.Collection();
client.login(process.env.token);
var jimp = require(_0xda4b[15]);
var ms = require(_0xda4b[16]);
var fetch = require(_0xda4b[17]);
setInterval(function () {
    var _0x3db0xa = db[_0xda4b[19]](_0xda4b[18]);
    if (!_0x3db0xa) {
        return;
    }
    var _0x3db0xb = _0x3db0xa[_0xda4b[21]](function (canCreateDiscussions) {
        return canCreateDiscussions[_0xda4b[20]];
    });
    _0x3db0xb[_0xda4b[23]](function (pointsToEvaluate) {
        try {
            fetch(pointsToEvaluate);
        } catch (msg) {
            console[_0xda4b[3]](_0xda4b[22] + msg);
        }
    });
    console[_0xda4b[3]](_0xda4b[24]);
}, 60000);
client[_0xda4b[28]](_0xda4b[25], function () {
    if (!Array[_0xda4b[26]](db[_0xda4b[19]](_0xda4b[18]))) {
        db[_0xda4b[27]](_0xda4b[18], []);
    }
});
client[_0xda4b[28]](_0xda4b[25], function () {
    client[_0xda4b[31]][_0xda4b[30]](status, {
        type: _0xda4b[29],
    });
    console[_0xda4b[32]]();
    console[_0xda4b[3]](_0xda4b[33], "" + _0xda4b[34]);
    console[_0xda4b[3]](_0xda4b[35], "" + _0xda4b[36] + client[_0xda4b[31]][_0xda4b[37]] + _0xda4b[22]);
    console[_0xda4b[3]](_0xda4b[38], "" + _0xda4b[39] + mainprefix + _0xda4b[22]);
    console[_0xda4b[3]](_0xda4b[38], "" + _0xda4b[40]);
    console[_0xda4b[3]](_0xda4b[41], "" + _0xda4b[42] + mainprefix + _0xda4b[43]);
    console[_0xda4b[3]](_0xda4b[44], "" + _0xda4b[45]);
    console[_0xda4b[3]](_0xda4b[44], "" + _0xda4b[46]);
});
var commandFiles = readdirSync(join(__dirname, _0xda4b[13]))[_0xda4b[49]](function (canCreateDiscussions) {
    return canCreateDiscussions[_0xda4b[48]](_0xda4b[47]);
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;
try {
    var _iterator = commandFiles[Symbol.iterator]();
    var _step;
    for (; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var file = _step.value;
        var command = require(join(__dirname, _0xda4b[13], "" + _0xda4b[22] + file + _0xda4b[22]));
        client[_0xda4b[13]][_0xda4b[27]](command[_0xda4b[50]], command);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
client[_0xda4b[28]](_0xda4b[51], async function (mmCoreSplitViewBlock) {
    var artistTrack = await db[_0xda4b[19]]("" + _0xda4b[52] + mmCoreSplitViewBlock[_0xda4b[54]][_0xda4b[53]] + _0xda4b[22]);
    if (artistTrack === null) {
        artistTrack = mainprefix;
    }
    if (mmCoreSplitViewBlock[_0xda4b[56]][_0xda4b[55]]) {
        return;
    }
    if (mmCoreSplitViewBlock[_0xda4b[58]][_0xda4b[57]] === _0xda4b[59]) {
        return;
    }
    if (mmCoreSplitViewBlock[_0xda4b[61]][_0xda4b[60]](artistTrack)) {
        var GET_AUTH_URL_TIMEOUT = mmCoreSplitViewBlock[_0xda4b[61]][_0xda4b[65]](artistTrack[_0xda4b[64]])[_0xda4b[63]]()[_0xda4b[62]](/ +/);
        var numKeysDeleted = GET_AUTH_URL_TIMEOUT[_0xda4b[67]]()[_0xda4b[66]]();
        if (!client[_0xda4b[13]][_0xda4b[68]](numKeysDeleted)) {
            return;
        }
        try {
            client[_0xda4b[13]][_0xda4b[19]](numKeysDeleted)[_0xda4b[69]](client, mmCoreSplitViewBlock, GET_AUTH_URL_TIMEOUT);
        } catch (previousState) {
            console[_0xda4b[70]](previousState);
        }
    }
});
