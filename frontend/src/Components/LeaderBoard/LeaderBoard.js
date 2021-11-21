import React from 'react'
import './LeaderBoard.css'
const LeaderBoard = () => {
    return (
        <div class="leaderBoard">
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
