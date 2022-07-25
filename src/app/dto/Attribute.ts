export enum Attribute {
    AGILITY = "AGILITY",
    SMARTS = "SMARTS",
    SPIRIT = "SPIRIT",
    STRENGTH = "STRENGTH",
    VIGOR = "VIGOR",
}


export class AttributeUtils {
    public static toString(attr: Attribute) {
        switch (attr) {
            case Attribute.AGILITY:
                return "agi";
            case Attribute.SMARTS:
                return "sma";
            case Attribute.SPIRIT:
                return "spi";
            case Attribute.STRENGTH:
                return "str";
            case Attribute.VIGOR:
                return "vig";
            default:
                throw Error(`Attribute [${attr}] is not supported`);
        }
    }
}
