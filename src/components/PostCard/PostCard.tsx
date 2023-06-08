import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import styles from './PostCard.module.css';

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
        <CardActionArea sx={{ backgroundColor: isSelected ? '#c2c2c2' : undefined }}>
          <CardContent sx={{}}>
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
