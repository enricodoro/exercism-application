import { Chip, Container, Stack, Typography } from '@mui/material'
import ChatBadge from '../icons/ChatBadge'
import TestimonialsContainer from './TestimonialsContainer'
import WaveDivider from './WaveDivider'

export default function MainContainer() {
  return (
    <Container sx={{ maxWidth: '100% !important' }}>
      <Stack direction="column" alignItems="center" gap={2} marginTop={5}>
        <ChatBadge />
        <Stack direction="row" alignItems="center" gap={2}>
          <Typography fontSize="31.25px" fontWeight="700">
            Testimonials I've left
          </Typography>
          <Chip
            sx={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#5C5589',
              borderColor: '#CBC9D9',
            }}
            variant="outlined"
            label="47" //TODO: replace with actual value
          />
        </Stack>
        <WaveDivider />
        <TestimonialsContainer />
      </Stack>
    </Container>
  )
}
