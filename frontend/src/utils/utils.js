import $ from 'jquery'; 
let apiHost = 'http://' + (process.env.API_HOST || '127.0.0.1') + ':3001'
export const postUser = (user) => {
  return $.ajax({
    url: `${apiHost}/api/v1/users`,
    method: 'POST',
    data: { user }
  });
};

export const fetchUserByName = (username) => {
  return $.ajax({
    url: `${apiHost}/api/v1/users/${username}`,
    method: 'GET',
  })
}

export const fetchUserById = (id) => {
  return $.ajax({
    url: `${apiHost}/api/v1/users/${id}`,
    method: 'GET',
    data: { id_get: true }
  })
}

export const postSession = (user) => {
  return $.ajax({
    url: `${apiHost}/api/v1/session`,
    method: 'POST',
    data: { user }
  })
}

export const deleteSession = () => {
  return $.ajax({
    url: `${apiHost}/api/v1/session`,
    method: 'DELETE'
  });
};

export const fetchUsers = (request) => {
  return $.ajax({
    url: `${apiHost}/api/v1/users`,
    method: 'GET',
    data: {request}
  })
}

export const fetchCategories = (request) => {
  return $.ajax({
    url: `${apiHost}/api/v1/categories/`,
    method: 'GET'
  })
}

export const fetchCategory = (title) => {
  return $.ajax({
    url: `${apiHost}/api/v1/categories/${title}`,
    method: 'GET'
  })
}