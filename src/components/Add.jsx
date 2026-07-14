import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'



const Add = () => {


    const [input, changeInput] = useState(


        {

        volunteerId: "",
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
        bloodGroup: "",
        department: "",
        yearOfStudy: "",
        campName: "",
        hoursCompleted: "",
        address: "",
        unitNumber: ""
    }


    )
    const inputHandeler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })

    }

    const readValue = () => {


        console.log(input)
        axios.post("http://localhost:3000/add-volunteer", input).then(

            (response) => {

                console.log(response.data)
                alert("Project added suceessfully")
            }
        ).catch((error) => {
            console.log(error.response);
            console.log(error.response?.data);
            console.log(error.response?.status);
            alert("Failed to add Student");
        });


    }
    return (
        <div>
            <NavigationBar/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                    <div className="row g-3">



                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Vlunteer ID</label>
                            <input type="text" className="form-control" name="volunteerId" value={input.volunteerId} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Full Name</label>
                            <input type="text" className="form-control" name="fullName" value={input.fullName} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email</label><br></br>
                            <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandeler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Date Of Birth</label>
                            <input type="text" className="form-control" name="dateOfBirth" value={input.dateOfBirth} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Gender</label>
                            <input type="text" className="form-control" name="gender" value={input.gender} onChange={inputHandeler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Blood Group</label>
                            <select name="" id="" className="form-control " name="bloodGroup" value={input.bloodGroup} onChange={inputHandeler} >
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Department</label>
                            <input type="text" className="form-control" name="department" value={input.department} onChange={inputHandeler} />
                        </div>
                         <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Year Of Study</label>
                            <input type="text" className="form-control" name="yearOfStudy" value={input.yearOfStudy} onChange={inputHandeler} />
                        </div>
                         <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Camp Name</label>
                            <input type="text" className="form-control" name="campName" value={input.campName} onChange={inputHandeler} />
                        </div>
                         <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Hourse Completed</label>
                            <input type="text" className="form-control" name="hoursCompleted" value={input.hoursCompleted} onChange={inputHandeler} />
                        </div>
                         <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandeler} />
                        </div>
                         <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Unit Number</label>
                            <input type="text" className="form-control" name="unitNumber" value={input.unitNumber} onChange={inputHandeler} />
                        </div>


                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>




                </div>
            </div>


        </div>
    )
}

export default Add