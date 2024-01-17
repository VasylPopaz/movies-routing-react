import { getMovieReviewsById } from 'helpers/api';
import { useParams } from 'react-router-dom';
import { useHttp } from 'hooks/useHttp';
import { ReviewList, ReviewTitle } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const { data: reviews } = useHttp(getMovieReviewsById, id);
  if (!reviews) return;

  return !reviews.length ? (
    <h2>We don`t have any reviews for this movie.</h2>
  ) : (
    <ReviewList>
      {reviews.map(review => (
        <li key={review.id}>
          <ReviewTitle>Author: {review.author}</ReviewTitle>
          <p>{review.content}</p>
        </li>
      ))}
    </ReviewList>
  );
};

export default Reviews;
