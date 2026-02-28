export interface CityPlace {
  name: string;
  tag: string;
  d: string;
}

export interface CityEatEntry {
  name: string;
  d: string;
}

export interface CityRoute {
  from: string;
  opts: { mode: string; time: string; note: string }[];
}

export interface CityData {
  id: string;
  name: string;
  lat: number;
  lng: number;
  tagline: string;
  lede: string;
  sections: { title: string; paragraphs: string[] }[];
  places: CityPlace[];
  eat: { intro: string; entries: CityEatEntry[]; street: string; drink: string };
  routes: CityRoute[];
  navigateIntro: string;
  navigateLocal: string[];
  stayIntro: string;
  stayOptions: string[];
  stayBookingTip: string;
  stadium: { name: string; capacity: string; detail: string };
  matchDay: string[];
}

export const cities: CityData[] = [
  {
    id: 'marrakech',
    name: 'Marrakech',
    lat: 31.63, lng: -7.98,
    tagline: 'Founded 1070. Still not finished with you.',
    lede: 'The heat is the first thing you\'ll register. Dry, bright, physical — a heat that sits on your skin and stays. Then the sound, which comes from everywhere and nowhere: the call to prayer from the Koutoubia, a motor scooter threading a gap that isn\'t there, metal workers hammering copper in the souk, a radio playing Oum Kalthum from a window you can\'t see. Then the smell — leather, orange blossom, cedar shavings, mint, and something sweet you will never identify.',
    sections: [
      {
        title: 'A thousand years in six dynasties',
        paragraphs: [
          'The Almoravids (1070–1147) built the walls. Nineteen kilometres of rammed-earth fortification, still standing, still that particular shade of ochre-red that gave the city its name: al-Hamra, the Red City. They also built the khettara — an underground irrigation system of gravity-fed channels that brought water from the Atlas foothills to the city\'s gardens and palm groves. The technology was ancient Persia\'s gift to North Africa, and Marrakech made it work at a scale that sustained 100,000 people in a semi-arid plain.',
          'The Almohads (1147–1269) tore down every Almoravid mosque — they considered them heretics whose buildings faced the wrong direction — and rebuilt. The Koutoubia Mosque, the city\'s defining landmark, was their work. They built it twice: the first version was 5 degrees off from Mecca, so they demolished it and started again. The 77-metre minaret that stands today became the architectural prototype for the Giralda in Seville and the Hassan Tower in Rabat. Unlike Middle Eastern minarets with their domed tops, the Koutoubia\'s square profile is an Amazigh signature. Inside, there are no stairs — only a ramp wide enough for a horse.',
          'The Marinids (1269–1465) moved the capital to Fes and mostly ignored Marrakech. The city shrank. Markets emptied. The trade routes kept it alive, but barely.',
          'The Saadians (1549–1659) brought it back. They made Marrakech the focal point of their sugar trade with Europe — at a time when sugar was worth more than gold — and used the wealth to build the El Badi Palace, a complex of 360 rooms decorated with Italian marble, gold leaf, and onyx. Ahmad al-Mansur paid his soldiers in sugar. The Saadian Tombs, sealed for centuries and rediscovered only in 1917, remain some of the finest examples of Islamic funerary architecture anywhere.',
          'The Alaouites (1631–present) chose Rabat as the administrative capital, but Marrakech retained its commercial energy and its status as one of Morocco\'s four imperial cities.',
          'Then the French Protectorate (1912–1956) built the Ville Nouvelle — Guéliz and Hivernage — and brought roads, hotels, and colonial architecture. Lyautey, the Resident-General, ordered the medina preserved rather than demolished. It\'s why you can still walk through it today.',
        ],
      },
      {
        title: 'How the medina works',
        paragraphs: [
          'The medina is not a maze. It has a logic, and once you understand it, you can navigate without GPS — which is useful, because GPS will fail you here within fifteen minutes.',
          'The system works in layers. The main arteries — zankas — connect the major gates (babs) to the centre. Off the arteries run narrower streets. Off those run alleys called derbs, which are either throughways or dead-ends. The dead-end derbs are residential: a cluster of houses sharing a single entrance. This is where the riads are.',
          'Every neighbourhood (hay) has four anchors: a mosque, a public oven (ferran), a hammam, and a fountain. These were the non-negotiables of medieval Moroccan urban planning. If you can find any one of these four, you can orient yourself.',
          'The other rule: north is uphill. When you\'re lost, walk uphill. You\'ll hit a main artery.',
        ],
      },
      {
        title: 'What to look for on the walls',
        paragraphs: [
          'Zellige — the geometric tilework. Hand-cut chips of glazed terracotta assembled into interlocking patterns. The geometry is Islamic: no figurative imagery, only mathematical precision. Every chip is cut by hand with a hammer. A master maalem can cut 500 pieces a day. A single fountain can take months.',
          'Gebs — carved plaster. The stucco panels above the zellige, carved while the plaster is still wet. The material is cheap; the labour is not. The depth of carving signals the wealth of the commissioner.',
          'Cedar woodwork — painted ceilings and carved screens. Atlas cedar, which smells faintly sweet and resists insects for centuries. The painted ceilings in Ben Youssef Madrasa and Bahia Palace are polychrome — red, green, gold — applied with brushes made from donkey hair.',
        ],
      },
      {
        title: 'Beyond the walls',
        paragraphs: [
          'Guéliz is where Marrakech lives its modern life. The French built it on a grid in the 1920s, and today it\'s the city\'s commercial centre: banks, restaurants, the train station, cafés with laptops. Avenue Mohammed V connects Guéliz to the medina in a straight line.',
          'Hivernage is the hotel district. Mamounia, Royal Mansour, the big international chains. Built originally as a winter resort for European aristocrats.',
          'The Palmeraie — 13,000 hectares of palm groves northeast, planted according to legend by date stones spat out by Almoravid soldiers. The khettara system still irrigates parts of it.',
        ],
      },
    ],
    places: [
      { name: 'Koutoubia Mosque', tag: 'Landmark', d: 'You can\'t go inside (non-Muslims are barred, a rule from the French Protectorate, not from Islam). The 77-metre minaret has been visible from everywhere since 1195. The gardens behind — rose bushes, orange trees, a fountain — are free. At sunset, the sandstone turns gold. The ruins of the first Koutoubia, demolished for being 5 degrees off Mecca, are visible at the base.' },
      { name: 'Ben Youssef Madrasa', tag: 'Architecture', d: 'A 14th-century Islamic college rebuilt in 1564 by the Saadians. 130 cells, 900 students. Every surface carved: zellige at the base, gebs above, painted cedar at the ceiling. The courtyard pool reflects the arches on a still morning. Go before 10am.' },
      { name: 'Bahia Palace', tag: 'Architecture', d: 'Grand Vizier Ba Ahmed built this in the 1890s for four wives, 24 concubines, and their children. The politics of affection written into architecture: each wife got a courtyard, but the sizes differ. When Ba Ahmed died, the palace was looted within hours.' },
      { name: 'Saadian Tombs', tag: 'History', d: 'Sealed by Moulay Ismail in the 17th century — too superstitious to destroy the graves, too proud to keep the memory. Rediscovered by aerial survey in 1917. The Hall of Twelve Columns, Carrara marble, is the best-proportioned small space in Morocco.' },
      { name: 'Jemaa el-Fna', tag: 'Experience', d: 'UNESCO Masterpiece of Oral and Intangible Heritage (2001) — the first public space to receive that designation. By day: flat, mostly empty. By dusk: a hundred food stalls, smoke rising, storytellers, Gnawa musicians, henna artists, organised chaos unchanged in character for centuries.' },
      { name: 'Maison de la Photographie', tag: 'Museum', d: 'Photographs of Morocco from 1870 to 1960 in a restored riad. The rooftop café has the best medina views in the city. Patrick Manac\'h found the riad while house-hunting and discovered he\'d bought cultural significance.' },
      { name: 'Le Jardin Secret', tag: 'Garden', d: 'Two gardens in a 400-year-old riad restored in 2016. The Islamic garden follows the chahar bagh pattern from Persian tradition: four quadrants, water channels. The tower gives 360-degree views.' },
      { name: 'El Badi Palace', tag: 'Ruin', d: 'Ahmad al-Mansur\'s 360-room palace, built with sugar money, stripped bare by Moulay Ismail a century later. The shell remains — vast walls, sunken gardens, storks on the ramparts. The Koutoubia minbar, an 11th-century Andalusian masterpiece, is displayed inside.' },
    ],
    eat: {
      intro: 'The scene splits into three tiers: tourist restaurants with laminated photo menus (avoid), mid-range places doing honest Moroccan food (the sweet spot), and hotel fine dining at European prices (worth it once). Street food is its own category and almost always better than tier one.',
      entries: [
        { name: 'Nomad', d: 'Modern Moroccan rooftop over the souk. The lamb tangia. Reservations needed.' },
        { name: 'Café des Épices', d: 'Three-floor terrace overlooking the spice square. Better for drinks and atmosphere than food.' },
        { name: 'Chez Lamine', d: 'Near Jemaa el-Fna. Tangia — slow-cooked meat sealed in clay, buried in hammam ashes overnight. They serve one thing.' },
        { name: 'La Grande Table Marocaine', d: 'Royal Mansour. Seven courses. €150. The best Moroccan fine dining in the country.' },
        { name: 'Amal', d: 'Women\'s training restaurant in Guéliz. Honest food, good cause, €5 lunch.' },
      ],
      street: 'Stall 1 at Jemaa el-Fna — harira, 5 MAD. At 2am after a match, nothing else will do. Haj Mustapha — kefta sandwich near Bab Doukkala, 15 MAD. Souk Ahl Fes — snails (babbouche) in spiced broth, 10 MAD. The broth is the point.',
      drink: 'Morocco is Muslim with a complicated relationship to alcohol. It\'s legal, sold, consumed, and not discussed. Churchill Bar at La Mamounia is the famous option — dark wood, €18 cocktails. Baromètre in Guéliz is where Marrakchis actually drink. Mint tea is not optional: gunpowder green, fresh mint, sugar with conviction. Three glasses — thirst, pleasure, respect.',
    },
    routes: [
      { from: 'Casablanca', opts: [
        { mode: 'New HSR (2030)', time: '1h 30m', note: 'Under construction. Expected operational for tournament.' },
        { mode: 'Al Atlas train', time: '2h 40m', note: 'Current fastest. First class €15.' },
        { mode: 'Private transfer', time: '2h 30m', note: '€80–100 door-to-door. Book through hotel.' },
      ]},
      { from: 'Rabat', opts: [
        { mode: 'Train (via Casa)', time: '3h 30m', note: 'Change at Casablanca.' },
      ]},
      { from: 'Tangier', opts: [
        { mode: 'HSR + Atlas', time: '~4h 30m', note: 'Al Boraq to Casa, change to Al Atlas.' },
        { mode: 'Flight', time: '1h 15m', note: 'RAM direct. Sometimes cheaper than train.' },
      ]},
      { from: 'Fes', opts: [
        { mode: 'Flight', time: '1h', note: 'RAM direct. Best option — train is 7h via Casa.' },
      ]},
      { from: 'Agadir', opts: [
        { mode: 'Supratours bus', time: '3h', note: 'Over the Tizi n\'Test. Beautiful. €8.' },
        { mode: 'Private transfer', time: '2h 45m', note: 'Via motorway. €70–90.' },
      ]},
    ],
    navigateIntro: 'Menara Airport (RAK) is 6 km from the medina. 15 minutes by taxi, 70 MAD (agree price before you get in). Direct flights from most European capitals.',
    navigateLocal: [
      'Walking is the only way inside the medina. Budget 20 minutes from any gate to Jemaa el-Fna.',
      'Petits taxis (beige, metered) for Guéliz, Hivernage, and the airport. Refuse anyone who won\'t use the meter. 20–30 MAD for most trips.',
      'Grands taxis (white Mercedes, shared) for day trips to Essaouira, Ourika Valley, or the Atlas.',
    ],
    stayIntro: 'The riad is not a hotel. It\'s a traditional house with rooms around an interior courtyard, converted for guests. The door from the alley looks like nothing. Behind it: a fountain, tilework, a fig tree, silence.',
    stayOptions: [
      'Inside the medina — the experience. Living in a 200-year-old house. Walk to everything. Trade-off: taxi can\'t reach the door (walk 5–10 min with bag), noise carries, A/C varies. Budget €80+ for reliable cooling in June.',
      'Guéliz — modern city. Hotels with parking, Wi-Fi, restaurants. Less atmosphere, more convenience. 15 min taxi to the square.',
      'Hivernage — hotel quarter. La Mamounia (€500+), Royal Mansour (€1,000+), and 4-star chains at €100–200. Pool, bar, A/C. 10-min walk to Jemaa el-Fna through the Koutoubia gardens.',
    ],
    stayBookingTip: 'Ask before booking: Does A/C work in every room? (June hits 38°C.) How far from the nearest taxi drop? Is there a rooftop terrace? Will someone meet you at the gate?',
    stadium: { name: 'Grand Stade de Marrakech', capacity: '70,000', detail: 'West of centre, 15 min taxi from Jemaa el-Fna in normal traffic. Double that on match days. Shuttle from Gare Routière.' },
    matchDay: [
      'Morning — breakfast at a medina café. Ben Youssef opens at 9am. Walk the souks while they\'re quiet.',
      'Midday — retreat. Pool, lunch, rest. The medina shuts 1–4pm in summer. So should you.',
      'Afternoon — head to stadium early. Fan zone opens 3 hours before. Bring water — 5pm can still be 35°C. Seats are exposed.',
      'Night — the city stays up. Jemaa el-Fna runs until 1am. Harira at stall 1, 5 MAD.',
    ],
  },
  {
    id: 'casablanca',
    name: 'Casablanca',
    lat: 33.57, lng: -7.59,
    tagline: 'Seven million people and the largest stadium on Earth.',
    lede: 'At sunset the light turns the whole corniche gold and the fishermen along the rocks don\'t look up — they\'ve seen it every evening of their lives. Behind them, seven million people are finishing the workday in a city that runs on commerce, ambition, and café noir.',
    sections: [
      {
        title: 'The economic capital',
        paragraphs: [
          'Casablanca is not the political capital (that\'s Rabat) and it\'s not the cultural capital (that\'s Fes, or Marrakech, depending on who you ask). It\'s the economic capital — Morocco\'s largest city, its commercial engine, its port, its stock exchange, its financial centre. Seventy percent of Moroccan industrial output comes from the Casablanca-Settat region.',
          'The city you see today is largely a 20th-century creation. Before the French Protectorate it was a modest port town. The French, starting in 1907, rebuilt it as a modern commercial hub — wide boulevards, a port, and some of the finest art deco architecture outside Miami Beach. Boulevard Mohammed V is the spine: walk it from Place des Nations Unies toward the old medina and you\'ll pass through a concentrated history of 20th-century architecture.',
          'The Hassan II Mosque changed the skyline in 1993. King Hassan II commissioned it, architect Michel Pinseau designed it, and 10,000 workers built it in six years. The minaret is 210 metres — the tallest religious structure in Africa. The mosque sits on a promontory over the Atlantic: the floor of the prayer hall retracts to reveal the ocean beneath. 25,000 worshippers inside, 80,000 in the courtyard. It is one of only two mosques in Morocco open to non-Muslims.',
        ],
      },
      {
        title: 'Art deco Casablanca',
        paragraphs: [
          'Between 1920 and 1940, French architects — many of them graduates of the École des Beaux-Arts — built Casablanca into a showcase of art deco and Mauresque revival. The result is an inventory of several hundred buildings that rivals Miami\'s South Beach, though almost none are listed or protected.',
          'The Cathedral of the Sacred Heart (1930, Paul Tournon) is now a cultural centre. The Cinema Rialto (1930, Pierre Jabin) is pure streamline moderne. The Marché Central was the commercial heart of French Casablanca — demolished in 2019, controversially, to make way for a park. Along Rue Jean Jaurès and Boulevard de Paris, dozens of residential blocks show Moorish keyhole arches blended with geometric deco motifs: the style the French called Mauresque.',
          'Most of these buildings are unlisted. They\'re being demolished at the rate of several per year. Walk Boulevard Mohammed V and Rue Mohammed el-Qorri before they\'re gone.',
        ],
      },
      {
        title: 'The corniche and beyond',
        paragraphs: [
          'The Corniche is Casablanca\'s beachfront strip — a 3 km boulevard of hotels, restaurants, nightclubs, and public beach access. This is where the city relaxes. The Ain Diab end has swimming pools built into the Atlantic rocks.',
          'Habous Quarter (Nouvelle Médina) is a colonial-era "ideal medina" built by the French in the 1930s — Moroccan architectural vocabulary applied to French urban planning. It works surprisingly well: shaded arcades, a good book souk, and some of the best pastry shops in the city.',
        ],
      },
    ],
    places: [
      { name: 'Hassan II Mosque', tag: 'Landmark', d: 'The tallest religious structure in Africa. Open to non-Muslims for guided tours. The floor retracts over the Atlantic. Go at sunset when the limestone catches the last light.' },
      { name: 'Art Deco Quarter', tag: 'Architecture', d: 'Boulevard Mohammed V to Place des Nations Unies. Mauresque facades, streamline moderne cinemas, beaux-arts banks. Unlisted, unprotected. Several hundred buildings. Walk it before they\'re gone.' },
      { name: 'Rick\'s Café', tag: 'Culture', d: 'Built in 2004 by a former American diplomat to match the film. The piano player is real. The cocktails are strong. A pastiche that became an institution.' },
      { name: 'Central Market area', tag: 'Food', d: 'The original Marché Central was demolished in 2019, but the surrounding streets still cluster with fish restaurants and fresh produce vendors. The ocean is two blocks away.' },
      { name: 'Habous Quarter', tag: 'Neighbourhood', d: 'A colonial-era medina built by the French in the 1930s. Moroccan arches, shaded arcades, olive shops, pastry stalls. The royal palace entrance is here.' },
      { name: 'Museum of Moroccan Judaism', tag: 'Museum', d: 'The only museum of Jewish culture in the Arab world. Casablanca\'s Jewish community at its peak was 80,000 — now around 2,000. Small, significant, usually empty.' },
    ],
    eat: {
      intro: 'Casablanca eats fish. The port delivers it, the restaurants cook it, and the prices are lower than Marrakech because the tourists go there, not here.',
      entries: [
        { name: 'La Sqala', d: 'Breakfast in a bastion garden. The bastilla is the order. The garden is the real reason.' },
        { name: 'Blend Gourmet', d: 'New-wave Moroccan. Rooftop. The city\'s fine-dining pivot.' },
        { name: 'Le Cabestan', d: 'Ocean Club. French-Moroccan. The terrace hangs over the Atlantic. €€€ but the view justifies it.' },
        { name: 'Port de Pêche restaurants', d: 'Fish market restaurants at the port. Point at a fish, they grill it. €8–15. The freshest meal in the city.' },
      ],
      street: 'Bocadillo sandwiches (a Casablanca institution — crusty bread, kefta, harissa) from carts near the old medina. 10–15 MAD. Sfenj (Moroccan doughnuts) for 2 MAD. Fresh orange juice from the corniche stands, 5 MAD.',
      drink: 'La Bodega for wine and tapas (Spanish colonial leftovers). Sky 28 at Kenzi Tower — rooftop bar, the city spread out below. Café culture is strong here — café noir (espresso) and people-watching on any terrace along Boulevard Mohammed V.',
    },
    routes: [
      { from: 'Marrakech', opts: [
        { mode: 'New HSR (2030)', time: '1h 30m', note: 'Under construction.' },
        { mode: 'Al Atlas train', time: '2h 40m', note: 'Casa Voyageurs station.' },
      ]},
      { from: 'Rabat', opts: [
        { mode: 'Al Boraq HSR', time: '45 min', note: 'Africa\'s only high-speed rail. Every 30 min.' },
      ]},
      { from: 'Tangier', opts: [
        { mode: 'Al Boraq HSR', time: '2h 10m', note: '320 km/h. Book at oncf.ma' },
      ]},
      { from: 'Fes', opts: [
        { mode: 'Al Atlas train', time: '3h 30m', note: 'Scenic through the Middle Atlas.' },
      ]},
      { from: 'Agadir', opts: [
        { mode: 'Flight', time: '1h', note: 'Only practical option. No train.' },
      ]},
    ],
    navigateIntro: 'Mohammed V International (CMN) is 30 km south. Train to Casa Voyageurs: 35 min, 45 MAD. Taxi: 250–300 MAD. Fix price first.',
    navigateLocal: [
      'Tram (Lines 1 & 2) through city centre. 6 MAD. Clean, reliable.',
      'Petits taxis (red, metered). 15–30 MAD for most in-city trips.',
      'The city is spread out. Walking works in the centre but you\'ll need taxis between neighbourhoods.',
    ],
    stayIntro: 'Casablanca is a business city. Hotels are functional rather than charming. The exceptions matter.',
    stayOptions: [
      'Corniche — ocean-facing hotels from €80. Pool, beach access, sunset views. 20 min to city centre.',
      'City centre — Boulevard d\'Anfa and around Place des Nations Unies. Walk to the art deco quarter. Business hotels from €60.',
      'Near Casa Voyageurs station — practical if you\'re using trains to reach other host cities. Budget options from €40.',
    ],
    stayBookingTip: 'The new stadium is 35 km east in Benslimane with nothing around it. Do not book a hotel near it. Stay central, take the match-day shuttle.',
    stadium: { name: 'Grand Stade Hassan II', capacity: '115,000', detail: 'The largest stadium on Earth. 35 km east in Benslimane province. Dedicated shuttle from Casa Voyageurs. Plan transport early — this is not walkable.' },
    matchDay: [
      'Morning — Hassan II Mosque tour (9, 10, 11am). Walk the art deco quarter afterward.',
      'Midday — lunch at the port fish restaurants. The corniche for a swim.',
      'Afternoon — shuttle to Benslimane departs Casa Voyageurs 3–4 hours before kickoff. Go early. The venue is new and transport will be tested.',
      'Night — return shuttle. The corniche nightlife runs late. La Bodega, Sky 28, or the hotel bar.',
    ],
  },
  {
    id: 'rabat',
    name: 'Rabat',
    lat: 34.02, lng: -6.84,
    tagline: 'The city Moroccans tell you to visit.',
    lede: 'The Kasbah of the Udayas sits above the Bou Regreg river — blue and white walls, flower pots on every step, cats asleep in doorways, and a quiet that feels earned rather than empty.',
    sections: [
      {
        title: 'The quiet capital',
        paragraphs: [
          'Rabat is Morocco\'s political capital, its administrative centre, and the city most visitors skip. This is a mistake. Rabat has the history of Fes, the beauty of the coast, the walkability of a European city, and none of the pressure of Marrakech. Moroccans themselves will tell you to go.',
          'The city sits on the Atlantic at the mouth of the Bou Regreg river, with Salé — its twin — on the opposite bank. Together they form a metropolitan area of 2 million, but the medina and kasbah feel like a town.',
          'Hassan Tower has stood unfinished since 1199, when the sultan who commissioned what was to be the world\'s largest mosque died before the work was done. Eight centuries later, the minaret still waits, surrounded by 200 stumps of columns — the ghost of a building that never was. The Mausoleum of Mohammed V, built beside it in the 1960s, is one of Morocco\'s most important royal monuments.',
        ],
      },
      {
        title: 'Layers of time',
        paragraphs: [
          'The Chellah is Rabat\'s most unusual site: a Roman settlement (Sala Colonia) overlaid with a medieval Muslim necropolis, overgrown with fig trees, wildflowers, and storks nesting on the minarets. You walk through Roman columns into Islamic tombs into botanical wildness. It\'s the most peaceful place in any Moroccan city.',
          'The Kasbah of the Udayas is an Almohad fortress above the river mouth — its interior painted blue and white in the Andalusian style (Moriscos fleeing Spain settled here in the 17th century). Café Maure, at the edge of the kasbah overlooking the river and the Atlantic, serves the most scenic glass of mint tea in Morocco.',
          'The Mohammed VI Museum of Modern and Contemporary Art, opened in 2014, is the only institution of its kind in North Africa. The collection spans Moroccan artists from the 1960s onward and hosts international exhibitions. The building itself curves into the skyline.',
        ],
      },
    ],
    places: [
      { name: 'Kasbah of the Udayas', tag: 'Neighbourhood', d: 'Blue-washed walls, Andalusian gardens, Café Maure at the edge overlooking river and ocean. The quietest beautiful place in Morocco.' },
      { name: 'Chellah', tag: 'Archaeological', d: 'Roman ruins under medieval tombs under fig trees. Storks on minarets. Wildflowers through marble. Time layered on time.' },
      { name: 'Hassan Tower', tag: 'Landmark', d: 'Unfinished since 1199. The 200 column stumps are the shadow of a mosque that was to be the world\'s largest.' },
      { name: 'Mohammed VI Museum', tag: 'Museum', d: 'Modern and contemporary Moroccan art. The only institution of its kind in North Africa.' },
      { name: 'Rabat Medina', tag: 'Neighbourhood', d: 'Smaller, calmer, and cheaper than Marrakech or Fes. Rue des Consuls for textiles and leather. A real working medina, not a tourist stage.' },
    ],
    eat: {
      intro: 'Rabat eats well and quietly. No touts, no performance. Restaurants serve Moroccans, and the prices reflect it.',
      entries: [
        { name: 'Cosmopolitan', d: 'French-Moroccan. Tasting menu. Rabat\'s best table.' },
        { name: 'Le Dhow', d: 'Floating restaurant on the Bou Regreg. Sunset, seafood, the river.' },
        { name: 'Dar Zaki', d: 'In the medina. Traditional Moroccan at honest prices. Couscous Friday.' },
        { name: 'Café Maure', d: 'Mint tea and almond pastries at the edge of the Udayas, overlooking the Atlantic.' },
      ],
      street: 'Rue des Consuls has hole-in-the-wall sandwich shops. Grilled sardines on the harbour, 20 MAD. Fresh juice from every corner, 5 MAD.',
      drink: 'Pietri bar in Guéliz for cocktails. Hotel Sofitel rooftop for views. Wine is easier to find here than in Marrakech — this is the diplomatic capital.',
    },
    routes: [
      { from: 'Casablanca', opts: [
        { mode: 'Al Boraq HSR', time: '45 min', note: 'Every 30 min. Africa\'s only HSR.' },
      ]},
      { from: 'Tangier', opts: [
        { mode: 'Al Boraq HSR', time: '1h 25m', note: 'Direct. Comfortable.' },
      ]},
      { from: 'Fes', opts: [
        { mode: 'Al Atlas train', time: '2h 30m', note: 'Direct service.' },
      ]},
      { from: 'Marrakech', opts: [
        { mode: 'Train (via Casa)', time: '3h 30m', note: 'Change at Casablanca.' },
      ]},
    ],
    navigateIntro: 'Rabat-Salé Airport (RBA), 10 km from centre. Taxi 150 MAD. By 2030, HSR connects to Mohammed V Airport.',
    navigateLocal: [
      'Two tram lines — clean, reliable, 6 MAD. Covers most of the city.',
      'Petits taxis (blue). Metered. Cheap.',
      'The city is walkable. Medina to Hassan Tower to Udayas in 30 minutes on foot.',
    ],
    stayIntro: 'Best value of the six host cities. The riads here are beautiful, quiet, and half the price of Marrakech.',
    stayOptions: [
      'Medina riads — from €30. Quieter and prettier than you expect.',
      'Hassan district — near the tower and mausoleum. Walking distance to everything.',
      'Agdal — modern neighbourhood south of centre. Apartments, restaurants, normal life.',
    ],
    stayBookingTip: 'Rabat is the only host city where you can genuinely walk between your riad, the main sights, and the tram to the stadium without needing a taxi.',
    stadium: { name: 'Complexe Prince Moulay Abdellah', capacity: '68,700', detail: 'Opened January 2026. Tram Line 2 direct. 20 minutes from city centre by tram.' },
    matchDay: [
      'Morning — Chellah at opening. The storks are most active early. Then the Udayas.',
      'Midday — lunch in the medina or along the river.',
      'Afternoon — Tram Line 2 to the stadium. Easy, cheap, no traffic stress.',
      'Night — the Rabat waterfront. Le Dhow on the river. Quieter than Marrakech, and that\'s the point.',
    ],
  },
  {
    id: 'tangier',
    name: 'Tangier',
    lat: 35.76, lng: -5.83,
    tagline: 'Fourteen kilometres of water between two continents.',
    lede: 'From Café Hafa you can see the Spanish coast. On a clear day the buildings are distinct — Tarifa, white against green hills, close enough to feel like you could swim there.',
    sections: [
      {
        title: 'The city of arrivals',
        paragraphs: [
          'This proximity has shaped everything. Phoenicians, Romans, Portuguese, the British, the Spanish, and then the International Zone years (1923–1956), when Tangier belonged to no single nation and became a free port for diplomats, writers, smugglers, artists, and anyone who needed to disappear for a while.',
          'Paul Bowles arrived in 1947 and stayed fifty-two years, writing The Sheltering Sky from a room overlooking the port. William Burroughs wrote Naked Lunch here. Tennessee Williams, Truman Capote, the Rolling Stones, the Beats — they came for the freedom that ambiguous jurisdiction creates.',
          'Matisse came for the light and painted it into permanence — two stays in 1912–13 that changed the direction of modern art. Ibn Battuta was born here in 1304 and left to travel 120,000 kilometres across three continents. The stadium is named after him.',
        ],
      },
      {
        title: 'The new Tangier',
        paragraphs: [
          'Since 2010, Tangier has transformed. The Tanger Med port complex, 40 km east, is now the largest port in Africa and the Mediterranean. The Al Boraq HSR connects Tangier to Casablanca in 2h 10m at 320 km/h. The city\'s reputation as seedy and marginal has been replaced — deliberately — by massive investment in infrastructure, a new marina, and a tech sector.',
          'The Medina and Kasbah remain. The Grand Socco (officially Place du 9 Avril 1947) is where the medina meets the Ville Nouvelle — Matisse painted the view from here. The Petit Socco was the International Zone\'s centre of intrigue. The American Legation — the first American public property abroad, dating to 1821 — is a museum worth finding.',
        ],
      },
    ],
    places: [
      { name: 'Café Hafa', tag: 'Institution', d: 'Clifftop terraces since 1921. Mint tea. The Strait of Gibraltar below. The view hasn\'t changed. The Rolling Stones sat here. So did Paul Bowles. So will you.' },
      { name: 'Cape Spartel', tag: 'Geography', d: 'Where the Atlantic meets the Mediterranean. Africa\'s northwestern tip. A lighthouse and a feeling of being at the edge of something.' },
      { name: 'Hercules Cave', tag: 'Natural', d: 'A sea cave with an opening shaped like the outline of Africa. Might be natural. Might not. Either way, it\'s there.' },
      { name: 'American Legation', tag: 'Museum', d: 'Morocco was the first country to recognise American independence (1777). This building has been American property since 1821. Museum inside.' },
      { name: 'Kasbah Museum', tag: 'Museum', d: 'Former sultan\'s palace. Archaeological collection from Volubilis and the region. The garden overlooks the strait.' },
    ],
    eat: {
      intro: 'Tangier\'s food scene has caught up with its new money. The medina restaurants are better here than in Marrakech — less tourist-oriented, more locally driven.',
      entries: [
        { name: 'El Morocco Club', d: 'Colonial mansion, rooftop. Fresh pasta and Moroccan wine. The atmosphere of old Tangier.' },
        { name: 'Salon Bleu', d: 'In the Kasbah. Blue walls, harbour view, grilled sardines.' },
        { name: 'Populaire Saveur de Poisson', d: 'No menu. Fish, five courses, whatever was caught today. €12. Legendary.' },
        { name: 'Café Tingis', d: 'Petit Socco. The kind of café where intrigue was once conducted. Coffee and people-watching.' },
      ],
      street: 'Grilled sardines along the port, 15 MAD. Msemen with honey from medina bakeries. Freshly squeezed pomegranate juice from the Grand Socco.',
      drink: 'El Morocco Club for wine. The rooftop bars at the new marina hotels. Café Hafa is tea only and perfect.',
    },
    routes: [
      { from: 'Casablanca', opts: [
        { mode: 'Al Boraq HSR', time: '2h 10m', note: '320 km/h. Book at oncf.ma' },
      ]},
      { from: 'Rabat', opts: [
        { mode: 'Al Boraq HSR', time: '1h 25m', note: 'Direct.' },
      ]},
      { from: 'Fes', opts: [
        { mode: 'Train', time: '4h 30m', note: 'Via Meknes. Change trains.' },
      ]},
      { from: 'Spain', opts: [
        { mode: 'Ferry from Tarifa', time: '35 min', note: 'FRS or Intershipping. You can watch football in Spain and sleep in Morocco.' },
      ]},
    ],
    navigateIntro: 'Ibn Battouta Airport (TNG), 15 km from centre. Taxi 150–200 MAD. No airport bus.',
    navigateLocal: [
      'Petits taxis (blue/green). No tram yet (under construction for 2030).',
      'The medina, kasbah, and port are all walkable from each other.',
      'The ferry terminal (new port) is 20 min east — free shuttle buses to the old city.',
    ],
    stayIntro: 'The Kasbah has the views and the character. The new marina has the international-standard hotels. Pick your priority.',
    stayOptions: [
      'Kasbah — boutique riads with strait views. €60–150. Atmosphere is the product.',
      'New marina — international hotels from €70. Modern, reliable, walking distance to old city.',
      'Ville Nouvelle — budget options from €35. Between the medina and Guéliz equivalent.',
    ],
    stayBookingTip: 'If you\'re arriving by ferry from Spain, book near the new port or marina. The old city is a 20-minute transfer.',
    stadium: { name: 'Grand Stade Ibn Batouta', capacity: '75,600', detail: 'Named after the explorer. 8 km south of centre. Taxi €3. Match shuttles expected from the port and city centre.' },
    matchDay: [
      'Morning — Café Hafa for tea with the strait view. Then the Kasbah Museum.',
      'Midday — lunch at Populaire Saveur de Poisson. No menu, no choice, no complaints.',
      'Afternoon — taxi to the stadium (8 km, 15 min). Or shuttle from Grand Socco.',
      'Night — the medina stays alive. El Morocco Club or the marina bars.',
    ],
  },
  {
    id: 'fes',
    name: 'Fes',
    lat: 34.02, lng: -5.01,
    tagline: '9,400 alleys. Your phone loses signal in fifteen minutes.',
    lede: 'Fes el-Bali is the largest car-free urban zone on Earth. Your map will fail, which is when the city starts to work on you properly.',
    sections: [
      {
        title: 'The oldest living medieval city',
        paragraphs: [
          'A corridor narrows. A donkey carrying leather hides presses past. You flatten yourself against a wall built while Europe was in the Dark Ages. Then you turn a corner and there\'s a courtyard with a fountain, or a madrasa where every centimetre has been carved — stucco, cedar, zellige — by hands that understood they were making something for eternity.',
          'Al Quaraouiyine was founded in 859 AD by Fatima al-Fihri, a woman from a wealthy Tunisian family. It is the world\'s oldest continuously operating university — before Oxford (1096), before Bologna (1088). Still teaching. The library, reopened in 2016 after restoration, holds manuscripts from the 9th century.',
          'Fes was founded in 789 by Idris I, a descendant of the Prophet who established the first Moroccan dynasty. His son Idris II expanded it, and by the 10th century it was one of the largest cities in the world. The Marinid dynasty (13th–15th century) made it their capital and built the madrasas that remain its architectural glory.',
        ],
      },
      {
        title: 'The tanneries and the crafts',
        paragraphs: [
          'The Chouara Tanneries have been processing leather the same way since the 11th century. Stone vats filled with dye — saffron for yellow, mint for green, indigo for blue, poppy for red — and men standing waist-deep, working the hides. The smell is extraordinary. Take the sprig of mint they offer at the door.',
          'Fes is Morocco\'s craft capital. The metalworkers in Place Seffarine have been hammering copper into shape since the Marinid era. The zellige workshops near Bab Guissa produce tilework for restoration projects across the country. The embroidery tradition — Fes embroidery (broderie Fassi) uses a cross-stitch technique unique to the city — is still practiced, though the number of master artisans shrinks each year.',
        ],
      },
      {
        title: 'The mellah',
        paragraphs: [
          'Fes\'s mellah (Jewish quarter) is the oldest in Morocco — the word "mellah" itself originated here. At its peak, the Jewish community was a significant presence in the city\'s commercial and intellectual life. The whitewashed tombs in the Jewish cemetery still face Jerusalem. The Ibn Danan Synagogue, restored in the 1990s, is one of the few Jewish religious buildings in Morocco open to visitors.',
        ],
      },
    ],
    places: [
      { name: 'Al Quaraouiyine', tag: 'Landmark', d: 'Oldest continuously operating university on Earth. Founded 859 AD by Fatima al-Fihri. The library holds 9th-century manuscripts. Non-Muslims can\'t enter the mosque but can see the courtyard from the door.' },
      { name: 'Chouara Tanneries', tag: 'Craft', d: 'Medieval leatherwork, medieval methods. Stone vats of natural dye. Take the mint sprig. Best viewed from the leather shops above — they\'ll invite you up (and try to sell you something).' },
      { name: 'Bou Inania Madrasa', tag: 'Architecture', d: 'Every surface carved until there was nowhere left. Built by the Marinid sultan Abu Inan in the 1350s. One of the few religious buildings in Fes open to non-Muslims.' },
      { name: 'Mellah', tag: 'History', d: 'Oldest Jewish quarter in Morocco. Whitewashed tombs facing Jerusalem. Ibn Danan Synagogue. A community mostly gone, a neighbourhood that remembers.' },
      { name: 'Dar Batha', tag: 'Museum', d: 'Museum of Moroccan arts in a 19th-century palace. Fes ceramics (the blue-and-white that defines the city), woodwork, textiles, ironwork.' },
      { name: 'Nejjarine Foundouk', tag: 'Museum', d: 'A restored 18th-century merchants\' inn, now a woodworking museum. The courtyard is the most photogenic space in the medina.' },
    ],
    eat: {
      intro: 'Fes invented Moroccan court cuisine. Pastilla — pigeon pie with almonds, cinnamon, and powdered sugar — is a Fessi creation. The food here has complexity that the rest of the country acknowledges but can\'t replicate.',
      entries: [
        { name: 'Café Clock', d: 'The camel burger. Live Gnawa music weekends. Cultural hub. Started by a Brit, embraced by the city.' },
        { name: 'Dar Roumana', d: 'Fine dining in a riad. Five courses. The bastilla. Reservations essential.' },
        { name: 'Ruined Garden', d: 'A garden restaurant in a half-ruined riad. Moroccan-Mediterranean. The setting does the work.' },
        { name: 'Thami\'s', d: 'Hole in the wall near Bab Boujloud. Harira, brochettes, bread. 25 MAD for everything.' },
      ],
      street: 'Bab Boujloud area for cheap eats — grilled meats, harira, msemen. Mulay Hassan pastry shops for Fessi sweets: kaab ghazal (gazelle horns) and chebakia (sesame-honey cookies).',
      drink: 'Fes is more conservative than Marrakech. Alcohol is served in hotel restaurants and a few Ville Nouvelle bars. Café Clock serves excellent coffee. The rooftop terraces of medina riads are the best bars in the city — mint tea, sunset, the sound of the call to prayer from a dozen minarets simultaneously.',
    },
    routes: [
      { from: 'Casablanca', opts: [
        { mode: 'Al Atlas train', time: '3h 30m', note: 'Through the Middle Atlas. Scenic.' },
      ]},
      { from: 'Rabat', opts: [
        { mode: 'Al Atlas train', time: '2h 30m', note: 'Direct.' },
      ]},
      { from: 'Tangier', opts: [
        { mode: 'Train', time: '4h 30m', note: 'Via Meknes.' },
      ]},
      { from: 'Marrakech', opts: [
        { mode: 'Flight', time: '1h', note: 'Best option. Train is 7h via Casa.' },
      ]},
    ],
    navigateIntro: 'Fès-Saïss Airport (FEZ), 15 km south. Taxi 120–150 MAD. Bus 16 exists but is unreliable.',
    navigateLocal: [
      'Inside Fes el-Bali: on foot only. No vehicles can enter.',
      'Petits taxis (red). For Ville Nouvelle, airport, stadium.',
      'Your riad will send someone to meet you at a gate. Accept this offer. You will not find it alone on first visit.',
    ],
    stayIntro: 'Fes riads are extraordinary — converted merchant houses with zellige, fountains, and rooftop terraces at prices Marrakech charged five years ago.',
    stayOptions: [
      'Fes el-Bali — the medina. Riads from €35. The catch: your taxi drops you at the gate. You walk 5 min through alleys. The riad sends a guide. Don\'t argue.',
      'Fes el-Jdid — the "new" city (13th century). Slightly easier access. Near the mellah and royal palace.',
      'Ville Nouvelle — modern hotels from €40. Restaurants, cafés, taxis. 10-min taxi to the medina.',
    ],
    stayBookingTip: 'Book a riad that sends someone to the gate. Arriving in Fes el-Bali with a suitcase and a phone map is a mistake you make once.',
    stadium: { name: 'Complexe Sportif de Fès', capacity: '55,800', detail: 'Smallest venue but the most intimate atmosphere. 6 km from medina. Route d\'Imouzzer. Taxi 20–40 MAD.' },
    matchDay: [
      'Morning — Bou Inania Madrasa. Then get deliberately lost in the medina. The wrong turn is the right turn.',
      'Midday — Café Clock for lunch. Sit upstairs.',
      'Afternoon — taxi to the stadium from the Ville Nouvelle. 15 min.',
      'Night — back to the medina. Rooftop terrace at your riad. The call to prayer from every minaret. This is the sound of Fes.',
    ],
  },
  {
    id: 'agadir',
    name: 'Agadir',
    lat: 30.43, lng: -9.60,
    tagline: 'Ten kilometres of sand and a reliable swell.',
    lede: 'In 1960 an earthquake levelled the city in fifteen seconds. Twelve thousand people. Agadir was rebuilt from scratch, which is why it looks nothing like the others.',
    sections: [
      {
        title: 'The city that started over',
        paragraphs: [
          'There is no medieval medina. No French colonial quarter. No crumbling walls telling centuries of stories. The earthquake of February 29, 1960 — magnitude 5.7, shallow, directly beneath the city — destroyed 75% of the buildings and killed a third of the population in fifteen seconds. King Mohammed V ordered the city rebuilt 2 km to the south.',
          'What Agadir has instead is ten kilometres of crescent beach, water warm enough to swim in by May, and an Atlantic swell that draws surfers from everywhere. The rebuilt city is modern, low-rise, and designed for sun: wide boulevards, beach hotels, a marina. It\'s closer to a Spanish resort town than to the Moroccan cities further north.',
          'The ruins of the old kasbah sit on the hill above — the Arabic inscription on the wall reads "Fear God and honour the King." You can see the beach, the city, and the Atlas Mountains from there. It\'s the only historical site in Agadir, and it\'s a memorial to what was lost.',
        ],
      },
      {
        title: 'The coast',
        paragraphs: [
          'Twenty minutes north, Taghazout has been Morocco\'s surf capital for decades. Anchor Point is a world-class right-hand point break. The village is a strip of cafés, board-rental shops, and guesthouses built along the cliff. The surf culture here is genuine — Moroccan surfers outnumber tourists in winter.',
          'An hour south, the walled town of Tiznit is where Amazigh silversmiths work techniques passed down through generations. The silver jewellery of the Anti-Atlas — fibulae, headpieces, anklets — is a distinct tradition with its own vocabulary of symbols. Tiznit\'s medina, built in 1881 by Sultan Hassan I, is small enough to walk in an hour.',
          'Paradise Valley — a palm gorge 30 minutes northeast with natural pools carved into rock by a river. Bring a towel. It\'s the most beautiful swimming spot within a day trip of any host city.',
        ],
      },
    ],
    places: [
      { name: 'Taghazout', tag: 'Surf', d: 'Morocco\'s surf capital. Anchor Point is world-class. Boards for rent everywhere. Post-surf avocado toast and msemen, €3.' },
      { name: 'Paradise Valley', tag: 'Nature', d: 'Palm gorge with natural pools carved by a river. 30 min from Agadir. Bring a towel.' },
      { name: 'Souk El Had', tag: 'Market', d: 'A city market, not a tourist market. Argan oil, saffron, Amazigh silver. Real prices.' },
      { name: 'Tiznit', tag: 'Day trip', d: 'An hour south. Silver capital. Amazigh jewelers in a walled medina.' },
      { name: 'Old Kasbah', tag: 'Memorial', d: 'Ruins of the city the earthquake destroyed. The inscription. The view. A reminder.' },
    ],
    eat: {
      intro: 'Agadir eats fish — fresh, grilled, cheap. The port delivers it, the beach restaurants cook it, the prices are half of Marrakech.',
      entries: [
        { name: 'Pure Passion', d: 'Beach restaurant. Grilled catch of the day. Feet in the sand.' },
        { name: 'Taghazout cafés', d: 'Post-surf breakfast. Avocado toast and msemen. €3.' },
        { name: 'Port fish restaurants', d: 'Point at a fish, they weigh it and grill it. €5–10.' },
        { name: 'Mi Cayito', d: 'Marina. Spanish-Moroccan fusion. Sunset cocktails.' },
      ],
      street: 'Grilled sardines and corn on the beach promenade, 10–15 MAD. Fresh argan-almond amlou from market vendors — Morocco\'s answer to peanut butter.',
      drink: 'Resort hotels have poolside bars. The marina has cocktail spots. Taghazout is dry — surf culture, not nightlife.',
    },
    routes: [
      { from: 'Casablanca', opts: [
        { mode: 'Flight', time: '1h', note: 'Only practical option. No train.' },
      ]},
      { from: 'Marrakech', opts: [
        { mode: 'Supratours bus', time: '3h', note: 'Over the Tizi n\'Test. Beautiful drive. €8.' },
        { mode: 'Private transfer', time: '2h 45m', note: 'Via motorway. €70–90.' },
      ]},
    ],
    navigateIntro: 'Al Massira Airport (AGA), 25 km southeast. Taxi 200–250 MAD. No reliable public transport.',
    navigateLocal: [
      'Petits taxis (orange). The city is flat and spread out.',
      'Beach strip is walkable — 10 km of promenade.',
      'Rent a car for Taghazout, Tiznit, or Paradise Valley. €20–30/day.',
    ],
    stayIntro: 'This is resort Morocco — pools, buffets, ocean views. A different proposition from the medina cities.',
    stayOptions: [
      'Beach strip — all-inclusive resorts and mid-range hotels from €50. Pool, beach access, walking distance to the stadium.',
      'Taghazout (20 min north) — surf hostels from €15, boutique guesthouses from €50. For the waves, not the match.',
      'Marina — newer development. Hotels with balconies overlooking the yachts. €80+.',
    ],
    stayBookingTip: 'The stadium is 3 km from the beach strip. This is the only host city where most visitors can walk to the match.',
    stadium: { name: 'Grand Stade d\'Agadir', capacity: '70,000', detail: '3 km from the beach strip. Walkable from most hotels — the only host city where that\'s true. Expansion from 46,000.' },
    matchDay: [
      'Morning — surf at Taghazout (20 min north) or swim at the beach.',
      'Midday — fish lunch at the port. Siesta by the pool.',
      'Afternoon — walk to the stadium from the beach strip. 30–40 min, or 10-min taxi.',
      'Night — beach promenade. The marina bars. In June, the weather at 10pm is 22°C and perfect.',
    ],
  },
];

export function getCityById(id: string): CityData | undefined {
  return cities.find(c => c.id === id);
}

export function getAllCityIds(): string[] {
  return cities.map(c => c.id);
}
