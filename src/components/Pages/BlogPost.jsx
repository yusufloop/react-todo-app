import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function BlogPost() {
    const params = useParams();
  return (
    <div className='container'>
      This is BlogPost {params.id}
    </div>
  )
}
