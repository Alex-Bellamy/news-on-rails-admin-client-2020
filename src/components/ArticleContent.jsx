import React from 'react'
import { Container, Grid } from "semantic-ui-react"

const ArticleContent = (props) => {
  return (
    <div className="article-list">
      <Container>
        <Grid columns={3} divided>
      <div id={`article-${props.article.id}`} data-id={props.article.id}>
        <h1 id="title">{props.article.title}</h1>
        <h2 id="lead">{props.article.lead}</h2>
        <h2 id="content">{props.article.content}</h2>
        <h2 id="category">{props.article.category}</h2>
          <img src={props.article.image} alt='article' />
          </div>
        </Grid>
      </Container>
    </div>
  )
}
export default ArticleContent;