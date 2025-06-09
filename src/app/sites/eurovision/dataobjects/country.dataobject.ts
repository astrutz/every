export interface CountryModel {
  code: string; // ISO 3166-1 alpha-2 code
  name: string;
}

export class Country implements CountryModel {
  code: string;
  name: string;
  
  constructor (code: string, name: string) {
    this.code = code;
    this.name = name;
  }
}
