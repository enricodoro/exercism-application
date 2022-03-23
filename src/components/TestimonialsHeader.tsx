import {
  Avatar,
  Box,
  Button,
  Chip,
  InputAdornment,
  Menu,
  MenuItem,
  MenuList,
  Radio,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { DropDownArrow, DropDownArrowSmall } from '../icons/DropDownArrow'
import Language from '../icons/Language'
import SearchIcon from '../icons/SearchIcon'

export default function TestimonialsHeader() {
  const [sort, setSort] = useState(0)
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
            <Language />
            <DropDownArrowSmall />
          </Stack>
        </Button>
        <LanguageMenu
          open={open}
          handleClose={handleClose}
          anchorEl={anchorEl}
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
          value={sort}
          variant="standard"
          onChange={(e) => setSort(e.target.value as number)}
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
          <MenuItem value={0}>Sort by Most Recent</MenuItem>
          <MenuItem value={1}>Sort by Less Recent</MenuItem>
        </Select>
      </Toolbar>
    </Box>
  )
}

function LanguageMenu(props: any) {
  const fakeLanguages = [
    {
      id: 0,
      name: 'Kotlin',
      img: 'https://dg8krxphbh767.cloudfront.net/tracks/kotlin.svg',
      testimonials: 27,
    },
    {
      id: 1,
      name: 'Rust',
      img: 'https://dg8krxphbh767.cloudfront.net/tracks/rust.svg',
      testimonials: 52,
    },
  ]

  return (
    <Menu
      open={props.open}
      onClose={props.handleClose}
      anchorEl={props.anchorEl}
      sx={{ maxWidth: '100%' }}
    >
      <MenuList sx={{ width: '376px', py: 0 }}>
        {fakeLanguages.map((l) => {
          return (
            <MenuItem sx={{ px: '0px', mx: '8px', py: '8px' }}>
              <Radio className="custom-radio" disableRipple />
              <Avatar src={l.img} sx={{ position: 'relative', left: '24px' }} />
              <Typography
                sx={{ position: 'relative', left: '40px', fontWeight: 500 }}
              >
                {l.name}
              </Typography>
              <Chip
                variant="outlined"
                label={l.testimonials}
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
      </MenuList>
    </Menu>
  )
}
