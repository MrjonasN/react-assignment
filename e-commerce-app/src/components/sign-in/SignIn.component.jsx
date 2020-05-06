import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signInUser } from '../../store/actions/usersActions'

function SignIn() {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('email:', email, 'password:', password)

        dispatch(signInUser(email, password))
    }


    return (
        <div className="container my-5 py-5 z-depth-1">
            <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">

                        <form onSubmit={handleSubmit} className="text-center">
                            <p className="h4 mb-4">Logga in</p>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChangeEmail}
                                className="form-control mb-4"
                                placeholder="E-mail"
                                required />
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                className="form-control mb-4"
                                placeholder="Lösenord"
                                required />
                            <div>
                                <p>Inte medlem? <Link to="/signup">Skapa ett konto här</Link></p>
                            </div>
                            <button
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
