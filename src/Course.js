import React from 'react'

const Course = ({title,description , image}) => {
    // const {title , description} = props;
  return (
    <div>
      
      <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={image} alt="Emre"/>
    </figure>
  </div>
  </div>

  <div className="card-content">
    <div className="media">
    
      <div className="media-content">
        <p className="title is-4">{title}</p>
       
      </div>
    </div>
    </div>

    <div className="content">
{description}
</div>
</div>

   
   
  )
}

export default Course
