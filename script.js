import http from 'k6/http';

import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '120s',
};

let productId = 1;

export default function () {
  const url = 'http://127.0.0.1:1128/';

  productId += 1;

  // get requests
  http.get(`${url}reviews/?product_id=${productId}`);
  http.get(`${url}reviews/photos/?product_id=${productId}`);
  http.get(`${url}reviews/meta/reatings/?product_id=${productId}`);
  http.get(`${url}reviews/meta/recommend?product_id=${productId}`);
  http.get(`${url}reviews/meta/characteristics/?product_id=${productId}`);

  // post requests (posting a review)

  // put requests (marking reviews as helpful and reporting reviews)

  sleep(1);
}
