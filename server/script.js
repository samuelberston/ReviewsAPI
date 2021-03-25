/* eslint-disable import/no-unresolved */
import http from 'k6/http';

import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '120s',
};

let productId = 1;
let reviewId = 1;
const body = {
  rating: 4,
  summary: 'Great product, highly reocmmend',
  recommend: 1,
  body: 'This product was better than I could have ever imagined. It really did the trick and fixed my issue. HIGHLY RECOMMEND!',
  reviewer_name: 'Tiramisu23',
};

export default function () {
  const url = 'http://127.0.0.1:3001/';

  productId += 1;
  reviewId += 1;
  body.productId = productId;

  // get requests
  http.get(`${url}reviews/?product_id=${productId}`);
  http.get(`${url}reviews/photos/?product_id=${productId}`);
  http.get(`${url}reviews/meta/reatings/?product_id=${productId}`);
  http.get(`${url}reviews/meta/recommend?product_id=${productId}`);
  http.get(`${url}reviews/meta/characteristics/?product_id=${productId}`);

  // post requests (posting a review) -- add the req body
  http.post(`${url}reviews`);

  // put requests (marking reviews as helpful and reporting reviews)
  http.put(`${url}helpful/?review_id=${reviewId}`);
  // http.put(`${url}report/?review_id=${reviewId}`);

  sleep(1);
}
