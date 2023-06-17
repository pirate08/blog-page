const blogsData = [
    {
        id: 1,
        image: '/latest1.avif',
        title:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In saepe suscipit title.',
        description:
          ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,laboriosam hic fugiat vel ipsa beatae cumque unde dolore quisquam eius deleniti delectus itaque veritatis consequatur quibusdam placeat rerum nemo numquam quod iure. Iure debitis numquam dignissimos, fugit minima nostrum inventore eius alias vel dolorum, vero id animi! Fugiat, ratione voluptatum.',
        date: '30th May, 2023',
        status: 'Active',
      },
      {
        id: 2,
        image: '/latest6.avif',
        title:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In saepe suscipit title.',
        description:
          ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,laboriosam hic fugiat vel ipsa beatae cumque unde dolore quisquam eius deleniti delectus itaque veritatis consequatur quibusdam placeat rerum nemo numquam quod iure. Iure debitis numquam dignissimos, fugit minima nostrum inventore eius alias vel dolorum, vero id animi! Fugiat, ratione voluptatum.',
        date: '5th October, 2022',
        status: 'Inactive',
      },
      {
        id: 3,
        image: '/latest3.avif',
        title:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In saepe suscipit title.',
        description:
          ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,laboriosam hic fugiat vel ipsa beatae cumque unde dolore quisquam eius deleniti delectus itaque veritatis consequatur quibusdam placeat rerum nemo numquam quod iure. Iure debitis numquam dignissimos, fugit minima nostrum inventore eius alias vel dolorum, vero id animi! Fugiat, ratione voluptatum.',
        date: '30th December, 2022',
        status: 'Inactive',
      },
      {
        id: 4,
        image: '/latest4.avif',
        title:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In saepe suscipit title.',
        description:
          ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,laboriosam hic fugiat vel ipsa beatae cumque unde dolore quisquam eius deleniti delectus itaque veritatis consequatur quibusdam placeat rerum nemo numquam quod iure. Iure debitis numquam dignissimos, fugit minima nostrum inventore eius alias vel dolorum, vero id animi! Fugiat, ratione voluptatum.',
        date: '23th April, 2023',
        status: 'Active',
      },
      {
        id: 5,
        image: '/latest7.avif',
        title:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In saepe suscipit title.',
        description:
          ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,laboriosam hic fugiat vel ipsa beatae cumque unde dolore quisquam eius deleniti delectus itaque veritatis consequatur quibusdam placeat rerum nemo numquam quod iure. Iure debitis numquam dignissimos, fugit minima nostrum inventore eius alias vel dolorum, vero id animi! Fugiat, ratione voluptatum.',
        date: '10th April, 2023',
        status: 'Active',
      },
      {
        id: 6,
        image: '/latest8.avif',
        title:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In saepe suscipit title.',
        description:
          ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,laboriosam hic fugiat vel ipsa beatae cumque unde dolore quisquam eius deleniti delectus itaque veritatis consequatur quibusdam placeat rerum nemo numquam quod iure. Iure debitis numquam dignissimos, fugit minima nostrum inventore eius alias vel dolorum, vero id animi! Fugiat, ratione voluptatum.',
        date: '3th January, 2023',
        status: 'Inactive',
      },
    
  ];
  
  export default function handler(req, res) {
    res.status(200).json(blogsData);
  }
  