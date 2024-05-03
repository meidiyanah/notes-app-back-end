const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler, 
    deleteNoteByIdHandler 
} = require("./handler");

const routes = [
    // {
    //     method: 'GET',
    //     path: '/',
    //     handler: (request, h) => {
    //         return 'Beranda'
    //     },
    // },
    // {
    //     method: '*',
    //     path: '/',
    //     handler: (request, h) => {
    //         return 'Halaman tidak dapat diakses dengan method tersebut'
    //     },
    // },
    // {
    //     method: '*',
    //     path: '/{any*}',
    //     handler: (request, h) => {
    //         return 'Halaman tidak ditemukan'
    //     },
    // },
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;