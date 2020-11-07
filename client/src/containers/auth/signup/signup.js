import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password1: '',

    });
    const { name, email, password, password1 } = formData;
    const onchange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password1) {
            console.log('Password is not correct');

        }
        else {
            const newUser = {
                name,
                email,
                password
            }
            try {
                const config = {

                }
                const body = JSON.stringify(newUser);
                const res = await axios.post('/api/users/signup', body);
                console.log(res.data);
            } catch (err) {
                console.error(err.response.data)
            }
        }
    };
    return (
        <div className=' container'>
            <form onSubmit={e => onSubmit(e)}>
                <h1>dshgfjsdfg</h1>
                <h2>jdjkfhhfh</h2>
                <div className='form-group'>
                    <label>Full name</label>
                    <input type='text' name='name' value={name} onChange={e => onchange(e)} required className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Email adress</label>
                    <input type='email' name='email' value={email} onChange={e => onchange(e)} required className='form-control' />
                </div>
                <div className='row cols-2 gap-10'>
                    <div className='col'>
                        <div className='form-group'>
                            <label>Password</label>
                            <input type='password' name='password' value={password} onChange={e => onchange(e)} className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <label>Confirm password</label>
                            <input type='password' name='password1' value={password1} onChange={e => onchange(e)} className='form-control' />
                        </div>
                    </div>
                </div>
                <button type="submit"
                    className='btn btn-primary btn-wide mt-5' >dkjsfh
                </button>
            </form >

        </div >

    )
};
export default Signup;