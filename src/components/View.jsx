import axios from 'axios'
import React, { useEffect, useState } from 'react'




const View = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3000/view-allvolunteer").then(
            (response) => {
                
                changeData(response.data)
            }
        ).catch(

            (error) => {
                console.log(error)

            }

        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )


    return (
        <div>
            
            
            
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Volunteer ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Date Of Birth</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Department</th>
                        <th scope="col">Year Of Study</th>
                        <th scope="col">Camp Name</th>
                        <th scope="col">Hours Completed</th>
                        <th scope="col">Address</th>
                        <th scope="col">Unit Number</th>


                    </tr>
                </thead>
                <tbody>

                    {data.map(

                        (data, index) => {
                            return (
                                <tr>
                                    <td>{data.volunteerId}</td>
                                    <td>{data.fullName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.dataOfBirth}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.bloodGroup}</td>
                                    <td>{data.department}</td>
                                    <td>{data.yearOfStudy}</td>
                                    <td>{data.campName}</td>
                                    <td>{data.hoursCompleted}</td>
                                    <td>{data.address}</td>
                                    <td>{data.unitNumber}</td>


                                </tr>
                            )
                        }

                    )}

                </tbody>
            </table>

        </div>
    )
}

export default View