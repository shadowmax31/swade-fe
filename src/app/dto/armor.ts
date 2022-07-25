import { Die } from "./die";

export class Armor {
    public name = '';
    public requiredStr: Die = Die.none();
    public bonus = 0;
    public isShield = false;
    public isChest = false;
    public cover = 0;

    constructor() {

    }
}