export interface Country {
  _id: string;
  code: string; // ISO 3166-1 alpha-2 code
  name: string;
  primaryColor?: string;
  secondaryColor?: string;
}
