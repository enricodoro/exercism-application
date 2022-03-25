import {
  Avatar,
  Box,
  Button,
  Chip,
  InputAdornment,
  Menu,
  MenuItem,
  Radio,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { Order, Track } from '../api/Interfaces'
import { DropDownArrow, DropDownArrowSmall } from '../icons/DropDownArrow'
import Language from '../icons/Language'
import SearchIcon from '../icons/SearchIcon'

export default function TestimonialsHeader(props: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box className="testimonials-header">
      <Toolbar>
        <Button className="language-selector" onClick={handleClick}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={1.5}
          >
            {props.selected === '' ? (
              <Language />
            ) : (
              <img
                width={42}
                height={42}
                alt="language"
                src={
                  props.languages.find((l: Track) => l.slug === props.selected)
                    ?.icon_url
                }
              />
            )}
            <DropDownArrowSmall />
          </Stack>
        </Button>
        <LanguageMenu
          open={open}
          handleClose={handleClose}
          anchorEl={anchorEl}
          languages={props.languages}
          selected={props.selected}
          setSelected={props.setSelected}
          counts={props.counts}
          total={props.total}
        />
        <TextField
          className="search-bar"
          id="search"
          placeholder="Filter by exercise title"
          variant="standard"
          type="text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ ml: '21px' }}>
                <SearchIcon />
              </InputAdornment>
            ),
            style: {
              fontSize: '16px',
              height: '48px',
              color: '#5C5589',
              borderRadius: '8px',
            },
            disableUnderline: true,
          }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={props.order}
          variant="standard"
          onChange={(e) => props.setOrder(e.target.value as Order)}
          sx={{
            width: '348px',
            fontSize: '16px',
            height: '48px',
            borderRadius: '8px',
            color: '#5C5589',
            backgroundColor: '#F0F3F9',
            paddingLeft: '21px',
          }}
          IconComponent={DropDownArrow}
          disableUnderline
        >
          <MenuItem value={Order.NEWEST_FIRST}>Sort by Most Recent</MenuItem>
          <MenuItem value={Order.OLDEST_FIRST}>Sort by Less Recent</MenuItem>
        </Select>
      </Toolbar>
    </Box>
  )
}

function LanguageMenu(props: any) {
  const handleClick = (s: string) => {
    props.setSelected(s)
    props.handleClose()
  }

  return (
    <Menu
      open={props.open}
      onClose={props.handleClose}
      anchorEl={props.anchorEl}
      PaperProps={{
        style: {
          maxHeight: '364px',
          width: '376px',
        },
      }}
    >
      <MenuItem
        sx={{ px: '0px', mx: '8px', py: '8px' }}
        onClick={() => {
          handleClick('')
        }}
        selected={props.selected === ''}
      >
        <Radio
          className="custom-radio"
          disableRipple
          checked={props.selected === ''}
        />
        <Language style={{ position: 'relative', left: '24px' }} />
        <Typography
          sx={{ position: 'relative', left: '40px', fontWeight: 500 }}
        >
          All
        </Typography>
        <Chip
          variant="outlined"
          label={props.total}
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#5C5589',
            borderColor: '#CBC9D9',
            position: 'absolute',
            right: '24px',
          }}
        />
      </MenuItem>
      {props.languages.map((l: Track) => {
        return (
          <MenuItem
            sx={{ px: '0px', mx: '8px', py: '8px' }}
            onClick={() => handleClick(l.slug)}
            selected={props.selected === l.slug}
          >
            <Radio
              className="custom-radio"
              disableRipple
              checked={props.selected === l.slug}
            />
            <Avatar
              src={l.icon_url}
              sx={{ position: 'relative', left: '24px' }}
            />
            <Typography
              sx={{ position: 'relative', left: '40px', fontWeight: 500 }}
            >
              {l.title}
            </Typography>
            <Chip
              variant="outlined"
              label={props.counts[l.slug]}
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#5C5589',
                borderColor: '#CBC9D9',
                position: 'absolute',
                right: '24px',
              }}
            />
          </MenuItem>
        )
      })}
    </Menu>
  )
}
