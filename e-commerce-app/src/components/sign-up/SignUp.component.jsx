import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpUser } from '../../store/actions/usersActions'
import { useHistory } from 'react-router-dom'

function SignUp() {

    const history = useHistory();
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const onChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            firstName,
            lastName,
            email,
            password
        }
        
        dispatch(signUpUser(newUser))
        history.push('/signin')
    }

    return (
        <div className="container my-5 py-5 z-depth-1">
            <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">

                        <form onSubmit={handleSubmit} className="text-center" action="#!">
                            <p className="h4 mb-4">Skapa Konto</p>

                            <div className="form-row mb-4">
                                <div className="col">
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={firstName}
                                        onChange={onChangeFirstName}
                                        className="form-control"
                                        placeholder="Förnamn"
                                        required />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        name="LastName"
                                        value={lastName}
                                        onChange={onChangeLastName}
                                        className="form-control"
                                        placeholder="Efternamn"
                                        required />
                                </div>
                            </div>

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
                                className="form-control"
                                placeholder="Password"
                                required />

                            <button
                                className="btn btn-elegant my-4 btn-block"
                                type="submit"
                            >Skapa Konto
                            </button>

                        </form>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp
