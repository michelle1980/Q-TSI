/**
 * @project Q-TSI
 * @author Michelle Schwarz
 * @module qtsi
 * @version 0.1
 * Controllers of the application
 */
angular.module('qtsi.controllers', [])


/**
 * @name controller: TranslationCtrl
 * @description
 * Controller to handle the translation of the application in every view
 */
.controller('TranslationCtrl', function ($scope, $translate) {

    /**
     * Sets the language of the whole application
     * @param {Object} key: The language chosen in Settings View
     */
    $scope.setLanguage = function (key) {
        $translate.use(key.language);
    };
})

/**
 * @name controller: SettingsCtrl
 * @description
 * Controller to handle the data in the Settings View
 */
.controller('SettingsCtrl', function ($scope, SettingsService, $ionicPlatform, $cordovaToast, $translate, $filter) {

    $scope.data = [];
    var edit = false;
    var $translate = $filter('translate');

    $ionicPlatform.ready(function () {

        // Initialize the database.
        SettingsService.initDB();

        // Get all lesson records from the database.
        SettingsService.getAllSettings()
            .then(function (settings) {
                $scope.settings = settings;
                if ($scope.settings[0]) {
                    if ($scope.settings[0].observerName) {
                        $scope.data.observerName = $scope.settings[0].observerName;
                    }
                    if ($scope.settings[0].language) {
                        $scope.data.language = $scope.settings[0].language;
                    }
                }
            });
    });


    /**
     * Saves or updates the settings (observerName and language)
     * @param {Object} data: observerName and language
     */
    $scope.saveSettings = function (data) {

        //If Data in scope already exists update, otherwise add to Settings
        if ($scope.settings.observerName || $scope.settings.language) {
            $scope.settings.observerName = data.observerName;
            $scope.settings.language = data.language;
            SettingsService.updateSettings($scope.settings);
            $cordovaToast.showShortBottom($translate('view.settings.Toast.Update'))
        } else {
            $scope.settings = {
                observerName: data.observerName,
                language: data.language
            }
            SettingsService.addSettings($scope.settings);
            $cordovaToast.showShortBottom($translate('view.settings.Toast.Add'))
        }
    };

})


/**
 * @name controller: AgendaCtrl
 * @description
 * Controller to handle the data in the Agenda View
 */
.controller('AgendaCtrl', function ($scope, $ionicModal, $ionicPlatform, LessonService, $cordovaFile, $cordovaEmailComposer, $cordovaDevice, ObservationService, $translate, $filter, $ionicPopup, $cordovaNetwork, SettingsService) {

    $scope.lesson = {};
    
    //To keep fields pre-populated if user adds more than one lesson
    $scope.observerName = {};

    var date = new Date();
    $scope.date = date;

    //$scope.date = {};
    $scope.school = {};
    $scope.location = {};
    $scope.observation = {};

    var $translate = $filter('translate');
    var observationData;

    $ionicPlatform.ready(function () {
        // Initialize the databases
        LessonService.initDB();
        ObservationService.initDB();
        SettingsService.initDB();

        // Get all lesson records from the database.
        LessonService.getAllLessons()
            .then(function (lessons) {
                $scope.lessons = lessons;
            });

        // Get all observation records from the database.
        ObservationService.getAllObservations()
            .then(function (observations) {
                $scope.observation = observations;
            });

        // Get all sttings records from the database.
        SettingsService.getAllSettings()
            .then(function (settings) {
                $scope.settings = settings;
                if (settings[0]) {
                    $scope.observerName = settings[0].observerName;
                }
            });
    });


    // Initialize the modal view.
    $ionicModal.fromTemplateUrl('templates/add-or-edit-lesson.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });


    /**
     * Shows the Modal to add a lesson
     */
    $scope.showAddLessonModal = function () {

        $scope.lesson.date = $scope.date;

        //check if values exist, if so pre-populate fields in modal
        for (var prop in $scope.observerName) {
            if ($scope.observerName.hasOwnProperty(prop)) {
                $scope.lesson.observerName = $scope.observerName;
            }
        }

        for (var prop in $scope.school) {
            if ($scope.school.hasOwnProperty(prop)) {
                $scope.lesson.school = $scope.school;
            }
        }

        for (var prop in $scope.location) {
            if ($scope.location.hasOwnProperty(prop)) {
                $scope.lesson.location = $scope.location;
            }
        }

        $scope.action = $translate('view.addModal.Title');
        $scope.isAdd = true;
        $scope.modal.show();
    };

    /**
     * Shows the Modal to edit a lesson
     * @param {Object} lesson: all data of the lesson to edit
     */
    $scope.showEditLessonModal = function (lesson) {
        $scope.lesson = lesson;
        $scope.action = $translate('view.editModal.Title');
        $scope.isAdd = false;
        $scope.modal.show();
    };


    /**
     * Save or update a Lesson
     */
    $scope.saveLesson = function () {
        if ($scope.isAdd) {
            LessonService.addLesson($scope.lesson);
            //set values to pre-populate fields
            $scope.date = $scope.lesson.date;
            $scope.school = $scope.lesson.school;
            $scope.location = $scope.lesson.location;
            $scope.lesson = {};
        } else {
            LessonService.updateLesson($scope.lesson);
        }
        $scope.modal.hide();
    };

    /**
     * Delete a lesson
     * @param {Object} lesson: all data of lesson to be deleted
     */
    $scope.deleteLesson = function (lesson, loki) {
        //User has to confirm that he wants to delete record
        var confirmPopup = $ionicPopup.confirm({
            title: $translate('popUp.Delete.Title'),
            template: $translate('popUp.Delete.Template'),
            cancelText: $translate('popUp.Delete.Cancel'),

        });
        confirmPopup.then(function (res) {
            if (res) {
                LessonService.deleteLesson(lesson);
                var observation = ObservationService.getOneObservation(loki);
                ObservationService.deleteObservation(observation)
            } else {
                //close PopUp without action
            }
        });

    };

    $scope.clearForm = function () {
        $scope.lesson.date = null;
        $scope.lesson.startTime = null;
        $scope.lesson.endTime = null;
        $scope.lesson.school = null;
        $scope.lesson.location = null;
        $scope.lesson.className = null;
        $scope.lesson.domain = null;
        $scope.lesson.grade = null;
        $scope.lesson.teacherName = null;
        $scope.lesson.studentCount = null;

    }

    /**
     * Close the Modal
     */
    $scope.closeModal = function () {
        $scope.modal.hide();
    }


    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });


    /**
     * Sets the url for the log file on the device
     * @param   {String}   logFileName: Name of the Log File
     * @returns {String} Path to the Log File
     */
    $scope.urlForLogFile = function (logFileName) {
        var trueOrigin = cordova.file.dataDirectory + logFileName;
        return trueOrigin;
    }


    /**
     * Pushes observation records in the observationData Array
     * @param   {String}   data: all data of the observation
     */
    $scope.addDataObservation = function (data) {
        observationData.push(data)
    }


    /**
     * Sends an email with two files as attachments, observationMeta.csv and observationData.csv
     * 1. check if device is online
     * 2. prepare data to write in file
     * 3. write data to files
     * 4. create email with attachments
     * 5. send email
     * @param {Array} lesson:  all data of the lesson
     */
    $scope.sendEmail = function (lesson) {
       
        //if device is offline, show popup to inform user
        if ($cordovaNetwork.isOffline() == true) {
            // An alert dialog
            var alertPopup = $ionicPopup.alert({
                title: $translate('popUp.Connection.Title'),
                template: $translate('popUp.Connection.Template'),
            });
        } else {

            var observation = {};
            observationData = [];
            var observations = ObservationService.getOneObservation(lesson.$loki);

            //Write data from local storage into .csv file
            document.addEventListener('deviceready', function () {

                //define filenames
                $scope.filenameMeta = "observationMeta-" + lesson.meta.created + ".csv";
                $scope.filenameObservation = "observationData-" + lesson.meta.created + ".csv";

                //Prepare data to be written in file
                var observationMeta = {};
                var datetime = new Date(lesson.date);
                var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
                    datetime.getFullYear();
                var startTime = new Date(lesson.startTime);
                var start = ("0" + startTime.getHours()).slice(-2) + ":" + ("0" + startTime.getMinutes()).slice(-2);
                var endTime = new Date(lesson.endTime);
                var end = ("0" + endTime.getHours()).slice(-2) + ":" + ("0" + endTime.getMinutes()).slice(-2);

                var dataMeta = lesson.observerName + ';' + date + ';' + start + ';' + end + ';' + lesson.startObservation + ';' + lesson.endObservation + ';' + lesson.school + ';' + lesson.location + ';' + lesson.className + ';' + lesson.domain + ';' + lesson.grade + ';' + lesson.teacherName + ';' + lesson.studentCount + ';' + lesson.boardposition + ';' + lesson.teacherDeskLocation;


                for (var k in observations) {
                    if (observations.hasOwnProperty(k)) {
                        observation[k] = observations[k];

                        var dataObservation = observation[k].date + ';' + observation[k].time + ';' + observation[k].comment + ';' + observation[k].learningConfiguration + ';' + observation[k].whiteboard + ';' + observation[k].projector + ';' + observation[k].bookTeacher + ';' + observation[k].smartboard + ';' + observation[k].noneTeacher + ';' + observation[k].computer + ';' + observation[k].bookStudent + ';' + observation[k].noneStudent + ';' + observation[k].locationTeacher + ';' + observation[k].public + ';' + observation[k].contentRelated + ';' + observation[k].teacherAfforded + ';' + observation[k].interactions + ';' + observation[k].single + ';' + observation[k].responseOpportunityType + '\n';
                        //add each record to observationData Array
                        $scope.addDataObservation(dataObservation);
                    };

                }

                //Create Headers for each column in .csv files
                var contentMeta = 'Name;Date;Start Time;End Time; Observation Start Time; Observation End Time;School;Location;Class Name / Number;Domain;Grade;Teacher Name;Student Count; Board Position; Teacher Desk Location \n' + dataMeta;

                var contentObservation = 'Date;Time;Comment;Learning Configuration;Whiteboard;Projector;Book-Teacher;Smart Board;None-Teacher;Computer;Book-Student;None-Student;LocationTeacher;Public;Content-Related;Teacher-afforded;Interaction;Single;ResponseOpportunityType \n' + observationData.reverse().join("");


                $scope.inputsMeta = {
                    writeText: contentMeta,
                    writeFile: $scope.filenameMeta
                };

                $scope.inputsObservation = {
                    writeText: contentObservation,
                    writeFile: $scope.filenameObservation
                };

                //Write data to file
                $cordovaFile.writeFile(cordova.file.dataDirectory, $scope.inputsMeta.writeFile, $scope.inputsMeta.writeText, true).then(function (success) {
                    $scope.writeFileResult = 'success ' + JSON.stringify(success);
                }, function (error) {
                    $scope.writeFileResult = 'error ' + JSON.stringify(error);
                });

                $cordovaFile.writeFile(cordova.file.dataDirectory, $scope.inputsObservation.writeFile, $scope.inputsObservation.writeText, true).then(function (success) {
                    $scope.writeFileResult = 'success ' + JSON.stringify(success);
                }, function (error) {
                    $scope.writeFileResult = 'error ' + JSON.stringify(error);
                });

            });

            //send E-Mail
            var mailLogFile = [];


            //if Android file has to be copied temporary to another folder which can be accessed by the email plugin.
            if ($cordovaDevice.getPlatform() == 'Android') {

                var logFileUrlMeta = $scope.urlForLogFile($scope.filenameMeta);
                var logFileUrlObservation = $scope.urlForLogFile($scope.filenameObservation);

                var nameMeta = logFileUrlMeta.substr(logFileUrlMeta.lastIndexOf('/') + 1);
                var nameObservation = logFileUrlObservation.substr(logFileUrlObservation.lastIndexOf('/') + 1);

                var namePathMeta = logFileUrlMeta.substr(0, logFileUrlMeta.lastIndexOf('/') + 1);
                var namePathObservation = logFileUrlObservation.substr(0, logFileUrlObservation.lastIndexOf('/') + 1);

                $cordovaFile.copyFile(namePathMeta, nameMeta, cordova.file.externalRootDirectory, nameMeta)
                    .then(function (info) {
                    mailLogFile.push('' + cordova.file.externalRootDirectory + nameMeta);   
                    $scope.openMailComposer(mailLogFile);
                }, function (e) {
                   
                });
             
                $cordovaFile.copyFile(namePathObservation, nameObservation, cordova.file.externalRootDirectory, nameObservation)
                    .then(function (info) {
                    mailLogFile.push('' + cordova.file.externalRootDirectory + nameObservation);
                    $scope.openMailComposer(mailLogFile);
                }, function (e) {});

            } else {
                mailLogFile.push('' + $scope.urlForLogFile($scope.filenameMeta));
                mailLogFile.push('' + $scope.urlForLogFile($scope.filenameObservation));

                $scope.openMailComposer(mailLogFile);
                $cordovaFile.removeFile(cordova.file.externalRootDirectory, nameMeta);
                $cordovaFile.removeFile(cordova.file.externalRootDirectory, nameObservation);
            }
        };


        /**
         * Creates and sends the email. Deletes file from device when done
         * @param {Object} attachments:  Paths to .csv File on device
         */
        $scope.openMailComposer = function (attachments) {
            //define content and attachments of email
            var bodyText = '<html><h2>Please find attached LogFile</h2></html>';
            var email = {
                attachments: attachments,
                subject: 'Log-File',
                body: bodyText,
                isHtml: true
            };

            $cordovaEmailComposer.open(email).then(null, function () {
                for (var i = 0; i < attachments.length; i++) {
                    var name = attachments[i].substr(attachments[i].lastIndexOf('/') + 1);
                }
            });
        }
    }
})


/**
 * @name controller: BoardPositionCtrl
 * @description
 * Controller to handle the data in the BoardPosition View
 */
.controller('BoardPositionCtrl', function ($scope, $stateParams, LessonService, $ionicPlatform, PositionsService) {


    $scope.boardposition;
    $scope.teacherDeskLocation;
    $scope.id = $stateParams.id;

    $ionicPlatform.ready(function () {
        // Initialize the database.
        LessonService.initDB();
    });

    /**
     * Creates the numeration of the fields
     * @param {String} position: position of the board, opposite, left or right
     */
    $scope.setBoardPosition = function (boardposition) {
        $scope.boardposition = boardposition;

        PositionsService.setNumeration(boardposition).then(function (pos) {
            $scope.positions_1 = pos.positions_1;
            $scope.positions_2 = pos.positions_2;
            $scope.positions_3 = pos.positions_3;
            $scope.positions_4 = pos.positions_4;
        })
    }

    /**
     * Sets the teacher's desk location
     * @param {String} location: teacher's desk location (1-16)
     */
    $scope.setTeacherDeskLocation = function (location) {
        $scope.teacherDeskLocation = location;
    }

    /**
     * Saves the additional data to the lesson's record
     */
    $scope.save = function () {
        var datetime = new Date();
        var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

        $scope.lesson = LessonService.getOneLesson($scope.id);
        $scope.lesson['boardposition'] = $scope.boardposition;
        $scope.lesson['teacherDeskLocation'] = $scope.teacherDeskLocation;
        $scope.lesson['startObservation'] = time;
        LessonService.updateLesson($scope.lesson);
    };
})


/**
 * @name controller: ObservationCtrl
 * @description
 * Controller to handle the data in the Observation View
 */
.controller('ObservationCtrl', function ($scope, $ionicPlatform, ObservationService, $stateParams, LessonService, $ionicModal, $state, $ionicPopup, $translate, $filter, FormatDataService, $timeout, PositionsService) {


    $scope.data = [];
    $scope.id = $stateParams.id;
    $scope.observation = {};
    $scope.boardposition = $stateParams.boardposition;
    $scope.teacherDeskLocation = $stateParams.teacherDeskLocation;
    $scope.lastInteraction;
    $scope.color;

    var $translate = $filter('translate');
    var _timeout;

    //Creates the numeration of the fields related to the Board Position
    PositionsService.setNumeration($stateParams.boardposition).then(function (pos) {
        $scope.positions_1 = pos.positions_1;
        $scope.positions_2 = pos.positions_2;
        $scope.positions_3 = pos.positions_3;
        $scope.positions_4 = pos.positions_4;

    }).then(function () {
        $timeout(function () {
            $scope.teacherDeskLocation = $stateParams.teacherDeskLocation;
            document.getElementById($scope.teacherDeskLocation).style.color = "#EF373A";
            document.getElementById($scope.teacherDeskLocation).style.fontWeight = "700";
        }, 6000);
    });



    $ionicPlatform.ready(function () {
        // Initialize the database.
        ObservationService.initDB();
        LessonService.initDB();
        // Get all lesson records from the database.
        ObservationService.getAllObservations()
            .then(function (observations) {
                $scope.observations = observations;
            });
    });

    //Creating the Modal to add a comment
    $ionicModal.fromTemplateUrl('templates/add-comment.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    /**
     * Opens the modal to add a comment
     */

    $scope.openModal = function () {
        $scope.modal.show();
    };

    /**
     * Closes the modal
     */
    $scope.closeModal = function () {
        $scope.modal.hide();
    };

    //Cleanup the modal
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });

    /**
     * Calls function addData() to add data of comment
     * @param {Array} data: data of the comment
     */
    $scope.saveComment = function (data) {
        $scope.addDataMeta(data);
        $scope.modal.hide();
    };

    /**
     * Calls formatData() function of FormatDataService and addObservation() function of ObservationService to store data of Observation
     * @param {[[Type]]} data [[Description]]
     */
    $scope.addDataMeta = function (data) {
        FormatDataService.formatData(data, $stateParams.id).then(function (formatedData) {
            $scope.observation = formatedData;
            ObservationService.addObservation($scope.observation);
        })
    }


    /**
     * Calls formatData() function of FormatDataService and addObservation() function of ObservationService to store data of Observation
     * @param {[[Type]]} data [[Description]]
     */
    $scope.addDataInteraction = function (data) {

        if ($scope.lastInteraction === undefined || $scope.lastInteraction === null) {

        } else {
            if ($scope.color == 'green') {
                document.getElementById($scope.lastInteraction).style.color = "#08AE9E";
                document.getElementById($scope.lastInteraction).style.backgroundColor = "white";
            } else if ($scope.color == 'red') {
                document.getElementById($scope.lastInteraction).style.color = "#EF373A";
                document.getElementById($scope.lastInteraction).style.backgroundColor = "white";
            }


        }
        var classList = document.getElementById(data.interactions).className.split(/\s+/);
        for (var i = 0; i < classList.length; i++) {
            if (classList[i] === 'green') {
                $scope.color = 'green';
            } else if (classList[i] === 'red') {
                $scope.color = 'red';
            }
        }

        if ($scope.color == 'green') {
            document.getElementById(data.interactions).style.color = "white";
            document.getElementById(data.interactions).style.backgroundColor = "#08AE9E";
        } else if ($scope.color == 'red') {
            document.getElementById(data.interactions).style.color = "white";
            document.getElementById(data.interactions).style.backgroundColor = "#EF373A";
        }


        $scope.lastInteraction = data.interactions;


        FormatDataService.formatData(data, $stateParams.id).then(function (formatedData) {
            $scope.observation = formatedData;
            ObservationService.addObservation($scope.observation);
        })

    }

    /**
     * Saves the data of the observation and redirects to the Agenda-Tab
     */
    $scope.saveObservation = function () {

        var datetime = new Date();
        var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);
        var lesson = LessonService.getOneLesson($scope.id);

        lesson['endObservation'] = time;

        LessonService.updateLesson(lesson);

        var confirmPopup = $ionicPopup.confirm({
            title: $translate('popUp.Save.Title'),
            template: $translate('popUp.Save.Template'),
            cancelText: $translate('popUp.Save.Cancel'),

        });

        //Shows popup to user if he really wants to leave the observation
        confirmPopup.then(function (res) {
            if (res) {
                //$state.go('tab.agenda');   
                $state.go('tab.agenda', {}, {reload: true});
            } else {
                //close PopUp without action
            }
        });
    };
})