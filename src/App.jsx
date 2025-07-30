import { useState } from 'react'

const Me = () => {
  return (
    <div className='me'>
      <h4>Hi, I'm Temi</h4>
      <p>
        life's so good trust !!!!
      </p>
    </div>
  )
}

const WorkExperience = () => {
  return (
    <div className='work-experience'>
      <p>
        work1
      </p>
      <p>
        work2
      </p>
      <p>
        work3
      </p>
    </div>
  )
}

const About = () => {
  return (
    <>
    <Me />
    <WorkExperience />
    </>
  )
}

const App = () => {
  
  return (
    <>
    <About />
    <p>
      Be who you are and all that!
    </p>
    </>
  )
}

export default App
