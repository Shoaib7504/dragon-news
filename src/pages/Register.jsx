// import { log } from 'firebase/firestore/pipelines';
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { CreateUser, setUser, userUpdate } = use(AuthContext)
    const navigate=useNavigate();
    const handelRegister = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const from = e.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log({ name, photo, email, password });

        CreateUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                //    console.log(user);
                userUpdate({ displayName: name, photoURL: photo })
                    .then(() => {

                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate("/")
                    }).catch((error) => {
                        // An error occurred
                        console.log(error);
                     setUser(user)
                    });
                  
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                console.log(errorCode);


            });


    }
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center">
                    Register your account
                </h2>
                <form onSubmit={handelRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name  */}
                        <label className="label">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input"
                            placeholder="Name"
                            required
                        />

                        <p className="text-xs text-error"></p>

                        {/* Photo URl  */}
                        <label className="label">Photo URl </label>
                        <input
                            name="photo"
                            type="text"
                            className="input"
                            placeholder="Photo URl"

                        />

                        {/* email  */}
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                        />

                        {/* password  */}
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input"
                            placeholder="Password"
                            required
                        />

                        <button type="submit" className="btn btn-neutral mt-4">
                            Register
                        </button>
                        <p className="font-semibold text-center pt-5">
                            Allready Have An Account ?{" "}
                            <Link className="text-[#D72050]" to="/auth/login">
                                Login
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;