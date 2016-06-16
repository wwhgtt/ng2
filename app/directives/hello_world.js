"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var helloWorld = (function () {
    function helloWorld() {
        this.names = ['武文海', '高添桃', '高文生', '诸葛亮', '刘备', '潘金莲', '西门庆'];
        this.works = ['诗人', '作家', '商人', '军师', '皇帝', '妇女', '官人'];
        this.changeName();
    }
    helloWorld.prototype.changeName = function () {
        var id = parseInt(Math.random() * this.names.length);
        var idx = parseInt(Math.random() * this.works.length);
        this.name = this.names[id];
        this.work = this.works[idx];
    };
    helloWorld = __decorate([
        core_1.Component({
            selector: 'hello-world',
            template: '<h1>hello {{name}} </h1>\
  			<button class="btn btn-success" (click)="changeName()">name</button>\
  			<h1>是{{work}}</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], helloWorld);
    return helloWorld;
}());
exports.helloWorld = helloWorld;
//# sourceMappingURL=hello_world.js.map