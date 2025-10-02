// app.js (ESM para navegador)

/**
 * Mapeo de códigos postales por estado/región para diferentes países
 * (idéntico al de tu servidor)
 */
const zipCodeRanges = {
  us: {
    Alabama: ["350","352","354","356","358","360","362","364","366","368","369"],
    Alaska: ["995","996","997","998","999"],
    Arizona: ["850","852","853","855","856","857","859","860","863","864","865"],
    Arkansas: ["716","717","718","719","720","721","722","723","724","725","726","727","728","729"],
    California: ["900","901","902","903","904","905","906","907","908","910","911","912","913","914","915","916","917","918","919","920","921","922","923","924","925","926","927","928","930","931","932","933","934","935","936","937","938","939","940","941","942","943","944","945","946","947","948","949","950","951","952","953","954","955","956","957","958","959","960","961"],
    Colorado: ["800","801","802","803","804","805","806","807","808","809","810","811","812","813","814","815","816"],
    Connecticut: ["060","061","062","063","064","065","066","067","068","069"],
    Delaware: ["197","198","199"],
    Florida: ["320","321","322","323","324","325","326","327","328","329","330","331","332","333","334","335","336","337","338","339","340","341","342","343","344","345","346","347","349"],
    Georgia: ["300","301","302","303","304","305","306","307","308","309","310","311","312","313","314","315","316","317","318","319"],
    Hawaii: ["967","968"],
    Idaho: ["832","833","834","835","836","837","838"],
    Illinois: ["600","601","602","603","604","605","606","607","608","609","610","611","612","613","614","615","616","617","618","619","620","622","623","624","625","626","627","628","629"],
    Indiana: ["460","461","462","463","464","465","466","467","468","469","470","471","472","473","474","475","476","477","478","479"],
    Iowa: ["500","501","502","503","504","505","506","507","508","510","511","512","513","514","515","516","520","521","522","523","524","525","526","527","528"],
    Kansas: ["660","661","662","664","665","666","667","668","669","670","671","672","673","674","675","676","677","678","679"],
    Kentucky: ["400","401","402","403","404","405","406","407","408","409","410","411","412","413","414","415","416","417","418","420","421","422","423","424","425","426","427"],
    Louisiana: ["700","701","703","704","705","706","707","708","710","711","712","713","714"],
    Maine: ["039","040","041","042","043","044","045","046","047","048","049"],
    Maryland: ["206","207","208","209","210","211","212","214","215","216","217","218","219"],
    Massachusetts: ["010","011","012","013","014","015","016","017","018","019","020","021","022","023","024","025","026","027"],
    Michigan: ["480","481","482","483","484","485","486","487","488","489","490","491","492","493","494","495","496","497","498","499"],
    Minnesota: ["550","551","553","554","555","556","557","558","559","560","561","562","563","564","565","566","567"],
    Mississippi: ["386","387","388","389","390","391","392","393","394","395","396","397"],
    Missouri: ["630","631","633","634","635","636","637","638","639","640","641","644","645","646","647","648","649","650","651","652","653","654","655","656","657","658"],
    Montana: ["590","591","592","593","594","595","596","597","598","599"],
    Nebraska: ["680","681","683","684","685","686","687","688","689","690","691","692","693"],
    Nevada: ["889","890","891","893","894","895","897","898"],
    "New Hampshire": ["030","031","032","033","034","035","036","037","038"],
    "New Jersey": ["070","071","072","073","074","075","076","077","078","079","080","081","082","083","084","085","086","087","088","089"],
    "New Mexico": ["870","871","873","874","875","877","878","879","880","881","882","883","884"],
    "New York": ["100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149"],
    "North Carolina": ["270","271","272","273","274","275","276","277","278","279","280","281","282","283","284","285","286","287","288","289"],
    "North Dakota": ["580","581","582","583","584","585","586","587","588"],
    Ohio: ["430","431","432","433","434","435","436","437","438","439","440","441","442","443","444","445","446","447","448","449","450","451","452","453","454","455","456","457","458"],
    Oklahoma: ["730","731","734","735","736","737","738","739","740","741","743","744","745","746","747","748","749"],
    Oregon: ["970","971","972","973","974","975","976","977","978","979"],
    Pennsylvania: ["150","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192","193","194","195","196"],
    "Rhode Island": ["028","029"],
    "South Carolina": ["290","291","292","293","294","295","296","297","298","299"],
    "South Dakota": ["570","571","572","573","574","575","576","577"],
    Tennessee: ["370","371","372","373","374","375","376","377","378","379","380","381","382","383","384","385"],
    Texas: ["750","751","752","753","754","755","756","757","758","759","760","761","762","763","764","765","766","767","768","769","770","771","772","773","774","775","776","777","778","779","780","781","782","783","784","785","786","787","788","789","790","791","792","793","794","795","796","797","798","799"],
    Utah: ["840","841","842","843","844","845","846","847"],
    Vermont: ["050","051","052","053","054","056","057","058","059"],
    Virginia: ["220","221","222","223","224","225","226","227","228","229","230","231","232","233","234","235","236","237","238","239","240","241","242","243","244","245","246"],
    Washington: ["980","981","982","983","984","985","986","988","989","990","991","992","993","994"],
    "West Virginia": ["247","248","249","250","251","252","253","254","255","256","257","258","259","260","261","262","263","264","265","266","267","268"],
    Wisconsin: ["530","531","532","534","535","537","538","539","540","541","542","543","544","545","546","547","548","549"],
    Wyoming: ["820","821","822","823","824","825","826","827","828","829","830","831"]
  },
  de: {
    "Baden-Württemberg": ["68","69","70","71","72","73","74","75","76","77","78","79","88","89"],
    Bayern: ["80","81","82","83","84","85","86","87","89","90","91","92","93","94","95","96","97"],
    Berlin: ["10","12","13","14"],
    Brandenburg: ["01","03","14","15","16","17","19"],
    Bremen: ["27","28"],
    Hamburg: ["20","21","22"],
    Hessen: ["34","35","36","60","61","63","64","65","66"],
    "Mecklenburg-Vorpommern": ["17","18","19","23"],
    Niedersachsen: ["21","26","27","28","29","30","31","37","38","48","49"],
    "Nordrhein-Westfalen": ["32","33","40","41","42","44","45","46","47","48","50","51","52","53","57","58","59"],
    "Rheinland-Pfalz": ["54","55","56","66","67","76","77"],
    Saarland: ["66"],
    Sachsen: ["01","02","04","08","09"],
    "Sachsen-Anhalt": ["06","29","38","39"],
    "Schleswig-Holstein": ["22","23","24","25"],
    Thüringen: ["07","36","37","98","99"],
    "Freistaat Bayern": ["80","81","82","83","84","85","86","87","89","90","91","92","93","94","95","96","97"]
  },
  es: {
    Madrid: ["28"],
    Barcelona: ["08"],
    Valencia: ["46"],
    Sevilla: ["41"],
    Zaragoza: ["50"],
    "Málaga": ["29"],
    Murcia: ["30"],
    Palma: ["07"],
    "Las Palmas": ["35"],
    Bilbao: ["48"],
    Alicante: ["03"],
    "Córdoba": ["14"],
    Valladolid: ["47"],
    Vigo: ["36"],
    "Gijón": ["33"],
    "La Coruña": ["15"],
    Granada: ["18"],
    Vitoria: ["01"],
    "Santa Cruz de Tenerife": ["38"],
    Badalona: ["08"]
  },
  mx: {
    Aguascalientes: ["20"],
    "Baja California": ["21","22"],
    "Baja California Sur": ["23"],
    Campeche: ["24"],
    Chiapas: ["29","30"],
    Chihuahua: ["31","32","33"],
    "Ciudad de México": ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16"],
    Coahuila: ["25","26","27"],
    Colima: ["28"],
    Durango: ["34","35"],
    "Estado de México": ["50","51","52","53","54","55","56","57"],
    Guanajuato: ["36","37","38"],
    Guerrero: ["39","40","41"],
    Hidalgo: ["42","43"],
    Jalisco: ["44","45","46","47","48","49"],
    Michoacán: ["58","59","60","61"],
    Morelos: ["62"],
    Nayarit: ["63"],
    "Nuevo León": ["64","65","66","67"],
    Oaxaca: ["68","69","70","71"],
    Puebla: ["72","73","74","75"],
    Querétaro: ["76"],
    "Quintana Roo": ["77"],
    "San Luis Potosí": ["78","79"],
    Sinaloa: ["80","81","82"],
    Sonora: ["83","84","85"],
    Tabasco: ["86"],
    Tamaulipas: ["87","88","89"],
    Tlaxcala: ["90"],
    Veracruz: ["91","92","93","94","95","96"],
    Yucatán: ["97"],
    Zacatecas: ["98","99"]
  }
};

/** Genera un ZIP coherente con el estado/región y país dado */
export function generateZipForState(country, state) {
  const countryKey = (country || "").toLowerCase();
  const countryRanges = zipCodeRanges[countryKey];
  if (!countryRanges || !state) return null;

  const normalizedState = String(state).trim();
  const ranges = countryRanges[normalizedState];
  if (!ranges || ranges.length === 0) return null;

  const prefix = ranges[Math.floor(Math.random() * ranges.length)];

  // Países con 5 dígitos “estilo numérico”
  if (["us", "de", "es", "mx"].includes(countryKey)) {
    const remainingDigits = 5 - prefix.length;
    const randomPart = Math.floor(Math.random() * Math.pow(10, remainingDigits))
      .toString()
      .padStart(remainingDigits, "0");
    return prefix + randomPart;
  }

  // Si no está en la lista, retornamos el prefijo tal cual
  return prefix;
}

/**
 * Convierte código país a formato soportado por randomuser.me NAT.
 * Si no se reconoce, devuelve null (y no se filtra por nacionalidad).
 */
function natForRandomUser(country) {
  if (!country) return null;
  const c = country.toLowerCase();

  // Lista común de NAT en randomuser (no exhaustiva).
  const map = {
    us: "US",
    de: "DE",
    es: "ES",
    gb: "GB",
    br: "BR",
    ca: "CA",
    fr: "FR",
    nl: "NL",
    dk: "DK",
    fi: "FI",
    ie: "IE",
    no: "NO",
    nz: "NZ",
    tr: "TR",
    ch: "CH",
    au: "AU",
    mx: "MX" // Random User ha incluido MX; si no, simplemente no pases NAT.
  };

  return map[c] || null;
}

/**
 * Obtiene una dirección desde Random User y la adapta a tu formato,
 * generando ZIP coherente según país/estado cuando sea posible.
 */
export async function fetchAddress(country = "us") {
  try {
    const nat = natForRandomUser(country);
    const url = new URL("https://randomuser.me/api/");
    if (nat) url.searchParams.set("nat", nat);
    url.searchParams.set("inc", "name,location,phone");

    const res = await fetch(url.toString(), {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    const json = await res.json();
    const result = json?.results?.[0];
    const location = result?.location ?? {};
    const name = result?.name ?? {};

    // postcode puede llegar como número o string
    let apiPostcode = location.postcode;
    if (apiPostcode == null) apiPostcode = "";

    let adjustedZip = generateZipForState(country, location.state);

    if (!adjustedZip) {
      // fallback: usar el de la API y formatear
      adjustedZip = String(apiPostcode);

      const c = (country || "").toLowerCase();
      if (["us", "de", "es", "mx"].includes(c)) {
        adjustedZip = adjustedZip.replace(/\D/g, "").padStart(5, "0").substring(0, 5);
      } else if (["gb", "ca"].includes(c)) {
        adjustedZip = adjustedZip.toUpperCase();
      } else if (c === "br") {
        const digits = adjustedZip.replace(/\D/g, "");
        if (digits.length >= 8) {
          adjustedZip = digits.substring(0, 5) + "-" + digits.substring(5, 8);
        } else {
          adjustedZip = digits;
        }
      }
    }

    const addressData = {
      name: `${name.title ?? ""} ${name.first ?? ""} ${name.last ?? ""}`.trim(),
      street: `${location.street?.number ?? ""} ${location.street?.name ?? ""}`.trim(),
      city: location.city ?? "",
      state: location.state ?? "",
      phone: String(result?.phone ?? "").replace(/\D/g, ""),
      zip: adjustedZip
    };

    // Guarda también en localStorage para que “persista” en el navegador
    try {
      localStorage.setItem("address.json", JSON.stringify(addressData));
    } catch {
      // Ignorar si storage está bloqueado
    }

    return addressData;
  } catch (err) {
    console.error("Error fetching address:", err);
    // Devolver el mismo fallback que tenías en el servidor
    const fallback = {
      name: "N/A",
      street: "N/A",
      city: "N/A",
      state: "N/A",
      phone: "N/A",
      zip: "N/A"
    };
    try {
      localStorage.setItem("address.json", JSON.stringify(fallback));
    } catch {}
    return fallback;
  }
}

/** 
 * Helper: descarga el JSON como archivo (opcional, emula el “writeFile” del servidor)
 */
export function downloadAddressJSON(filename = "address.json", dataObj) {
  const data = dataObj ? JSON.stringify(dataObj, null, 2) : localStorage.getItem("address.json") || "{}";
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
  a.remove();
}

/**
 * Opcional: expón funciones en window para usarlas desde HTML sin bundler.
 */
window.generateZipForState = generateZipForState;
window.fetchAddress = fetchAddress;
window.downloadAddressJSON = downloadAddressJSON;
