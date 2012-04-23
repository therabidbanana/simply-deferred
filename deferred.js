// Generated by CoffeeScript 1.3.1
(function() {
  var Deferred, _Deferred,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  _Deferred = (function() {

    _Deferred.name = '_Deferred';

    function _Deferred() {
      this.reject = __bind(this.reject, this);

      this.resolve = __bind(this.resolve, this);

      this.state = __bind(this.state, this);
      this._state = "pending";
    }

    _Deferred.prototype.state = function() {
      return this._state;
    };

    _Deferred.prototype.resolve = function() {
      if (this._state === "pending") {
        return this._state = "resolved";
      }
    };

    _Deferred.prototype.reject = function() {
      if (this._state === "pending") {
        return this._state = "rejected";
      }
    };

    return _Deferred;

  })();

  Deferred = function() {
    return new _Deferred();
  };

  exports.Deferred = Deferred;

}).call(this);