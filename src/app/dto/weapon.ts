import { Damage } from "./damage";
import { Die } from "./die";
import { Range } from "./range";

export class Weapon {
    public name: string = '';
    public damage = Damage.none();
    public range = Range.none();

    public ap = 0;
    public rof = 0;
    public shots = 0;
    public requiredStr = Die.none();

    public notes = '';

    constructor () {

    }
}