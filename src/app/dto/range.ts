export class Range {

    constructor (public short: number,
                 public medium: number,
                 public long: number) {

    }

    public static none(): Range {
        return new Range(0, 0, 0);
    }

    public isNone() {
        return this.long === 0 && 
               this.medium === 0 && 
               this.short === 0;
    }

}