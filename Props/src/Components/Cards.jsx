import React from 'react'

const Cards = (props) => {
  return (
      <div className='py-5 px-12 w-full'>
         <div className='flex justify-between'>
            <h4 className='bg-black text-white py-1 px-4 rounded-2xl'>TARGET AUDIENCE</h4>
            <button className='rounded-2xl bg-gray-300 py-1.5 px-4'>DIGITAL BANKING PLATFORM</button>
         </div>

         <div className='py-16 flex h-[90vh] gap-10'>
            <div className='w-2/5 h-full py-2.5 px-9 flex flex-col justify-between'>
               <div>
                  <h1 className='font-bold text-6xl mb-5'>Prospective <br /> customer <br /> segmentation</h1>
                  <p>Lorem ip hdb hdbb hbub sucbcu huh sum dolor sit amet consectetur adipisicing elit. Magni doloremque saepe odio optio qui dolores magnam nulla facilis ratione cupiditate!</p>
               </div>
               <div>start</div>
            </div>

            <div className='h-full w-3/5 flex flex-nowrap overflow-x-auto gap-6'>
               {props.users.map((elem, idx) => (
                  <div key={idx} className='h-full shrink-0 overflow-hidden relative w-80 rounded-3xl'>
                     <img
                        src={elem.img}
                            alt= 'Card image'
                        className='w-full h-full object-cover rounded-xl'
                     />
                     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
                        <div>
                           <p className='text-xl leading-relaxed text-white mb-14 drop-shadow-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.</p>
                           <div className='flex justify-between'>
                              <button style={{backgroundColor:elem.color}} className='text-white font-medium px-8 py-2 rounded-full'>{elem.tag}</button>
                              <button className='text-white font-medium px-3 py-2 rounded-full'>
                                 <i className='ri-arrow-right-line'></i>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Cards
