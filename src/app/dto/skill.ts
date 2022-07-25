import { Attribute } from "./attribute";
import { Die } from "./die";

export class Skill {

    constructor (public info: SkillInfo, 
                 public die: Die) {

    }

    public getId() {
        return this.info.id;
    }

    public getName() {
        return this.info.name;
    }

    public getDescription() {
        return this.info.description;
    }

    public getAttribute() {
        return this.info.attribute;
    }
}

export class SkillInfo {
    constructor (public id: Skills,
                 public name: string, 
                 public attribute: Attribute,
                 public description: string | null) {

    }
}

export enum Skills {
    ATHLETICS,
    COMMON_KNOWLEDGE,
    NOTICE,
    PERSUASION,
    STEALTH,

    FIGHTING,
    SHOOTING,
}
