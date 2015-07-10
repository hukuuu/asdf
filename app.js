// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'ng-xCharts', 'cgBusy', 'menu', 'browse', 'view', 'filters', 'campaigns'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'js/menu/menu.html',
    controller: 'MenuCtrl'
  })

  .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'js/browse/browse.html',
        controller: 'BrowseCtrl'
      }
    }
  })

  .state('app.campaigns', {
    url: '/campaigns',
    views: {
      'menuContent': {
        templateUrl: 'js/campaigns/list.html',
        controller: 'CampaignsCtrl'
      }
    }
  })

  .state('app.view', {
    url: '/:keyword',
    views: {
      'menuContent': {
        templateUrl: 'js/view/view.html',
        controller: 'ViewCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/browse');
});
angular.module('browse', ['services']);
angular.module('campaigns', [])
angular.module('app')
  .value('cgBusyDefaults', {
    // message: 'Loading Stuff',
    // templateUrl: '/js/cgBusyConfig/customTemplate.html',
    // minDuration: 7000000
  });

angular.module('filters', [])
angular.module('menu', []);
angular.module('services',[])
angular.module('view',[])
angular.module('browse')
  .controller('BrowseCtrl', function($scope, $state, browseService, stateService) {
    $scope.items = browseService.getItems()
    $scope.onClick = function(item) {
      stateService.title = item.title
      $state.go("app.view", {
        keyword: item.productName
      }, {
        inherit: false
      });
    }
  })

angular.module('browse')
  .factory('browseService', function() {
    var track = [{
      "category": "Gadgets",
      "items": [{
        "title": "iPhone 6",
        "productName": "iphone6",
        "keywords": ["iphone6", "iphone 6"],
        "picture": "gadgets/iphone6.jpg"
      }, {
        "title": "iPhone 6 plus",
        "productName": "iphone6plus",
        "keywords": ["iphone6plus", "iphone 6 plus", "iphone 6plus", "iphone6 plus"],
        "picture": "gadgets/iphone6plus.jpg"
      }, {
        "title": "Galaxy S5",
        "productName": "samsungs5",
        "keywords": ["samsungs5", "samsung s5"],
        "picture": "gadgets/samsungs5.jpg"
      }, {
        "title": "Galaxy Note4",
        "productName": "samsungnote4",
        "keywords": ["SamsungNote4", "samsung note 4", "samsung note4"],
        "picture": "gadgets/samsungnote4.jpg"
      }, {
        "title": "LG G3",
        "productName": "lgg3",
        "keywords": ["lgg3", "lg g3"],
        "picture": "gadgets/lgg3.jpg"
      }, {
        "title": "Nexus 6",
        "productName": "nexus6",
        "keywords": ["nexus6", "nexus 6"],
        "picture": "gadgets/nexus6.jpg"
      }, {
        "title": "Moto X",
        "productName": "motox",
        "keywords": ["motox", "moto x"],
        "picture": "gadgets/motox.jpg"
      }, {
        "title": "OnePlus",
        "productName": "oneplus",
        "keywords": ["oneplus"],
        "picture": "gadgets/oneplus.jpg"
      }, {
        "title": "iPad Air2",
        "productName": "ipadair2",
        "keywords": ["ipadair2", "ipad air 2", "ipad air2"],
        "picture": "gadgets/ipadair2.jpg"
      }, {
        "title": "Xiaomi Mi4",
        "productName": "xiaomimi4",
        "keywords": ["xiaomimi4", "xiaomi mi4"],
        "picture": "gadgets/xiaomimi4.jpg"
      }, {
        "title": "Fire Phone",
        "productName": "firephone",
        "keywords": ["firephone"],
        "picture": "gadgets/firephone.jpg"
      }, {
        "title": "Kindle",
        "productName": "kindle",
        "keywords": ["#Kindle", "#amazonkindle", "#Kindle2"],
        "picture": "gadgets/kindle.jpg"
      }, {
        "title": "Nokia Lumia 1020",
        "productName": "nokialumia1020",
        "keywords": ["nokialumia1020", "lumia1020", "lumia 1020"],
        "picture": "gadgets/nokialumia1020.jpg"
      }, {
        "title": "Nokia Lumia 930",
        "productName": "nokialumia930",
        "keywords": ["nokialumia930", "lumia930", "lumia 930"],
        "picture": "gadgets/nokialumia930.jpg"
      }, {
        "title": "HoloLens",
        "productName": "hololens",
        "keywords": ["hololens", "microsofthololens"],
        "picture": "gadgets/hololens.jpg"
      }, {
        "title": "Chromecast",
        "productName": "chromecast",
        "keywords": ["#chromecast", "#googlechromecast"],
        "picture": "gadgets/chromecast.jpg"
      }]
    }, {
      "category": "Game consoles",
      "items": [{
        "title": "PlayStation",
        "productName": "playstation",
        "keywords": ["#playstation", "sony playstation", "#ps4"],
        "picture": "consoles/playstation.jpg"
      }, {
        "title": "Xbox",
        "productName": "xbox",
        "keywords": ["#xbox", "xboxone", "xbox one"],
        "picture": "consoles/xbox.jpg"
      }, {
        "title": "Wii",
        "productName": "wii",
        "keywords": ["#wii"],
        "picture": "consoles/wii.jpg"
      }]
    }, {
      "category": "Cloud services",
      "items": [{
        "title": "iCloud",
        "productName": "icloud",
        "keywords": ["#icloud"],
        "picture": "cloud/icloud.jpg"
      }, {
        "title": "Dropbox",
        "productName": "dropbox",
        "keywords": ["#dropbox"],
        "picture": "cloud/dropbox.jpg"
      }, {
        "title": "Google Drive",
        "productName": "googledrive",
        "keywords": ["#googledrive"],
        "picture": "cloud/googledrive.jpg"
      }, {
        "title": "OneDrive",
        "productName": "onedrive",
        "keywords": ["#onedrive"],
        "picture": "cloud/onedrive.jpg"
      }, {
        "title": "Azure",
        "productName": "azure",
        "keywords": ["#azure"],
        "picture": "cloud/azure.jpg"
      }]
    }, {
      "category": "Cars",
      "items": [{
        "title": "Bmw M3",
        "productName": "bmwm3",
        "keywords": ["bmw m3", "bmwm3", "bmwm4", "bmw m4"],
        "picture": "cars/bmwm3.jpg"
      }, {
        "title": "Audi S4",
        "productName": "audis4",
        "keywords": [
          "audi s4", "audis4", "audirs4", "audi rs4", "audirs5", "audi rs5", "audis5", "audi s5"
        ],
        "picture": "cars/audis4.jpg"
      }, {
        "title": "Tesla Model S",
        "productName": "teslas",
        "keywords": ["teslas", "tesla s"],
        "picture": "cars/teslas.jpg"
      }, {
        "title": "Chevrolet Volt",
        "productName": "chevyvolt",
        "keywords": ["chevyvolt", "chevy volt", "Chevrolet Volt", "ChevroletVolt"],
        "picture": "cars/chevyvolt.jpg"
      }, {
        "title": "Toyota Prius",
        "productName": "toyotaprius",
        "keywords": ["#prius", "toyotaprius", "Toyota Prius"],
        "picture": "cars/toyotaprius.jpg"
      }]
    }, {
      "category": "Trending",
      "items": [{
        "title": "Leonel Messi",
        "productName": "messi",
        "keywords": ["#leonalmessi", "Leonel Messi"],
        "picture": "trending/messi.jpg"
      }, {
        "title": "Cristiano Ronaldo",
        "productName": "ronaldo",
        "keywords": ["#CristianoRonaldo", "Cristiano Ronaldo"],
        "picture": "trending/ronaldo.jpg"
      }, {
        "title": "B. Cumberbatch",
        "productName": "BenedictCumberbatch",
        "keywords": ["#BenedictCumberbatch", "#benedict", "#cumberbatch", "Benedict Cumberbatch"],
        "picture": "trending/BenedictCumberbatch.jpg"
      }, {
        "title": "Bradley Cooper",
        "productName": "BradleyCooper",
        "keywords": ["#BradleyCooper", "Bradley Cooper"],
        "picture": "trending/BradleyCooper.jpg"
      }, {
        "title": "Steve Carell",
        "productName": "SteveCarell",
        "keywords": ["#SteveCarell", "Steve Carell"],
        "picture": "trending/SteveCarell.jpg"
      }, {
        "title": "Michael Keaton",
        "productName": "MichaelKeaton",
        "keywords": ["#MichaelKeaton", "Michael Keaton"],
        "picture": "trending/MichaelKeaton.jpg"
      }, {
        "title": "Eddie Redmayne",
        "productName": "EddieRedmayne",
        "keywords": ["#EddieRedmayne", "Eddie Redmayne"],
        "picture": "trending/EddieRedmayne.jpg"
      }, {
        "title": "Marion Cotillard",
        "productName": "MarionCotillard",
        "keywords": ["#MarionCotillard", "Marion Cotillard"],
        "picture": "trending/MarionCotillard.jpg"
      }, {
        "title": "Felicity Jones",
        "productName": "FelicityJones",
        "keywords": ["#FelicityJones", "Felicity Jones"],
        "picture": "trending/FelicityJones.jpg"
      }, {
        "title": "Julianne Moore",
        "productName": "JulianneMoore",
        "keywords": ["#JulianneMoore", "Julianne Moore"],
        "picture": "trending/JulianneMoore.jpg"
      }, {
        "title": "Rosamund Pike",
        "productName": "RosamundPike",
        "keywords": ["#RosamundPike", "Rosamund Pike"],
        "picture": "trending/RosamundPike.jpg"
      }, {
        "title": "Reese Witherspoon",
        "productName": "ReeseWitherspoon",
        "keywords": ["#ReeseWitherspoon", "Reese Witherspoon"],
        "picture": "trending/ReeseWitherspoon.jpg"
      }, {
        "title": "Tsipras",
        "productName": "Tsipras",
        "keywords": ["Tsipras", "atsipras", "tsipras_eu", "Alexis Tsipras", "AlexisTsipras"],
        "picture": "trending/tsipras.jpg"
      }]
    }]




    return {
      getItems: function() {
        return track
      }
    }

  })

angular.module('campaigns')
  .controller('CampaignsCtrl', function($scope, $rootScope, $ionicPopup, $ionicModal, $state, stateService, campaignsService) {

    var modal
    $scope.campaigns = campaignsService.findAll()
    $scope.newCampaign = _new()
    $scope.now = new Date()

    function _new() {
      return {
        end: new Date(),
        cash: 10
      }
    }

    $ionicModal.fromTemplateUrl('js/campaigns/create.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(m) {
      modal = m
    });

    var open = function() {
      modal.show()
    }

    $scope.getStatus = function(campaign) {
      var now = new Date().getTime()
      var start = new Date(campaign.start).getTime()
      var end = new Date(campaign.end).getTime()
      if(start > now) {
        return 'new'
      } else if(end > now) {
        return 'running'
      } else {
        return 'done'
      }
    }

    $scope.onClick = function(campaign) {
      console.log(campaign);
      stateService.title = campaign.title
      $state.go("app.view", {
        keyword: 'iphone6'
      }, {
        inherit: false
      });
    }

    $scope.estimateTweets = function(cash) {
      return cash * 100
    }

    $scope.isValid = function(campaign) {
      return campaign && campaign.title && campaign.keywords
    }

    $scope.cancel = function() {
      modal.hide()
      $scope.newCampaign = _new()
    }
    $scope.create = function() {
      modal.hide()
      $scope.campaigns.push($scope.newCampaign)
      campaignsService.save($scope.newCampaign)
      $scope.newCampaign = _new()
    }

    // listen for the event in the relevant $scope
    $rootScope.$on('myCustomEvent', open);
  })

angular.module('campaigns')
  .factory('campaignsService', function() {

    var key = 'senticraft:campaigns';
    var encode = JSON.stringify.bind(JSON)
    var decode = JSON.parse.bind(JSON)

    var _findIndex = function(all, campaign) {
      var index = -1
      all.forEach(function(c, i) {
        if (c.id === campaign.id)
          index = i
      })
      return index
    }

    var save = function(campaign) {
      var all = findAll()
      if (!campaign.id) {
        campaign.id = new Date().getTime()
        all.push(campaign)
      } else {
        var index = _findIndex(all, campaign)
        all[index] = campaign
      }
      localStorage.setItem(key, encode(all))
    }

    var findAll = function() {
      var all = decode(localStorage.getItem(key))
      if (!all)
        return []
      return all
    }

    var deleteCampaign = function(campaign) {
      var all = findAll().filter(function(camp) {
        return camp.id !== campaign.id
      })
      localStorage.setItem(key, encode(all))
      return campaign
    }
    window.cs = {
      findAll: findAll,
      deleteCampaign: deleteCampaign,
      save: save
    }
    return window.cs
  })

angular.module('filters')
.filter('capitalize', function() {
	return function(input) {
		return input === '' ? '' : input.charAt(0).toUpperCase() + input.substr(1)
	}
})
angular.module('filters')
	.filter('label', function() {
		return function(input) {
			return {
				superb: 'superb',
				veryPositive: 'v. positive',
				positive: 'positive',
				negative: 'negative'
			}[input]
		}
	})
angular.module('menu')
  .controller('MenuCtrl', function($scope, $state, $rootScope, $ionicModal, $timeout) {

    $scope.shouldShowAddButton = function() {
      return $state.current.name === 'app.campaigns'
    }

    $scope.onClickAddButton = function() {
      $rootScope.$broadcast('myCustomEvent', {
        someProp: 'Sending you an Object!' // send whatever you want
      });
    }

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('js/login/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  })

angular.module('services')
  .factory('sampleService', function($http, $q) {
    window.q = $q;
    var sampleUrl = 'http://104.131.75.136:5000/api/sample/:prn/:timestamp'

    var _samples = {}

    return {
      sample: function(productName, date) {
        var dates = date instanceof Array ? date : [date]
        var key = dates.reduce(function(all, d) {
          return all.concat(d.toString())
        }, '') + productName
        console.log(key);
        var sample = _samples[key]

        if (!sample) {
          console.log("fresh");
          if (date instanceof Array) {
            var promises = date.map(function(d) {
              return $http.get(sampleUrl.replace(':prn', productName).replace(':timestamp', d.getTime()))
            })
            sample = $q.all(promises)
              .then(function(results) {
                return results.reduce(function(acc, cur) {
                  return acc.concat(cur.data)
                }, [])
              })
          } else {
            sample = $http.get(sampleUrl.replace(':prn', productName).replace(':timestamp', date.getTime()))
              .then(function(payload) {
                return payload.data
              })
          }
        }
        _samples[key] = sample;
        console.log(window.s = sample);
        return sample

      }
    }

  })

angular.module('services')
  .factory('sentimentService', function($http) {

    var sentimentUrl = 'http://104.131.75.136:5000/api/sentiment/:prn/last/:days'
    var summaries = {}
    var histories = {}

    function parse(summary, productName) {
      var parsed = {
        productName: productName,
        superb: [],
        veryPositive: [],
        positive: [],
        negative: []
      }
      if (summary.length) {
        summary.reduce(function(acc, cur) {
          acc.superb.push({
            key: cur.day,
            value: cur.superb
          })
          acc.veryPositive.push({
            key: cur.day,
            value: cur.veryPositive
          })
          acc.positive.push({
            key: cur.day,
            value: cur.positive
          })
          acc.negative.push({
            key: cur.day,
            value: cur.negative
          })
          return acc
        }, parsed)
      }
      return parsed
    }

    function _summary(productName) {
      var summary = summaries[productName]
      var parsed
      if (!summary) {
        console.log('fresh');
        summary = $http.get(sentimentUrl.replace(':prn', productName).replace(':days', 7))
        parsed = parse(summary, productName)
        summaries[productName] = summary
      }
      return summary
    }

    function _history(productName) {
      var history = histories[productName]
      var parsed
      if (!history) {
        console.log('fresh');
        history = $http.get(sentimentUrl.replace(':prn', productName).replace(':days', 30))
        parsed = parse(history, productName)
        histories[productName] = history
      }
      return history
    }

    function invalidate() {
      console.log('clear cache');
      summaries = {}
      histories = {}
    }
    var everyDay = 1000 * 60 * 60 * 24
    setInterval(invalidate, everyDay)

    return {
      summary: _summary,
      history: _history
    };
  });

angular.module('services')
.factory('stateService', function() {
	return {}
})
angular.module('view')
  .controller('ViewCtrl', function($scope, $state, $stateParams, $timeout, sentimentService, stateService, sampleService) {

    var keyword = $stateParams.keyword;
    $scope.title = stateService.title || keyword;

    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1)
    var yesterdayMinusOne = new Date();
    yesterdayMinusOne.setDate(yesterdayMinusOne.getDate() - 2)
    var yesterdayMinusTwo = new Date()
    yesterdayMinusTwo.setDate(yesterdayMinusTwo.getDate() - 3)

    var summary = {
        dataName: 'summaryData',
        optsName: 'summaryOpts',
        typeName: 'summaryType',
        props: {
          xScale: "ordinal",
          yScale: "linear",
          type: 'bar-hybrid',
        },
        extract: function(data) {
          var keys = ['superb', 'veryPositive', 'positive', 'negative']
          return keys.map(function(key) {
            return {
              className: '.' + key,
              data: data.map(function(obj) {
                return {
                  x: new Date(obj.day).toISOString().slice(0, 10),
                  y: obj[key]
                }
              })
            }
          })
        }
      },
      history = {
        dataName: 'historyData',
        optsName: 'historyOpts',
        typeName: 'historyType',
        props: {
          xScale: "time",
          yScale: "linear",
          type: 'line-clickable'
        },
        extract: function(data) {
          return [{
            className: '.positive',
            data: data.map(function(obj) {
              return {
                x: new Date(obj.day).toISOString().slice(0, 10),
                y: obj.superb + obj.veryPositive + obj.positive
              }
            })
          }, {
            className: '.negative',
            data: data.map(function(obj) {
              return {
                x: new Date(obj.day).toISOString().slice(0, 10),
                y: obj.negative
              }
            })
          }]
        }
      }
    overall = {

      dataName: 'overallData',
      optsName: 'overallOpts',
      typeName: 'overallType',
      props: {
        xScale: "ordinal",
        yScale: "linear",
        type: 'bar-single',
      },
      extract: function(data) {
        var acro = {
          'superb': 'sup',
          'veryPositive': 'v. pos',
          'positive': 'pos',
          'negative': 'neg'
        }
        var keys = Object.keys(acro)
        var length = data.length
        return keys.map(function(key) {
          return {
            className: '.' + key,
            data: [{
              x: acro[key],
              y: data.reduce(function(acc, cur) {
                return acc + cur[key]
              }, 0) / length
            }]
          }
        })
      },
      opts: {
        yMax: 100,
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 10,
        paddingBottom: 15,
        sortX: function(a, b) {
          console.log('sorting ?', a, b);
          var values = {
            superb: 4,
            veryPositive: 3,
            positive: 2,
            negative: 1
          }
          return values[a] - values[b]
        },
        click: function cl(data, i) {
          var domain = {
            'pos': 'positive',
            'v. pos': 'veryPositive',
            'sup': 'superb',
            'neg': 'negative'
          }[data.x]
          var dates = [yesterday, yesterdayMinusOne, yesterdayMinusTwo];
          $scope.loadSampleTweets = sampleService.sample(keyword, dates)
            .then(function(data) {
              $scope.sampleTweets = data.filter(function(tweet) {
                return tweet.sentiment === domain
              })
            })
        }
      }
    }

    $scope.slideHasChanged = function(index) {
      if (index === 1)
        sentimentService.history(keyword)
        .then(binder(history))
      if (index === 2)
        sentimentService.history(keyword)
        .then(binder(overall))
    }

    sentimentService.summary(keyword)
      .then(binder(summary))

    $scope.loadSampleTweets = sampleService.sample(keyword, yesterday)
      .then(function(data) {
        $scope.sampleTweets = data
      })

    function binder(props) {
      return function(response) {
        $scope[props.dataName] = props.props
        $scope[props.dataName].main = props.extract(response.data)
        $scope[props.optsName] = props.opts || {
          "dataFormatX": function(x) {
            return d3.time.format('%Y-%m-%d').parse(x);
          },
          "tickFormatX": function(x) {
            return d3.time.format('%e')(x);
          },
          yMax: 100,
          paddingTop: 10,
          paddingLeft: 30,
          paddingRight: 10,
          paddingBottom: 15,
          click: function(data, i) {
            $scope.loadSampleTweets = sampleService.sample(keyword, data.x)
              .then(function(data) {
                $scope.sampleTweets = data
              })
          }
        };
        $scope[props.typeName] = props.props.type;
        return response
      }
    }


  })
