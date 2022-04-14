import { Order, Testimonial } from "./Interfaces";

function getTestimonials(page: number, track: string, order: Order, ex: string) : Promise<Testimonial>{
    let t = "";
    let e = ""
    if(track.length > 0) t = t + `&track=${track}`;
    if(ex.length > 0) e = e + `&exercise=${ex}`;
    return fetch(`https://exercism.org/api/v2/hiring/testimonials?page=${page}${t}${e}&order=${order}`)
    .then(res => res.json())
    .then(res => {
        return res.testimonials as Testimonial
    });
}

export { getTestimonials };
