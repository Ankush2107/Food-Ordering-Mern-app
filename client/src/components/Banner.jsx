import bannerpic from '../assets/Images/bannerpic.jpg'
import spicyfood from '../assets/Images/spicyfood.jpg'
const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0%  to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">

        {/* |Banner Image */}
        <div className="md:w-1/2 ">
            <img className='rounded-full' src={bannerpic} />
            <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
                <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                    <img src={spicyfood} alt='small img' className='rounded-2xl w-[7vw] '/>
                    <div className='space-y-1'>
                        <h5>Spicy noodles</h5>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className='text-red'>$19.88</p>
                    </div>
                </div>
                <div className='sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                    <img src={spicyfood} alt='small img' className='rounded-2xl w-[7vw] '/>
                    <div className='space-y-1'>
                        <h5>Spicy noodles</h5>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className='text-red'>$19.88</p>
                    </div>
                </div>
            </div>
        </div>

        {/* text */}
        <div className="md:w-1/2 space-y-7 px-4 ">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">Taste the Joy Where Every Bite Matters</h2>
            <p className="text-xl text-[#4A4A4A]">Embark on a culinary adventure with us! Indulge in delectable dishes crafted with love. From classic comforts to daring flavors.</p>
            <button className="btn bg-[#E59632] hover:bg-[#e5a24b] px-8 py-3 font-semibold text-white rounded-full">Order now</button>            
        </div>

      </div>
    </div>
  )
}

export default Banner
