 
import { Card } from "react-bootstrap";
 
const Post = (props) => {
    return (
        <Card>
            {/* <Card.Img
                variant="top"
                src=
                "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg"
                width={20}
                height={250}
            /> */}
            <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Text>
                   {props.Text}
                </Card.Text>
                {/* <a href="#" className="btn btn-primary">Read More</a> */}
            </Card.Body>
        </Card>
    );
};

 export default Post;