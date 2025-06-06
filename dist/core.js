var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../chroma-js/chroma.js
var require_chroma = __commonJS({
  "../../chroma-js/chroma.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.chroma = factory());
    })(exports, function() {
      "use strict";
      var limit$2 = function(x, min2, max2) {
        if (min2 === void 0) min2 = 0;
        if (max2 === void 0) max2 = 1;
        return x < min2 ? min2 : x > max2 ? max2 : x;
      };
      var limit$1 = limit$2;
      var clip_rgb$3 = function(rgb2) {
        rgb2._clipped = false;
        rgb2._unclipped = rgb2.slice(0);
        for (var i2 = 0; i2 <= 3; i2++) {
          if (i2 < 3) {
            if (rgb2[i2] < 0 || rgb2[i2] > 255) {
              rgb2._clipped = true;
            }
            rgb2[i2] = limit$1(rgb2[i2], 0, 255);
          } else if (i2 === 3) {
            rgb2[i2] = limit$1(rgb2[i2], 0, 1);
          }
        }
        return rgb2;
      };
      var classToType = {};
      for (var i$1 = 0, list$1 = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; i$1 < list$1.length; i$1 += 1) {
        var name = list$1[i$1];
        classToType["[object " + name + "]"] = name.toLowerCase();
      }
      var type$p = function(obj) {
        return classToType[Object.prototype.toString.call(obj)] || "object";
      };
      var type$o = type$p;
      var unpack$B = function(args, keyOrder) {
        if (keyOrder === void 0) keyOrder = null;
        if (args.length >= 3) {
          return Array.prototype.slice.call(args);
        }
        if (type$o(args[0]) == "object" && keyOrder) {
          return keyOrder.split("").filter(function(k) {
            return args[0][k] !== void 0;
          }).map(function(k) {
            return args[0][k];
          });
        }
        return args[0];
      };
      var type$n = type$p;
      var last$4 = function(args) {
        if (args.length < 2) {
          return null;
        }
        var l = args.length - 1;
        if (type$n(args[l]) == "string") {
          return args[l].toLowerCase();
        }
        return null;
      };
      var PI$2 = Math.PI;
      var utils = {
        clip_rgb: clip_rgb$3,
        limit: limit$2,
        type: type$p,
        unpack: unpack$B,
        last: last$4,
        PI: PI$2,
        TWOPI: PI$2 * 2,
        PITHIRD: PI$2 / 3,
        DEG2RAD: PI$2 / 180,
        RAD2DEG: 180 / PI$2
      };
      var input$h = {
        format: {},
        autodetect: []
      };
      var last$3 = utils.last;
      var clip_rgb$2 = utils.clip_rgb;
      var type$m = utils.type;
      var _input = input$h;
      var Color$D = function Color3() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var me = this;
        if (type$m(args[0]) === "object" && args[0].constructor && args[0].constructor === this.constructor) {
          return args[0];
        }
        var mode = last$3(args);
        var autodetect = false;
        if (!mode) {
          autodetect = true;
          if (!_input.sorted) {
            _input.autodetect = _input.autodetect.sort(function(a, b) {
              return b.p - a.p;
            });
            _input.sorted = true;
          }
          for (var i2 = 0, list2 = _input.autodetect; i2 < list2.length; i2 += 1) {
            var chk = list2[i2];
            mode = chk.test.apply(chk, args);
            if (mode) {
              break;
            }
          }
        }
        if (_input.format[mode]) {
          var rgb2 = _input.format[mode].apply(null, autodetect ? args : args.slice(0, -1));
          me._rgb = clip_rgb$2(rgb2);
        } else {
          throw new Error("unknown format: " + args);
        }
        if (me._rgb.length === 3) {
          me._rgb.push(1);
        }
      };
      Color$D.prototype.toString = function toString() {
        if (type$m(this.hex) == "function") {
          return this.hex();
        }
        return "[" + this._rgb.join(",") + "]";
      };
      var Color_1 = Color$D;
      var chroma$k = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(chroma$k.Color, [null].concat(args)))();
      };
      chroma$k.Color = Color_1;
      chroma$k.version = "2.4.2";
      var chroma_1 = chroma$k;
      var unpack$A = utils.unpack;
      var max$2 = Math.max;
      var rgb2cmyk$1 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var ref = unpack$A(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r = r / 255;
        g = g / 255;
        b = b / 255;
        var k = 1 - max$2(r, max$2(g, b));
        var f = k < 1 ? 1 / (1 - k) : 0;
        var c = (1 - r - k) * f;
        var m = (1 - g - k) * f;
        var y = (1 - b - k) * f;
        return [c, m, y, k];
      };
      var rgb2cmyk_1 = rgb2cmyk$1;
      var unpack$z = utils.unpack;
      var cmyk2rgb = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        args = unpack$z(args, "cmyk");
        var c = args[0];
        var m = args[1];
        var y = args[2];
        var k = args[3];
        var alpha = args.length > 4 ? args[4] : 1;
        if (k === 1) {
          return [0, 0, 0, alpha];
        }
        return [
          c >= 1 ? 0 : 255 * (1 - c) * (1 - k),
          // r
          m >= 1 ? 0 : 255 * (1 - m) * (1 - k),
          // g
          y >= 1 ? 0 : 255 * (1 - y) * (1 - k),
          // b
          alpha
        ];
      };
      var cmyk2rgb_1 = cmyk2rgb;
      var chroma$j = chroma_1;
      var Color$C = Color_1;
      var input$g = input$h;
      var unpack$y = utils.unpack;
      var type$l = utils.type;
      var rgb2cmyk = rgb2cmyk_1;
      Color$C.prototype.cmyk = function() {
        return rgb2cmyk(this._rgb);
      };
      chroma$j.cmyk = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$C, [null].concat(args, ["cmyk"])))();
      };
      input$g.format.cmyk = cmyk2rgb_1;
      input$g.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--) args[len] = arguments[len];
          args = unpack$y(args, "cmyk");
          if (type$l(args) === "array" && args.length === 4) {
            return "cmyk";
          }
        }
      });
      var unpack$x = utils.unpack;
      var last$2 = utils.last;
      var rnd = function(a) {
        return Math.round(a * 100) / 100;
      };
      var hsl2css$1 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var hsla = unpack$x(args, "hsla");
        var mode = last$2(args) || "lsa";
        hsla[0] = rnd(hsla[0] || 0);
        hsla[1] = rnd(hsla[1] * 100) + "%";
        hsla[2] = rnd(hsla[2] * 100) + "%";
        if (mode === "hsla" || hsla.length > 3 && hsla[3] < 1) {
          hsla[3] = hsla.length > 3 ? hsla[3] : 1;
          mode = "hsla";
        } else {
          hsla.length = 3;
        }
        return mode + "(" + hsla.join(",") + ")";
      };
      var hsl2css_1 = hsl2css$1;
      var unpack$w = utils.unpack;
      var rgb2hsl$3 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        args = unpack$w(args, "rgba");
        var r = args[0];
        var g = args[1];
        var b = args[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var min2 = Math.min(r, g, b);
        var max2 = Math.max(r, g, b);
        var l = (max2 + min2) / 2;
        var s, h;
        if (max2 === min2) {
          s = 0;
          h = Number.NaN;
        } else {
          s = l < 0.5 ? (max2 - min2) / (max2 + min2) : (max2 - min2) / (2 - max2 - min2);
        }
        if (r == max2) {
          h = (g - b) / (max2 - min2);
        } else if (g == max2) {
          h = 2 + (b - r) / (max2 - min2);
        } else if (b == max2) {
          h = 4 + (r - g) / (max2 - min2);
        }
        h *= 60;
        if (h < 0) {
          h += 360;
        }
        if (args.length > 3 && args[3] !== void 0) {
          return [h, s, l, args[3]];
        }
        return [h, s, l];
      };
      var rgb2hsl_1 = rgb2hsl$3;
      var unpack$v = utils.unpack;
      var last$1 = utils.last;
      var hsl2css = hsl2css_1;
      var rgb2hsl$2 = rgb2hsl_1;
      var round$6 = Math.round;
      var rgb2css$1 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var rgba = unpack$v(args, "rgba");
        var mode = last$1(args) || "rgb";
        if (mode.substr(0, 3) == "hsl") {
          return hsl2css(rgb2hsl$2(rgba), mode);
        }
        rgba[0] = round$6(rgba[0]);
        rgba[1] = round$6(rgba[1]);
        rgba[2] = round$6(rgba[2]);
        if (mode === "rgba" || rgba.length > 3 && rgba[3] < 1) {
          rgba[3] = rgba.length > 3 ? rgba[3] : 1;
          mode = "rgba";
        }
        return mode + "(" + rgba.slice(0, mode === "rgb" ? 3 : 4).join(",") + ")";
      };
      var rgb2css_1 = rgb2css$1;
      var unpack$u = utils.unpack;
      var round$5 = Math.round;
      var hsl2rgb$1 = function() {
        var assign;
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        args = unpack$u(args, "hsl");
        var h = args[0];
        var s = args[1];
        var l = args[2];
        var r, g, b;
        if (s === 0) {
          r = g = b = l * 255;
        } else {
          var t3 = [0, 0, 0];
          var c = [0, 0, 0];
          var t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var t1 = 2 * l - t2;
          var h_ = h / 360;
          t3[0] = h_ + 1 / 3;
          t3[1] = h_;
          t3[2] = h_ - 1 / 3;
          for (var i2 = 0; i2 < 3; i2++) {
            if (t3[i2] < 0) {
              t3[i2] += 1;
            }
            if (t3[i2] > 1) {
              t3[i2] -= 1;
            }
            if (6 * t3[i2] < 1) {
              c[i2] = t1 + (t2 - t1) * 6 * t3[i2];
            } else if (2 * t3[i2] < 1) {
              c[i2] = t2;
            } else if (3 * t3[i2] < 2) {
              c[i2] = t1 + (t2 - t1) * (2 / 3 - t3[i2]) * 6;
            } else {
              c[i2] = t1;
            }
          }
          assign = [round$5(c[0] * 255), round$5(c[1] * 255), round$5(c[2] * 255)], r = assign[0], g = assign[1], b = assign[2];
        }
        if (args.length > 3) {
          return [r, g, b, args[3]];
        }
        return [r, g, b, 1];
      };
      var hsl2rgb_1 = hsl2rgb$1;
      var hsl2rgb = hsl2rgb_1;
      var input$f = input$h;
      var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
      var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
      var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
      var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
      var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
      var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
      var round$4 = Math.round;
      var css2rgb$1 = function(css) {
        css = css.toLowerCase().trim();
        var m;
        if (input$f.format.named) {
          try {
            return input$f.format.named(css);
          } catch (e) {
          }
        }
        if (m = css.match(RE_RGB)) {
          var rgb2 = m.slice(1, 4);
          for (var i2 = 0; i2 < 3; i2++) {
            rgb2[i2] = +rgb2[i2];
          }
          rgb2[3] = 1;
          return rgb2;
        }
        if (m = css.match(RE_RGBA)) {
          var rgb$1 = m.slice(1, 5);
          for (var i$12 = 0; i$12 < 4; i$12++) {
            rgb$1[i$12] = +rgb$1[i$12];
          }
          return rgb$1;
        }
        if (m = css.match(RE_RGB_PCT)) {
          var rgb$2 = m.slice(1, 4);
          for (var i$2 = 0; i$2 < 3; i$2++) {
            rgb$2[i$2] = round$4(rgb$2[i$2] * 2.55);
          }
          rgb$2[3] = 1;
          return rgb$2;
        }
        if (m = css.match(RE_RGBA_PCT)) {
          var rgb$3 = m.slice(1, 5);
          for (var i$3 = 0; i$3 < 3; i$3++) {
            rgb$3[i$3] = round$4(rgb$3[i$3] * 2.55);
          }
          rgb$3[3] = +rgb$3[3];
          return rgb$3;
        }
        if (m = css.match(RE_HSL)) {
          var hsl2 = m.slice(1, 4);
          hsl2[1] *= 0.01;
          hsl2[2] *= 0.01;
          var rgb$4 = hsl2rgb(hsl2);
          rgb$4[3] = 1;
          return rgb$4;
        }
        if (m = css.match(RE_HSLA)) {
          var hsl$1 = m.slice(1, 4);
          hsl$1[1] *= 0.01;
          hsl$1[2] *= 0.01;
          var rgb$5 = hsl2rgb(hsl$1);
          rgb$5[3] = +m[4];
          return rgb$5;
        }
      };
      css2rgb$1.test = function(s) {
        return RE_RGB.test(s) || RE_RGBA.test(s) || RE_RGB_PCT.test(s) || RE_RGBA_PCT.test(s) || RE_HSL.test(s) || RE_HSLA.test(s);
      };
      var css2rgb_1 = css2rgb$1;
      var chroma$i = chroma_1;
      var Color$B = Color_1;
      var input$e = input$h;
      var type$k = utils.type;
      var rgb2css = rgb2css_1;
      var css2rgb = css2rgb_1;
      Color$B.prototype.css = function(mode) {
        return rgb2css(this._rgb, mode);
      };
      chroma$i.css = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$B, [null].concat(args, ["css"])))();
      };
      input$e.format.css = css2rgb;
      input$e.autodetect.push({
        p: 5,
        test: function(h) {
          var rest = [], len = arguments.length - 1;
          while (len-- > 0) rest[len] = arguments[len + 1];
          if (!rest.length && type$k(h) === "string" && css2rgb.test(h)) {
            return "css";
          }
        }
      });
      var Color$A = Color_1;
      var chroma$h = chroma_1;
      var input$d = input$h;
      var unpack$t = utils.unpack;
      input$d.format.gl = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var rgb2 = unpack$t(args, "rgba");
        rgb2[0] *= 255;
        rgb2[1] *= 255;
        rgb2[2] *= 255;
        return rgb2;
      };
      chroma$h.gl = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$A, [null].concat(args, ["gl"])))();
      };
      Color$A.prototype.gl = function() {
        var rgb2 = this._rgb;
        return [rgb2[0] / 255, rgb2[1] / 255, rgb2[2] / 255, rgb2[3]];
      };
      var unpack$s = utils.unpack;
      var rgb2hcg$1 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var ref = unpack$s(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var min2 = Math.min(r, g, b);
        var max2 = Math.max(r, g, b);
        var delta = max2 - min2;
        var c = delta * 100 / 255;
        var _g = min2 / (255 - delta) * 100;
        var h;
        if (delta === 0) {
          h = Number.NaN;
        } else {
          if (r === max2) {
            h = (g - b) / delta;
          }
          if (g === max2) {
            h = 2 + (b - r) / delta;
          }
          if (b === max2) {
            h = 4 + (r - g) / delta;
          }
          h *= 60;
          if (h < 0) {
            h += 360;
          }
        }
        return [h, c, _g];
      };
      var rgb2hcg_1 = rgb2hcg$1;
      var unpack$r = utils.unpack;
      var floor$3 = Math.floor;
      var hcg2rgb = function() {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        args = unpack$r(args, "hcg");
        var h = args[0];
        var c = args[1];
        var _g = args[2];
        var r, g, b;
        _g = _g * 255;
        var _c = c * 255;
        if (c === 0) {
          r = g = b = _g;
        } else {
          if (h === 360) {
            h = 0;
          }
          if (h > 360) {
            h -= 360;
          }
          if (h < 0) {
            h += 360;
          }
          h /= 60;
          var i2 = floor$3(h);
          var f = h - i2;
          var p = _g * (1 - c);
          var q = p + _c * (1 - f);
          var t = p + _c * f;
          var v = p + _c;
          switch (i2) {
            case 0:
              assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2];
              break;
            case 1:
              assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2];
              break;
            case 2:
              assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2];
              break;
            case 3:
              assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2];
              break;
            case 4:
              assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2];
              break;
            case 5:
              assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2];
              break;
          }
        }
        return [r, g, b, args.length > 3 ? args[3] : 1];
      };
      var hcg2rgb_1 = hcg2rgb;
      var unpack$q = utils.unpack;
      var type$j = utils.type;
      var chroma$g = chroma_1;
      var Color$z = Color_1;
      var input$c = input$h;
      var rgb2hcg = rgb2hcg_1;
      Color$z.prototype.hcg = function() {
        return rgb2hcg(this._rgb);
      };
      chroma$g.hcg = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$z, [null].concat(args, ["hcg"])))();
      };
      input$c.format.hcg = hcg2rgb_1;
      input$c.autodetect.push({
        p: 1,
        test: function() {
          var args = [], len = arguments.length;
          while (len--) args[len] = arguments[len];
          args = unpack$q(args, "hcg");
          if (type$j(args) === "array" && args.length === 3) {
            return "hcg";
          }
        }
      });
      var unpack$p = utils.unpack;
      var last = utils.last;
      var round$3 = Math.round;
      var rgb2hex$2 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var ref = unpack$p(args, "rgba");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var a = ref[3];
        var mode = last(args) || "auto";
        if (a === void 0) {
          a = 1;
        }
        if (mode === "auto") {
          mode = a < 1 ? "rgba" : "rgb";
        }
        r = round$3(r);
        g = round$3(g);
        b = round$3(b);
        var u = r << 16 | g << 8 | b;
        var str = "000000" + u.toString(16);
        str = str.substr(str.length - 6);
        var hxa = "0" + round$3(a * 255).toString(16);
        hxa = hxa.substr(hxa.length - 2);
        switch (mode.toLowerCase()) {
          case "rgba":
            return "#" + str + hxa;
          case "argb":
            return "#" + hxa + str;
          default:
            return "#" + str;
        }
      };
      var rgb2hex_1 = rgb2hex$2;
      var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
      var hex2rgb$1 = function(hex) {
        if (hex.match(RE_HEX)) {
          if (hex.length === 4 || hex.length === 7) {
            hex = hex.substr(1);
          }
          if (hex.length === 3) {
            hex = hex.split("");
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
          }
          var u = parseInt(hex, 16);
          var r = u >> 16;
          var g = u >> 8 & 255;
          var b = u & 255;
          return [r, g, b, 1];
        }
        if (hex.match(RE_HEXA)) {
          if (hex.length === 5 || hex.length === 9) {
            hex = hex.substr(1);
          }
          if (hex.length === 4) {
            hex = hex.split("");
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
          }
          var u$1 = parseInt(hex, 16);
          var r$1 = u$1 >> 24 & 255;
          var g$1 = u$1 >> 16 & 255;
          var b$1 = u$1 >> 8 & 255;
          var a = Math.round((u$1 & 255) / 255 * 100) / 100;
          return [r$1, g$1, b$1, a];
        }
        throw new Error("unknown hex color: " + hex);
      };
      var hex2rgb_1 = hex2rgb$1;
      var chroma$f = chroma_1;
      var Color$y = Color_1;
      var type$i = utils.type;
      var input$b = input$h;
      var rgb2hex$1 = rgb2hex_1;
      Color$y.prototype.hex = function(mode) {
        return rgb2hex$1(this._rgb, mode);
      };
      chroma$f.hex = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$y, [null].concat(args, ["hex"])))();
      };
      input$b.format.hex = hex2rgb_1;
      input$b.autodetect.push({
        p: 4,
        test: function(h) {
          var rest = [], len = arguments.length - 1;
          while (len-- > 0) rest[len] = arguments[len + 1];
          if (!rest.length && type$i(h) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(h.length) >= 0) {
            return "hex";
          }
        }
      });
      var unpack$o = utils.unpack;
      var TWOPI$2 = utils.TWOPI;
      var min$2 = Math.min;
      var sqrt$4 = Math.sqrt;
      var acos = Math.acos;
      var rgb2hsi$1 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var ref = unpack$o(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var h;
        var min_ = min$2(r, g, b);
        var i2 = (r + g + b) / 3;
        var s = i2 > 0 ? 1 - min_ / i2 : 0;
        if (s === 0) {
          h = NaN;
        } else {
          h = (r - g + (r - b)) / 2;
          h /= sqrt$4((r - g) * (r - g) + (r - b) * (g - b));
          h = acos(h);
          if (b > g) {
            h = TWOPI$2 - h;
          }
          h /= TWOPI$2;
        }
        return [h * 360, s, i2];
      };
      var rgb2hsi_1 = rgb2hsi$1;
      var unpack$n = utils.unpack;
      var limit = utils.limit;
      var TWOPI$1 = utils.TWOPI;
      var PITHIRD = utils.PITHIRD;
      var cos$4 = Math.cos;
      var hsi2rgb = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        args = unpack$n(args, "hsi");
        var h = args[0];
        var s = args[1];
        var i2 = args[2];
        var r, g, b;
        if (isNaN(h)) {
          h = 0;
        }
        if (isNaN(s)) {
          s = 0;
        }
        if (h > 360) {
          h -= 360;
        }
        if (h < 0) {
          h += 360;
        }
        h /= 360;
        if (h < 1 / 3) {
          b = (1 - s) / 3;
          r = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
          g = 1 - (b + r);
        } else if (h < 2 / 3) {
          h -= 1 / 3;
          r = (1 - s) / 3;
          g = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
          b = 1 - (r + g);
        } else {
          h -= 2 / 3;
          g = (1 - s) / 3;
          b = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
          r = 1 - (g + b);
        }
        r = limit(i2 * r * 3);
        g = limit(i2 * g * 3);
        b = limit(i2 * b * 3);
        return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
      };
      var hsi2rgb_1 = hsi2rgb;
      var unpack$m = utils.unpack;
      var type$h = utils.type;
      var chroma$e = chroma_1;
      var Color$x = Color_1;
      var input$a = input$h;
      var rgb2hsi = rgb2hsi_1;
      Color$x.prototype.hsi = function() {
        return rgb2hsi(this._rgb);
      };
      chroma$e.hsi = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$x, [null].concat(args, ["hsi"])))();
      };
      input$a.format.hsi = hsi2rgb_1;
      input$a.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--) args[len] = arguments[len];
          args = unpack$m(args, "hsi");
          if (type$h(args) === "array" && args.length === 3) {
            return "hsi";
          }
        }
      });
      var unpack$l = utils.unpack;
      var type$g = utils.type;
      var chroma$d = chroma_1;
      var Color$w = Color_1;
      var input$9 = input$h;
      var rgb2hsl$1 = rgb2hsl_1;
      Color$w.prototype.hsl = function() {
        return rgb2hsl$1(this._rgb);
      };
      chroma$d.hsl = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$w, [null].concat(args, ["hsl"])))();
      };
      input$9.format.hsl = hsl2rgb_1;
      input$9.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--) args[len] = arguments[len];
          args = unpack$l(args, "hsl");
          if (type$g(args) === "array" && args.length === 3) {
            return "hsl";
          }
        }
      });
      var unpack$k = utils.unpack;
      var min$1 = Math.min;
      var max$1 = Math.max;
      var rgb2hsl = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        args = unpack$k(args, "rgb");
        var r = args[0];
        var g = args[1];
        var b = args[2];
        var min_ = min$1(r, g, b);
        var max_ = max$1(r, g, b);
        var delta = max_ - min_;
        var h, s, v;
        v = max_ / 255;
        if (max_ === 0) {
          h = Number.NaN;
          s = 0;
        } else {
          s = delta / max_;
          if (r === max_) {
            h = (g - b) / delta;
          }
          if (g === max_) {
            h = 2 + (b - r) / delta;
          }
          if (b === max_) {
            h = 4 + (r - g) / delta;
          }
          h *= 60;
          if (h < 0) {
            h += 360;
          }
        }
        return [h, s, v];
      };
      var rgb2hsv$1 = rgb2hsl;
      var unpack$j = utils.unpack;
      var floor$2 = Math.floor;
      var hsv2rgb = function() {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        args = unpack$j(args, "hsv");
        var h = args[0];
        var s = args[1];
        var v = args[2];
        var r, g, b;
        v *= 255;
        if (s === 0) {
          r = g = b = v;
        } else {
          if (h === 360) {
            h = 0;
          }
          if (h > 360) {
            h -= 360;
          }
          if (h < 0) {
            h += 360;
          }
          h /= 60;
          var i2 = floor$2(h);
          var f = h - i2;
          var p = v * (1 - s);
          var q = v * (1 - s * f);
          var t = v * (1 - s * (1 - f));
          switch (i2) {
            case 0:
              assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2];
              break;
            case 1:
              assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2];
              break;
            case 2:
              assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2];
              break;
            case 3:
              assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2];
              break;
            case 4:
              assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2];
              break;
            case 5:
              assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2];
              break;
          }
        }
        return [r, g, b, args.length > 3 ? args[3] : 1];
      };
      var hsv2rgb_1 = hsv2rgb;
      var unpack$i = utils.unpack;
      var type$f = utils.type;
      var chroma$c = chroma_1;
      var Color$v = Color_1;
      var input$8 = input$h;
      var rgb2hsv = rgb2hsv$1;
      Color$v.prototype.hsv = function() {
        return rgb2hsv(this._rgb);
      };
      chroma$c.hsv = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$v, [null].concat(args, ["hsv"])))();
      };
      input$8.format.hsv = hsv2rgb_1;
      input$8.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--) args[len] = arguments[len];
          args = unpack$i(args, "hsv");
          if (type$f(args) === "array" && args.length === 3) {
            return "hsv";
          }
        }
      });
      var labConstants = {
        // Corresponds roughly to RGB brighter/darker
        Kn: 18,
        // D65 standard referent
        Xn: 0.95047,
        Yn: 1,
        Zn: 1.08883,
        t0: 0.137931034,
        // 4 / 29
        t1: 0.206896552,
        // 6 / 29
        t2: 0.12841855,
        // 3 * t1 * t1
        t3: 8856452e-9
        // t1 * t1 * t1
      };
      var LAB_CONSTANTS$3 = labConstants;
      var unpack$h = utils.unpack;
      var pow$a = Math.pow;
      var rgb2lab$2 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var ref = unpack$h(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2xyz(r, g, b);
        var x = ref$1[0];
        var y = ref$1[1];
        var z = ref$1[2];
        var l = 116 * y - 16;
        return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
      };
      var rgb_xyz = function(r) {
        if ((r /= 255) <= 0.04045) {
          return r / 12.92;
        }
        return pow$a((r + 0.055) / 1.055, 2.4);
      };
      var xyz_lab = function(t) {
        if (t > LAB_CONSTANTS$3.t3) {
          return pow$a(t, 1 / 3);
        }
        return t / LAB_CONSTANTS$3.t2 + LAB_CONSTANTS$3.t0;
      };
      var rgb2xyz = function(r, g, b) {
        r = rgb_xyz(r);
        g = rgb_xyz(g);
        b = rgb_xyz(b);
        var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS$3.Xn);
        var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.072175 * b) / LAB_CONSTANTS$3.Yn);
        var z = xyz_lab((0.0193339 * r + 0.119192 * g + 0.9503041 * b) / LAB_CONSTANTS$3.Zn);
        return [x, y, z];
      };
      var rgb2lab_1 = rgb2lab$2;
      var LAB_CONSTANTS$2 = labConstants;
      var unpack$g = utils.unpack;
      var pow$9 = Math.pow;
      var lab2rgb$1 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        args = unpack$g(args, "lab");
        var l = args[0];
        var a = args[1];
        var b = args[2];
        var x, y, z, r, g, b_;
        y = (l + 16) / 116;
        x = isNaN(a) ? y : y + a / 500;
        z = isNaN(b) ? y : y - b / 200;
        y = LAB_CONSTANTS$2.Yn * lab_xyz(y);
        x = LAB_CONSTANTS$2.Xn * lab_xyz(x);
        z = LAB_CONSTANTS$2.Zn * lab_xyz(z);
        r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
        g = xyz_rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z);
        b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
        return [r, g, b_, args.length > 3 ? args[3] : 1];
      };
      var xyz_rgb = function(r) {
        return 255 * (r <= 304e-5 ? 12.92 * r : 1.055 * pow$9(r, 1 / 2.4) - 0.055);
      };
      var lab_xyz = function(t) {
        return t > LAB_CONSTANTS$2.t1 ? t * t * t : LAB_CONSTANTS$2.t2 * (t - LAB_CONSTANTS$2.t0);
      };
      var lab2rgb_1 = lab2rgb$1;
      var unpack$f = utils.unpack;
      var type$e = utils.type;
      var chroma$b = chroma_1;
      var Color$u = Color_1;
      var input$7 = input$h;
      var rgb2lab$1 = rgb2lab_1;
      Color$u.prototype.lab = function() {
        return rgb2lab$1(this._rgb);
      };
      chroma$b.lab = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$u, [null].concat(args, ["lab"])))();
      };
      input$7.format.lab = lab2rgb_1;
      input$7.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--) args[len] = arguments[len];
          args = unpack$f(args, "lab");
          if (type$e(args) === "array" && args.length === 3) {
            return "lab";
          }
        }
      });
      var unpack$e = utils.unpack;
      var RAD2DEG2 = utils.RAD2DEG;
      var sqrt$3 = Math.sqrt;
      var atan2$2 = Math.atan2;
      var round$2 = Math.round;
      var lab2lch$2 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var ref = unpack$e(args, "lab");
        var l = ref[0];
        var a = ref[1];
        var b = ref[2];
        var c = sqrt$3(a * a + b * b);
        var h = (atan2$2(b, a) * RAD2DEG2 + 360) % 360;
        if (round$2(c * 1e4) === 0) {
          h = Number.NaN;
        }
        return [l, c, h];
      };
      var lab2lch_1 = lab2lch$2;
      var unpack$d = utils.unpack;
      var rgb2lab = rgb2lab_1;
      var lab2lch$1 = lab2lch_1;
      var rgb2lch$1 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var ref = unpack$d(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2lab(r, g, b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch$1(l, a, b_);
      };
      var rgb2lch_1 = rgb2lch$1;
      var unpack$c = utils.unpack;
      var DEG2RAD2 = utils.DEG2RAD;
      var sin$3 = Math.sin;
      var cos$3 = Math.cos;
      var lch2lab$2 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var ref = unpack$c(args, "lch");
        var l = ref[0];
        var c = ref[1];
        var h = ref[2];
        if (isNaN(h)) {
          h = 0;
        }
        h = h * DEG2RAD2;
        return [l, cos$3(h) * c, sin$3(h) * c];
      };
      var lch2lab_1 = lch2lab$2;
      var unpack$b = utils.unpack;
      var lch2lab$1 = lch2lab_1;
      var lab2rgb = lab2rgb_1;
      var lch2rgb$1 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        args = unpack$b(args, "lch");
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab$1(l, c, h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = lab2rgb(L, a, b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [r, g, b, args.length > 3 ? args[3] : 1];
      };
      var lch2rgb_1 = lch2rgb$1;
      var unpack$a = utils.unpack;
      var lch2rgb = lch2rgb_1;
      var hcl2rgb = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var hcl = unpack$a(args, "hcl").reverse();
        return lch2rgb.apply(void 0, hcl);
      };
      var hcl2rgb_1 = hcl2rgb;
      var unpack$9 = utils.unpack;
      var type$d = utils.type;
      var chroma$a = chroma_1;
      var Color$t = Color_1;
      var input$6 = input$h;
      var rgb2lch = rgb2lch_1;
      Color$t.prototype.lch = function() {
        return rgb2lch(this._rgb);
      };
      Color$t.prototype.hcl = function() {
        return rgb2lch(this._rgb).reverse();
      };
      chroma$a.lch = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$t, [null].concat(args, ["lch"])))();
      };
      chroma$a.hcl = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$t, [null].concat(args, ["hcl"])))();
      };
      input$6.format.lch = lch2rgb_1;
      input$6.format.hcl = hcl2rgb_1;
      ["lch", "hcl"].forEach(function(m) {
        return input$6.autodetect.push({
          p: 2,
          test: function() {
            var args = [], len = arguments.length;
            while (len--) args[len] = arguments[len];
            args = unpack$9(args, m);
            if (type$d(args) === "array" && args.length === 3) {
              return m;
            }
          }
        });
      });
      var w3cx11$1 = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflower: "#6495ed",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        laserlemon: "#ffff54",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrod: "#fafad2",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        maroon2: "#7f0000",
        maroon3: "#b03060",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        purple2: "#7f007f",
        purple3: "#a020f0",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      };
      var w3cx11_1 = w3cx11$1;
      var Color$s = Color_1;
      var input$5 = input$h;
      var type$c = utils.type;
      var w3cx11 = w3cx11_1;
      var hex2rgb = hex2rgb_1;
      var rgb2hex = rgb2hex_1;
      Color$s.prototype.name = function() {
        var hex = rgb2hex(this._rgb, "rgb");
        for (var i2 = 0, list2 = Object.keys(w3cx11); i2 < list2.length; i2 += 1) {
          var n = list2[i2];
          if (w3cx11[n] === hex) {
            return n.toLowerCase();
          }
        }
        return hex;
      };
      input$5.format.named = function(name2) {
        name2 = name2.toLowerCase();
        if (w3cx11[name2]) {
          return hex2rgb(w3cx11[name2]);
        }
        throw new Error("unknown color name: " + name2);
      };
      input$5.autodetect.push({
        p: 5,
        test: function(h) {
          var rest = [], len = arguments.length - 1;
          while (len-- > 0) rest[len] = arguments[len + 1];
          if (!rest.length && type$c(h) === "string" && w3cx11[h.toLowerCase()]) {
            return "named";
          }
        }
      });
      var unpack$8 = utils.unpack;
      var rgb2num$1 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var ref = unpack$8(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        return (r << 16) + (g << 8) + b;
      };
      var rgb2num_1 = rgb2num$1;
      var type$b = utils.type;
      var num2rgb = function(num2) {
        if (type$b(num2) == "number" && num2 >= 0 && num2 <= 16777215) {
          var r = num2 >> 16;
          var g = num2 >> 8 & 255;
          var b = num2 & 255;
          return [r, g, b, 1];
        }
        throw new Error("unknown num color: " + num2);
      };
      var num2rgb_1 = num2rgb;
      var chroma$9 = chroma_1;
      var Color$r = Color_1;
      var input$4 = input$h;
      var type$a = utils.type;
      var rgb2num = rgb2num_1;
      Color$r.prototype.num = function() {
        return rgb2num(this._rgb);
      };
      chroma$9.num = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$r, [null].concat(args, ["num"])))();
      };
      input$4.format.num = num2rgb_1;
      input$4.autodetect.push({
        p: 5,
        test: function() {
          var args = [], len = arguments.length;
          while (len--) args[len] = arguments[len];
          if (args.length === 1 && type$a(args[0]) === "number" && args[0] >= 0 && args[0] <= 16777215) {
            return "num";
          }
        }
      });
      var chroma$8 = chroma_1;
      var Color$q = Color_1;
      var input$3 = input$h;
      var unpack$7 = utils.unpack;
      var type$9 = utils.type;
      var round$1 = Math.round;
      Color$q.prototype.rgb = function(rnd2) {
        if (rnd2 === void 0) rnd2 = true;
        if (rnd2 === false) {
          return this._rgb.slice(0, 3);
        }
        return this._rgb.slice(0, 3).map(round$1);
      };
      Color$q.prototype.rgba = function(rnd2) {
        if (rnd2 === void 0) rnd2 = true;
        return this._rgb.slice(0, 4).map(function(v, i2) {
          return i2 < 3 ? rnd2 === false ? v : round$1(v) : v;
        });
      };
      chroma$8.rgb = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$q, [null].concat(args, ["rgb"])))();
      };
      input$3.format.rgb = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var rgba = unpack$7(args, "rgba");
        if (rgba[3] === void 0) {
          rgba[3] = 1;
        }
        return rgba;
      };
      input$3.autodetect.push({
        p: 3,
        test: function() {
          var args = [], len = arguments.length;
          while (len--) args[len] = arguments[len];
          args = unpack$7(args, "rgba");
          if (type$9(args) === "array" && (args.length === 3 || args.length === 4 && type$9(args[3]) == "number" && args[3] >= 0 && args[3] <= 1)) {
            return "rgb";
          }
        }
      });
      var log$1 = Math.log;
      var temperature2rgb$1 = function(kelvin) {
        var temp = kelvin / 100;
        var r, g, b;
        if (temp < 66) {
          r = 255;
          g = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log$1(g);
          b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log$1(b);
        } else {
          r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log$1(r);
          g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log$1(g);
          b = 255;
        }
        return [r, g, b, 1];
      };
      var temperature2rgb_1 = temperature2rgb$1;
      var temperature2rgb = temperature2rgb_1;
      var unpack$6 = utils.unpack;
      var round = Math.round;
      var rgb2temperature$1 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var rgb2 = unpack$6(args, "rgb");
        var r = rgb2[0], b = rgb2[2];
        var minTemp = 1e3;
        var maxTemp = 4e4;
        var eps = 0.4;
        var temp;
        while (maxTemp - minTemp > eps) {
          temp = (maxTemp + minTemp) * 0.5;
          var rgb$1 = temperature2rgb(temp);
          if (rgb$1[2] / rgb$1[0] >= b / r) {
            maxTemp = temp;
          } else {
            minTemp = temp;
          }
        }
        return round(temp);
      };
      var rgb2temperature_1 = rgb2temperature$1;
      var chroma$7 = chroma_1;
      var Color$p = Color_1;
      var input$2 = input$h;
      var rgb2temperature = rgb2temperature_1;
      Color$p.prototype.temp = Color$p.prototype.kelvin = Color$p.prototype.temperature = function() {
        return rgb2temperature(this._rgb);
      };
      chroma$7.temp = chroma$7.kelvin = chroma$7.temperature = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$p, [null].concat(args, ["temp"])))();
      };
      input$2.format.temp = input$2.format.kelvin = input$2.format.temperature = temperature2rgb_1;
      var unpack$5 = utils.unpack;
      var cbrt = Math.cbrt;
      var pow$8 = Math.pow;
      var sign$1 = Math.sign;
      var rgb2oklab$2 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var ref = unpack$5(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = [rgb2lrgb(r / 255), rgb2lrgb(g / 255), rgb2lrgb(b / 255)];
        var lr = ref$1[0];
        var lg = ref$1[1];
        var lb = ref$1[2];
        var l = cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
        var m = cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
        var s = cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
        return [
          0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
          1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
          0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
        ];
      };
      var rgb2oklab_1 = rgb2oklab$2;
      function rgb2lrgb(c) {
        var abs2 = Math.abs(c);
        if (abs2 < 0.04045) {
          return c / 12.92;
        }
        return (sign$1(c) || 1) * pow$8((abs2 + 0.055) / 1.055, 2.4);
      }
      var unpack$4 = utils.unpack;
      var pow$7 = Math.pow;
      var sign = Math.sign;
      var oklab2rgb$1 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        args = unpack$4(args, "lab");
        var L = args[0];
        var a = args[1];
        var b = args[2];
        var l = pow$7(L + 0.3963377774 * a + 0.2158037573 * b, 3);
        var m = pow$7(L - 0.1055613458 * a - 0.0638541728 * b, 3);
        var s = pow$7(L - 0.0894841775 * a - 1.291485548 * b, 3);
        return [
          255 * lrgb2rgb(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
          255 * lrgb2rgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
          255 * lrgb2rgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
          args.length > 3 ? args[3] : 1
        ];
      };
      var oklab2rgb_1 = oklab2rgb$1;
      function lrgb2rgb(c) {
        var abs2 = Math.abs(c);
        if (abs2 > 31308e-7) {
          return (sign(c) || 1) * (1.055 * pow$7(abs2, 1 / 2.4) - 0.055);
        }
        return c * 12.92;
      }
      var unpack$3 = utils.unpack;
      var type$8 = utils.type;
      var chroma$6 = chroma_1;
      var Color$o = Color_1;
      var input$1 = input$h;
      var rgb2oklab$1 = rgb2oklab_1;
      Color$o.prototype.oklab = function() {
        return rgb2oklab$1(this._rgb);
      };
      chroma$6.oklab = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$o, [null].concat(args, ["oklab"])))();
      };
      input$1.format.oklab = oklab2rgb_1;
      input$1.autodetect.push({
        p: 3,
        test: function() {
          var args = [], len = arguments.length;
          while (len--) args[len] = arguments[len];
          args = unpack$3(args, "oklab");
          if (type$8(args) === "array" && args.length === 3) {
            return "oklab";
          }
        }
      });
      var unpack$2 = utils.unpack;
      var rgb2oklab = rgb2oklab_1;
      var lab2lch = lab2lch_1;
      var rgb2oklch$1 = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var ref = unpack$2(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2oklab(r, g, b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch(l, a, b_);
      };
      var rgb2oklch_1 = rgb2oklch$1;
      var unpack$1 = utils.unpack;
      var lch2lab = lch2lab_1;
      var oklab2rgb = oklab2rgb_1;
      var oklch2rgb = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        args = unpack$1(args, "lch");
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab(l, c, h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = oklab2rgb(L, a, b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [r, g, b, args.length > 3 ? args[3] : 1];
      };
      var oklch2rgb_1 = oklch2rgb;
      var unpack = utils.unpack;
      var type$7 = utils.type;
      var chroma$5 = chroma_1;
      var Color$n = Color_1;
      var input = input$h;
      var rgb2oklch = rgb2oklch_1;
      Color$n.prototype.oklch = function() {
        return rgb2oklch(this._rgb);
      };
      chroma$5.oklch = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$n, [null].concat(args, ["oklch"])))();
      };
      input.format.oklch = oklch2rgb_1;
      input.autodetect.push({
        p: 3,
        test: function() {
          var args = [], len = arguments.length;
          while (len--) args[len] = arguments[len];
          args = unpack(args, "oklch");
          if (type$7(args) === "array" && args.length === 3) {
            return "oklch";
          }
        }
      });
      var Color$m = Color_1;
      var type$6 = utils.type;
      Color$m.prototype.alpha = function(a, mutate) {
        if (mutate === void 0) mutate = false;
        if (a !== void 0 && type$6(a) === "number") {
          if (mutate) {
            this._rgb[3] = a;
            return this;
          }
          return new Color$m([this._rgb[0], this._rgb[1], this._rgb[2], a], "rgb");
        }
        return this._rgb[3];
      };
      var Color$l = Color_1;
      Color$l.prototype.clipped = function() {
        return this._rgb._clipped || false;
      };
      var Color$k = Color_1;
      var LAB_CONSTANTS$1 = labConstants;
      Color$k.prototype.darken = function(amount) {
        if (amount === void 0) amount = 1;
        var me = this;
        var lab2 = me.lab();
        lab2[0] -= LAB_CONSTANTS$1.Kn * amount;
        return new Color$k(lab2, "lab").alpha(me.alpha(), true);
      };
      Color$k.prototype.brighten = function(amount) {
        if (amount === void 0) amount = 1;
        return this.darken(-amount);
      };
      Color$k.prototype.darker = Color$k.prototype.darken;
      Color$k.prototype.brighter = Color$k.prototype.brighten;
      var Color$j = Color_1;
      Color$j.prototype.get = function(mc) {
        var ref = mc.split(".");
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
          var i2 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
          if (i2 > -1) {
            return src[i2];
          }
          throw new Error("unknown channel " + channel + " in mode " + mode);
        } else {
          return src;
        }
      };
      var Color$i = Color_1;
      var type$5 = utils.type;
      var pow$6 = Math.pow;
      var EPS = 1e-7;
      var MAX_ITER = 20;
      Color$i.prototype.luminance = function(lum) {
        if (lum !== void 0 && type$5(lum) === "number") {
          if (lum === 0) {
            return new Color$i([0, 0, 0, this._rgb[3]], "rgb");
          }
          if (lum === 1) {
            return new Color$i([255, 255, 255, this._rgb[3]], "rgb");
          }
          var cur_lum = this.luminance();
          var mode = "rgb";
          var max_iter = MAX_ITER;
          var test = function(low, high) {
            var mid = low.interpolate(high, 0.5, mode);
            var lm = mid.luminance();
            if (Math.abs(lum - lm) < EPS || !max_iter--) {
              return mid;
            }
            return lm > lum ? test(low, mid) : test(mid, high);
          };
          var rgb2 = (cur_lum > lum ? test(new Color$i([0, 0, 0]), this) : test(this, new Color$i([255, 255, 255]))).rgb();
          return new Color$i(rgb2.concat([this._rgb[3]]));
        }
        return rgb2luminance.apply(void 0, this._rgb.slice(0, 3));
      };
      var rgb2luminance = function(r, g, b) {
        r = luminance_x(r);
        g = luminance_x(g);
        b = luminance_x(b);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };
      var luminance_x = function(x) {
        x /= 255;
        return x <= 0.03928 ? x / 12.92 : pow$6((x + 0.055) / 1.055, 2.4);
      };
      var interpolator$1 = {};
      var Color$h = Color_1;
      var type$4 = utils.type;
      var interpolator = interpolator$1;
      var mix$1 = function(col1, col2, f) {
        if (f === void 0) f = 0.5;
        var rest = [], len = arguments.length - 3;
        while (len-- > 0) rest[len] = arguments[len + 3];
        var mode = rest[0] || "lrgb";
        if (!interpolator[mode] && !rest.length) {
          mode = Object.keys(interpolator)[0];
        }
        if (!interpolator[mode]) {
          throw new Error("interpolation mode " + mode + " is not defined");
        }
        if (type$4(col1) !== "object") {
          col1 = new Color$h(col1);
        }
        if (type$4(col2) !== "object") {
          col2 = new Color$h(col2);
        }
        return interpolator[mode](col1, col2, f).alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
      };
      var Color$g = Color_1;
      var mix2 = mix$1;
      Color$g.prototype.mix = Color$g.prototype.interpolate = function(col2, f) {
        if (f === void 0) f = 0.5;
        var rest = [], len = arguments.length - 2;
        while (len-- > 0) rest[len] = arguments[len + 2];
        return mix2.apply(void 0, [this, col2, f].concat(rest));
      };
      var Color$f = Color_1;
      Color$f.prototype.premultiply = function(mutate) {
        if (mutate === void 0) mutate = false;
        var rgb2 = this._rgb;
        var a = rgb2[3];
        if (mutate) {
          this._rgb = [rgb2[0] * a, rgb2[1] * a, rgb2[2] * a, a];
          return this;
        } else {
          return new Color$f([rgb2[0] * a, rgb2[1] * a, rgb2[2] * a, a], "rgb");
        }
      };
      var Color$e = Color_1;
      var LAB_CONSTANTS = labConstants;
      Color$e.prototype.saturate = function(amount) {
        if (amount === void 0) amount = 1;
        var me = this;
        var lch2 = me.lch();
        lch2[1] += LAB_CONSTANTS.Kn * amount;
        if (lch2[1] < 0) {
          lch2[1] = 0;
        }
        return new Color$e(lch2, "lch").alpha(me.alpha(), true);
      };
      Color$e.prototype.desaturate = function(amount) {
        if (amount === void 0) amount = 1;
        return this.saturate(-amount);
      };
      var Color$d = Color_1;
      var type$3 = utils.type;
      Color$d.prototype.set = function(mc, value, mutate) {
        if (mutate === void 0) mutate = false;
        var ref = mc.split(".");
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
          var i2 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
          if (i2 > -1) {
            if (type$3(value) == "string") {
              switch (value.charAt(0)) {
                case "+":
                  src[i2] += +value;
                  break;
                case "-":
                  src[i2] += +value;
                  break;
                case "*":
                  src[i2] *= +value.substr(1);
                  break;
                case "/":
                  src[i2] /= +value.substr(1);
                  break;
                default:
                  src[i2] = +value;
              }
            } else if (type$3(value) === "number") {
              src[i2] = value;
            } else {
              throw new Error("unsupported value for Color.set");
            }
            var out = new Color$d(src, mode);
            if (mutate) {
              this._rgb = out._rgb;
              return this;
            }
            return out;
          }
          throw new Error("unknown channel " + channel + " in mode " + mode);
        } else {
          return src;
        }
      };
      var Color$c = Color_1;
      var rgb = function(col1, col2, f) {
        var xyz0 = col1._rgb;
        var xyz1 = col2._rgb;
        return new Color$c(
          xyz0[0] + f * (xyz1[0] - xyz0[0]),
          xyz0[1] + f * (xyz1[1] - xyz0[1]),
          xyz0[2] + f * (xyz1[2] - xyz0[2]),
          "rgb"
        );
      };
      interpolator$1.rgb = rgb;
      var Color$b = Color_1;
      var sqrt$2 = Math.sqrt;
      var pow$5 = Math.pow;
      var lrgb = function(col1, col2, f) {
        var ref = col1._rgb;
        var x1 = ref[0];
        var y1 = ref[1];
        var z1 = ref[2];
        var ref$1 = col2._rgb;
        var x2 = ref$1[0];
        var y2 = ref$1[1];
        var z2 = ref$1[2];
        return new Color$b(
          sqrt$2(pow$5(x1, 2) * (1 - f) + pow$5(x2, 2) * f),
          sqrt$2(pow$5(y1, 2) * (1 - f) + pow$5(y2, 2) * f),
          sqrt$2(pow$5(z1, 2) * (1 - f) + pow$5(z2, 2) * f),
          "rgb"
        );
      };
      interpolator$1.lrgb = lrgb;
      var Color$a = Color_1;
      var lab = function(col1, col2, f) {
        var xyz0 = col1.lab();
        var xyz1 = col2.lab();
        return new Color$a(
          xyz0[0] + f * (xyz1[0] - xyz0[0]),
          xyz0[1] + f * (xyz1[1] - xyz0[1]),
          xyz0[2] + f * (xyz1[2] - xyz0[2]),
          "lab"
        );
      };
      interpolator$1.lab = lab;
      var Color$9 = Color_1;
      var _hsx = function(col1, col2, f, m) {
        var assign, assign$1;
        var xyz0, xyz1;
        if (m === "hsl") {
          xyz0 = col1.hsl();
          xyz1 = col2.hsl();
        } else if (m === "hsv") {
          xyz0 = col1.hsv();
          xyz1 = col2.hsv();
        } else if (m === "hcg") {
          xyz0 = col1.hcg();
          xyz1 = col2.hcg();
        } else if (m === "hsi") {
          xyz0 = col1.hsi();
          xyz1 = col2.hsi();
        } else if (m === "lch" || m === "hcl") {
          m = "hcl";
          xyz0 = col1.hcl();
          xyz1 = col2.hcl();
        } else if (m === "oklch") {
          xyz0 = col1.oklch().reverse();
          xyz1 = col2.oklch().reverse();
        }
        var hue0, hue1, sat0, sat1, lbv0, lbv1;
        if (m.substr(0, 1) === "h" || m === "oklch") {
          assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2];
          assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2];
        }
        var sat, hue, lbv, dh;
        if (!isNaN(hue0) && !isNaN(hue1)) {
          if (hue1 > hue0 && hue1 - hue0 > 180) {
            dh = hue1 - (hue0 + 360);
          } else if (hue1 < hue0 && hue0 - hue1 > 180) {
            dh = hue1 + 360 - hue0;
          } else {
            dh = hue1 - hue0;
          }
          hue = hue0 + f * dh;
        } else if (!isNaN(hue0)) {
          hue = hue0;
          if ((lbv1 == 1 || lbv1 == 0) && m != "hsv") {
            sat = sat0;
          }
        } else if (!isNaN(hue1)) {
          hue = hue1;
          if ((lbv0 == 1 || lbv0 == 0) && m != "hsv") {
            sat = sat1;
          }
        } else {
          hue = Number.NaN;
        }
        if (sat === void 0) {
          sat = sat0 + f * (sat1 - sat0);
        }
        lbv = lbv0 + f * (lbv1 - lbv0);
        return m === "oklch" ? new Color$9([lbv, sat, hue], m) : new Color$9([hue, sat, lbv], m);
      };
      var interpolate_hsx$5 = _hsx;
      var lch = function(col1, col2, f) {
        return interpolate_hsx$5(col1, col2, f, "lch");
      };
      interpolator$1.lch = lch;
      interpolator$1.hcl = lch;
      var Color$8 = Color_1;
      var num = function(col1, col2, f) {
        var c1 = col1.num();
        var c2 = col2.num();
        return new Color$8(c1 + f * (c2 - c1), "num");
      };
      interpolator$1.num = num;
      var interpolate_hsx$4 = _hsx;
      var hcg = function(col1, col2, f) {
        return interpolate_hsx$4(col1, col2, f, "hcg");
      };
      interpolator$1.hcg = hcg;
      var interpolate_hsx$3 = _hsx;
      var hsi = function(col1, col2, f) {
        return interpolate_hsx$3(col1, col2, f, "hsi");
      };
      interpolator$1.hsi = hsi;
      var interpolate_hsx$2 = _hsx;
      var hsl = function(col1, col2, f) {
        return interpolate_hsx$2(col1, col2, f, "hsl");
      };
      interpolator$1.hsl = hsl;
      var interpolate_hsx$1 = _hsx;
      var hsv = function(col1, col2, f) {
        return interpolate_hsx$1(col1, col2, f, "hsv");
      };
      interpolator$1.hsv = hsv;
      var Color$7 = Color_1;
      var oklab = function(col1, col2, f) {
        var xyz0 = col1.oklab();
        var xyz1 = col2.oklab();
        return new Color$7(
          xyz0[0] + f * (xyz1[0] - xyz0[0]),
          xyz0[1] + f * (xyz1[1] - xyz0[1]),
          xyz0[2] + f * (xyz1[2] - xyz0[2]),
          "oklab"
        );
      };
      interpolator$1.oklab = oklab;
      var interpolate_hsx = _hsx;
      var oklch = function(col1, col2, f) {
        return interpolate_hsx(col1, col2, f, "oklch");
      };
      interpolator$1.oklch = oklch;
      var Color$6 = Color_1;
      var clip_rgb$1 = utils.clip_rgb;
      var pow$4 = Math.pow;
      var sqrt$1 = Math.sqrt;
      var PI$1 = Math.PI;
      var cos$2 = Math.cos;
      var sin$2 = Math.sin;
      var atan2$1 = Math.atan2;
      var average = function(colors, mode, weights) {
        if (mode === void 0) mode = "lrgb";
        if (weights === void 0) weights = null;
        var l = colors.length;
        if (!weights) {
          weights = Array.from(new Array(l)).map(function() {
            return 1;
          });
        }
        var k = l / weights.reduce(function(a, b) {
          return a + b;
        });
        weights.forEach(function(w, i3) {
          weights[i3] *= k;
        });
        colors = colors.map(function(c) {
          return new Color$6(c);
        });
        if (mode === "lrgb") {
          return _average_lrgb(colors, weights);
        }
        var first = colors.shift();
        var xyz = first.get(mode);
        var cnt = [];
        var dx = 0;
        var dy = 0;
        for (var i2 = 0; i2 < xyz.length; i2++) {
          xyz[i2] = (xyz[i2] || 0) * weights[0];
          cnt.push(isNaN(xyz[i2]) ? 0 : weights[0]);
          if (mode.charAt(i2) === "h" && !isNaN(xyz[i2])) {
            var A = xyz[i2] / 180 * PI$1;
            dx += cos$2(A) * weights[0];
            dy += sin$2(A) * weights[0];
          }
        }
        var alpha = first.alpha() * weights[0];
        colors.forEach(function(c, ci) {
          var xyz2 = c.get(mode);
          alpha += c.alpha() * weights[ci + 1];
          for (var i3 = 0; i3 < xyz.length; i3++) {
            if (!isNaN(xyz2[i3])) {
              cnt[i3] += weights[ci + 1];
              if (mode.charAt(i3) === "h") {
                var A2 = xyz2[i3] / 180 * PI$1;
                dx += cos$2(A2) * weights[ci + 1];
                dy += sin$2(A2) * weights[ci + 1];
              } else {
                xyz[i3] += xyz2[i3] * weights[ci + 1];
              }
            }
          }
        });
        for (var i$12 = 0; i$12 < xyz.length; i$12++) {
          if (mode.charAt(i$12) === "h") {
            var A$1 = atan2$1(dy / cnt[i$12], dx / cnt[i$12]) / PI$1 * 180;
            while (A$1 < 0) {
              A$1 += 360;
            }
            while (A$1 >= 360) {
              A$1 -= 360;
            }
            xyz[i$12] = A$1;
          } else {
            xyz[i$12] = xyz[i$12] / cnt[i$12];
          }
        }
        alpha /= l;
        return new Color$6(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
      };
      var _average_lrgb = function(colors, weights) {
        var l = colors.length;
        var xyz = [0, 0, 0, 0];
        for (var i2 = 0; i2 < colors.length; i2++) {
          var col = colors[i2];
          var f = weights[i2] / l;
          var rgb2 = col._rgb;
          xyz[0] += pow$4(rgb2[0], 2) * f;
          xyz[1] += pow$4(rgb2[1], 2) * f;
          xyz[2] += pow$4(rgb2[2], 2) * f;
          xyz[3] += rgb2[3] * f;
        }
        xyz[0] = sqrt$1(xyz[0]);
        xyz[1] = sqrt$1(xyz[1]);
        xyz[2] = sqrt$1(xyz[2]);
        if (xyz[3] > 0.9999999) {
          xyz[3] = 1;
        }
        return new Color$6(clip_rgb$1(xyz));
      };
      var chroma$4 = chroma_1;
      var type$2 = utils.type;
      var pow$3 = Math.pow;
      var scale$2 = function(colors) {
        var _mode = "rgb";
        var _nacol = chroma$4("#ccc");
        var _spread = 0;
        var _domain = [0, 1];
        var _pos = [];
        var _padding = [0, 0];
        var _classes = false;
        var _colors = [];
        var _out = false;
        var _min = 0;
        var _max = 1;
        var _correctLightness = false;
        var _colorCache = {};
        var _useCache = true;
        var _gamma = 1;
        var setColors = function(colors2) {
          colors2 = colors2 || ["#fff", "#000"];
          if (colors2 && type$2(colors2) === "string" && chroma$4.brewer && chroma$4.brewer[colors2.toLowerCase()]) {
            colors2 = chroma$4.brewer[colors2.toLowerCase()];
          }
          if (type$2(colors2) === "array") {
            if (colors2.length === 1) {
              colors2 = [colors2[0], colors2[0]];
            }
            colors2 = colors2.slice(0);
            for (var c = 0; c < colors2.length; c++) {
              colors2[c] = chroma$4(colors2[c]);
            }
            _pos.length = 0;
            for (var c$1 = 0; c$1 < colors2.length; c$1++) {
              _pos.push(c$1 / (colors2.length - 1));
            }
          }
          resetCache();
          return _colors = colors2;
        };
        var getClass = function(value) {
          if (_classes != null) {
            var n = _classes.length - 1;
            var i2 = 0;
            while (i2 < n && value >= _classes[i2]) {
              i2++;
            }
            return i2 - 1;
          }
          return 0;
        };
        var tMapLightness = function(t) {
          return t;
        };
        var tMapDomain = function(t) {
          return t;
        };
        var getColor = function(val, bypassMap) {
          var col, t;
          if (bypassMap == null) {
            bypassMap = false;
          }
          if (isNaN(val) || val === null) {
            return _nacol;
          }
          if (!bypassMap) {
            if (_classes && _classes.length > 2) {
              var c = getClass(val);
              t = c / (_classes.length - 2);
            } else if (_max !== _min) {
              t = (val - _min) / (_max - _min);
            } else {
              t = 1;
            }
          } else {
            t = val;
          }
          t = tMapDomain(t);
          if (!bypassMap) {
            t = tMapLightness(t);
          }
          if (_gamma !== 1) {
            t = pow$3(t, _gamma);
          }
          t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
          t = Math.min(1, Math.max(0, t));
          var k = Math.floor(t * 1e4);
          if (_useCache && _colorCache[k]) {
            col = _colorCache[k];
          } else {
            if (type$2(_colors) === "array") {
              for (var i2 = 0; i2 < _pos.length; i2++) {
                var p = _pos[i2];
                if (t <= p) {
                  col = _colors[i2];
                  break;
                }
                if (t >= p && i2 === _pos.length - 1) {
                  col = _colors[i2];
                  break;
                }
                if (t > p && t < _pos[i2 + 1]) {
                  t = (t - p) / (_pos[i2 + 1] - p);
                  col = chroma$4.interpolate(_colors[i2], _colors[i2 + 1], t, _mode);
                  break;
                }
              }
            } else if (type$2(_colors) === "function") {
              col = _colors(t);
            }
            if (_useCache) {
              _colorCache[k] = col;
            }
          }
          return col;
        };
        var resetCache = function() {
          return _colorCache = {};
        };
        setColors(colors);
        var f = function(v) {
          var c = chroma$4(getColor(v));
          if (_out && c[_out]) {
            return c[_out]();
          } else {
            return c;
          }
        };
        f.classes = function(classes) {
          if (classes != null) {
            if (type$2(classes) === "array") {
              _classes = classes;
              _domain = [classes[0], classes[classes.length - 1]];
            } else {
              var d = chroma$4.analyze(_domain);
              if (classes === 0) {
                _classes = [d.min, d.max];
              } else {
                _classes = chroma$4.limits(d, "e", classes);
              }
            }
            return f;
          }
          return _classes;
        };
        f.domain = function(domain) {
          if (!arguments.length) {
            return _domain;
          }
          _min = domain[0];
          _max = domain[domain.length - 1];
          _pos = [];
          var k = _colors.length;
          if (domain.length === k && _min !== _max) {
            for (var i2 = 0, list2 = Array.from(domain); i2 < list2.length; i2 += 1) {
              var d = list2[i2];
              _pos.push((d - _min) / (_max - _min));
            }
          } else {
            for (var c = 0; c < k; c++) {
              _pos.push(c / (k - 1));
            }
            if (domain.length > 2) {
              var tOut = domain.map(function(d2, i3) {
                return i3 / (domain.length - 1);
              });
              var tBreaks = domain.map(function(d2) {
                return (d2 - _min) / (_max - _min);
              });
              if (!tBreaks.every(function(val, i3) {
                return tOut[i3] === val;
              })) {
                tMapDomain = function(t) {
                  if (t <= 0 || t >= 1) {
                    return t;
                  }
                  var i3 = 0;
                  while (t >= tBreaks[i3 + 1]) {
                    i3++;
                  }
                  var f2 = (t - tBreaks[i3]) / (tBreaks[i3 + 1] - tBreaks[i3]);
                  var out = tOut[i3] + f2 * (tOut[i3 + 1] - tOut[i3]);
                  return out;
                };
              }
            }
          }
          _domain = [_min, _max];
          return f;
        };
        f.mode = function(_m) {
          if (!arguments.length) {
            return _mode;
          }
          _mode = _m;
          resetCache();
          return f;
        };
        f.range = function(colors2, _pos2) {
          setColors(colors2);
          return f;
        };
        f.out = function(_o) {
          _out = _o;
          return f;
        };
        f.spread = function(val) {
          if (!arguments.length) {
            return _spread;
          }
          _spread = val;
          return f;
        };
        f.correctLightness = function(v) {
          if (v == null) {
            v = true;
          }
          _correctLightness = v;
          resetCache();
          if (_correctLightness) {
            tMapLightness = function(t) {
              var L0 = getColor(0, true).lab()[0];
              var L1 = getColor(1, true).lab()[0];
              var pol = L0 > L1;
              var L_actual = getColor(t, true).lab()[0];
              var L_ideal = L0 + (L1 - L0) * t;
              var L_diff = L_actual - L_ideal;
              var t0 = 0;
              var t1 = 1;
              var max_iter = 20;
              while (Math.abs(L_diff) > 0.01 && max_iter-- > 0) {
                (function() {
                  if (pol) {
                    L_diff *= -1;
                  }
                  if (L_diff < 0) {
                    t0 = t;
                    t += (t1 - t) * 0.5;
                  } else {
                    t1 = t;
                    t += (t0 - t) * 0.5;
                  }
                  L_actual = getColor(t, true).lab()[0];
                  return L_diff = L_actual - L_ideal;
                })();
              }
              return t;
            };
          } else {
            tMapLightness = function(t) {
              return t;
            };
          }
          return f;
        };
        f.padding = function(p) {
          if (p != null) {
            if (type$2(p) === "number") {
              p = [p, p];
            }
            _padding = p;
            return f;
          } else {
            return _padding;
          }
        };
        f.colors = function(numColors, out) {
          if (arguments.length < 2) {
            out = "hex";
          }
          var result = [];
          if (arguments.length === 0) {
            result = _colors.slice(0);
          } else if (numColors === 1) {
            result = [f(0.5)];
          } else if (numColors > 1) {
            var dm = _domain[0];
            var dd = _domain[1] - dm;
            result = __range__(0, numColors, false).map(function(i3) {
              return f(dm + i3 / (numColors - 1) * dd);
            });
          } else {
            colors = [];
            var samples = [];
            if (_classes && _classes.length > 2) {
              for (var i2 = 1, end = _classes.length, asc = 1 <= end; asc ? i2 < end : i2 > end; asc ? i2++ : i2--) {
                samples.push((_classes[i2 - 1] + _classes[i2]) * 0.5);
              }
            } else {
              samples = _domain;
            }
            result = samples.map(function(v) {
              return f(v);
            });
          }
          if (chroma$4[out]) {
            result = result.map(function(c) {
              return c[out]();
            });
          }
          return result;
        };
        f.cache = function(c) {
          if (c != null) {
            _useCache = c;
            return f;
          } else {
            return _useCache;
          }
        };
        f.gamma = function(g) {
          if (g != null) {
            _gamma = g;
            return f;
          } else {
            return _gamma;
          }
        };
        f.nodata = function(d) {
          if (d != null) {
            _nacol = chroma$4(d);
            return f;
          } else {
            return _nacol;
          }
        };
        return f;
      };
      function __range__(left, right, inclusive) {
        var range2 = [];
        var ascending = left < right;
        var end = !inclusive ? right : ascending ? right + 1 : right - 1;
        for (var i2 = left; ascending ? i2 < end : i2 > end; ascending ? i2++ : i2--) {
          range2.push(i2);
        }
        return range2;
      }
      var Color$5 = Color_1;
      var scale$1 = scale$2;
      var binom_row = function(n) {
        var row = [1, 1];
        for (var i2 = 1; i2 < n; i2++) {
          var newrow = [1];
          for (var j = 1; j <= row.length; j++) {
            newrow[j] = (row[j] || 0) + row[j - 1];
          }
          row = newrow;
        }
        return row;
      };
      var bezier = function(colors) {
        var assign, assign$1, assign$2;
        var I, lab0, lab1, lab2;
        colors = colors.map(function(c) {
          return new Color$5(c);
        });
        if (colors.length === 2) {
          assign = colors.map(function(c) {
            return c.lab();
          }), lab0 = assign[0], lab1 = assign[1];
          I = function(t) {
            var lab4 = [0, 1, 2].map(function(i2) {
              return lab0[i2] + t * (lab1[i2] - lab0[i2]);
            });
            return new Color$5(lab4, "lab");
          };
        } else if (colors.length === 3) {
          assign$1 = colors.map(function(c) {
            return c.lab();
          }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2];
          I = function(t) {
            var lab4 = [0, 1, 2].map(function(i2) {
              return (1 - t) * (1 - t) * lab0[i2] + 2 * (1 - t) * t * lab1[i2] + t * t * lab2[i2];
            });
            return new Color$5(lab4, "lab");
          };
        } else if (colors.length === 4) {
          var lab3;
          assign$2 = colors.map(function(c) {
            return c.lab();
          }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3];
          I = function(t) {
            var lab4 = [0, 1, 2].map(function(i2) {
              return (1 - t) * (1 - t) * (1 - t) * lab0[i2] + 3 * (1 - t) * (1 - t) * t * lab1[i2] + 3 * (1 - t) * t * t * lab2[i2] + t * t * t * lab3[i2];
            });
            return new Color$5(lab4, "lab");
          };
        } else if (colors.length >= 5) {
          var labs, row, n;
          labs = colors.map(function(c) {
            return c.lab();
          });
          n = colors.length - 1;
          row = binom_row(n);
          I = function(t) {
            var u = 1 - t;
            var lab4 = [0, 1, 2].map(function(i2) {
              return labs.reduce(function(sum, el, j) {
                return sum + row[j] * Math.pow(u, n - j) * Math.pow(t, j) * el[i2];
              }, 0);
            });
            return new Color$5(lab4, "lab");
          };
        } else {
          throw new RangeError("No point in running bezier with only one color.");
        }
        return I;
      };
      var bezier_1 = function(colors) {
        var f = bezier(colors);
        f.scale = function() {
          return scale$1(f);
        };
        return f;
      };
      var chroma$3 = chroma_1;
      var blend = function(bottom, top, mode) {
        if (!blend[mode]) {
          throw new Error("unknown blend mode " + mode);
        }
        return blend[mode](bottom, top);
      };
      var blend_f = function(f) {
        return function(bottom, top) {
          var c0 = chroma$3(top).rgb();
          var c1 = chroma$3(bottom).rgb();
          return chroma$3.rgb(f(c0, c1));
        };
      };
      var each = function(f) {
        return function(c0, c1) {
          var out = [];
          out[0] = f(c0[0], c1[0]);
          out[1] = f(c0[1], c1[1]);
          out[2] = f(c0[2], c1[2]);
          return out;
        };
      };
      var normal = function(a) {
        return a;
      };
      var multiply = function(a, b) {
        return a * b / 255;
      };
      var darken = function(a, b) {
        return a > b ? b : a;
      };
      var lighten = function(a, b) {
        return a > b ? a : b;
      };
      var screen = function(a, b) {
        return 255 * (1 - (1 - a / 255) * (1 - b / 255));
      };
      var overlay = function(a, b) {
        return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
      };
      var burn = function(a, b) {
        return 255 * (1 - (1 - b / 255) / (a / 255));
      };
      var dodge = function(a, b) {
        if (a === 255) {
          return 255;
        }
        a = 255 * (b / 255) / (1 - a / 255);
        return a > 255 ? 255 : a;
      };
      blend.normal = blend_f(each(normal));
      blend.multiply = blend_f(each(multiply));
      blend.screen = blend_f(each(screen));
      blend.overlay = blend_f(each(overlay));
      blend.darken = blend_f(each(darken));
      blend.lighten = blend_f(each(lighten));
      blend.dodge = blend_f(each(dodge));
      blend.burn = blend_f(each(burn));
      var blend_1 = blend;
      var type$1 = utils.type;
      var clip_rgb = utils.clip_rgb;
      var TWOPI = utils.TWOPI;
      var pow$2 = Math.pow;
      var sin$1 = Math.sin;
      var cos$1 = Math.cos;
      var chroma$2 = chroma_1;
      var cubehelix = function(start, rotations, hue, gamma, lightness) {
        if (start === void 0) start = 300;
        if (rotations === void 0) rotations = -1.5;
        if (hue === void 0) hue = 1;
        if (gamma === void 0) gamma = 1;
        if (lightness === void 0) lightness = [0, 1];
        var dh = 0, dl;
        if (type$1(lightness) === "array") {
          dl = lightness[1] - lightness[0];
        } else {
          dl = 0;
          lightness = [lightness, lightness];
        }
        var f = function(fract) {
          var a = TWOPI * ((start + 120) / 360 + rotations * fract);
          var l = pow$2(lightness[0] + dl * fract, gamma);
          var h = dh !== 0 ? hue[0] + fract * dh : hue;
          var amp = h * l * (1 - l) / 2;
          var cos_a = cos$1(a);
          var sin_a = sin$1(a);
          var r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
          var g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
          var b = l + amp * (1.97294 * cos_a);
          return chroma$2(clip_rgb([r * 255, g * 255, b * 255, 1]));
        };
        f.start = function(s) {
          if (s == null) {
            return start;
          }
          start = s;
          return f;
        };
        f.rotations = function(r) {
          if (r == null) {
            return rotations;
          }
          rotations = r;
          return f;
        };
        f.gamma = function(g) {
          if (g == null) {
            return gamma;
          }
          gamma = g;
          return f;
        };
        f.hue = function(h) {
          if (h == null) {
            return hue;
          }
          hue = h;
          if (type$1(hue) === "array") {
            dh = hue[1] - hue[0];
            if (dh === 0) {
              hue = hue[1];
            }
          } else {
            dh = 0;
          }
          return f;
        };
        f.lightness = function(h) {
          if (h == null) {
            return lightness;
          }
          if (type$1(h) === "array") {
            lightness = h;
            dl = h[1] - h[0];
          } else {
            lightness = [h, h];
            dl = 0;
          }
          return f;
        };
        f.scale = function() {
          return chroma$2.scale(f);
        };
        f.hue(hue);
        return f;
      };
      var Color$4 = Color_1;
      var digits = "0123456789abcdef";
      var floor$1 = Math.floor;
      var random = Math.random;
      var random_1 = function() {
        var code = "#";
        for (var i2 = 0; i2 < 6; i2++) {
          code += digits.charAt(floor$1(random() * 16));
        }
        return new Color$4(code, "hex");
      };
      var type = type$p;
      var log = Math.log;
      var pow$1 = Math.pow;
      var floor = Math.floor;
      var abs$1 = Math.abs;
      var analyze = function(data, key2) {
        if (key2 === void 0) key2 = null;
        var r = {
          min: Number.MAX_VALUE,
          max: Number.MAX_VALUE * -1,
          sum: 0,
          values: [],
          count: 0
        };
        if (type(data) === "object") {
          data = Object.values(data);
        }
        data.forEach(function(val) {
          if (key2 && type(val) === "object") {
            val = val[key2];
          }
          if (val !== void 0 && val !== null && !isNaN(val)) {
            r.values.push(val);
            r.sum += val;
            if (val < r.min) {
              r.min = val;
            }
            if (val > r.max) {
              r.max = val;
            }
            r.count += 1;
          }
        });
        r.domain = [r.min, r.max];
        r.limits = function(mode, num2) {
          return limits(r, mode, num2);
        };
        return r;
      };
      var limits = function(data, mode, num2) {
        if (mode === void 0) mode = "equal";
        if (num2 === void 0) num2 = 7;
        if (type(data) == "array") {
          data = analyze(data);
        }
        var min2 = data.min;
        var max2 = data.max;
        var values = data.values.sort(function(a, b) {
          return a - b;
        });
        if (num2 === 1) {
          return [min2, max2];
        }
        var limits2 = [];
        if (mode.substr(0, 1) === "c") {
          limits2.push(min2);
          limits2.push(max2);
        }
        if (mode.substr(0, 1) === "e") {
          limits2.push(min2);
          for (var i2 = 1; i2 < num2; i2++) {
            limits2.push(min2 + i2 / num2 * (max2 - min2));
          }
          limits2.push(max2);
        } else if (mode.substr(0, 1) === "l") {
          if (min2 <= 0) {
            throw new Error("Logarithmic scales are only possible for values > 0");
          }
          var min_log = Math.LOG10E * log(min2);
          var max_log = Math.LOG10E * log(max2);
          limits2.push(min2);
          for (var i$12 = 1; i$12 < num2; i$12++) {
            limits2.push(pow$1(10, min_log + i$12 / num2 * (max_log - min_log)));
          }
          limits2.push(max2);
        } else if (mode.substr(0, 1) === "q") {
          limits2.push(min2);
          for (var i$2 = 1; i$2 < num2; i$2++) {
            var p = (values.length - 1) * i$2 / num2;
            var pb = floor(p);
            if (pb === p) {
              limits2.push(values[pb]);
            } else {
              var pr = p - pb;
              limits2.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
            }
          }
          limits2.push(max2);
        } else if (mode.substr(0, 1) === "k") {
          var cluster;
          var n = values.length;
          var assignments = new Array(n);
          var clusterSizes = new Array(num2);
          var repeat = true;
          var nb_iters = 0;
          var centroids = null;
          centroids = [];
          centroids.push(min2);
          for (var i$3 = 1; i$3 < num2; i$3++) {
            centroids.push(min2 + i$3 / num2 * (max2 - min2));
          }
          centroids.push(max2);
          while (repeat) {
            for (var j = 0; j < num2; j++) {
              clusterSizes[j] = 0;
            }
            for (var i$4 = 0; i$4 < n; i$4++) {
              var value = values[i$4];
              var mindist = Number.MAX_VALUE;
              var best = void 0;
              for (var j$1 = 0; j$1 < num2; j$1++) {
                var dist = abs$1(centroids[j$1] - value);
                if (dist < mindist) {
                  mindist = dist;
                  best = j$1;
                }
                clusterSizes[best]++;
                assignments[i$4] = best;
              }
            }
            var newCentroids = new Array(num2);
            for (var j$2 = 0; j$2 < num2; j$2++) {
              newCentroids[j$2] = null;
            }
            for (var i$5 = 0; i$5 < n; i$5++) {
              cluster = assignments[i$5];
              if (newCentroids[cluster] === null) {
                newCentroids[cluster] = values[i$5];
              } else {
                newCentroids[cluster] += values[i$5];
              }
            }
            for (var j$3 = 0; j$3 < num2; j$3++) {
              newCentroids[j$3] *= 1 / clusterSizes[j$3];
            }
            repeat = false;
            for (var j$4 = 0; j$4 < num2; j$4++) {
              if (newCentroids[j$4] !== centroids[j$4]) {
                repeat = true;
                break;
              }
            }
            centroids = newCentroids;
            nb_iters++;
            if (nb_iters > 200) {
              repeat = false;
            }
          }
          var kClusters = {};
          for (var j$5 = 0; j$5 < num2; j$5++) {
            kClusters[j$5] = [];
          }
          for (var i$6 = 0; i$6 < n; i$6++) {
            cluster = assignments[i$6];
            kClusters[cluster].push(values[i$6]);
          }
          var tmpKMeansBreaks = [];
          for (var j$6 = 0; j$6 < num2; j$6++) {
            tmpKMeansBreaks.push(kClusters[j$6][0]);
            tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length - 1]);
          }
          tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
            return a - b;
          });
          limits2.push(tmpKMeansBreaks[0]);
          for (var i$7 = 1; i$7 < tmpKMeansBreaks.length; i$7 += 2) {
            var v = tmpKMeansBreaks[i$7];
            if (!isNaN(v) && limits2.indexOf(v) === -1) {
              limits2.push(v);
            }
          }
        }
        return limits2;
      };
      var analyze_1 = { analyze, limits };
      var Color$3 = Color_1;
      var contrast = function(a, b) {
        a = new Color$3(a);
        b = new Color$3(b);
        var l1 = a.luminance();
        var l2 = b.luminance();
        return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
      };
      var Color$2 = Color_1;
      var sqrt = Math.sqrt;
      var pow = Math.pow;
      var min = Math.min;
      var max = Math.max;
      var atan2 = Math.atan2;
      var abs = Math.abs;
      var cos2 = Math.cos;
      var sin2 = Math.sin;
      var exp = Math.exp;
      var PI = Math.PI;
      var deltaE = function(a, b, Kl, Kc, Kh) {
        if (Kl === void 0) Kl = 1;
        if (Kc === void 0) Kc = 1;
        if (Kh === void 0) Kh = 1;
        var rad2deg = function(rad) {
          return 360 * rad / (2 * PI);
        };
        var deg2rad = function(deg) {
          return 2 * PI * deg / 360;
        };
        a = new Color$2(a);
        b = new Color$2(b);
        var ref = Array.from(a.lab());
        var L1 = ref[0];
        var a1 = ref[1];
        var b1 = ref[2];
        var ref$1 = Array.from(b.lab());
        var L2 = ref$1[0];
        var a2 = ref$1[1];
        var b2 = ref$1[2];
        var avgL = (L1 + L2) / 2;
        var C1 = sqrt(pow(a1, 2) + pow(b1, 2));
        var C2 = sqrt(pow(a2, 2) + pow(b2, 2));
        var avgC = (C1 + C2) / 2;
        var G = 0.5 * (1 - sqrt(pow(avgC, 7) / (pow(avgC, 7) + pow(25, 7))));
        var a1p = a1 * (1 + G);
        var a2p = a2 * (1 + G);
        var C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
        var C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
        var avgCp = (C1p + C2p) / 2;
        var arctan1 = rad2deg(atan2(b1, a1p));
        var arctan2 = rad2deg(atan2(b2, a2p));
        var h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
        var h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
        var avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
        var T = 1 - 0.17 * cos2(deg2rad(avgHp - 30)) + 0.24 * cos2(deg2rad(2 * avgHp)) + 0.32 * cos2(deg2rad(3 * avgHp + 6)) - 0.2 * cos2(deg2rad(4 * avgHp - 63));
        var deltaHp = h2p - h1p;
        deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
        deltaHp = 2 * sqrt(C1p * C2p) * sin2(deg2rad(deltaHp) / 2);
        var deltaL = L2 - L1;
        var deltaCp = C2p - C1p;
        var sl = 1 + 0.015 * pow(avgL - 50, 2) / sqrt(20 + pow(avgL - 50, 2));
        var sc = 1 + 0.045 * avgCp;
        var sh = 1 + 0.015 * avgCp * T;
        var deltaTheta = 30 * exp(-pow((avgHp - 275) / 25, 2));
        var Rc = 2 * sqrt(pow(avgCp, 7) / (pow(avgCp, 7) + pow(25, 7)));
        var Rt = -Rc * sin2(2 * deg2rad(deltaTheta));
        var result = sqrt(pow(deltaL / (Kl * sl), 2) + pow(deltaCp / (Kc * sc), 2) + pow(deltaHp / (Kh * sh), 2) + Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh)));
        return max(0, min(100, result));
      };
      var Color$1 = Color_1;
      var distance = function(a, b, mode) {
        if (mode === void 0) mode = "lab";
        a = new Color$1(a);
        b = new Color$1(b);
        var l1 = a.get(mode);
        var l2 = b.get(mode);
        var sum_sq = 0;
        for (var i2 in l1) {
          var d = (l1[i2] || 0) - (l2[i2] || 0);
          sum_sq += d * d;
        }
        return Math.sqrt(sum_sq);
      };
      var Color2 = Color_1;
      var valid = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        try {
          new (Function.prototype.bind.apply(Color2, [null].concat(args)))();
          return true;
        } catch (e) {
          return false;
        }
      };
      var chroma$1 = chroma_1;
      var scale = scale$2;
      var scales = {
        cool: function cool() {
          return scale([chroma$1.hsl(180, 1, 0.9), chroma$1.hsl(250, 0.7, 0.4)]);
        },
        hot: function hot() {
          return scale(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
        }
      };
      var colorbrewer = {
        // sequential
        OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
        PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
        BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
        Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
        BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
        YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
        YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
        Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
        RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
        Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
        YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
        Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
        GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
        Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
        YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
        PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
        Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
        PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
        Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
        // diverging
        Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
        RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
        RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
        PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
        PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
        RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
        BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
        RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
        PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
        // qualitative
        Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
        Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
        Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
        Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
        Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
        Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
        Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
        Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
      };
      for (var i = 0, list = Object.keys(colorbrewer); i < list.length; i += 1) {
        var key = list[i];
        colorbrewer[key.toLowerCase()] = colorbrewer[key];
      }
      var colorbrewer_1 = colorbrewer;
      var chroma = chroma_1;
      chroma.average = average;
      chroma.bezier = bezier_1;
      chroma.blend = blend_1;
      chroma.cubehelix = cubehelix;
      chroma.mix = chroma.interpolate = mix$1;
      chroma.random = random_1;
      chroma.scale = scale$2;
      chroma.analyze = analyze_1.analyze;
      chroma.contrast = contrast;
      chroma.deltaE = deltaE;
      chroma.distance = distance;
      chroma.limits = analyze_1.limits;
      chroma.valid = valid;
      chroma.scales = scales;
      chroma.colors = w3cx11_1;
      chroma.brewer = colorbrewer_1;
      var chroma_js = chroma;
      return chroma_js;
    });
  }
});

// lib/events/EventDispatcherBase.js
var EventDispatcherBase = class {
  constructor() {
    this.subscribable = new Subscribable(this);
    this.subscribers = /* @__PURE__ */ new Set();
  }
  /**
   * {@inheritDoc Subscribable.subscribe}
   */
  subscribe(handler) {
    this.subscribers.add(handler);
    return () => this.unsubscribe(handler);
  }
  /**
   * {@inheritDoc Subscribable.unsubscribe}
   */
  unsubscribe(handler) {
    this.subscribers.delete(handler);
  }
  /**
   * Unsubscribe all subscribers from the event.
   */
  clear() {
    this.subscribers.clear();
  }
  notifySubscribers(value) {
    return [...this.subscribers].map((handler) => handler(value));
  }
};
var Subscribable = class {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }
  /**
   * Subscribe to the event.
   *
   * @param handler - The handler to invoke when the event occurs.
   *
   * @returns A callback function that cancels the subscription.
   */
  subscribe(handler) {
    return this.dispatcher.subscribe(handler);
  }
  /**
   * Unsubscribe from the event.
   *
   * @param handler - The handler to unsubscribe.
   */
  unsubscribe(handler) {
    this.dispatcher.unsubscribe(handler);
  }
};

// lib/events/AsyncEventDispatcher.js
var AsyncEventDispatcher = class extends EventDispatcherBase {
  async dispatch(value) {
    await Promise.all(this.notifySubscribers(value));
  }
};

// lib/events/EventDispatcher.js
var EventDispatcher = class extends EventDispatcherBase {
  dispatch(value) {
    this.notifySubscribers(value);
  }
};

// lib/events/FlagDispatcher.js
var FlagDispatcher = class extends EventDispatcherBase {
  constructor() {
    super(...arguments);
    this.value = false;
  }
  /**
   * Notify all current and future subscribers.
   */
  raise() {
    if (!this.value) {
      this.value = true;
      this.notifySubscribers();
    }
  }
  /**
   * Stop notifying future subscribers.
   */
  reset() {
    this.value = false;
  }
  /**
   * Are subscribers being notified?
   */
  isRaised() {
    return this.value;
  }
  subscribe(handler) {
    const unsubscribe = super.subscribe(handler);
    if (this.value) {
      handler();
    }
    return unsubscribe;
  }
};

// lib/events/ValueDispatcher.js
var ValueDispatcher = class extends EventDispatcherBase {
  /**
   * {@inheritDoc SubscribableValueEvent.current}
   */
  get current() {
    return this.value;
  }
  /**
   * Set the current value of this dispatcher.
   *
   * @remarks
   * Setting the value will immediately notify all subscribers.
   *
   * @param value - The new value.
   */
  set current(value) {
    this.value = value;
    this.notifySubscribers(value);
  }
  /**
   * @param value - The initial value.
   */
  constructor(value) {
    super();
    this.value = value;
    this.subscribable = new SubscribableValueEvent(this);
  }
  /**
   * {@inheritDoc SubscribableValueEvent.subscribe}
   */
  subscribe(handler, dispatchImmediately = true) {
    const unsubscribe = super.subscribe(handler);
    if (dispatchImmediately) {
      handler(this.value);
    }
    return unsubscribe;
  }
};
var SubscribableValueEvent = class extends Subscribable {
  /**
   * Get the most recent value of this dispatcher.
   */
  get current() {
    return this.dispatcher.current;
  }
  /**
   * Subscribe to the event.
   *
   * Subscribing will immediately invoke the handler with the most recent value.
   *
   * @param handler - The handler to invoke when the event occurs.
   * @param dispatchImmediately - Whether the handler should be immediately
   *                              invoked with the most recent value.
   *
   * @returns Callback function that cancels the subscription.
   */
  subscribe(handler, dispatchImmediately = true) {
    return this.dispatcher.subscribe(handler, dispatchImmediately);
  }
};

// lib/meta/MetaField.js
var MetaField = class {
  /**
   * Triggered when the data of this field changes.
   *
   * @eventProperty
   */
  get onChanged() {
    return this.value.subscribable;
  }
  /**
   * Triggered when the field becomes disabled or enabled.
   *
   * @eventProperty
   */
  get onDisabled() {
    return this.disabled.subscribable;
  }
  /**
   * @param name - The name of this field displayed in the editor.
   * @param initial - The initial value of this field.
   */
  constructor(name, initial) {
    this.name = name;
    this.initial = initial;
    this.type = void 0;
    this.spacing = false;
    this.description = "";
    this.disabled = new ValueDispatcher(false);
    this.value = new ValueDispatcher(initial);
  }
  /**
   * Get the current value.
   */
  get() {
    return this.value.current;
  }
  /**
   * Set the current value.
   *
   * @param value - The new value.
   */
  set(value) {
    this.value.current = this.parse(value);
  }
  /**
   * Convert a serialized value into a runtime type.
   *
   * @param value - The serialized value.
   */
  parse(value) {
    return value;
  }
  /**
   * Serialize the value of this field.
   */
  serialize() {
    return this.value.current;
  }
  /**
   * Create a clone of this field.
   */
  clone() {
    return new this.constructor(this.name, this.get());
  }
  /**
   * Disable or enable the field in the editor.
   *
   * @param value - Whether the field should be disabled.
   */
  disable(value = true) {
    this.disabled.current = value;
    return this;
  }
  /**
   * Add or remove spacing at the beginning of this field.
   *
   * @param value - Whether to include the spacing.
   */
  space(value = true) {
    this.spacing = value;
    return this;
  }
  /**
   * Set the description of this field.
   *
   * @param description - The description.
   */
  describe(description) {
    this.description = description;
    return this;
  }
};

// lib/meta/ObjectMetaField.js
var ObjectMetaFieldInternal = class extends MetaField {
  /**
   * Triggered when the nested fields change.
   *
   * @eventProperty
   */
  get onFieldsChanged() {
    return this.event.subscribable;
  }
  constructor(name, fields) {
    const map2 = new Map(Object.entries(fields));
    super(name, Object.fromEntries(Array.from(map2, ([name2, field]) => [name2, field.get()])));
    this.type = Object;
    this.ignoreChange = false;
    this.customFields = {};
    this.handleChange = () => {
      if (this.ignoreChange)
        return;
      this.value.current = {
        ...this.transform("get"),
        ...this.customFields
      };
    };
    this.event = new ValueDispatcher([...map2.values()]);
    this.fields = map2;
    for (const [key, field] of this.fields) {
      Object.defineProperty(this, key, { value: field });
      field.onChanged.subscribe(this.handleChange);
    }
  }
  set(value) {
    this.ignoreChange = true;
    for (const [key, fieldValue] of Object.entries(value)) {
      const field = this.fields.get(key);
      if (field) {
        field.set(fieldValue);
      } else {
        this.customFields[key] = fieldValue;
      }
    }
    this.ignoreChange = false;
    this.handleChange();
  }
  serialize() {
    return {
      ...this.transform("serialize"),
      ...this.customFields
    };
  }
  clone() {
    const cloned = new this.constructor(this.name, this.transform("clone"));
    cloned.set(structuredClone(this.customFields));
    return cloned;
  }
  transform(fn) {
    const transformed = Object.fromEntries(Array.from(this.fields, ([name, field]) => [name, field[fn]()]));
    return transformed;
  }
};
var ObjectMetaField = ObjectMetaFieldInternal;

// lib/meta/BoolMetaField.js
var BoolMetaField = class extends MetaField {
  constructor() {
    super(...arguments);
    this.type = Boolean;
  }
  parse(value) {
    return !!value;
  }
};

// lib/utils/DetailedError.js
var DetailedError = class extends Error {
  constructor(props, remarks) {
    if (typeof props === "string") {
      super(props);
      this.remarks = remarks;
    } else {
      super(props.message);
      this.remarks = props.remarks;
      this.object = props.object;
      this.durationMs = props.durationMs;
      this.inspect = props.inspect;
    }
  }
};

// lib/utils/ExperimentalError.js
var ExperimentalError = class extends DetailedError {
  constructor(props, remarks) {
    if (typeof props === "string") {
      super({
        message: props,
        remarks: (remarks ?? "") + `<p>This feature requires enabling the <code>experimentalFeatures</code> flag in your project
configuration:</p>
<pre class=""><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">makeProject</span>({
  <span class="hljs-attr">experimentalFeatures</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-comment">// ...</span>
});</code></pre><p><a href='https://motioncanvas.io/docs/experimental' target='_blank'>Learn more</a> about experimental
features.</p>
`
      });
    } else {
      super({
        ...props,
        remarks: (props.remarks ?? "") + `<p>This feature requires enabling the <code>experimentalFeatures</code> flag in your project
configuration:</p>
<pre class=""><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">makeProject</span>({
  <span class="hljs-attr">experimentalFeatures</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-comment">// ...</span>
});</code></pre><p><a href='https://motioncanvas.io/docs/experimental' target='_blank'>Learn more</a> about experimental
features.</p>
`
      });
    }
  }
};

// lib/utils/Semaphore.js
var Semaphore = class {
  constructor() {
    this.resolveCurrent = null;
    this.current = null;
  }
  async acquire() {
    while (this.current) {
      await this.current;
    }
    this.current = new Promise((resolve) => {
      this.resolveCurrent = resolve;
    });
  }
  release() {
    this.current = null;
    this.resolveCurrent?.();
    this.resolveCurrent = null;
  }
};

// lib/utils/useScene.js
var SceneStack = [];
function useScene() {
  const scene = SceneStack.at(-1);
  if (!scene) {
    throw new Error("The scene is not available in the current context.");
  }
  return scene;
}
function startScene(scene) {
  SceneStack.push(scene);
}
function endScene(scene) {
  if (SceneStack.pop() !== scene) {
    throw new Error("startScene/endScene were called out of order.");
  }
}
function useLogger() {
  return SceneStack.at(-1)?.logger ?? console;
}
function finishScene() {
  useScene().enterCanTransitionOut();
}

// lib/utils/useThread.js
var ThreadStack = [];
function useThread() {
  const thread = ThreadStack.at(-1);
  if (!thread) {
    throw new DetailedError("The thread is not available in the current context.", "<p><code>useThread()</code> can only be called from within generator functions.\n      It&#39;s not available during rendering.</p>\n");
  }
  return thread;
}
function startThread(thread) {
  ThreadStack.push(thread);
}
function endThread(thread) {
  if (ThreadStack.pop() !== thread) {
    throw new Error("startThread/endThread was called out of order.");
  }
}

// lib/utils/beginSlide.js
function* beginSlide(name) {
  const { slides } = useScene();
  const thread = useThread();
  slides.register(name, thread.fixed);
  yield;
  while (slides.shouldWait(name)) {
    yield;
  }
}

// lib/utils/capitalize.js
function capitalize(value) {
  return value[0].toUpperCase() + value.slice(1);
}

// lib/utils/createRef.js
function createRef() {
  let value;
  const ref = (newValue) => {
    if (newValue !== void 0) {
      value = newValue;
    } else {
      return value;
    }
  };
  return ref;
}
function makeRef(object, key) {
  return (newValue) => {
    object[key] = newValue;
  };
}
function makeRefs() {
  return {};
}

// lib/utils/createRefArray.js
function createRefArray() {
  const target = function() {
  };
  target.array = [];
  return new Proxy(target, Handler);
}
var Handler = {
  apply(target, _, argArray) {
    if (argArray.length === 0) {
      return target.array[0];
    }
    target.array.push(...argArray);
  },
  get(target, property, receiver) {
    const value = Reflect.get(target.array, property, receiver);
    if (typeof value === "function") {
      return value.bind(target.array);
    }
    return value;
  },
  set(target, property, value, receiver) {
    return Reflect.set(target.array, property, value, receiver);
  }
};

// lib/utils/createRefMap.js
function createRefMap() {
  const group = /* @__PURE__ */ new Map();
  group.entries();
  return new Proxy(group, Handler2);
}
var Handler2 = {
  get(target, property) {
    if (Reflect.has(target, property)) {
      return Reflect.get(target, property);
    }
    if (property === "mapRefs") {
      return function(callback) {
        const result = [];
        for (const value of target.values()) {
          result.push(callback(value(), result.length));
        }
        return result;
      };
    }
    if (typeof property === "string") {
      let value = target.get(property);
      if (!value) {
        value = createRef();
        target.set(property, value);
      }
      return value;
    }
  },
  has(target, property) {
    if (Reflect.has(target, property)) {
      return true;
    }
    if (typeof property === "string") {
      return target.has(property);
    }
    return false;
  }
};

// lib/utils/debug.js
function stringify(value) {
  switch (typeof value) {
    case "string":
      return value;
    case "undefined":
      return "undefined";
    default:
      if (Number.isNaN(value)) {
        return "NaN";
      }
      return JSON.stringify(value);
  }
}
function debug(payload) {
  const result = { message: stringify(payload) };
  if (payload && typeof payload === "object") {
    result.object = payload;
  }
  useLogger().debug(result);
}

// lib/utils/deprecate.js
function deprecate(fn, message, remarks) {
  return function(...args) {
    useLogger().warn({ message, remarks, stack: new Error().stack });
    return fn.apply(this, args);
  };
}

// lib/utils/errorToLog.js
function errorToLog(error) {
  return {
    message: error.message,
    stack: error.stack,
    remarks: error.remarks
  };
}

// lib/app/presets.js
var Scales = [
  { value: 0.25, text: "0.25x (Quarter)" },
  { value: 0.5, text: `0.5x (Half)` },
  { value: 1, text: `1.0x (Full)` },
  { value: 2, text: `2.0x (Double)` }
];
var ColorSpaces = [
  { value: "srgb", text: "sRGB" },
  { value: "display-p3", text: "DCI-P3" }
];
var FileTypes = [
  { value: "image/png", text: "png" },
  { value: "image/jpeg", text: "jpeg" },
  { value: "image/webp", text: "webp" }
];
var FrameRates = [
  { value: 30, text: "30 FPS" },
  { value: 60, text: "60 FPS" }
];

// lib/app/ImageExporter.js
var _a;
var EXPORT_FRAME_LIMIT = 256;
var EXPORT_RETRY_DELAY = 1e3;
var ImageExporter = class {
  static meta() {
    const meta = new ObjectMetaField(this.name, {
      fileType: new EnumMetaField("file type", FileTypes),
      quality: new NumberMetaField("quality", 100).setRange(0, 100).describe("A number between 0 and 100 indicating the image quality."),
      groupByScene: new BoolMetaField("group by scene", false).describe("Group exported images by scene. When checked, separates the sequence into subdirectories for each scene in the project.")
    });
    meta.fileType.onChanged.subscribe((value) => {
      meta.quality.disable(value === "image/png");
    });
    return meta;
  }
  static async create(project, settings) {
    return new _a(project.logger, settings);
  }
  constructor(logger, settings) {
    this.logger = logger;
    this.settings = settings;
    this.frameLookup = /* @__PURE__ */ new Set();
    this.handleResponse = ({ frame }) => {
      this.frameLookup.delete(frame);
    };
    const options = settings.exporter.options;
    this.projectName = settings.name;
    this.quality = clamp(0, 1, options.quality / 100);
    this.fileType = options.fileType;
    this.groupByScene = options.groupByScene;
  }
  async start() {
    _a.response.subscribe(this.handleResponse);
  }
  async handleFrame(canvas, frame, sceneFrame, sceneName, signal) {
    if (this.frameLookup.has(frame)) {
      this.logger.warn(`Frame no. ${frame} is already being exported.`);
      return;
    }
    if (import.meta.hot) {
      while (this.frameLookup.size > EXPORT_FRAME_LIMIT) {
        await new Promise((resolve) => setTimeout(resolve, EXPORT_RETRY_DELAY));
        if (signal.aborted) {
          return;
        }
      }
      this.frameLookup.add(frame);
      import.meta.hot.send("motion-canvas:export", {
        frame,
        data: canvas.toDataURL(this.fileType, this.quality),
        mimeType: this.fileType,
        subDirectories: this.groupByScene ? [this.projectName, sceneName] : [this.projectName],
        name: (this.groupByScene ? sceneFrame : frame).toString().padStart(6, "0")
      });
    }
  }
  async stop() {
    while (this.frameLookup.size > 0) {
      await new Promise((resolve) => setTimeout(resolve, EXPORT_RETRY_DELAY));
    }
    _a.response.unsubscribe(this.handleResponse);
  }
};
_a = ImageExporter;
ImageExporter.id = "@motion-canvas/core/image-sequence";
ImageExporter.displayName = "Image sequence";
ImageExporter.response = new EventDispatcher();
(() => {
  if (import.meta.hot) {
    import.meta.hot.on("motion-canvas:export-ack", (response) => {
      _a.response.dispatch(response);
    });
  }
})();

// lib/app/Logger.js
var LogLevel;
(function(LogLevel2) {
  LogLevel2["Error"] = "error";
  LogLevel2["Warn"] = "warn";
  LogLevel2["Info"] = "info";
  LogLevel2["Http"] = "http";
  LogLevel2["Verbose"] = "verbose";
  LogLevel2["Debug"] = "debug";
  LogLevel2["Silly"] = "silly";
})(LogLevel || (LogLevel = {}));
var Logger = class {
  constructor() {
    this.logged = new EventDispatcher();
    this.history = [];
    this.profilers = {};
  }
  /**
   * Triggered when a new message is logged.
   */
  get onLogged() {
    return this.logged.subscribable;
  }
  log(payload) {
    this.logged.dispatch(payload);
    this.history.push(payload);
  }
  error(payload) {
    this.logLevel(LogLevel.Error, payload);
  }
  warn(payload) {
    this.logLevel(LogLevel.Warn, payload);
  }
  info(payload) {
    this.logLevel(LogLevel.Info, payload);
  }
  http(payload) {
    this.logLevel(LogLevel.Http, payload);
  }
  verbose(payload) {
    this.logLevel(LogLevel.Verbose, payload);
  }
  debug(payload) {
    this.logLevel(LogLevel.Debug, payload);
  }
  silly(payload) {
    this.logLevel(LogLevel.Silly, payload);
  }
  logLevel(level, payload) {
    const result = typeof payload === "string" ? { message: payload } : payload;
    result.level = level;
    this.log(result);
  }
  profile(id, payload) {
    const time = performance.now();
    if (this.profilers[id]) {
      const timeEnd = this.profilers[id];
      delete this.profilers[id];
      const result = payload ?? { message: id };
      result.level ?? (result.level = LogLevel.Debug);
      result.durationMs = time - timeEnd;
      this.log(result);
      return;
    }
    this.profilers[id] = time;
  }
};

// lib/app/PlaybackManager.js
var PlaybackState;
(function(PlaybackState2) {
  PlaybackState2[PlaybackState2["Playing"] = 0] = "Playing";
  PlaybackState2[PlaybackState2["Rendering"] = 1] = "Rendering";
  PlaybackState2[PlaybackState2["Paused"] = 2] = "Paused";
  PlaybackState2[PlaybackState2["Presenting"] = 3] = "Presenting";
})(PlaybackState || (PlaybackState = {}));
var PlaybackManager = class {
  constructor() {
    this.frame = 0;
    this.speed = 1;
    this.fps = 30;
    this.duration = 0;
    this.finished = false;
    this.slides = [];
    this.previousScene = null;
    this.state = PlaybackState.Paused;
    this.currentSceneReference = null;
    this.scenes = new ValueDispatcher([]);
  }
  /**
   * Triggered when the active scene changes.
   *
   * @eventProperty
   */
  get onSceneChanged() {
    if (this.currentSceneReference === null) {
      throw new Error("PlaybackManager has not been properly initialized");
    }
    return this.currentSceneReference.subscribable;
  }
  /**
   * Triggered when the scenes get recalculated.
   *
   * @remarks
   * This event indicates that the timing of at least one scene has changed.
   *
   * @eventProperty
   */
  get onScenesRecalculated() {
    return this.scenes.subscribable;
  }
  get currentScene() {
    if (this.currentSceneReference === null) {
      throw new Error("PlaybackManager has not been properly initialized");
    }
    return this.currentSceneReference.current;
  }
  set currentScene(scene) {
    if (!scene) {
      throw new Error("Invalid scene.");
    }
    this.currentSceneReference ?? (this.currentSceneReference = new ValueDispatcher(scene));
    this.currentSceneReference.current = scene;
  }
  setup(scenes) {
    this.scenes.current = scenes;
    this.currentScene = scenes[0];
  }
  async progress() {
    this.finished = await this.next();
    return this.finished;
  }
  async seek(frame) {
    if (frame <= this.frame || this.currentScene.isCached() && this.currentScene.lastFrame < frame) {
      const scene = this.findBestScene(frame);
      if (scene !== this.currentScene) {
        this.previousScene = null;
        this.currentScene = scene;
        this.frame = this.currentScene.firstFrame;
        await this.currentScene.reset();
      } else if (this.frame >= frame) {
        this.previousScene = null;
        this.frame = this.currentScene.firstFrame;
        await this.currentScene.reset();
      }
    }
    this.finished = false;
    while (this.frame < frame && !this.finished) {
      this.finished = await this.next();
    }
    return this.finished;
  }
  async goBack() {
    let target = this.currentScene.slides.getCurrent();
    if (target && this.currentScene.slides.isWaiting()) {
      const index = this.slides.indexOf(target);
      target = this.slides[index - 1];
    }
    await this.seekSlide(target);
  }
  async goForward() {
    const current = this.currentScene.slides.getCurrent();
    const index = this.slides.indexOf(current);
    await this.seekSlide(this.slides[index + 1]);
  }
  async goTo(slideId) {
    await this.seekSlide(this.slides.find((slide) => slide.id === slideId));
  }
  async seekSlide(slide = null) {
    if (!slide)
      return;
    const { id, scene } = slide;
    if (this.currentScene !== scene || this.currentScene.slides.didHappen(id)) {
      this.previousScene = null;
      this.currentScene = scene;
      this.frame = this.currentScene.firstFrame;
      this.currentScene.slides.setTarget(id);
      await this.currentScene.reset();
    }
    this.finished = false;
    this.currentScene.slides.setTarget(id);
    while (!this.currentScene.slides.isWaitingFor(id) && !this.finished) {
      this.finished = await this.next();
    }
    this.currentScene.slides.setTarget(null);
    return this.finished;
  }
  async reset() {
    this.previousScene = null;
    this.currentScene = this.scenes.current[0];
    this.frame = 0;
    this.finished = false;
    await this.currentScene.reset();
  }
  reload(description) {
    this.scenes.current.forEach((scene) => scene.reload(description));
  }
  async recalculate() {
    this.previousScene = null;
    this.slides = [];
    const speed = this.speed;
    this.frame = 0;
    this.speed = 1;
    const scenes = [];
    try {
      for (const scene of this.scenes.current) {
        await scene.recalculate((frame) => {
          this.frame = frame;
        });
        this.slides.push(...scene.slides.onChanged.current);
        scenes.push(scene);
      }
    } finally {
      this.speed = speed;
    }
    this.scenes.current = scenes;
    this.duration = this.frame;
  }
  async next() {
    if (this.previousScene) {
      await this.previousScene.next();
      if (this.currentScene.isFinished()) {
        this.previousScene = null;
      }
    }
    this.frame += this.speed;
    if (this.currentScene.isFinished()) {
      return true;
    }
    await this.currentScene.next();
    if (this.previousScene && this.currentScene.isAfterTransitionIn()) {
      this.previousScene = null;
    }
    if (this.currentScene.canTransitionOut()) {
      this.previousScene = this.currentScene;
      const nextScene = this.getNextScene(this.previousScene);
      if (nextScene) {
        this.currentScene = nextScene;
        await this.currentScene.reset(this.previousScene);
      }
      if (!nextScene || this.currentScene.isAfterTransitionIn()) {
        this.previousScene = null;
      }
    }
    return this.currentScene.isFinished();
  }
  findBestScene(frame) {
    let lastScene = this.scenes.current[0];
    for (const scene of this.scenes.current) {
      if (!scene.isCached() || scene.lastFrame > frame) {
        return scene;
      }
      lastScene = scene;
    }
    return lastScene;
  }
  getNextScene(scene) {
    const scenes = this.scenes.current;
    if (!scene) {
      return scenes[0];
    }
    const index = scenes.findIndex((s) => s === scene);
    if (index < 0) {
      return null;
    }
    return scenes[index + 1] ?? null;
  }
};

// lib/app/PlaybackStatus.js
var PlaybackStatus = class {
  constructor(playback) {
    this.playback = playback;
  }
  /**
   * Convert seconds to frames using the current framerate.
   *
   * @param seconds - The seconds to convert.
   */
  secondsToFrames(seconds) {
    return Math.ceil(seconds * this.playback.fps);
  }
  /**
   * Convert frames to seconds using the current framerate.
   *
   * @param frames - The frames to convert.
   */
  framesToSeconds(frames) {
    return frames / this.playback.fps;
  }
  get time() {
    return this.framesToSeconds(this.playback.frame);
  }
  get frame() {
    return this.playback.frame;
  }
  get speed() {
    return this.playback.speed;
  }
  get fps() {
    return this.playback.fps;
  }
  get state() {
    return this.playback.state;
  }
  /**
   * The time passed since the last frame in seconds.
   */
  get deltaTime() {
    return this.framesToSeconds(1) * this.speed;
  }
};

// lib/media/AudioManager.js
var AudioManager = class {
  get onDataChanged() {
    return this.data.subscribable;
  }
  constructor(logger) {
    this.logger = logger;
    this.data = new ValueDispatcher(null);
    this.context = new AudioContext();
    this.audioElement = new Audio();
    this.source = null;
    this.error = false;
    this.abortController = null;
    this.offset = 0;
    if (import.meta.hot) {
      import.meta.hot.on("motion-canvas:assets", ({ urls }) => {
        if (this.source && urls.includes(this.source)) {
          this.setSource(this.source);
        }
      });
    }
  }
  getTime() {
    return this.toAbsoluteTime(this.audioElement.currentTime);
  }
  setTime(value) {
    this.audioElement.currentTime = this.toRelativeTime(value);
  }
  setOffset(value) {
    this.offset = value;
  }
  setMuted(isMuted) {
    this.audioElement.muted = isMuted;
  }
  setVolume(volume) {
    this.audioElement.volume = volume;
  }
  setSource(src) {
    this.source = src;
    this.audioElement.src = src;
    this.abortController?.abort();
    this.abortController = new AbortController();
    this.loadData(this.abortController.signal).catch((e) => {
      if (e.name !== "AbortError") {
        this.logger.error(e);
      }
    });
  }
  isInRange(time) {
    return time >= this.offset && time < this.audioElement.duration;
  }
  toRelativeTime(time) {
    return Math.max(0, time - this.offset);
  }
  toAbsoluteTime(time) {
    return time + this.offset;
  }
  isReady() {
    return this.source && !this.error;
  }
  /**
   * Pause/resume the audio.
   *
   * @param isPaused - Whether the audio should be paused or resumed.
   *
   * @returns `true` if the audio successfully started playing.
   */
  async setPaused(isPaused) {
    if (this.source && this.audioElement.paused !== isPaused) {
      if (isPaused) {
        this.audioElement.pause();
      } else {
        try {
          await this.audioElement.play();
          this.error = false;
          return true;
        } catch (e) {
          if (!this.error) {
            useLogger().error(e);
          }
          this.error = true;
        }
      }
    }
    return false;
  }
  async loadData(signal) {
    this.data.current = null;
    if (!this.source) {
      return;
    }
    const response = await fetch(this.source, { signal });
    const rawBuffer = await response.arrayBuffer();
    if (signal.aborted)
      return;
    let audioBuffer;
    try {
      audioBuffer = await this.decodeAudioData(rawBuffer);
    } catch (e) {
      return;
    }
    if (signal.aborted)
      return;
    const sampleSize = 256;
    const samples = ~~(audioBuffer.length / sampleSize);
    const peaks = [];
    let absoluteMax = 0;
    for (let channelId = 0; channelId < audioBuffer.numberOfChannels; channelId++) {
      const channel = audioBuffer.getChannelData(channelId);
      for (let i = 0; i < samples; i++) {
        const start = ~~(i * sampleSize);
        const end = ~~(start + sampleSize);
        let min = channel[start];
        let max = min;
        for (let j = start; j < end; j++) {
          const value = channel[j];
          if (value > max) {
            max = value;
          }
          if (value < min) {
            min = value;
          }
        }
        if (channelId === 0 || max > peaks[i * 2]) {
          peaks[i * 2] = max;
        }
        if (channelId === 0 || min < peaks[i * 2 + 1]) {
          peaks[i * 2 + 1] = min;
        }
        if (max > absoluteMax) {
          absoluteMax = max;
        }
        if (Math.abs(min) > absoluteMax) {
          absoluteMax = Math.abs(min);
        }
      }
    }
    this.data.current = {
      peaks,
      absoluteMax,
      length: samples,
      sampleRate: audioBuffer.sampleRate / sampleSize * 2
    };
  }
  decodeAudioData(buffer) {
    return new Promise((resolve, reject) => this.context.decodeAudioData(buffer, resolve, reject).catch(reject));
  }
};

// lib/media/loadImage.js
var Canvas;
var Context;
function loadImage(source) {
  const image = new Image();
  image.src = source;
  return new Promise((resolve, reject) => {
    if (image.complete) {
      resolve(image);
    } else {
      image.onload = () => resolve(image);
      image.onerror = reject;
    }
  });
}
function loadAnimation(sources) {
  return Promise.all(sources.map(loadImage));
}
function getImageData(image) {
  Canvas ?? (Canvas = document.createElement("canvas"));
  Context ?? (Context = getContext({ willReadFrequently: true }, Canvas));
  Canvas.width = image.width;
  Canvas.height = image.height;
  Context.clearRect(0, 0, image.width, image.height);
  Context.drawImage(image, 0, 0);
  return Context.getImageData(0, 0, image.width, image.height);
}

// lib/scenes/timeEvents/EditableTimeEvents.js
var EditableTimeEvents = class {
  get onChanged() {
    return this.events.subscribable;
  }
  constructor(scene) {
    this.scene = scene;
    this.events = new ValueDispatcher([]);
    this.registeredEvents = /* @__PURE__ */ new Map();
    this.lookup = /* @__PURE__ */ new Map();
    this.collisionLookup = /* @__PURE__ */ new Set();
    this.previousReference = [];
    this.didEventsChange = false;
    this.preserveTiming = true;
    this.handleReload = () => {
      this.registeredEvents.clear();
      this.collisionLookup.clear();
    };
    this.handleRecalculated = () => {
      this.preserveTiming = true;
      this.events.current = [...this.registeredEvents.values()];
      if (this.didEventsChange || (this.previousReference?.length ?? 0) !== this.events.current.length) {
        this.didEventsChange = false;
        this.previousReference = [...this.registeredEvents.values()].map((event) => ({
          name: event.name,
          targetTime: event.targetTime
        }));
        this.scene.meta.timeEvents.set(this.previousReference);
      }
    };
    this.handleReset = () => {
      this.collisionLookup.clear();
    };
    this.handleMetaChanged = (data) => {
      if (data === this.previousReference)
        return;
      this.previousReference = data;
      this.load(data);
      this.scene.reload();
    };
    this.previousReference = scene.meta.timeEvents.get();
    this.load(this.previousReference);
    scene.onReloaded.subscribe(this.handleReload);
    scene.onRecalculated.subscribe(this.handleRecalculated);
    scene.onReset.subscribe(this.handleReset);
    scene.meta.timeEvents.onChanged.subscribe(this.handleMetaChanged, false);
  }
  set(name, offset, preserve = true) {
    let event = this.lookup.get(name);
    if (!event || event.offset === offset) {
      return;
    }
    this.preserveTiming = preserve;
    event = {
      ...event,
      targetTime: event.initialTime + offset,
      offset
    };
    this.lookup.set(name, event);
    this.registeredEvents.set(name, event);
    this.events.current = [...this.registeredEvents.values()];
    this.didEventsChange = true;
    this.scene.reload();
  }
  register(name, initialTime) {
    if (this.collisionLookup.has(name)) {
      this.scene.logger.error({
        message: `name "${name}" has already been used for another event name.`,
        stack: new Error().stack
      });
      return 0;
    }
    this.collisionLookup.add(name);
    let event = this.lookup.get(name);
    if (!event) {
      this.didEventsChange = true;
      event = {
        name,
        initialTime,
        targetTime: initialTime,
        offset: 0,
        stack: new Error().stack
      };
      this.lookup.set(name, event);
    } else {
      let changed = false;
      const newEvent = { ...event };
      const stack = new Error().stack;
      if (newEvent.stack !== stack) {
        newEvent.stack = stack;
        changed = true;
      }
      if (newEvent.initialTime !== initialTime) {
        newEvent.initialTime = initialTime;
        changed = true;
      }
      const offset = Math.max(0, newEvent.targetTime - newEvent.initialTime);
      if (this.preserveTiming && newEvent.offset !== offset) {
        newEvent.offset = offset;
        changed = true;
      }
      const target = newEvent.initialTime + newEvent.offset;
      if (!this.preserveTiming && newEvent.targetTime !== target) {
        this.didEventsChange = true;
        newEvent.targetTime = target;
        changed = true;
      }
      if (changed) {
        event = newEvent;
        this.lookup.set(name, event);
      }
    }
    this.registeredEvents.set(name, event);
    return event.offset;
  }
  load(events) {
    for (const event of events) {
      if (typeof event.name !== "string") {
        continue;
      }
      const previous = this.lookup.get(event.name) ?? {
        name: event.name,
        initialTime: 0,
        offset: 0
      };
      this.lookup.set(event.name, {
        ...previous,
        targetTime: event.targetTime ?? 0
      });
    }
  }
};

// lib/scenes/timeEvents/ReadOnlyTimeEvents.js
var ReadOnlyTimeEvents = class {
  get onChanged() {
    return this.events.subscribable;
  }
  constructor(scene) {
    this.scene = scene;
    this.events = new ValueDispatcher([]);
    this.lookup = /* @__PURE__ */ new Map();
    this.handleReload = () => {
      this.lookup.clear();
    };
    scene.onReloaded.subscribe(this.handleReload);
  }
  set() {
  }
  register(name, initialTime) {
    let duration = this.lookup.get(name);
    if (duration === void 0) {
      const event = this.scene.meta.timeEvents.get().find((event2) => event2.name === name);
      duration = event ? event.targetTime - initialTime : 0;
      this.lookup.set(name, duration);
    }
    return duration;
  }
};

// lib/app/SharedWebGLContext.js
var SOURCE_URL_REGEX = /^\/\/# sourceURL=(.*)$/gm;
var INFO_LOG_REGEX = /ERROR: \d+:(\d+): (.*)/g;
var INFO_TOKEN_REGEX = /^'([^']+)'/;
var SharedWebGLContext = class {
  constructor(logger) {
    this.logger = logger;
    this.gl = null;
    this.currentOwner = null;
    this.programLookup = /* @__PURE__ */ new Map();
  }
  borrow(owner) {
    if (this.currentOwner === owner) {
      return this.gl;
    }
    this.currentOwner?.teardown(this.gl);
    this.currentOwner = owner;
    this.currentOwner.setup(this.getGL());
    return this.gl;
  }
  /**
   * Dispose the WebGL context to free up resources.
   */
  dispose() {
    if (!this.gl) {
      return;
    }
    this.currentOwner?.teardown(this.gl);
    this.currentOwner = null;
    this.gl.useProgram(null);
    for (const { program, fragment, vertex } of this.programLookup.values()) {
      this.gl.deleteProgram(program);
      this.gl.deleteShader(fragment);
      this.gl.deleteShader(vertex);
    }
    this.programLookup.clear();
    this.gl.getExtension("WEBGL_lose_context")?.loseContext();
    this.gl.canvas.remove();
    this.gl = null;
  }
  getProgram(fragment, vertex) {
    const key = `${fragment}#${vertex}`;
    if (this.programLookup.has(key)) {
      return this.programLookup.get(key).program;
    }
    const gl = this.getGL();
    const fragmentShader = this.getShader(gl.FRAGMENT_SHADER, fragment);
    const vertexShader = this.getShader(gl.VERTEX_SHADER, vertex);
    if (!fragmentShader || !vertexShader) {
      return null;
    }
    const program = gl.createProgram();
    gl.attachShader(program, fragmentShader);
    gl.attachShader(program, vertexShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      this.logger.error({
        message: "Failed to initialize the shader program.",
        remarks: gl.getProgramInfoLog(program) ?? void 0,
        stack: new Error().stack
      });
      gl.deleteProgram(program);
      return null;
    }
    this.programLookup.set(key, {
      program,
      fragment: fragmentShader,
      vertex: vertexShader
    });
    return program;
  }
  getShader(type, source) {
    const gl = this.getGL();
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const log = gl.getShaderInfoLog(shader);
      logGlslError(this.logger, log, source);
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }
  getGL() {
    if (this.gl) {
      return this.gl;
    }
    this.gl = document.createElement("canvas").getContext("webgl2", {
      depth: false,
      premultipliedAlpha: false,
      stencil: false,
      powerPreference: "high-performance"
    });
    if (!this.gl) {
      throw new Error("Failed to initialize WebGL.");
    }
    return this.gl;
  }
};
function logGlslError(logger, log, source) {
  let sourceUrl = null;
  SOURCE_URL_REGEX.lastIndex = 0;
  const sourceMatch = SOURCE_URL_REGEX.exec(source);
  if (sourceMatch) {
    const url = new URL(sourceMatch[1], window.location.origin);
    url.searchParams.set("t", Date.now().toString());
    sourceUrl = url.toString();
  }
  if (!log) {
    logger.error({
      message: `Unknown shader compilation error.`,
      stack: fakeStackTrace(sourceUrl, 1, 0)
    });
    return null;
  }
  let logged = false;
  let result;
  while (result = INFO_LOG_REGEX.exec(log)) {
    const [, line, message] = result;
    let column = 0;
    const match = message.match(INFO_TOKEN_REGEX);
    if (match) {
      const tokenLine = source.split("\n")[parseInt(line) - 1];
      const index = tokenLine.indexOf(match[1]);
      if (index !== -1) {
        column = index;
      }
      if (match[1] === "include") {
        const line2 = source.split("\n").find((line3) => line3.startsWith("#include"));
        if (line2) {
          logged = true;
          logger.error({
            message: `Shader compilation error: ${message}`,
            remarks: `<p>The <code>#include</code> directive requires the use of a preprocessor.</p>
<p>Make sure to import the shader from a file:</p>
<pre class=""><code class="language-ts"><span class="hljs-keyword">import</span> shader <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./shader.glsl&#x27;</span>;</code></pre><p>Do <strong>NOT</strong> use the raw loader:</p>
<pre class=""><code class="language-ts"><span class="hljs-keyword">import</span> shader <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./shader.glsl?raw&#x27;</span>;</code></pre><p>Do <strong>NOT</strong> use <code>#include</code> in an inline string:</p>
<pre class=""><code class="language-ts"><span class="hljs-keyword">const</span> shader = <span class="hljs-string">\`\\
#include &quot;example.glsl&quot;
\`</span>;</code></pre><p><a href='https://motioncanvas.io/docs/shaders' target='_blank'>Learn more</a> about working with shaders.</p>
`
          });
          break;
        }
      }
    }
    logged = true;
    logger.error({
      message: `Shader compilation error: ${message}`,
      stack: fakeStackTrace(sourceUrl, line, column)
    });
  }
  if (!logged) {
    logger.error({
      message: `Shader compilation error: ${log}`,
      stack: fakeStackTrace(sourceUrl, 1, 0)
    });
  }
}
function fakeStackTrace(file, line, column) {
  if (!file) {
    return void 0;
  }
  return navigator.userAgent.toLowerCase().includes("chrome") ? `  at (${file}:${line}:${column})` : `@${file}:${line}:${column}`;
}

// lib/app/Player.js
var MAX_AUDIO_DESYNC = 1 / 50;
var Player = class {
  /**
   * Triggered during each iteration of the update loop when the frame is ready
   * to be rendered.
   *
   * @remarks
   * Player does not perform any rendering on its own. For the animation to be
   * visible, another class must subscribe to this event and perform the
   * rendering itself. {@link Stage} can be used to display the animation.
   *
   * @eventProperty
   */
  get onRender() {
    return this.render.subscribable;
  }
  get onStateChanged() {
    return this.playerState.subscribable;
  }
  get onFrameChanged() {
    return this.frame.subscribable;
  }
  get onDurationChanged() {
    return this.duration.subscribable;
  }
  /**
   * Triggered right after recalculation finishes.
   *
   * @remarks
   * Can be used to provide visual feedback.
   *
   * @eventProperty
   */
  get onRecalculated() {
    return this.recalculated.subscribable;
  }
  get startFrame() {
    return Math.min(this.playback.duration, this.status.secondsToFrames(this.startTime));
  }
  get endFrame() {
    return Math.min(this.playback.duration, this.status.secondsToFrames(this.endTime));
  }
  get finished() {
    return this.playback.finished || this.playback.frame >= this.endFrame;
  }
  constructor(project, settings = {}, initialState = {}, initialFrame = -1) {
    this.project = project;
    this.settings = settings;
    this.initialState = initialState;
    this.initialFrame = initialFrame;
    this.render = new AsyncEventDispatcher();
    this.frame = new ValueDispatcher(0);
    this.duration = new ValueDispatcher(0);
    this.recalculated = new EventDispatcher();
    this.lock = new Semaphore();
    this.startTime = 0;
    this.endTime = Infinity;
    this.requestId = null;
    this.renderTime = 0;
    this.requestedSeek = -1;
    this.requestedRender = false;
    this.requestedRecalculation = true;
    this.active = false;
    this.playerState = new ValueDispatcher({
      loop: true,
      muted: true,
      volume: 1,
      speed: 1,
      ...initialState,
      paused: true
    });
    this.sharedWebGLContext = new SharedWebGLContext(this.project.logger);
    this.requestedSeek = initialFrame;
    this.logger = this.project.logger;
    this.playback = new PlaybackManager();
    this.status = new PlaybackStatus(this.playback);
    this.audio = new AudioManager(this.logger);
    this.size = settings.size ?? new Vector2(1920, 1080);
    this.resolutionScale = settings.resolutionScale ?? 1;
    this.startTime = settings.range?.[0] ?? 0;
    this.endTime = settings.range?.[1] ?? Infinity;
    this.playback.fps = settings.fps ?? 60;
    this.audio.setOffset(settings.audioOffset ?? 0);
    if (project.audio) {
      this.audio.setSource(project.audio);
    }
    const scenes = [];
    for (const description of project.scenes) {
      const scene = new description.klass({
        ...description,
        playback: this.status,
        logger: this.project.logger,
        size: this.size,
        resolutionScale: this.resolutionScale,
        timeEventsClass: EditableTimeEvents,
        sharedWebGLContext: this.sharedWebGLContext,
        experimentalFeatures: project.experimentalFeatures
      });
      description.onReplaced?.subscribe((description2) => {
        scene.reload(description2);
      }, false);
      scene.onReloaded.subscribe(() => this.requestRecalculation());
      scene.variables.updateSignals(project.variables ?? {});
      scenes.push(scene);
    }
    this.playback.setup(scenes);
    this.activate();
  }
  async configure(settings) {
    await this.lock.acquire();
    let frame = this.playback.frame;
    let recalculate = false;
    this.startTime = settings.range[0];
    this.endTime = settings.range[1];
    const newFps = Math.max(1, settings.fps);
    if (this.playback.fps !== newFps) {
      const ratio = newFps / this.playback.fps;
      this.playback.fps = newFps;
      frame = Math.floor(frame * ratio);
      recalculate = true;
    }
    if (!settings.size.exactlyEquals(this.size) || settings.resolutionScale !== this.resolutionScale) {
      this.size = settings.size;
      this.resolutionScale = settings.resolutionScale;
      this.playback.reload({
        size: this.size,
        resolutionScale: this.resolutionScale
      });
    }
    if (settings.audioOffset !== void 0) {
      this.audio.setOffset(settings.audioOffset);
    }
    this.lock.release();
    if (recalculate) {
      this.playback.reload();
      this.frame.current = frame;
      this.requestRecalculation();
      this.requestedSeek = frame;
    }
  }
  /**
   * Whether the given frame is inside the animation range.
   *
   * @param frame - The frame to check.
   */
  isInRange(frame) {
    return frame >= 0 && frame <= this.playback.duration;
  }
  /**
   * Whether the given frame is inside the user-defined range.
   *
   * @param frame - The frame to check.
   */
  isInUserRange(frame) {
    return frame >= this.startFrame && frame <= this.endFrame;
  }
  requestSeek(value) {
    this.requestedSeek = this.clampRange(value);
  }
  requestPreviousFrame() {
    this.requestedSeek = this.frame.current - this.playback.speed;
  }
  requestNextFrame() {
    this.requestedSeek = this.frame.current + this.playback.speed;
  }
  requestReset() {
    this.requestedSeek = 0;
  }
  requestRender() {
    this.requestedRender = true;
  }
  toggleLoop(value = !this.playerState.current.loop) {
    if (value !== this.playerState.current.loop) {
      this.playerState.current = {
        ...this.playerState.current,
        loop: value
      };
    }
  }
  togglePlayback(value = this.playerState.current.paused) {
    if (value === this.playerState.current.paused) {
      this.playerState.current = {
        ...this.playerState.current,
        paused: !value
      };
      if (value && !this.playerState.current.loop && this.playback.frame === this.playback.duration) {
        this.requestReset();
      }
    }
  }
  toggleAudio(value = this.playerState.current.muted) {
    if (value === this.playerState.current.muted) {
      this.playerState.current = {
        ...this.playerState.current,
        muted: !value
      };
    }
  }
  setAudioVolume(value) {
    const clampedValue = clamp(0, 1, value);
    if (clampedValue !== this.playerState.current.volume) {
      this.playerState.current = {
        ...this.playerState.current,
        volume: clampedValue
      };
    }
  }
  addAudioVolume(value) {
    this.setAudioVolume(this.playerState.current.volume + value);
  }
  setSpeed(value) {
    if (value !== this.playerState.current.speed) {
      this.playback.speed = value;
      this.playback.reload();
      this.playerState.current = {
        ...this.playerState.current,
        speed: value
      };
      this.requestRecalculation();
    }
  }
  setVariables(variables) {
    for (const scene of this.playback.onScenesRecalculated.current) {
      scene.variables.updateSignals(variables);
    }
  }
  /**
   * Activate the player.
   *
   * @remarks
   * A player needs to be active in order for the update loop to run. Each
   * player is active by default.
   */
  activate() {
    this.active = true;
    this.request();
  }
  /**
   * Deactivate the player.
   *
   * @remarks
   * Deactivating the player prevents its update loop from running. This should
   * be done before disposing the player, to prevent it from running in the
   * background.
   *
   * Just pausing the player does not stop the loop.
   */
  deactivate() {
    this.active = false;
    this.sharedWebGLContext.dispose();
    if (this.requestId !== null) {
      cancelAnimationFrame(this.requestId);
      this.requestId = null;
    }
  }
  requestRecalculation() {
    this.requestedRecalculation = true;
    this.request();
  }
  async prepare() {
    const state = {
      ...this.playerState.current,
      seek: this.requestedSeek,
      render: this.requestedRender
    };
    this.requestedSeek = -1;
    this.requestedRender = false;
    if (this.requestedRecalculation) {
      if (state.seek < 0) {
        state.seek = this.playback.frame;
      }
      try {
        await this.playback.recalculate();
        this.duration.current = this.playback.frame;
        this.recalculated.dispatch();
      } catch (e) {
        this.requestSeek(state.seek);
        throw e;
      } finally {
        this.requestedRecalculation = false;
      }
    }
    if (!state.loop && this.finished && !state.paused && state.seek < 0 || this.endFrame === this.startFrame) {
      this.togglePlayback(false);
      state.paused = true;
      state.seek = this.endFrame === this.startFrame ? state.seek : this.startFrame;
    }
    if (state.loop && (state.seek > this.endFrame || this.finished && !state.paused) && this.startFrame !== this.endTime) {
      state.seek = this.startFrame;
    }
    const audioPaused = state.paused || this.finished || !this.audio.isInRange(this.status.time);
    if (await this.audio.setPaused(audioPaused)) {
      this.syncAudio(-3);
    }
    this.audio.setMuted(state.muted);
    this.audio.setVolume(state.volume);
    return state;
  }
  async run() {
    const state = await this.prepare();
    const previousState = this.playback.state;
    this.playback.state = state.paused ? PlaybackState.Paused : PlaybackState.Playing;
    if (state.seek >= 0 || !this.isInUserRange(this.status.frame)) {
      const seekFrame = state.seek < 0 ? this.status.frame : state.seek;
      const clampedFrame = this.clampRange(seekFrame);
      this.logger.profile("seek time");
      await this.playback.seek(clampedFrame);
      this.logger.profile("seek time");
      this.syncAudio(-3);
    } else if (state.paused || state.speed === 1 && this.audio.isReady() && this.audio.isInRange(this.status.time) && this.audio.getTime() < this.status.time) {
      if (state.render || state.paused && previousState !== PlaybackState.Paused) {
        await this.render.dispatch();
      }
      if (!state.paused && this.status.time > this.audio.getTime() + MAX_AUDIO_DESYNC) {
        this.syncAudio();
      }
      this.request();
      return;
    } else if (this.audio.isReady() && state.speed === 1 && this.audio.isInRange(this.status.time) && this.status.framesToSeconds(this.playback.frame + 1) < this.audio.getTime() - MAX_AUDIO_DESYNC) {
      const seekFrame = this.status.secondsToFrames(this.audio.getTime());
      await this.playback.seek(seekFrame);
    } else if (this.status.frame < this.endFrame) {
      await this.playback.progress();
      if (state.speed !== 1) {
        this.syncAudio();
      }
    }
    if (!state.paused && this.playback.currentScene.slides.isWaiting()) {
      this.togglePlayback(false);
      state.paused = true;
    }
    await this.render.dispatch();
    this.frame.current = this.playback.frame;
    this.request();
  }
  request() {
    if (!this.active)
      return;
    this.requestId ?? (this.requestId = requestAnimationFrame(async (time) => {
      this.requestId = null;
      if (time - this.renderTime >= 1e3 / (this.status.fps + 5)) {
        this.renderTime = time;
        await this.lock.acquire();
        try {
          await this.run();
        } catch (e) {
          this.logger.error(e);
        }
        this.lock.release();
      } else {
        this.request();
      }
    }));
  }
  clampRange(frame) {
    return clamp(this.startFrame, this.endFrame, frame);
  }
  syncAudio(frameOffset = 0) {
    this.audio.setTime(this.status.framesToSeconds(this.playback.frame + frameOffset));
  }
};

// lib/app/Stage.js
var Stage = class {
  get canvasSize() {
    return this.size.scale(this.resolutionScale);
  }
  constructor() {
    this.background = null;
    this.resolutionScale = 1;
    this.colorSpace = "srgb";
    this.size = Vector2.zero;
    this.finalBuffer = document.createElement("canvas");
    this.currentBuffer = document.createElement("canvas");
    this.previousBuffer = document.createElement("canvas");
    const colorSpace = this.colorSpace;
    this.context = getContext({ colorSpace }, this.finalBuffer);
    this.currentContext = getContext({ colorSpace }, this.currentBuffer);
    this.previousContext = getContext({ colorSpace }, this.previousBuffer);
  }
  configure({ colorSpace = this.colorSpace, size = this.size, resolutionScale = this.resolutionScale, background = this.background }) {
    if (colorSpace !== this.colorSpace) {
      this.colorSpace = colorSpace;
      this.context = getContext({ colorSpace }, this.finalBuffer);
      this.currentContext = getContext({ colorSpace }, this.currentBuffer);
      this.previousContext = getContext({ colorSpace }, this.previousBuffer);
    }
    if (!size.exactlyEquals(this.size) || resolutionScale !== this.resolutionScale) {
      this.resolutionScale = resolutionScale;
      this.size = size;
      this.resizeCanvas(this.context);
      this.resizeCanvas(this.currentContext);
      this.resizeCanvas(this.previousContext);
    }
    this.background = typeof background === "string" ? background : background?.serialize() ?? null;
  }
  async render(currentScene, previousScene) {
    const previousOnTop = previousScene ? unwrap(currentScene.previousOnTop) : false;
    if (previousScene) {
      await previousScene.render(this.previousContext);
    }
    await currentScene.render(this.currentContext);
    const size = this.canvasSize;
    this.context.clearRect(0, 0, size.width, size.height);
    if (this.background) {
      this.context.save();
      this.context.fillStyle = this.background;
      this.context.fillRect(0, 0, size.width, size.height);
      this.context.restore();
    }
    if (previousScene && !previousOnTop) {
      this.context.drawImage(this.previousBuffer, 0, 0);
    }
    this.context.drawImage(this.currentBuffer, 0, 0);
    if (previousOnTop) {
      this.context.drawImage(this.previousBuffer, 0, 0);
    }
  }
  resizeCanvas(context) {
    const size = this.canvasSize;
    context.canvas.width = size.width;
    context.canvas.height = size.height;
  }
};

// lib/app/Presenter.js
var PresenterState;
(function(PresenterState2) {
  PresenterState2[PresenterState2["Initial"] = 0] = "Initial";
  PresenterState2[PresenterState2["Working"] = 1] = "Working";
  PresenterState2[PresenterState2["Aborting"] = 2] = "Aborting";
})(PresenterState || (PresenterState = {}));
var NextSlide = Symbol("@motion-canvas/core/app/NextSlide");
var PreviousSlide = Symbol("@motion-canvas/core/app/PreviousSlide");
var Presenter = class {
  get onStateChanged() {
    return this.state.subscribable;
  }
  get onInfoChanged() {
    return this.info.subscribable;
  }
  get onSlidesChanged() {
    return this.slides.subscribable;
  }
  constructor(project) {
    this.project = project;
    this.state = new ValueDispatcher(PresenterState.Initial);
    this.info = new ValueDispatcher({
      currentSlideId: null,
      nextSlideId: null,
      hasNext: false,
      hasPrevious: false,
      isWaiting: false,
      index: null,
      count: 0
    });
    this.slides = new ValueDispatcher([]);
    this.stage = new Stage();
    this.lock = new Semaphore();
    this.abortController = null;
    this.renderTime = 0;
    this.requestId = null;
    this.requestedResume = false;
    this.requestedSlide = null;
    this.logger = project.logger;
    this.playback = new PlaybackManager();
    this.status = new PlaybackStatus(this.playback);
    this.sharedWebGLContext = new SharedWebGLContext(this.logger);
    const scenes = [];
    for (const description of project.scenes) {
      const scene = new description.klass({
        ...description,
        meta: description.meta.clone(),
        logger: this.logger,
        playback: this.status,
        size: new Vector2(1920, 1080),
        resolutionScale: 1,
        timeEventsClass: ReadOnlyTimeEvents,
        sharedWebGLContext: this.sharedWebGLContext,
        experimentalFeatures: project.experimentalFeatures
      });
      scenes.push(scene);
    }
    this.playback.setup(scenes);
  }
  /**
   * Present the animation.
   *
   * @param settings - The presentation settings.
   */
  async present(settings) {
    if (this.state.current !== PresenterState.Initial)
      return;
    await this.lock.acquire();
    this.state.current = PresenterState.Working;
    try {
      this.abortController = new AbortController();
      await this.run(settings, this.abortController.signal);
    } catch (e) {
      this.project.logger.error(e);
    }
    this.sharedWebGLContext.dispose();
    this.state.current = PresenterState.Initial;
    this.lock.release();
  }
  /**
   * Abort the ongoing presentation process.
   */
  abort() {
    if (this.state.current === PresenterState.Initial)
      return;
    this.abortController?.abort();
    this.state.current = PresenterState.Aborting;
  }
  /**
   * Resume the presentation if waiting for the next slide.
   */
  resume() {
    this.requestedResume = true;
  }
  requestFirstSlide() {
    const first = this.playback.slides[0];
    if (first) {
      this.requestedSlide = first.id;
    }
  }
  requestLastSlide() {
    const last = this.playback.slides.at(-1);
    if (last) {
      this.requestedSlide = last.id;
    }
  }
  requestPreviousSlide() {
    this.requestedSlide = PreviousSlide;
  }
  requestNextSlide() {
    this.requestedSlide = NextSlide;
  }
  requestSlide(id) {
    this.requestedSlide = id;
  }
  async run(settings, signal) {
    this.stage.configure(settings);
    this.playback.fps = settings.fps;
    await this.reloadScenes(settings);
    if (signal.aborted)
      return;
    this.playback.state = PlaybackState.Playing;
    await this.playback.recalculate();
    if (signal.aborted)
      return;
    this.slides.current = this.playback.slides;
    this.playback.state = PlaybackState.Presenting;
    await this.playback.reset();
    if (signal.aborted)
      return;
    if (settings.slide) {
      await this.playback.goTo(settings.slide);
      if (signal.aborted)
        return;
    }
    await new Promise((resolve) => {
      signal.addEventListener("abort", resolve);
      this.request();
    });
  }
  async reloadScenes(settings) {
    for (let i = 0; i < this.project.scenes.length; i++) {
      const description = this.project.scenes[i];
      const scene = this.playback.onScenesRecalculated.current[i];
      scene.reload({
        config: description.onReplaced.current.config,
        size: settings.size,
        resolutionScale: settings.resolutionScale
      });
      scene.meta.set(description.meta.get());
      scene.variables.updateSignals(this.project.variables ?? {});
    }
  }
  async loop() {
    const slide = this.requestedSlide;
    const resume = this.requestedResume;
    this.requestedResume = false;
    this.requestedSlide = null;
    if (resume) {
      this.playback.currentScene.slides.resume();
    }
    if (slide !== null) {
      this.logger.profile("slide time");
      this.playback.state = PlaybackState.Playing;
      if (slide === PreviousSlide) {
        await this.playback.goBack();
      } else if (slide === NextSlide) {
        await this.playback.goForward();
      } else {
        await this.playback.goTo(slide);
      }
      this.logger.profile("slide time");
    } else if (!this.playback.finished) {
      this.playback.state = PlaybackState.Presenting;
      await this.playback.progress();
    }
    await this.stage.render(this.playback.currentScene, this.playback.previousScene);
    if (!this.abortController?.signal.aborted) {
      this.updateInfo();
      this.request();
    }
  }
  request() {
    if (this.abortController?.signal.aborted) {
      return;
    }
    this.requestId ?? (this.requestId = requestAnimationFrame(async (time) => {
      this.requestId = null;
      if (time - this.renderTime >= 1e3 / (this.status.fps + 5)) {
        this.renderTime = time;
        try {
          await this.loop();
        } catch (e) {
          this.logger.error(e);
          this.abortController?.abort();
        }
      } else {
        this.request();
      }
    }));
  }
  updateInfo() {
    const slides = this.playback.currentScene.slides;
    const currentSlide = slides.getCurrent() ?? null;
    const index = this.playback.slides.indexOf(currentSlide);
    const info = {
      currentSlideId: currentSlide?.id ?? null,
      nextSlideId: this.playback.slides[index + 1]?.id ?? null,
      hasNext: index !== null && index < this.playback.slides.length - 1,
      hasPrevious: index !== null && index > 0,
      isWaiting: slides.isWaiting(),
      count: this.playback.slides.length,
      index
    };
    for (const [key, value] of Object.entries(info)) {
      if (this.info.current[key] !== value) {
        this.info.current = info;
        break;
      }
    }
  }
};

// lib/app/Project.js
function makeProject(settings) {
  return settings;
}

// lib/app/ProjectMetadata.js
function createProjectMetadata(project) {
  const meta = {
    version: new MetaField("version", 1),
    shared: new ObjectMetaField("General", {
      background: new ColorMetaField("background", null),
      range: new RangeMetaField("range", [0, Infinity]),
      size: new Vector2MetaField("resolution", new Vector2(1920, 1080)),
      audioOffset: new NumberMetaField("audio offset", 0)
    }),
    preview: new ObjectMetaField("Preview", {
      fps: new NumberMetaField("frame rate", 30).setPresets(FrameRates).setRange(1),
      resolutionScale: new EnumMetaField("scale", Scales, 1)
    }),
    rendering: new ObjectMetaField("Rendering", {
      fps: new NumberMetaField("frame rate", 60).setPresets(FrameRates).setRange(1),
      resolutionScale: new EnumMetaField("scale", Scales, 1),
      colorSpace: new EnumMetaField("color space", ColorSpaces),
      exporter: new ExporterMetaField("exporter", project)
    })
  };
  meta.shared.audioOffset.disable(!project.audio);
  return meta;
}
var ProjectMetadata = class extends ObjectMetaField {
  constructor(project) {
    super("project", createProjectMetadata(project));
  }
  getFullPreviewSettings() {
    return {
      ...this.shared.get(),
      ...this.preview.get()
    };
  }
  getFullRenderingSettings() {
    return {
      ...this.shared.get(),
      ...this.rendering.get()
    };
  }
};

// lib/app/TimeEstimator.js
var TimeEstimator = class {
  constructor() {
    this.completion = new ValueDispatcher(0);
    this.startTimestamp = 0;
    this.lastUpdateTimestamp = 0;
    this.nextCompletion = 0;
  }
  get onCompletionChanged() {
    return this.completion.subscribable;
  }
  /**
   * Get the current time estimate.
   *
   * @param timestamp - The timestamp to calculate the estimate against.
   *                    Defaults to `performance.now()`.
   */
  estimate(timestamp = performance.now()) {
    const elapsed = timestamp - this.startTimestamp;
    const completion = this.completion.current;
    let eta = Infinity;
    if (completion >= 1) {
      eta = 0;
    } else if (completion > 0) {
      const lastUpdateDuration = this.lastUpdateTimestamp - this.startTimestamp;
      eta = lastUpdateDuration / completion - elapsed;
      eta = Math.max(0, eta);
    } else if (this.nextCompletion > 0) {
      eta = elapsed / this.nextCompletion - elapsed;
    }
    return { completion, elapsed, eta };
  }
  /**
   * Update the completion percentage.
   *
   * @param completion - The completion percentage ranging from `0` to `1`.
   * @param timestamp - A timestamp at which the process was updated.
   *                    Defaults to `performance.now()`.
   */
  update(completion, timestamp = performance.now()) {
    this.completion.current = clamp(0, 1, completion);
    this.lastUpdateTimestamp = timestamp;
  }
  /**
   * Reset the estimator.
   *
   * @param nextCompletion - If known, the completion percentage of the next
   *                         update.
   * @param timestamp - A timestamp at which the process started.
   *                    Defaults to `performance.now()`.
   */
  reset(nextCompletion = 0, timestamp = performance.now()) {
    this.startTimestamp = timestamp;
    this.lastUpdateTimestamp = timestamp;
    this.completion.current = 0;
    this.nextCompletion = nextCompletion;
  }
};

// lib/app/Renderer.js
var RendererState;
(function(RendererState2) {
  RendererState2[RendererState2["Initial"] = 0] = "Initial";
  RendererState2[RendererState2["Working"] = 1] = "Working";
  RendererState2[RendererState2["Aborting"] = 2] = "Aborting";
})(RendererState || (RendererState = {}));
var RendererResult;
(function(RendererResult2) {
  RendererResult2[RendererResult2["Success"] = 0] = "Success";
  RendererResult2[RendererResult2["Error"] = 1] = "Error";
  RendererResult2[RendererResult2["Aborted"] = 2] = "Aborted";
})(RendererResult || (RendererResult = {}));
var Renderer = class {
  get onStateChanged() {
    return this.state.subscribable;
  }
  get onFinished() {
    return this.finished.subscribable;
  }
  get onFrameChanged() {
    return this.frame.subscribable;
  }
  constructor(project) {
    this.project = project;
    this.state = new ValueDispatcher(RendererState.Initial);
    this.finished = new EventDispatcher();
    this.frame = new ValueDispatcher(0);
    this.stage = new Stage();
    this.estimator = new TimeEstimator();
    this.lock = new Semaphore();
    this.exporter = null;
    this.abortController = null;
    this.playback = new PlaybackManager();
    this.status = new PlaybackStatus(this.playback);
    this.sharedWebGLContext = new SharedWebGLContext(this.project.logger);
    const scenes = [];
    for (const description of project.scenes) {
      const scene = new description.klass({
        ...description,
        meta: description.meta.clone(),
        logger: this.project.logger,
        playback: this.status,
        size: new Vector2(1920, 1080),
        resolutionScale: 1,
        timeEventsClass: ReadOnlyTimeEvents,
        sharedWebGLContext: this.sharedWebGLContext,
        experimentalFeatures: project.experimentalFeatures
      });
      scenes.push(scene);
    }
    this.playback.setup(scenes);
  }
  /**
   * Render the animation using the provided settings.
   *
   * @param settings - The rendering settings.
   */
  async render(settings) {
    if (this.state.current !== RendererState.Initial)
      return;
    await this.lock.acquire();
    this.estimator.reset();
    this.state.current = RendererState.Working;
    let result;
    try {
      this.abortController = new AbortController();
      result = await this.run(settings, this.abortController.signal);
    } catch (e) {
      this.project.logger.error(e);
      result = RendererResult.Error;
      if (this.exporter) {
        try {
          await this.exporter.stop?.(result);
        } catch (_) {
        }
        this.exporter = null;
      }
    }
    this.estimator.update(1);
    this.state.current = RendererState.Initial;
    this.finished.dispatch(result);
    this.sharedWebGLContext.dispose();
    this.lock.release();
  }
  /**
   * Abort the ongoing render process.
   */
  abort() {
    if (this.state.current !== RendererState.Working)
      return;
    this.abortController?.abort();
    this.state.current = RendererState.Aborting;
  }
  /**
   * Export an individual frame.
   *
   * @remarks
   * This method always uses the default `ImageExporter`.
   *
   * @param settings - The rendering settings.
   * @param time - The timestamp to export.
   */
  async renderFrame(settings, time) {
    await this.lock.acquire();
    try {
      const frame = this.status.secondsToFrames(time);
      this.stage.configure(settings);
      this.playback.fps = settings.fps;
      this.playback.state = PlaybackState.Rendering;
      await this.reloadScenes(settings);
      await this.playback.reset();
      await this.playback.seek(frame);
      await this.stage.render(this.playback.currentScene, this.playback.previousScene);
      if (import.meta.hot) {
        import.meta.hot.send("motion-canvas:export", {
          frame,
          name: frame.toString().padStart(6, "0"),
          data: this.stage.finalBuffer.toDataURL("image/png"),
          mimeType: "image/png",
          subDirectories: ["still", this.project.name]
        });
      }
    } catch (e) {
      this.project.logger.error(e);
    }
    this.lock.release();
  }
  async run(settings, signal) {
    const exporterClass = this.project.meta.rendering.exporter.exporters.find((exporter) => exporter.id === settings.exporter.name);
    if (!exporterClass) {
      this.project.logger.error(`Could not find the "${settings.exporter.name}" exporter.`);
      return RendererResult.Error;
    }
    this.exporter = await exporterClass.create(this.project, settings);
    if (this.exporter.configuration) {
      settings = {
        ...settings,
        ...await this.exporter.configuration() ?? {}
      };
    }
    this.stage.configure(settings);
    this.playback.fps = settings.fps;
    this.playback.state = PlaybackState.Rendering;
    const from = this.status.secondsToFrames(settings.range[0]);
    this.frame.current = from;
    await this.reloadScenes(settings);
    await this.playback.recalculate();
    if (signal.aborted)
      return RendererResult.Aborted;
    await this.playback.reset();
    if (signal.aborted)
      return RendererResult.Aborted;
    const to = Math.min(this.playback.duration, this.status.secondsToFrames(settings.range[1]));
    await this.playback.seek(from);
    if (signal.aborted)
      return RendererResult.Aborted;
    await this.exporter.start?.();
    let lastRefresh = performance.now();
    let result = RendererResult.Success;
    try {
      this.estimator.reset(1 / (to - from));
      await this.exportFrame(signal);
      this.estimator.update(clampRemap(from, to, 0, 1, this.playback.frame));
      if (signal.aborted) {
        result = RendererResult.Aborted;
      } else {
        let finished = false;
        while (!finished) {
          await this.playback.progress();
          await this.exportFrame(signal);
          this.estimator.update(clampRemap(from, to, 0, 1, this.playback.frame));
          if (performance.now() - lastRefresh > 1 / 30) {
            lastRefresh = performance.now();
            await new Promise((resolve) => setTimeout(resolve, 0));
          }
          if (this.playback.finished || this.playback.frame >= to) {
            finished = true;
          }
          if (signal.aborted) {
            result = RendererResult.Aborted;
            finished = true;
          }
        }
      }
    } catch (e) {
      this.project.logger.error(e);
      result = RendererResult.Error;
    }
    await this.exporter.stop?.(result);
    this.exporter = null;
    return result;
  }
  async reloadScenes(settings) {
    for (let i = 0; i < this.project.scenes.length; i++) {
      const description = this.project.scenes[i];
      const scene = this.playback.onScenesRecalculated.current[i];
      scene.reload({
        config: description.onReplaced.current.config,
        size: settings.size,
        resolutionScale: settings.resolutionScale
      });
      scene.meta.set(description.meta.get());
      scene.variables.updateSignals(this.project.variables ?? {});
    }
  }
  async exportFrame(signal) {
    this.frame.current = this.playback.frame;
    await this.stage.render(this.playback.currentScene, this.playback.previousScene);
    const sceneFrame = this.playback.frame - this.playback.currentScene.firstFrame;
    await this.exporter.handleFrame(this.stage.finalBuffer, this.playback.frame, sceneFrame, this.playback.currentScene.name, signal);
  }
};

// lib/app/SettingsMetadata.js
function createSettingsMetadata() {
  return new ObjectMetaField("Application Settings", {
    version: new MetaField("version", 1),
    appearance: new ObjectMetaField("Appearance", {
      color: new ColorMetaField("accent color", new ExtendedColor("#33a6ff")).describe("The accent color for the user interface. (Leave empty to use the default color)"),
      font: new BoolMetaField("legacy font", false).describe("Use the 'JetBrains Mono' font for the user interface."),
      coordinates: new BoolMetaField("coordinates", true).describe("Display mouse coordinates within the preview window.")
    }),
    defaults: new ObjectMetaField("Defaults", {
      background: new ColorMetaField("background", null).describe("The default background color used in new projects."),
      size: new Vector2MetaField("resolution", new Vector2(1920, 1080)).describe("The default resolution used in new projects.")
    })
  });
}

// lib/plugin/makePlugin.js
function makePlugin(plugin) {
  return typeof plugin === "function" ? plugin : () => plugin;
}

// lib/plugin/DefaultPlugin.js
var DefaultPlugin_default = makePlugin({
  name: "@motion-canvas/core/default",
  exporters() {
    return [ImageExporter];
  }
});

// lib/app/bootstrap.js
function bootstrap(name, versions, plugins, config, metaFile, settingsFile, logger = config.logger ?? new Logger()) {
  const settings = createSettingsMetadata();
  settingsFile.attach(settings);
  const project = {
    name,
    ...config,
    plugins,
    versions,
    settings,
    logger
  };
  project.meta = new ProjectMetadata(project);
  project.meta.shared.set(settings.defaults.get());
  project.experimentalFeatures ?? (project.experimentalFeatures = false);
  metaFile.attach(project.meta);
  return project;
}
async function editorBootstrap(name, versions, plugins, config, metaFile, settingsFile) {
  const logger = config.logger ?? new Logger();
  const promises = [Promise.resolve(DefaultPlugin_default())];
  if (config.plugins) {
    for (const plugin of config.plugins) {
      promises.push(parsePlugin(plugin, logger));
    }
  }
  for (const scene of config.scenes) {
    if (scene.plugins) {
      for (const plugin of scene.plugins) {
        promises.push(parsePlugin(plugin, logger));
      }
    }
  }
  for (const plugin of plugins) {
    promises.push(parsePlugin(plugin, logger));
  }
  const pluginSet = /* @__PURE__ */ new Set();
  const resolvedPlugins = await Promise.all(promises);
  const includedPlugins = [];
  let resolvedConfig = config;
  for (const plugin of resolvedPlugins) {
    if (!plugin || pluginSet.has(plugin.name)) {
      continue;
    }
    pluginSet.add(plugin.name);
    includedPlugins.push(plugin);
    resolvedConfig = {
      ...resolvedConfig,
      ...plugin.settings?.(resolvedConfig) ?? {}
    };
  }
  const project = bootstrap(name, versions, includedPlugins, resolvedConfig, metaFile, settingsFile);
  includedPlugins.forEach((plugin) => plugin.project?.(project));
  return project;
}
async function parsePlugin(plugin, logger) {
  if (typeof plugin === "string") {
    try {
      let url = `/@id/${plugin}`;
      const version = new URL(import.meta.url).searchParams.get("v");
      if (version) {
        url += `?v=${version}`;
      }
      plugin = (await import(
        /* @vite-ignore */
        url
      )).default();
    } catch (e) {
      console.error(e);
      logger.error({
        message: `Failed to load plugin "${plugin}": ${e.message}.`,
        stack: e.stack,
        remarks: e.remarks
      });
      return null;
    }
  }
  return plugin;
}

// lib/utils/experimentalLog.js
function experimentalLog(message, remarks) {
  return {
    level: LogLevel.Error,
    message,
    remarks: (remarks ?? "") + `<p>This feature requires enabling the <code>experimentalFeatures</code> flag in your project
configuration:</p>
<pre class=""><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">makeProject</span>({
  <span class="hljs-attr">experimentalFeatures</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-comment">// ...</span>
});</code></pre><p><a href='https://motioncanvas.io/docs/experimental' target='_blank'>Learn more</a> about experimental
features.</p>
`
  };
}

// lib/utils/getContext.js
function getContext(options, canvas = document.createElement("canvas")) {
  const context = canvas.getContext("2d", options);
  if (!context) {
    throw new Error("Could not create a 2D context.");
  }
  return context;
}

// lib/utils/math.js
var RAD2DEG = 180 / Math.PI;
var DEG2RAD = Math.PI / 180;

// lib/utils/proxyUtils.js
function viaProxy(url) {
  if (!isProxyEnabled()) {
    return url;
  }
  if (url.startsWith("/cors-proxy/")) {
    return url;
  }
  const selfUrl = new URL(window.location.toString());
  try {
    const expandedUrl = new URL(url, selfUrl);
    if (!expandedUrl.protocol.startsWith("http")) {
      return url;
    }
    if (selfUrl.host === expandedUrl.host) {
      return url;
    }
    if (!isInsideAllowList(expandedUrl.host)) {
      return url;
    }
  } catch (_) {
    return url;
  }
  return `/cors-proxy/${encodeURIComponent(url)}`;
}
function isInsideAllowList(host) {
  const allowList = getAllowList();
  if (allowList.length === 0) {
    return true;
  }
  for (const entry of allowList) {
    if (entry.toLowerCase().trim() === host) {
      return true;
    }
  }
  return false;
}
function isProxyEnabled() {
  if (import.meta.env) {
    return import.meta.env.VITE_MC_PROXY_ENABLED === "true";
  }
  return false;
}
var AllowListCache = void 0;
function getAllowList() {
  if (import.meta.env.VITEST !== "true") {
    if (AllowListCache) {
      return [...AllowListCache];
    }
  }
  const result = function() {
    if (!isProxyEnabled() || !import.meta.env) {
      return [];
    }
    const valueJson = import.meta.env.VITE_MC_PROXY_ALLOW_LIST ?? "[]";
    const parsedJson = JSON.parse(valueJson);
    if (!Array.isArray(parsedJson)) {
      useLogger().error("Parsed Allow List expected to be an Array, but is " + typeof parsedJson);
    }
    const validatedEntries = [];
    for (const entry of parsedJson) {
      if (typeof entry !== "string") {
        useLogger().warn("Unexpected Value in Allow List: " + entry + ". Expected a String. Skipping.");
        continue;
      }
      validatedEntries.push(entry);
    }
    return validatedEntries;
  }();
  AllowListCache = result;
  return [...AllowListCache];
}

// lib/utils/range.js
function range(first, second, step) {
  let from = 0;
  let to = first;
  if (second !== void 0) {
    from = first;
    to = second;
  }
  step = step === void 0 ? from < to ? 1 : -1 : step;
  const array = [];
  let length = Math.max(Math.ceil((to - from) / step), 0);
  let index = 0;
  while (length--) {
    array[index++] = from;
    from += step;
  }
  return array;
}

// lib/utils/useContext.js
function useContext(callback) {
  return useScene().lifecycleEvents.onBeginRender.subscribe(callback);
}
function useContextAfter(callback) {
  return useScene().lifecycleEvents.onFinishRender.subscribe(callback);
}

// lib/utils/useDuration.js
function useDuration(name) {
  const scene = useScene();
  const thread = useThread();
  return scene.timeEvents.register(name, thread.time());
}

// lib/utils/usePlayback.js
var PlaybackStack = [];
function usePlayback() {
  const playback = PlaybackStack.at(-1);
  if (!playback) {
    throw new Error("The playback is not available in the current context.");
  }
  return playback;
}
function startPlayback(playback) {
  PlaybackStack.push(playback);
}
function endPlayback(playback) {
  if (PlaybackStack.pop() !== playback) {
    throw new Error("startPlayback/endPlayback were called out of order.");
  }
}

// lib/decorators/decorate.js
function decorate(fn, ...decorators) {
  const target = { [fn.name]: fn };
  const descriptor = Object.getOwnPropertyDescriptor(target, fn.name);
  if (descriptor) {
    for (let i = decorators.length - 1; i >= 0; i--) {
      decorators[i](target, fn.name, descriptor);
    }
  }
}

// lib/decorators/lazy.js
var UNINITIALIZED = Symbol.for("@motion-canvas/core/decorators/UNINITIALIZED");
function lazy(factory) {
  return (target, propertyKey) => {
    let value = UNINITIALIZED;
    Object.defineProperty(target, propertyKey, {
      get() {
        if (value === UNINITIALIZED) {
          value = factory.call(this);
        }
        return value;
      }
    });
  };
}

// lib/decorators/threadable.js
function threadable(customName) {
  return function(_, propertyKey, descriptor) {
    descriptor.value.prototype.name = customName ?? propertyKey;
    descriptor.value.prototype.threadable = true;
  };
}

// lib/flow/all.js
decorate(all, threadable());
function* all(...tasks) {
  for (const task of tasks) {
    yield task;
  }
  yield* join(...tasks);
}

// lib/flow/any.js
decorate(any, threadable());
function* any(...tasks) {
  for (const task of tasks) {
    yield task;
  }
  yield* join(false, ...tasks);
}

// lib/flow/chain.js
decorate(chain, threadable());
function* chain(...tasks) {
  for (const generator of tasks) {
    if (isThreadGenerator(generator)) {
      yield* generator;
    } else {
      generator();
    }
  }
}

// lib/flow/scheduling.js
decorate(waitUntil, threadable());
function* waitUntil(event, after) {
  yield* waitFor(useDuration(event));
  if (after) {
    yield* after;
  }
}
decorate(waitFor, threadable());
function* waitFor(seconds = 0, after) {
  const thread = useThread();
  const step = usePlayback().framesToSeconds(1);
  const targetTime = thread.time() + seconds;
  while (targetTime - step > thread.fixed) {
    yield;
  }
  thread.time(targetTime);
  if (after) {
    yield* after;
  }
}

// lib/flow/delay.js
decorate(delay, threadable());
function* delay(time, task) {
  yield* waitFor(time);
  if (isThreadGenerator(task)) {
    yield* task;
  } else {
    task();
  }
}

// lib/flow/every.js
function every(interval, callback) {
  let changed = false;
  decorate(everyRunner, threadable("every"));
  function* everyRunner() {
    const project = usePlayback();
    let acc = 0;
    let tick = 0;
    callback(tick);
    changed = true;
    while (true) {
      if (acc >= project.secondsToFrames(interval)) {
        acc = 0;
        tick++;
        callback(tick);
        changed = true;
      } else {
        changed = false;
      }
      acc++;
      yield;
    }
  }
  return {
    runner: everyRunner(),
    setInterval(value) {
      interval = value;
      changed = false;
    },
    setCallback(value) {
      callback = value;
      changed = false;
    },
    *sync() {
      while (!changed) {
        yield;
      }
    }
  };
}

// lib/flow/loop.js
decorate(loop, threadable());
function* loop(iterations, factory) {
  if (typeof iterations !== "number") {
    factory = iterations;
    iterations = Infinity;
  }
  if (iterations === Infinity && useThread().parent === null) {
    useLogger().error({
      message: "Tried to execute an infinite loop in the main thread.",
      remarks: '<p>Make sure to use <code>yield</code> or <code>spawn()</code> to execute the loop concurrently in a\nseparate thread:</p>\n<pre class="wrong"><code class="language-ts"><span class="hljs-keyword">yield</span>* <span class="hljs-title function_">loop</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">rect</span>().<span class="hljs-title function_">opacity</span>(<span class="hljs-number">0</span>).<span class="hljs-title function_">opacity</span>(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>));</code></pre><pre class="correct"><code class="language-ts"><span class="hljs-keyword">yield</span> <span class="hljs-title function_">loop</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">rect</span>().<span class="hljs-title function_">opacity</span>(<span class="hljs-number">0</span>).<span class="hljs-title function_">opacity</span>(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>));\n<span class="hljs-comment">// or</span>\n<span class="hljs-title function_">spawn</span>(<span class="hljs-title function_">loop</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">rect</span>().<span class="hljs-title function_">opacity</span>(<span class="hljs-number">0</span>).<span class="hljs-title function_">opacity</span>(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)));</code></pre><p>If you want to execute the loop a finite number of times, specify the iteration\ncount as the first argument:</p>\n<pre class=""><code class="language-ts"><span class="hljs-keyword">yield</span>* <span class="hljs-title function_">loop</span>(<span class="hljs-number">10</span>, <span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">rect</span>().<span class="hljs-title function_">opacity</span>(<span class="hljs-number">0</span>).<span class="hljs-title function_">opacity</span>(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>));\n<span class="hljs-comment">//          ^ iteration count</span></code></pre>',
      stack: new Error().stack
    });
    return;
  }
  for (let i = 0; i < iterations; i++) {
    const generator = factory(i);
    if (generator) {
      yield* generator;
    } else {
      yield;
    }
  }
}

// lib/flow/loopFor.js
decorate(loopFor, threadable());
function* loopFor(seconds, factory) {
  const thread = useThread();
  const step = usePlayback().framesToSeconds(1);
  const targetTime = thread.time() + seconds;
  let iteration = 0;
  while (targetTime - step > thread.fixed) {
    const generator = factory(iteration);
    if (generator) {
      yield* generator;
    } else {
      yield;
    }
    iteration += 1;
  }
  thread.time(targetTime);
}

// lib/flow/loopUntil.js
decorate(loopUntil, threadable());
function* loopUntil(event, factory) {
  yield* loopFor(useDuration(event), factory);
}

// lib/flow/noop.js
decorate(noop, threadable());
function* noop() {
}

// lib/flow/run.js
function run(firstArg, runner) {
  let task;
  if (typeof firstArg === "string") {
    task = runner();
    setTaskName(task, firstArg);
  } else {
    task = firstArg();
    setTaskName(task, task);
  }
  return task;
}

// lib/flow/sequence.js
decorate(sequence, threadable());
function* sequence(delay2, ...tasks) {
  for (const task of tasks) {
    yield task;
    yield* waitFor(delay2);
  }
  yield* join(...tasks);
}

// lib/threading/ThreadGenerator.js
function isPromisable(value) {
  return value && (typeof value === "object" || typeof value === "function") && "toPromise" in value;
}
function isThreadGenerator(value) {
  return value !== null && typeof value === "object" && Symbol.iterator in value && "next" in value;
}

// lib/threading/names.js
function setTaskName(task, source) {
  const prototype = Object.getPrototypeOf(task);
  if (!prototype.threadable) {
    prototype.threadable = true;
    prototype.name = typeof source === "string" ? source : getTaskName(source);
  }
}
function getTaskName(task) {
  return Object.getPrototypeOf(task).name ?? null;
}

// lib/threading/Thread.js
var Thread = class {
  get onDeferred() {
    return this.deferred.subscribable;
  }
  /**
   * The fixed time of this thread.
   *
   * @remarks
   * Fixed time is a multiple of the frame duration. It can be used to account
   * for the difference between this thread's {@link time} and the time of the
   * current animation frame.
   */
  get fixed() {
    return this.fixedTime;
  }
  /**
   * Check if this thread or any of its ancestors has been canceled.
   */
  get canceled() {
    return this.isCanceled || (this.parent?.canceled ?? false);
  }
  get paused() {
    return this.isPaused || (this.parent?.paused ?? false);
  }
  get root() {
    return this.parent?.root ?? this;
  }
  constructor(runner) {
    this.runner = runner;
    this.deferred = new EventDispatcher();
    this.children = [];
    this.time = createSignal(0);
    this.parent = null;
    this.isCanceled = false;
    this.isPaused = false;
    this.fixedTime = 0;
    this.queue = [];
    if (this.runner.task) {
      useLogger().error({
        message: `The generator "${getTaskName(this.runner)}" is already being executed by another thread.`,
        remarks: '<p>This usually happens when you mistakenly reuse a generator that is already\nrunning.</p>\n<p>For example, using <code>yield</code> here will run the opacity generator concurrently and\nstore it in the <code>task</code> variable (in case you want to cancel or await it later):</p>\n<pre class=""><code class="language-ts"><span class="hljs-keyword">const</span> task = <span class="hljs-keyword">yield</span> <span class="hljs-title function_">rect</span>().<span class="hljs-title function_">opacity</span>(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>);</code></pre><p>Trying to <code>yield</code> this task again will cause the current error:</p>\n<pre class=""><code class="language-ts"><span class="hljs-keyword">yield</span> task;</code></pre><p>Passing it to other flow functions will also cause the error:</p>\n<pre class=""><code class="language-ts"><span class="hljs-keyword">yield</span>* <span class="hljs-title function_">all</span>(task);</code></pre><p>Try to investigate your code looking for <code>yield</code> statements whose return value\nis reused in this way. Here&#39;s an example of a common mistake:</p>\n<pre class="wrong"><code class="language-ts"><span class="hljs-keyword">yield</span>* <span class="hljs-title function_">all</span>(\n  <span class="hljs-keyword">yield</span> <span class="hljs-title function_">rect</span>().<span class="hljs-title function_">opacity</span>(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), \n  <span class="hljs-keyword">yield</span> <span class="hljs-title function_">rect</span>().<span class="hljs-title function_">x</span>(<span class="hljs-number">200</span>, <span class="hljs-number">1</span>),\n);</code></pre><pre class="correct"><code class="language-ts"><span class="hljs-keyword">yield</span>* <span class="hljs-title function_">all</span>(\n  <span class="hljs-title function_">rect</span>().<span class="hljs-title function_">opacity</span>(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), \n  <span class="hljs-title function_">rect</span>().<span class="hljs-title function_">x</span>(<span class="hljs-number">200</span>, <span class="hljs-number">1</span>),\n);</code></pre>'
      });
      this.runner = noop();
    }
    this.runner.task = this;
  }
  /**
   * Progress the wrapped generator once.
   */
  next() {
    if (this.paused) {
      return {
        value: null,
        done: false
      };
    }
    startThread(this);
    const result = this.runner.next(this.value);
    endThread(this);
    this.value = null;
    return result;
  }
  /**
   * Prepare the thread for the next update cycle.
   *
   * @param dt - The delta time of the next cycle.
   */
  update(dt) {
    if (!this.paused) {
      this.time(this.time() + dt);
      this.fixedTime += dt;
    }
    this.children = this.children.filter((child) => !child.canceled);
  }
  spawn(child) {
    if (!isThreadGenerator(child)) {
      child = child();
    }
    this.queue.push(child);
    return child;
  }
  add(child) {
    child.parent = this;
    child.isCanceled = false;
    child.time(this.time());
    child.fixedTime = this.fixedTime;
    this.children.push(child);
    setTaskName(child.runner, `unknown ${this.children.length}`);
  }
  drain(callback) {
    this.queue.forEach(callback);
    this.queue = [];
  }
  cancel() {
    this.deferred.clear();
    this.runner.return();
    this.isCanceled = true;
    this.parent = null;
    this.drain((task) => task.return());
  }
  pause(value) {
    this.isPaused = value;
  }
  runDeferred() {
    startThread(this);
    this.deferred.dispatch();
    endThread(this);
  }
};

// lib/threading/cancel.js
function cancel(...tasks) {
  const thread = useThread();
  for (const task of tasks) {
    const child = thread.children.find((thread2) => thread2.runner === task);
    if (child && !child.canceled) {
      child.cancel();
      child.time(thread.time());
    }
  }
}

// lib/threading/join.js
decorate(join, threadable());
function* join(first, ...tasks) {
  let all2 = true;
  if (typeof first === "boolean") {
    all2 = first;
  } else {
    tasks.push(first);
  }
  const parent = useThread();
  const threads2 = tasks.map((task) => parent.children.find((thread) => thread.runner === task)).filter((thread) => thread);
  const startTime = parent.time();
  let childTime;
  if (all2) {
    while (threads2.find((thread) => !thread.canceled)) {
      yield;
    }
    childTime = Math.max(...threads2.map((thread) => thread.time()));
  } else {
    while (!threads2.find((thread) => thread.canceled)) {
      yield;
    }
    const canceled = threads2.filter((thread) => thread.canceled);
    childTime = Math.min(...canceled.map((thread) => thread.time()));
  }
  parent.time(Math.max(startTime, childTime));
}

// lib/threading/spawn.js
function spawn(task) {
  return useThread().root.spawn(task);
}

// lib/threading/threads.js
function isPromise(value) {
  return typeof value?.then === "function";
}
decorate(threads, threadable());
function* threads(factory, callback) {
  const playback = usePlayback();
  const root = factory();
  setTaskName(root, "root");
  const rootThread = new Thread(root);
  callback?.(rootThread);
  let threads2 = [rootThread];
  while (threads2.length > 0) {
    const newThreads = [];
    const queue = [...threads2];
    const dt = playback.deltaTime;
    while (queue.length > 0) {
      const thread = queue.pop();
      if (!thread || thread.canceled) {
        continue;
      }
      const result = thread.next();
      if (result.done) {
        thread.cancel();
        continue;
      }
      if (isThreadGenerator(result.value)) {
        const child = new Thread(result.value);
        thread.value = result.value;
        thread.add(child);
        queue.push(thread);
        queue.push(child);
      } else if (result.value) {
        thread.value = yield result.value;
        queue.push(thread);
      } else {
        thread.update(dt);
        thread.drain((task) => {
          const child = new Thread(task);
          thread.add(child);
          newThreads.unshift(child);
        });
        newThreads.unshift(thread);
      }
    }
    threads2 = [];
    for (const thread of newThreads) {
      if (!thread.canceled) {
        threads2.push(thread);
        thread.runDeferred();
      }
    }
    if (threads2.length > 0)
      yield;
  }
}

// lib/scenes/Scene.js
var SceneRenderEvent;
(function(SceneRenderEvent2) {
  SceneRenderEvent2[SceneRenderEvent2["BeforeRender"] = 0] = "BeforeRender";
  SceneRenderEvent2[SceneRenderEvent2["BeginRender"] = 1] = "BeginRender";
  SceneRenderEvent2[SceneRenderEvent2["FinishRender"] = 2] = "FinishRender";
  SceneRenderEvent2[SceneRenderEvent2["AfterRender"] = 3] = "AfterRender";
})(SceneRenderEvent || (SceneRenderEvent = {}));

// lib/scenes/LifecycleEvents.js
var LifecycleEvents = class {
  get onBeforeRender() {
    return this.beforeRender.subscribable;
  }
  get onBeginRender() {
    return this.beginRender.subscribable;
  }
  get onFinishRender() {
    return this.finishRender.subscribable;
  }
  get onAfterRender() {
    return this.afterRender.subscribable;
  }
  constructor(scene) {
    this.scene = scene;
    this.beforeRender = new EventDispatcher();
    this.beginRender = new EventDispatcher();
    this.finishRender = new EventDispatcher();
    this.afterRender = new EventDispatcher();
    this.scene.onRenderLifecycle.subscribe(([event, ctx]) => {
      switch (event) {
        case SceneRenderEvent.BeforeRender:
          return this.beforeRender.dispatch(ctx);
        case SceneRenderEvent.BeginRender:
          return this.beginRender.dispatch(ctx);
        case SceneRenderEvent.FinishRender:
          return this.finishRender.dispatch(ctx);
        case SceneRenderEvent.AfterRender:
          return this.afterRender.dispatch(ctx);
      }
    });
    this.scene.onReset.subscribe(() => {
      this.beforeRender.clear();
      this.beginRender.clear();
      this.finishRender.clear();
      this.afterRender.clear();
    });
  }
};

// lib/scenes/Random.js
var Random = class _Random {
  constructor(state) {
    this.state = state;
    this.nextGauss = null;
  }
  /**
   * @internal
   */
  static createSeed() {
    return Math.floor(Math.random() * 4294967296);
  }
  /**
   * Get the next random float in the given range.
   *
   * @param from - The start of the range.
   * @param to - The end of the range.
   */
  nextFloat(from = 0, to = 1) {
    return map(from, to, this.next());
  }
  /**
   * Get the next random integer in the given range.
   *
   * @param from - The start of the range.
   * @param to - The end of the range. Exclusive.
   */
  nextInt(from = 0, to = 4294967296) {
    let value = Math.floor(map(from, to, this.next()));
    if (value === to) {
      value = from;
    }
    return value;
  }
  /**
   * Get a random float from a gaussian distribution.
   * @param mean - The mean of the distribution.
   * @param stdev - The standard deviation of the distribution.
   */
  gauss(mean = 0, stdev = 1) {
    let z = this.nextGauss;
    this.nextGauss = null;
    if (z === null) {
      const x2pi = this.next() * 2 * Math.PI;
      const g2rad = Math.sqrt(-2 * Math.log(1 - this.next()));
      z = Math.cos(x2pi) * g2rad;
      this.nextGauss = Math.sin(x2pi) * g2rad;
    }
    return mean + z * stdev;
  }
  /**
   * Get an array filled with random floats in the given range.
   *
   * @param size - The size of the array.
   * @param from - The start of the range.
   * @param to - The end of the range.
   */
  floatArray(size, from = 0, to = 1) {
    return range(size).map(() => this.nextFloat(from, to));
  }
  /**
   Get an array filled with random integers in the given range.
   *
   * @param size - The size of the array.
   * @param from - The start of the range.
   * @param to - The end of the range. Exclusive.
   */
  intArray(size, from = 0, to = 4294967296) {
    return range(size).map(() => this.nextInt(from, to));
  }
  /**
   * Create a new independent generator.
   */
  spawn() {
    return new _Random(this.nextInt());
  }
  next() {
    this.state |= 0;
    this.state = this.state + 1831565813 | 0;
    let t = Math.imul(this.state ^ this.state >>> 15, 1 | this.state);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
};

// lib/scenes/SceneState.js
var SceneState;
(function(SceneState2) {
  SceneState2[SceneState2["Initial"] = 0] = "Initial";
  SceneState2[SceneState2["AfterTransitionIn"] = 1] = "AfterTransitionIn";
  SceneState2[SceneState2["CanTransitionOut"] = 2] = "CanTransitionOut";
  SceneState2[SceneState2["Finished"] = 3] = "Finished";
})(SceneState || (SceneState = {}));

// lib/scenes/Shaders.js
var UNIFORM_RESOLUTION = "resolution";
var UNIFORM_DESTINATION_TEXTURE = "destinationTexture";
var UNIFORM_SOURCE_TEXTURE = "sourceTexture";
var UNIFORM_TIME = "time";
var UNIFORM_DELTA_TIME = "deltaTime";
var UNIFORM_FRAMERATE = "framerate";
var UNIFORM_FRAME = "frame";
var UNIFORM_SOURCE_MATRIX = "sourceMatrix";
var UNIFORM_DESTINATION_MATRIX = "destinationMatrix";
var FragmentShader = `#version 300 es

in vec2 position;

out vec2 screenUV;
out vec2 sourceUV;
out vec2 destinationUV;

uniform mat4 sourceMatrix;
uniform mat4 destinationMatrix;

void main() {
    vec2 position_source = position * 0.5 + 0.5;
    vec4 position_screen = sourceMatrix * vec4(position_source, 0, 1);

    screenUV = position_screen.xy;
    sourceUV = position_source;
    destinationUV = (destinationMatrix * position_screen).xy;

    gl_Position = (position_screen - 0.5) * 2.0;
}
`;
var Shaders = class {
  constructor(scene, sharedContext) {
    this.scene = scene;
    this.sharedContext = sharedContext;
    this.gl = null;
    this.positionBuffer = null;
    this.sourceTexture = null;
    this.destinationTexture = null;
    this.positionLocation = 0;
    this.quadPositions = new Float32Array([
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1,
      -1
    ]);
    this.handleReload = () => {
      if (this.gl) {
        this.updateViewport();
      }
    };
    scene.onReloaded.subscribe(this.handleReload);
  }
  setup(gl) {
    this.gl = gl;
    this.updateViewport();
    this.positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.quadPositions, gl.STATIC_DRAW);
    gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(this.positionLocation);
    this.sourceTexture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.sourceTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    this.destinationTexture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.destinationTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }
  teardown(gl) {
    gl.deleteBuffer(this.positionBuffer);
    gl.disableVertexAttribArray(this.positionLocation);
    gl.deleteTexture(this.sourceTexture);
    gl.deleteTexture(this.destinationTexture);
    this.positionBuffer = null;
    this.sourceTexture = null;
    this.destinationTexture = null;
    this.gl = null;
  }
  updateViewport() {
    if (this.gl) {
      const size = this.scene.getRealSize();
      this.gl.canvas.width = size.width;
      this.gl.canvas.height = size.height;
      this.gl.viewport(0, 0, size.width, size.height);
    }
  }
  getGL() {
    return this.gl ?? this.sharedContext.borrow(this);
  }
  getProgram(fragment) {
    const program = this.sharedContext.getProgram(fragment, FragmentShader);
    if (!program) {
      return null;
    }
    const size = this.scene.getRealSize();
    const gl = this.getGL();
    gl.useProgram(program);
    gl.uniform1i(gl.getUniformLocation(program, UNIFORM_SOURCE_TEXTURE), 0);
    gl.uniform1i(gl.getUniformLocation(program, UNIFORM_DESTINATION_TEXTURE), 1);
    gl.uniform2f(gl.getUniformLocation(program, UNIFORM_RESOLUTION), size.x, size.y);
    gl.uniform1f(gl.getUniformLocation(program, UNIFORM_DELTA_TIME), this.scene.playback.deltaTime);
    gl.uniform1f(gl.getUniformLocation(program, UNIFORM_FRAMERATE), this.scene.playback.fps);
    return program;
  }
  copyTextures(destination, source) {
    this.copyTexture(source, this.sourceTexture);
    this.copyTexture(destination, this.destinationTexture);
  }
  clear() {
    const gl = this.getGL();
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
  render() {
    const gl = this.getGL();
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
  copyTexture(source, texture) {
    const gl = this.getGL();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    gl.generateMipmap(gl.TEXTURE_2D);
  }
};

// lib/scenes/Slides.js
var Slides = class {
  get onChanged() {
    return this.slides.subscribable;
  }
  constructor(scene) {
    this.scene = scene;
    this.slides = new ValueDispatcher([]);
    this.lookup = /* @__PURE__ */ new Map();
    this.collisionLookup = /* @__PURE__ */ new Set();
    this.current = null;
    this.canResume = false;
    this.waitsForId = null;
    this.targetId = null;
    this.handleReload = () => {
      this.lookup.clear();
      this.collisionLookup.clear();
      this.current = null;
      this.waitsForId = null;
      this.targetId = null;
    };
    this.handleReset = () => {
      this.collisionLookup.clear();
      this.current = null;
      this.waitsForId = null;
    };
    this.handleRecalculated = () => {
      this.slides.current = [...this.lookup.values()];
    };
    this.scene.onReloaded.subscribe(this.handleReload);
    this.scene.onReset.subscribe(this.handleReset);
    this.scene.onRecalculated.subscribe(this.handleRecalculated);
  }
  setTarget(target) {
    this.targetId = target;
  }
  resume() {
    this.canResume = true;
  }
  isWaitingFor(slide) {
    return this.waitsForId === slide;
  }
  isWaiting() {
    return this.waitsForId !== null;
  }
  didHappen(slide) {
    if (this.current === null) {
      return false;
    }
    for (const key of this.lookup.keys()) {
      if (key === slide) {
        return true;
      }
      if (key === this.current?.id) {
        return false;
      }
    }
    return false;
  }
  getCurrent() {
    return this.current;
  }
  register(name, initialTime) {
    if (this.waitsForId !== null) {
      throw new Error(`The animation already waits for a slide: ${this.waitsForId}.`);
    }
    const id = this.toId(name);
    if (this.scene.playback.state !== PlaybackState.Presenting) {
      if (!this.lookup.has(id)) {
        this.lookup.set(id, {
          id,
          name,
          time: initialTime,
          scene: this.scene,
          stack: new Error().stack
        });
      }
      if (this.collisionLookup.has(name)) {
        this.scene.logger.warn({
          message: `A slide named "${name}" already exists.`,
          stack: new Error().stack
        });
      } else {
        this.collisionLookup.add(name);
      }
    }
    this.waitsForId = id;
    this.current = this.lookup.get(id) ?? null;
    this.canResume = false;
  }
  shouldWait(name) {
    const id = this.toId(name);
    if (this.waitsForId !== id) {
      throw new Error(`The animation waits for a different slide: ${this.waitsForId}.`);
    }
    const data = this.lookup.get(id);
    if (!data) {
      throw new Error(`Could not find the "${name}" slide.`);
    }
    let canResume = this.canResume;
    if (this.scene.playback.state !== PlaybackState.Presenting) {
      canResume = id !== this.targetId;
    }
    if (canResume) {
      this.waitsForId = null;
    }
    return !canResume;
  }
  toId(name) {
    return `${this.scene.name}:${name}`;
  }
};

// lib/scenes/Variables.js
var Variables = class {
  constructor(scene) {
    this.scene = scene;
    this.signals = {};
    this.variables = {};
    this.handleReset = () => {
      this.signals = {};
    };
    scene.onReset.subscribe(this.handleReset);
  }
  /**
   * Get variable signal if exists or create signal if not
   *
   * @param name - The name of the variable.
   * @param initial - The initial value of the variable. It will be used if the
   *                  variable was not configured from the outside.
   */
  get(name, initial) {
    var _a3;
    (_a3 = this.signals)[name] ?? (_a3[name] = createSignal(this.variables[name] ?? initial));
    return () => this.signals[name]();
  }
  /**
   * Update all signals with new project variable values.
   */
  updateSignals(variables) {
    this.variables = variables;
    Object.keys(variables).map((variableName) => {
      if (variableName in this.signals) {
        this.signals[variableName](variables[variableName]);
      }
    });
  }
};

// lib/scenes/GeneratorScene.js
var GeneratorScene = class {
  get firstFrame() {
    return this.cache.current.firstFrame;
  }
  get lastFrame() {
    return this.firstFrame + this.cache.current.duration;
  }
  get onCacheChanged() {
    return this.cache.subscribable;
  }
  get onReloaded() {
    return this.reloaded.subscribable;
  }
  get onRecalculated() {
    return this.recalculated.subscribable;
  }
  get onThreadChanged() {
    return this.thread.subscribable;
  }
  get onRenderLifecycle() {
    return this.renderLifecycle.subscribable;
  }
  get onReset() {
    return this.afterReset.subscribable;
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  get LifecycleEvents() {
    this.logger.warn("LifecycleEvents is deprecated. Use lifecycleEvents instead.");
    return this.lifecycleEvents;
  }
  get previous() {
    return this.previousScene;
  }
  constructor(description) {
    this.cache = new ValueDispatcher({
      firstFrame: 0,
      transitionDuration: 0,
      duration: 0,
      lastFrame: 0
    });
    this.reloaded = new EventDispatcher();
    this.recalculated = new EventDispatcher();
    this.thread = new ValueDispatcher(null);
    this.renderLifecycle = new EventDispatcher();
    this.afterReset = new EventDispatcher();
    this.lifecycleEvents = new LifecycleEvents(this);
    this.previousScene = null;
    this.runner = null;
    this.state = SceneState.Initial;
    this.cached = false;
    this.counters = {};
    this.name = description.name;
    this.size = description.size;
    this.resolutionScale = description.resolutionScale;
    this.logger = description.logger;
    this.playback = description.playback;
    this.meta = description.meta;
    this.runnerFactory = description.config;
    this.creationStack = description.stack;
    this.experimentalFeatures = description.experimentalFeatures ?? false;
    decorate(this.runnerFactory, threadable(this.name));
    this.timeEvents = new description.timeEventsClass(this);
    this.variables = new Variables(this);
    this.shaders = new Shaders(this, description.sharedWebGLContext);
    this.slides = new Slides(this);
    this.random = new Random(this.meta.seed.get());
    this.previousOnTop = false;
  }
  /**
   * Update the view.
   *
   * Invoked after each step of the main generator.
   * Can be used for calculating layout.
   *
   * Can modify the state of the view.
   */
  update() {
  }
  async render(context) {
    let iterations = 0;
    do {
      iterations++;
      await DependencyContext.consumePromises();
      context.save();
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      this.execute(() => this.draw(context));
      context.restore();
    } while (DependencyContext.hasPromises() && iterations < 10);
    if (iterations > 1) {
      this.logger.debug(`render iterations: ${iterations}`);
    }
  }
  reload({ config, size, stack, resolutionScale } = {}) {
    if (config) {
      this.runnerFactory = config;
    }
    if (size) {
      this.size = size;
    }
    if (resolutionScale) {
      this.resolutionScale = resolutionScale;
    }
    if (stack) {
      this.creationStack = stack;
    }
    this.cached = false;
    this.reloaded.dispatch();
  }
  async recalculate(setFrame) {
    const cached = this.cache.current;
    cached.firstFrame = this.playback.frame;
    cached.lastFrame = cached.firstFrame + cached.duration;
    if (this.isCached()) {
      setFrame(cached.lastFrame);
      this.cache.current = { ...cached };
      return;
    }
    cached.transitionDuration = -1;
    await this.reset();
    while (!this.canTransitionOut()) {
      if (cached.transitionDuration < 0 && this.state === SceneState.AfterTransitionIn) {
        cached.transitionDuration = this.playback.frame - cached.firstFrame;
      }
      setFrame(this.playback.frame + 1);
      await this.next();
    }
    if (cached.transitionDuration === -1) {
      cached.transitionDuration = 0;
    }
    cached.lastFrame = this.playback.frame;
    cached.duration = cached.lastFrame - cached.firstFrame;
    await new Promise((resolve) => setTimeout(resolve, 0));
    this.cached = true;
    this.cache.current = { ...cached };
    this.recalculated.dispatch();
  }
  async next() {
    if (!this.runner) {
      return;
    }
    let result = this.execute(() => this.runner.next());
    this.update();
    while (result.value) {
      if (isPromisable(result.value)) {
        const value = await result.value.toPromise();
        result = this.execute(() => this.runner.next(value));
      } else if (isPromise(result.value)) {
        const value = await result.value;
        result = this.execute(() => this.runner.next(value));
      } else {
        this.logger.warn({
          message: "Invalid value yielded by the scene.",
          object: result.value
        });
        result = this.execute(() => this.runner.next(result.value));
      }
      this.update();
    }
    if (DependencyContext.hasPromises()) {
      const promises = await DependencyContext.consumePromises();
      this.logger.error({
        message: "Tried to access an asynchronous property before the node was ready. Make sure to yield the node before accessing the property.",
        stack: promises[0].stack,
        inspect: promises[0].owner?.key ?? void 0
      });
    }
    if (result.done) {
      this.state = SceneState.Finished;
    }
  }
  async reset(previousScene = null) {
    this.counters = {};
    this.previousScene = previousScene;
    this.previousOnTop = false;
    this.random = new Random(this.meta.seed.get());
    this.runner = threads(() => this.runnerFactory(this.getView()), (thread) => {
      this.thread.current = thread;
    });
    this.state = SceneState.AfterTransitionIn;
    this.afterReset.dispatch();
    await this.next();
  }
  getSize() {
    return this.size;
  }
  getRealSize() {
    return this.size.mul(this.resolutionScale);
  }
  isAfterTransitionIn() {
    return this.state === SceneState.AfterTransitionIn;
  }
  canTransitionOut() {
    return this.state === SceneState.CanTransitionOut || this.state === SceneState.Finished;
  }
  isFinished() {
    return this.state === SceneState.Finished;
  }
  enterInitial() {
    if (this.state === SceneState.AfterTransitionIn) {
      this.state = SceneState.Initial;
    } else {
      this.logger.warn(`Scene ${this.name} entered initial in an unexpected state: ${this.state}`);
    }
  }
  enterAfterTransitionIn() {
    if (this.state === SceneState.Initial) {
      this.state = SceneState.AfterTransitionIn;
    } else {
      this.logger.warn(`Scene ${this.name} transitioned in an unexpected state: ${this.state}`);
    }
  }
  enterCanTransitionOut() {
    if (this.state === SceneState.AfterTransitionIn || this.state === SceneState.Initial) {
      this.state = SceneState.CanTransitionOut;
    } else {
      this.logger.warn(`Scene ${this.name} was marked as finished in an unexpected state: ${this.state}`);
    }
  }
  isCached() {
    return this.cached;
  }
  /**
   * Invoke the given callback in the context of this scene.
   *
   * @remarks
   * This method makes sure that the context of this scene is globally available
   * during the execution of the callback.
   *
   * @param callback - The callback to invoke.
   */
  execute(callback) {
    let result;
    startScene(this);
    startPlayback(this.playback);
    try {
      result = callback();
    } finally {
      endPlayback(this.playback);
      endScene(this);
    }
    return result;
  }
};

// lib/scenes/Inspectable.js
function isInspectable(value) {
  return value && typeof value === "object" && "validateInspection" in value;
}

// lib/scenes/SceneMetadata.js
function createSceneMetadata() {
  return new ObjectMetaField("scene", {
    version: new MetaField("version", 1),
    timeEvents: new MetaField("time events", []),
    seed: new MetaField("seed", Random.createSeed())
  });
}

// lib/scenes/Threadable.js
function isThreadable(value) {
  return value && typeof value === "object" && "onThreadChanged" in value;
}

// lib/utils/useRandom.js
function useRandom(seed, fixed = true) {
  return typeof seed === "number" ? new Random(fixed ? seed : seed + useScene().meta.seed.get()) : useScene().random;
}

// lib/utils/useTime.js
function useTime() {
  return useThread().time();
}

// lib/tweening/interpolationFunctions.js
function textLerp(fromString, toString, value) {
  const from = [...fromString];
  const to = [...toString];
  if (to.length >= from.length) {
    const current = Math.floor(to.length * value);
    const currentLength = Math.floor(map(from.length - 1, to.length, value));
    let text = "";
    for (let i = 0; i < to.length; i++) {
      if (i < current) {
        text += to[i];
      } else if (from[i] || i <= currentLength) {
        text += from[i] ?? to[i];
      }
    }
    return text;
  } else {
    const current = Math.round(from.length * (1 - value));
    const currentLength = Math.floor(map(from.length + 1, to.length, value));
    const text = [];
    for (let i = from.length - 1; i >= 0; i--) {
      if (i < current) {
        text.unshift(from[i]);
      } else if (to[i] || i < currentLength) {
        text.unshift(to[i] ?? from[i]);
      }
    }
    return text.join("");
  }
}
function deepLerp(from, to, value, suppressWarnings = false) {
  if (value === 0)
    return from;
  if (value === 1)
    return to;
  if (from == null || to == null) {
    if (!suppressWarnings) {
      useLogger().warn(`Attempting to lerp ${from} -> ${to} may result in unexpected behavior.`);
    }
    return void 0;
  }
  if (typeof from === "number" && typeof to === "number") {
    return map(from, to, value);
  }
  if (typeof from === "string" && typeof to === "string") {
    return textLerp(from, to, value);
  }
  if (typeof from === "boolean" && typeof to === "boolean") {
    return value < 0.5 ? from : to;
  }
  if ("lerp" in from) {
    return from.lerp(to, value);
  }
  if (from && to && typeof from === "object" && typeof to === "object") {
    if (Array.isArray(from) && Array.isArray(to)) {
      if (from.length === to.length) {
        return from.map((f, i) => deepLerp(f, to[i], value));
      }
    } else {
      let toObject = false;
      if (!(from instanceof Map) && !(to instanceof Map)) {
        toObject = true;
        from = new Map(Object.entries(from));
        to = new Map(Object.entries(to));
      }
      if (from instanceof Map && to instanceof Map) {
        const result = /* @__PURE__ */ new Map();
        for (const key of /* @__PURE__ */ new Set([...from.keys(), ...to.keys()])) {
          const inter = deepLerp(from.get(key), to.get(key), value, true);
          if (inter !== void 0)
            result.set(key, inter);
        }
        return toObject ? Object.fromEntries(result) : result;
      }
    }
  }
  return to;
}
function boolLerp(from, to, value) {
  return value < 0.5 ? from : to;
}
function map(from, to, value) {
  return from + (to - from) * value;
}
function remap(fromIn, toIn, fromOut, toOut, value) {
  return fromOut + (value - fromIn) * (toOut - fromOut) / (toIn - fromIn);
}
function clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
}
function clampRemap(fromIn, toIn, fromOut, toOut, value) {
  const remappedValue = remap(fromIn, toIn, fromOut, toOut, value);
  if (fromOut > toOut)
    [fromOut, toOut] = [toOut, fromOut];
  return clamp(fromOut, toOut, remappedValue);
}
function arcLerp(value, reverse, ratio) {
  let flip = reverse;
  if (ratio > 1) {
    ratio = 1 / ratio;
  } else {
    flip = !flip;
  }
  const normalized = flip ? Math.acos(clamp(-1, 1, 1 - value)) : Math.asin(value);
  const radians = map(normalized, map(0, Math.PI / 2, value), ratio);
  let xValue = Math.sin(radians);
  let yValue = 1 - Math.cos(radians);
  if (reverse) {
    [xValue, yValue] = [yValue, xValue];
  }
  return new Vector2(xValue, yValue);
}

// lib/tweening/spring.js
decorate(spring, threadable());
function* spring(spring2, from, to, settleToleranceOrOnProgress, onProgressOrOnEnd, onEnd) {
  const settleTolerance = typeof settleToleranceOrOnProgress === "number" ? settleToleranceOrOnProgress : 1e-3;
  onEnd = typeof settleToleranceOrOnProgress === "number" ? onEnd : onProgressOrOnEnd;
  const onProgress = (value, time) => {
    if (typeof settleToleranceOrOnProgress === "function") {
      settleToleranceOrOnProgress(value, time);
    } else if (typeof onProgressOrOnEnd === "function") {
      onProgressOrOnEnd(value, time);
    }
  };
  spring2 = spring2 ?? {
    mass: 0.05,
    stiffness: 10,
    damping: 0.5
  };
  if (spring2.mass <= 0) {
    useLogger().error(new Error("Spring mass must be greater than 0."));
    return;
  }
  if (spring2.stiffness < 0) {
    useLogger().error(new Error("Spring stiffness must be greater or equal to 0."));
    return;
  }
  if (spring2.damping < 0) {
    useLogger().error(new Error("Spring damping must be greater or equal to 0."));
    return;
  }
  const thread = useThread();
  let position = from;
  let velocity = spring2.initialVelocity ?? 0;
  const update = (dt) => {
    if (spring2 === null) {
      return;
    }
    const positionDelta = position - to;
    const force = -spring2.stiffness * positionDelta - spring2.damping * velocity;
    velocity += force / spring2.mass * dt;
    position += velocity * dt;
  };
  const simulationFrames = 120;
  const timeStep = 1 / simulationFrames;
  onProgress(from, 0);
  const startTime = thread.time();
  let simulationTime = startTime;
  let settled = false;
  while (!settled) {
    while (simulationTime < thread.fixed) {
      const difference = thread.fixed - simulationTime;
      if (timeStep > difference) {
        update(difference);
        simulationTime = thread.fixed;
      } else {
        update(timeStep);
        simulationTime += timeStep;
      }
      if (Math.abs(to - position) < settleTolerance && Math.abs(velocity) < settleTolerance) {
        thread.time(simulationTime);
        settled = true;
        break;
      }
    }
    if (!settled) {
      onProgress(position, thread.fixed - startTime);
      yield;
    }
  }
  onProgress(to, thread.fixed - startTime);
  onEnd?.(to, thread.fixed - startTime);
}
function makeSpring(mass, stiffness, damping, initialVelocity) {
  return {
    mass,
    stiffness,
    damping,
    initialVelocity
  };
}
var BeatSpring = makeSpring(0.13, 5.7, 1.2, 10);
var PlopSpring = makeSpring(0.2, 20, 0.68, 0);
var BounceSpring = makeSpring(0.08, 4.75, 0.05, 0);
var SwingSpring = makeSpring(0.39, 19.85, 2.82, 0);
var JumpSpring = makeSpring(0.04, 10, 0.7, 8);
var StrikeSpring = makeSpring(0.03, 20, 0.9, 4.8);
var SmoothSpring = makeSpring(0.16, 15.35, 1.88, 0);

// lib/tweening/timingFunctions.js
function sin(value, from = 0, to = 1) {
  return remap(-1, 1, from, to, Math.sin(value));
}
function easeInSine(value, from = 0, to = 1) {
  value = 1 - Math.cos(value * Math.PI / 2);
  return map(from, to, value);
}
function easeOutSine(value, from = 0, to = 1) {
  value = Math.sin(value * Math.PI / 2);
  return map(from, to, value);
}
function easeInOutSine(value, from = 0, to = 1) {
  value = -(Math.cos(Math.PI * value) - 1) / 2;
  return map(from, to, value);
}
function easeInQuad(value, from = 0, to = 1) {
  value = value * value;
  return map(from, to, value);
}
function easeOutQuad(value, from = 0, to = 1) {
  value = 1 - Math.pow(1 - value, 2);
  return map(from, to, value);
}
function easeInOutQuad(value, from = 0, to = 1) {
  value = value < 0.5 ? 2 * value * value : 1 - Math.pow(-2 * value + 2, 2) / 2;
  return map(from, to, value);
}
function easeInCubic(value, from = 0, to = 1) {
  value = value * value * value;
  return map(from, to, value);
}
function easeOutCubic(value, from = 0, to = 1) {
  value = 1 - Math.pow(1 - value, 3);
  return map(from, to, value);
}
function easeInOutCubic(value, from = 0, to = 1) {
  value = value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;
  return map(from, to, value);
}
function easeInQuart(value, from = 0, to = 1) {
  value = value * value * value * value;
  return map(from, to, value);
}
function easeOutQuart(value, from = 0, to = 1) {
  value = 1 - Math.pow(1 - value, 4);
  return map(from, to, value);
}
function easeInOutQuart(value, from = 0, to = 1) {
  value = value < 0.5 ? 8 * value * value * value * value : 1 - Math.pow(-2 * value + 2, 4) / 2;
  return map(from, to, value);
}
function easeInQuint(value, from = 0, to = 1) {
  value = value * value * value * value * value;
  return map(from, to, value);
}
function easeOutQuint(value, from = 0, to = 1) {
  value = 1 - Math.pow(1 - value, 5);
  return map(from, to, value);
}
function easeInOutQuint(value, from = 0, to = 1) {
  value = value < 0.5 ? 16 * value * value * value * value * value : 1 - Math.pow(-2 * value + 2, 5) / 2;
  return map(from, to, value);
}
function easeInExpo(value, from = 0, to = 1) {
  value = value === 0 ? 0 : Math.pow(2, 10 * value - 10);
  return map(from, to, value);
}
function easeOutExpo(value, from = 0, to = 1) {
  value = value === 1 ? 1 : 1 - Math.pow(2, -10 * value);
  return map(from, to, value);
}
function easeInOutExpo(value, from = 0, to = 1) {
  value = value === 0 ? 0 : value === 1 ? 1 : value < 0.5 ? Math.pow(2, 20 * value - 10) / 2 : (2 - Math.pow(2, -20 * value + 10)) / 2;
  return map(from, to, value);
}
function easeInCirc(value, from = 0, to = 1) {
  value = 1 - Math.sqrt(1 - Math.pow(value, 2));
  return map(from, to, value);
}
function easeOutCirc(value, from = 0, to = 1) {
  value = Math.sqrt(1 - Math.pow(value - 1, 2));
  return map(from, to, value);
}
function easeInOutCirc(value, from = 0, to = 1) {
  value = value < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * value, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * value + 2, 2)) + 1) / 2;
  return map(from, to, value);
}
function createEaseInBack(s = 1.70158) {
  return (value, from = 0, to = 1) => {
    value = (s + 1) * value * value * value - s * value * value;
    return map(from, to, value);
  };
}
function createEaseOutBack(s = 1.70158) {
  return (value, from = 0, to = 1) => {
    value = 1 + (s + 1) * Math.pow(value - 1, 3) + s * Math.pow(value - 1, 2);
    return map(from, to, value);
  };
}
function createEaseInOutBack(s = 1.70158, v = 1.525) {
  return (value, from = 0, to = 1) => {
    value = value < 0.5 ? Math.pow(2 * value, 2) * ((s * v + 1) * 2 * value - s * v) / 2 : (Math.pow(2 * value - 2, 2) * ((s * v + 1) * (value * 2 - 2) + s * v) + 2) / 2;
    return map(from, to, value);
  };
}
function createEaseInElastic(s = 2.094395) {
  return (value, from = 0, to = 1) => {
    value = value === 0 ? 0 : value === 1 ? 1 : -Math.pow(2, 10 * value - 10) * Math.sin((value * 10 - 10.75) * s);
    return map(from, to, value);
  };
}
function createEaseOutElastic(s = 2.094395) {
  return (value, from = 0, to = 1) => {
    value = value === 0 ? 0 : value === 1 ? 1 : Math.pow(2, -10 * value) * Math.sin((value * 10 - 0.75) * s) + 1;
    return map(from, to, value);
  };
}
function createEaseInOutElastic(s = 1.39626) {
  return (value, from = 0, to = 1) => {
    value = value === 0 ? 0 : value === 1 ? 1 : value < 0.5 ? -(Math.pow(2, 20 * value - 10) * Math.sin((20 * value - 11.125) * s)) / 2 : Math.pow(2, -20 * value + 10) * Math.sin((20 * value - 11.125) * s) / 2 + 1;
    return map(from, to, value);
  };
}
function createEaseInBounce(n = 7.5625, d = 2.75) {
  const easeOutBounce2 = createEaseOutBounce(n, d);
  return (value, from = 0, to = 1) => {
    return 1 - easeOutBounce2(1 - value, from, to);
  };
}
function createEaseOutBounce(n = 7.5625, d = 2.75) {
  return (value, from = 0, to = 1) => {
    if (value < 1 / d) {
      value = n * value * value;
    } else if (value < 2 / d) {
      value = n * (value -= 1.505 / d) * value + 0.75;
    } else if (value < 2.5 / d) {
      value = n * (value -= 2.25 / d) * value + 0.9375;
    } else {
      value = n * (value -= 2.625 / d) * value + 0.984375;
    }
    return map(from, to, value);
  };
}
function createEaseInOutBounce(n = 7.5625, d = 2.75) {
  const easeOutBounce2 = createEaseOutBounce(n, d);
  return (value, from = 0, to = 1) => {
    return value < 0.5 ? (1 - easeOutBounce2(1 - 2 * value, from, to)) / 2 : (1 + easeOutBounce2(2 * value - 1, from, to)) / 2;
  };
}
function linear(value, from = 0, to = 1) {
  return map(from, to, value);
}
function cos(value, from = 0, to = 1) {
  return remap(-1, 1, from, to, Math.cos(value));
}
var easeInBack = createEaseInBack();
var easeOutBack = createEaseOutBack();
var easeInOutBack = createEaseInOutBack();
var easeInBounce = createEaseInBounce();
var easeOutBounce = createEaseOutBounce();
var easeInOutBounce = createEaseInOutBounce();
var easeInElastic = createEaseInElastic();
var easeOutElastic = createEaseOutElastic();
var easeInOutElastic = createEaseInOutElastic();

// lib/tweening/tween.js
decorate(tween, threadable());
function* tween(seconds, onProgress, onEnd) {
  const thread = useThread();
  const startTime = thread.time();
  const endTime = thread.time() + seconds;
  onProgress(0, 0);
  while (endTime > thread.fixed) {
    const time = thread.fixed - startTime;
    const value = time / seconds;
    if (time > 0) {
      onProgress(value, time);
    }
    yield;
  }
  thread.time(endTime);
  onProgress(1, seconds);
  onEnd?.(1, seconds);
}

// lib/signals/DependencyContext.js
var DependencyContext = class _DependencyContext {
  static collectPromise(promise, initialValue = null) {
    const handle = {
      promise,
      value: initialValue,
      stack: new Error().stack
    };
    const context = this.collectionStack.at(-1);
    if (context) {
      handle.owner = context.owner;
    }
    promise.then((value) => {
      handle.value = value;
      context?.markDirty();
    });
    this.promises.push(handle);
    return handle;
  }
  static hasPromises() {
    return this.promises.length > 0;
  }
  static async consumePromises() {
    const promises = [...this.promises];
    await Promise.all(promises.map((handle) => handle.promise));
    this.promises = this.promises.filter((v) => !promises.includes(v));
    return promises;
  }
  constructor(owner) {
    this.owner = owner;
    this.dependencies = /* @__PURE__ */ new Set();
    this.event = new FlagDispatcher();
    this.markDirty = () => this.event.raise();
    this.invokable = this.invoke.bind(this);
    Object.defineProperty(this.invokable, "context", {
      value: this
    });
    Object.defineProperty(this.invokable, "toPromise", {
      value: this.toPromise.bind(this)
    });
  }
  invoke() {
  }
  startCollecting() {
    if (_DependencyContext.collectionSet.has(this)) {
      throw new DetailedError("A circular dependency occurred between signals.", `This can happen when signals reference each other in a loop.
        Try using the attached stack trace to locate said loop.`);
    }
    _DependencyContext.collectionSet.add(this);
    _DependencyContext.collectionStack.push(this);
  }
  finishCollecting() {
    _DependencyContext.collectionSet.delete(this);
    if (_DependencyContext.collectionStack.pop() !== this) {
      throw new Error("collectStart/collectEnd was called out of order.");
    }
  }
  clearDependencies() {
    this.dependencies.forEach((dep) => dep.unsubscribe(this.markDirty));
    this.dependencies.clear();
  }
  collect() {
    const signal = _DependencyContext.collectionStack.at(-1);
    if (signal) {
      signal.dependencies.add(this.event.subscribable);
      this.event.subscribe(signal.markDirty);
    }
  }
  dispose() {
    this.clearDependencies();
    this.event.clear();
    this.owner = null;
  }
  async toPromise() {
    do {
      await _DependencyContext.consumePromises();
      this.invokable();
    } while (_DependencyContext.hasPromises());
    return this.invokable;
  }
};
DependencyContext.collectionSet = /* @__PURE__ */ new Set();
DependencyContext.collectionStack = [];
DependencyContext.promises = [];

// lib/signals/symbols.js
var DEFAULT = Symbol.for("@motion-canvas/core/signals/default");

// lib/signals/utils.js
function isReactive(value) {
  return typeof value === "function";
}
function modify(value, modification) {
  return isReactive(value) ? () => modification(value()) : modification(value);
}
function unwrap(value) {
  return isReactive(value) ? value() : value;
}

// lib/signals/SignalContext.js
var SignalContext = class extends DependencyContext {
  constructor(initial, interpolation, owner = void 0, parser = (value) => value, extensions = {}) {
    super(owner);
    this.initial = initial;
    this.interpolation = interpolation;
    this.parser = parser;
    this.tweening = false;
    Object.defineProperty(this.invokable, "reset", {
      value: this.reset.bind(this)
    });
    Object.defineProperty(this.invokable, "save", {
      value: this.save.bind(this)
    });
    Object.defineProperty(this.invokable, "isInitial", {
      value: this.isInitial.bind(this)
    });
    if (this.initial !== void 0) {
      this.current = this.initial;
      this.markDirty();
      if (!isReactive(this.initial)) {
        this.last = this.parse(this.initial);
      }
    }
    this.extensions = {
      getter: this.getter.bind(this),
      setter: this.setter.bind(this),
      tweener: this.tweener.bind(this),
      ...extensions
    };
  }
  toSignal() {
    return this.invokable;
  }
  parse(value) {
    return this.parser(value);
  }
  set(value) {
    this.extensions.setter(value);
    return this.owner;
  }
  setter(value) {
    if (value === DEFAULT) {
      value = this.initial;
    }
    if (this.current === value) {
      return this.owner;
    }
    this.current = value;
    this.clearDependencies();
    if (!isReactive(value)) {
      this.last = this.parse(value);
    }
    this.markDirty();
    return this.owner;
  }
  get() {
    return this.extensions.getter();
  }
  getter() {
    if (this.event.isRaised() && isReactive(this.current)) {
      this.clearDependencies();
      this.startCollecting();
      try {
        this.last = this.parse(this.current());
      } catch (e) {
        useLogger().error({
          ...errorToLog(e),
          inspect: this.owner?.key
        });
      }
      this.finishCollecting();
    }
    this.event.reset();
    this.collect();
    return this.last;
  }
  invoke(value, duration, timingFunction = easeInOutCubic, interpolationFunction = this.interpolation) {
    if (value === void 0) {
      return this.get();
    }
    if (duration === void 0) {
      return this.set(value);
    }
    const queue = this.createQueue(timingFunction, interpolationFunction);
    return queue.to(value, duration);
  }
  createQueue(defaultTimingFunction, defaultInterpolationFunction) {
    const initial = this.get();
    const queue = [];
    const task = run("animation chain", function* animate() {
      while (queue.length > 0) {
        yield* queue.shift();
      }
    });
    task.to = (value, duration, timingFunction = defaultTimingFunction, interpolationFunction = defaultInterpolationFunction) => {
      defaultTimingFunction = timingFunction;
      defaultInterpolationFunction = interpolationFunction;
      queue.push(this.tween(value, duration, timingFunction, interpolationFunction));
      return task;
    };
    task.back = (time, timingFunction = defaultTimingFunction, interpolationFunction = defaultInterpolationFunction) => {
      defaultTimingFunction = timingFunction;
      defaultInterpolationFunction = interpolationFunction;
      queue.push(this.tween(initial, time, defaultTimingFunction, defaultInterpolationFunction));
      return task;
    };
    task.wait = (duration) => {
      queue.push(waitFor(duration));
      return task;
    };
    task.run = (generator) => {
      queue.push(generator);
      return task;
    };
    task.do = (callback) => {
      queue.push(run(function* () {
        callback();
      }));
      return task;
    };
    return task;
  }
  *tween(value, duration, timingFunction, interpolationFunction) {
    if (value === DEFAULT) {
      value = this.initial;
    }
    this.tweening = true;
    yield* this.extensions.tweener(value, duration, timingFunction, interpolationFunction);
    this.set(value);
    this.tweening = false;
  }
  *tweener(value, duration, timingFunction, interpolationFunction) {
    const from = this.get();
    yield* tween(duration, (v) => {
      this.set(interpolationFunction(from, this.parse(unwrap(value)), timingFunction(v)));
    });
  }
  dispose() {
    super.dispose();
    this.initial = void 0;
    this.current = void 0;
    this.last = void 0;
  }
  /**
   * Reset the signal to its initial value (if one has been set).
   *
   * @example
   * ```ts
   * const signal = createSignal(7);
   *
   * signal.reset();
   * // same as:
   * signal(7);
   * ```
   */
  reset() {
    if (this.initial !== void 0) {
      this.set(this.initial);
    }
    return this.owner;
  }
  /**
   * Compute the current value of the signal and immediately set it.
   *
   * @remarks
   * This method can be used to stop the signal from updating while keeping its
   * current value.
   *
   * @example
   * ```ts
   * signal.save();
   * // same as:
   * signal(signal());
   * ```
   */
  save() {
    return this.set(this.get());
  }
  /**
   * Check if the signal is currently using its initial value.
   *
   * @example
   * ```ts
   *
   * const signal = createSignal(0);
   * signal.isInitial(); // true
   *
   * signal(5);
   * signal.isInitial(); // false
   *
   * signal(DEFAULT);
   * signal.isInitial(); // true
   * ```
   */
  isInitial() {
    this.collect();
    return this.current === this.initial;
  }
  /**
   * Get the initial value of this signal.
   */
  getInitial() {
    return this.initial;
  }
  /**
   * Get the raw value of this signal.
   *
   * @remarks
   * If the signal was provided with a factory function, the function itself
   * will be returned, without invoking it.
   *
   * This method can be used to create copies of signals.
   *
   * @example
   * ```ts
   * const a = createSignal(2);
   * const b = createSignal(() => a);
   * // b() == 2
   *
   * const bClone = createSignal(b.raw());
   * // bClone() == 2
   *
   * a(4);
   * // b() == 4
   * // bClone() == 4
   * ```
   */
  raw() {
    return this.current;
  }
  /**
   * Is the signal undergoing a tween?
   */
  isTweening() {
    return this.tweening;
  }
};

// lib/signals/CompoundSignalContext.js
var CompoundSignalContext = class extends SignalContext {
  constructor(entries, parser, initial, interpolation, owner = void 0, extensions = {}) {
    var _a3;
    super(void 0, interpolation, owner, parser, extensions);
    this.entries = entries;
    this.signals = [];
    this.parser = parser;
    for (const entry of entries) {
      let key;
      let signal;
      if (Array.isArray(entry)) {
        [key, signal] = entry;
        (_a3 = signal.context).owner ?? (_a3.owner = this);
      } else {
        key = entry;
        signal = new SignalContext(modify(initial, (value) => parser(value)[entry]), map, owner ?? this.invokable).toSignal();
      }
      this.signals.push([key, signal]);
      Object.defineProperty(this.invokable, key, { value: signal });
    }
  }
  toSignal() {
    return this.invokable;
  }
  parse(value) {
    return this.parser(value);
  }
  getter() {
    return this.parse(Object.fromEntries(this.signals.map(([key, property]) => [key, property()])));
  }
  setter(value) {
    if (isReactive(value)) {
      for (const [key, property] of this.signals) {
        property(() => this.parser(value())[key]);
      }
    } else {
      const parsed = this.parse(value);
      for (const [key, property] of this.signals) {
        property(parsed[key]);
      }
    }
    return this.owner;
  }
  reset() {
    for (const [, signal] of this.signals) {
      signal.reset();
    }
    return this.owner;
  }
  save() {
    for (const [, signal] of this.signals) {
      signal.save();
    }
    return this.owner;
  }
  isInitial() {
    for (const [, signal] of this.signals) {
      if (!signal.isInitial()) {
        return false;
      }
    }
    return true;
  }
  raw() {
    return Object.fromEntries(this.signals.map(([key, property]) => [key, property.context.raw()]));
  }
};

// lib/signals/ComputedContext.js
var ComputedContext = class extends DependencyContext {
  constructor(factory, owner) {
    super(owner);
    this.factory = factory;
    this.markDirty();
  }
  toSignal() {
    return this.invokable;
  }
  dispose() {
    super.dispose();
    this.last = void 0;
  }
  invoke(...args) {
    if (this.event.isRaised()) {
      this.clearDependencies();
      this.startCollecting();
      try {
        this.last = this.factory(...args);
      } catch (e) {
        useLogger().error({
          ...errorToLog(e),
          inspect: this.owner?.key
        });
      }
      this.finishCollecting();
    }
    this.event.reset();
    this.collect();
    return this.last;
  }
};

// lib/signals/DeferredEffectContext.js
var DeferredEffectContext = class extends DependencyContext {
  constructor(callback) {
    super();
    this.callback = callback;
    this.update = () => {
      if (this.event.isRaised()) {
        this.clearDependencies();
        this.startCollecting();
        this.callback();
        this.finishCollecting();
        this.event.reset();
      }
    };
    this.unsubscribe = useThread().onDeferred.subscribe(this.update);
    this.markDirty();
  }
  dispose() {
    super.dispose();
    this.unsubscribe();
  }
};

// lib/signals/EffectContext.js
var EffectContext = class extends DependencyContext {
  constructor(callback) {
    super();
    this.callback = callback;
    this.update = () => {
      this.clearDependencies();
      this.startCollecting();
      this.callback();
      this.finishCollecting();
      this.event.reset();
    };
    this.event.subscribe(this.update);
    this.markDirty();
  }
};

// lib/signals/Vector2SignalContext.js
var Vector2SignalContext = class extends CompoundSignalContext {
  constructor(entries, parser, initial, interpolation, owner = void 0, extensions = {}) {
    super(entries, parser, initial, interpolation, owner, extensions);
    Object.defineProperty(this.invokable, "edit", {
      value: this.edit.bind(this)
    });
    Object.defineProperty(this.invokable, "mul", {
      value: this.mul.bind(this)
    });
    Object.defineProperty(this.invokable, "div", {
      value: this.div.bind(this)
    });
    Object.defineProperty(this.invokable, "add", {
      value: this.add.bind(this)
    });
    Object.defineProperty(this.invokable, "sub", {
      value: this.sub.bind(this)
    });
    Object.defineProperty(this.invokable, "dot", {
      value: this.dot.bind(this)
    });
    Object.defineProperty(this.invokable, "cross", {
      value: this.cross.bind(this)
    });
    Object.defineProperty(this.invokable, "mod", {
      value: this.mod.bind(this)
    });
  }
  toSignal() {
    return this.invokable;
  }
  edit(callback, duration, timingFunction, interpolationFunction) {
    const newValue = callback(this.get());
    return this.invoke(newValue, duration, timingFunction, interpolationFunction);
  }
  mul(value, duration, timingFunction, interpolationFunction) {
    const callback = (current) => current.mul(value);
    if (duration === void 0)
      return this.edit(callback);
    return this.edit(callback, duration, timingFunction, interpolationFunction);
  }
  div(value, duration, timingFunction, interpolationFunction) {
    const callback = (current) => current.div(value);
    if (duration === void 0)
      return this.edit(callback);
    return this.edit(callback, duration, timingFunction, interpolationFunction);
  }
  add(value, duration, timingFunction, interpolationFunction) {
    const callback = (current) => current.add(value);
    if (duration === void 0)
      return this.edit(callback);
    return this.edit(callback, duration, timingFunction, interpolationFunction);
  }
  sub(value, duration, timingFunction, interpolationFunction) {
    const callback = (current) => current.sub(value);
    if (duration === void 0)
      return this.edit(callback);
    return this.edit(callback, duration, timingFunction, interpolationFunction);
  }
  dot(value, duration, timingFunction, interpolationFunction) {
    const callback = (current) => current.dot(value);
    if (duration === void 0)
      return this.edit(callback);
    return this.edit(callback, duration, timingFunction, interpolationFunction);
  }
  cross(value, duration, timingFunction, interpolationFunction) {
    const callback = (current) => current.cross(value);
    if (duration === void 0)
      return this.edit(callback);
    return this.edit(callback, duration, timingFunction, interpolationFunction);
  }
  mod(value, duration, timingFunction, interpolationFunction) {
    const callback = (current) => current.mod(value);
    if (duration === void 0)
      return this.edit(callback);
    return this.edit(callback, duration, timingFunction, interpolationFunction);
  }
};

// lib/signals/createComputed.js
function createComputed(factory, owner) {
  return new ComputedContext(factory, owner).toSignal();
}

// lib/signals/createComputedAsync.js
function createComputedAsync(factory, initial = null) {
  let handle;
  const signal = createSignal(factory);
  return createComputed(() => {
    const promise = signal();
    if (!handle || handle.promise !== promise) {
      handle = ComputedContext.collectPromise(promise, handle?.value ?? initial);
    }
    return handle.value;
  });
}

// lib/signals/createDeferredEffect.js
function createDeferredEffect(callback) {
  const context = new DeferredEffectContext(callback);
  return () => context.dispose();
}

// lib/signals/createEffect.js
function createEffect(callback) {
  const context = new EffectContext(callback);
  return () => context.dispose();
}

// lib/signals/createSignal.js
function createSignal(initial, interpolation = deepLerp, owner) {
  return new SignalContext(initial, interpolation, owner).toSignal();
}

// lib/types/Spacing.js
var Spacing = class _Spacing {
  static createSignal(initial, interpolation = _Spacing.lerp) {
    return new CompoundSignalContext(["top", "right", "bottom", "left"], (value) => new _Spacing(value), initial, interpolation).toSignal();
  }
  static lerp(from, to, value) {
    return new _Spacing(map(from.top, to.top, value), map(from.right, to.right, value), map(from.bottom, to.bottom, value), map(from.left, to.left, value));
  }
  get x() {
    return this.left + this.right;
  }
  get y() {
    return this.top + this.bottom;
  }
  constructor(one = 0, two, three, four) {
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
    this.left = 0;
    if (one === void 0 || one === null) {
      return;
    }
    if (Array.isArray(one)) {
      four = one[3];
      three = one[2];
      two = one[1];
      one = one[0];
    }
    if (typeof one === "number") {
      this.top = one;
      this.right = two !== void 0 ? two : one;
      this.bottom = three !== void 0 ? three : one;
      this.left = four !== void 0 ? four : two !== void 0 ? two : one;
      return;
    }
    this.top = one.top;
    this.right = one.right;
    this.bottom = one.bottom;
    this.left = one.left;
  }
  lerp(to, value) {
    return _Spacing.lerp(this, to, value);
  }
  scale(value) {
    return new _Spacing(this.top * value, this.right * value, this.bottom * value, this.left * value);
  }
  addScalar(value) {
    return new _Spacing(this.top + value, this.right + value, this.bottom + value, this.left + value);
  }
  toSymbol() {
    return _Spacing.symbol;
  }
  toString() {
    return `Spacing(${this.top}, ${this.right}, ${this.bottom}, ${this.left})`;
  }
  toUniform(gl, location) {
    gl.uniform4f(location, this.top, this.right, this.bottom, this.left);
  }
  serialize() {
    return {
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      left: this.left
    };
  }
};
Spacing.symbol = Symbol.for("@motion-canvas/core/types/Spacing");

// lib/types/Type.js
var EPSILON = 1e-6;
function isType(value) {
  return value && typeof value === "object" && "toSymbol" in value;
}

// lib/types/Matrix2D.js
var Matrix2D = class _Matrix2D {
  static fromRotation(angle) {
    return _Matrix2D.identity.rotate(angle);
  }
  static fromTranslation(translation) {
    return _Matrix2D.identity.translate(new Vector2(translation));
  }
  static fromScaling(scale) {
    return _Matrix2D.identity.scale(new Vector2(scale));
  }
  get x() {
    return new Vector2(this.values[0], this.values[1]);
  }
  get y() {
    return new Vector2(this.values[2], this.values[3]);
  }
  get scaleX() {
    return this.values[0];
  }
  set scaleX(value) {
    this.values[0] = this.x.normalized.scale(value).x;
  }
  get skewX() {
    return this.values[1];
  }
  set skewX(value) {
    this.values[1] = value;
  }
  get scaleY() {
    return this.values[3];
  }
  set scaleY(value) {
    this.values[3] = this.y.normalized.scale(value).y;
  }
  get skewY() {
    return this.values[2];
  }
  set skewY(value) {
    this.values[2] = value;
  }
  get translateX() {
    return this.values[4];
  }
  set translateX(value) {
    this.values[4] = value;
  }
  get translateY() {
    return this.values[5];
  }
  set translateY(value) {
    this.values[5] = value;
  }
  get rotation() {
    return Vector2.degrees(this.values[0], this.values[1]);
  }
  set rotation(angle) {
    const result = this.rotate(angle - this.rotation);
    this.values[0] = result.values[0];
    this.values[1] = result.values[1];
    this.values[2] = result.values[2];
    this.values[3] = result.values[3];
  }
  get translation() {
    return new Vector2(this.values[4], this.values[5]);
  }
  set translation(translation) {
    const vec = new Vector2(translation);
    this.values[4] = vec.x;
    this.values[5] = vec.y;
  }
  get scaling() {
    return new Vector2(this.values[0], this.values[3]);
  }
  set scaling(value) {
    const scale = new Vector2(value);
    const x = new Vector2(this.values[0], this.values[1]).normalized;
    const y = new Vector2(this.values[2], this.values[3]).normalized;
    this.values[0] = x.x * scale.x;
    this.values[1] = x.y * scale.y;
    this.values[2] = y.x * scale.x;
    this.values[3] = y.y * scale.y;
  }
  /**
   * Get the inverse of the matrix.
   *
   * @remarks
   * If the matrix is not invertible, i.e. its determinant is `0`, this will
   * return `null`, instead.
   *
   * @example
   * ```ts
   * const matrix = new Matrix2D(
   *   [1, 2],
   *   [3, 4],
   *   [5, 6],
   * );
   *
   * const inverse = matrix.inverse;
   * // => Matrix2D(
   * //      [-2, 1],
   * //      [1.5, -0.5],
   * //      [1, -2],
   * //   )
   * ```
   */
  get inverse() {
    const aa = this.values[0], ab = this.values[1], ac = this.values[2], ad = this.values[3];
    const atx = this.values[4], aty = this.values[5];
    let det = aa * ad - ab * ac;
    if (!det) {
      return null;
    }
    det = 1 / det;
    return new _Matrix2D(ad * det, -ab * det, -ac * det, aa * det, (ac * aty - ad * atx) * det, (ab * atx - aa * aty) * det);
  }
  /**
   * Get the determinant of the matrix.
   */
  get determinant() {
    return this.values[0] * this.values[3] - this.values[1] * this.values[2];
  }
  get domMatrix() {
    return new DOMMatrix([
      this.values[0],
      this.values[1],
      this.values[2],
      this.values[3],
      this.values[4],
      this.values[5]
    ]);
  }
  constructor(a, b, c, d, tx, ty) {
    this.values = new Float32Array(6);
    if (arguments.length === 0) {
      this.values = new Float32Array([1, 0, 0, 1, 0, 0]);
      return;
    }
    if (arguments.length === 6) {
      this.values[0] = a;
      this.values[1] = b;
      this.values[2] = c;
      this.values[3] = d;
      this.values[4] = tx;
      this.values[5] = ty;
      return;
    }
    if (a instanceof DOMMatrix) {
      this.values[0] = a.m11;
      this.values[1] = a.m12;
      this.values[2] = a.m21;
      this.values[3] = a.m22;
      this.values[4] = a.m41;
      this.values[5] = a.m42;
      return;
    }
    if (a instanceof _Matrix2D) {
      this.values = a.values;
      return;
    }
    if (Array.isArray(a)) {
      if (a.length === 2) {
        this.values[0] = a[0];
        this.values[1] = a[1];
        this.values[2] = b[0];
        this.values[3] = b[1];
        this.values[4] = c[0];
        this.values[5] = c[1];
        return;
      }
      if (a.length === 3) {
        const x2 = new Vector2(a[0]);
        const y2 = new Vector2(a[1]);
        const z2 = new Vector2(a[2]);
        this.values[0] = x2.x;
        this.values[1] = x2.y;
        this.values[2] = y2.x;
        this.values[3] = y2.y;
        this.values[4] = z2.x;
        this.values[5] = z2.y;
        return;
      }
      this.values[0] = a[0];
      this.values[1] = a[1];
      this.values[2] = a[2];
      this.values[3] = a[3];
      this.values[4] = a[4];
      this.values[5] = a[5];
      return;
    }
    const x = new Vector2(a);
    const y = new Vector2(b);
    const z = new Vector2(c);
    this.values[0] = x.x;
    this.values[1] = x.y;
    this.values[2] = y.x;
    this.values[3] = y.y;
    this.values[4] = z.x;
    this.values[5] = z.y;
  }
  /**
   * Get the nth component vector of the matrix. Only defined for 0, 1, and 2.
   *
   * @example
   * ```ts
   * const matrix = new Matrix2D(
   *   [1, 0],
   *   [0, 0],
   *   [1, 0],
   * );
   *
   * const x = matrix.column(0);
   * // Vector2(1, 0)
   *
   * const y = matrix.column(1);
   * // Vector2(0, 0)
   *
   * const z = matrix.column(1);
   * // Vector2(1, 0)
   * ```
   *
   * @param index - The index of the component vector to retrieve.
   */
  column(index) {
    return new Vector2(this.values[index * 2], this.values[index * 2 + 1]);
  }
  /**
   * Returns the nth row of the matrix. Only defined for 0 and 1.
   *
   * @example
   * ```ts
   * const matrix = new Matrix2D(
   *   [1, 0],
   *   [0, 0],
   *   [1, 0],
   * );
   *
   * const firstRow = matrix.column(0);
   * // [1, 0, 1]
   *
   * const secondRow = matrix.column(1);
   * // [0, 0, 0]
   * ```
   *
   * @param index - The index of the row to retrieve.
   */
  row(index) {
    return [this.values[index], this.values[index + 2], this.values[index + 4]];
  }
  /**
   * Returns the matrix product of this matrix with the provided matrix.
   *
   * @remarks
   * This method returns a new matrix representing the result of the
   * computation. It will not modify the source matrix.
   *
   * @example
   * ```ts
   * const a = new Matrix2D(
   *   [1, 2],
   *   [0, 1],
   *   [1, 1],
   * );
   * const b = new Matrix2D(
   *   [2, 1],
   *   [1, 1],
   *   [1, 1],
   * );
   *
   * const result = a.mul(b);
   * // => Matrix2D(
   * //     [2, 5],
   * //     [1, 3],
   * //     [2, 4],
   * //   )
   * ```
   *
   * @param other - The matrix to multiply with
   */
  mul(other) {
    const a0 = this.values[0], a1 = this.values[1], a2 = this.values[2], a3 = this.values[3], a4 = this.values[4], a5 = this.values[5];
    const b0 = other.values[0], b1 = other.values[1], b2 = other.values[2], b3 = other.values[3], b4 = other.values[4], b5 = other.values[5];
    return new _Matrix2D(a0 * b0 + a2 * b1, a1 * b0 + a3 * b1, a0 * b2 + a2 * b3, a1 * b2 + a3 * b3, a0 * b4 + a2 * b5 + a4, a1 * b4 + a3 * b5 + a5);
  }
  /**
   * Rotate the matrix by the provided angle. By default, the angle is
   * provided in degrees.
   *
   * @remarks
   * This method returns a new matrix representing the result of the
   * computation. It will not modify the source matrix.
   *
   * @example
   * ```ts
   * const a = new Matrix2D(
   *   [1, 2],
   *   [3, 4],
   *   [5, 6],
   * );
   *
   * const result = a.rotate(90);
   * // => Matrix2D(
   * //     [3, 4],
   * //     [-1, -2],
   * //     [5, 6],
   * //   )
   *
   * // Provide the angle in radians
   * const result = a.rotate(Math.PI * 0.5, true);
   * // => Matrix2D(
   * //     [3, 4],
   * //     [-1, -2],
   * //     [5, 6],
   * //   )
   * ```
   *
   * @param angle - The angle by which to rotate the matrix.
   * @param degrees - Whether the angle is provided in degrees.
   */
  rotate(angle, degrees = true) {
    if (degrees) {
      angle *= DEG2RAD;
    }
    const a0 = this.values[0], a1 = this.values[1], a2 = this.values[2], a3 = this.values[3], a4 = this.values[4], a5 = this.values[5];
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    return new _Matrix2D(a0 * c + a2 * s, a1 * c + a3 * s, a0 * -s + a2 * c, a1 * -s + a3 * c, a4, a5);
  }
  /**
   * Scale the x and y component vectors of the matrix.
   *
   * @remarks
   * If `vec` is provided as a vector, the x and y component vectors of the
   * matrix will be scaled by the x and y parts of the vector, respectively.
   *
   * If `vec` is provided as a scalar, the x and y component vectors will be
   * scaled uniformly by this factor.
   *
   * This method returns a new matrix representing the result of the
   * computation. It will not modify the source matrix.
   *
   * @example
   * ```ts
   * const matrix = new Matrix2D(
   *   [1, 2],
   *   [3, 4],
   *   [5, 6],
   * );
   *
   * const result1 = matrix.scale([2, 3]);
   * // => new Matrix2D(
   * //      [2, 4],
   * //      [9, 12],
   * //      [5, 6],
   * //    )
   *
   * const result2 = matrix.scale(2);
   * // => new Matrix2D(
   * //      [2, 4],
   * //      [6, 8],
   * //      [5, 6],
   * //    )
   * ```
   *
   * @param vec - The factor by which to scale the matrix
   */
  scale(vec) {
    const v = new Vector2(vec);
    return new _Matrix2D(this.values[0] * v.x, this.values[1] * v.x, this.values[2] * v.y, this.values[3] * v.y, this.values[4], this.values[5]);
  }
  /**
   * Multiply each value of the matrix by a scalar.
   *
   * * @example
   * ```ts
   * const matrix = new Matrix2D(
   *   [1, 2],
   *   [3, 4],
   *   [5, 6],
   * );
   *
   * const result1 = matrix.mulScalar(2);
   * // => new Matrix2D(
   * //      [2, 4],
   * //      [6, 8],
   * //      [10, 12],
   * //    )
   * ```
   *
   * @param s - The value by which to scale each term
   */
  mulScalar(s) {
    return new _Matrix2D(this.values[0] * s, this.values[1] * s, this.values[2] * s, this.values[3] * s, this.values[4] * s, this.values[5] * s);
  }
  /**
   * Translate the matrix by the dimensions of the provided vector.
   *
   * @remarks
   * If `vec` is provided as a scalar, matrix will be translated uniformly
   * by this factor.
   *
   * This method returns a new matrix representing the result of the
   * computation. It will not modify the source matrix.
   *
   * @example
   * ```ts
   * const matrix = new Matrix2D(
   *   [1, 2],
   *   [3, 4],
   *   [5, 6],
   * );
   *
   * const result1 = matrix.translate([2, 3]);
   * // => new Matrix2D(
   * //      [1, 2],
   * //      [3, 4],
   * //      [16, 22],
   * //    )
   *
   * const result2 = matrix.translate(2);
   * // => new Matrix2D(
   * //      [1, 2],
   * //      [3, 4],
   * //      [13, 18],
   * //    )
   * ```
   *
   * @param vec - The vector by which to translate the matrix
   */
  translate(vec) {
    const v = new Vector2(vec);
    return new _Matrix2D(this.values[0], this.values[1], this.values[2], this.values[3], this.values[0] * v.x + this.values[2] * v.y + this.values[4], this.values[1] * v.x + this.values[3] * v.y + this.values[5]);
  }
  /**
   * Add the provided matrix to this matrix.
   *
   * @remarks
   * This method returns a new matrix representing the result of the
   * computation. It will not modify the source matrix.
   *
   * @example
   * ```ts
   * const a = new Matrix2D(
   *   [1, 2],
   *   [3, 4],
   *   [5, 6],
   * );
   * const a = new Matrix2D(
   *   [7, 8],
   *   [9, 10],
   *   [11, 12],
   * );
   *
   * const result = a.add(b);
   * // => Matrix2D(
   * //      [8, 10],
   * //      [12, 14],
   * //      [16, 18],
   * //    )
   * ```
   *
   * @param other - The matrix to add
   */
  add(other) {
    return new _Matrix2D(this.values[0] + other.values[0], this.values[1] + other.values[1], this.values[2] + other.values[2], this.values[3] + other.values[3], this.values[4] + other.values[4], this.values[5] + other.values[5]);
  }
  /**
   * Subtract the provided matrix from this matrix.
   *
   * @remarks
   * This method returns a new matrix representing the result of the
   * computation. It will not modify the source matrix.
   *
   * @example
   * ```ts
   * const a = new Matrix2D(
   *   [1, 2],
   *   [3, 4],
   *   [5, 6],
   * );
   * const a = new Matrix2D(
   *   [7, 8],
   *   [9, 10],
   *   [11, 12],
   * );
   *
   * const result = a.sub(b);
   * // => Matrix2D(
   * //      [-6, -6],
   * //      [-6, -6],
   * //      [-6, -6],
   * //    )
   * ```
   *
   * @param other - The matrix to subract
   */
  sub(other) {
    return new _Matrix2D(this.values[0] - other.values[0], this.values[1] - other.values[1], this.values[2] - other.values[2], this.values[3] - other.values[3], this.values[4] - other.values[4], this.values[5] - other.values[5]);
  }
  toSymbol() {
    return _Matrix2D.symbol;
  }
  toUniform(gl, location) {
    gl.uniformMatrix3fv(location, false, [
      this.values[0],
      this.values[1],
      0,
      this.values[2],
      this.values[3],
      0,
      this.values[4],
      this.values[5],
      1
    ]);
  }
  equals(other, threshold = EPSILON) {
    return Math.abs(this.values[0] - other.values[0]) <= threshold + Number.EPSILON && Math.abs(this.values[1] - other.values[1]) <= threshold + Number.EPSILON && Math.abs(this.values[2] - other.values[2]) <= threshold + Number.EPSILON && Math.abs(this.values[3] - other.values[3]) <= threshold + Number.EPSILON && Math.abs(this.values[4] - other.values[4]) <= threshold + Number.EPSILON && Math.abs(this.values[5] - other.values[5]) <= threshold + Number.EPSILON;
  }
  exactlyEquals(other) {
    return this.values[0] === other.values[0] && this.values[1] === other.values[1] && this.values[2] === other.values[2] && this.values[3] === other.values[3] && this.values[4] === other.values[4] && this.values[5] === other.values[5];
  }
};
Matrix2D.symbol = Symbol.for("@motion-canvas/core/types/Matrix2D");
Matrix2D.identity = new Matrix2D(1, 0, 0, 1, 0, 0);
Matrix2D.zero = new Matrix2D(0, 0, 0, 0, 0, 0);

// lib/types/Origin.js
var Center;
(function(Center2) {
  Center2[Center2["Vertical"] = 1] = "Vertical";
  Center2[Center2["Horizontal"] = 2] = "Horizontal";
})(Center || (Center = {}));
var Direction;
(function(Direction2) {
  Direction2[Direction2["Top"] = 4] = "Top";
  Direction2[Direction2["Bottom"] = 8] = "Bottom";
  Direction2[Direction2["Left"] = 16] = "Left";
  Direction2[Direction2["Right"] = 32] = "Right";
})(Direction || (Direction = {}));
var Origin;
(function(Origin2) {
  Origin2[Origin2["Middle"] = 3] = "Middle";
  Origin2[Origin2["Top"] = 5] = "Top";
  Origin2[Origin2["Bottom"] = 9] = "Bottom";
  Origin2[Origin2["Left"] = 18] = "Left";
  Origin2[Origin2["Right"] = 34] = "Right";
  Origin2[Origin2["TopLeft"] = 20] = "TopLeft";
  Origin2[Origin2["TopRight"] = 36] = "TopRight";
  Origin2[Origin2["BottomLeft"] = 24] = "BottomLeft";
  Origin2[Origin2["BottomRight"] = 40] = "BottomRight";
})(Origin || (Origin = {}));
function flipOrigin(origin, axis = Center.Horizontal | Center.Vertical) {
  if (axis & Center.Vertical) {
    if (origin & Direction.Top) {
      origin = origin & ~Direction.Top | Direction.Bottom;
    } else if (origin & Direction.Bottom) {
      origin = origin & ~Direction.Bottom | Direction.Top;
    }
  }
  if (axis & Center.Horizontal) {
    if (origin & Direction.Left) {
      origin = origin & ~Direction.Left | Direction.Right;
    } else if (origin & Direction.Right) {
      origin = origin & ~Direction.Right | Direction.Left;
    }
  }
  return origin;
}
function originToOffset(origin) {
  if (origin === Origin.Middle) {
    return Vector2.zero;
  }
  let x = 0;
  if (origin & Direction.Left) {
    x = -1;
  } else if (origin & Direction.Right) {
    x = 1;
  }
  let y = 0;
  if (origin & Direction.Top) {
    y = -1;
  } else if (origin & Direction.Bottom) {
    y = 1;
  }
  return new Vector2(x, y);
}

// lib/types/Vector.js
var Vector2 = class _Vector2 {
  static createSignal(initial, interpolation = _Vector2.lerp, owner) {
    return new Vector2SignalContext(["x", "y"], (value) => new _Vector2(value), initial, interpolation, owner).toSignal();
  }
  static lerp(from, to, value) {
    let valueX;
    let valueY;
    if (typeof value === "number") {
      valueX = valueY = value;
    } else {
      valueX = value.x;
      valueY = value.y;
    }
    return new _Vector2(map(from.x, to.x, valueX), map(from.y, to.y, valueY));
  }
  static arcLerp(from, to, value, reverse = false, ratio) {
    ratio ?? (ratio = from.sub(to).ctg);
    return _Vector2.lerp(from, to, arcLerp(value, reverse, ratio));
  }
  static createArcLerp(reverse, ratio) {
    return (from, to, value) => _Vector2.arcLerp(from, to, value, reverse, ratio);
  }
  /**
   * Interpolates between two vectors on the polar plane by interpolating
   * the angles and magnitudes of the vectors individually.
   *
   * @param from - The starting vector.
   * @param to - The target vector.
   * @param value - The t-value of the interpolation.
   * @param counterclockwise - Whether the vector should get rotated
   *                           counterclockwise. Defaults to `false`.
   * @param origin - The center of rotation. Defaults to the origin.
   *
   * @remarks
   * This function is useful when used in conjunction with {@link rotate} to
   * animate an object's position on a circular arc (see examples).
   *
   * @example
   * Animating an object in a circle around the origin
   * ```tsx
   * circle().position(
   *   circle().position().rotate(180),
   *   1,
   *   easeInOutCubic,
   *   Vector2.polarLerp
   * );
   * ```
   * @example
   * Rotating an object around the point `[-200, 100]`
   * ```ts
   * circle().position(
   *   circle().position().rotate(180, [-200, 100]),
   *   1,
   *   easeInOutCubic,
   *   Vector2.createPolarLerp(false, [-200, 100]),
   * );
   * ```
   * @example
   * Rotating an object counterclockwise around the origin
   * ```ts
   * circle().position(
   *   circle().position().rotate(180),
   *   1,
   *   easeInOutCubic,
   *   Vector2.createPolarLerp(true),
   * );
   * ```
   */
  static polarLerp(from, to, value, counterclockwise = false, origin = _Vector2.zero) {
    from = from.sub(origin);
    to = to.sub(origin);
    const fromAngle = from.degrees;
    let toAngle = to.degrees;
    const isCounterclockwise = fromAngle > toAngle;
    if (isCounterclockwise !== counterclockwise) {
      toAngle = toAngle + (counterclockwise ? -360 : 360);
    }
    const angle = map(fromAngle, toAngle, value) * DEG2RAD;
    const magnitude = map(from.magnitude, to.magnitude, value);
    return new _Vector2(magnitude * Math.cos(angle) + origin.x, magnitude * Math.sin(angle) + origin.y);
  }
  /**
   * Helper function to create a {@link Vector2.polarLerp} interpolation
   * function with additional parameters.
   *
   * @param counterclockwise - Whether the point should get rotated
   *                           counterclockwise.
   * @param center - The center of rotation. Defaults to the origin.
   */
  static createPolarLerp(counterclockwise = false, center = _Vector2.zero) {
    return (from, to, value) => _Vector2.polarLerp(from, to, value, counterclockwise, new _Vector2(center));
  }
  static fromOrigin(origin) {
    const position = new _Vector2();
    if (origin === Origin.Middle) {
      return position;
    }
    if (origin & Direction.Left) {
      position.x = -1;
    } else if (origin & Direction.Right) {
      position.x = 1;
    }
    if (origin & Direction.Top) {
      position.y = -1;
    } else if (origin & Direction.Bottom) {
      position.y = 1;
    }
    return position;
  }
  static fromScalar(value) {
    return new _Vector2(value, value);
  }
  static fromRadians(radians) {
    return new _Vector2(Math.cos(radians), Math.sin(radians));
  }
  static fromDegrees(degrees) {
    return _Vector2.fromRadians(degrees * DEG2RAD);
  }
  /**
   * Return the angle in radians between the vector described by x and y and the
   * positive x-axis.
   *
   * @param x - The x component of the vector.
   * @param y - The y component of the vector.
   */
  static radians(x, y) {
    return Math.atan2(y, x);
  }
  /**
   * Return the angle in degrees between the vector described by x and y and the
   * positive x-axis.
   *
   * @param x - The x component of the vector.
   * @param y - The y component of the vector.
   *
   * @remarks
   * The returned angle will be between -180 and 180 degrees.
   */
  static degrees(x, y) {
    return _Vector2.radians(x, y) * RAD2DEG;
  }
  static magnitude(x, y) {
    return Math.sqrt(x * x + y * y);
  }
  static squaredMagnitude(x, y) {
    return x * x + y * y;
  }
  static angleBetween(u, v) {
    return Math.acos(clamp(-1, 1, u.dot(v) / (u.magnitude * v.magnitude))) * (u.cross(v) >= 0 ? 1 : -1);
  }
  get width() {
    return this.x;
  }
  set width(value) {
    this.x = value;
  }
  get height() {
    return this.y;
  }
  set height(value) {
    this.y = value;
  }
  get magnitude() {
    return _Vector2.magnitude(this.x, this.y);
  }
  get squaredMagnitude() {
    return _Vector2.squaredMagnitude(this.x, this.y);
  }
  get normalized() {
    return this.scale(1 / _Vector2.magnitude(this.x, this.y));
  }
  get safe() {
    return new _Vector2(isNaN(this.x) ? 0 : this.x, isNaN(this.y) ? 0 : this.y);
  }
  get flipped() {
    return new _Vector2(-this.x, -this.y);
  }
  get floored() {
    return new _Vector2(Math.floor(this.x), Math.floor(this.y));
  }
  get rounded() {
    return new _Vector2(Math.round(this.x), Math.round(this.y));
  }
  get ceiled() {
    return new _Vector2(Math.ceil(this.x), Math.ceil(this.y));
  }
  get perpendicular() {
    return new _Vector2(this.y, -this.x);
  }
  /**
   * Return the angle in radians between the vector and the positive x-axis.
   */
  get radians() {
    return _Vector2.radians(this.x, this.y);
  }
  /**
   * Return the angle in degrees between the vector and the positive x-axis.
   *
   * @remarks
   * The returned angle will be between -180 and 180 degrees.
   */
  get degrees() {
    return _Vector2.degrees(this.x, this.y);
  }
  get ctg() {
    return this.x / this.y;
  }
  constructor(one, two) {
    this.x = 0;
    this.y = 0;
    if (one === void 0 || one === null) {
      return;
    }
    if (typeof one !== "object") {
      this.x = one;
      this.y = two ?? one;
      return;
    }
    if (Array.isArray(one)) {
      this.x = one[0];
      this.y = one[1];
      return;
    }
    if ("width" in one) {
      this.x = one.width;
      this.y = one.height;
      return;
    }
    this.x = one.x;
    this.y = one.y;
  }
  lerp(to, value) {
    return _Vector2.lerp(this, to, value);
  }
  getOriginOffset(origin) {
    const offset = _Vector2.fromOrigin(origin);
    offset.x *= this.x / 2;
    offset.y *= this.y / 2;
    return offset;
  }
  scale(value) {
    return new _Vector2(this.x * value, this.y * value);
  }
  transformAsPoint(matrix) {
    const m = new Matrix2D(matrix);
    return new _Vector2(this.x * m.scaleX + this.y * m.skewY + m.translateX, this.x * m.skewX + this.y * m.scaleY + m.translateY);
  }
  transform(matrix) {
    const m = new Matrix2D(matrix);
    return new _Vector2(this.x * m.scaleX + this.y * m.skewY, this.x * m.skewX + this.y * m.scaleY);
  }
  mul(possibleVector) {
    const vector = new _Vector2(possibleVector);
    return new _Vector2(this.x * vector.x, this.y * vector.y);
  }
  div(possibleVector) {
    const vector = new _Vector2(possibleVector);
    return new _Vector2(this.x / vector.x, this.y / vector.y);
  }
  add(possibleVector) {
    const vector = new _Vector2(possibleVector);
    return new _Vector2(this.x + vector.x, this.y + vector.y);
  }
  sub(possibleVector) {
    const vector = new _Vector2(possibleVector);
    return new _Vector2(this.x - vector.x, this.y - vector.y);
  }
  dot(possibleVector) {
    const vector = new _Vector2(possibleVector);
    return this.x * vector.x + this.y * vector.y;
  }
  cross(possibleVector) {
    const vector = new _Vector2(possibleVector);
    return this.x * vector.y - this.y * vector.x;
  }
  mod(possibleVector) {
    const vector = new _Vector2(possibleVector);
    return new _Vector2(this.x % vector.x, this.y % vector.y);
  }
  /**
   * Rotate the vector around a point by the provided angle.
   *
   * @param angle - The angle by which to rotate in degrees.
   * @param center - The center of rotation. Defaults to the origin.
   */
  rotate(angle, center = _Vector2.zero) {
    const originVector = new _Vector2(center);
    const matrix = Matrix2D.fromTranslation(originVector).rotate(angle).translate(originVector.flipped);
    return this.transformAsPoint(matrix);
  }
  addX(value) {
    return new _Vector2(this.x + value, this.y);
  }
  addY(value) {
    return new _Vector2(this.x, this.y + value);
  }
  /**
   * Transform the components of the vector.
   *
   * @example
   * Raise the components to the power of 2.
   * ```ts
   * const vector = new Vector2(2, 3);
   * const result = vector.transform(value => value ** 2);
   * ```
   *
   * @param callback - A callback to apply to each component.
   */
  map(callback) {
    return new _Vector2(callback(this.x, 0), callback(this.y, 1));
  }
  toSymbol() {
    return _Vector2.symbol;
  }
  toString() {
    return `Vector2(${this.x}, ${this.y})`;
  }
  toArray() {
    return [this.x, this.y];
  }
  toUniform(gl, location) {
    gl.uniform2f(location, this.x, this.y);
  }
  serialize() {
    return { x: this.x, y: this.y };
  }
  /**
   * Check if two vectors are exactly equal to each other.
   *
   * @remarks
   * If you need to compensate for floating point inaccuracies, use the
   * {@link equals} method, instead.
   *
   * @param other - The vector to compare.
   */
  exactlyEquals(other) {
    return this.x === other.x && this.y === other.y;
  }
  /**
   * Check if two vectors are equal to each other.
   *
   * @remarks
   * This method allows passing an allowed error margin when comparing vectors
   * to compensate for floating point inaccuracies. To check if two vectors are
   * exactly equal, use the {@link exactlyEquals} method, instead.
   *
   * @param other - The vector to compare.
   * @param threshold - The allowed error threshold when comparing the vectors.
   */
  equals(other, threshold = EPSILON) {
    return Math.abs(this.x - other.x) <= threshold + Number.EPSILON && Math.abs(this.y - other.y) <= threshold + Number.EPSILON;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }
};
Vector2.symbol = Symbol.for("@motion-canvas/core/types/Vector2");
Vector2.zero = new Vector2();
Vector2.one = new Vector2(1, 1);
Vector2.right = new Vector2(1, 0);
Vector2.left = new Vector2(-1, 0);
Vector2.up = new Vector2(0, 1);
Vector2.down = new Vector2(0, -1);
Vector2.top = new Vector2(0, -1);
Vector2.bottom = new Vector2(0, 1);
Vector2.topLeft = new Vector2(-1, -1);
Vector2.topRight = new Vector2(1, -1);
Vector2.bottomLeft = new Vector2(-1, 1);
Vector2.bottomRight = new Vector2(1, 1);

// lib/types/BBox.js
var BBox = class _BBox {
  static createSignal(initial, interpolation = _BBox.lerp) {
    return new CompoundSignalContext(["x", "y", "width", "height"], (value) => new _BBox(value), initial, interpolation).toSignal();
  }
  static lerp(from, to, value) {
    let valueX;
    let valueY;
    let valueWidth;
    let valueHeight;
    if (typeof value === "number") {
      valueX = valueY = valueWidth = valueHeight = value;
    } else if (value instanceof Vector2) {
      valueX = valueWidth = value.x;
      valueY = valueHeight = value.y;
    } else {
      valueX = value.x;
      valueY = value.y;
      valueWidth = value.width;
      valueHeight = value.height;
    }
    return new _BBox(map(from.x, to.x, valueX), map(from.y, to.y, valueY), map(from.width, to.width, valueWidth), map(from.height, to.height, valueHeight));
  }
  static arcLerp(from, to, value, reverse = false, ratio) {
    ratio ?? (ratio = (from.position.sub(to.position).ctg + from.size.sub(to.size).ctg) / 2);
    return _BBox.lerp(from, to, arcLerp(value, reverse, ratio));
  }
  static fromSizeCentered(size) {
    return new _BBox(-size.width / 2, -size.height / 2, size.width, size.height);
  }
  static fromPoints(...points) {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const point of points) {
      if (point.x > maxX) {
        maxX = point.x;
      }
      if (point.x < minX) {
        minX = point.x;
      }
      if (point.y > maxY) {
        maxY = point.y;
      }
      if (point.y < minY) {
        minY = point.y;
      }
    }
    return new _BBox(minX, minY, maxX - minX, maxY - minY);
  }
  static fromBBoxes(...boxes) {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const box of boxes) {
      const right = box.x + box.width;
      if (right > maxX) {
        maxX = right;
      }
      if (box.x < minX) {
        minX = box.x;
      }
      const bottom = box.y + box.height;
      if (bottom > maxY) {
        maxY = bottom;
      }
      if (box.y < minY) {
        minY = box.y;
      }
    }
    return new _BBox(minX, minY, maxX - minX, maxY - minY);
  }
  lerp(to, value) {
    return _BBox.lerp(this, to, value);
  }
  get position() {
    return new Vector2(this.x, this.y);
  }
  set position(value) {
    this.x = value.x;
    this.y = value.y;
  }
  get size() {
    return new Vector2(this.width, this.height);
  }
  get center() {
    return new Vector2(this.x + this.width / 2, this.y + this.height / 2);
  }
  get left() {
    return this.x;
  }
  set left(value) {
    this.width += this.x - value;
    this.x = value;
  }
  get right() {
    return this.x + this.width;
  }
  set right(value) {
    this.width = value - this.x;
  }
  get top() {
    return this.y;
  }
  set top(value) {
    this.height += this.y - value;
    this.y = value;
  }
  get bottom() {
    return this.y + this.height;
  }
  set bottom(value) {
    this.height = value - this.y;
  }
  get topLeft() {
    return this.position;
  }
  get topRight() {
    return new Vector2(this.x + this.width, this.y);
  }
  get bottomLeft() {
    return new Vector2(this.x, this.y + this.height);
  }
  get bottomRight() {
    return new Vector2(this.x + this.width, this.y + this.height);
  }
  get corners() {
    return [this.topLeft, this.topRight, this.bottomRight, this.bottomLeft];
  }
  get pixelPerfect() {
    return new _BBox(Math.floor(this.x), Math.floor(this.y), Math.ceil(this.width + 1), Math.ceil(this.height + 1));
  }
  constructor(one, two = 0, three = 0, four = 0) {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    if (one === void 0 || one === null) {
      return;
    }
    if (typeof one === "number") {
      this.x = one;
      this.y = two;
      this.width = three;
      this.height = four;
      return;
    }
    if (one instanceof Vector2) {
      this.x = one.x;
      this.y = one.y;
      if (two instanceof Vector2) {
        this.width = two.x;
        this.height = two.y;
      }
      return;
    }
    if (Array.isArray(one)) {
      this.x = one[0];
      this.y = one[1];
      this.width = one[2];
      this.height = one[3];
      return;
    }
    this.x = one.x;
    this.y = one.y;
    this.width = one.width;
    this.height = one.height;
  }
  transform(matrix) {
    return new _BBox(this.position.transformAsPoint(matrix), this.size.transform(matrix));
  }
  transformCorners(matrix) {
    return this.corners.map((corner) => corner.transformAsPoint(matrix));
  }
  /**
   * Expand the bounding box to accommodate the given spacing.
   *
   * @param value - The value to expand the bounding box by.
   */
  expand(value) {
    const spacing = new Spacing(value);
    const result = new _BBox(this);
    result.left -= spacing.left;
    result.top -= spacing.top;
    result.right += spacing.right;
    result.bottom += spacing.bottom;
    return result;
  }
  /**
   * {@inheritDoc expand}
   *
   * @deprecated Use {@link expand} instead.
   */
  addSpacing(value) {
    return this.expand(value);
  }
  includes(point) {
    return point.x >= this.x && point.x <= this.x + this.width && point.y >= this.y && point.y <= this.y + this.height;
  }
  intersects(other) {
    return this.left < other.right && this.right > other.left && this.top < other.bottom && this.bottom > other.top;
  }
  intersection(other) {
    const bbox = new _BBox();
    if (this.intersects(other)) {
      bbox.left = Math.max(this.left, other.left);
      bbox.top = Math.max(this.top, other.top);
      bbox.right = Math.min(this.right, other.right);
      bbox.bottom = Math.min(this.bottom, other.bottom);
    }
    return bbox;
  }
  union(other) {
    const bbox = new _BBox();
    bbox.left = Math.min(this.left, other.left);
    bbox.top = Math.min(this.top, other.top);
    bbox.right = Math.max(this.right, other.right);
    bbox.bottom = Math.max(this.bottom, other.bottom);
    return bbox;
  }
  toSymbol() {
    return _BBox.symbol;
  }
  toString() {
    return `BBox(${this.x}, ${this.y}, ${this.width}, ${this.height})`;
  }
  toUniform(gl, location) {
    gl.uniform4f(location, this.x, this.y, this.width, this.height);
  }
  serialize() {
    return { x: this.x, y: this.y, width: this.width, height: this.height };
  }
};
BBox.symbol = Symbol.for("@motion-canvas/core/types/Rect");

// lib/types/Color.js
var import_chroma_js = __toESM(require_chroma());
var ExtendedColor = (() => {
  import_chroma_js.Color.symbol = import_chroma_js.Color.prototype.symbol = Symbol.for("@motion-canvas/core/types/Color");
  import_chroma_js.Color.lerp = import_chroma_js.Color.prototype.lerp = (from, to, value, colorSpace = "lch") => {
    if (typeof from === "string") {
      from = new import_chroma_js.Color(from);
    }
    if (typeof to === "string") {
      to = new import_chroma_js.Color(to);
    }
    const fromIsColor = from instanceof import_chroma_js.Color;
    const toIsColor = to instanceof import_chroma_js.Color;
    if (!fromIsColor) {
      from = toIsColor ? to.alpha(0) : new import_chroma_js.Color("rgba(0, 0, 0, 0)");
    }
    if (!toIsColor) {
      to = fromIsColor ? from.alpha(0) : new import_chroma_js.Color("rgba(0, 0, 0, 0)");
    }
    return (0, import_chroma_js.mix)(from, to, value, colorSpace);
  };
  import_chroma_js.Color.createLerp = import_chroma_js.Color.prototype.createLerp = (colorSpace) => (from, to, value) => import_chroma_js.Color.lerp(from, to, value, colorSpace);
  import_chroma_js.Color.createSignal = (initial, interpolation = import_chroma_js.Color.lerp) => {
    return new SignalContext(initial, interpolation, void 0, (value) => new import_chroma_js.Color(value)).toSignal();
  };
  import_chroma_js.Color.prototype.toSymbol = () => {
    return import_chroma_js.Color.symbol;
  };
  import_chroma_js.Color.prototype.toUniform = function(gl, location) {
    gl.uniform4fv(location, this.gl());
  };
  import_chroma_js.Color.prototype.serialize = function() {
    return this.css();
  };
  import_chroma_js.Color.prototype.lerp = function(to, value, colorSpace) {
    return import_chroma_js.Color.lerp(this, to, value, colorSpace);
  };
  return import_chroma_js.Color;
})();

// lib/types/Matrix.js
function transformAngle(angle, matrix) {
  return Vector2.fromDegrees(angle).transform(matrix).degrees;
}
function transformScalar(scalar, matrix) {
  return Vector2.magnitude(matrix.m11, matrix.m12) * scalar;
}

// lib/meta/ColorMetaField.js
var ColorMetaField = class extends MetaField {
  constructor() {
    super(...arguments);
    this.type = ExtendedColor.symbol;
  }
  parse(value) {
    return value === null ? null : new ExtendedColor(value);
  }
  serialize() {
    return this.value.current?.serialize() ?? null;
  }
};

// lib/meta/EnumMetaField.js
var EnumMetaField = class _EnumMetaField extends MetaField {
  constructor(name, options, initial = options[0]?.value) {
    super(name, initial);
    this.options = options;
    this.type = _EnumMetaField.symbol;
  }
  set(value) {
    super.set(this.getOption(value)?.value);
  }
  parse(value) {
    return this.getOption(value)?.value;
  }
  getOption(value) {
    return this.options.find((option) => option.value === value) ?? this.options[0];
  }
};
EnumMetaField.symbol = Symbol.for("@motion-canvas/core/meta/EnumMetaField");

// lib/meta/ExporterMetaFile.js
var ExporterMetaField = class extends MetaField {
  /**
   * Triggered when the nested fields change.
   *
   * @eventProperty
   */
  get onFieldsChanged() {
    return this.fields.subscribable;
  }
  get options() {
    return this.optionFields[this.current];
  }
  constructor(name, project, current = 0) {
    const exporters = project.plugins.flatMap((plugin) => plugin.exporters?.(project) ?? []);
    const optionFields = exporters.map((exporter) => exporter.meta(project));
    const exporterField = new EnumMetaField("exporter", exporters.map((exporter) => ({
      value: exporter.id,
      text: exporter.displayName
    })), exporters[current]?.id);
    super(name, {
      name: exporterField.get(),
      options: optionFields[current]?.get()
    });
    this.current = current;
    this.type = Object;
    this.handleChange = () => {
      const value = this.exporterField.get();
      const index = Math.max(this.exporters.findIndex((exporter) => exporter.id === value), 0);
      if (this.current !== index) {
        this.options?.onChanged.unsubscribe(this.handleChange);
        this.current = index;
        this.options?.onChanged.subscribe(this.handleChange, false);
        this.fields.current = this.options ? [this.exporterField, this.options] : [this.exporterField];
      }
      this.value.current = {
        name: this.exporterField.get(),
        options: this.options?.get() ?? null
      };
    };
    this.exporters = exporters;
    this.exporterField = exporterField;
    this.exporterField.onChanged.subscribe(this.handleChange, false);
    this.exporterField.disable(optionFields.length < 2).space();
    this.optionFields = optionFields;
    this.fields = new ValueDispatcher([this.exporterField]);
    if (this.options) {
      this.options.onChanged.subscribe(this.handleChange, false);
      this.fields.current = [this.exporterField, this.options];
    }
  }
  set(value) {
    this.exporterField.set(value.name);
    this.options?.set(value.options ?? {});
  }
  serialize() {
    return {
      name: this.exporterField.serialize(),
      options: this.options?.serialize() ?? null
    };
  }
  clone() {
    return new this.constructor(this.name, this.exporters, this.current);
  }
};

// lib/meta/MetaFile.js
var _a2;
var MetaFile = class {
  constructor(name, source = false) {
    this.name = name;
    this.source = source;
    this.lock = new Semaphore();
    this.ignoreChange = false;
    this.cache = null;
    this.metaField = null;
    this.handleChanged = async () => {
      if (import.meta.hot && this.metaField && !this.ignoreChange) {
        const data = this.metaField.serialize();
        await this.lock.acquire();
        try {
          await this.saveData(data);
        } catch (e) {
          useLogger().error(e);
        }
        this.lock.release();
      }
    };
  }
  attach(field) {
    if (this.metaField)
      return;
    this.metaField = field;
    if (this.cache) {
      this.metaField.set(this.cache);
    }
    this.metaField?.onChanged.subscribe(this.handleChanged);
  }
  async saveData(data) {
    if (this.source === false) {
      return;
    }
    if (!this.source) {
      throw new Error(`The meta file for ${this.name} is missing.`);
    }
    if (_a2.sourceLookup[this.source]) {
      throw new Error(`Metadata for ${this.name} is already being updated`);
    }
    const source = this.source;
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        delete _a2.sourceLookup[source];
        reject(`Connection timeout when updating metadata for ${this.name}`);
      }, 1e3);
      _a2.sourceLookup[source] = () => {
        delete _a2.sourceLookup[source];
        resolve();
      };
      import.meta.hot.send("motion-canvas:meta", {
        source,
        data
      });
    });
  }
  /**
   * Load new metadata from a file.
   *
   * @remarks
   * This method is called during hot module replacement.
   *
   * @param data - New metadata.
   */
  loadData(data) {
    this.ignoreChange = true;
    this.cache = data;
    this.metaField?.set(data);
    this.ignoreChange = false;
  }
};
_a2 = MetaFile;
MetaFile.sourceLookup = {};
(() => {
  if (import.meta.hot) {
    import.meta.hot.on("motion-canvas:meta-ack", ({ source }) => {
      _a2.sourceLookup[source]?.();
    });
  }
})();

// lib/meta/NumberMetaField.js
var NumberMetaField = class extends MetaField {
  constructor() {
    super(...arguments);
    this.type = Number;
    this.presets = [];
  }
  parse(value) {
    let parsed = parseFloat(value);
    if (this.min !== void 0 && parsed < this.min) {
      parsed = this.min;
    }
    if (this.max !== void 0 && parsed > this.max) {
      parsed = this.max;
    }
    return parsed;
  }
  getPresets() {
    return this.presets;
  }
  setPresets(options) {
    this.presets = options;
    return this;
  }
  setRange(min, max) {
    this.min = min;
    this.max = max;
    return this;
  }
  getMin() {
    return this.min ?? -Infinity;
  }
  getMax() {
    return this.max ?? Infinity;
  }
};

// lib/meta/RangeMetaField.js
var RangeMetaField = class _RangeMetaField extends MetaField {
  constructor() {
    super(...arguments);
    this.type = _RangeMetaField.symbol;
  }
  parse(value) {
    return this.parseRange(Infinity, value[0], value[1] ?? Infinity);
  }
  /**
   * Convert the given range from frames to seconds and update this field.
   *
   * @remarks
   * This helper method applies additional validation to the range, preventing
   * it from overflowing the timeline.
   *
   * @param startFrame - The beginning of the range.
   * @param endFrame - The end of the range.
   * @param duration - The current duration in frames.
   * @param fps - The current framerate.
   */
  update(startFrame, endFrame, duration, fps) {
    this.value.current = this.parseRange(duration / fps - EPSILON, startFrame / fps - EPSILON, endFrame / fps - EPSILON);
  }
  parseRange(duration, startFrame = this.value.current[0], endFrame = this.value.current[1]) {
    startFrame = clamp(0, duration, startFrame);
    endFrame = clamp(0, duration, endFrame ?? Infinity);
    if (startFrame > endFrame) {
      [startFrame, endFrame] = [endFrame, startFrame];
    }
    if (endFrame >= duration) {
      endFrame = Infinity;
    }
    return [startFrame, endFrame];
  }
};
RangeMetaField.symbol = Symbol.for("@motion-canvas/core/meta/RangeMetaField");

// lib/meta/StringMetaField.js
var StringMetaField = class extends MetaField {
  constructor() {
    super(...arguments);
    this.type = String;
    this.presets = [];
  }
  getPresets() {
    return this.presets;
  }
  setPresets(options) {
    this.presets = options;
    return this;
  }
};

// lib/meta/Vector2MetaField.js
var Vector2MetaField = class extends MetaField {
  constructor() {
    super(...arguments);
    this.type = Vector2.symbol;
  }
  parse(value) {
    return new Vector2(value);
  }
  serialize() {
    return this.value.current.serialize();
  }
};

// lib/transitions/useTransition.js
function useTransition(current, previous, previousOnTop) {
  if (previous == null) {
    previous = () => {
    };
  }
  const scene = useScene();
  const prior = scene.previous;
  scene.previousOnTop = previousOnTop ?? false;
  const unsubPrev = prior?.lifecycleEvents.onBeforeRender.subscribe(previous);
  const unsubNext = scene.lifecycleEvents.onBeforeRender.subscribe(current);
  scene.enterInitial();
  return () => {
    scene.enterAfterTransitionIn();
    unsubPrev?.();
    unsubNext();
  };
}

// lib/transitions/fadeTransition.js
function* fadeTransition(duration = 0.6) {
  const progress = createSignal(0);
  const endTransition = useTransition((ctx) => {
    ctx.globalAlpha = progress();
  });
  yield* progress(1, duration);
  endTransition();
}

// lib/transitions/slideTransition.js
function* slideTransition(direction = Direction.Top, duration = 0.6) {
  const size = useScene().getRealSize();
  const position = size.getOriginOffset(direction).scale(2);
  const previousPosition = Vector2.createSignal();
  const currentPosition = Vector2.createSignal(position);
  const endTransition = useTransition((ctx) => ctx.translate(currentPosition.x(), currentPosition.y()), (ctx) => ctx.translate(previousPosition.x(), previousPosition.y()));
  yield* all(previousPosition(position.scale(-1), duration), currentPosition(Vector2.zero, duration));
  endTransition();
}

// lib/transitions/waitTransition.js
function* waitTransition(duration = 0.6, previousOnTop = true) {
  const endTransition = useTransition(() => {
  }, void 0, previousOnTop);
  yield* waitFor(duration);
  endTransition();
}

// lib/transitions/zoomInTransition.js
function* zoomInTransition(area, duration = 0.6) {
  const scale = useScene().getRealSize().div(area.size);
  const currentPosition = Vector2.createSignal(area.position);
  const currentScale = Vector2.createSignal(Vector2.one.div(scale));
  const previousPosition = Vector2.createSignal(0);
  const previousScale = Vector2.createSignal(1);
  const alpha = createSignal(0);
  const endTransition = useTransition((ctx) => {
    ctx.globalAlpha = clampRemap(0.1, 0.5, 0, 1, alpha());
    ctx.translate(currentPosition.x(), currentPosition.y());
    ctx.scale(currentScale.x(), currentScale.y());
  }, (ctx) => {
    ctx.globalAlpha = clampRemap(0.5, 0.9, 1, 0, alpha());
    ctx.translate(previousPosition.x(), previousPosition.y());
    ctx.scale(previousScale.x(), previousScale.y());
  });
  const timing = (v) => easeInOutCubic(v * v);
  yield* all(currentPosition(Vector2.zero, duration, timing), previousPosition(area.position.flipped.mul(scale), duration, timing), currentScale(1, duration, timing), previousScale(scale, duration, timing), alpha(1, duration, linear));
  endTransition();
}

// lib/transitions/zoomOutTransition.js
function* zoomOutTransition(area, duration = 0.6) {
  const scale = useScene().getRealSize().div(area.size);
  const currentPosition = Vector2.createSignal(area.position.flipped.mul(scale));
  const currentScale = Vector2.createSignal(scale);
  const previousPosition = Vector2.createSignal(0);
  const previousScale = Vector2.createSignal(1);
  const alpha = createSignal(0);
  const endTransition = useTransition((ctx) => {
    ctx.globalAlpha = clampRemap(0.1, 0.5, 0, 1, alpha());
    ctx.translate(currentPosition.x(), currentPosition.y());
    ctx.scale(currentScale.x(), currentScale.y());
  }, (ctx) => {
    ctx.globalAlpha = clampRemap(0.5, 0.9, 1, 0, alpha());
    ctx.translate(previousPosition.x(), previousPosition.y());
    ctx.scale(previousScale.x(), previousScale.y());
  });
  const timing = (v) => easeInOutCubic(Math.sqrt(v));
  yield* all(currentPosition(Vector2.zero, duration, timing), previousPosition(area.position, duration, timing), currentScale(1, duration, timing), previousScale(Vector2.one.div(scale), duration, timing), alpha(1, duration, linear));
  endTransition();
}
export {
  AsyncEventDispatcher,
  AudioManager,
  BBox,
  BeatSpring,
  BoolMetaField,
  BounceSpring,
  Center,
  ExtendedColor as Color,
  ColorMetaField,
  CompoundSignalContext,
  ComputedContext,
  DEFAULT,
  DEG2RAD,
  DefaultPlugin_default as DefaultPlugin,
  DeferredEffectContext,
  DependencyContext,
  DetailedError,
  Direction,
  EPSILON,
  EffectContext,
  EnumMetaField,
  EventDispatcher,
  EventDispatcherBase,
  ExperimentalError,
  ExporterMetaField,
  FlagDispatcher,
  GeneratorScene,
  ImageExporter,
  JumpSpring,
  LifecycleEvents,
  LogLevel,
  Logger,
  Matrix2D,
  MetaField,
  MetaFile,
  NumberMetaField,
  ObjectMetaField,
  Origin,
  PlaybackManager,
  PlaybackState,
  PlaybackStatus,
  Player,
  PlopSpring,
  Presenter,
  PresenterState,
  ProjectMetadata,
  RAD2DEG,
  Random,
  RangeMetaField,
  Renderer,
  RendererResult,
  RendererState,
  SceneRenderEvent,
  SceneState,
  Semaphore,
  Shaders,
  SharedWebGLContext,
  SignalContext,
  Slides,
  SmoothSpring,
  Spacing,
  Stage,
  StrikeSpring,
  StringMetaField,
  Subscribable,
  SubscribableValueEvent,
  SwingSpring,
  Thread,
  UNIFORM_DELTA_TIME,
  UNIFORM_DESTINATION_MATRIX,
  UNIFORM_DESTINATION_TEXTURE,
  UNIFORM_FRAME,
  UNIFORM_FRAMERATE,
  UNIFORM_RESOLUTION,
  UNIFORM_SOURCE_MATRIX,
  UNIFORM_SOURCE_TEXTURE,
  UNIFORM_TIME,
  ValueDispatcher,
  Variables,
  Vector2,
  Vector2MetaField,
  Vector2SignalContext,
  all,
  any,
  arcLerp,
  beginSlide,
  boolLerp,
  bootstrap,
  cancel,
  capitalize,
  chain,
  clamp,
  clampRemap,
  cos,
  createComputed,
  createComputedAsync,
  createDeferredEffect,
  createEaseInBack,
  createEaseInBounce,
  createEaseInElastic,
  createEaseInOutBack,
  createEaseInOutBounce,
  createEaseInOutElastic,
  createEaseOutBack,
  createEaseOutBounce,
  createEaseOutElastic,
  createEffect,
  createRef,
  createRefArray,
  createRefMap,
  createSceneMetadata,
  createSettingsMetadata,
  createSignal,
  debug,
  decorate,
  deepLerp,
  delay,
  deprecate,
  easeInBack,
  easeInBounce,
  easeInCirc,
  easeInCubic,
  easeInElastic,
  easeInExpo,
  easeInOutBack,
  easeInOutBounce,
  easeInOutCirc,
  easeInOutCubic,
  easeInOutElastic,
  easeInOutExpo,
  easeInOutQuad,
  easeInOutQuart,
  easeInOutQuint,
  easeInOutSine,
  easeInQuad,
  easeInQuart,
  easeInQuint,
  easeInSine,
  easeOutBack,
  easeOutBounce,
  easeOutCirc,
  easeOutCubic,
  easeOutElastic,
  easeOutExpo,
  easeOutQuad,
  easeOutQuart,
  easeOutQuint,
  easeOutSine,
  editorBootstrap,
  endPlayback,
  endScene,
  endThread,
  errorToLog,
  every,
  experimentalLog,
  fadeTransition,
  finishScene,
  flipOrigin,
  getContext,
  getImageData,
  getTaskName,
  isInspectable,
  isPromisable,
  isPromise,
  isProxyEnabled,
  isReactive,
  isThreadGenerator,
  isThreadable,
  isType,
  join,
  lazy,
  linear,
  loadAnimation,
  loadImage,
  loop,
  loopFor,
  loopUntil,
  makePlugin,
  makeProject,
  makeRef,
  makeRefs,
  makeSpring,
  map,
  modify,
  noop,
  originToOffset,
  range,
  remap,
  run,
  sequence,
  setTaskName,
  sin,
  slideTransition,
  spawn,
  spring,
  startPlayback,
  startScene,
  startThread,
  textLerp,
  threadable,
  threads,
  transformAngle,
  transformScalar,
  tween,
  unwrap,
  useContext,
  useContextAfter,
  useDuration,
  useLogger,
  usePlayback,
  useRandom,
  useScene,
  useThread,
  useTime,
  useTransition,
  viaProxy,
  waitFor,
  waitTransition,
  waitUntil,
  zoomInTransition,
  zoomOutTransition
};
/*! Bundled license information:

chroma-js/chroma.js:
  (**
   * chroma.js - JavaScript library for color conversions
   *
   * Copyright (c) 2011-2019, Gregor Aisch
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice, this
   * list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. The name Gregor Aisch may not be used to endorse or promote products
   * derived from this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
   * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
   * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
   * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   * -------------------------------------------------------
   *
   * chroma.js includes colors from colorbrewer2.org, which are released under
   * the following license:
   *
   * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
   * and The Pennsylvania State University.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
   * either express or implied. See the License for the specific
   * language governing permissions and limitations under the License.
   *
   * ------------------------------------------------------
   *
   * Named colors are taken from X11 Color Names.
   * http://www.w3.org/TR/css3-color/#svg-color
   *
   * @preserve
   *)
*/
