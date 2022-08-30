import React from 'react'

const GhProject = (props) => {
  return (
    <div className="flex gap-x-5 mt-10 items-center">
      <p className="text-graytext mr-4 tracking-widest">{props.projectNumber}</p>
      <p className="underline">&lt;src/&gt; </p>
      <a className="text-2xl underline" href="#">
        {props.projectName}
      </a>
    </div>
  )
}

export default GhProject;
