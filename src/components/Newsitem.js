import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Newsitem(props) {
  let {title, description,newsUrl,imageUrl,author,date,source} = props;
  return (
  
     <div className=' my-4 '>

     <div className="card ">
     <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>{source}</span>
    <img src={imageUrl} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}...
      </p>
      <p className='card-text'><small className='text-muted'>By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
      <a rel='norefferer' href={newsUrl} target="_blank" className="btn btn-primary">
        Read More
      </a>
    </div>
  </div>
</div>)
}
