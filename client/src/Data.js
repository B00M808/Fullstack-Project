import { Buffer } from "buffer"; 

export default class Data {
  api(
    path,
    method = "GET",
    body = null,
    requiresAuth = false,
    credentials = null
  ) {
    const url = `http://localhost:5000/api${path}`;
    const options = {
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }
//Encoding a text string to Base64 string utilizing Buffer object
    if (requiresAuth) {
      const encodedCredentials = Buffer.from(
        `${credentials.username}:${credentials.password}`
      ).toString("base64");
      options.headers["Authorization"] = `Basic ${encodedCredentials}`;
    //  localStorage.setItem("token", JSON.stringify(encodedCredentials))
    }
    return fetch(url, options);
  }

//User signs in with credentials
  async getUser(username, password) {
    const response = await this.api("/users", "GET", null, true, {
      username,
      password,
    });
    if (response.status === 200) {
      return response.json().then((data) => data);
    } else if (response.status === 401) {
      return null;
    } else {
      throw new Error();
    }
  }

  //A new user gets created
  async createUser(user) {
    const response = await this.api("/users", "POST", user);
    if (response.status === 201) {
      return [];
    } else if (response.status === 400) {
      return response.json().then((data) => {
        return data.errors;
      });
    } else {
      throw new Error();
    }
  }

  //Retrieves courses
  async getCourses() {
    const response = await this.api("/courses", "GET");
    if (response.status === 200) {
      return response.json().then((data) => data);
    } else {
      throw new Error();
    }
  
  }
//Retrieves a course
  async getCourse(id) {
    const response = await this.api(`/courses/${id}`, "GET");
    if (response.status === 200) {
      return response.json().then((data) => data);
    } else {
      throw new Error();
    }
  }

  //A new course gets created
  async createCourse(body, username, password) {
    const response = await this.api("/courses", "POST", body, true, {
      username,
      password,
    });
    if (response.status === 201) {
      return []; //empty response if successful
    } else if (response.status === 400) {
      return response.json().then((data) => {
        return data.errors;
      });
    } else {
      throw new Error();
    }
  }

//Update a specific course
  async updateCourse(body, username, password, id) {
    const course = await this.api(`/courses/${id}`, "PUT", body, true, { 
      username, 
      password, 
      id,
    });
    if (course.status === 204) {
      return []; //empty response if successful
    } else if (course.status === 400) {
      return course.json().then((data) => {
        return data.errors;
      });
    } else {
      throw new Error();
    }
  }

//Delete a specific course
  async deleteCourse(id, username, password) {
    const response = await this.api(`/courses/${id}`, "DELETE", null, true, {username, password});
    if (response.status === 204) {
    } else {
      throw new Error();
    }
  }  
};
