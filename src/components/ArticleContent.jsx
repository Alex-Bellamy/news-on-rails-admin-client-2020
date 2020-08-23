import React from "react";
import { useSelector } from "react-redux";
import { Button, Segment, Divider, Header } from 'semantic-ui-react'


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
        <Segment padded>
          <div id={`article-${props.article.id}`} data-id={props.article.id}>
            <Header as="h2" floated="left" id="title">{props.article.title}</Header>
            <Divider clearing></Divider>
            <h3 id="lead">{props.article.lead}</h3>
            {props.singleArticle ? (
              <>
                <p id="content">{props.article.content}</p>
                <h2 id="category">{props.article.category}</h2>
                <img id="images" src={props.article.image} alt="article" /> <br />
                {publishArticle}
                <Button onClick={props.closeSingleArticle}>
                    Close article
                </Button>
              </>
            ) : (
              <Button id="view-article" onClick={props.getSingleArticle}>
                View Article
              </Button>
            )}
          </div>
          </Segment>
        </div>
     
  );
};
export default ArticleContent;