import Pusher from 'pusher-js';

let pusher;

function PUSHER (props){
    pusher = new Pusher("31228d6611e35745a3c9", {
        cluster: "ap1",
        authEndpoint: "http://localhost:2999/api/v1/pusher/auth", // thay the lai duong dan~
        auth: {
            headers: {
            "Authorization": "Bearer " + localStorage.getItem('token'),
            },
        },
    });

    console.log(pusher);
    
    const channel = pusher.subscribe("private-moderators");
    
    channel.bind("property-created", (data) => {
    console.log(data);
    });
}
export default PUSHER;