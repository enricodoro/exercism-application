import { Order, Testimonial } from "./Interfaces";

function getTestimonials(page: number, track: string, order: Order) : Promise<Testimonial>{
    let t = "";
    if(track.length > 0) t = t + `&track=${track}`;
    return fetch(`https://exercism.org/api/v2/hiring/testimonials?page=${page}${t}&order=${order}`)
    .then(res => res.json())
    .then(res => {
        return res.testimonials as Testimonial
    });
}

export { getTestimonials };
