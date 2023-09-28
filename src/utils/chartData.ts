import { CovidData } from "../models/CovidDataModels";

export function casesData(globalData: CovidData[]) {
  return {
    labels: [...globalData].reverse().map((item) => item.date),
    datasets: [
      {
        label: "Total Cases",
        data: [...globalData].reverse().map((item) => item.cases.total.value),
      },
    ],
  };
}

export function testingData(globalData: CovidData[]) {
    return {
      labels: [...globalData].reverse().map((item) => item.date),
      datasets: [
        {
          label: "Total Testing",
          data: [...globalData].reverse().map((item) => item.testing.total.value),
        },
      ],
    };
  }

  export function outcomesData(globalData: CovidData[]) {
    return {
      labels: [...globalData].reverse().map((item) => item.date),
      datasets: [
        {
          label: "Total Deaths",
          data: [...globalData].reverse().map((item) => item.outcomes.death.total.value),
        },
      ],
    };
  }
