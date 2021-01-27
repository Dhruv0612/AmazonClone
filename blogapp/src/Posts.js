import React, {Component} from "react";
import db from './firebase.js';
import "bootstrap/dist/css/bootstrap.css";

class Posts extends Component{
    state={posts:[]};

    componentDidMount(){
        db.collection("posts")
        .get("CCtgxNuBaKhKqvv9frJd")
        .then((getData)=>{
            getData.forEach((post)=>{
                let data = post.data();
                let { id } = post;
                let payload = {
                    id,
                    ...data,
                };
                this.setState({posts: [...this.state.posts, payload] });
            });
        });
    }

    render() {
        return (
            <div className="container">
                {this.state.posts.map((post)=>(
                    <div className="jumbotron" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;