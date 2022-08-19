import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
const Additems = () => {
    const formik = useFormik({
        initialValues: {
            title: "",
            image: "",
            category: "",
            price: 0,
            description: ""

        },
        validate: values => {
            const errors = {};

            if (!values.title) {
                errors.title = 'Title Please';
            }
            else if (!values.image) {
                errors.image = 'URL please';
            }
            else if (!values.category) {
                errors.category = 'Enter the Category';
            }
            else if (!values.price) {
                errors.price = 'Price';
            }
            else if (!values.description) {
                errors.description = 'Enter the details';
            }




            return errors;
        },
        onSubmit: async values => {
            try {
                await axios.post("https://rjcollection.herokuapp.com/catalog", values)

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
                        <label>Title</label>
                        <input type={"text"} name="title" onChange={formik.handleChange}
                            value={formik.values.title} className="form-control" />
                        <span className='text-warning'> {formik.errors.title}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Image</label>
                        <input type={"url"} name="image" onChange={formik.handleChange}
                            value={formik.values.image} className="form-control" />
                        <span className='text-warning'> {formik.errors.image}</span>
                    </div>

                    {/* <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Query</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div> */}

                    <div className='col-lg-6'>
                        <label>Category</label>
                        <input type={"text"} name="category" onChange={formik.handleChange}
                            value={formik.values.category} className="form-control" />
                        <span className='text-warning'> {formik.errors.category}</span>
                    </div>

                    <div className='col-lg-6'>
                        <label>Price</label>
                        <input type={"number"} name="price" onChange={formik.handleChange}
                            value={formik.values.price} className="form-control" />
                        <span className='text-warning'> {formik.errors.price}</span>
                    </div>

                    <div className='col-lg-6'>
                        <label>Description</label>
                        <input type={"text"} name="description" onChange={formik.handleChange}
                            value={formik.values.description} className="form-control" />
                        <span className='text-warning'> {formik.errors.description}</span>
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

export default Additems