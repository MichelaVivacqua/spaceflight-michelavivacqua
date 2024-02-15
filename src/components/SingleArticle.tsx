import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Card } from "react-bootstrap";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>(); // Ottieni l'ID dall'URL

  const [article, setArticle] = useState<Result | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
        if (response.ok) {
          const articleData = await response.json();
          setArticle(articleData);
        } else {
          throw new Error('Errore nel recupero dell\'articolo');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticle();

    // Assicurati di pulire eventuali effetti collaterali quando il componente viene smontato
    return () => {
      // Pulisci eventuali risorse o listener
    };
  }, [id]); // Esegui di nuovo l'effetto ogni volta che l'ID cambia

  if (!article) {
    return <div>Caricamento...</div>;
  }

  return (
    <Col xs={12} md={4} className="text-center">
      <Card>
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.published_at}</Card.Text>
          <Card.Text>{article.featured}</Card.Text>
          <Card.Text>{article.news_site}</Card.Text>
          <Card.Text>{article.summary}</Card.Text>
          <Card.Text>{article.updated_at}</Card.Text>
          <Card.Text>{article.url}</Card.Text>
          </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleDetail;

