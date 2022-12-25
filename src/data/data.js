const data = [
  {
    id: 1,
    name: "USA",
    surface: 9826675,
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
    indepYear: 1776,
    continent: "North America",
    population: 328239523,
    citys: [
      {
        id: 1,
        name: "New York",
        population: 8622698,
        district: "New York",
        capital: false,
      },
      {
        id: 2,
        name: "Los Angeles",
        population: 3999759,
        district: "California",
        capital: false,
      },
      {
        id: 3,
        name: "Chicago",
        population: 2722389,
        district: "Illinois",
        capital: false,
      },
    ],
  },

  {
    id: 2,
    name: "Marocco",
    surface: 446550,
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/1200px-Flag_of_Morocco.svg.png",
    indepYear: 1956,
    continent: "Africa",
    population: 36910560,
    citys: [
      {
        id: 1,
        name: "Casablanca",
        population: 3602910,
        district: "Grand Casablanca",
        capital: false,
      },
      {
        id: 2,
        name: "Rabat",
        population: 580000,
        district: "Rabat-Salé-Kénitra",
        capital: true,
      },
      {
        id: 3,
        name: "Marrakech",
        population: 928000,
        district: "Marrakech-Safi",
        capital: false,
      },
    ],
  },

  {
    id: 3,
    name: "Spain",
    surface: 505992,
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png",
    indepYear: 1492,
    continent: "Europe",
    population: 46754778,
    citys: [
      {
        id: 1,
        name: "Madrid",
        population: 3165235,
        district: "Madrid",
        capital: true,
      },
      {
        id: 2,
        name: "Barcelona",
        population: 1620343,
        district: "Catalonia",
        capital: false,
      },
      {
        id: 3,
        name: "Valencia",
        population: 794246,
        district: "Valencia",
        capital: false,
      },
    ],
  },
  {
    id: 4,
    name: "France",
    surface: 551695,
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
    indepYear: 1789,
    continent: "Europe",
    population: 66977107,
    citys: [
      {
        id: 1,
        name: "Paris",
        population: 2140526,
        district: "Île-de-France",
        capital: true,
      },
      {
        id: 2,
        name: "Marseille",

        population: 868155,
        district: "Provence-Alpes-Côte d'Azur",
        capital: false,
      },
      {
        id: 3,

        name: "Lyon",
        population: 513275,
        district: "Auvergne-Rhône-Alpes",
        capital: false,
      },
    ],
  },
  {
    id: 5,

    name: "Italy",
    surface: 301338,
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
    indepYear: 1861,
    continent: "Europe",
    population: 60421760,
    citys: [
      {
        id: 1,
        name: "Rome",
        population: 2870500,
        district: "Lazio",
        capital: true,
      },
      {
        id: 2,
        name: "Milan",
        population: 1350680,
        district: "Lombardy",
        capital: false,
      },
      {
        id: 3,
        name: "Naples",
        population: 959574,
        district: "Campania",
        capital: false,
      },
    ],
  },
  {
    id: 6,
    name: "Japan",
    surface: 377975,
    Image: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    indepYear: 660,
    continent: "Asia",
    population: 126476461,
    citys: [
      {
        id: 1,
        name: "Tokyo",

        population: 37843000,
        district: "Tokyo",
        capital: true,
      },
      {
        id: 2,
        name: "Yokohama",
        population: 3697894,
        district: "Kanagawa",
        capital: false,
      },

      {
        id: 3,
        name: "Osaka",
        population: 2595674,
        district: "Osaka",

        capital: false,
      },
    ],
  },
  {
    id: 7,
    name: "China",
    surface: 9596960,
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    indepYear: -221,
    continent: "Asia",
    population: 1433783686,
    citys: [
      {
        id: 1,
        name: "Beijing",

        population: 21516000,
        district: "Beijing",
        capital: true,
      },
      {
        id: 2,
        name: "Shanghai",
        population: 24256800,
        district: "Shanghai",
        capital: false,
      },
      {
        id: 3,
        name: "Guangzhou",
        population: 14510000,
        district: "Guangdong",
        capital: false,
      },
    ],
  },
];

export default data;

const getData = async () => {
  const response = await fetch("https://FAKEAPI.com/contient");
  const data = await response.json();
  return data;
};

export { getData };
