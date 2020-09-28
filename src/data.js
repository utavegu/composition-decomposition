const newsData = {
  categories: ['Коронавирус', 'Политика', 'Котики'],
  headlines: [
    'Барсик похитил тунца во время застолья',
    'Борис оборвал шторы в гостиной',
    'Пушок покрыл мурку',
    'Рыжему отсекли яйца',
    'Хомяк "Ренегад третий" ворует еду из миски Клауда',
  ],
  link: [
    'https://www.somesite/news-1',
    'https://www.somesite/news-2',
    'https://www.somesite/news-3',
    'https://www.somesite/news-4',
    'https://www.somesite/news-5',
  ],
  icons: [
    'https://www.allicons/icon-1',
    'https://www.allicons/icon-2',
    'https://www.allicons/icon-3',
    'https://www.allicons/icon-4',
    'https://www.allicons/icon-5',
  ]
};
// Однако? иконки нигде не задействуются, так как это декоративный элемент и прописывается в стилях. А стилизую я по-минимуму.

const exchangeData = [{
  exchangeName: 'USD',
  currentRate: '75.90',
}, {
  exchangeName: 'EUR',
  currentRate: '89.54',
}];

const longreadData = {
  image: 'https://diycraft.ru/wp-content/uploads/2015/07/mzkpgsovdb4.jpg',
  width: '150px',
  height: '150px',
  alternative: 'Пепельница из банки',
  heading: 'Как соорудить пепельницу из банки от пива за 40 минут?',
  description: 'Ума не приложу как вы до сих пор жили без этой информации',
};

const appletsData = [{
  heading: 'Погода',
  description: '"Погода сегодня, конечно, пи**ец... Но завтра будет лучше!" - говорят синоптики',
}, {
  heading: 'Телепрограмма',
  description: 'Смотрите сегодня! Но лучше не смотрите',
}, {
  heading: 'Расписание',
  description: 'Расписание автобусов от Западного автовокзала', 
}];

const searchCategoriesData = [
  'Всё', 'Картинки', 'Видео', 'Новости', 'Карты'
];

export {newsData, exchangeData, longreadData, appletsData, searchCategoriesData};