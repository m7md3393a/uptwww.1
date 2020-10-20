"use strict";
var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            var _i = arr[Symbol.iterator]();
            var _s;
            for (; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) {
                    break;
                }
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"]) {
                    _i["return"]();
                }
            } finally {
                if (_d) {
                    throw _e;
                }
            }
        }
        return _arr;
    }
    return function (arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else {
            if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        }

    };
})();
  
var _0xe7ee = [
    "discord.js",
    "quick.db",
    "fs",
    "js-yaml",
    "./config.yml",
    "readFileSync",
    "load",
    "exports",
    "help",
    "Show uptimed glitch linsk",
    "commands",
    "displayAvatarURL",
    "user",
    "setThumbnail",
    "username",
    "setFooter",
    "GREEN",
    "setColor",
    "GLITCH or REPL.IT",
    "setDescription",
    "array",
    "category",
    "On 4 orders, you want to see a concept, type + _help = Commands ",
    "",
    "push",
    "entries",
    "`",
    "",
    "join",
    "",
    "toUpperCase",
    `[`,
    `length`,
    `]\n\n_delete + (Link) = 🗑️`,
    "addField",
    "projects_",
    "id",
    "author",
    "get",
    "toLowerCase",
    "project",
    "forEach",
    "Your links [",
    "] ",
    ", ",
    "send",
    "channel",
];
const Discord = require("discord.js")
const db = require("quick.db")
const fs = require('fs')
const yaml = require("js-yaml");
const { re } = require("mathjs");// made byy darkboy
const { mainprefix , token } = yaml.load(fs.readFileSync("./config.yml"));
module.exports = {
    name: "total",
    description: "",
    run: async function run(query_spec, unweight_columns, cb) {
    

        var _0x6250x8 = await query_spec[_0xe7ee[10]];
        var _userLoginInput = new Discord.MessageEmbed()
            [_0xe7ee[19]]("" + _0xe7ee[18])
            [_0xe7ee[17]](_0xe7ee[16])
            [_0xe7ee[15]](query_spec[_0xe7ee[12]][_0xe7ee[14]], query_spec[_0xe7ee[12]][_0xe7ee[11]]())
            [_0xe7ee[13]](query_spec[_0xe7ee[12]][_0xe7ee[11]]());
        var obj = {};
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
            var _iterator3 = _0x6250x8[_0xe7ee[20]]()[Symbol.iterator]();
            var _step;
            for (; !(_iteratorNormalCompletion3 = (_step = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var backendCommandsURL = _step.value;
                var xhrModelLoadingAttribute = backendCommandsURL[_0xe7ee[21]] || _0xe7ee[22];
                var artistTrack = backendCommandsURL[_0xe7ee[23]];
                if (!obj[xhrModelLoadingAttribute]) {
                    obj[xhrModelLoadingAttribute] = [];
                }
                obj[xhrModelLoadingAttribute][_0xe7ee[24]](artistTrack);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;
        try {
            var _iterator4 = Object[_0xe7ee[25]](obj)[Symbol.iterator]();
            var _step17;
            for (; !(_iteratorNormalCompletion4 = (_step17 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _step2$value = _slicedToArray(_step17.value, 2);
                var stream = _step2$value[0];
                var id = _step2$value[1];
                var realStream = stream;
                var disable = _0xe7ee[26] + id[_0xe7ee[28]](_0xe7ee[27]) + _0xe7ee[26];
                _userLoginInput[_0xe7ee[34]]("" + _0xe7ee[29] + realStream[_0xe7ee[30]]() + _0xe7ee[31] + id[_0xe7ee[32]] + _0xe7ee[33], disable);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
        var files = db[_0xe7ee[38]]("" + _0xe7ee[35] + unweight_columns[_0xe7ee[37]][_0xe7ee[36]] + _0xe7ee[29]);
        if (files && files[_0xe7ee[32]]) {
            var _0x6250x10 = [];
            files[_0xe7ee[41]](function (canCreateDiscussions) {
                _0x6250x10[_0xe7ee[24]](_0xe7ee[26] + canCreateDiscussions[_0xe7ee[40]][_0xe7ee[39]]() + _0xe7ee[26]);
            });
            _userLoginInput[_0xe7ee[34]]("" + _0xe7ee[42] + files[_0xe7ee[32]] + _0xe7ee[43], _0x6250x10[_0xe7ee[28]](_0xe7ee[44]));
        }
        return unweight_columns[_0xe7ee[46]][_0xe7ee[45]](_userLoginInput);
    },
};
