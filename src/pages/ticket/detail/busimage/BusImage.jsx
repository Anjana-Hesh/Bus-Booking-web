import React from 'react'

const BusImage = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-5 items-center border-t border-neutral-300 pt-7 pb-2">
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src="https://cmv360.s3.ap-southeast-1.amazonaws.com/Volvo_9600_Front_Left_Side_1_c6910bf5a1.webp"
          alt="Bus image"
          className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15"
        />
      </div>
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28KdZpSg0vNMMxZ-H_FxOV68fUNMAIIMuWDgTGxhB9WzUECB3TsZLfsX4Jcob9yjg3YE&usqp=CAU"
          alt="Bus image front"
          className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15"
        />
      </div>
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0481aFdgzm5_n2mnYbU_LLNhZlpq33DMyJ7YNWzOaQ0MEoscp07k0OVUBvstvGytD1o&usqp=CAU"
          alt="bus image"
          className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15"
        />
      </div>
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src="https://res.cloudinary.com/dnreeobav/image/fetch/c_scale,q_30,w_350,f_auto/l_text:Arial_20_bold:TrucksBuses.com,x_70,y_100,co_rgb:ffffff/https://www.trucksbuses.com/uploads/12950_0cf73fc2609748018803707354903a38Volvo-9600.jpeg"
          alt="bus image new look"
          className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15"
        />
      </div>
    </div>
  )
}

export default BusImage
