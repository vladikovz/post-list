import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import styles from './PostCard.module.css';
import { IS_SELECTED_COLOR } from '../../constants/colors';

interface PostCardProps {
  title: string;
  username: string;
  body: string;
  isSelected: boolean;
}
const PostCard = (props: PostCardProps) => {
  const { title, body, username, isSelected } = props;

  return (
    <div className={styles.container}>
      <Card>
        <CardActionArea sx={{ backgroundColor: isSelected ? IS_SELECTED_COLOR : undefined }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="h6" color="blue">
              {username}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default PostCard;
