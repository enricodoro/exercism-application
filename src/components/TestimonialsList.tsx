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
import { TestimonialEntry } from '../api/Interfaces'
import Next from '../icons/Next'

export default function TestimonialsList(props: any) {
  return (
    <List
      dense
      sx={{
        maxWidth: '100%',
        bgcolor: 'background.paper',
        minHeight: '640px',
      }}
    >
      {props.testimonials.map((r: TestimonialEntry) => {
        const labelId = `checkbox-list-secondary-label-${r.id}`
        return (
          <ListItem
            key={r.id}
            secondaryAction={
              <IconButton disableRipple>
                <Next />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={`Avatar n°${r.id + 1}`} src={r.track.icon_url} />
              </ListItemAvatar>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${r.id + 1}`}
                  src={r.mentor.avatar_url}
                />
              </ListItemAvatar>
              <ListItemText
                id={labelId}
                primary={r.mentor.handle}
                secondary={`on ${r.exercise.title}`}
                sx={{ width: '300px', flexGrow: 0 }}
              />
              <ListItemText sx={{ position: 'relative' }}>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: '400',
                    color: '#3F3A5A',
                    textAlign: 'start',
                  }}
                >
                  {r.content.length > 64
                    ? `${r.content.slice(0, 64).trim()}...`
                    : r.content}
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
                  {CalculateDate(r.created_at)}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

function CalculateDate(date: Date) {
  let dy = new Date().getFullYear() - new Date(date).getFullYear()
  let dm = new Date().getMonth() - new Date(date).getMonth()
  let dd = new Date().getDate() - new Date(date).getDate()
  let dh = new Date().getHours() - new Date(date).getHours()

  if (dh < 0) {
    dd -= 1
    dh += 24
  }
  if (dd < 0) {
    dm -= 1
    dd += 30
  }
  if (dm < 0) {
    dy -= 1
    dm += 12
  }

  if (dy > 1) {
    return `${dy} years ago`
  } else if (dy === 1) {
    return 'a year ago'
  } else if (dy === 0 && dm > 1) {
    return `${dm} months ago`
  } else if (dy === 0 && dm === 1) {
    return 'a month ago'
  } else if (dy === 0 && dm === 0 && dd > 1 && dd <= 7) {
    return 'a week ago'
  } else if (dy === 0 && dm === 0 && dd > 7 && Math.floor(dd / 4) < 4) {
    return `${Math.floor(dd / 4)} weeks ago`
  } else if (dy === 0 && dm === 0 && dd === 1) {
    return 'a day ago'
  } else if (dy === 0 && dm === 0 && dd > 7 && Math.floor(dd / 4) >= 4) {
    return `a month ago`
  } else if (dy === 0 && dm === 0 && dd === 0 && dh === 1) {
    return 'an hour ago'
  } else {
    return `${dh} hours ago`
  }
}
