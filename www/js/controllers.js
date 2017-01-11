var app = angular.module('app.controllers', [])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.controller('lOGINCtrl', ['$scope', '$stateParams', '$http', '$state', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http, $state, $rootScope) {
        $scope.data = {};
        $scope.update = function() {
            var link = 'http://127.0.0.1/login.php';
            $http.post(link, { username: $scope.data.username, password: $scope.data.password }).then(function(res) {
                var value = res.data;
                if (value.trim() == "YES") {
                    alert('Welcome');
                    $rootScope.name = $scope.data.username;
                    $state.go('menu.dRSPINE2');
                } else {
                    alert("Wrong Email and Password. Please Input Correct.");
                }
            });
        };
    }
])

.controller('rEGISTERCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http) {
        $scope.data = {};
        $scope.signup = function() {
            var link = 'http://127.0.0.1/register.php';
            if ($scope.data.pwd1 != $scope.data.pwd2) {
                alert('Input Wrong Password, Check again please.');
            } else {
                $http.post(link, {
                    fname: $scope.data.fname,
                    lname: $scope.data.lname,
                    email: $scope.data.email,
                    pwd: $scope.data.pwd1,
                    birthday: $scope.data.birthday,
                    gender: $scope.data.gender
                }).then(function(res) {
                    alert(res.data);
                });
            }

        };
    }
])

.controller('theSpineClinicCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {

    }
])

.controller('aboutDrSpineCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http) {
        var link = 'http://127.0.0.1/aboutDoctor_back.php';
        $http.post(link, { data: "sent" }).then(function(res) {
            $scope.abouts = res.data;
        });
    }
])

.controller('locateUsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {

        var mapCanvas = document.getElementById("map");
        var mapOptions = {
            center: new google.maps.LatLng(51.5, -0.2),
            zoom: 10
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

    }
])

.controller('helpCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http, $state) {
        var link = 'http://127.0.0.1/help_back.php';
        $http.post(link, { trans: "send" }).then(function(res) {
            $scope.helps = res.data;
        });
    }
])

.controller('profileCtrl', ['$scope', '$stateParams', '$http', '$state', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http, $state, $rootScope) {
        var link = 'http://127.0.0.1/drspineProfile_back.php';
        var value; //$rootScope.name
        $scope.data = {};
        $http.post(link, { email: $rootScope.name }).then(function(res) {
            $scope.profiles = res.data;
        });
        $scope.changePassword = function() {
            var oldpwd = $scope.data.pwdold;
            var pwdnew1 = $scope.data.pwdnew1;
            var pwdnew2 = $scope.data.pwdnew2;
            if (oldpwd != "") {
                if (pwdnew1 != "" && pwdnew2 != "") {
                    if (pwdnew1 != pwdnew2) {
                        alert("You input wrong password, Please check again.");
                    } else {
                        //Here, you can change pwd.
                        link = 'http://127.0.0.1/resetPassword_back.php';
                        $http.post(link, { email: $rootScope.name, repwd: pwdnew1, oldpwd: oldpwd }).then(function(res) {
                            //return code
                            if (res.data == "success") {
                                alert("Successfully change your password.");
                            } else {
                                alert("Process is failed. try again.");
                            }
                        });
                    }
                } else {
                    alert("Reset Password is Wrong. Please check again.");
                }

            } else {
                alert("Input Old Password.");
            }

        }

        $scope.singout = function() {
            $rootScope.name = "";
            $state.go('dRSPINE');
        }
    }
])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('dRSPINECtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('dRSPINE2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('healthTipsCtrl', ['$scope', '$stateParams', '$http', '$state', '$rootScope', '$ionicPopup', '$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http, $state, $rootScope, $ionicPopup, $timeout) {
        var link = 'http://127.0.0.1/healthTip.php';
        var value;
        $scope.goBack = function() {
            $state.go('menu.dRSPINE2');
        }
        $scope.goSearch = function() {
            // An elaborate, custom popup
            $scope.data = {};

            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.keyword">',
                title: 'Search View',
                subTitle: 'Please input the keyword that you want to see.',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>Search</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if (!$scope.data.keyword) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                //alert($scope.data.keyword);
                                var result = [];
                                angular.forEach($scope.tips, function(tip) {
                                    var check = 0;
                                    angular.forEach(tip, function(value, key) {
                                        //alert(value);
                                        if (value.indexOf($scope.data.keyword) !== -1) {
                                            check = 1;
                                        }
                                    });
                                    if (check == 1) {
                                        result.push(tip);
                                    }
                                    //alert(tip);
                                });
                                $scope.tips = result;
                            }
                        }
                    }
                ]
            });

            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });

            $timeout(function() {
                myPopup.close(); //close the popup after 3 seconds for some reason
            }, 10000);
        }
        $http.post(link, { display: "YES" }).then(function(res) {
            $scope.tips = res.data;
        });
        $scope.clickElement = function(headline, date, header, text) {
            $rootScope.health_headline = headline;
            $rootScope.health_date = date;
            $rootScope.health_header = header;
            $rootScope.health_text = text;
            $state.go('healthTipInformation');
        }
    }
])

.controller('healthTipInformationCtrl', ['$scope', '$stateParams', '$http', '$state', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http, $state, $rootScope) {
        $scope.Topic = $rootScope.health_headline;
        $scope.Date = $rootScope.health_date;
        $scope.Header = $rootScope.health_header;
        $scope.Contents = $rootScope.health_text;
    }
])

.controller('meetYourDoctorsCtrl', ['$scope', '$stateParams', '$rootScope', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $rootScope, $http, $state) {
        var link = 'http://127.0.0.1/anCount.php';
        var value;
        $scope.goBack = function() {
            $state.go('menu.dRSPINE2');
        }
        $scope.goQuestion = function() {
            $state.go('askDrSpine');
        }

        $scope.goAnswers = function() {
            $state.go('viewAnswers');
        }

        $http.post(link, { email: $rootScope.name }).then(function(res) {
            value = res.data;
            $scope.badge = value.trim();
        });
    }
])

.controller('askDrSpineCtrl', ['$scope', '$stateParams', '$http', '$rootScope', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http, $rootScope, $state) {
        $scope.goBack = function() {
            $state.go('menu.dRSPINE2');
        }

        $scope.data = {};
        $scope.send = function() {
            var link = 'http://127.0.0.1/question.php';
            $http.post(link, { email: $rootScope.name, subject: $scope.data.subject, question: $scope.data.question }).then(function(res) {
                var value = res.data;
                if (value.trim() == "Exist") {
                    alert('You already Send.');
                } else if (value.trim() == "Sent") {
                    alert('Your Appointment is Reserved.');
                } else if (value.trim() == "Failed") {
                    alert('Please input correct information.');
                } else {
                    alert(value.trim());
                }
            });
        }
    }
])

.controller('newsAndEventsCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http, $state) {
        var link = 'http://127.0.0.1/news.php';
        var value;
        $scope.goBack = function() {
            $state.go('menu.dRSPINE2');
        }
        $http.post(link, { display: "YES" }).then(function(res) {
            $scope.news = res.data;
        });
    }
])

.controller('callDrSpineCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goBack = function() {
            $state.go('menu.dRSPINE2');
        }
    }
])

.controller('bookingCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http, $state) {
        $scope.data = {};
        $scope.goBack = function() {
            $state.go('menu.dRSPINE2');
        }
        $scope.send = function() {
            var link = 'http://127.0.0.1/booking.php';
            $http.post(link, { fullname: $scope.data.fullname, tel: $scope.data.tel, email: $scope.data.email, date: $scope.data.date, msg: $scope.data.msg }).then(function(res) {
                var value = res.data;
                if (value.trim() == "Exist") {
                    alert('You already reserved.');
                } else if (value.trim() == "Sent") {
                    alert('Your Appointment is Reserved.');
                } else if (value.trim() == "Failed") {
                    alert('Please input correct information.');
                } else {
                    alert(value.trim());
                }
            });
        };

    }
])

.controller('viewAnswersCtrl', ['$scope', '$stateParams', '$http', '$rootScope', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http, $rootScope, $state) {
        var link = 'http://127.0.0.1/answers.php';
        $http.post(link, { email: $rootScope.name }).then(function(res) {
            $scope.ques = res.data;
        });
        $scope.clickElement = function(text, answer) {
            $rootScope.answerText = text;
            $rootScope.answerDate = answer;
            $state.go('answerInfo');
        }
    }
])

.controller('answerInfoCtrl', ['$scope', '$stateParams', '$http', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http, $rootScope) {
        // $rootScope.answerText, $rootScope.answerDate
        var link = 'http://127.0.0.1/answersinfo.php';
        $http.post(link, { email: $rootScope.name, question: $rootScope.answerText, date: $rootScope.answerDate }).then(function(res) {
            $scope.infos = res.data;
        });
    }
])