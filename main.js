(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/short-unique-id/dist/short-unique-id.js
  var require_short_unique_id = __commonJS({
    "node_modules/short-unique-id/dist/short-unique-id.js"(exports, module) {
      "use strict";
      var ShortUniqueId2 = (() => {
        var __defProp2 = Object.defineProperty;
        var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames2 = Object.getOwnPropertyNames;
        var __getOwnPropSymbols = Object.getOwnPropertySymbols;
        var __hasOwnProp2 = Object.prototype.hasOwnProperty;
        var __propIsEnum = Object.prototype.propertyIsEnumerable;
        var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
        var __spreadValues = (a3, b3) => {
          for (var prop in b3 || (b3 = {}))
            if (__hasOwnProp2.call(b3, prop))
              __defNormalProp(a3, prop, b3[prop]);
          if (__getOwnPropSymbols)
            for (var prop of __getOwnPropSymbols(b3)) {
              if (__propIsEnum.call(b3, prop))
                __defNormalProp(a3, prop, b3[prop]);
            }
          return a3;
        };
        var __export = (target, all) => {
          for (var name in all)
            __defProp2(target, name, { get: all[name], enumerable: true });
        };
        var __copyProps = (to, from, except, desc) => {
          if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames2(from))
              if (!__hasOwnProp2.call(to, key) && key !== except)
                __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
          }
          return to;
        };
        var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
        var __publicField = (obj, key, value) => {
          __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
          return value;
        };
        var src_exports = {};
        __export(src_exports, {
          DEFAULT_OPTIONS: () => DEFAULT_OPTIONS,
          DEFAULT_UUID_LENGTH: () => DEFAULT_UUID_LENGTH,
          default: () => ShortUniqueId3
        });
        var version = "5.0.3";
        var DEFAULT_UUID_LENGTH = 6;
        var DEFAULT_OPTIONS = {
          dictionary: "alphanum",
          shuffle: true,
          debug: false,
          length: DEFAULT_UUID_LENGTH,
          counter: 0
        };
        var _ShortUniqueId = class _ShortUniqueId {
          constructor(argOptions = {}) {
            __publicField(this, "counter");
            __publicField(this, "debug");
            __publicField(this, "dict");
            __publicField(this, "version");
            __publicField(this, "dictIndex", 0);
            __publicField(this, "dictRange", []);
            __publicField(this, "lowerBound", 0);
            __publicField(this, "upperBound", 0);
            __publicField(this, "dictLength", 0);
            __publicField(this, "uuidLength");
            __publicField(this, "_digit_first_ascii", 48);
            __publicField(this, "_digit_last_ascii", 58);
            __publicField(this, "_alpha_lower_first_ascii", 97);
            __publicField(this, "_alpha_lower_last_ascii", 123);
            __publicField(this, "_hex_last_ascii", 103);
            __publicField(this, "_alpha_upper_first_ascii", 65);
            __publicField(this, "_alpha_upper_last_ascii", 91);
            __publicField(this, "_number_dict_ranges", {
              digits: [this._digit_first_ascii, this._digit_last_ascii]
            });
            __publicField(this, "_alpha_dict_ranges", {
              lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
              upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
            });
            __publicField(this, "_alpha_lower_dict_ranges", {
              lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
            });
            __publicField(this, "_alpha_upper_dict_ranges", {
              upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
            });
            __publicField(this, "_alphanum_dict_ranges", {
              digits: [this._digit_first_ascii, this._digit_last_ascii],
              lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii],
              upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
            });
            __publicField(this, "_alphanum_lower_dict_ranges", {
              digits: [this._digit_first_ascii, this._digit_last_ascii],
              lowerCase: [this._alpha_lower_first_ascii, this._alpha_lower_last_ascii]
            });
            __publicField(this, "_alphanum_upper_dict_ranges", {
              digits: [this._digit_first_ascii, this._digit_last_ascii],
              upperCase: [this._alpha_upper_first_ascii, this._alpha_upper_last_ascii]
            });
            __publicField(this, "_hex_dict_ranges", {
              decDigits: [this._digit_first_ascii, this._digit_last_ascii],
              alphaDigits: [this._alpha_lower_first_ascii, this._hex_last_ascii]
            });
            __publicField(this, "_dict_ranges", {
              _number_dict_ranges: this._number_dict_ranges,
              _alpha_dict_ranges: this._alpha_dict_ranges,
              _alpha_lower_dict_ranges: this._alpha_lower_dict_ranges,
              _alpha_upper_dict_ranges: this._alpha_upper_dict_ranges,
              _alphanum_dict_ranges: this._alphanum_dict_ranges,
              _alphanum_lower_dict_ranges: this._alphanum_lower_dict_ranges,
              _alphanum_upper_dict_ranges: this._alphanum_upper_dict_ranges,
              _hex_dict_ranges: this._hex_dict_ranges
            });
            __publicField(this, "log", (...args) => {
              const finalArgs = [...args];
              finalArgs[0] = `[short-unique-id] ${args[0]}`;
              if (this.debug === true) {
                if (typeof console !== "undefined" && console !== null) {
                  return console.log(...finalArgs);
                }
              }
            });
            __publicField(this, "setDictionary", (dictionary2, shuffle2) => {
              let finalDict;
              if (dictionary2 && Array.isArray(dictionary2) && dictionary2.length > 1) {
                finalDict = dictionary2;
              } else {
                finalDict = [];
                let i4;
                this.dictIndex = i4 = 0;
                const rangesName = `_${dictionary2}_dict_ranges`;
                const ranges = this._dict_ranges[rangesName];
                Object.keys(ranges).forEach((rangeType) => {
                  const rangeTypeKey = rangeType;
                  this.dictRange = ranges[rangeTypeKey];
                  this.lowerBound = this.dictRange[0];
                  this.upperBound = this.dictRange[1];
                  for (this.dictIndex = i4 = this.lowerBound; this.lowerBound <= this.upperBound ? i4 < this.upperBound : i4 > this.upperBound; this.dictIndex = this.lowerBound <= this.upperBound ? i4 += 1 : i4 -= 1) {
                    finalDict.push(String.fromCharCode(this.dictIndex));
                  }
                });
              }
              if (shuffle2) {
                const PROBABILITY = 0.5;
                finalDict = finalDict.sort(() => Math.random() - PROBABILITY);
              }
              this.dict = finalDict;
              this.dictLength = this.dict.length;
              this.setCounter(0);
            });
            __publicField(this, "seq", () => {
              return this.sequentialUUID();
            });
            __publicField(this, "sequentialUUID", () => {
              let counterDiv;
              let counterRem;
              let id = "";
              counterDiv = this.counter;
              do {
                counterRem = counterDiv % this.dictLength;
                counterDiv = Math.trunc(counterDiv / this.dictLength);
                id += this.dict[counterRem];
              } while (counterDiv !== 0);
              this.counter += 1;
              return id;
            });
            __publicField(this, "rnd", (uuidLength = this.uuidLength || DEFAULT_UUID_LENGTH) => {
              return this.randomUUID(uuidLength);
            });
            __publicField(this, "randomUUID", (uuidLength = this.uuidLength || DEFAULT_UUID_LENGTH) => {
              let id;
              let randomPartIdx;
              let j2;
              if (uuidLength === null || typeof uuidLength === "undefined" || uuidLength < 1) {
                throw new Error("Invalid UUID Length Provided");
              }
              const isPositive = uuidLength >= 0;
              id = "";
              for (j2 = 0; j2 < uuidLength; j2 += 1) {
                randomPartIdx = parseInt((Math.random() * this.dictLength).toFixed(0), 10) % this.dictLength;
                id += this.dict[randomPartIdx];
              }
              return id;
            });
            __publicField(this, "fmt", (format, date) => {
              return this.formattedUUID(format, date);
            });
            __publicField(this, "formattedUUID", (format, date) => {
              const fnMap = {
                "$r": this.randomUUID,
                "$s": this.sequentialUUID,
                "$t": this.stamp
              };
              const result = format.replace(/\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g, (m2) => {
                const fn = m2.slice(0, 2);
                const len = parseInt(m2.slice(2), 10);
                if (fn === "$s") {
                  return fnMap[fn]().padStart(len, "0");
                }
                if (fn === "$t" && date) {
                  return fnMap[fn](len, date);
                }
                return fnMap[fn](len);
              });
              return result;
            });
            __publicField(this, "availableUUIDs", (uuidLength = this.uuidLength) => {
              return parseFloat(Math.pow([...new Set(this.dict)].length, uuidLength).toFixed(0));
            });
            __publicField(this, "approxMaxBeforeCollision", (rounds = this.availableUUIDs(this.uuidLength)) => {
              return parseFloat(Math.sqrt(Math.PI / 2 * rounds).toFixed(20));
            });
            __publicField(this, "collisionProbability", (rounds = this.availableUUIDs(this.uuidLength), uuidLength = this.uuidLength) => {
              return parseFloat((this.approxMaxBeforeCollision(rounds) / this.availableUUIDs(uuidLength)).toFixed(20));
            });
            __publicField(this, "uniqueness", (rounds = this.availableUUIDs(this.uuidLength)) => {
              const score = parseFloat((1 - this.approxMaxBeforeCollision(rounds) / rounds).toFixed(20));
              return score > 1 ? 1 : score < 0 ? 0 : score;
            });
            __publicField(this, "getVersion", () => {
              return this.version;
            });
            __publicField(this, "stamp", (finalLength, date) => {
              const hexStamp = Math.floor(+(date || /* @__PURE__ */ new Date()) / 1e3).toString(16);
              if (typeof finalLength === "number" && finalLength === 0) {
                return hexStamp;
              }
              if (typeof finalLength !== "number" || finalLength < 10) {
                throw new Error([
                  "Param finalLength must be a number greater than or equal to 10,",
                  "or 0 if you want the raw hexadecimal timestamp"
                ].join("\n"));
              }
              const idLength = finalLength - 9;
              const rndIdx = Math.round(Math.random() * (idLength > 15 ? 15 : idLength));
              const id = this.randomUUID(idLength);
              return `${id.substring(0, rndIdx)}${hexStamp}${id.substring(rndIdx)}${rndIdx.toString(16)}`;
            });
            __publicField(this, "parseStamp", (suid, format) => {
              if (format && !/t0|t[1-9]\d{1,}/.test(format)) {
                throw new Error("Cannot extract date from a formated UUID with no timestamp in the format");
              }
              const stamp = format ? format.replace(/\$[rs]\d{0,}|\$t0|\$t[1-9]\d{1,}/g, (m2) => {
                const fnMap = {
                  "$r": (len2) => [...Array(len2)].map(() => "r").join(""),
                  "$s": (len2) => [...Array(len2)].map(() => "s").join(""),
                  "$t": (len2) => [...Array(len2)].map(() => "t").join("")
                };
                const fn = m2.slice(0, 2);
                const len = parseInt(m2.slice(2), 10);
                return fnMap[fn](len);
              }).replace(/^(.*?)(t{8,})(.*)$/g, (_m, p1, p22) => {
                return suid.substring(p1.length, p1.length + p22.length);
              }) : suid;
              if (stamp.length === 8) {
                return new Date(parseInt(stamp, 16) * 1e3);
              }
              if (stamp.length < 10) {
                throw new Error("Stamp length invalid");
              }
              const rndIdx = parseInt(stamp.substring(stamp.length - 1), 16);
              return new Date(parseInt(stamp.substring(rndIdx, rndIdx + 8), 16) * 1e3);
            });
            __publicField(this, "setCounter", (counter2) => {
              this.counter = counter2;
            });
            const options = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS), argOptions);
            this.counter = 0;
            this.debug = false;
            this.dict = [];
            this.version = version;
            const {
              dictionary,
              shuffle,
              length,
              counter
            } = options;
            this.uuidLength = length;
            this.setDictionary(dictionary, shuffle);
            this.setCounter(counter);
            this.debug = options.debug;
            this.log(this.dict);
            this.log(`Generator instantiated with Dictionary Size ${this.dictLength} and counter set to ${this.counter}`);
            this.log = this.log.bind(this);
            this.setDictionary = this.setDictionary.bind(this);
            this.setCounter = this.setCounter.bind(this);
            this.seq = this.seq.bind(this);
            this.sequentialUUID = this.sequentialUUID.bind(this);
            this.rnd = this.rnd.bind(this);
            this.randomUUID = this.randomUUID.bind(this);
            this.fmt = this.fmt.bind(this);
            this.formattedUUID = this.formattedUUID.bind(this);
            this.availableUUIDs = this.availableUUIDs.bind(this);
            this.approxMaxBeforeCollision = this.approxMaxBeforeCollision.bind(this);
            this.collisionProbability = this.collisionProbability.bind(this);
            this.uniqueness = this.uniqueness.bind(this);
            this.getVersion = this.getVersion.bind(this);
            this.stamp = this.stamp.bind(this);
            this.parseStamp = this.parseStamp.bind(this);
            return this;
          }
        };
        __publicField(_ShortUniqueId, "default", _ShortUniqueId);
        var ShortUniqueId3 = _ShortUniqueId;
        return __toCommonJS(src_exports);
      })();
      typeof module != "undefined" && (module.exports = ShortUniqueId2.default), typeof window != "undefined" && (ShortUniqueId2 = ShortUniqueId2.default);
    }
  });

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (t.ShadyCSS === void 0 || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t3, e4, o4) {
      if (this._$cssResult$ = true, o4 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3, this.t = e4;
    }
    get styleSheet() {
      let t3 = this.o;
      const s4 = this.t;
      if (e && t3 === void 0) {
        const e4 = s4 !== void 0 && s4.length === 1;
        e4 && (t3 = o.get(s4)), t3 === void 0 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o.set(s4, t3));
      }
      return t3;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t3) => new n(typeof t3 == "string" ? t3 : t3 + "", void 0, s);
  var S = (s4, o4) => {
    if (e)
      s4.adoptedStyleSheets = o4.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
    else
      for (const e4 of o4) {
        const o5 = document.createElement("style"), n4 = t.litNonce;
        n4 !== void 0 && o5.setAttribute("nonce", n4), o5.textContent = e4.cssText, s4.appendChild(o5);
      }
  };
  var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e4 = "";
    for (const s4 of t4.cssRules)
      e4 += s4.cssText;
    return r(e4);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t3, s4) => t3;
  var u = { toAttribute(t3, s4) {
    switch (s4) {
      case Boolean:
        t3 = t3 ? l : null;
        break;
      case Object:
      case Array:
        t3 = t3 == null ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, s4) {
    let i4 = t3;
    switch (s4) {
      case Boolean:
        i4 = t3 !== null;
        break;
      case Number:
        i4 = t3 === null ? null : Number(t3);
        break;
      case Object:
      case Array:
        try {
          i4 = JSON.parse(t3);
        } catch (t4) {
          i4 = null;
        }
    }
    return i4;
  } };
  var f = (t3, s4) => !i2(t3, s4);
  var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var b = class extends HTMLElement {
    static addInitializer(t3) {
      this._$Ei(), (this.l ??= []).push(t3);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t3, s4 = y) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.elementProperties.set(t3, s4), !s4.noAccessor) {
        const i4 = Symbol(), r5 = this.getPropertyDescriptor(t3, i4, s4);
        r5 !== void 0 && e2(this.prototype, t3, r5);
      }
    }
    static getPropertyDescriptor(t3, s4, i4) {
      const { get: e4, set: h3 } = r2(this.prototype, t3) ?? { get() {
        return this[s4];
      }, set(t4) {
        this[s4] = t4;
      } };
      return { get() {
        return e4?.call(this);
      }, set(s5) {
        const r5 = e4?.call(this);
        h3.call(this, s5), this.requestUpdate(t3, r5, i4);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      return this.elementProperties.get(t3) ?? y;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties")))
        return;
      const t3 = n2(this);
      t3.finalize(), t3.l !== void 0 && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized")))
        return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t4 = this.properties, s4 = [...h(t4), ...o2(t4)];
        for (const i4 of s4)
          this.createProperty(i4, t4[i4]);
      }
      const t3 = this[Symbol.metadata];
      if (t3 !== null) {
        const s4 = litPropertyMetadata.get(t3);
        if (s4 !== void 0)
          for (const [t4, i4] of s4)
            this.elementProperties.set(t4, i4);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t4, s4] of this.elementProperties) {
        const i4 = this._$Eu(t4, s4);
        i4 !== void 0 && this._$Eh.set(i4, t4);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i4 = [];
      if (Array.isArray(s4)) {
        const e4 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e4)
          i4.unshift(c(s5));
      } else
        s4 !== void 0 && i4.push(c(s4));
      return i4;
    }
    static _$Eu(t3, s4) {
      const i4 = s4.attribute;
      return i4 === false ? void 0 : typeof i4 == "string" ? i4 : typeof t3 == "string" ? t3.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$Eg = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
    }
    addController(t3) {
      (this._$ES ??= []).push(t3), this.renderRoot !== void 0 && this.isConnected && t3.hostConnected?.();
    }
    removeController(t3) {
      this._$ES?.splice(this._$ES.indexOf(t3) >>> 0, 1);
    }
    _$E_() {
      const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i4 of s4.keys())
        this.hasOwnProperty(i4) && (t3.set(i4, this[i4]), delete this[i4]);
      t3.size > 0 && (this._$Ep = t3);
    }
    createRenderRoot() {
      const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t3, this.constructor.elementStyles), t3;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$ES?.forEach((t3) => t3.hostConnected?.());
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      this._$ES?.forEach((t3) => t3.hostDisconnected?.());
    }
    attributeChangedCallback(t3, s4, i4) {
      this._$AK(t3, i4);
    }
    _$EO(t3, s4) {
      const i4 = this.constructor.elementProperties.get(t3), e4 = this.constructor._$Eu(t3, i4);
      if (e4 !== void 0 && i4.reflect === true) {
        const r5 = (i4.converter?.toAttribute !== void 0 ? i4.converter : u).toAttribute(s4, i4.type);
        this._$Em = t3, r5 == null ? this.removeAttribute(e4) : this.setAttribute(e4, r5), this._$Em = null;
      }
    }
    _$AK(t3, s4) {
      const i4 = this.constructor, e4 = i4._$Eh.get(t3);
      if (e4 !== void 0 && this._$Em !== e4) {
        const t4 = i4.getPropertyOptions(e4), r5 = typeof t4.converter == "function" ? { fromAttribute: t4.converter } : t4.converter?.fromAttribute !== void 0 ? t4.converter : u;
        this._$Em = e4, this[e4] = r5.fromAttribute(s4, t4.type), this._$Em = null;
      }
    }
    requestUpdate(t3, s4, i4, e4 = false, r5) {
      if (t3 !== void 0) {
        if (i4 ??= this.constructor.getPropertyOptions(t3), !(i4.hasChanged ?? f)(e4 ? r5 : this[t3], s4))
          return;
        this.C(t3, s4, i4);
      }
      this.isUpdatePending === false && (this._$Eg = this._$EP());
    }
    C(t3, s4, i4) {
      this._$AL.has(t3) || this._$AL.set(t3, s4), i4.reflect === true && this._$Em !== t3 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t3);
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$Eg;
      } catch (t4) {
        Promise.reject(t4);
      }
      const t3 = this.scheduleUpdate();
      return t3 != null && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending)
        return;
      if (!this.hasUpdated) {
        if (this._$Ep) {
          for (const [t5, s5] of this._$Ep)
            this[t5] = s5;
          this._$Ep = void 0;
        }
        const t4 = this.constructor.elementProperties;
        if (t4.size > 0)
          for (const [s5, i4] of t4)
            i4.wrapped !== true || this._$AL.has(s5) || this[s5] === void 0 || this.C(s5, this[s5], i4);
      }
      let t3 = false;
      const s4 = this._$AL;
      try {
        t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), this._$ES?.forEach((t4) => t4.hostUpdate?.()), this.update(s4)) : this._$ET();
      } catch (s5) {
        throw t3 = false, this._$ET(), s5;
      }
      t3 && this._$AE(s4);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      this._$ES?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$ET() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$Eg;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      this._$Ej &&= this._$Ej.forEach((t4) => this._$EO(t4, this[t4])), this._$ET();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.0");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = t2.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
  var e3 = "$lit$";
  var h2 = `lit$${(Math.random() + "").slice(9)}$`;
  var o3 = "?" + h2;
  var n3 = `<${o3}>`;
  var r3 = document;
  var l2 = () => r3.createComment("");
  var c3 = (t3) => t3 === null || typeof t3 != "object" && typeof t3 != "function";
  var a2 = Array.isArray;
  var u2 = (t3) => a2(t3) || typeof t3?.[Symbol.iterator] == "function";
  var d2 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = (t3) => (i4, ...s4) => ({ _$litType$: t3, strings: i4, values: s4 });
  var x = y2(1);
  var b2 = y2(2);
  var w = Symbol.for("lit-noChange");
  var T = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var E = r3.createTreeWalker(r3, 129);
  function C(t3, i4) {
    if (!Array.isArray(t3) || !t3.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return s2 !== void 0 ? s2.createHTML(i4) : i4;
  }
  var P = (t3, i4) => {
    const s4 = t3.length - 1, o4 = [];
    let r5, l3 = i4 === 2 ? "<svg>" : "", c4 = f2;
    for (let i5 = 0; i5 < s4; i5++) {
      const s5 = t3[i5];
      let a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s5.length && (c4.lastIndex = y3, u3 = c4.exec(s5), u3 !== null); )
        y3 = c4.lastIndex, c4 === f2 ? u3[1] === "!--" ? c4 = v : u3[1] !== void 0 ? c4 = _ : u3[2] !== void 0 ? ($.test(u3[2]) && (r5 = RegExp("</" + u3[2], "g")), c4 = m) : u3[3] !== void 0 && (c4 = m) : c4 === m ? u3[0] === ">" ? (c4 = r5 ?? f2, d3 = -1) : u3[1] === void 0 ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = u3[3] === void 0 ? m : u3[3] === '"' ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r5 = void 0);
      const x2 = c4 === m && t3[i5 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === f2 ? s5 + n3 : d3 >= 0 ? (o4.push(a3), s5.slice(0, d3) + e3 + s5.slice(d3) + h2 + x2) : s5 + h2 + (d3 === -2 ? i5 : x2);
    }
    return [C(t3, l3 + (t3[s4] || "<?>") + (i4 === 2 ? "</svg>" : "")), o4];
  };
  var V = class {
    constructor({ strings: t3, _$litType$: s4 }, n4) {
      let r5;
      this.parts = [];
      let c4 = 0, a3 = 0;
      const u3 = t3.length - 1, d3 = this.parts, [f3, v2] = P(t3, s4);
      if (this.el = V.createElement(f3, n4), E.currentNode = this.el.content, s4 === 2) {
        const t4 = this.el.content.firstChild;
        t4.replaceWith(...t4.childNodes);
      }
      for (; (r5 = E.nextNode()) !== null && d3.length < u3; ) {
        if (r5.nodeType === 1) {
          if (r5.hasAttributes())
            for (const t4 of r5.getAttributeNames())
              if (t4.endsWith(e3)) {
                const i4 = v2[a3++], s5 = r5.getAttribute(t4).split(h2), e4 = /([.?@])?(.*)/.exec(i4);
                d3.push({ type: 1, index: c4, name: e4[2], strings: s5, ctor: e4[1] === "." ? k : e4[1] === "?" ? H : e4[1] === "@" ? I : R }), r5.removeAttribute(t4);
              } else
                t4.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r5.removeAttribute(t4));
          if ($.test(r5.tagName)) {
            const t4 = r5.textContent.split(h2), s5 = t4.length - 1;
            if (s5 > 0) {
              r5.textContent = i3 ? i3.emptyScript : "";
              for (let i4 = 0; i4 < s5; i4++)
                r5.append(t4[i4], l2()), E.nextNode(), d3.push({ type: 2, index: ++c4 });
              r5.append(t4[s5], l2());
            }
          }
        } else if (r5.nodeType === 8)
          if (r5.data === o3)
            d3.push({ type: 2, index: c4 });
          else {
            let t4 = -1;
            for (; (t4 = r5.data.indexOf(h2, t4 + 1)) !== -1; )
              d3.push({ type: 7, index: c4 }), t4 += h2.length - 1;
          }
        c4++;
      }
    }
    static createElement(t3, i4) {
      const s4 = r3.createElement("template");
      return s4.innerHTML = t3, s4;
    }
  };
  function N(t3, i4, s4 = t3, e4) {
    if (i4 === w)
      return i4;
    let h3 = e4 !== void 0 ? s4._$Co?.[e4] : s4._$Cl;
    const o4 = c3(i4) ? void 0 : i4._$litDirective$;
    return h3?.constructor !== o4 && (h3?._$AO?.(false), o4 === void 0 ? h3 = void 0 : (h3 = new o4(t3), h3._$AT(t3, s4, e4)), e4 !== void 0 ? (s4._$Co ??= [])[e4] = h3 : s4._$Cl = h3), h3 !== void 0 && (i4 = N(t3, h3._$AS(t3, i4.values), h3, e4)), i4;
  }
  var S2 = class {
    constructor(t3, i4) {
      this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i4;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t3) {
      const { el: { content: i4 }, parts: s4 } = this._$AD, e4 = (t3?.creationScope ?? r3).importNode(i4, true);
      E.currentNode = e4;
      let h3 = E.nextNode(), o4 = 0, n4 = 0, l3 = s4[0];
      for (; l3 !== void 0; ) {
        if (o4 === l3.index) {
          let i5;
          l3.type === 2 ? i5 = new M(h3, h3.nextSibling, this, t3) : l3.type === 1 ? i5 = new l3.ctor(h3, l3.name, l3.strings, this, t3) : l3.type === 6 && (i5 = new L(h3, this, t3)), this._$AV.push(i5), l3 = s4[++n4];
        }
        o4 !== l3?.index && (h3 = E.nextNode(), o4++);
      }
      return E.currentNode = r3, e4;
    }
    p(t3) {
      let i4 = 0;
      for (const s4 of this._$AV)
        s4 !== void 0 && (s4.strings !== void 0 ? (s4._$AI(t3, s4, i4), i4 += s4.strings.length - 2) : s4._$AI(t3[i4])), i4++;
    }
  };
  var M = class {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t3, i4, s4, e4) {
      this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t3, this._$AB = i4, this._$AM = s4, this.options = e4, this._$Cv = e4?.isConnected ?? true;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i4 = this._$AM;
      return i4 !== void 0 && t3?.nodeType === 11 && (t3 = i4.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i4 = this) {
      t3 = N(this, t3, i4), c3(t3) ? t3 === T || t3 == null || t3 === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t3 !== this._$AH && t3 !== w && this._(t3) : t3._$litType$ !== void 0 ? this.g(t3) : t3.nodeType !== void 0 ? this.$(t3) : u2(t3) ? this.T(t3) : this._(t3);
    }
    k(t3) {
      return this._$AA.parentNode.insertBefore(t3, this._$AB);
    }
    $(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.k(t3));
    }
    _(t3) {
      this._$AH !== T && c3(this._$AH) ? this._$AA.nextSibling.data = t3 : this.$(r3.createTextNode(t3)), this._$AH = t3;
    }
    g(t3) {
      const { values: i4, _$litType$: s4 } = t3, e4 = typeof s4 == "number" ? this._$AC(t3) : (s4.el === void 0 && (s4.el = V.createElement(C(s4.h, s4.h[0]), this.options)), s4);
      if (this._$AH?._$AD === e4)
        this._$AH.p(i4);
      else {
        const t4 = new S2(e4, this), s5 = t4.u(this.options);
        t4.p(i4), this.$(s5), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i4 = A.get(t3.strings);
      return i4 === void 0 && A.set(t3.strings, i4 = new V(t3)), i4;
    }
    T(t3) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i4 = this._$AH;
      let s4, e4 = 0;
      for (const h3 of t3)
        e4 === i4.length ? i4.push(s4 = new M(this.k(l2()), this.k(l2()), this, this.options)) : s4 = i4[e4], s4._$AI(h3), e4++;
      e4 < i4.length && (this._$AR(s4 && s4._$AB.nextSibling, e4), i4.length = e4);
    }
    _$AR(t3 = this._$AA.nextSibling, i4) {
      for (this._$AP?.(false, true, i4); t3 && t3 !== this._$AB; ) {
        const i5 = t3.nextSibling;
        t3.remove(), t3 = i5;
      }
    }
    setConnected(t3) {
      this._$AM === void 0 && (this._$Cv = t3, this._$AP?.(t3));
    }
  };
  var R = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t3, i4, s4, e4, h3) {
      this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t3, this.name = i4, this._$AM = e4, this.options = h3, s4.length > 2 || s4[0] !== "" || s4[1] !== "" ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = T;
    }
    _$AI(t3, i4 = this, s4, e4) {
      const h3 = this.strings;
      let o4 = false;
      if (h3 === void 0)
        t3 = N(this, t3, i4, 0), o4 = !c3(t3) || t3 !== this._$AH && t3 !== w, o4 && (this._$AH = t3);
      else {
        const e5 = t3;
        let n4, r5;
        for (t3 = h3[0], n4 = 0; n4 < h3.length - 1; n4++)
          r5 = N(this, e5[s4 + n4], i4, n4), r5 === w && (r5 = this._$AH[n4]), o4 ||= !c3(r5) || r5 !== this._$AH[n4], r5 === T ? t3 = T : t3 !== T && (t3 += (r5 ?? "") + h3[n4 + 1]), this._$AH[n4] = r5;
      }
      o4 && !e4 && this.j(t3);
    }
    j(t3) {
      t3 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
    }
  };
  var k = class extends R {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t3) {
      this.element[this.name] = t3 === T ? void 0 : t3;
    }
  };
  var H = class extends R {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t3) {
      this.element.toggleAttribute(this.name, !!t3 && t3 !== T);
    }
  };
  var I = class extends R {
    constructor(t3, i4, s4, e4, h3) {
      super(t3, i4, s4, e4, h3), this.type = 5;
    }
    _$AI(t3, i4 = this) {
      if ((t3 = N(this, t3, i4, 0) ?? T) === w)
        return;
      const s4 = this._$AH, e4 = t3 === T && s4 !== T || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h3 = t3 !== T && (s4 === T || e4);
      e4 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var L = class {
    constructor(t3, i4, s4) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      N(this, t3);
    }
  };
  var Z = t2.litHtmlPolyfillSupport;
  Z?.(V, M), (t2.litHtmlVersions ??= []).push("3.0.0");
  var j = (t3, i4, s4) => {
    const e4 = s4?.renderBefore ?? i4;
    let h3 = e4._$litPart$;
    if (h3 === void 0) {
      const t4 = s4?.renderBefore ?? null;
      e4._$litPart$ = h3 = new M(i4.insertBefore(l2(), t4), t4, void 0, s4 ?? {});
    }
    return h3._$AI(t3), h3;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = class extends b {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t3 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t3.firstChild, t3;
    }
    update(t3) {
      const i4 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = j(i4, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return w;
    }
  };
  s3._$litElement$ = true, s3["finalized", "finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: s3 });
  var r4 = globalThis.litElementPolyfillSupport;
  r4?.({ LitElement: s3 });
  (globalThis.litElementVersions ??= []).push("4.0.0");

  // main.ts
  var import_short_unique_id = __toESM(require_short_unique_id());
  var uid = new import_short_unique_id.default({
    dictionary: "alpha"
  });
  var ReactiveBlob = class {
    constructor(template) {
      this.id = uid.rnd();
      this.queue = [];
      this.currentHTMLResults = /* @__PURE__ */ new Map([]);
      this.templateFunction = template;
    }
    selectElement(currentDom) {
      this.currentDom = currentDom;
      console.log(this.currentDom);
      let v2 = this.currentDom.querySelector("#" + this.id);
      if (v2) {
        this.self = v2;
        for (let i4 of this.queue) {
          i4();
        }
      }
      console.log("#" + this.id);
    }
    getHTML() {
      return x`
             <div id="${this.id}"></div>
        `;
    }
    append(data) {
      var id = uid.rnd();
      console.log(data);
      var d3 = this.templateFunction(data, id);
      var n4 = document.createElement("div");
      n4.id = id;
      this.currentHTMLResults.set(id, d3);
      console.log(this.self);
      if (this.self) {
        j(d3, n4);
        this.self.appendChild(n4);
      } else {
        this.queue.push(() => {
          j(d3, n4);
          this.self.appendChild(n4);
        });
      }
    }
    remove(id) {
      console.log("hey removing it");
      if (this.self) {
        var n4 = this.self.querySelector("#" + id);
        if (!n4) {
          return false;
        }
        console.log("removing", n4);
        this.self.removeChild(n4);
      } else {
        this.queue.push(() => {
          var n5 = this.self.querySelector("#" + id);
          this.self.removeChild(n5);
        });
      }
      return true;
    }
    replace(id, data) {
      console.log("hey replacing it");
      var d3 = this.templateFunction(data, id);
      if (this.self) {
        var n4 = this.self.querySelector("#" + id);
        if (!n4) {
          return false;
        }
        j(d3, n4);
      } else {
        this.queue.push(() => {
          var n5 = this.self.querySelector("#" + id);
          j(d3, n5);
        });
      }
      return true;
    }
  };
})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
