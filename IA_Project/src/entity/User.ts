import {Entity, PrimaryColumn, Column, OneToMany} from "typeorm";
import {ExamDetails} from "./ExamDetails";

@Entity()
export abstract class User {

    @PrimaryColumn()
    email: string = "";

    @Column()
    firstName: string = "";

    @Column()
    lastName: string = "";

    @Column()
    age: number = 12;

    @Column()
    phoneNumber: number = 123456;

    @Column()
    password: string = "";

    @Column()
    cv: string = "";

    @OneToMany(type =>ExamDetails,examDetails=> examDetails.user)
    examDetails:ExamDetails[];


    @Column({default: ''})
    type: string = "";

}
