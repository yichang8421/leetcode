/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
Array.prototype.myPush = function (item) {
    this[this.length] = item;
    return this.length

}

Array.prototype.myPop = function () {
    if (this.length < 0 && this.length >= Number.MAX_SAFE_INTEGER) return;
    let returnVal = this[this.length - 1];
    if (this.length > 0) this.length--;
    return returnVal
}

var backspaceCompare = function (s, t) {
    let Sstack = [], Tstack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '#') {
            Sstack.myPush(s[i]);
        } else if (Sstack) {
            Sstack.myPop();
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] !== '#') {
            Tstack.myPush(t[i]);
        } else if (Tstack) {
            Tstack.myPop();
        }
    }
    if (Sstack.length !== Tstack.length) return false;
    for (let i = 0; i < Sstack.length; i++) {
        if (Sstack[i] !== Tstack[i]) return false;
    }
    return true;
};