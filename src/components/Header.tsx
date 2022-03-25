import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
} from '@mui/material'
import '../css/header.css'
import BadgeContribution from '../icons/BadgeContribution'
import BadgeIndicator from '../icons/BadgeIndicator'
import Bell from '../icons/Bell'
import Chat from '../icons/Chat'
import Dashboard from '../icons/Dashboard'
import Lego from '../icons/Lego'
import Logo from '../icons/Logo'
import Menu from '../icons/Menu'
import Mood from '../icons/Mood'
import Rail from '../icons/Rail'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Logo />
          <div style={{ flexGrow: 1 }}>
            <IconButton
              disableRipple
              className="dashboard-button"
              sx={{ mr: '16px' }}
            >
              <Dashboard />
            </IconButton>
            <Button
              disableRipple
              sx={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#130B43',
                mr: '24px',
              }}
            >
              Dashboard
            </Button>
            <Button
              disableRipple
              startIcon={<Rail style={{ marginRight: '16px' }} />}
              sx={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#5C5589 ',
                mr: '24px',
              }}
            >
              Tracks
            </Button>
            <Button
              disableRipple
              startIcon={<Chat style={{ marginRight: '16px' }} />}
              sx={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#5C5589 ',
                mr: '24px',
              }}
            >
              Mentoring
            </Button>
            <Button
              disableRipple
              startIcon={<Lego style={{ marginRight: '16px' }} />}
              sx={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#5C5589 ',
                mr: '24px',
              }}
            >
              Contribute
            </Button>
          </div>
          <IconButton sx={{ mr: '36px' }} disableRipple>
            <Badge color="error" variant="dot" overlap="circular">
              <Mood />
            </Badge>
          </IconButton>
          <IconButton sx={{ mr: '44px' }} disableRipple>
            <Badge color="error" variant="dot" overlap="circular">
              <BadgeIndicator />
            </Badge>
          </IconButton>
          <div style={{ marginRight: '48px' }}>
            <Badge color="error" badgeContent="2" overlap="circular">
              <IconButton
                className="bell"
                disableRipple
                sx={{ width: '42px', height: '36px', borderRadius: '8px' }}
              >
                <Bell />
              </IconButton>
            </Badge>
          </div>
          <Badge
            className="custom-badge"
            color="error"
            badgeContent=""
            overlap="circular"
          >
            <Button
              className="badge-contribution"
              startIcon={<BadgeContribution />}
              disableRipple
            >
              300K
            </Button>
          </Badge>
          <Avatar
            src="https://avatars3.githubusercontent.com/u/135246"
            sx={{ ml: '48px' }}
          />
          <IconButton disableRipple sx={{ ml: '8px' }}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
