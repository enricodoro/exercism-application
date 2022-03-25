interface Track {
  slug: string,
  title: string,
  icon_url: string,
}

interface TestimonialEntry {
  id: number,
  track: Track,
  exercise: { title: string },
  mentor: { handle: string, avatar_url: string },
  content: string,
  created_at: Date, 
}

interface Pagination {
  current_page: number,
  total_count: number,
  total_pages: number,
}

interface Testimonial {
  results: TestimonialEntry[],
  pagination: Pagination | null,
  tracks: string[],
  track_counts: { },
}

interface TrackList {
  tracks: Track[],
}

export enum Order {
  NEWEST_FIRST = 'newest_first',
  OLDEST_FIRST = 'oldest_first',
}

export type { Track, TrackList, Testimonial, TestimonialEntry, Pagination };

