import { Link } from "react-router-dom";
import { FaGithub, FaGoogle, FaInstagram } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Modal = () => {
  const {
        register,
        handleSubmit,
        formState: { errors },
  } = useForm();

  const { signUpWithGmail } = useContext(AuthContext);

  // google signin
  const handleLogin = () => {
    signUpWithGmail().then((result) => {
      const user = result.user;
      alert("Login successful");
    }).catch((error) => console.log(error));
  }

  const onSubmit = (data) => console.log(data);
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box mt-0">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body"
            method="dialog"
          >
            <h3 className="font-bold text-lg">Please login</h3>

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
                value="login"
                className="btn bg-[#E59632] text-white"
              />
            </div>

            <p className="text-center my-2">
              Don&apos;t have an account ?{" "}
              <Link to="/signup" className="underline text-red ml-1">
                Sign up
              </Link>{" "}
            </p>
            <button 
                htmlFor="my_modal_5"
                onClick={()=>document.getElementById('my_modal_5').close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</button>
          </form>

          {/* social sign in */}
          <div className="text-center space-x-3 mb-5">
            <button className="btn btn-circle hover:bg-[#E59632] hover:text-white" onClick={handleLogin}>
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
    </dialog>
  );
};
export default Modal;
