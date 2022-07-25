import { Character } from "../../../dto/character";
import { Die } from "../../../dto/die";
import { Skill, SkillInfo, Skills } from "../../../dto/skill";
import { SkillService } from "../../../services/skill.service";

export class CharacterFactory {
    constructor (private skillService: SkillService) {

    }

    public create(name: string, race: string) {
        const c = new Character(name, race);

        c.skills = this.getBaseSkills();

        return c;
    }

    private getBaseSkills() {
        const skills: Skill[] = [];

        skills.push(this.createBaseSkill(this.skillService.get(Skills.ATHLETICS)));
        skills.push(this.createBaseSkill(this.skillService.get(Skills.COMMON_KNOWLEDGE)));
        skills.push(this.createBaseSkill(this.skillService.get(Skills.NOTICE)));
        skills.push(this.createBaseSkill(this.skillService.get(Skills.PERSUASION)));
        skills.push(this.createBaseSkill(this.skillService.get(Skills.STEALTH)));

        return skills;
    }

    private createBaseSkill(info: SkillInfo): Skill {
        return new Skill(info, Die.d4());
    }
}