'use strict';

// Modules and dependencies
const express = require('express');
const path = require('path');


// Data Models
const models = require('./models/');

// App variables
const PORT = process.env.PORT || 3000;


// Initialize express app
const app = express();


// Middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Root
app.get('/', (req, res) => {
  res.status(200).render('home');
});


// Genres
app.get('/genres', (req, res) => {
  models.Genre.findAll()
    .then(genres => res.send(genres));
});


// MediaTypes
app.get('/mediatypes', (req, res) => {
  models.MediaType.findAll()
    .then( types => res.send(types) );
});

// Artists
app.get('/artists', (req, res) => {
  models.Artist.findAll()
    .then( artists => res.send(artists) );
});

// Playlists
app.get('/playlists', (req, res) => {
  models.Playlist.findAll()
    .then( playlists => res.send(playlists) );
});

// Albums
app.get('/albums', (req, res) => {
  models.Album.findAll({
      attributes: ['AlbumId', 'Title'],
      include: {
        model: models.Artist,
        attributes: ['Name']
      }
    })
    .then( albums => res.send(albums) );
});


// Invoices
app.get('/invoices', (req, res) => {
  models.Invoice.findAll({
    attributes: {exclude: 'CustomerId' },
    include: {
      model: models.Customer,
      attributes: {exclude: [
        'CustomerId',
        'SupportRepId'
      ]}
    }
  })
    .then( invoices => res.send(invoices) );
});

// All Customers
app.get('/customers', (req, res) => {
  models.Customer.findAll()
     .then( customers => res.send(customers) );
});

// Single Customer
app.get('/customers/:id', (req, res) => {
  models.Customer.findOne({
    where: {
      CustomerId: req.params.id
    }
  }).then( customer => res.send(customer));
});

// One Customer Invoices
app.get('/customers/:id/invoices', (req, res) => {
  models.Invoice.findAll({
    where: {
      CustomerId: req.params.id
    },
    include: {
      model: models.Customer
    }
  })
  .then(invoices => res.send(invoices));
});

// Start server listening
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

