import Posts from "./Posts.js";
import db from "./firebase.js";
import React,{ Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component{
  state={};
  render() {
    return (
      <div>
        <Posts />
      </div>
    );
  }
}

/* db.collection("users").add({
  name:"Dhruv Nagpal",
  email:"dhruvnagpal12@gmail.com",
  age:18
})

db.collection("users")
.doc("9ybuIfoC7W5RPx7GW0kJ")
.set({
  name:"Dhruv",
  age:19
},
{merge:true});

db.collection("users")
.doc("9ybuIfoC7W5RPx7GW0kJ")
.delete()
.then(function(){
  console.log("Document Successfully deleted");
})
.catch(function(error){
  console.log("Error deleting document",error)
});
 */

export default App;
