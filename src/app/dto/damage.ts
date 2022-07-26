import { Die } from "./die";

export class Damage {

    public dice: Die[] = [];
    public modifier = 0;


    public static none(): Damage {
        return new Damage();
    }

}