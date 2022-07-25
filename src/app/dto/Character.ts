import { Attribute } from "./Attribute";
import { Die } from "./Die";
import { Skill } from "./Skill";

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

        this.addBaseSkills();
    }

    private addBaseSkills() {
        this.skills.push({
            name: 'Athletics',
            attribute: Attribute.AGILITY,
            description: null,
            die: Die.d4()
        });

        this.skills.push({
            name: 'Common Knowledge',
            attribute: Attribute.SMARTS,
            description: null,
            die: Die.d4()
        });

        this.skills.push({
            name: 'Notice',
            attribute: Attribute.SMARTS,
            description: null,
            die: Die.d4()
        });

        this.skills.push({
            name: 'Persuasion',
            attribute: Attribute.SPIRIT,
            description: null,
            die: Die.d4()
        });

        this.skills.push({
            name: 'Stealth',
            attribute: Attribute.AGILITY,
            description: null,
            die: Die.d4()
        });
    }

    public getPace(): number {
        return 6;
    }

    public getParry(): number {
        return 2; // + fighting / 2
    }

    public getToughness(): number {
        return 2 + this.vigor.side / 2;
    }
}