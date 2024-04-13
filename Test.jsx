import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3100/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => console.log('error', err));
  }, []);

  function downloadPpt(fileUrl) {
    fetch(fileUrl)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'presentation.ppt');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
    .catch(err => console.log('error', err));
  }

  return (
    <div className="container-fluid nav-bg">
      <div className="row">
        <div className="col-10 mx-auto pt-5">
          <div className="row">
            <div className="col-lg-6 my-6 d-flex justify-content-center flex-column order-1">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">File</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(doc => (
                    <tr key={doc.id}>
                      <td>{doc.fname}</td>
                      <td>{doc.file}</td>
                      <td>
                        <button
                          type='button'
                          className="btn btn-success"
                          onClick={() => downloadPpt(`http://localhost:3100/get/${doc.file}`)}>
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
