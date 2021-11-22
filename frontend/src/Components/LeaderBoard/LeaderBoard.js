import React from 'react'
import './LeaderBoard.css'


const LeaderBoard = () => {
    return (
        <div class="leaderBoard">
            <div class="bodyContainer">
                <div class="body">
                    <h1>About Event</h1>
                    <p id="para1">
                        Kickstart your career in cloud and get hands-on practice on Google
                        Cloud Platform
                    </p>
                    <p id="para2">
                        30 Days of Google Cloud program will provide you an opportunity to
                        kickstart your career in cloud and get hands-on practice on Google
                        Cloud - the tool that powers apps like Google Search, Gmail and
                        YouTube.
                    </p>
                    <p id="para3">
                        Along the way, you will learn & practice concepts like computing,
                        application development, big data & machine learning using cloud & if
                        you get stuck, you will have your "Campus Facilitators" who are
                        specially trained on Google Cloud to help. 😎
                    </p>
                </div>
                <div class="bodyImage">
                    <img src="https://miro.medium.com/max/1400/1*lDi1bp7b37khnH3tPVoLuQ.png" alt="alt.png" />
                </div>
            </div>
            <h1>Hall of Fame</h1>
            <div class="wrap">
                <div class="search">
                    <input
                        id="myInput"
                        onkeyup="search()"
                        type="text"
                        class="searchTerm"
                        placeholder="Name"
                    />
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            <table id="tableRecord" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Coloumn 1</th>
                        <th>Coloumn 2</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody id="dataTable">
                    <tr>
                        <td>Mohsin</td>
                        <td>Web</td>
                        <td>GDSC</td>
                        <td><a className="profile" href="">Profile</a></td>
                    </tr>
                    <tr>
                        <td>Mohsin</td>
                        <td>Web</td>
                        <td>GDSC</td>
                        <td><a className="profile" href="">Profile</a></td>
                    </tr>
                    <tr>
                        <td>Mohsin</td>
                        <td>Web</td>
                        <td>GDSC</td>
                        <td><a className="profile" href="">Profile</a></td>
                    </tr>
                    <tr>
                        <td>Mohsin</td>
                        <td>Web</td>
                        <td>GDSC</td>
                        <td><a className="profile" href="">Profile</a></td>
                    </tr>
                    <tr>
                        <td>Mohsin</td>
                        <td>Web</td>
                        <td>GDSC</td>
                        <td><a className="profile" href="">Profile</a></td>
                    </tr>
                    <tr>
                        <td>Mohsin</td>
                        <td>Web</td>
                        <td>GDSC</td>
                        <td><a className="profile" href="">Profile</a></td>
                    </tr>
                </tbody>
            </table>
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                    <a class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </div>
    )
}

export default LeaderBoard
