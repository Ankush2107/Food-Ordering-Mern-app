const serviceLists = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guest with our flavours and presentation",
    image: "/Images/home/services/icon1.png",
  },
  {
    id: 2,
    title: "Fast delivery",
    des: "We deliver your order promptly to your door",
    image: "/Images/home/services/icon2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explain menu and order with ease using our online Ordering",
    image: "/Images/home/services/icon3.png",
  },
  {
    id: 4,
    title: "Gift card",
    des: "Give the gift ofexceptional dinning with foodi gift cardf",
    image: "/Images/home/services/icon4.png",
  },
];
const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row item-center justify-between gap-12">
        {/* Text part */}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our story & services</p>
            <h2 className="title">Our Culinary Journey And Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
              cum. Ad non iste quia. Iusto aut eveniet porro maxime autem quam
              ea quaerat iure ut.
            </p>
            <button className="btn bg-[#E59632] text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>

        {/* Icons Part */}
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceLists.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-[#E59632] cursor-pointer hover:border hover:border-indigo-600 transition-all duration-300"
              >
                <img
                  src={service.image}
                  alt="service image"
                  className="mx-auto"
                />
                <h5 className="pt-3 font-semibold">{service.title}</h5>
                <p className="text-[#908D95]">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
