import {ChildEntity, JoinTable, ManyToMany} from "typeorm";
import {User} from "./User";
import {Position} from "./Position";

@ChildEntity()
export class HR_Account extends User{

    @ManyToMany(type => Position)
    @JoinTable()
    position: Position[];
}