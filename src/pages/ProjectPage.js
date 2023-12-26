import React from 'react'
import Navbar from '../compnents/navbar'

const ProjectPage = () => {
  return (
    <div>
      <div className="z-20 md:fixed md:w-[100%] md:flex md:justify-around md:items-center">
        <div className="flex justify-center item-center">
          <h1 className="font-bold text-3xl first-letter:text-red-900">
            Shantinath K.
          </h1>
        </div>
        <Navbar />
      </div>
      ProjectPage
    </div>
  )
}

export default ProjectPage