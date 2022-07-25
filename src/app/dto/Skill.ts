import { Attribute } from "./Attribute";
import { Die } from "./Die";

export class Skill {

    constructor (public name: string, 
                 public attribute: Attribute,
                 public description: string | null, 
                 public die: Die) {

    }
}