import React from 'react'

const PageTitle = (props) => {
  return (
    <div className="uppercase tracking-[0.2rem] text-[10px] text-graytext rotate-[270deg] fixed top-64 left-0 md:left-4 lg:left-10">
      {props.pageTitle}
    </div>
  )
}

export default PageTitle
