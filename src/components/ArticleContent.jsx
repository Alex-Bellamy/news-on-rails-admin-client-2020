import React from "react";
import { useSelector } from "react-redux";
import { Card, Button } from 'semantic-ui-react'


const ArticleContent = (props) => {
  let publishArticle;
  const userRole = useSelector((state) => state.currentUser.role);

  if (userRole == "editor") {
    publishArticle = (
      <Button id="publish-article" onClick={props.publishArticle}>
        Publish article
      </Button>
    );
  }
  return (
    
    <div className="article-list">
      <Card.Group>
        <Card>
          <Card.Content> 
          <div id={`article-${props.article.id}`} data-id={props.article.id}>
            <h1 id="title">{props.article.title}</h1>
            <h2 id="lead">{props.article.lead}</h2>
            {props.singleArticle ? (
              <>
                <h2 id="content">{props.article.content}</h2>
                <h2 id="category">{props.article.category}</h2>
                <img src={props.article.image} alt="article" />
                {publishArticle}
                <button onClick={props.closeSingleArticle}>
                    Close article
                </button>
              </>
            ) : (
              <Button id="view-article" onClick={props.getSingleArticle}>
                View Article
              </Button>
            )}
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
        </div>
     
  );
};
export default ArticleContent;