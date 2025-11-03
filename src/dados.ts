export interface Musica {
    titulo: string;
    id: number;
}

export interface Album {
    titulo: string;
    estilos: string[];
    tracklist: Musica[];
    ano: number;
    id: number;
}

export interface Artista {
    nome: string;
    estilos: string[];
}

export const discografiaJPEGMAFIA: Album[] = [
  {
    id: 1,
    titulo: "Veteran",
    ano: 2018,
    estilos: ["Experimental Hip Hop", "Glitch Hop", "Industrial Hip Hop", "Hardcore Hip Hop", "Cloud Rap", "Political Hip Hop", "Trap"],
    tracklist: [
      { id: 101, titulo: "1539 N. Calvert" },
      { id: 102, titulo: "Real Nega" },
      { id: 103, titulo: "Thug Tears" },
      { id: 104, titulo: "Dayum" },
      { id: 105, titulo: "Baby I'm Bleeding" },
      { id: 106, titulo: "My Thoughts On Neogaf Dying" },
      { id: 107, titulo: "Rock N Roll Is Dead" },
      { id: 108, titulo: "DD Form 214" },
      { id: 109, titulo: "Germs" },
      { id: 110, titulo: "Libtard Anthem" },
      { id: 111, titulo: "Panic Emoji" },
      { id: 112, titulo: "DJ Snitch Bitch Interlude" },
      { id: 113, titulo: "Whole Foods" },
      { id: 114, titulo: "Macaulay Culkin" },
      { id: 115, titulo: "Williamsburg" },
      { id: 116, titulo: "I Cannot Fucking Wait Until Morrissey Dies" },
      { id: 117, titulo: "Rainbow Six" },
      { id: 118, titulo: "1488" },
      { id: 119, titulo: "Curb Stomp" },
    ]
  },
  {
    id: 2,
    titulo: "All My Heroes Are Cornballs",
    ano: 2019,
    estilos: ["Experimental Hip Hop", "Glitch Hop", "Alternative R&B", "Cloud Rap", "Hardcore Hip Hop"],
    tracklist: [
      { id: 201, titulo: "Jesus Forgive Me, I Am A Thot" },
      { id: 202, titulo: "Kenan Vs. Kel" },
      { id: 203, titulo: "Beta Male Strategies" },
      { id: 204, titulo: "JPEGMAFIA TYPE BEAT" },
      { id: 205, titulo: "Grimy Waifu" },
      { id: 206, titulo: "PTSD" },
      { id: 207, titulo: "Rap Grow Old & Die x No Child Left Behind" },
      { id: 208, titulo: "All My Heroes Are Cornballs" },
      { id: 209, titulo: "BBW" },
      { id: 210, titulo: "PRONE!" },
      { id: 211, titulo: "Lifes Hard, Here's A Song About Sorrel" },
      { id: 212, titulo: "Thot Tactics" },
      { id: 213, titulo: "Free The Frail" },
      { id: 214, titulo: "Post Verified Lifestyle" },
      { id: 215, titulo: "BasicBitchTearGas" },
      { id: 216, titulo: "DOTS FREESTYLE REMIX" },
      { id: 217, titulo: "BUTTERMILK JESUS TYPE BEAT" },
      { id: 218, titulo: "Papi I Missed U" },
    ]
  },
  {
    id: 3,
    titulo: "LP! (Offline Version)",
    ano: 2021,
    estilos: ["Experimental Hip Hop", "Hardcore Hip Hop", "Cloud Rap", "Glitch Hop", "Alternative R&B"],
    tracklist: [
      { id: 301, titulo: "TRUST!" },
      { id: 302, titulo: "DIRTY!" },
      { id: 303, titulo: "NEMO!" },
      { id: 304, titulo: "END CREDITS!" },
      { id: 305, titulo: "HAZARD DUTY PAY!" },
      { id: 306, titulo: "GOD DON'T LIKE UGLY!" },
      { id: 307, titulo: "WHAT KINDA RAPPIN' IS THIS?" },
      { id: 308, titulo: "THOTS PRAYER!" },
      { id: 309, titulo: "ARE U HAPPY?" },
      { id: 310, titulo: "REBOUND!" },
      { id: 311, titulo: "💯" },
      { id: 312, titulo: "OG!" },
      { id: 313, titulo: "DIKEMBE!" },
      { id: 314, titulo: "TIRED, NERVOUS & BROKE!" },
      { id: 315, titulo: "🔥" },
      { id: 316, titulo: "NICE!" },
      { id: 317, titulo: "BMT!" },
      { id: 318, titulo: "THE GHOST OF RANKING DREAD!" },
      { id: 319, titulo: "DAM! DAM! DAM!" },
      { id: 320, titulo: "UNTITLED" },
    ]
  },
  {
    id: 4,
    titulo: "SCARING THE HOES",
    ano: 2023,
    estilos: ["Experimental Hip Hop", "Hardcore Hip Hop", "Glitch Hop", "Industrial Hip Hop", "Jazz Rap"],
    tracklist: [
      { id: 401, titulo: "Lean Beef Patty" },
      { id: 402, titulo: "Steppa Pig" },
      { id: 403, titulo: "SCARING THE HOES" },
      { id: 404, titulo: "Garbage Pale Kids" },
      { id: 405, titulo: "Fentanyl Tester" },
      { id: 406, titulo: "Burfict!" },
      { id: 407, titulo: "Shut Yo Bitch Ass Up / Muddy Waters" },
      { id: 408, titulo: "Orange Juice Jones" },
      { id: 409, titulo: "Kingdom Hearts Key" },
      { id: 410, titulo: "God Loves You" },
      { id: 411, titulo: "Run The Jewels" },
      { id: 412, titulo: "Jack Harlow Combo Meal" },
      { id: 413, titulo: "HOE (Heaven on Earth)" },
      { id: 414, titulo: "Where Ya Get Ya Coke From?" },
    ]
  },
  {
    id: 5,
    titulo: "I LAY DOWN MY LIFE FOR YOU",
    ano: 2024,
    estilos: ["Experimental Hip Hop", "Hardcore Hip Hop", "Rap Rock", "Industrial Hip Hop"],
    tracklist: [
      { id: 501, titulo: "i scream this in the mirror before i interact with anyone" },
      { id: 502, titulo: "SIN MIEDO" },
      { id: 503, titulo: "I'll Be Right There" },
      { id: 504, titulo: "it's dark and hell is hot" },
      { id: 505, titulo: "New Black History" },
      { id: 506, titulo: "don't rely on other men" },
      { id: 507, titulo: "vulgar display of power" },
      { id: 508, titulo: "Exmilitary" },
      { id: 509, titulo: "JIHAD JOE" },
      { id: 510, titulo: "JPEGULTRA!" },
      { id: 511, titulo: "either on or off the drugs" },
      { id: 512, titulo: "loop it and leave it" },
      { id: 513, titulo: "Don't Put Anything On The Bible" },
      { id: 514, titulo: "i recovered from this" },
    ]
  }
];