import { Armor } from "./armor";
import { Die } from "./die";
import { Edge } from "./edge";
import { Hindrance } from "./hindrance";
import { Skill, Skills } from "./skill";

export class Character {
    public name: string;
    public race: string;
    public size = 0;
    public advance = 0;
    
    public agility = Die.d4();
    public smarts = Die.d4();
    public spirit = Die.d4();
    public strength = Die.d4();
    public vigor = Die.d4();

    public skills: Skill[] = [];
    public armors: Armor[] = [];

    public hindrances: Hindrance[] = [];
    public edges: Edge[] = [];

    constructor(name: string, race: string) {
        this.name = name;
        this.race = race;
    }

    public getPace(): number {
        return 6;
    }

    public getParry(): number {
        const fighting: Skill | null = this.findSkill(Skills.FIGHTING);

        let parry = 2 + this.findShieldBonus();
        if (fighting != null) {
            parry += fighting.die.side / 2;
        }

        return parry;
    }

    public getToughness(): string {
        const armor = this.findChestBonus();
        const total = 2 + armor + this.vigor.side / 2;

        let str = total.toString();
        if (armor > 0) {
            str += ` (${armor})`;
        }

        return str;
    }

    private findChestBonus(): number {
        let bonus = 0;

        for (const a of this.armors) {
            if (a.isChest) {
                bonus = a.bonus;
                break;
            }
        }

        return bonus;
    }

    private findShieldBonus(): number {
        let bonus = 0;

        for (const a of this.armors) {
            if (a.isShield) {
                bonus = a.bonus;
                break;
            }
        }

        return bonus;
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