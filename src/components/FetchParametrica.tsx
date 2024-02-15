import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { Result } from '../interfaces/Article'
import SingleArticle from "./SingleArticle"

const FetchComponent = () => {
  const [articles, setArticles] = useState<Result[]>([])
  // attenzione ad inizializzare un array semplicemente con un valore di []!
  // l'array riceverà automaticamente da TS il tipo "never[]"
  // è necessario creare l'interfaccia per l'oggetto/array che vi verrà restituito nel JSON della Response
  // in modo da poter assegnare alla variabile di stato il tipo corretto

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        'https://api.spaceflightnewsapi.net/v4/articles/:id'
      )
      if (response.ok) {
        const arrayOfArticles = await response.json()
        console.log(arrayOfArticles)
        // salviamo l'array degli articoli nello state
        setArticles(arrayOfArticles.results)
      } else {
       throw new Error('errore nel recupero degli articoli')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {fetchArticles()
  }, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h2>Articoli:</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {articles.map((singleArticle) => (
          <SingleArticle articleData={singleArticle} key={singleArticle.id} />
        ))}
      </Row>
    </Container>
  )
}

export default FetchComponent