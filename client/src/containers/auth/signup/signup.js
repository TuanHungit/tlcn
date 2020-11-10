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
                password,
            }
            try {
                const config = {
                    headers: {
                        'Content-Type': 'Application/json'
                    }
                }
                const body = JSON.stringify(newUser);
                const res = await axios.post('users/signup', body,config);
                console.log(res.data);
            } 
            catch (err) {
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
                <button type="submit" className='btn btn-primary btn-wide mt-5' >
                    Sign Up
                </button>
            </form >

     </div >
    //     <div role='tabpanel'
    //     className='tab-pane fade in'
    //     id='loginFormTabInModal-register' >
    //     <div className='form-login'>
    //       <div className='form-header'>
    //         <h4>Join SiteName for Free</h4>
    //         <p> Access thousands of online classNamees in design,
    //           business, and more!
    //       </p>
    //       </div>
    //       <div className='form-body'>
    //         <form method='post' action='tour-detail-02.html#'>
    //           <div className='d-flex flex-column flex-lg-row align-items-stretch'>
    //             <div className='flex-grow-1 bg-primary-light'>
    //               <div className='form-inner'>
    //                 <div className='form-group'>
    //                   <label>Full name</label>
    //                   <input type='text' className='form-control' />
    //                 </div>
    //                 <div className='form-group'>
    //                   <label>Email adress</label>
    //                   <input type='text' className='form-control' />
    //                 </div>
    //                 <div className='row cols-2 gap-10'>
    //                   <div className='col'>
    //                     <div className='form-group'>
    //                       <label>Password</label>
    //                       <input
    //                         type='password'
    //                         className='form-control'
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className='col'>
    //                     <div className='form-group'>
    //                       <label>Confirm password</label>
    //                       <input
    //                         type='password'
    //                         className='form-control'
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className='form-login-socials'>
    //               <div className='login-socials-inner'>
    //                 <h5 className='mb-20'>
    //                   Or sign-in with your socials
    //               </h5>
    //                 <button className='btn btn-login-with btn-facebook btn-block'>
    //                   <i className='fab fa-facebook'></i> facebook
    //               </button>
    //                 <button className='btn btn-login-with btn-google btn-block'>
    //                   <i className='fab fa-google'></i> google
    //               </button>
    //                 <button className='btn btn-login-with btn-twitter btn-block'>
    //                   <i className='fab fa-twitter'></i> google
    //               </button>
    //               </div>
    //             </div>
    //           </div>
    //           <div className='d-flex flex-column flex-md-row mt-30 mt-lg-10'>
    //             <div className='flex-shrink-0'>
    //               <a
    //                 href='tour-detail-02.html#'
    //                 className='btn btn-primary btn-wide mt-5' >
    //                 Sign-up
    //             </a>
    //             </div>
    //             <div className='pt-1 ml-0 ml-md-15 mt-15 mt-md-0'>
    //               <div className='custom-control custom-checkbox'>
    //                 <input
    //                   type='checkbox'
    //                   className='custom-control-input'
    //                   id='loginFormTabInModal-acceptTerm' />
    //                 <label
    //                   className='custom-control-label line-145'
    //                   for='loginFormTabInModal-acceptTerm'>
    //                   By clicking this, you are agree to to our{' '}
    //                   <a href='tour-detail-02.html#'>terms of use</a>{' '}
    //                 and{' '}
    //                   <a href='tour-detail-02.html#'>privacy policy</a>{' '}
    //                 including the use of cookies
    //               </label>
    //               </div>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //       <div className='form-footer'>
    //         <p>
    //           Already a member?{' '}
    //           <a
    //             href='tour-detail-02.html#loginFormTabInModal-login'
    //             className='tab-external-link font600'>
    //             Sign in
    //         </a>
    //         </p>
    //       </div>
    //     </div>
    //   </div>


    )
};
export default Signup;