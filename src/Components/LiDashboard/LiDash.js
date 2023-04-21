import React from 'react'
import './LiDash.css'
function LiDashboard() {
  return (
    <div className='body'>
        
         <header>
      <h1>Document Approval Page</h1>
    </header>
    <section>
       
      <table>
        <tr>
          <th>Document Name</th>
          <th>Author</th>
          <th>Created Date</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>Document 1</td>
          <td>Ajith Kumar</td>
          <td>March 22, 2023</td>
          <td>
            <button class="approve">Approve</button>
            <button class="reject">Reject</button>
          </td>
        </tr>
        <tr>
          <td>Document 2</td>
          <td>James Carol</td>
          <td>March 23, 2023</td>
          <td>
            <button class="approve">Approve</button>
            <button class="reject">Reject</button>
          </td>
        </tr>
        <tr>
          <td>Document 3</td>
          <td>Gireesh Kumar</td>
          <td>March 24, 2023</td>
          <td>
            <button class="approve">Approve</button>
            <button class="reject">Reject</button>
          </td>
        </tr>
      </table>
    </section>
   
    </div>
  )
}

export default LiDashboard