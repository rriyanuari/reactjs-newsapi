import styles from './NewsList.module.css'
import NewsCard from '../NewsCard'


const NewsList = ({articles}) => {
  return (
    <div className={styles.NewsList}>
      {articles.map((article, index, arr) => {
        if(!article.urlToImage || !article.author || !article.content){
          return null
        }
        console.log(article.source.name)
        return(
          
          <NewsCard 
            key={index}
            src={article.urlToImage}
            title={article.title}
            publishedAt={article.publishedAt}
            author={article.author}
            sourceName={article.source.name}
            description={article.description}
            url={article.url}
            notLastChild={!(arr.length === index+1)}
          />
        )
      })}
    </div>
  )
}

export default NewsList