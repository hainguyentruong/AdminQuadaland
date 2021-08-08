import Swal from 'sweetalert2';
import Pusher from "pusher-js";

let pusher;

const channels = {};

Pusher.logToConsole = true;


function createPusher() {
  pusher = new Pusher("31228d6611e35745a3c9", {
    cluster: "ap1",
    authEndpoint: "http://123.19.51.38:3000/api/v1/pusher/auth", 
    auth: {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    },
  });

  if (["admin", "super_user"].includes(localStorage.getItem("role"))) {
    channels["private-moderators"] = pusher.subscribe("private-moderators");

    console.log('wtf');

    channels["private-moderators"].bind("property-created", (data) => {
        Swal.fire({
            title: 'New Property?',
            text: 'Approval Status for new property!',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Look at!',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/property'
            }
          })
    });
  }
}
export default createPusher;
