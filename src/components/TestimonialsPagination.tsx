import {
  Avatar,
  Box,
  Button,
  Chip,
  Menu,
  MenuItem,
  MenuList,
  Pagination,
  PaginationItem,
  Paper,
  Radio,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import LeftArrow from '../icons/LeftArrow'
import RightArrow from '../icons/RightArrow'

export default function TestimonialsPagination() {
  const [page, setPage] = useState(1)

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
          disabled={page === 1}
          onClick={() => setPage((old) => old - 1)}
        >
          Previous
        </Button>
        <Pagination
          sx={{ my: '16px' }}
          count={34}
          variant="outlined"
          shape="rounded"
          onChange={(e, v) => setPage(v as number)}
          hidePrevButton
          hideNextButton
          page={page}
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
          disabled={page === 34}
          onClick={() => setPage((old) => old + 1)}
        >
          Next
        </Button>
      </Stack>
    </Box>
  )
}
