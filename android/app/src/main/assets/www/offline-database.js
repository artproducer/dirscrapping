const offlineAddressDatabase = {
  us: {
    titles: ["Sr.", "Sra.", "Dr.", "Prof."],
    firstNames: ["Liam", "Olivia", "Noah", "Ava", "Ethan", "Sophia", "Mason", "Emma", "Logan", "Mia"],
    lastNames: ["Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodríguez", "Martínez", "Taylor"],
    streets: [
      "Maple Street",
      "Oak Avenue",
      "Cedar Lane",
      "Pine Drive",
      "Sunset Boulevard",
      "Riverside Road",
      "Elm Street",
      "Highland Avenue"
    ],
    houseNumberRange: [12, 980],
    cities: [
      {
        city: "New York",
        state: "New York",
        postalCodes: ["10001", "10002", "10003"],
        phonePrefix: "1212555"
      },
      {
        city: "Austin",
        state: "Texas",
        postalCodes: ["73301", "73344", "78701"],
        phonePrefix: "1512555"
      },
      {
        city: "Seattle",
        state: "Washington",
        postalCodes: ["98101", "98102", "98104"],
        phonePrefix: "1206555"
      },
      {
        city: "Chicago",
        state: "Illinois",
        postalCodes: ["60601", "60602", "60603"],
        phonePrefix: "1312555"
      }
    ],
    phone: { suffixLength: 4 }
  },
  de: {
    titles: ["Sr.", "Sra.", "Dr.", "Prof."],
    firstNames: ["Lukas", "Mia", "Leon", "Emma", "Felix", "Hannah", "Jonas", "Sofía"],
    lastNames: ["Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Wagner", "Becker", "Hoffmann"],
    streets: [
      "Hauptstraße",
      "Bahnhofstraße",
      "Gartenweg",
      "Berliner Allee",
      "Schillerstraße",
      "Goethestraße",
      "Ringstraße"
    ],
    houseNumberRange: [5, 220],
    cities: [
      {
        city: "Berlín",
        state: "Berlín",
        postalCodes: ["10115", "10117", "10119"],
        phonePrefix: "4930123"
      },
      {
        city: "Múnich",
        state: "Baviera",
        postalCodes: ["80331", "80333", "80335"],
        phonePrefix: "4989123"
      },
      {
        city: "Hamburgo",
        state: "Hamburgo",
        postalCodes: ["20095", "20097", "20099"],
        phonePrefix: "4940123"
      }
    ],
    phone: { suffixLength: 3 }
  },
  gb: {
    titles: ["Mr.", "Mrs.", "Ms.", "Dr."],
    firstNames: ["Oliver", "Amelia", "George", "Isla", "Harry", "Ava", "Jack", "Olivia"],
    lastNames: ["Smith", "Jones", "Taylor", "Brown", "Williams", "Wilson", "Davies", "Evans"],
    streets: [
      "High Street",
      "Church Road",
      "Station Road",
      "Mill Lane",
      "Victoria Street",
      "Park Avenue"
    ],
    houseNumberRange: [1, 180],
    cities: [
      {
        city: "Londres",
        state: "Greater London",
        postalCodes: ["SW1A 1AA", "E1 6AN", "NW1 5DB"],
        phonePrefix: "4420794"
      },
      {
        city: "Mánchester",
        state: "Gran Mánchester",
        postalCodes: ["M1 1AE", "M2 5DB", "M3 2BW"],
        phonePrefix: "4416139"
      },
      {
        city: "Birmingham",
        state: "West Midlands",
        postalCodes: ["B1 1AA", "B2 4QA", "B3 3DJ"],
        phonePrefix: "4412139"
      }
    ],
    phone: { suffixLength: 5 }
  },
  ca: {
    titles: ["Sr.", "Sra.", "Dr.", "Prof."],
    firstNames: ["Liam", "Emma", "Noah", "Olivia", "William", "Charlotte", "Benjamin", "Ava"],
    lastNames: ["Smith", "Brown", "Tremblay", "Roy", "Wilson", "Gagnon", "Clark", "Martin"],
    streets: [
      "Maple Road",
      "Queen Street",
      "King Street",
      "Granville Avenue",
      "Laurier Avenue",
      "Bay Street"
    ],
    houseNumberRange: [10, 500],
    cities: [
      {
        city: "Toronto",
        state: "Ontario",
        postalCodes: ["M5H 2N2", "M4B 1B3", "M5V 3L9"],
        phonePrefix: "1416289"
      },
      {
        city: "Vancouver",
        state: "Columbia Británica",
        postalCodes: ["V6B 1V2", "V6C 2X8", "V6E 1B5"],
        phonePrefix: "1604722"
      },
      {
        city: "Montreal",
        state: "Quebec",
        postalCodes: ["H2Y 1C6", "H3B 1X8", "H2Z 1H5"],
        phonePrefix: "1514848"
      }
    ],
    phone: { suffixLength: 4 }
  },
  au: {
    titles: ["Mr.", "Mrs.", "Ms.", "Dr."],
    firstNames: ["Oliver", "Charlotte", "William", "Amelia", "Jack", "Isla", "Noah", "Sophie"],
    lastNames: ["Smith", "Jones", "Williams", "Brown", "Taylor", "Wilson", "Johnson", "Martin"],
    streets: [
      "George Street",
      "Queen Street",
      "King Street",
      "Elizabeth Street",
      "Collins Street",
      "Adelaide Street"
    ],
    houseNumberRange: [5, 400],
    cities: [
      {
        city: "Sídney",
        state: "Nueva Gales del Sur",
        postalCodes: ["2000", "2007", "2010"],
        phonePrefix: "6128299"
      },
      {
        city: "Melbourne",
        state: "Victoria",
        postalCodes: ["3000", "3008", "3053"],
        phonePrefix: "6138609"
      },
      {
        city: "Brisbane",
        state: "Queensland",
        postalCodes: ["4000", "4006", "4101"],
        phonePrefix: "6173077"
      }
    ],
    phone: { suffixLength: 4 }
  },
  fr: {
    titles: ["M.", "Mme.", "Dr.", "Pr."],
    firstNames: ["Lucas", "Emma", "Louis", "Chloé", "Gabriel", "Camille", "Hugo", "Manon"],
    lastNames: ["Martin", "Bernard", "Dubois", "Thomas", "Robert", "Richard", "Petit", "Durand"],
    streets: [
      "Rue de Rivoli",
      "Avenue des Champs-Élysées",
      "Boulevard Saint-Germain",
      "Rue de Lyon",
      "Rue Victor Hugo",
      "Rue Nationale"
    ],
    houseNumberRange: [4, 180],
    cities: [
      {
        city: "París",
        state: "Île-de-France",
        postalCodes: ["75001", "75002", "75008"],
        phonePrefix: "3314455"
      },
      {
        city: "Lyon",
        state: "Auvernia-Ródano-Alpes",
        postalCodes: ["69002", "69003", "69007"],
        phonePrefix: "3347286"
      },
      {
        city: "Marsella",
        state: "Provenza-Alpes-Costa Azul",
        postalCodes: ["13001", "13002", "13006"],
        phonePrefix: "3349139"
      }
    ],
    phone: { suffixLength: 4 }
  },
  es: {
    titles: ["Sr.", "Sra.", "D.", "Dña."],
    firstNames: ["Lucas", "Martina", "Hugo", "Sofía", "Mateo", "Lucía", "Leo", "Valeria"],
    lastNames: ["García", "Martínez", "López", "Sánchez", "Rodríguez", "Fernández", "Gómez", "Pérez"],
    streets: [
      "Calle Mayor",
      "Gran Vía",
      "Calle de Alcalá",
      "Avenida Diagonal",
      "Calle Colón",
      "Paseo de Gracia"
    ],
    houseNumberRange: [3, 220],
    cities: [
      {
        city: "Madrid",
        state: "Comunidad de Madrid",
        postalCodes: ["28001", "28004", "28012"],
        phonePrefix: "3491520"
      },
      {
        city: "Barcelona",
        state: "Cataluña",
        postalCodes: ["08002", "08007", "08015"],
        phonePrefix: "3493312"
      },
      {
        city: "Valencia",
        state: "Comunidad Valenciana",
        postalCodes: ["46001", "46002", "46004"],
        phonePrefix: "3496151"
      }
    ],
    phone: { suffixLength: 4 }
  },
  br: {
    titles: ["Sr.", "Sra.", "Dr.", "Dra."],
    firstNames: ["Miguel", "Helena", "Arthur", "Alice", "Heitor", "Laura", "Theo", "Valentina"],
    lastNames: ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Almeida", "Costa"],
    streets: [
      "Rua das Flores",
      "Avenida Paulista",
      "Rua XV de Novembro",
      "Rua da Bahia",
      "Rua dos Andradas",
      "Avenida Atlântica"
    ],
    houseNumberRange: [20, 900],
    cities: [
      {
        city: "São Paulo",
        state: "São Paulo",
        postalCodes: ["01001-000", "01310-100", "01415-001"],
        phonePrefix: "5511322"
      },
      {
        city: "Río de Janeiro",
        state: "Río de Janeiro",
        postalCodes: ["20010-000", "22041-001", "22290-030"],
        phonePrefix: "5521301"
      },
      {
        city: "Brasilia",
        state: "Distrito Federal",
        postalCodes: ["70040-010", "70070-010", "70750-010"],
        phonePrefix: "5561321"
      }
    ],
    phone: { suffixLength: 4 }
  },
  mx: {
    titles: ["Sr.", "Sra.", "Ing.", "Lic."],
    firstNames: ["Juan", "María", "Luis", "Ana", "Carlos", "Fernanda", "Diego", "Valentina"],
    lastNames: ["Hernández", "García", "Martínez", "López", "González", "Rodríguez", "Pérez", "Sánchez"],
    streets: [
      "Calle Reforma",
      "Avenida Juárez",
      "Calle Insurgentes",
      "Avenida Universidad",
      "Calle Hidalgo",
      "Calle Madero"
    ],
    houseNumberRange: [8, 420],
    cities: [
      {
        city: "Ciudad de México",
        state: "Ciudad de México",
        postalCodes: ["01000", "03100", "04310"],
        phonePrefix: "5255551"
      },
      {
        city: "Guadalajara",
        state: "Jalisco",
        postalCodes: ["44100", "44110", "44170"],
        phonePrefix: "5233370"
      },
      {
        city: "Monterrey",
        state: "Nuevo León",
        postalCodes: ["64000", "64010", "64060"],
        phonePrefix: "5281830"
      }
    ],
    phone: { suffixLength: 4 }
  },
  nl: {
    titles: ["Dhr.", "Mevr.", "Dr.", "Ir."],
    firstNames: ["Daan", "Emma", "Noah", "Tess", "Sem", "Sophie", "Lucas", "Julia"],
    lastNames: ["de Jong", "Jansen", "de Vries", "van den Berg", "Bakker", "Visser", "Smit", "Meijer"],
    streets: [
      "Damrak",
      "Prinsengracht",
      "Keizersgracht",
      "Herengracht",
      "Coolsingel",
      "Neude"
    ],
    houseNumberRange: [6, 210],
    cities: [
      {
        city: "Ámsterdam",
        state: "Holanda Septentrional",
        postalCodes: ["1012", "1015", "1017"],
        phonePrefix: "312077"
      },
      {
        city: "Róterdam",
        state: "Holanda Meridional",
        postalCodes: ["3011", "3012", "3014"],
        phonePrefix: "311024"
      },
      {
        city: "Utrecht",
        state: "Utrecht",
        postalCodes: ["3511", "3512", "3514"],
        phonePrefix: "313075"
      }
    ],
    phone: { suffixLength: 5 }
  },
  ch: {
    titles: ["Sr.", "Sra.", "Dr.", "Prof."],
    firstNames: ["Luca", "Mia", "Noah", "Emma", "Leon", "Lina", "Jonas", "Sofía"],
    lastNames: ["Müller", "Meier", "Schmid", "Keller", "Weber", "Fischer", "Huber", "Zimmermann"],
    streets: [
      "Bahnhofstrasse",
      "Zürichbergstrasse",
      "Marktgasse",
      "Freie Strasse",
      "Rue du Rhône",
      "Aeschenplatz"
    ],
    houseNumberRange: [4, 160],
    cities: [
      {
        city: "Zúrich",
        state: "Zúrich",
        postalCodes: ["8001", "8002", "8004"],
        phonePrefix: "414420"
      },
      {
        city: "Ginebra",
        state: "Ginebra",
        postalCodes: ["1201", "1202", "1204"],
        phonePrefix: "412240"
      },
      {
        city: "Basilea",
        state: "Basilea-Ciudad",
        postalCodes: ["4001", "4051", "4056"],
        phonePrefix: "416120"
      }
    ],
    phone: { suffixLength: 5 }
  },
  no: {
    titles: ["Hr.", "Fru", "Dr.", "Prof."],
    firstNames: ["Jakob", "Nora", "Emil", "Emma", "Oliver", "Sofie", "Filip", "Ella"],
    lastNames: ["Hansen", "Johansen", "Olsen", "Larsen", "Andersen", "Pedersen", "Nilsen", "Kristiansen"],
    streets: [
      "Karl Johans gate",
      "Bogstadveien",
      "Torgallmenningen",
      "Dronningens gate",
      "Nedre Slottsgate",
      "Olav Tryggvasons gate"
    ],
    houseNumberRange: [2, 150],
    cities: [
      {
        city: "Oslo",
        state: "Oslo",
        postalCodes: ["0150", "0160", "0181"],
        phonePrefix: "472230"
      },
      {
        city: "Bergen",
        state: "Vestland",
        postalCodes: ["5003", "5013", "5015"],
        phonePrefix: "475553"
      },
      {
        city: "Trondheim",
        state: "Trøndelag",
        postalCodes: ["7011", "7013", "7030"],
        phonePrefix: "477389"
      }
    ],
    phone: { suffixLength: 5 }
  },
  fi: {
    titles: ["Herra", "Rva", "Toht.", "Prof."],
    firstNames: ["Eetu", "Aino", "Onni", "Emma", "Leo", "Olivia", "Veeti", "Sofia"],
    lastNames: ["Korhonen", "Virtanen", "Mäkinen", "Nieminen", "Mäkelä", "Hämäläinen", "Laine", "Heikkinen"],
    streets: [
      "Mannerheimintie",
      "Aleksanterinkatu",
      "Hämeenkatu",
      "Esplanadi",
      "Kauppakatu",
      "Kirkkokatu"
    ],
    houseNumberRange: [3, 180],
    cities: [
      {
        city: "Helsinki",
        state: "Uusimaa",
        postalCodes: ["00100", "00120", "00260"],
        phonePrefix: "358910"
      },
      {
        city: "Espoo",
        state: "Uusimaa",
        postalCodes: ["02100", "02140", "02230"],
        phonePrefix: "358981"
      },
      {
        city: "Tampere",
        state: "Pirkanmaa",
        postalCodes: ["33100", "33210", "33310"],
        phonePrefix: "358331"
      }
    ],
    phone: { suffixLength: 5 }
  },
  dk: {
    titles: ["Hr.", "Fru", "Dr.", "Prof."],
    firstNames: ["William", "Ida", "Lucas", "Emma", "Oscar", "Clara", "Alfred", "Freja"],
    lastNames: ["Jensen", "Nielsen", "Hansen", "Pedersen", "Andersen", "Christensen", "Larsen", "Sørensen"],
    streets: [
      "Strøget",
      "Nørrebrogade",
      "Åboulevard",
      "Vesterbrogade",
      "Østergade",
      "Fiskergade"
    ],
    houseNumberRange: [5, 190],
    cities: [
      {
        city: "Copenhague",
        state: "Región Capital",
        postalCodes: ["1050", "1100", "1250"],
        phonePrefix: "453331"
      },
      {
        city: "Aarhus",
        state: "Jutlandia Central",
        postalCodes: ["8000", "8200", "8260"],
        phonePrefix: "458617"
      },
      {
        city: "Odense",
        state: "Dinamarca Meridional",
        postalCodes: ["5000", "5200", "5270"],
        phonePrefix: "456512"
      }
    ],
    phone: { suffixLength: 4 }
  },
  nz: {
    titles: ["Mr.", "Mrs.", "Ms.", "Dr."],
    firstNames: ["Oliver", "Isla", "Jack", "Charlotte", "Noah", "Harper", "Leo", "Amelia"],
    lastNames: ["Smith", "Jones", "Williams", "Brown", "Wilson", "Taylor", "White", "Thompson"],
    streets: [
      "Queen Street",
      "Lambton Quay",
      "Victoria Street",
      "High Street",
      "Ponsonby Road",
      "Riccarton Road"
    ],
    houseNumberRange: [4, 210],
    cities: [
      {
        city: "Auckland",
        state: "Auckland",
        postalCodes: ["1010", "1021", "1052"],
        phonePrefix: "64930"
      },
      {
        city: "Wellington",
        state: "Wellington",
        postalCodes: ["6011", "6021", "6035"],
        phonePrefix: "64444"
      },
      {
        city: "Christchurch",
        state: "Canterbury",
        postalCodes: ["8011", "8024", "8053"],
        phonePrefix: "64337"
      }
    ],
    phone: { suffixLength: 6 }
  },
  ie: {
    titles: ["Mr.", "Mrs.", "Ms.", "Dr."],
    firstNames: ["Jack", "Emily", "James", "Sophie", "Daniel", "Grace", "Conor", "Aoife"],
    lastNames: ["Murphy", "Kelly", "O'Sullivan", "Walsh", "Smith", "O'Brien", "Byrne", "Ryan"],
    streets: [
      "O'Connell Street",
      "Grafton Street",
      "Patrick Street",
      "Eyre Square",
      "Henry Street",
      "Main Street"
    ],
    houseNumberRange: [2, 150],
    cities: [
      {
        city: "Dublín",
        state: "Leinster",
        postalCodes: ["D02", "D04", "D08"],
        phonePrefix: "353144"
      },
      {
        city: "Cork",
        state: "Munster",
        postalCodes: ["T12", "T23", "T45"],
        phonePrefix: "353214"
      },
      {
        city: "Galway",
        state: "Connacht",
        postalCodes: ["H91", "H54", "H65"],
        phonePrefix: "353915"
      }
    ],
    phone: { suffixLength: 5 }
  },
  tr: {
    titles: ["Bay", "Bayan", "Dr.", "Prof."],
    firstNames: ["Mehmet", "Ayşe", "Ahmet", "Fatma", "Mustafa", "Elif", "Emre", "Zeynep"],
    lastNames: ["Yılmaz", "Kaya", "Demir", "Şahin", "Çelik", "Yıldız", "Aydın", "Öztürk"],
    streets: [
      "Istiklal Caddesi",
      "Atatürk Bulvarı",
      "Cumhuriyet Caddesi",
      "Bağdat Caddesi",
      "Kordonboyu",
      "Gaziosmanpaşa Caddesi"
    ],
    houseNumberRange: [5, 250],
    cities: [
      {
        city: "Estambul",
        state: "Estambul",
        postalCodes: ["34433", "34010", "34710"],
        phonePrefix: "905321"
      },
      {
        city: "Ankara",
        state: "Ankara",
        postalCodes: ["06010", "06420", "06540"],
        phonePrefix: "903123"
      },
      {
        city: "Esmirna",
        state: "Esmirna",
        postalCodes: ["35220", "35330", "35410"],
        phonePrefix: "902324"
      }
    ],
    phone: { suffixLength: 6 }
  },
  in: {
    titles: ["Mr.", "Mrs.", "Dr.", "Prof."],
    firstNames: ["Aarav", "Aanya", "Vivaan", "Diya", "Aditya", "Isha", "Kabir", "Anaya"],
    lastNames: ["Sharma", "Verma", "Patel", "Gupta", "Reddy", "Kapoor", "Singh", "Khan"],
    streets: [
      "MG Road",
      "Brigade Road",
      "Ring Road",
      "Park Street",
      "Nehru Place",
      "Connaught Place"
    ],
    houseNumberRange: [10, 650],
    cities: [
      {
        city: "Bombay",
        state: "Maharashtra",
        postalCodes: ["400001", "400013", "400021"],
        phonePrefix: "912226"
      },
      {
        city: "Delhi",
        state: "Delhi",
        postalCodes: ["110001", "110006", "110017"],
        phonePrefix: "911149"
      },
      {
        city: "Bengaluru",
        state: "Karnataka",
        postalCodes: ["560001", "560020", "560034"],
        phonePrefix: "918047"
      }
    ],
    phone: { suffixLength: 6 }
  }
};

function pickRandom(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return undefined;
  }
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

function randomDigits(length) {
  let digits = "";
  const total = Math.max(0, length || 0);
  for (let i = 0; i < total; i += 1) {
    digits += Math.floor(Math.random() * 10);
  }
  return digits;
}

function randomIntInRange(range) {
  const [min = 1, max = 999] = Array.isArray(range) ? range : [1, 999];
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

export function getRandomOfflineAddress(countryCode = "us") {
  const normalized = (countryCode || "us").toLowerCase();
  const dataset = offlineAddressDatabase[normalized] || offlineAddressDatabase.us;
  const cityRecord = pickRandom(dataset.cities) || {};
  const postalCodes = Array.isArray(cityRecord.postalCodes) ? cityRecord.postalCodes : [];
  const postalCode = pickRandom(postalCodes);
  const suffixLength = dataset.phone?.suffixLength ?? 4;
  const phonePrefix = cityRecord.phonePrefix || dataset.phone?.defaultPrefix || "";
  let phoneDigits = `${phonePrefix}${randomDigits(suffixLength)}`;
  if (!phoneDigits) {
    phoneDigits = randomDigits(10);
  }

  return {
    title: pickRandom(dataset.titles) || "",
    firstName: pickRandom(dataset.firstNames) || "",
    lastName: pickRandom(dataset.lastNames) || "",
    streetName: pickRandom(dataset.streets) || "",
    streetNumber: randomIntInRange(dataset.houseNumberRange),
    city: cityRecord.city || "",
    state: cityRecord.state || "",
    zip: postalCode || null,
    phone: phoneDigits
  };
}

export { offlineAddressDatabase };
