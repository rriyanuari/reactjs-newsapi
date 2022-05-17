import classnames from 'classnames'
import { formatDate } from '../../utils/formatDate'
import styles from './NewsCard.module.css'

const NewsCard = ({
  src, 
  title, 
  publishedAt,
  author, 
  sourceName, 
  description, 
  url, 
  notLastChild
}) => {
  return(
    <>
      <div className={classnames(styles.NewsCard, {
        [styles.newsCardGap]: notLastChild
      })}>

        <div className={styles.imgContainer}>
          <img 
            className={styles.img}
            src={src}
            alt={`${title} thumbnail img`}
          />

          <p className={styles.imgTitle}>{title}</p>
        </div>

        <div className={styles.newsCardContent}>
          <p className={styles.newsCardDate}>{formatDate(publishedAt)}</p>
          <p className={styles.newsCardAuthor}>
            {`${author} | ${sourceName}`}
          </p>

          <p className={styles.newsCardDesc}>{description}</p>
          <a className={styles.url} href={url} target="_blank" rel="noreferrer noopener">Go to website</a>
        </div>

      </div>
    </>
  )
}

export default NewsCard