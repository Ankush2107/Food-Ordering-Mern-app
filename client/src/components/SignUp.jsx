import { Link } from "react-router-dom";
import { FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Modal from "./Modal";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data)
  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
       <div className="modal-box mt-0">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body"
            method="dialog"
          >
            <h3 className="font-bold text-lg">Create new account</h3>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email")}
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password")}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* login btn */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Signup"
                className="btn bg-[#E59632] text-white"
              />
            </div>

            <p className="text-center my-2">
              Have an account ?{" "}
              <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="underline text-red ml-1">
                Log in
              </button>{" "}
            </p>

            <Link 
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</Link>
          </form>

          {/* social sign in */}
          <div className="text-center space-x-3 mb-5">
            <button className="btn btn-circle hover:bg-[#E59632] hover:text-white">
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-[#E59632] hover:text-white">
              <FaInstagram />
            </button>
            <button className="btn btn-circle hover:bg-[#E59632] hover:text-white">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
      <Modal/>
    </div>
    
  )
}

export default SignUp
