// import http from 'k6/http';
// import { check, sleep } from 'k6';

// export let options = {
//     stages: [
//         { duration: '30s', target: 50 },
//         { duration: '1m', target: 50 }, 
//         { duration: '30s', target: 0 }, 
//     ],
// };

// export default function () {
//     let res = http.get('http://127.0.0.1:55630/api/check');
//     check(res, { 'status é 200': (r) => r.status === 200 });
//     sleep(1);
// }