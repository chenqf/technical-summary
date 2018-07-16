

Function.prototype.bind = function (context,...args) {
    let self = this;
    let F = function (...params) {
        return self.apply(this instanceof F ? this : context,[...args,...params]);
    };
    F.prototype = Object.create(self.prototype);
    return F;
};
