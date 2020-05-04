import React, { useRef } from 'react'

function SignIn() {

    const { email, password } = useRef()


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container my-5 py-5 z-depth-1">
            <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">

                        <form onSubmit={handleSubmit} className="text-center">

                            <p className="h4 mb-4">Logga in</p>

                            <input
                                ref={email}
                                type="email"
                                className="form-control mb-4"
                                placeholder="E-mail"
                                required />

                            <input
                                ref={password}
                                type="password"
                                name="password"
                                className="form-control mb-4"
                                placeholder="Password"
                                required />

                            <button
                                // onClick={handleClick}
                                className="btn btn-blue btn-block my-4"
                                type="submit">
                                Logga in
                            </button>

                        </form>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default SignIn
