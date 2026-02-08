export interface CountryModel {
  code: string; // ISO 3166-1 alpha-2 code
  name: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export class Country implements CountryModel {
  code: string;
  name: string;
  primaryColor?: string;
  secondaryColor?: string;

  constructor(code: string, name: string, primaryColor?: string, secondaryColor?: string) {
    this.code = code;
    this.name = name;
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
  }
}

export type RatedCountry = Country & { rating: number };
