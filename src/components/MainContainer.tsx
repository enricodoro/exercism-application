import { Chip, Container, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Order, Testimonial, TestimonialEntry, Track } from '../api/Interfaces'
import { getTestimonials } from '../api/Testimonials'
import { getTracks } from '../api/Tracks'
import ChatBadge from '../icons/ChatBadge'
import TestimonialsContainer from './TestimonialsContainer'
import WaveDivider from './WaveDivider'

export default function MainContainer() {
  const [testimonials, setTestimonials] = useState<Testimonial>(
    {} as Testimonial,
  )
  const [results, setResults] = useState<TestimonialEntry[]>([])
  const [selected, setSelected] = useState('')
  const [order, setOrder] = useState<Order>(Order.NEWEST_FIRST)
  const [page, setPage] = useState(1)
  const [languages, setLanguages] = useState<Track[]>([])
  const [total, setTotal] = useState(0)
  const [exercise, setExercise] = useState('')
  const [wait, setWait] = useState(true)

  const handleSearch = (ex: string) => {
    setExercise(ex)
  }

  useEffect(() => {
    setWait(true)
    getTestimonials(page, selected, order, exercise)
      .then((t) => {
        setTestimonials(t)
        setResults(t.results)
      })
      .catch((e) => {
        // todo
      })
  }, [exercise, order, page, selected])

  useEffect(() => {
    setPage(1)
  }, [selected, order])

  useEffect(() => {
    if (testimonials?.tracks?.length > 0) {
      getTracks()
        .then((t) =>
          setLanguages(
            t.tracks.filter((tr) =>
              testimonials?.tracks?.some((t) => t === tr.slug),
            ),
          ),
        )
        .catch((e) => {
          // todo
        })
    }
  }, [testimonials])

  useEffect(() => {
    if (
      testimonials?.tracks?.length > 0 &&
      languages.length > 0 &&
      total === 0
    ) {
      languages.forEach((l) =>
        setTotal((old) => old + (testimonials?.track_counts as any)[l.slug]),
      )
    }
  }, [testimonials, languages, total])

  return (
    <Container sx={{ maxWidth: '1440px !important' }}>
      <Stack direction="column" alignItems="center" gap={2} marginTop={5}>
        <ChatBadge />
        <Stack direction="row" alignItems="center" gap={2}>
          <Typography fontSize="31.25px" fontWeight="700">
            Testimonials I've left
          </Typography>
          {total > 0 && (
            <Chip
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#5C5589',
                borderColor: '#CBC9D9',
              }}
              variant="outlined"
              label={total}
            />
          )}
        </Stack>
        <WaveDivider />
        <TestimonialsContainer
          results={results}
          testimonials={testimonials}
          languages={languages}
          selected={selected}
          setSelected={setSelected}
          order={order}
          setOrder={setOrder}
          page={page}
          setPage={setPage}
          total={total}
          handleSearch={handleSearch}
          wait={wait}
          setWait={setWait}
        />
      </Stack>
    </Container>
  )
}
