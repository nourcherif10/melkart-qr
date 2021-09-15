import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Admin = () => {
    const [list, setList] = useState([])
    const [mark, setMark] = useState([])
    const [dev, setDev] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/projetAdmin').then((result) => {
            setList(result.data)
            console.log(result.data);
        })

    }, [])

    useEffect(() => {
        axios.get('http://localhost:3001/markAdmin').then((result) => {
            setMark(result.data)
            console.log(result.data);
        })

    }, [])
    useEffect(() => {
        axios.get('http://localhost:3001/devAdmin').then((result) => {
            setDev(result.data)
            console.log(result.data);
        })

    }, [])




    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr >
                        <th scope="col">Name</th>
                        <th scope="col">email</th>
                        <th scope="col">first question</th>
                        <th scope="col">second question</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.mail}</td>
                                <td>{val.firstRes}</td>
                                <td>{val.secondRes}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <th>marketing</th>
                    </tr>
                    {mark.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.mail}</td>
                                <td>{val.firstRes}</td>
                                <td>{val.secondRes}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <th>devco</th>
                    </tr>

                    {dev.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.mail}</td>
                                <td>{val.firstRes}</td>
                                <td>{val.secondRes}</td>
                            </tr>
                        )
                    })}



                </tbody>
            </table>

        </div>
    )
}

export default Admin
