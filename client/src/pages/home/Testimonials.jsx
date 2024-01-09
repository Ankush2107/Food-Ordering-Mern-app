import { FaStar } from "react-icons/fa";
const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Image Part */}
        <div className="md:w-1/2">
          <img
            className="rounded-full"
            src="/Images/Testimonial/testimonial.jpg"
          />
        </div>

        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say About Us</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
              cum. Ad non iste quia. Iusto aut eveniet porro maxime autem quam
              ea quaerat iure ut.
            </blockquote>

            {/* avatar */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img
                      className="object-cover"
                      src="/Images/Testimonial/testimonial1.jpg"
                    />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img
                      className="object-cover"
                      src="/Images/Testimonial/testimonial2.jpg"
                    />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img
                      className="object-cover"
                      src="/Images/Testimonial/testimonial3.jpg"
                    />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="font-medium">4.9</span>{" "}
                  <span className="text-[#807e7e]">(18.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
