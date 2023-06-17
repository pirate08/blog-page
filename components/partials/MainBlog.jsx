import React from 'react';
import Image from 'next/image';

const Data = [
  {
    image: '/mainblog.avif',
    title:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In saepe suscipit title.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facere delectus odio, iste consequat sint ipsa quas quia sapiente nobis ad. Veritatis, non minus magni cumque accusantium, sunt expedita animi vitae eligendi provident velit autem possimus ex sequi, magnam eum iusto ducimus. Accusamus quidem architecto inventore at quisquam eius eaque, temporibus omnis quasi illo aliquam sed distinctio dolore pariatur ad placeat ullam molestiae officiis tempora vitae. Repellat eum accusantium, et minima accusamus voluptatum ratione sint labore iure aliquid culpa laborum, rerum quam laboriosam. Recusandae commodi illo obcaecati rerum quos error deserunt quam minima consectetur quas voluptate, voluptas debitis est ratione alias ipsum sit perspiciatis fuga sed voluptatibus, laborum dolor! Tempora est ducimus provident modi aperiam ipsam quas nemo dolorum eaque ipsum nulla accusamus aut, ab omnis exercitationem autem incidunt non? Velit maiores veritatis earum suscipit tempora unde distinctio ad hic harum architecto provident dicta sit, asperiores minus facere, sunt placeat dolorem sint corrupti consequatur? Sed quos amet adipisci minima, debitis expedita maxime. Saepe dolorem maiores est voluptatum doloremque molestiae omnis consequatur sed iusto ex, quis, tempora quaerat in cum facere consequuntur quo vel, numquam sunt culpa! Distinctio similique, optio necessitatibus provident natus officiis nisi eligendi vitae officia dicta itaque doloremque, vero consequatur dolorum consequuntur laboriosam omnis sapiente culpa quasi! Placeat consectetur at aliquam tempora mollitia totam ipsam temporibus natus, odit nulla maxime accusantium ut recusandae autem quibusdam suscipit nisi aperiam asperiores, vitae dignissimos unde minima? Nam voluptatem cum recusandae obcaecati tempora, ipsam eum laborum exercitationem cumque accusamus quam consequatur suscipit provident in fugit ad. Rem, harum quae, officiis deleniti excepturi consequatur magni recusandae numquam veritatis iure assumenda mollitia incidunt aliquam error pariatur, nihil velit dignissimos porro dolore fugit illo? Cum, minima quae. Impedit vel dolor, minus quos quas magni magnam corrupti perspiciatis voluptas totam asperiores rem ipsam consequatur aliquid itaque nihil dolorem, accusamus aspernatur atque. Est harum, quae dolore, totam voluptatem, dolorum esse illum nostrum pariatur nobis illo architecto provident eius magnam officiis at necessitatibus? Voluptatem cupiditate quam placeat suscipit architecto, temporibus quisquam quasi possimus sint harum exercitationem voluptatibus totam necessitatibus, ipsam ullam. Sequi magni odit voluptate impedit officiis, dolor mollitia culpa sit fugit veniam modi itaque id, asperiores beatae eum saepe a autem quia ex ducimus error quam eos? Neque ad quo iusto, perspiciatis voluptatem cumque nisi exercitationem nostrum vel quidem porro, aperiam laborum esse. Dolor hic unde magni doloribus reiciendis, incidunt odit maiores blanditiis assumenda fugit dolorum? Placeat deleniti ipsa, quae odit harum a? Rem recusandae, eum in expedita eligendi ullam itaque enim debitis velit quod deleniti totam quaerat? Vero, modi delectus! Earum maxime velit hic. Doloremque dicta aliquam adipisci dignissimos excepturi ipsa consectetur earum non ipsum neque voluptatum numquam minus sed nobis, voluptatibus quasi.',
    date: '30th May, 2023',
    status: 'Active',
  },
];

const MainBlog = () => {
  return (
    <div className='py-16 px-4 md:px-14'>
      {Data.map((data, index) => (
        <div key={index}>
          <div className='mb-7 flex justify-center'>
            <Image
              src={data.image}
              width={550}
              height={10}
              alt='Main Logo of Blog'
            />
          </div>
          <div className='mt-3 flex justify-center flex-col'>
            <h1 className='text-gray-500 text-xl md:text-2xl font-bold'>
              {data.title}
            </h1>
            {/* <p className='px-5 md:px-28 mt-4 text-sm md:text-md leading-relaxed'>
              {data.description}
            </p> */}
            <p className='w-full sm:w-2/2 md:w-4/4 lg:w-4/4 xl:w-5/5 mt-4 text-sm md:text-md leading-relaxed'>
              {data.description}
            </p>
          </div>
          <div className='mt-5 mb-2 text-sm text-gray-500 flex items-center justify-start gap-2'>
            <h3>{data.date}</h3>
            <h3 className='text-red-700 uppercase'>{data.status}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainBlog;
