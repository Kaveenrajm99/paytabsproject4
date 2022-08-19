import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
const Contact = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            query: ""

        },
        validate: values => {
            const errors = {};

            if (!values.email) {
                errors.email = 'Email Please';
            }
            else if (!values.name) {
                errors.Name = 'Enter the Name';
            }
            else if (!values.query) {
                errors.Query = 'Enter the Name';
            }




            return errors;
        },
        onSubmit: async values => {
            try {
                await axios.post("https://rjcollection.herokuapp.com/contact", values)

            } catch (error) {
                console.log(error);
            }
            alert("form submitted Have a good day:)"
            )



        },
    })
    return (

        <div className='container'>
            <h3 className='mt-3 fw-bold'>RJ Contact Form</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className='row mt-2'>
                    <div className='col-lg-6'>
                        <label>Email</label>
                        <input type={"email"} name="email" onChange={formik.handleChange}
                            value={formik.values.email} className="form-control" />
                        <span className='text-warning'> {formik.errors.email}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Name</label>
                        <input type={"text"} name="name" onChange={formik.handleChange}
                            value={formik.values.name} className="form-control" />
                        <span className='text-warning'> {formik.errors.name}</span>
                    </div>

                    {/* <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Query</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div> */}

                    <div className='col-lg-6'>
                        <label>Query</label>
                        <input type={"text"} name="query" onChange={formik.handleChange}
                            value={formik.values.query} className="form-control" />
                        <span className='text-warning'> {formik.errors.uery}</span>
                    </div>




                    <div >
                        <button disabled={formik.errors.values} type={"submit"} className="btn btn-primary mt-4">submit</button>

                    </div>
                    <NavLink to='/products' className={'btn btn-outline-dark mt-2 '}>Go Back</NavLink>
                </div>
            </form>
        </div>
    )
}

export default Contact