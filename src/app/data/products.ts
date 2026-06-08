export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  properties: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'ritual',
    name: 'Ритуальные свечи',
    description: 'Для церемоний и магических практик',
    image: 'https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXR1YWwlMjBjYW5kbGVzJTIwZGFya3xlbnwxfHx8fDE3ODA4OTMyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: 'flame'
  },
  {
    id: 'meditation',
    name: 'Медитативные свечи',
    description: 'Для практик осознанности и релаксации',
    image: 'https://images.unsplash.com/photo-1640095889747-2090ee12fa7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwY2FuZGxlcyUyMHBlYWNlZnVsfGVufDF8fHx8MTc4MDg5MzI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: 'sparkles'
  },
  {
    id: 'aromatic',
    name: 'Ароматические свечи',
    description: 'С натуральными эфирными маслами',
    image: 'https://images.unsplash.com/photo-1601479604588-68d9e6d386b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcm9tYXRpYyUyMGNhbmRsZXMlMjBzcGF8ZW58MXx8fHwxNzgwODkzMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: 'flower'
  },
  {
    id: 'protective',
    name: 'Защитные свечи',
    description: 'Для очищения и защиты пространства',
    image: 'https://images.unsplash.com/photo-1706922122814-12402375d89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNhbmRsZXMlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzgwODkzMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: 'shield'
  },
  {
    id: 'healing',
    name: 'Целительские свечи',
    description: 'Для восстановления энергии',
    image: 'https://images.unsplash.com/photo-1655892832074-4768d61f0431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNhbmRsZXMlMjBwdXJlfGVufDF8fHx8MTc4MDg5MzI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: 'heart'
  }
];

export const products: Product[] = [
  // Ritual candles
  {
    id: 'r1',
    name: 'Черная магическая свеча',
    description: 'Свеча для банишинга и защитных ритуалов. Изготовлена из натурального пчелиного воска с добавлением активированного угля.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1706922122814-12402375d89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNhbmRsZXMlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzgwODkzMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'ritual',
    properties: ['Банишинг', 'Защита', 'Время горения: 4 часа']
  },
  {
    id: 'r2',
    name: 'Красная свеча страсти',
    description: 'Для ритуалов любви и привлечения романтических отношений. С добавлением розового кварца.',
    price: 920,
    image: 'https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXR1YWwlMjBjYW5kbGVzJTIwZGFya3xlbnwxfHx8fDE3ODA4OTMyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'ritual',
    properties: ['Любовь', 'Страсть', 'Розовый кварц']
  },
  {
    id: 'r3',
    name: 'Зеленая свеча изобилия',
    description: 'Привлекает процветание и финансовое благополучие. Содержит травы базилика и корицы.',
    price: 880,
    image: 'https://images.unsplash.com/photo-1561212856-44e9bae482aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJuaW5nJTIwY2FuZGxlJTIwbXlzdGljYWx8ZW58MXx8fHwxNzgwODkzMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'ritual',
    properties: ['Изобилие', 'Процветание', 'Травы']
  },
  
  // Meditation candles
  {
    id: 'm1',
    name: 'Лавандовое спокойствие',
    description: 'Идеальна для вечерней медитации и расслабления. Натуральное эфирное масло лаванды.',
    price: 750,
    image: 'https://images.unsplash.com/photo-1640095889747-2090ee12fa7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwY2FuZGxlcyUyMHBlYWNlZnVsfGVufDF8fHx8MTc4MDg5MzI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'meditation',
    properties: ['Релаксация', 'Сон', 'Лаванда']
  },
  {
    id: 'm2',
    name: 'Сандаловая медитация',
    description: 'Помогает достичь глубокого состояния медитации. Аромат сандалового дерева.',
    price: 890,
    image: 'https://images.unsplash.com/photo-1655892832074-4768d61f0431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNhbmRsZXMlMjBwdXJlfGVufDF8fHx8MTc4MDg5MzI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'meditation',
    properties: ['Концентрация', 'Медитация', 'Сандал']
  },
  {
    id: 'm3',
    name: 'Лотос просветления',
    description: 'Для духовных практик и йоги. Тонкий аромат лотоса.',
    price: 820,
    image: 'https://images.unsplash.com/photo-1601479604588-68d9e6d386b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcm9tYXRpYyUyMGNhbmRsZXMlMjBzcGF8ZW58MXx8fHwxNzgwODkzMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'meditation',
    properties: ['Йога', 'Просветление', 'Лотос']
  },
  
  // Aromatic candles
  {
    id: 'a1',
    name: 'Эвкалипт и мята',
    description: 'Освежающий аромат для очищения ума. Идеальна для рабочего пространства.',
    price: 690,
    image: 'https://images.unsplash.com/photo-1601479604588-68d9e6d386b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcm9tYXRpYyUyMGNhbmRsZXMlMjBzcGF8ZW58MXx8fHwxNzgwODkzMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'aromatic',
    properties: ['Свежесть', 'Концентрация', 'Эвкалипт']
  },
  {
    id: 'a2',
    name: 'Роза и пачули',
    description: 'Чувственный аромат для создания романтической атмосферы.',
    price: 780,
    image: 'https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXR1YWwlMjBjYW5kbGVzJTIwZGFya3xlbnwxfHx8fDE3ODA4OTMyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'aromatic',
    properties: ['Романтика', 'Чувственность', 'Роза']
  },
  {
    id: 'a3',
    name: 'Ваниль и корица',
    description: 'Теплый уютный аромат для домашнего очага.',
    price: 710,
    image: 'https://images.unsplash.com/photo-1561212856-44e9bae482aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJuaW5nJTIwY2FuZGxlJTIwbXlzdGljYWx8ZW58MXx8fHwxNzgwODkzMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'aromatic',
    properties: ['Уют', 'Тепло', 'Ваниль']
  },
  
  // Protective candles
  {
    id: 'p1',
    name: 'Белая защитная свеча',
    description: 'Для очищения пространства от негативной энергии. С морской солью.',
    price: 800,
    image: 'https://images.unsplash.com/photo-1655892832074-4768d61f0431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNhbmRsZXMlMjBwdXJlfGVufDF8fHx8MTc4MDg5MzI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'protective',
    properties: ['Очищение', 'Защита', 'Морская соль']
  },
  {
    id: 'p2',
    name: 'Шалфей и можжевельник',
    description: 'Мощная защитная свеча для изгнания негатива.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1706922122814-12402375d89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNhbmRsZXMlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzgwODkzMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'protective',
    properties: ['Банишинг', 'Очищение', 'Шалфей']
  },
  
  // Healing candles
  {
    id: 'h1',
    name: 'Аметистовое исцеление',
    description: 'Для восстановления энергетического баланса. С кристаллом аметиста.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1640095889747-2090ee12fa7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwY2FuZGxlcyUyMHBlYWNlZnVsfGVufDF8fHx8MTc4MDg5MzI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'healing',
    properties: ['Исцеление', 'Баланс', 'Аметист']
  },
  {
    id: 'h2',
    name: 'Розовый кварц любви',
    description: 'Для исцеления сердечной чакры и привлечения любви.',
    price: 920,
    image: 'https://images.unsplash.com/photo-1655892832074-4768d61f0431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNhbmRsZXMlMjBwdXJlfGVufDF8fHx8MTc4MDg5MzI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'healing',
    properties: ['Любовь', 'Исцеление', 'Розовый кварц']
  }
];

export const banners = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1561212856-44e9bae482aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJuaW5nJTIwY2FuZGxlJTIwbXlzdGljYWx8ZW58MXx8fHwxNzgwODkzMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Магия огня в каждой свече',
    subtitle: 'Откройте силу ритуальных практик'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXR1YWwlMjBjYW5kbGVzJTIwZGFya3xlbnwxfHx8fDE3ODA4OTMyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Новая коллекция',
    subtitle: 'Свечи для медитации и релаксации'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1640095889747-2090ee12fa7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwY2FuZGxlcyUyMHBlYWNlZnVsfGVufDF8fHx8MTc4MDg5MzI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Скидка 15%',
    subtitle: 'На все ароматические свечи'
  }
];
