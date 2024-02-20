

function VideoCard(props){

    return <div className="h-56 mt-6 mb-6">
        <div className="w-full h-48 overflow-hidden rounded-md">
        <img 
        // src="https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        src={props.thumbnail}
        className="w-full"
        />
        </div>
        <div 
        className="grid grid-cols-12 gap-1">
            <div className="col-span-2">
                <img
                className="w-full h-10 border rounded-full"
                src={props.channel}
                // src="https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                />
            </div>
            <div className="col-span-9 text-left pl-2">
                
                {props.title}
                
                <p className="text-slate-600 text-sm">{props.channelName}</p>
                <p className="text-slate-600 text-sm">{props.views}|{props.timestamp}</p>
            </div>
        </div>
    </div>
}

export default VideoCard;