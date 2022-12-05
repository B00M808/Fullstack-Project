import axios from "axios";

const options = {
  method: 'POST',
  url: 'http://localhost:5000/api/courses',
  headers: {Authorization: 'Basic am9lQHNtaXRoLmNvbTpqb2VwYXNzd29yZA=='},
  data: {
    title: 'New Course',
    description: 'My course descriptionnn',
    userId: 2,
    estimatedTime: '9 hours'
  }
};

axios.request(options).then(function (response) {
}).catch(function (error) {
  console.error(error);
});