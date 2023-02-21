import { useRef } from 'react'
import './App.css'

function App() {
  const textareaRef = useRef(null)
  const fileRef = useRef(null)

  function onAllTextClick(params) {
    textareaRef.current.focus()
    textareaRef.current.select()
  }

  function onUploadeClick() {
    const myFile = fileRef.current.files[0]
    console.log(myFile)
  }

  console.log('hehe')
  return (
    <section className="app-section">
      <div className="app-container">
        <h2>Hi</h2>
        <p>
          <textarea ref={textareaRef} />
        </p>
        <p>
          <button onClick={onAllTextClick}>Select all the text</button>
        </p>
        <p>
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
