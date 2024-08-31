import { Rating } from "react-simple-star-rating";
import { ReviewStyled } from "./Review.style";
import { ReviewProps } from "./Review.types";

const Review = (props: ReviewProps) => {
  const { date, reviewerName, comment, rating } = props;

  const parseDate = new Date(date);

  return (
    <ReviewStyled>
      <p className="name">{reviewerName}</p>
      <Rating
        className="rating"
        initialValue={rating}
        readonly={true}
        allowFraction={true}
      />
      <p>{parseDate.toLocaleDateString("HR")}</p>
      <p className="comment">{comment}</p>
    </ReviewStyled>
  );
};

export default Review;
