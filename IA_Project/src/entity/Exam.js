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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Question_1 = require("./Question");
var ExamDetails_1 = require("./ExamDetails");
var Exam = /** @class */ (function () {
    function Exam() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Exam.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ length: 1024 }),
        __metadata("design:type", String)
    ], Exam.prototype, "name", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Question_1.Question; }, function (question) { return question.exam; }),
        __metadata("design:type", Array)
    ], Exam.prototype, "questions", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return ExamDetails_1.ExamDetails; }, function (examDetails) { return examDetails.exam; }),
        __metadata("design:type", ExamDetails_1.ExamDetails)
    ], Exam.prototype, "examDetails", void 0);
    Exam = __decorate([
        typeorm_1.Entity()
    ], Exam);
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=Exam.js.map