
const { addBookHandler, getAllBookHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require('./handler')

//  Route berguna untuk menentukan respons server berdasarkan path atau url yang diminta oleh client.
// memuat kode konfigurasi routing sever --> path, method, dan handler
const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler
  }
]

module.exports = routes
