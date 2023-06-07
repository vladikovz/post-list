import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

interface PostCardProps {
  title: string;
  username: string;
  body: string;
}
const PostCard = (props: PostCardProps) => {
  const { title, body, username } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {username}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostCard;
