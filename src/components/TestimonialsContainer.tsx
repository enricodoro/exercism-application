import { Box, CircularProgress, Container, Stack } from '@mui/material'
import { useEffect } from 'react'
import '../css/testimonials.css'
import TestimonialsHeader from './TestimonialsHeader'
import TestimonialsList from './TestimonialsList'
import TestimonialsPagination from './TestimonialsPagination'

export default function TestimonialsContainer(props: any) {
  useEffect(() => {
    props.testimonials?.results?.length > 0
      ? props.setWait(false)
      : props.setWait(true)
  }, [props, props.testimonials])

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
        handleSearch={props.handleSearch}
      />
      {!props.wait ? (
        <TestimonialsList testimonials={props.results} />
      ) : (
        <Box
          sx={{
            minHeight: '640px',
            backgroundColor: 'rgba(251, 252, 254, 0.95)',
          }}
        >
          <Stack alignItems="center" justifyContent="center" minHeight="640px">
            <CircularProgress />
          </Stack>
        </Box>
      )}
      <TestimonialsPagination
        page={props.page}
        setPage={props.setPage}
        maxPage={props.testimonials?.pagination?.total_pages}
      />
    </Container>
  )
}
