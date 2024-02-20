import VideoCard from "./VideoCard"


function VideoGrid(){

    const Videos=[
        {
            title:"Somewhere in japan",
            channel:"https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            channelName:"Japan",
            thumbnail:"https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            views:"1 Mn views",
            timestamp:"1 week ago"
          },
          {
            title:"Somewhere in japan",
            channel:"https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            channelName:"Japan",
            thumbnail:"https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            views:"1 Mn views",
            timestamp:"1 week ago"
          }
          ,{
            title:"Somewhere in japan",
            channel:"https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            channelName:"Japan",
            thumbnail:"https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            views:"1 Mn views",
            timestamp:"1 week ago"
          }
          ,{
            title:"Somewhere in japan",
            channel:"https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            channelName:"Japan",
            thumbnail:"https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            views:"1 Mn views",
            timestamp:"1 week ago"
          }
    ]

    return <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-3">
        {Videos.map((video)=>{
            return <VideoCard {...video}/>
        })}
    </div>
}


export default VideoGrid;