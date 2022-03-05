(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n \r\n  <div class=\"row\" style=\"text-align:center\">\r\n    <img src=\"./assets/logo_gestart.png\">\r\n  </div>\r\n\r\n\r\n  <br>\r\n  <h3 style=\"margin-bottom: 2%; text-align:center\">A maior administradora de condomínios do Norte e Nordeste, líder no segmento com mais de 29 anos de experiência, mais de 500 clientes e mais de 35 mil unidades atendidas.</h3>\r\n\r\n\r\n  \r\n\r\n \r\n  \r\n  <div>\r\n\r\n    <div >\r\n      <form class=\"form-inline\" style=\" text-align:center\" #form=\"ngForm\">\r\n        <div id=\"inputs\" style=\"width: 100%;\" class=\"form-group\">\r\n          <!-- input sem o auto complete -->\r\n          <!-- <input type=\"text\" class=\"form-control\" name=\"endereco\" [(ngModel)]=\"endereco\" placeholder=\"Endereço\"\r\n            required> -->\r\n          <!-- caso queira inserir o select para mudar tipo de pesquisa -->\r\n          <!-- <select class=\"form-control\" (change)=\"mudarTipoBusca($event)\">\r\n            <option value=\"geocode\">\r\n              Endereço\r\n            </option>\r\n            <option value=\"establishment\">\r\n              Estabelecimento\r\n            </option>\r\n          </select> -->\r\n          <!-- input com auto complete -->\r\n          <AutocompleteComponent   (setAddress)=\"getAddress($event)\" adressType=\"{{tipoBusca}}\"></AutocompleteComponent>\r\n          <input type=\"number\" class=\"form-control col-12 col-sm-4 col-md-2\" name=\"distancia\" [(ngModel)]=\"distancia\" placeholder=\"Raio (Km)\"\r\n          required>\r\n          \r\n          <button type=\"button\" (click)=\"prepararEndereco()\" [disabled]=\"form.invalid\" class=\"btn btn-success col-12 btn-block col-md-1\">\r\n            <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-search\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <path fill-rule=\"evenodd\" d=\"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z\"/>\r\n              <path fill-rule=\"evenodd\" d=\"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z\"/>\r\n            </svg>\r\n          </button>\r\n         \r\n        </div>\r\n       \r\n        \r\n        <!-- <button type=\"button\" (click)=\"prepararEndereco()\" class=\"btn btn-success\" [disabled]=\"form.invalid\">\r\n          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-search\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path fill-rule=\"evenodd\" d=\"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z\"/>\r\n            <path fill-rule=\"evenodd\" d=\"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z\"/>\r\n          </svg></button> -->\r\n         \r\n      </form>\r\n    </div>\r\n  </div>\r\n \r\n  <br>\r\n\r\n  <br>\r\n  <div  class=\"row\">\r\n    <div >\r\n      <div class=\"text-center\">\r\n        <h3>\r\n          <div #gmap style=\"width:100%;height:300px\"></div>\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  <mat-expansion-panel  *ngIf=\"qtdUnidade\" >\r\n    <mat-expansion-panel-header style=\"text-align:center\">\r\n      <mat-panel-title   >\r\n            Condominios: {{locations.length}} | Unidades: {{qtdUnidade}} | Publico Alvo: {{qtdPublico}} \r\n      \r\n        </mat-panel-title>\r\n    \r\n    </mat-expansion-panel-header>\r\n\r\n\r\n    <!-- <div>\r\n      <nz-table #headerTable [nzData]=\"locations\" [nzPageSize]=\"50\" [nzScroll]=\"{ y: '240px' }\">\r\n        <thead>\r\n          \r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let cond of locations\">\r\n            <td> {{cond.NOMCON}}</td>\r\n            <td> {{cond.DISTANCIA | number : '1.2-2'}} KM</td>\r\n            <td> {{cond.QTDE_UNIDADES}}</td>\r\n            <td> {{cond.QTDE_UNIDADES * qtdPessoa | number:'1.0-0'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </nz-table>\r\n    </div> -->\r\n    <div>\r\n      <cdk-virtual-scroll-viewport  itemSize=\"5\" class=\"demo-infinite-container\">\r\n        <nz-list>\r\n          <nz-list-item  *cdkVirtualFor=\"let item of locations\">\r\n            <nz-skeleton *ngIf=\"!item\" [nzAvatar]=\"true\" [nzParagraph]=\"{ rows: 1 }\"></nz-skeleton>\r\n            <nz-list-item-meta\r\n              *ngIf=\"item\"\r\n              nzAvatar=\"./assets/condominio.png\"\r\n              [nzDescription]=\"item.NOMCON\"\r\n            >\r\n              <nz-list-item-meta-title>\r\n                <a>{{ item.DISTANCIA | number : '1.2-2'}} KM</a><a> | {{ item.QTDE_UNIDADES }} Unidades | {{item.QTDE_UNIDADES * qtdPessoa | number:'1.0-0'}} Publico/médio</a>\r\n              </nz-list-item-meta-title>\r\n            </nz-list-item-meta>\r\n          </nz-list-item>\r\n        </nz-list>\r\n      </cdk-virtual-scroll-viewport>\r\n    </div>\r\n   </mat-expansion-panel>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button,\r\ninput {\r\n  /* margin-left: 10px */\r\n}\r\n\r\n\r\n\r\n.mat-expansion-panel-header-title{\r\n  display: block;\r\n}\r\n\r\n\r\n\r\n.row{\r\n  display: block;\r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 577px){\r\n\t#inputs{\r\n\t\tmargin-left: 30%;\r\n\t}\r\n}\r\n\r\n\r\n\r\nh3 {\r\n\tcolor: gray;\r\n\tmargin-bottom: 0;\r\n\tfont-size: 20px;\r\n\r\n  }\r\n\r\n\r\n\r\n#valor{\r\n\tfont-size: 40px;\r\n\r\n  }\r\n\r\n\r\n\r\n.demo-infinite-container {\r\n\theight: 300px;\r\n\tborder: 1px solid #e8e8e8;\r\n\tborder-radius: 4px;\r\n  }\r\n\r\n\r\n\r\nnz-list {\r\n\tpadding: 24px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsc0JBQXNCO0FBQ3hCOzs7O0FBSUE7RUFDRSxjQUFjO0FBQ2hCOzs7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7O0FBRUE7Q0FDQztFQUNDLGdCQUFnQjtDQUNqQjtBQUNEOzs7O0FBSUU7Q0FDRCxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGVBQWU7O0VBRWQ7Ozs7QUFDQTtDQUNELGVBQWU7O0VBRWQ7Ozs7QUFFQTtDQUNELGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsa0JBQWtCO0VBQ2pCOzs7O0FBRUE7Q0FDRCxhQUFhO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbixcclxuaW5wdXQge1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAxMHB4ICovXHJcbn1cclxuXHJcblxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxle1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucm93e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzdweCl7XHJcblx0I2lucHV0c3tcclxuXHRcdG1hcmdpbi1sZWZ0OiAzMCU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiAgaDMge1xyXG5cdGNvbG9yOiBncmF5O1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cclxuICB9XHJcbiAgI3ZhbG9ye1xyXG5cdGZvbnQtc2l6ZTogNDBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuZGVtby1pbmZpbml0ZS1jb250YWluZXIge1xyXG5cdGhlaWdodDogMzAwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG5cclxuICBuei1saXN0IHtcclxuXHRwYWRkaW5nOiAyNHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_google_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/google-service.service */ "./src/app/service/google-service.service.ts");
/* harmony import */ var _service_gestart_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/gestart-services.service */ "./src/app/service/gestart-services.service.ts");
/* harmony import */ var alasql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! alasql */ "./node_modules/alasql/dist/alasql.min.js");
/* harmony import */ var alasql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alasql__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AppComponent = /** @class */ (function () {
    function AppComponent(googleMapsService, gestartService) {
        this.googleMapsService = googleMapsService;
        this.gestartService = gestartService;
        this.chart = [];
        this.qtdPessoa = 3.5;
        this.locations = [];
        this.tipoBusca = "geocode";
        this.markers = [];
        this.bairros = [];
        this.expanded = 1;
        this.markerTypes = [
            {
                text: "Parking",
                value: "parking_lot_maps.png",
            },
        ];
        this.selectedMarkerType = "";
        this.isHidden = false;
        this.switchValue = "false";
        this.array = [1, 2, 3, 4];
        this.listOfData = [];
        this.array2 = [
            {
                "quantidade": 29,
                "titulo": "Líder no segmento com mais de 29 anos de experiência, mais de 500 clientes e mais de 35 mil unidades atendidas.",
                "ano": 1998,
            },
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.pegarLocalizacaoAtual();
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        var mapProp = {
            center: new google.maps.LatLng(-3.747452, -38.510713),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        /*  this.teste();
          this.teste2();
          this.teste3()*/
        var data = [];
        for (var i = 0; i < 100; i++) {
            data.push({
                name: "Edward King " + i,
                age: 32,
                address: "London, Park Lane no. " + i
            });
        }
        this.listOfData = data;
    };
    /* teste() {
       var numero = document.getElementById('numero');
       var min = 1;
       var max = 700;
       var duração = 3000; // 5 segundos
     
       for (var i = min; i <= max; i++) {
         setTimeout(function(nr) {
           numero.innerHTML = nr;
         }, i * 2000 / max, i);
       }
     }
     teste2() {
       var numero2 = document.getElementById('numero2');
       var min = 1;
       var max = 493;
       var duração = 3000; // 5 segundos
     
       for (var i = min; i <= max; i++) {
         setTimeout(function(nr) {
           numero2.innerHTML = nr;
         }, i * 2000 / max, i);
       }
     }
     teste3() {
       var numero3 = document.getElementById('numero3');
       var min = 1;
       var max = 493;
       var duração = 3000; // 5 segundos
     
       for (var i = min; i <= max; i++) {
         setTimeout(function(nr) {
           numero3.innerHTML = nr;
         }, i * 2000 / max, i);
       }
     }*/
    AppComponent.prototype.getAddress = function (place) {
        this.endereco = place["formatted_address"];
        /* this.address = place["formatted_address"];
        this.phone = this.getPhone(place);
        this.formattedAddress = place["formatted_address"];
        this.zone.run(() => (this.formattedAddress = place["formatted_address"]));*/
    };
    AppComponent.prototype.mudarTipoBusca = function (e) {
        this.endereco = "";
        this.tipoBusca = e.target.value;
        this.googleMapsService.tipoDeVisualizacao.next(this.tipoBusca);
    };
    AppComponent.prototype.pegarLocalizacaoAtual = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            });
        }
        else {
            console.log("User not allow");
        }
    };
    AppComponent.prototype.prepararEndereco = function () {
        var _this = this;
        this.clearMarkers();
        this.novo_endereco = this.endereco.split(" ").join("+");
        this.googleMapsService
            .converterEndereco(this.novo_endereco)
            .subscribe(function (data) {
            _this.latitude = parseFloat(data["results"][0]["geometry"]["location"]["lat"].toString());
            _this.longitude = parseFloat(data["results"][0]["geometry"]["location"]["lng"].toString());
            _this.condominiosRaio();
        });
    };
    AppComponent.prototype.condominiosRaio = function () {
        var _this = this;
        this.gestartService
            .buscarCondominios(this.latitude, this.longitude, this.distancia)
            .subscribe(function (data) {
            _this.addListaCondominios(data);
            _this.bairros = alasql__WEBPACK_IMPORTED_MODULE_3___default()('select BAICON, SUM(QTDE_UNIDADES) as UNIDADES from ? GROUP BY BAICON', [data]);
            _this.setCenter();
        });
    };
    AppComponent.prototype.addListaCondominios = function (data) {
        this.locations = [];
        this.qtdUnidade = 0;
        for (var i = 0; i < data.length; i++) {
            this.qtdUnidade += parseInt(data[i]["QTDE_UNIDADES"]);
            var location_1 = new google.maps.LatLng(data[i]["LAT"], data[i]["LNG"]);
            this.locations.push(data[i]);
            this.addMarker(location_1, i);
        }
        this.qtdPublico = this.qtdPessoa * this.qtdUnidade;
    };
    AppComponent.prototype.inserirInfoWindow = function (index, marker, map) {
        var nome = this.locations[index]["NOMCON"];
        var bairro = this.locations[index]["BAICON"];
        var distancia = Math.round(parseFloat(this.locations[index]["DISTANCIA"].toString()));
        var unidades = this.locations[index]["QTDE_UNIDADES"];
        var publico = Math.round(unidades * this.qtdPessoa);
        var contentString = "<div id=\"iw-container\">\n   <div class=\"iw-title\">" + nome + "</div>\n   <div class=\"iw-content\">\n     <div>Bairro: " + bairro + "</div>\n     <div>Encontra-se a " + distancia + "km de distacia do ponto determinado, </div>\n\n     <p>atualmente conta com " + unidades + " unidades, alcan\u00E7ando uma m\u00E9dia de " + publico + " pessoas</p>\n    \n </div>";
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
        marker.addListener('mouseout', function () {
            infowindow.close();
        });
    };
    AppComponent.prototype.addMarker = function (location, index) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: "assets/iconverde.png",
            title: this.locations[index]["NOMCON"].toString() + " " +
                "|" + " " +
                this.locations[index]["QTDE_UNIDADES"].toString(),
        });
        this.inserirInfoWindow(index, marker, this.map);
        /* var circle = new google.maps.Circle({
           strokeColor: "#1E90FF", //cor da borda
           center: location,
           strokeOpacity: (this.qtdUnidade / 1000),
           fillOpacity: .3,
           strokeWeight: 2,
           map: this.map,
           radius: 400,    // 10 miles in metres Math.sqrt(this.qtdUnidade) * 100
           fillColor: '#FFD700'
         });
         circle.bindTo('center', marker, 'position');*/
    };
    AppComponent.prototype.setCenter = function () {
        this.map.setCenter(null);
        this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
        var location = new google.maps.LatLng(this.latitude, this.longitude);
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            title: "Você!",
            icon: "assets/logo.png",
            animation: google.maps.Animation.BOUNCE,
        });
        /*  var circle = new google.maps.Circle({
            strokeColor: "#1E90FF", //cor da borda
            center: location,
            strokeOpacity: (this.qtdUnidade / 1000),
            fillOpacity: .3,
            strokeWeight: 2,
            map: this.map,
            radius: Math.sqrt(citymap[city].population) * 100,    // 10 miles in metres Math.sqrt(this.qtdUnidade) * 100
            fillColor: '#FFD700',
          });
          circle.bindTo('center', marker, 'position');
          console.log(this.distancia * 0.62137)*/
        //this.addMarker(location);
    };
    AppComponent.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    /* addMaker() {
      for (let i = 0; i < this.locations.length; i++) {
        console.log(this.locations[i]);
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(
            parseFloat(this.locations[i]["LAT"].toString()),
            parseFloat(this.locations[i]["LNG"].toString())
          ),
          title:
            this.locations[i]["NOMCON"].toString() +
            "|" +
            this.locations[i]["QTDE_UNIDADES"].toString(),
          map: this.map,
          icon: "assets/logo.png",
        });
      }
    }*/
    AppComponent.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _service_google_service_service__WEBPACK_IMPORTED_MODULE_1__["GoogleServiceService"] },
        { type: _service_gestart_services_service__WEBPACK_IMPORTED_MODULE_2__["GestartServicesService"] }
    ]; };
    AppComponent.propDecorators = {
        gmapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["gmap", { static: true },] }],
        canvasRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['myCanvas',] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_google_service_service__WEBPACK_IMPORTED_MODULE_1__["GoogleServiceService"],
            _service_gestart_services_service__WEBPACK_IMPORTED_MODULE_2__["GestartServicesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _google_places_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google-places.component */ "./src/app/google-places.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm2015/expansion.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-card.js");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-table.js");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/list */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-list.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/fesm2015/scrolling.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _google_places_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NgZorroAntdModule"],
                ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__["NzCardModule"],
                ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableModule"],
                ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_15__["NzListModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"]
            ],
            providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__["en_US"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/google-places.component.ts":
/*!********************************************!*\
  !*** ./src/app/google-places.component.ts ***!
  \********************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_google_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/google-service.service */ "./src/app/service/google-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent(googleMapsService) {
        this.googleMapsService = googleMapsService;
        this.setAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AutocompleteComponent.prototype.ngOnInit = function () { };
    AutocompleteComponent.prototype.ngAfterViewInit = function () {
        // this.getPlaceAutocomplete();
        this.setarTipoPesquisa("establishment");
        this.setarTipoPesquisa("geocode");
        // por enquanto nao preciso dessa função, sendo utilizada apenas caso fosse usar BehaviorSubject
        //this.mudarTipodeBusca();
    };
    AutocompleteComponent.prototype.setarTipoPesquisa = function (tipo) {
        this.adressType = tipo;
        this.getPlaceAutocomplete();
    };
    //usando BehaviorSubject para alterar tipo de pesquisa atraves de um select
    AutocompleteComponent.prototype.mudarTipodeBusca = function () {
        var _this = this;
        this.googleMapsService.tipoDeVisualizacao.subscribe(function (value) {
            _this.adressType = value;
            _this.getPlaceAutocomplete();
        });
    };
    AutocompleteComponent.prototype.getPlaceAutocomplete = function () {
        var _this = this;
        console.log("entrou aqui--" + this.adressType);
        var autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement, {
            componentRestrictions: { country: "BR" },
            types: [this.adressType],
        });
        google.maps.event.addListener(autocomplete, "place_changed", function () {
            var place = autocomplete.getPlace();
            _this.invokeEvent(place);
        });
    };
    AutocompleteComponent.prototype.invokeEvent = function (place) {
        this.setAddress.emit(place);
    };
    AutocompleteComponent.ctorParameters = function () { return [
        { type: _service_google_service_service__WEBPACK_IMPORTED_MODULE_1__["GoogleServiceService"] }
    ]; };
    AutocompleteComponent.propDecorators = {
        adressType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        setAddress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        addresstext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["addresstext", { static: true },] }]
    };
    AutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "AutocompleteComponent",
            template: "\n    <input\n    class=\"form-control\"\n      name=\"endereco\"\n      type=\"text\"\n      [(ngModel)]=\"autocompleteInput\"\n      #addresstext\n    />\n  ",
        }),
        __metadata("design:paramtypes", [_service_google_service_service__WEBPACK_IMPORTED_MODULE_1__["GoogleServiceService"]])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/service/gestart-services.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/gestart-services.service.ts ***!
  \*****************************************************/
/*! exports provided: GestartServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestartServicesService", function() { return GestartServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GestartServicesService = /** @class */ (function () {
    function GestartServicesService(http) {
        this.http = http;
        this.API = "http://api.gestartapp.com.br:8080/geo/condominios/";
        this.KEY = "00269441-01A8-42F8-9A93-87A1EDD32C11/";
    }
    GestartServicesService.prototype.buscarCondominios = function (lat, lng, raio) {
        console.log("teste");
        return this.http.get(this.API + this.KEY + lat + "/" + lng + "/" + raio);
    };
    GestartServicesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GestartServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GestartServicesService);
    return GestartServicesService;
}());



/***/ }),

/***/ "./src/app/service/google-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/google-service.service.ts ***!
  \***************************************************/
/*! exports provided: GoogleServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleServiceService", function() { return GoogleServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleServiceService = /** @class */ (function () {
    function GoogleServiceService(http) {
        this.http = http;
        this.apiGeoCode = "https://maps.googleapis.com/maps/api/geocode/json?address=";
        this.KEY = "&key=AIzaSyAakgmLOzLaXeB5MxlBrkzJsxnvSwS_XuQ";
        this.tipoDeVisualizacao = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("geocode");
    }
    GoogleServiceService.prototype.converterEndereco = function (endereco) {
        return this.http.get(this.apiGeoCode + endereco + this.KEY);
    };
    GoogleServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GoogleServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GoogleServiceService);
    return GoogleServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wenderson.silveira\Documents\Gestart\GestartMaps\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map