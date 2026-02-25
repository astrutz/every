export interface Country {
  code: string; // ISO 3166-1 alpha-2 code
  name: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export type RatedCountry = Country & { rating: number };
