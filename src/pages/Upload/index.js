import { useRef } from 'react';
import React from 'react';

function UploadCircuito() {
  const filesElement = useRef(null);

  const sendFile = async () => {
    const dataForm = new FormData();
    for (const file of filesElement.current.files) {
      dataForm.append('file', file);
    }
    const res = await fetch(`http://localhost:3001/upload`, {
      method: 'PUT',
      body: dataForm,
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <input type="file" multiple ref={filesElement} />
      <button onClick={sendFile}>Send file</button>
    </div>
  );
}

export default UploadCircuito;