import React from 'react';
import {InfiniteMovingCards} from "@/components/ui/InfiniteMovingCards";
import {companies, testimonials} from "@/data";

const Clients = () => {
    return (
        <div className="py-20" id="testimonials">
           <h1 className='heading'>
          kind words from
          <span className='text-purple'> fellow peers</span>

           </h1>
        <div className=' flex flex-col items-center max-lg:mt-10'>
            <div className="h-[50vh] md:h-[30rem] rounded-md
               flex flex-col antialiased items-center  relative overflow-hidden ">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />



        </div>
        </div>
</div>
)
    ;
}

export default Clients;
