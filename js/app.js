var app = angular.module('app', [])
app.controller('ProfileController', ['$http', function($http) {
  var route = 'https://api.github.com/users/'
  this.profile = {data: 'stuff'}

  this.getProfile = (name) => {
    console.log(`Let's get the profile for ${name}!`)
    console.log(route + name)
    $http.get(route + name)
      .then((result) => {
        this.profile = result.data

        this.getFollowers()
        this.getFollowing()
        this.getRepos()

        console.log(this.profile.avatar_url)
      }, function(err) {
        console.log(err)
    })
  }
  this.getFollowing = () => {
    console.log(`Let's see who ${this.profile.login} is following!`)
    console.log(route + this.profile.login + '/following')
    $http.get(route + this.profile.login + '/following')
      .then((result) => {
        this.following = result.data
      }, function(err) {
        console.log(err)
      })
  }

  this.getFollowers = () => {
    console.log(`Let's get the followers for ${this.profile.login}!`)
    $http.get(this.profile.followers_url)
      .then((result) => {
        this.followers = result.data 
      }, function(err) {
        console.log(err)
      }) 
  }
  
  this.getRepos = () => {
    console.log(`Let's get the repos for ${this.profile.login}!`)
    $http.get(this.profile.repos_url)
      .then((result) => {
        this.repos = result.data
      }, function(err) {
        console.log(err)
      })
  }
}])
