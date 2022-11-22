import { useState, useReducer } from "react";
import Image from "next/image";

import FormInput from "../../common/UI/Form_Input/form-input.component";
import { Button } from "../../common/UI/Button/button.component";
import { Google, Bg } from "../../../assets/sign-in/index";
import { signInWithGoogle } from "../../../Firebase/firebase.utils";

import styles from "../../../styles/Login.module.scss";

export default function Login() {
  const initialState = { firebaseError: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  const [formValues, setFormValues] = useState({
    name: "",
    password: "",
    remember: false,
  });

  function reducer(state: object, action: any) {
    switch (action.type) {
      case "showFirebaseError":
        console.log(action);
        return {
          firebaseError: true,
        };
      case "hideFirebaseError":
        return {
          firebaseError: false,
        };
      default:
        throw new Error();
    }
  }

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => console.log(result))
      .catch((error) => {
        dispatch({ type: "showFirebaseError" });
        setTimeout(() => dispatch({ type: "hideFirebaseError" }), 5000);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    console.log(formValues);

    setFormValues({
      name: "",
      password: "",
      remember: false,
    });
  };

  return (
    <div className={`container-fluid grid grid-cols-2 ${styles.sign_in}`}>
      <div
        className={`col-start-1 col-end-3 row-start-1 row-end-2 z-10 ${styles.bg_container}`}
      >
        <Image src={Bg} alt="Picture of the dog" />
      </div>
      <div className="relative container mx-auto px-6 col-start-2 col-end-3 row-start-1 row-end-2 z-20 flex items-center">
        {state.firebaseError && (
          <div
            className="absolute bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 left-40 top-20"
            role="alert"
          >
            <p className="font-bold">Oops</p>
            <p>You accidentally closed the popup.</p>
          </div>
        )}
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md w-full mx-auto">
          <p className="text-base font-medium leading-relaxed mt-0 mb-4 text-black-800">
            Welcome to ASM
          </p>
          <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-black-600">
            Sign In
          </h3>
          <div className="flex my-6">
            <Button
              type="button"
              className="bg-blue-100 hover:bg-blue-300 text-blue-600 font-light py-2 px-4 rounded transition duration-150 ease-in-out flex align-middle gap-2"
              onClick={handleGoogleLogin}
            >
              <Image
                src={Google}
                alt="Picture of the google"
                width={26}
                height={26}
              />
              Sign in With Google
            </Button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <label
                htmlFor="Email"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Enter your username or email address
              </label>
              <FormInput
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="Email"
                aria-describedby="emailSignIn"
                placeholder="Username or email address"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
                children={undefined}
                handleChange={undefined}
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="Password"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Enter your Password
              </label>
              <FormInput
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="Password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                required
                children={undefined}
                handleChange={undefined}
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <FormInput
                  type="checkbox"
                  className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="RememberMe"
                  name="remember"
                  checked={formValues.remember}
                  onChange={() => {
                    setFormValues({
                      ...formValues,
                      remember: !formValues.remember,
                    });
                  }}
                  children={undefined}
                  handleChange={undefined}
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="RememberMe"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#!"
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Forgot password?
              </a>
            </div>
            <div className="flex">
              <Button
                type="submit"
                className=" w-40 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out ml-auto"
              >
                Sign in
              </Button>
            </div>
            <p className="text-gray-800 mt-6 text-center">
              Not a member?
              <a
                href="#!"
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                {" "}
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
