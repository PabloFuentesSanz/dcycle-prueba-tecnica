export interface GeneralData {
  links: Links;
  meta: Meta;
  data: CovidData[];
}

export interface CovidData {
  date: string;
  states: number;
  cases: Cases;
  testing: Cases;
  outcomes: Outcomes;
}

export interface Cases {
  total: Total;
}

export interface Total {
  value: number | null;
  calculated: Calculated;
}
export interface Calculated {
  population_percent: number | null;
  change_from_prior_day: number | null;
  seven_day_change_percent: number | null;
  seven_day_average?: number | null;
}
export interface Outcomes {
  hospitalized: Hospitalized;
  death: Cases;
}

export interface Hospitalized {
  currently: Total;
  in_icu: InIcu;
  on_ventilator: InIcu;
}

export interface InIcu {
  currently: Total;
}
export interface Links {
  self: string;
}

export interface Meta {
  build_time: Date;
  license: string;
  version: string;
  field_definitions: FieldDefinition[];
}

export interface FieldDefinition {
  name: string;
  field?: string;
  deprecated: boolean;
  prior_names: string[];
}

export interface Detail {
  label: string;
  value: string | number | null;
}

export interface ChartType {
  labels: string[];
  datasets: {
    label: string;
    data: (number | null)[];
  }[];
}
