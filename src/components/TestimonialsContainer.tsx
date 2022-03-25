import { Container } from '@mui/material'
import { useEffect, useState } from 'react'
import '../css/testimonials.css'
import TestimonialsHeader from './TestimonialsHeader'
import TestimonialsList from './TestimonialsList'
import TestimonialsPagination from './TestimonialsPagination'

export default function TestimonialsContainer(props: any) {
  const [wait, setWait] = useState(true)

  useEffect(() => {
    props.testimonials?.results?.length > 0 ? setWait(false) : setWait(true)
  }, [props.testimonials])

  return (
    <Container
      sx={{
        maxWidth: '100% !important',
        boxShadow: '0px 4px 42px rgba(79, 114, 205, 0.15)',
        px: '0 !important',
        borderRadius: '8px !important',
        mb: '42px',
      }}
    >
      <TestimonialsHeader
        languages={props.languages}
        selected={props.selected}
        setSelected={props.setSelected}
        order={props.order}
        setOrder={props.setOrder}
        counts={props.testimonials?.track_counts}
        total={props.total}
      />
      {!wait && <TestimonialsList testimonials={props.results} />}
      <TestimonialsPagination
        page={props.page}
        setPage={props.setPage}
        maxPage={props.testimonials?.pagination?.total_pages}
      />
    </Container>
  )
}
