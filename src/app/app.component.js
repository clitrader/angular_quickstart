"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        //[]: attribute binding
        //(): event binding
        this.name = 'Angular';
        this.textColor = 'green';
        this.customers = [
            { id: 1, name: 'Ward' },
            { id: 2, name: 'Kevin' },
            { id: 3, name: 'Eric' },
            { id: 4, name: 'Sally' },
            { id: 5, name: 'Bob' },
            { id: 6, name: 'David' },
            { id: 7, name: 'Nancy' }
        ];
    }
    AppComponent.prototype.changeTextColor = function () {
        this.textColor = this.textColor === 'green' ? 'red' : 'blue';
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map