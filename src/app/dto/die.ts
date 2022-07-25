export class Die {
    public side: number;

    private constructor (side: number) {
        this.side = side;
    }

    public static none() {
        return new Die(0);
    }

    public static d4() {
        return new Die(4);
    }

    public static d6() {
        return new Die(6);
    }
    
    public static d8() {
        return new Die(8);
    }

    public static d10() {
        return new Die(10);
    }

    public static d12() {
        return new Die(12);
    }

    public upgrade(): Die {
        switch (this.side) {
            case 0:
                return Die.d4();
            case 4:
                return Die.d6();
            case 6:
                return Die.d8();
            case 8:
                return Die.d10();
            case 10:
            case 12:
                return Die.d12();
            default:
                throw Error(`Cannot upgrade a D${this.side}`);
        }
    }

    public equals(die: Die) {
        return this.side === die.side;
    }


}