import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';

import Post from "./Post";


 
const Posts = () => {
    const [ post, setPost ] = useState(null);
    useEffect(() => {
        fetch("post.json")
          .then((res) => res.json())
          .then((data) => setPost(data.Angel))
          .then(() =>
            console.log(post)
           );
      }, []);
      

    return (
        <Container>
            <Row className="justify-content-between">
                {
                    post && post.map(data => 
                        <Col md={8} className="mb-4 mt-4">
                        <Post Title={data.Title} Text={data.Text} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};
 
export default Posts;