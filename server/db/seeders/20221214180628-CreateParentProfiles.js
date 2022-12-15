'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ParentProfiles', [{
      UserId: 3,
      name: 'Oleg',
      country: 'Россия',
      city: 'Казань',
      title: 'Дом с маленькой милой пожилой собакой',
      introduction: ' У меня есть одна маленькая очень милая и послушная собака, которой около 14 с половиной лет, и аквариум с горсткой рыб.',
      location: 'Дом с одной спальней, полностью оборудованной кухней и двуспальной кроватью. В шаговой доступности десятки симпатичных кафе, ресторанов и магазинов',
      responsibilities: 'Ежедневное кормление и выгул Лили, ежедневное кормление рыб Мориса. Обычно я выгуливаю Лили на короткие прогулки 3-4 раза в день. Рыб можно кормить один раз в день.',
      parentPh1: null,
      parentPh2: null,
      parentPh3: null,
      parentPh4: null,
      parentPh5: null,
      dateSince1: '2022-12-20',
      dateUntil1: '2022-12-30',
      dateSince2: null,
      dateUntil2: null,
      dateSince3: null,
      dateUntil3: null,
      mainPhoto: null,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 4,
      name: 'Natasha',
      country: 'Россия',
      city: 'Сочи',
      title: 'Великолепная милая собачка',
      introduction: ' Я писатель, и мне часто приходится выезжать за границу как по работе, так и повидаться с семьей. Мой муж юрист и иногда путешествует со мной.',
      location: 'У нас есть прекрасный дом с 2 спальнями и 2 ванными комнатами, а также есть парки и кафе, где разрешено проживание с собаками. Есть прекрасные дорожки для прогулки. У нас есть огороженный, солнечный сад за домом, милые соседи и парковка во дворе. Вы бы остановились в гостевой спальне, в которой есть очень удобная двуспальная кровать и собственная просторная ванная комната.',
      responsibilities: 'Купер — милый и ласковый пес, который любит компанию и объятия, прогулки в парке,  и посиделки в кафе. У него есть доступ ко всем частям дома, включая мебель и кровать, но он не заходит в туалеты и ванные комнаты',
      parentPh1: null,
      parentPh2: null,
      parentPh3: null,
      parentPh4: null,
      parentPh5: null,
      dateSince1: '2023-01-14',
      dateUntil1: '2023-01-26',
      dateSince2: null,
      dateUntil2: null,
      dateSince3: null,
      dateUntil3: null,
      mainPhoto: null,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 5,
      name: 'Maria',
      country: 'Россия',
      city: 'Сочи',
      title: 'Любящая кошек домохозяйка для двух милых кошек',
      introduction: ' Мы любим путешествовать и проводить время на свежем воздухе. Нам нравится ходить пешком, кататься на велосипеде и прыгать в океан. Нам далеко за 50. Мы живем на достаточно оживленной улице (по крайней мере, днем), поэтому они полностью домашние кошки. ',
      location: 'Мы живем в теплом и уютном одноэтажном доме с 2 спальнями, 2 ванными комнатами и кабинетом. Зимой здесь уютно, а летом прохладно, а в жаркие дни есть испарительный кондиционер. Наш дом находится в 2 км от пляжа, но в нашем доме очень тихо и спокойно ночью.',
      responsibilities: 'Таззи и Ленни: * Наполните их миску с сухим кормом и убедитесь, что вода есть в обеих тарелках и в банке-ракушке на кухонном подоконнике. Это кувшин, наполненный ракушками и водой, из которой они любят пить. При необходимости замените наполнитель в лотке. В саду за домом и в палисаднике также требуется ручной полив, особенно в жаркие летние месяцы.',
      parentPh1: null,
      parentPh2: null,
      parentPh3: null,
      parentPh4: null,
      parentPh5: null,
      dateSince1: '2023-01-07',
      dateUntil1: '2023-01-15',
      dateSince2: null,
      dateUntil2: null,
      dateSince3: null,
      dateUntil3: null,
      mainPhoto: null,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 9,
      name: 'Andrey',
      country: 'Россия',
      city: 'Москва',
      title: '10-месячный щенок золотистого ретривера!',
      introduction: ' Мы любящие родителей 10-месячного щенка золотистого ретривера и будем в гостях у семьи.',
      location: 'Дом в районе с открытым пространством на заднем дворе. Дворы огорожены для собак. 2 км от центра по велосипедной дорожке. Легкая поездка в город для доступа к кафе, ресторанам, дорожке ручья и пивоварням. Гостевая комната с полноценным санузлом.',
      responsibilities: 'Позаботьтесь о нашем 10-месячном щенке золотистого ретривера. Кормите завтраком, обедом и ужином. Выпускайте на улицу несколько раз в день для перерывов в ванной (в большом огороженном дворе). Ходьба желательна, но необязательна. Она любит играть в мяч и привлекать внимание.',
      parentPh1: null,
      parentPh2: null,
      parentPh3: null,
      parentPh4: null,
      parentPh5: null,
      dateSince1: '2023-01-13',
      dateUntil1: '2023-01-22',
      dateSince2: null,
      dateUntil2: null,
      dateSince3: null,
      dateUntil3: null,
      mainPhoto: null,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 10,
      name: 'Marc',
      country: 'Китай',
      city: 'Пекин',
      title: 'Отличная собака, отличная квартира',
      introduction: 'Гас любит долгие прогулки по пляжу и обнюхивать все, что можно понюхать. С нетерпением жду встречи с доброй, опытной няней для моего щенка. Предпочтение няням-женщинам. Он просто лучше ладит с девушками. Я также надеюсь, что сможет прийти и встретиться с ним перед сеансом.',
      location: 'Хорошая, тихая квартира с одной спальней. Удобная полноценная кровать. Ванная комната с ванной. Место находится рядом с музеем и  ботаническим садом (оба настоятельно рекомендуется). Множество ресторанов и баров в этом районе с отличной едой и ночной жизнью.',
      responsibilities: 'Гас может быть очень расслабленным и спокойным дома, но в душе он очень энергичный пес, и ему лучше, когда он занимается спортом. Он должен гулять три раза в день, в том числе одну длительную прогулку, но он будет гулять столько, сколько вы захотите. Я бы попросил няню поливать мои растения раз в неделю.',
      parentPh1: null,
      parentPh2: null,
      parentPh3: null,
      parentPh4: null,
      parentPh5: null,
      dateSince1: '2022-12-21',
      dateUntil1: '2023-01-03',
      dateSince2: null,
      dateUntil2: null,
      dateSince3: null,
      dateUntil3: null,
      mainPhoto: null,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 13,
      name: 'Diana',
      country: 'Латвия',
      city: 'Рига',
      title: 'Праздник для любителей животных',
      introduction: 'Мы любим наших животных, ищем человека / пару, которые будут относиться к нашим питомцам и нашему дому с заботой. такая же забота, что и мы. Поскольку животные привыкли быть дома с кем-то большую часть дня, мы ищем кого-то, кто будет чаще оставаться дома, чем нет, на время пребывания, чтобы уменьшить любое беспокойство, которое может возникнуть у животных, пока нас нет. Маверик и Гусь — это мейн-куны, а Мерлин и Шарлотта, кинг-чарльз-кавалер-спаниели.',
      location: 'Мы находимся в красивом тихом районе с парком и парком для собак за углом, а также к торговому центру. Наш дом представляет собой современный невысокий дом с 4 спальнями и 2 ванными комнатами. ',
      responsibilities: 'У мейн-кунов шерсть длиннее, чем у большинства кошек, поэтому их нужно расчесывать каждую неделю. У кошек есть туалетный лоток в помещении, который нужно вычерпывать каждый день и менять раз в неделю. У кошек есть кормушки с микрочипами для печенья, которые необходимо наполнять ежедневно, а также миска с водой.  Мерлин и Чарли спят в загоне рядом с кроватью и привыкли вставать в 6:00 - 6:30 утра в будние дни, но могут с удовольствием поспать/вернуться в постель допоздна, если только им не нужно идти в туалет! Каждое утро им дают полчашки печенья. Они привыкли, что их периодически выпускают в течение дня.',
      parentPh1: null,
      parentPh2: null,
      parentPh3: null,
      parentPh4: null,
      parentPh5: null,
      dateSince1: '2023-02-07',
      dateUntil1: '2023-03-02',
      dateSince2: null,
      dateUntil2: null,
      dateSince3: null,
      dateUntil3: null,
      mainPhoto: null,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 14,
      name: 'Roman',
      country: 'Грузия',
      city: 'Кварели',
      title: 'Нужна няня, пока мама и папа путишествуют',
      introduction: ' Наши друзья описывают нас как спокойных, которые любят путешествовать и проводить время с обеими нашими собачками, которые с нами жевут 5 лет.',
      location: 'Тихая и маленькая деревня с большим количеством природы вокруг ',
      responsibilities: 'Наши собаки легки на подъем и не требуют многого. Их кормят один раз утром и ближе к вечеру и пару перекусов в день. Им достаточно 4-5 раз в день гулять в саду, а дополнительная прогулка по окрестностям станет для них приятным подарком. Они также любят время от времени ездить на машине.',
      parentPh1: null,
      parentPh2: null,
      parentPh3: null,
      parentPh4: null,
      parentPh5: null,
      dateSince1: '2023-01-18',
      dateUntil1: '2023-02-04',
      dateSince2: null,
      dateUntil2: null,
      dateSince3: null,
      dateUntil3: null,
      mainPhoto: null,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 17,
      name: 'Alina',
      country: 'Норвегия',
      city: 'Бодэ',
      title: 'Милый дом с милой кошкой',
      introduction: ' Привет! Мне нравится путешествовать и быть на природе. Вы можете найти меня в походах, на лыжах или на велосипеде. Многие из моих путешествий длятся один или два месяца, слишком долго, чтобы оставить мою кошку одну. Бакстеру лучше, если кто-то останется дома.',
      location: 'Дом расположен на тихой жилой улице. Домашние няни будут иметь доступ к нижней части дома, которая включает в себя спальню, ванную комнату, кабинет и гостиную, столовую и кухню открытой планировки с высокими потолками. Французские двери гостиной ведут в красивый ухоженный двор и деревянную террасу.',
      responsibilities: 'Я стараюсь свести обязанности к минимуму. Бакстера кормят два раза в день. Внутри растения поливают один раз в неделю. ',
      parentPh1: null,
      parentPh2: null,
      parentPh3: null,
      parentPh4: null,
      parentPh5: null,
      dateSince1: '2023-01-08',
      dateUntil1: '2023-01-31',
      dateSince2: null,
      dateUntil2: null,
      dateSince3: null,
      dateUntil3: null,
      mainPhoto: null,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 21,
      name: 'Ivan',
      country: 'Нидерланды',
      city: 'Роттердам',
      title: 'Кролик Чарли',
      introduction: ' Я люблю путешествовать, и мне нужен кто-то любящий и опрятный, чтобы заботиться о моем кролике Чарли, когда меня нет.',
      location: 'Я живу в современной студии (около 35 квадратных метров) недалеко от центра города. Рядом есть метро и трамвайные остановки.',
      responsibilities: '- кормить Чарли два раза в день утром и вечером; - добавить сено в стойку для сена; - уборка лотка один раз в день; - немного погладить Чарли; - поливайте мое растение чили, если это необходимо. Я буду отсутствовать более 2 недель, но даты обсуждаются. так что не стесняйтесь, напишите мне сообщение, если вы заинтересованы! не беспокойтесь, если у вас нет опыта работы с кроликами. мой кролик Чарли очень дружелюбный и легкий. Я дам полные инструкции, как только мы подключимся!',
      parentPh1: null,
      parentPh2: null,
      parentPh3: null,
      parentPh4: null,
      parentPh5: null,
      dateSince1: '2023-01-02',
      dateUntil1: '2023-01-17',
      dateSince2: null,
      dateUntil2: null,
      dateSince3: null,
      dateUntil3: null,
      mainPhoto: null,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 22,
      name: 'Ksenia',
      country: 'Испания',
      city: 'Валенсия',
      title: 'Прекрасный щенок и его пернатый друг',
      introduction: ' У меня нет особых интересов, кроме того, что я люблю гулять и читать. Также я люблю садоводство, но моя земля находится в стадии разработки. У меня есть канарейка по имени Трамп и щенок по имени Аникия, которому около 11 месяцев. Она собака-спасатель, очень живая и подвижная. Но очень любвеобильная собака. Мне нужна няня, которая любит животных. ',
      location: 'Это испанский рабочий город. Где вы найдете бары и рестораны, супермаркеты, ферритерии и множество прекрасных хлебных магазинов. Есть рынок который работает по пятницам. Есть поезд, который идет прямо в Валенсию, какой красивый город. У них есть прекрасный собор, рынок свежих продуктов и множество красивых зданий для изучения. Также вы найдете множество различных магазинов и ресторанов.',
      responsibilities: 'Аникия встает около 8 утра. Ее нужно сразу же отпустить гулять, так как она еще щенок.  Затем она завтракает сухим кормом. Я всегда проверяю, есть ли в ее миске еда на случай, если она проголодается.',
      parentPh1: null,
      parentPh2: null,
      parentPh3: null,
      parentPh4: null,
      parentPh5: null,
      dateSince1: '2023-02-01',
      dateUntil1: '2023-02-14',
      dateSince2: null,
      dateUntil2: null,
      dateSince3: null,
      dateUntil3: null,
      mainPhoto: null,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 23,
      name: 'Mikhail',
      country: 'Франция',
      city: 'Аяччо',
      title: 'Нужна няня для милой гималайской кошки по кличке Шанти.',
      introduction: 'Ищу одиночку или пару, которые будут дарить любовь и внимание моему коту.',
      location: 'Две спальни и две ванные, разделенные для уединения. В непосредственной близости от всех достопримечательностей, в деревнях. Плавание, теннис, пиклбол и гольф. Закрытый и частный. Прекрасные соседи. Близко к магазинам.',
      responsibilities: '1. Подарите Шанти (гималайскому коту) любовь и привязанность. 2. кормить ее 2 раза в день 3. ежедневно содержать в чистоте лоток 4. содержать дом в чистоте и порядке',
      parentPh1: null,
      parentPh2: null,
      parentPh3: null,
      parentPh4: null,
      parentPh5: null,
      dateSince1: '2023-01-23',
      dateUntil1: '2023-02-07',
      dateSince2: null,
      dateUntil2: null,
      dateSince3: null,
      dateUntil3: null,
      mainPhoto: null,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ParentProfiles', null, {});
  }
};