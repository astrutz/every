export class Participant {
  private readonly _name: string;
  private readonly _strength: number;

  constructor(name: string, strength: number) {
    this._name = name;
    this._strength = strength;
  }

  public get name(): string {
    return this._name;
  }

  public get strength(): number {
    return this._strength;
  }
}
