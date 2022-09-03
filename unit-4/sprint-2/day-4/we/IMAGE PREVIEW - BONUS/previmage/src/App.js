import React, { useState,useEffect } from 'react'
import './App.css';

function App() {
  
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
      if (!selectedFile) {
          setPreview(undefined)
          return
      }

      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined)
          return
      }

      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0])
  }

  return (
      <div style={{width:'60%' ,margin: 'auto', padding:'2rem'}} >
          <input style={{display: 'block', marginBottom: '2rem'}} type='file' onChange={onSelectFile} />
          {selectedFile &&  <img style={{width:'100%'}} src={preview} alt='choose img'/> }
      </div>
  )
}

export default App;
