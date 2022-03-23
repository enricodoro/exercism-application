import { Container } from '@mui/material'
import '../css/testimonials.css'
import TestimonialsHeader from './TestimonialsHeader'
import TestimonialsList from './TestimonialsList'
import TestimonialsPagination from './TestimonialsPagination'

export default function TestimonialsContainer() {
  return (
    <Container
      sx={{
        maxWidth: '100% !important',
        boxShadow: '0px 4px 42px rgba(79, 114, 205, 0.15)',
        px: '0 !important',
        borderRadius: '8px !important',
      }}
    >
      <TestimonialsHeader />
      <TestimonialsList />
      <TestimonialsPagination />
    </Container>
  )
}
