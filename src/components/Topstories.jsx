import React, { useEffect, useState } from 'react'


export default function Topstories() {
const [storyData, setStoryData] = useState([])

    const TopStories = async ()=>{
await fetch ("http://localhost:8002/api/auth/topstories/world",{
    method:"GET"
})
.then(res => res.json())
            .then(data => {
                console.log("Data fetched:", data);
                setStoryData(data);
            });
    }

    useEffect(()=>{
        console.log("Component mounted");
        TopStories()
    },[])

    const limitTitle = (title,limit)=>{
if(title.length > limit){
    return title.slice(0,limit) + "..."
}
return title
    }
  return (
<div>
<div
          className="background-image1"
          style={{ backgroundImage: `url(${"img/bg00.jpg"})` }}
        >
          <div className="color-overlay1 d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="text-center text-white"
                // style={{ fontSize: 60 }}
              >
                Top Stories Of World
              </h1>
            </div>
          </div>
        </div>

    <div className='container'>
        <div className="row">
        {storyData.results && storyData.results.length > 0 ? (
            storyData.results.map((story) => (
                <div className="col-md-3 mt-2">
                <div className="card" onClick={()=> window.open(story.url, "blank")} style={{ width: "18rem" }} key={story.id}>
                    {/* Render the card content based on the structure of your data */}
                    <img src={story.multimedia[0].url} style={{height:"30vh"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{limitTitle(story.title, 45)}</h5>
                        <p className="card-text">{story.description}</p>
                    </div>
                </div>
                </div>
            ))
        ) : (
            <p>Loading...</p>
        )}
      </div>
    </div>
    </div>
  )
}
