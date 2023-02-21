import { useRef, useState } from 'react'
import './App.css'

function App() {
  const fileRef = useRef(null)

  // function onFileChange(e) {
  //   fileRef.current = e.target.files[0]
  // }

  function onUploadeClick(params) {
    const myFile = fileRef.current.files[0]
    console.log(myFile)
  }

  console.log('hehe')
  return (
    <section className="app-section">
      <div className="app-container">
        <h2>Hi</h2>
        <p>
          {/* <input type="file" onChange={onFileChange} /> */}
          <input type="file" ref={fileRef} />
        </p>
        <p>
          <button onClick={onUploadeClick}>Upload file</button>
        </p>
      </div>
    </section>
  )
}

export default App
