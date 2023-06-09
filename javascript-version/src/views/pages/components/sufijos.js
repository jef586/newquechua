const sufijos = [
    {
        id:1,
        name: "-man",
        suf: "man",
        value: "a o hacia",
        words: ["Cochabamba", "Jesús", "pay","jaqay"],
        means: ["hacia Cochabamba", "a (o hacia) Jesús", "a (o a hacia) él", "hacia allá"],
        descr: "Indica el sentido direccional de la acción del verbo hacia un objetivo determinado.",
        qu1:"Llajtaman chayan.",
        esp1:"Llega al pueblo.",
        qu2: "Warmiman willan.",
        esp2:"Le avisa a la mujer.",
    },
    {
        id:2,
        name: "-chá",
        suf: "chá",
        value: "probablemente, seguramente",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Indica duda (con grado de inseguridad mayor que -sina).",
        qu1:"Paykunachá chayamunku.",
        esp1:"Seguramente ellos llegaron.",
        qu2: "",
        esp2:"",
    },
    {
        id:3,
        name: "-chi",
        suf: "chi",
        value: "hacer",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "El sujeto causa o hace que otra persona ejecute la acción del verbo.",
        qu1:"Llank’achini.",
        esp1:"Le hago trabajar.",
        qu2: "",
        esp2:"",
    },
    {
        id:4,
        name: "-chu",
        suf: "chu",
        value: "equivale al signo de pregunta",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Cuestiona o interroga. Se utiliza para preguntas cuya respuesta sea sí o no.",
        qu1:"Tataykichu llank’an?",
        esp1:"¿Trabaja tu papá?",
        qu2: "Llank’anchu tatayki?",
        esp2:"¿Trabaja tu papá?",
    },
    {
        id:5,
        name: "-chu",
        suf: "chu",
        value: "no",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Cuando tiene significado negativo (y no interrogativo), se emplea siempre con mana(no) o ama(no prohibitivo o imperativo)",
        qu1:"Mana yachanichu",
        esp1:"No sé",
        qu2: "Ama pujllaychu",
        esp2:"¡No juegues!",
    },
    {
        id:6,
        name: "-kama",
        suf: "kama",
        value: "hasta, hasta que",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Fija o limita la acción del verbo.Señala el término o punto final de una duración.",
        qu1:"Wasikama rinki.",
        esp1:"Vas hasta la casa.",
        qu2: "",
        esp2:"",
    },
    {
        id:7,
        name: "-ku",
        suf: "ku",
        value: "se , me , te",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "La acción del verbo recae sobre el mismo sujeto.",
        qu1:"Urmanki.",
        esp1:"Acabas de caer, caerás.",
        qu2: "Urmakunki.",
        esp2:"Acabas de caerte , te caerás",
    },
    {
        id:8,
        name: "-kuna",
        suf: "kuna",
        value: "plural",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Generalmente se traduce como el plural del castellano. Se utiliza cuando la letra final del objeto es una consonante. Cuando la letra final del objeto es vocal se utiliza s como en español",
        qu1:"Llank´ajkuna",
        esp1:"Trabajadores",
        qu2: "Wasis",
        esp2:"casas",
    },
    {
        id:9,
        name: "-lla",
        suf: "lla",
        value: "solo o nomás",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Suaviza o minimiza el significado de la palabra a la cual se añade.",
        qu1:"Noqalla parlani.",
        esp1:"Yo nomás hablo (solamente yo hablo).",
        qu2: "Noqaqa parlallani.",
        esp2:"Yo hablo nomás (solamente hablo).",
    },
    {
        id:10,
        name: "-manta",
        suf: "manta",
        value: "de, desde",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Indica sentido direccional de la acción del verbo partiendo o procediendo de la palabra marcada con el sufijo en cuestión.",
        qu1:"Llajtamanta jamunku.",
        esp1:"Vienen del pueblo.",
        qu2: "Qanmanta parlasharqayku.",
        esp2:"Estabamos hablando de tí.",
    },
    {
        id:11,
        name: "-mu",
        suf: "mu",
        value: "ir a",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Indica que la acción se realiza después del movimiento o desplazamiento de la persona ejecutora del verbo, acercándose o alejándose de los hablantes de referencia.",
        qu1:"Llank’amorqa.",
        esp1:"El fue a trabajar (alejándose).",
        qu2: "Apamushan.",
        esp2:"Está trayendo (acercándose).",
    },
    {
        id:12,
        name: "-kampu",
        suf: "kampu",
        value: "Combinación de -ku (reflexivo: me , se , te) + -mu (movimiento) + -pu (le o lo)",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "El significado no es la simple suma de los significados individuales de los sufijos componentes. -Mu mantiene su significado básico de movimiento. La combinación -ku + -pu le da la connotación de acción realizada súbitamente, con determinación o decisión. La particula -pu pierde su significado de transitividad “para otro”, pues la partícula -ku “reflexivo” domina el significado.",
        qu1:"Ruwakampuni.",
        esp1:"Voy (fuí) a hacérmelo.",
        qu2: "Voy (me traslado, me hago trasladar) a hacer (para mi).",
        esp2:"",
    },
    {
        id:13,
        name: "-kamu",
        suf: "kamu",
        value: "Combinación de -ku (reflexivo: me , se , te) + -mu (movimiento).",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "La acción del verbo se efectúa para el sujeto conjugado, es decir funciona como reflexivo; pero además se indica el movimiento del sujeto para efectuar el verbo.",
        qu1:"Ruwakamuni.",
        esp1:"",
        qu2: "",
        esp2:"",
    },
    {
        id:14,
        name: "-kapu",
        suf: "kapu",
        value: "Combinación de -ku (reflexivo: me , se , te) + -pu (le o lo)",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "La connotación de -kapu es efectuar la acción verbal para uno mismo Igual que -kamu ,-ku domina a -pu - implicando además una decisión final y repentina.",
        qu1:" Rejsikapuni.",
        esp1:"Me lo reconozco (rápidamente,repentinamente).",
        qu2: "Apakaporqa.",
        esp2:"Se lo llevó (después de decidirse).",
    },
    {
        id:15,
        name: "-mpu",
        suf: "mpu",
        value: "ir a... para otra persona. Combinación de -mu (movimiento) + -pu (le o lo).",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "El significado de la combinación es equivalente a la suma de los sufijos mu y pu",
        qu1:" Ruwampuni.",
        esp1:"Se lo voy a hacer.",
        qu2: "",
        esp2:"",
    },
    {
        id:16,
        name: "-na",
        suf: "na",
        value: "Convierte un verbo en sustantivo",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "De temas verbales deriva sustantivos con el significado de instrumento apto para realizar la acción significada por el radical verbal.",
        qu1:"Pichay, pichana ",
        esp1:"Instrumento que sirve para barrer (escoba, escobilla, escobón, etc.)",
        qu2: "",
        esp2:"",
    },
    {
        id:17,
        name: "-ña",
        suf: "ña",
        value: "Ya",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Generalmente funciona como sufijo. A veces ocurre como forma suelta antes del verbo, y bastante  frecuentemente ocurre repetido en la oración precediendo al verbo como forma independiente y  pospuesta como sufijo a alguna forma de la oración.",
        qu1:" Chayamunkuña",
        esp1:"Ya han llegado.",
        qu2: "Ña chayamunkuña.",
        esp2:"Ya han llegado.",
    },
    {
        id:18,
        name: "-pacha",
        suf: "pacha",
        value: "Ahora",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Con verbos indica que la acción se lleva a cabo ya, se reitera que el verbo se está realizando.",
        qu1:"Kunanpacha",
        esp1:"Ahora mismo",
        qu2: "",
        esp2:"",
    },
    {
        id:19,
        name: "-mantapacha",
        suf: "mantapacha",
        value: "Combinación de -manta y -pacha. Desde",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Advervio de lugar. Desde",
        qu1:"Cochabambamantapacha jamuni",
        esp1:"Vengo desde Cochabamba",
        qu2: "",
        esp2:"",
    },
    {
        id:20,
        name: "-nej",
        suf: "nej",
        value: "Mediante, por",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Mediante . Tambien se utiliza para indicar la proximidad a un lugar.  ",
        qu1:"Jesusnejta mañakunchej",
        esp1:"Oramos por medio de Jesus",
        qu2: "Chaynejta rina",
        esp2:"Vamos por allá",
    },
    {
        id:21,
        name: "-paj",
        suf: "paj",
        value: "para (daño o provecho)",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "La palabra marcada con este sufijo es la destinataria u objeto de alguna otra palabra",
        qu1:"Kay waseqa qanpaj",
        esp1:"Esta casa es para tí",
        qu2: "kayqa allininchejpaj kasqanta",
        esp2:"Esto es para nuestro bien",
    },
    {
        id:22,
        name: "-pa",
        suf: "pa",
        value: "De (posesivo)",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Se emplea antecediendo a los nombres modificados con posesivos y que terminan en consonantes o  semiconsonantes. Marca el poseedor. Las palabras que terminan en vocal utilizan -j. El objeto que se posee lleva el sufijo -n si termina en vocal , si termina en consonante -nin",
        qu1:"Diospa wasin",
        esp1:"La casa de Dios",
        qu2: "",
        esp2:"",
    },
    {
        id:23,
        name: "-j",
        suf: "j",
        value: "De (posesivo)",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Se emplea antecediendo a los nombres modificados con posesivos y que terminan en vocal. Marca el poseedor. Las palabras que terminan en consonante utilizan -pa. El objeto que se posee lleva el sufijo -n si termina en vocal , si termina en consonante -nin",
        qu1:"Wasej punkunta",
        esp1:"La puerta de la casa",
        qu2: "",
        esp2:"",
    },
    {
        id:24,
        name: "-j",
        suf: "j",
        value: "Personaliza el verbo",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "",
        qu1:"Ruwaj",
        esp1:"Hacedor , creador",
        qu2: "",
        esp2:"",
    },
    {
        id:25,
        name: "-pi",
        suf: "pi",
        value: "En",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Indica lugar donde se realiza la acción del verbo",
        qu1:"Potosipi tiyakun",
        esp1:"Vive en Potosí",
        qu2: "",
        esp2:"",
    },
    {
        id:26,
        name: "-pis",
        suf: "También , incluso , aunque",
        value: "",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "",
        qu1:"",
        esp1:"",
        qu2: "",
        esp2:"",
    },
    {
        id:27,
        name: "-pu",
        suf: "pu",
        value: "le, lo",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Se aplica la acción del verbo a la persona",
        qu1:"qoripuway",
        esp1:"Damelo por favor",
        qu2: "",
        esp2:"",
    },
    {
        id:28,
        name: "-puni",
        suf: "puni",
        value: "siempre, sin ningún género de duda, con toda certeza",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Individualiza enfáticamente la palabra a la que se añade. La traducción “siempre” corresponde al  castellano popular.",
        qu1:"Qan ruwankipuni",
        esp1:"Tu haces siempre",
        qu2: "",
        esp2:"",
    },
    {
        id:29,
        name: "-qa",
        suf: "qa",
        value: "Énfasis",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "La palabra marcada con este sufijo adquiere la mayor importancia o foco en la oración",
        qu1:"Noqaqa qhellqata leeni",
        esp1:"Yo leo el escrito (soy yo quien lee el escrito).",
        qu2: "Noqa qhellqataqa leeni",
        esp2:"Yo leo el escrito (lo que yo leo es el escrito).",
    },
    {
        id:30,
        name: "-raj",
        suf: "raj",
        value: "Todavía, aún",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Indica que la acción del verbo todavía ne se ha ejecutado, o que el nombre debe aún ejecutar un verbo o  ser objeto del mismo. Con adjetivos indica continuación del estado indicado por el adjetivo. ",
        qu1:"Manaraj yachanichu",
        esp1:"Todavía no sé",
        qu2: "",
        esp2:"",
    },
    {
        id:31,
        name: "-ri",
        suf: "ri",
        value: "Por favor",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Esta característica semántica suaviza y endulza las órdenes que se dan con el modo imperativo. Es frecuente la repetición de este sufijo en contexto en que se quiere subrayar delicadamente el ruego y el  respeto. ",
        qu1:"Wisq´ay chay punkuta",
        esp1:"¡Cierra esa puerta!",
        qu2: "Wisq’aripuway chay punkuta",
        esp2:"Cierrame esa puerta por favor",
    },
    {
        id:32,
        name: "-rí",
        suf: "rí",
        value: "Pregunta",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Expresa una interrogación general acerca de cualquier tema.",
        qu1:"Payrí?",
        esp1:"¿Y él? ",
        qu2: "Noqaykurí?",
        esp2:"¿Y nosotros?",
    },
    {
        id:33,
        name: "-rqo",
        suf: "rqo",
        value: "",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "",
        qu1:"",
        esp1:"",
        qu2: "",
        esp2:"",
    },
    {
        id:34,
        name: "-su",
        suf: "su",
        value: "a ti",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Señala que el objeto directo o indirecto de la acción verbal es una segunda persona y que el agente de la  acción verbal es una persona distinta de la misma.",
        qu1:"Anchata munakusunki.",
        esp1:"Él te quiere mucho.",
        qu2: "Imatataj mamayki qosorqa? ",
        esp2:"¿Que te dio tu madre?",
    },
    {
        id:35,
        name: "-sha",
        suf: "sha",
        value: "",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Señala que la acción está realmente en curso o en proceso en el momento en que se está hablando o  estuvo o estará en curso o proceso en el momento del que se está hablando. Este morfema tiene las  variantes -sa, -sia, -shia, cuyo uso puede ser más o menos común según el orígen geográfico del  hablante. En Cochabamba, la forma -sa es predominante.",
        qu1:"Tatay llank’ashan",
        esp1:"Mi padre está trabajando.",
        qu2: "",
        esp2:"",
    },
    {
        id:36,
        name: "-sina ",
        suf: "sina",
        value: "Creer que , duda",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Expresa duda que tiende a inclinarse más a la afirmación, generalmente se traduce por “creo que...”. No  ocurre nunca en interrogaciones",
        qu1:"Tataykisina punkuta takamushan.",
        esp1:"Parece que tu papá está llamando a la puerta",
        qu2: "Manasina",
        esp2:"Creo que no",
    },
    {
        id:37,
        name: "-sqa",
        suf: "sqa",
        value: "",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "",
        qu1:"",
        esp1:"",
        qu2: "",
        esp2:"",
    },
    {
        id:38,
        name: "-ta",
        suf: "ta",
        value: "A",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Señala el complemento (objeto) directo del verbo. Tiene dos variantes alomórficas en variación libre: el  sufijo -ta y la carencia del mismo con acento en la última sílaba",
        qu1:"T´antata (t´antá) sapa p´unchay rantini",
        esp1:"Compro pan cada día.",
        qu2: "",
        esp2:"",
    },
    {
        id:39,
        name: "-taj",
        suf: "taj",
        value: "",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "",
        qu1:"",
        esp1:"",
        qu2: "",
        esp2:"",
    },
    {
        id:40,
        name: "-tawan",
        suf: "tawan",
        value: "después de",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "",
        qu1:"Mikhuytawan, ovejasman qaraj risaj.",
        esp1:"Enseguida después de comer, iré alimentar las ovejas.",
        qu2: "",
        esp2:"",
    },
    {
        id:41,
        name: "-wa",
        suf: "wa",
        value: "Me , nos",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Señala que el objeto directo o indirecto de la acción verbal es una primera persona y que el agente de la  acción verbal es otra persona distinta de la misma. ",
        qu1:"Pay qhawawan",
        esp1:"El me mira.",
        qu2: "Paykuna yanapawanchej",
        esp2:"Ellos nos ayudan",
    },
    {
        id:42,
        name: "-wan",
        suf: "wan",
        value: "Con",
        words: ["", "", "",""],
        means: ["", "", "", ""],
        descr: "Señala compañia",
        qu1:"Mamanwan riporqa",
        esp1:"Se fue con su madre",
        qu2: "",
        esp2:"",
    },
    








    
]

export default  sufijos