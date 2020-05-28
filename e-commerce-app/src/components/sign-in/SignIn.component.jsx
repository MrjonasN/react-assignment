import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signInUser } from '../../store/actions/usersActions'

function SignIn() {

    const history = useHistory()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            email,
            password
        }

        dispatch(signInUser(user))

        history.push('/')
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
                                onChange={e => setEmail(e.target.value)}
                                className="form-control mb-4"
                                placeholder="E-mail"
                                required />
                            <input
                                type="password"
                                name="password"
                                onChange={e => setPassword(e.target.value)}
                                className="form-control mb-4"
                                placeholder="Lösenord"
                                required />

                            <button
                                className="mt-5 btn btn-elegant btn-block my-4"
                                type="submit">
                                Logga in
                            </button>

                            <Link to="/signup">
                                <button
                                    className="btn btn-outline-elegant btn-block my-4"
                                    type="submit">
                                    Skapa konto
                                </button>
                            </Link>

                        </form>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default SignIn
