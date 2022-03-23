import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import Next from '../icons/Next'

export default function TestimonialsList() {
  return (
    <List dense sx={{ maxWidth: '100%', bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`
        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton disableRipple>
                <Next />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src="https://dg8krxphbh767.cloudfront.net/tracks/kotlin.svg"
                />
              </ListItemAvatar>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src="https://avatars3.githubusercontent.com/u/135246"
                />
              </ListItemAvatar>
              <ListItemText
                id={labelId}
                primary="Bobahop"
                secondary="on High Scores in Bash"
              />
              <ListItemText>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: '400',
                    color: '#3F3A5A',
                    textAlign: 'left',
                  }}
                >
                  Hello!
                </Typography>
              </ListItemText>
              <ListItemText sx={{ mr: '56px' }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#5C5589',
                    textAlign: 'right',
                  }}
                >
                  an hour ago
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}
