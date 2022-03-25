import { Box, Button, Pagination, PaginationItem, Stack } from '@mui/material'
import LeftArrow from '../icons/LeftArrow'
import RightArrow from '../icons/RightArrow'

export default function TestimonialsPagination(props: any) {
  const handleChange = (v: number) => {
    props.setPage(v)
  }

  return (
    <Box className="testimonials-pagination">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
        sx={{ mx: '32px' }}
      >
        <Button
          className="pagination-button"
          startIcon={<LeftArrow />}
          disabled={props.page === 1}
          onClick={() => props.setPage((old: number) => old - 1)}
        >
          Previous
        </Button>
        <Pagination
          sx={{ my: '16px' }}
          count={props.maxPage}
          variant="outlined"
          shape="rounded"
          onChange={(e, v) => handleChange(v)}
          hidePrevButton
          hideNextButton
          page={props.page}
          renderItem={(item) => (
            <PaginationItem
              sx={{
                backgroundColor: 'white',
                border: '1px solid #D5D8E4',
                py: '8px',
                px: '16px',
                fontWeight: 500,
                fontSize: '14px',
                color: '#5C5589',
              }}
              {...item}
            />
          )}
        />
        <Button
          className="pagination-button"
          endIcon={<RightArrow />}
          disableRipple
          disabled={props.page === props.maxPage}
          onClick={() => props.setPage((old: number) => old + 1)}
        >
          Next
        </Button>
      </Stack>
    </Box>
  )
}
