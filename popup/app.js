const sharkData = [
  {
    name: "SLENDER WEASEL",
    sci_name: "PARAGALEUS RANDALLI",
    range: "1 - 18",
    size: "48.3",
    habitat: "Inshore on the inner continental shelf.",
    fun_fact:
      "Slender weasel sharks were first described in 1996 and are often confused with other weasel sharks even though they are consumed widely throughout their range.",
    scale: "2.1",
    image_src: "Slender-Weasel-Shark-01.svg",
  },
  {
    name: "SPADENOSE",
    sci_name: "SCOLIODON LATICAUDUS",
    range: "10 - 13",
    size: "100",
    habitat: "Found near rocky shores.",
    fun_fact:
      "Spadense sharks are used as baits to capture other sharks and fishes. They are one of the most abundant sharks in Indian waters and it is highly likely that you would have seen one in a fishmarket!",
    scale: "4.35",
    image_src: "Spade-Nose-Shark-01.svg",
  },
  {
    name: "GREY SHARPNOSE",
    sci_name: "RHIZOPRIONODON OLIGOLINX",
    range: "0 - 36",
    size: "84.5",
    habitat:
      "Reef-associated. They are found in tropical waters, on continental and insular shelves.",
    fun_fact:
      "Grey sharpnose sharks feed on fishes, cephalopods and crustaceans.",
    scale: "3.67",
    image_src: "Grey-Sharpnose-Shark-01.svg",
  },
  {
    name: "BLACKSPOT",
    sci_name: "CARCHARHINUS SEALEI",
    range: "0 - 40",
    size: "100",
    habitat: "Reef-associated species.",
    fun_fact: "Blackspot shark feeds on fishes, crustaceans and squids.",
    scale: "4.35",
    image_src: "Black-Spot-Shark-01.svg",
  },
  {
    name: "WINGHEAD",
    sci_name: "EUSPHYRA BLOCHII",
    range: "≈ 20",
    size: "186",
    habitat: "Coastal, nearshore waters.",
    fun_fact:
      "The wide spaced eyes of winghead sharks grants excellent binocular vision especially for hunting!",
    scale: "8.09",
    image_src: "Winghead-Shark-01.svg",
  },
  {
    name: "BROADFIN",
    sci_name: "LAMIOPSIS TEMMINCKII",
    range: "0 - 50",
    size: "160",
    habitat: "Found only in tropical waters (India and Bangladesh).",
    fun_fact:
      "Broadfin shark is the only surviving member of the genus Lamiopsis!",
    scale: "9.04",
    image_src: "Broad-Fin-Shark-01.svg",
  },
  {
    name: "GRACEFUL",
    sci_name: "CARCHARHINUS AMBLYRHYNCHOIDES",
    range: "≤ 50",
    size: "182",
    habitat: "Commonly seen in the continental and insular shelves.",
    fun_fact:
      "The main diet of Graceful sharks include tiny fishes along with few cephalopods and crustaceans.",
    scale: "7.91",
    image_src: "Graceful-Shark-01.svg",
  },
  {
    name: "BLACKTIP",
    sci_name: "CARCHARHINUS LIMBATUS",
    range: "0 - 30/100",
    size: "286",
    habitat:
      "Found in tropical and warm temperate waters. Also in estuaries, river mouths, mangrove swamps, lagoond, coral reefs.",
    fun_fact:
      "Blacktip reef shark shoot themselves out of water and rotate close of 3 times on its axis before snapping to catch prey!",
    scale: "12.43",
    image_src: "Black-Tiip-Shark-01.svg",
  },
  {
    name: "HOOKTOOTH",
    sci_name: "CHAENOGALEUS MACROSTOMA",
    range: "0 - 59",
    size: "100",
    habitat: "Demersal on the continental and insular shelf.",
    fun_fact:
      "Hooktooth sharks are the only extant (living) member of the genus Chaenogaleus.",
    scale: "4.35",
    image_src: "Hook-Tooth-Shark-01.svg",
  },
  {
    name: "SPINNER",
    sci_name: "CARCHARHINUS BREVIPINNA",
    range: "0 - 30 ≤ 100",
    size: "300",
    habitat:
      "Reef associated, found in warm temperate and tropical and sub-tropcal waters.",
    fun_fact: "Spinner sharks leap and spin out of water to catch their prey!",
    scale: "13.04",
    image_src: "Spinner-Shark-01.svg",
  },
  {
    name: "WHITETIP REEF",
    sci_name: "TRIAENODON OBESUS",
    range: "1 - 40 ≤ 330",
    size: "213",
    habitat: "Found near coral reefs, around caves and crevices.",
    fun_fact:
      "Whitetip reef sharks are nocturnal sharks, that rest on ocean bottom during day and hunt at night! They don't need to constantly keep swimming in order to breathe – something only few sharks can do!",
    scale: "9.26",
    image_src: "White-Tip-Reef-Shark-01.svg",
  },
  {
    name: "ZEBRA",
    sci_name: "STEGOSTOMA FASCIATUM",
    range: "0 - 62",
    size: "354",
    habitat: "Found in tropical and sub-tropical waters. Coastal waters.",
    fun_fact:
      "Zebra sharks are nocturnal. Sluggish during the daytime, they mainly hunt their favourite shellfish and crustaceans at night.",
    scale: "15.39",
    image_src: "Zebra-Shark-01.svg",
  },
  {
    name: "SPOT-TAIL",
    sci_name: "CARCHARHINUS SORRAH",
    range: "20 - 50",
    size: "160",
    habitat: "Reef-associated and common near islands and reefs.",
    fun_fact:
      "Spot-tail sharks favouriite diet consists of bony fishes but they also like eating crustaceans and cepahlopods.",
    scale: "6.96",
    image_src: "Spot-Tail-Shark-01.svg",
  },
  {
    name: "TAWNY NURSE",
    sci_name: "NEBRIUS FERRUGINEUS",
    range: "70",
    size: "320",
    habitat:
      "Found near coral reefs, particularly in crevices and caves, and seagrass lagoonal habitat.",
    fun_fact:
      "Tawny nurse sharks are nocturnal and form resting aggregations. They can be seen piled across or on top of one another!",
    scale: "13.91",
    image_src: "Tawny-Nurse-Shark-01.svg",
  },
  {
    name: "BROWNBANDED BAMBOO",
    sci_name: "CHILOSCYLLIUM PUNCTATUM",
    range: "85",
    size: "132",
    habitat:
      "Habitats including nearshore intertidal and subtidal habitats, over sandy and muddy substrates, seagrass beds and rocky and coral reefs.",
    fun_fact:
      "Brownbanded bamboo sharks are resilient animals and are known to survive upto 12 hours without water!",
    scale: "5.74",
    image_src: "Brown-Banded-Bamboo-Shark-01.svg",
  },
  {
    name: "SANDBAR",
    sci_name: "CARCHARHINUS PLUMBEUS",
    range: "20 - 60",
    size: "300",
    habitat:
      "Inhabits temparate and tropical waters. Commonly found in esturaries, bays and harbours and river mouths.",
    fun_fact:
      "Sandbar sharks prefer 'smooth' snad bottom and tend to avoid the hard, rocky coral reefs.",
    scale: "13.04",
    image_src: "Sandbar-Shark-01.svg",
  },
  {
    name: "SICKLEFIN LEMON",
    sci_name: "NEGAPRION ACUTIDENS",
    range: "0 - 90",
    size: "380",
    habitat: "Commonly found on coral reefs and sandy plateaus.",
    fun_fact:
      "Sicklefin lemon sharks are very shy animals! They usually stay away from humans (unless provoked) even when a bait is presented.",
    scale: "16.52",
    image_src: "Sickle-Fin-Lemon-Shark-01.svg",
  },
  {
    name: "SLENDER BAMBOO",
    sci_name: "CHILOSCYLLIUM INDICUM",
    range: "90",
    size: "65",
    habitat:
      "Occurs in shallow inshore habitats including intertidal pools, rocky and coral reefs, may also occur in fresh water.",
    fun_fact:
      "Slender bamboo sharks  can tolerate brackish and freshwater habitat. They are also known to be sluggish.",
    scale: "2.83",
    image_src: "Slender-Bamboo-Shark-01.svg",
  },
  {
    name: "ARABIAN BAMBOO",
    sci_name: "CHILOSCYLLIUM ARABICUM",
    range: "2 - 100",
    size: "62",
    habitat:
      "Occurs in coastal waters in coral reefs, lagoons, rocky shores, muddy bottoms and mangrove estuaries.",
    fun_fact: "One of the few shark species suitable for private aquaria.",
    scale: "2.7",
    image_src: "Arabian-Bamboo-Shark-01.svg",
  },
  {
    name: "BLACKTAIL REEF/GREY REEF",
    sci_name: "CARCHARHINUS AMBLYRHYNCHOS",
    range: "0 - 50 ≤ 1000",
    size: "255",
    habitat:
      "Found in tropical and sub-tropical reef associated regions such as coral atolls and lagoons.",
    fun_fact:
      "Grey reef sharks have a good starlight vision as they are very active during night.",
    scale: "11.09",
    image_src: "Grey-Reef-Shark-01.svg",
  },
  {
    name: "BLACKTIP REEF",
    sci_name: "CARCHARHINUS MELANOPTERUS",
    range: "0 - 50/100",
    size: "200",
    habitat: "Reef associated species.",
    fun_fact:
      "Blacktip reef sharks are easily identified by observers in shallow waters because of their characterisitc protruding, rigid first dorsal fin when they swim.",
    scale: "8.7",
    image_src: "Black-Tip-Reef-Shark-01.svg",
  },
  {
    name: "BULL",
    sci_name: "CARCHARHINUS LEUCAS",
    range: "0 - 150",
    size: "360",
    habitat:
      "Enters estuaries, bays, lagoons and river mouths. Found in tropical and sub-tropical waters.",
    fun_fact:
      "Bull sharks are name so because they first head butt their prey before attacking and eating them. These sharks are aggressive and was the insipiration behind a popular book that was later made into a movie – Jaws, 1914.",
    scale: "17.39",
    image_src: "Bull-Shark-01.svg",
  },
  {
    name: "GREY BAMBOO",
    sci_name: "CHILOSCYLLIUM GRISEUM",
    range: "5 - 100",
    size: "77",
    habitat:
      "Occurs in shallow inshore habitats including rocky and coral reefs.",
    fun_fact: "Juveniles have dark band patterns on their body.",
    scale: "3.35",
    image_src: "Grey-Bamboo-Shark-01.svg",
  },
  {
    name: "PIGEYE",
    sci_name: "CARCHARHINUS AMBOINENSIS",
    range: "≤ 100",
    size: "280",
    habitat: "Found in tropical waters. Reef associated.",
    fun_fact:
      "Pigeye sharks and Bull sharks are very similar in appearence which leads to a lot of confusion!",
    scale: "12.17",
    image_src: "Pig-Eye-Shark-01.svg",
  },
  {
    name: "SLITEYE",
    sci_name: "LOXODON MACRORHINUS",
    range: "7 - 100",
    size: "98",
    habitat: "Found in tropical waters.",
    fun_fact:
      "Silteye sharks are know to show faster growth and reach maturity earlier twhen compared to other members of its family.",
    scale: "4.26",
    image_src: "Slit-Eye-Shark-01.svg",
  },
  {
    name: "WHITESPOTTED BAMBOO",
    sci_name: "CHILOSCYLLIUM PLAGIOSUM",
    range: "50",
    size: "83",
    habitat:
      "Occurs in shallow coastal inshore coral reef habitats; it is nocturnal and rest by day in reef crevices.",
    fun_fact:
      "Whitespotted bamboo sharks are little known however, they are known to adapt well in captivity and is commonly seen in public aquariums.",
    scale: "4.13",
    image_src: "White-Spotted-Bamboo-Shark-01.svg",
  },
  {
    name: "SNAGGLETOOTH",
    sci_name: "HEMIPRISTIS ELONGATA",
    range: "1 - 130",
    size: "240",
    habitat: "Coastal.",
    fun_fact:
      "Snaggletooth sharks live at the bottom of the sea and grow >7 feet long. Despite their dangerous looking teeth, they have never attacked humans!",
    scale: "10.43",
    image_src: "Snaggle-Tooth-Shark-01.svg",
  },
  {
    name: "PELAGIC THRESHER",
    sci_name: "ALOPIAS PELAGICUS",
    range: "0 - 152",
    size: "428",
    habitat: "Found in warm offshore surface waters of open ocean.",
    fun_fact:
      "Pelagic thresher sharks use their long tail to whip small fish and squid, and stun them. Then the shark can quickly make a U-turn and gobble them up! This is the smallest of the 3 thresher sharks that we find in India.",
    scale: "18.61",
    image_src: "Pelagic-Shark-01.svg",
  },
  {
    name: "PONDICHERRY",
    sci_name: "CARCHARHINUS HEMIODON",
    range: "10 - 150",
    size: "200",
    habitat: "Indo-west Pacific distribution.",
    fun_fact:
      "No verifiable records since 1960. Life history is unknown. It is a rarely seen shark and not much is known about it.",
    scale: "8.7",
    image_src: "Pondicherry-Shark-01.svg",
  },
  {
    name: "MAGNIFICENT CATSHARK",
    sci_name: "PROSCYLLIUM MAGNIFICUM",
    range: "≤ 144",
    size: "49",
    habitat: "Eastern Indian Ocean.",
    fun_fact:
      'Some individuals have "clown face" patterns beneath each dorsal fin.',
    scale: "2.13",
    image_src: "Magnificent-Cat-Shark-01.svg",
  },
  {
    name: "SHARPNOSE SEVENGILL",
    sci_name: "HEPTRANCHIAS PERLO",
    range: "75 - 98",
    size: "137",
    habitat: "Marine benthic, deep waters, bentho-pelagic.",
    fun_fact:
      "Sharpnose sevengill sharks are a very active species and unlike most sharks it has seven (instead of five) gill slits!",
    scale: "6.09",
    image_src: "Sharp-Nose-7-Gill-Shark-01.svg",
  },
  {
    name: "SICKLEFIN WEASEL",
    sci_name: "HEMIGALEUS MICROSTOMA",
    range: "≤ 170",
    size: "114",
    habitat: "Demersal on the continental shelf.",
    fun_fact:
      "Sicklefin weasel sharks are named after their sickle shaped fins, An interesting fact is that their gestation period (6 months) is shorter than most other sharks and so females give birth twice a year.",
    scale: "4.96",
    image_src: "Sicklefin-Weasel-Shark-01.svg",
  },
  {
    name: "BIG EYE THERSHER",
    sci_name: "ALOPIAS SUPERCILIOSUS",
    range: "0 - 100 ≤ 720",
    size: "488",
    habitat:
      "Found in warm temperate and tropical waters, occasionally enters shallow waters close to the coast.",
    fun_fact:
      "As the name suggests, big-eye thresher sharks have large eyes that help them to see in low light! They come to the water surface at night and dive to great depths during the day. Like pelagic thresher shark it uses its tail to stun the prey and eat them!",
    scale: "21.22",
    image_src: "Big-Eye-Thresher-Shark-01.svg",
  },
  {
    name: "BRAMBLE",
    sci_name: "ECHINORHINUS BRUCUS",
    range: "200",
    size: "310",
    habitat:
      "Bottom of outer continental and insular shelves, may have estuarine affinity.",
    fun_fact:
      "Bramble sharks are considered to be rather sluggish animals and have thorn like denticles on its body.",
    scale: "13.48",
    image_src: "Bramble-Shark-01.svg",
  },
  {
    name: "HARDNOSE",
    sci_name: "CARCHARHINUS MACLOTI",
    range: "0 - 170",
    size: "110",
    habitat: "Distributed in the tropical waters.",
    fun_fact:
      "Wonder why these sharks are called 'hardnose sharks'? It is because of the presence of heavily calcified cartilages on its snout!",
    scale: "4.78",
    image_src: "Hard-Nose-Shark-01.svg",
  },
  {
    name: "MANGALORE HOUNDSHARK",
    sci_name: "IAGO MANGALORENSIS",
    range: "≤ 183",
    size: "57.7",
    habitat: "Western Indian Ocean.",
    fun_fact:
      "Mangalore houndsharks are considered to be semi-pelagic species meaning they can live partially live on the bottom and partially in the water colun above!",
    scale: "2.51",
    image_src: "Mangalore-Hound-Shark-01.svg",
  },
  {
    name: "MILK",
    sci_name: "RHIZOPRIONODON ACUTUS",
    range: "0 - 200",
    size: "175",
    habitat:
      "Found on continental shelves close to sandy beaches and sometime in estuaries.",
    fun_fact:
      "Milk sharks sometimes enter freshwater habitats and we are not sure why they do so!",
    scale: "7.61",
    image_src: "Milk-Shark-01.svg",
  },
  {
    name: "SAND TIGER",
    sci_name: "CARCHARIAS TAURUS",
    range: "1 - 191",
    size: "330",
    habitat:
      "Often found on the bottom but can be seen at all levels of the water column including the surf zone.Found in shallow bays, coral and rocky reefs and around caves.",
    fun_fact:
      "Sand tiger sharks are the only known shark that are able to gulp and store air in its stomach to maintain neutral buoyancy while swimming!",
    scale: "14.35",
    image_src: "Sand-Tiger-Shark-01.svg",
  },
  {
    name: "SMOOTH HAMMERHEAD",
    sci_name: "SPHYRNA ZYGAENA",
    range: "≤ 200",
    size: "500",
    habitat:
      "Widespread in temperate and tropical seas, coastal and semi-oceanic, pelagic.",
    fun_fact:
      "In the summer, smooth hammerhead sharks are known to migrate towards the poles in large schools of hundreds to even thousands of individuals!",
    scale: "21.74",
    image_src: "Smooth-Hammerhead-Shark-01.svg",
  },
  {
    name: "GANGES",
    sci_name: "GLYPHIS GANGETICUS",
    range: "≈ 130",
    size: "204",
    habitat:
      "Endemic to India and is found in River Hoogly (West Bengal), Ganges, Brahmaputra, Mahanadi (Bihar, Assam and Odisha).",
    fun_fact:
      "The Ganges shark is one of only six river sharks in the world. Often mistaken for a bull shark, the ganges shark also sometimes enters the sea!",
    scale: "8.87",
    image_src: "Ganges-Shark-01.svg",
  },
  {
    name: "GREAT HAMMERHEAD",
    sci_name: "SPHYRNA MOKARRAN",
    range: "1 - 300",
    size: "610",
    habitat: "Bottom dwelling and reef associated.",
    fun_fact:
      "Great hammerhead sharks are the largest species of hammerhead in the world.",
    scale: "26.52",
    image_src: "Great-Hammerhead-Shark-01.svg",
  },
  {
    name: "OCEANIC WHITETIP",
    sci_name: "CARCHARHINUS LONGIMANUS",
    range: "0 - 230",
    size: "400",
    habitat:
      "Found in open ocean. In epipelagic tropical and sub-tropical waters.",
    fun_fact:
      "Oceanic whitetip sharks  are one of the most threatened sharks which come under Appendix II of the CITES. They are sometimes found to hang around pilot whales.",
    scale: "17.39",
    image_src: "Oceanic-White-Tip-Shark-01.svg",
  },
  {
    name: "SHORTFINMAKO",
    sci_name: "ISURUS OXYRINCHUS",
    range: "0 - 150 ≤ 650",
    size: "445",
    habitat:
      "Truly pelagic species. Found in warm tropical and temperate waters.",
    fun_fact:
      "Shortfin mako sharks are the fastest shark in the world! They can reach swimming speeds upto 70km/hr and can be seen breaching the water surface while feeding.",
    scale: "19.35",
    image_src: "Short-Fin-Mako-Shark-01.svg",
  },
  {
    name: "TIGER",
    sci_name: "GALEOCERDO CUVIER",
    range: "0 - 350",
    size: "750",
    habitat:
      "Found in tropical and temperate waters and also found in estuaries and harbours.",
    fun_fact:
      "Tiger sharks are seasonal migrants, who travel to temparate waters from tropics during warmers months and vice versa during winter. Even though they are slow-moving, they can effectively ambush predators and also uses short bursts to capture prey.",
    scale: "32.61",
    image_src: "Tiger-Shark-01.svg",
  },
  {
    name: "WHITECHEEK",
    sci_name: "CARCHARHINUS DUSSUMIERI",
    range: "170",
    size: "121",
    habitat: "Reef-associated. Inshore over continental and insular slopes.",
    fun_fact:
      "The Whitecheek shark is small. It grows to a maximum of 1 metre!",
    scale: "5.26",
    image_src: "White-Cheek-Shark-01.svg",
  },
  {
    name: "LONGFINMAKO",
    sci_name: "ISURUS PAUCUS",
    range: "120 - 240",
    size: "427",
    habitat: "Found in warm tropical and temperate waters and in open ocean.",
    fun_fact:
      "The longfin mako shark was described just twenty years ago (in 2001). The females give birth to only 2 pups at a time, in shallow water. The rest of their life is spent far away from coasts, in the open ocean.",
    scale: "18.57",
    image_src: "Long-Fin-Mako-Shark-01.svg",
  },
  {
    name: "ARABIAN SMOOTHHOUND",
    sci_name: "MUSTELUS MOSIS",
    range: "≤ 400",
    size: "150",
    habitat: "Benthic, sometimes found in association with coral reefs.",
    fun_fact: "Arabian smoothhound sharks are known to do well in captivity.",
    scale: "6.52",
    image_src: "Arabian-Smooth-Hound-Shark-01.svg",
  },
  {
    name: "COMMON THRESHER",
    sci_name: "ALOPIAS VULPINUS",
    range: "0 - 400",
    size: "573",
    habitat:
      "It is an oceanic and coastal species. Found in tropical as well as cold temperate waters.",
    fun_fact:
      "Common thresher sharks are the largest of the three thresher sharks. They are fast swimmers and they can even be seen leaping out of water!",
    scale: "24.91",
    image_src: "Common-Thresher-Shark-01.svg",
  },
  {
    name: "DUSKY",
    sci_name: "CARCHARHINUS OBSCURUS",
    range: "0 - 200/400",
    size: "420",
    habitat: "Found in tropical and warm temperate waters.",
    fun_fact:
      "Dusky sharks have a diverse diet as they are known to feed on bottom dwellling and pelagic bony fishes, sharks, rays, saktes, cephalopods, gastropods, crustaceans and mammalian carrions. They also feed on inorganic objects!",
    scale: "18.26",
    image_src: "Dusky-Shark-01.svg",
  },
  {
    name: "BIGNOSE",
    sci_name: "CARCHARHINUS ALTIMUS",
    range: "25 - 450",
    size: "300",
    habitat:
      "Found in deep offshore waters on continental and insular shelves.",
    fun_fact:
      "They feed on fish and other small sharks and rays near the sea floor.",
    scale: "13.04",
    image_src: "Big-Nose-Shark-01.svg",
  },
  {
    name: "DWARF GULPER",
    sci_name: "CENTROPHORUS ATROMARGINATUS",
    range: "183 - 450",
    size: "87",
    habitat: "They are demersal on the upper continental slope.",
    fun_fact:
      "Discovered in the early 20th century, very little is relatively known about the behaviour of dwarf gulper sharks. They are known to gove birth to single pups!",
    scale: "3.78",
    image_src: "Dwarf-Gulper-Shark-01.svg",
  },
  {
    name: "SILKY",
    sci_name: "CARCHARHINUS FALCIFORMIS",
    range: "0 - 500",
    size: "350",
    habitat:
      "Found in topical-subtropical waters. Commonly found near the edges of continental shelves and over deepwater reefs.",
    fun_fact:
      "Silky sharks are very sensitive to sound and they are one of the most abundant pelagic sharks in the world. They also known as 'net eater shark' in the Pacific because they destroy tuna seine nets. As you guessed, their favourite food is tuna!",
    scale: "15.22",
    image_src: "Silky-Shark-01.svg",
  },
  {
    name: "INDIAN SWELLSHARK",
    sci_name: "CEPHALOSCYLLIUM SILASI",
    range: "250 - 500",
    size: "36",
    habitat:
      "They occur in deep benthic areas and are demersal on the continental slope.",
    fun_fact:
      "Like it's name suggests, the Indian swellshark can expand its body to make it appear larger to predators!",
    scale: "1.57",
    image_src: "Swell-Shark-01.svg",
  },
  {
    name: "PYGMY RIBBONTAIL CATSHARK",
    sci_name: "ERIDACNIS RADCLIFFEI",
    range: "71 - 766",
    size: "23",
    habitat: "Deep water benthic shark, found near muddy bottoms.",
    fun_fact:
      "The range of pygmy ribbontail catshark is striking compared to other mebers of the genus as it has a broad range!",
    scale: "1",
    image_src: "Ribbon-Tail-Cat-Shark-01.svg",
  },
  {
    name: "SILVERTIP",
    sci_name: "CARCHARHINUS ALBIMARGINATUS",
    range: "0 - 800",
    size: "300",
    habitat: "Prefers offshore island habitats.",
    fun_fact:
      "Silvertip sharks are good hunters with unpredictable behaviour and aggressive hunting tactics. These sharks feed on animals that are found on the seafloor and in the mid-water like eagle rays, tunas, small sharks, octopus and squid.",
    scale: "13.04",
    image_src: "Silver-Tip-Shark-01.svg",
  },
  {
    name: "SMALLFIN GULPER",
    sci_name: "CENTROPHORUS MOLUCCENSIS",
    range: "125 - 823",
    size: "100",
    habitat:
      "They are found on continental and insular shelves and upper slopes.",
    fun_fact:
      "Smallfin gulper sharks feed on bony fishes, other dogfish sharks, squid, octopus, shrimps and tunicates!",
    scale: "4.35",
    image_src: "Small-Fin-Gulper-Shark-01.svg",
  },
  {
    name: "BLUE",
    sci_name: "PRIONACE GLAUCA",
    range: "1 - 650/1000",
    size: "400",
    habitat: "Found in open water of tropical and temperate regions.",
    fun_fact:
      "Females and males of blue sharks are distinct (sexual dimorphism), with females growing larger with has thicker skins.",
    scale: "17.39",
    image_src: "Blue-Shark-01.svg",
  },
  {
    name: "SCALLOPED HAMMERHEAD",
    sci_name: "SPHYRNA LEWINI",
    range: "≤ 1000",
    size: "430",
    habitat: "Near deep waters to intertidal.",
    fun_fact:
      "Scalloped hammerhead adults are known to occur solitary, in pairs and even in schools! While juveniles occur in schools.",
    scale: "18.7",
    image_src: "Scalloped-Hammerhead-Shark-01.svg",
  },
  {
    name: "CROCODILE",
    sci_name: "PSEUDOCARCHARIAS KAMOHARAI",
    range: "590",
    size: "110",
    habitat: "They are found from the ocean surface to the depths.",
    fun_fact:
      "While many shark species are consumed, the flesh of crocodile sharks are not appreciated so the catch is usually discarded!",
    scale: "5.3",
    image_src: "Crocodile-Shark-01.svg",
  },
  {
    name: "GULPER",
    sci_name: "CENTROPHORUS GRANULOSUS",
    range: "50 - 1440",
    size: "170",
    habitat:
      "They are demersal and benthopelagic on continental and insular shelves.",
    fun_fact:
      "Gulper sharks have a gestation period of 2 years and a lot of information is yet to be known.",
    scale: "7.39",
    image_src: "Gulper-Shark-01.svg",
  },
  {
    name: "LITTLE GULPER",
    sci_name: "CENTROPHORUS UYATO",
    range: "50 - 1400",
    size: "110",
    habitat:
      "They are demersal on continental and insular shelves and slopes, they are also found on seafloor.",
    fun_fact:
      "Little gulper sharks are known to give birth to just 1 pup per litter!",
    scale: "4.78",
    image_src: "Little-Gulper-Shark-01.svg",
  },
  {
    name: "LONGNOSE VELVET DOGFISH",
    sci_name: "CENTROSCYMNUS CREPIDATOR",
    range: "230 - 1500",
    size: "130",
    habitat: "Circumglobal.",
    fun_fact: "Its occurrence is rare and it is rarely caught in fishing nets.",
    scale: "5.65",
    image_src: "Longnose-Velvet-Dogfish-Shark-01.svg",
  },
  {
    name: "ARROWHEAD DOGFISH",
    sci_name: "DEANIA PROFUNDORUM",
    range: "205 - 1800",
    size: "79",
    habitat: "They are found from continental and insular slopes.",
    fun_fact:
      "Arrowhead dogfishes are deep-water animals and the depth ranges from 205-1800m and they are found in large schools!",
    scale: "3.43",
    image_src: "Arrowhead-Dogfish-Shark-01.svg",
  },
  {
    name: "SMALL-TOOTH SAND TIGER",
    sci_name: "ODONTASPIS FEROX",
    range: "10 - 2000",
    size: "450",
    habitat:
      "They mainly live close to the seabed around islands and underwater seamounts characterised by narrow, steeply sloping shelves, or in the deep waters of continental outer shelves and upper slopes of larger land masses.",
    fun_fact:
      "Smalltooth sand tiger shark's Liver has high squalene content. They are known to show intrautrine cannibalism!",
    scale: "19.57",
    image_src: "Small-Tooth-Sand-Tiger-Shark-01.svg",
  },
  {
    name: "SMOOTH LANTERNSHARK",
    sci_name: "ETMOPTERUS PUSILLUS",
    range: "1120",
    size: "50",
    habitat:
      "Found in temperate and tropical waters worldwide. Arabian Sea (one specimen).  They are ecorded from continental and insular slopes.",
    fun_fact:
      "Very little is known about the biology of smooth latern sharks although they are known to feed on squids and fishes!",
    scale: "2.17",
    image_src: "Lantern-Shark-01.svg",
  },
  {
    name: "BIGEYE HOUNDSHARK",
    sci_name: "IAGO OMANENSIS",
    range: "110 - 2195",
    size: "37",
    habitat: "Deep waters.",
    fun_fact:
      "Female bigeye hound sharks prefer shallow waters, while males cool off in deeper water. Did you know the females always grow larger than males?",
    scale: "1.61",
    image_src: "Big-Eye-Hound-Shark-01.svg",
  },
  {
    name: "LEAFSCALE GULPER",
    sci_name: "CENTROPHORUS SQUAMOSUS",
    range: "145 - 2400",
    size: "164",
    habitat:
      "They are demersal on continental and insular shelves and slopes to the abyss.",
    fun_fact:
      "Leafscale gulper sharks are named so because they have tiny v-shaped scales on the skin that look like leaves!",
    scale: "7.13",
    image_src: "Leaf-Scale-Gulper-Shark-01.svg",
  },
  {
    name: "WHALE",
    sci_name: "RHINCODON TYPUS",
    range: "0 - 1928",
    size: "1700",
    habitat:
      "Found throughout tropical and warm temperate waters. Found to ocassionally enter coral atolls and lagoons.",
    fun_fact:
      "Whale sharks are the largest fish in our seas and oceans! They are filter feeders, meaning they feed on tiny floating food matter and particles like zooplakton and phytoplantons.",
    scale: "86.96",
    image_src: "Whale-Shark-01.svg",
  },
  {
    name: "VELVET DOGFISH",
    sci_name: "ZAMEUS SQUAMULOSUS",
    range: "2200",
    size: "84",
    habitat: "Atlantic, Indian and Pacific tropical oceans.",
    fun_fact:
      "There are only isolated occurrence reports for this species from Indian waters.",
    scale: "3.65",
    image_src: "Velvet-Dogfish-Shark-01.svg",
  },
];

function PopUp(div_ID) {
  // select shark according to div_ID
  const shark = sharkData[div_ID];

  // get PopUp renderer: id = div_ID + 100
  const pop_ID = parseInt(div_ID) + 100;
  const renderer = document.getElementById(`${pop_ID}`);

  // set data: use class_names for selects & renders
  renderer.querySelector(".name").innerHTML = shark.name + " SHARK";
  renderer.querySelector(".sci_name").innerHTML = shark.sci_name;
  renderer.querySelector(".range").innerHTML = shark.range + " M";
  renderer.querySelector(".size").innerHTML = shark.size + " M";
  renderer.querySelector(".hab").innerHTML = shark.habitat;
  renderer.querySelector(".fun").innerHTML = shark.fun_fact;

  // get photo, HTML photo_ID & render
  const photo_location = "./assets/" + shark.image_src;
  const photo_ID = parseInt(div_ID) + 200;
  document.getElementById(`${photo_ID}`).src = photo_location;

  // renderer renders
  renderer.hidden = false;
}

document.addEventListener(
  "click",
  function (event) {
    // if event doesn't have the correct selector, end task
    if (
      event.target.matches("popup") ||
      event.target.closest(".popup") ||
      event.target.matches("trigger") ||
      event.target.closest(".trigger")
    ) {
      return;
    }
    for (let element of document.getElementsByClassName("popup")) {
      if (element.hidden == false) {
        element.hidden = true;
      }
    }
  },
  false
);
