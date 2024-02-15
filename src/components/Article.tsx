import { Col, Card } from "react-bootstrap";
import { Result } from "../interfaces/Article";
// props -> { articleData }
import { Link } from 'react-router-dom';


interface ArticleProps {
  articleData: Result;
}

const Article = ({ articleData }: ArticleProps) => {
  return (
    
    <Col xs={12} sm={6} md={4} lg={3}>
        <Link to={`/articles/${articleData.id}`}>
      <Card>
        <Card.Img variant="top" src={articleData.image_url} />
        <Card.Body>
          <Card.Title>{articleData.title}</Card.Title>
          <Card.Text>{articleData.published_at}</Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </Col>
   
  );
};

export default Article;



