import { Die } from "./die";
import { Skill, Skills } from "./skill";

export class Character {
    public name: string;
    public race: string;
    public size: number = 0;
    
    public agility = Die.d4();
    public smarts = Die.d4();
    public spirit = Die.d4();
    public strength = Die.d4();
    public vigor = Die.d4();

    public skills: Skill[] = [];

    constructor(name: string, race: string) {
        this.name = name;
        this.race = race;
    }

    public getPace(): number {
        return 6;
    }

    public getParry(): number {
        const fighting: Skill | null = this.findSkill(Skills.FIGHTING);

        let parry = 2;
        if (fighting != null) {
            parry += fighting.die.side / 2;
        }
        return parry;
    }

    public getToughness(): number {
        return 2 + this.vigor.side / 2;
    }

    public findSkill(s: Skills): Skill | null {
        let skill: Skill | null = null;

        for (const loop of this.skills) {
          if (loop.getId() === s) {
            skill = loop;
            break;
          }
        }

        return skill;
    }
}