export type Memory = {
  id: number;
  title: string;
  date?: string;
  text: string;
  image?: string;
  emoji?: string;
  type: "chat" | "photo" | "moment" | "distance";
};

export const memories: Memory[] = [
  {
    id: 1,
    title: "Il Primo Messaggio",
    date: "Il giorno in cui tutto è iniziato",
    text: "Quel messaggio che ha cambiato tutto. Non sapevo ancora che saresti diventata la persona più importante della mia vita.",
    emoji: "💬",
    type: "chat",
  },
  {
    id: 2,
    title: "Il Primo Appuntamento",
    date: "3 giorni a Parigi",
    text: "Mi hai invitato a casa tua a Parigi per 3 giorni. In quei 3 giorni mi sono innamorato come un pazzo, e ho capito che da lì in poi volevo che tu diventassi la mia queenie.",
    emoji: "✈️",
    type: "moment",
  },
  {
    id: 3,
    title: "Il Ritorno dal Mont Saint-Michel",
    date: "Un momento che non scorderò mai",
    text: "Mi hai fatto guidare, hai messo i piedi sul cruscotto e mi hai detto \"Fai attenzione per favore, non voglio morire 🥹\". Mi hai guardato con quei tuoi occhi bellissimi, il viso dell'angelo più bello mai esistito. Quel momento è rimasto nel mio cuore per sempre.",
    emoji: "🚗",
    type: "moment",
  },
  {
    id: 4,
    title: "Il Nostro Viaggio",
    date: "Dal sogno alla realtà",
    text: "La prima sera che ci siamo conosciuti mi hai detto che mi avresti portato in Giappone. Un anno più tardi ci siamo andati davvero. Ogni viaggio con te è un'avventura, non importa dove andiamo, basta che siamo insieme.",
    emoji: "🇯🇵",
    type: "photo",
  },
  {
    id: 5,
    title: "Quel Momento Speciale",
    date: "Quando ho capito che eri tu",
    text: "L'istante in cui ti avevo visto sola nel bar, ho pensato \"lei è la ragazza più bella in assoluto\". Lo sapevo e basta, eri tu, e con il tempo hai fatto altro che provarmelo più e più volte.",
    emoji: "💖",
    type: "moment",
  },
];

export const chatMessages = [
  { sender: "me", text: "I have finally did it, Eduard here 😅", delay: 0 },
  { sender: "me", text: "Have you already arrived?", delay: 1.2 },
  { sender: "her", text: "Ahaha yes just landed! 🥲", delay: 2.8 },
];

export const specialTraits = [
  "Quando fai la bambina",
  "Come affronti il mondo a testa alta",
  "La tua innocenza e il cuore dolce",
  "Il tuo sorriso che illumina tutto",
  "Come ridi delle mie battute stupide",
  "La tua dolcezza infinita",
  "Come mi fai sentire a casa",
  "I tuoi occhi che parlano",
  "La tua forza incredibile",
  "Come mi abbracci forte",
  "Il tuo modo di amarmi",
];

export const distanceInfo = {
  cityA: "Roma",
  cityB: "Parigi",
  distance: "1.100 km",
  message: "Ma nessuna distanza è troppo grande quando il cuore sa dove andare.",
};
