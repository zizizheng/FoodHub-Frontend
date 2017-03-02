"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ContactComponent = (function () {
    function ContactComponent() {
        this.webDeveloper = [
            {
                name: 'Erica', title: 'ProjectManager', fb: '', github: '', web: '',
                photo: 'http://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png'
            },
            {
                name: 'AnChe', title: 'Backend Developer',
                fb: '',
                github: '',
                web: '',
                photo: 'app/img/anche.jpg'
            },
            {
                name: 'Zizi', title: 'Frontend Developer',
                fb: 'https://www.facebook.com/zizi.zheng.1',
                github: 'https://github.com/zizizheng',
                web: '',
                photo: 'app/img/zizi.jpg'
            }
        ];
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contact',
        templateUrl: "contact.component.html",
        styleUrls: ['contact.component.css']
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map