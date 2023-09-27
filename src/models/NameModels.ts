export interface Data {
  gender: Gender;
  nationality: Nationality;
  age: Age;
}

export interface Gender {
  count: number;
  name: string;
  gender: string;
  probability: number;
}

export interface Nationality {
  count: number;
  name: string;
  country: Array<{ country_id: string; probability: number }>;
}

export interface Age {
  count: number;
  name: string;
  age: number;
}
