import React from 'react';
import { useParams } from 'react-router';
import './Video.scss';

function Video(props) {
  let { id } = useParams();
  // let id = "8lZki_Z35N0" //exemple

  console.log(id);

  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="video"
        frameBorder="0"
        allowFullScreen></iframe>
    </div>
  );
}

export default Video;
