var MyClass = /** @class */ (function () {
    function MyClass() {
        this.username = 'user1';
        this.userid = 1;
        this.isactive = true;
    }
    MyClass.prototype.display = function () {
        console.log('Hello Iam Method');
    };
    return MyClass;
}());
var mc = new MyClass();
console.log(mc.username + ":: " + mc.userid + " :: " + mc.isactive);
mc.display();
