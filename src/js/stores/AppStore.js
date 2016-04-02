var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype, {
 setMovieResults: function(movies){
   _movies = movies;
 },
 getMovieResults: function(){
   return _movies;
 },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener:function (callback) {
    this.on('change', callback);
  },
  removeChangeListener:function (callback) {
    this.removeListener('change',callback);
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  console.log("AppDispatcher.register " + action.actionType);
  switch (action.actionType) {
    case AppConstants.SEARCH_MOVIES:
      console.log('Seaching for movie ' + action.movie.title);
      AppAPI.searchMovies(action.movie);
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.RECEIVE_MOVIE_RESULTS:
      AppStore.setMovieResults(action.movies);

      AppStore.emit(CHANGE_EVENT);
      break;
  }
  return true;
});

module.exports = AppStore;
