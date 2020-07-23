import Peer from 'peerjs';
import {myLocalData,addPeer} from '../helpers/redux'
import {syncPeerId,isConnectionLegal} from '../helpers/api'
export const generatePeerId = () => {
	// console.log(myLocalData.getState())
	return peer.on('open', function(id) {
		console.log(id)
		myLocalData.dispatch(addPeer({'peerId':id}))
		syncPeerId(id)
	});
}

// const peer = new Peer("id1",{
//       secure: true, 
//       	host: 'alhacenpeerconnect.herokuapp.com',
//       	port: 443,
//     });
const peer = new Peer("id1",{
      	host: '127.0.0.1',
      port: 9000,
      path: '/myapp'
    });

let isBusy=0;
peer.on('connection', function(conn) {
	if(isConnectionLegal(conn['peer'])){
		console.log("connected successfully");
	}
});
export const connectTo = (id) => {
	var conn = peer.connect(id);
	// on open will be launch when you successfully connect to PeerServer
	conn.on('open', function(){
	  // here you have conn.id
	  console.log("connected")
	  conn.send('hi!');
	});
}