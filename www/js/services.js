/**
 * @project Q-TSI
 * @author Michelle Schwarz
 * @module qtsi
 * @version 0.1
 * Services of the application
 */
angular.module('qtsi.services', [])


/**
 * @name service: SettingsService
 * @description
 * Service to initialize the Settings DB and functions for all CRUD operations
 */
.factory('SettingsService', function ($q, Loki) {
    var _db;
    var _settings;

    /**
     * Initializes the Settings database
     */
    function initDB() {
        _db = new Loki('settingsDB', {
            autosave: true,
            autosaveInterval: 1000, // 1 second
        });
    };

    /**
     * Get all lesson records from the database
     * @returns {Object}: all settings data
     */
    function getAllSettings() {
        return $q(function (resolve, reject) {
            var options = {};

            _db.loadDatabase(options, function () {
                _settings = _db.getCollection('settings');

                if (!_settings) {
                    _settings = _db.addCollection('settings');
                }
                resolve(_settings.data);
            });
        });
    };

    /**
     * adds settings record database
     * @param {Object} setting: data of settings
     */
    function addSettings(setting) {
        _settings.insert(setting);
    };

    /**
     * updates settings record database
     * @param {Object} setting: data of settings
     */
    function updateSettings(setting) {
        _settings.update(setting);
    };


    return {
        initDB: initDB,
        getAllSettings: getAllSettings,
        addSettings: addSettings,
        updateSettings: updateSettings
    };
})


/**
 * @name service: LessonService
 * @description
 * Service to initialize the Settings DB and functions for all CRUD operations
 */
.factory('LessonService', function ($q, Loki) {
    var _db;
    var _lessons;
    var _lesson;

    /**
     * Initializes the Lessons database
     */
    function initDB() {
        _db = new Loki('lessonsDB', {
            autosave: true,
            autosaveInterval: 1000, // 1 second
        });
    };

    /**
     * Get all lesson records from the database
     * @returns {Object}: all lessons data
     */

    function getAllLessons() {

        return $q(function (resolve, reject) {
            var options = {};

            _db.loadDatabase(options, function () {
                _lessons = _db.getCollection('lessons');

                if (!_lessons) {
                    _lessons = _db.addCollection('lessons');
                }

                resolve(_lessons.data);
            });
        });
    };


    /**
     * Get one lesson by id from database
     * @param   {String}   id: Id of the lesson
     * @returns {Object}:  Data of one lesson with specific id
     */
    function getOneLesson(id) {
        var options = {};

        _db.loadDatabase(options, function () {
            _lessons = _db.getCollection('lessons');
            _lesson = _lessons.get(id);
        });
        return _lesson;
    }

    /**
     * adds records to lessons database
     * @param {Object} lesson: data of lesson
     */
    function addLesson(lesson) {
        _lessons.insert(lesson);
    };

    /**
     * updates lesson record in database
     * @param {Object} lesson: data of lesson
     */
    function updateLesson(lesson) {
        _lessons.update(lesson);
    };

    /**
     * deletes lesson record from database
     * @param {Object} lesson: data of lesson
     */
    function deleteLesson(lesson) {
        _lessons.remove(lesson);
    };

    return {
        initDB: initDB,
        getAllLessons: getAllLessons,
        getOneLesson: getOneLesson,
        addLesson: addLesson,
        updateLesson: updateLesson,
        deleteLesson: deleteLesson
    };
})

/**
 * @name service: ObservationService
 * @description
 * Service to initialize the Observations DB and add, read and delete functions
 */
.factory('ObservationService', function ($q, Loki) {
    var _db;
    var _observations;

    /**
     * Initializes the Observations database
     */
    function initDB() {
        _db = new Loki('observationDB', {
            autosave: true,
            autosaveInterval: 1000, // 1 second
        });
    };

    /**
     * Get all observation records from the database
     * @returns {Object}: all observation data
     */
    function getAllObservations() {
        return $q(function (resolve, reject) {
            var options = {};

            _db.loadDatabase(options, function () {
                _observations = _db.getCollection('observations');

                if (!_observations) {
                    _observations = _db.addCollection('observations');
                }
                resolve(_observations.data);
            });
        });
    };

    /**
     * Get one observation by id from database
     * @param   {String}   id: id of the observation connected to the specific lesson
     * @returns {Array}: all observation data
     */
    function getOneObservation(id) {
        var options = {};
    
        var index = String(id);
        
        _db.loadDatabase(options, function () {
            _observations = _db.getCollection('observations');
            _observation = _observations.find({id: index});
        });
        return _observation;
    }


    /**
     * adds records to observations database
     * @param {Object} observation:  data of observation
     */
    function addObservation(observation) {
        _observations.insert(observation);
    };

    /**
     * deletes observation record from database
     * @param {Object} observation: data of observation
     */
    function deleteObservation(observation) {
        _observations.remove(observation);
    };

    return {
        initDB: initDB,
        getAllObservations: getAllObservations,
        getOneObservation: getOneObservation,
        addObservation: addObservation,
        deleteObservation: deleteObservation
    };
})


/**
 * @name service: PositionsService
 * @description
 * Service with function to set the numeration of the locations in the class room
 */
.factory('PositionsService', function ($q) {

    var positions_1;
    var positions_2;
    var positions_3;
    var positions_4;

    function setNumeration(boardposition) {
        return $q(function (resolve, reject) {

            var pos = {};

            if (boardposition == 'top') {
                pos = {
                    "positions_1": ["1", "5", "9", "13"],
                    "positions_2": ["2", "6", "10", "14"],
                    "positions_3": ["3", "7", "11", "15"],
                    "positions_4": ["4", "8", "12", "16"]
                }
            }

            if (boardposition == 'left') {
                pos = {
                    "positions_1": ["1", "2", "3", "4"],
                    "positions_2": ["5", "6", "7", "8"],
                    "positions_3": ["9", "10", "11", "12"],
                    "positions_4": ["13", "14", "15", "16"]
                }
            }

            if (boardposition == 'right') {
                pos = {
                    "positions_1": ["13", "14", "15", "16"],
                    "positions_2": ["9", "10", "11", "12"],
                    "positions_3": ["5", "6", "7", "8"],
                    "positions_4": ["1", "2", "3", "4"]
                }
            }
            resolve(pos);
        });
    };

    return {
        setNumeration: setNumeration
    }
})


/**
 * @name service: FormatDataService
 * @description
 * Service to format Data of observation before storing it to the database
 */
.factory('FormatDataService', function ($q) {

    /**
     * Adds date and time to records, sets value of empty or undefined data to "N/A", sets additional data for specific fields
     * @param   {Object}   data: data of observation
     * @param   {String}   id: id of the observation connected to the specific lesson
     * @returns {Object}:  formated data of observation
     */


    function formatData(data, id) {
        return $q(function (resolve, reject) {

            //Set date and time of the record
            var datetime = new Date();
            var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
                datetime.getFullYear();
            var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2) + ":" + ("0" + datetime.getSeconds()).slice(-2);

            //Set additional values for specific fields
            switch (data.interactions) {
            case "Direct":
                data.responseOpportunityType = 'Direct',
                    data.public = 'true',
                    data.contentRelated = 'true',
                    data.single = 'true',
                    data.teacherAfforded = 'true',
                    data.interactions = 'Response Opportunity'
                break;
            case "Volunteer":
                data.responseOpportunityType = 'Volunteer'
                data.public = 'true',
                    data.contentRelated = 'true',
                    data.single = 'true',
                    data.teacherAfforded = 'true',
                    data.interactions = 'Response Opportunity'
                break;
            case "Call-Out-Single":
                data.responseOpportunityType = 'Call Out Single'
                data.public = 'true',
                    data.contentRelated = 'true',
                    data.single = 'true',
                    data.teacherAfforded = 'true',
                    data.interactions = 'Response Opportunity'
                break;
            case "Call-Out-Multiple":
                data.responseOpportunityType = 'Call Out Multiple',
                    data.public = 'true',
                    data.contentRelated = 'true',
                    data.single = 'false',
                    data.teacherAfforded = 'true',
                    data.interactions = 'Response Opportunity'
                break;
            case "Teacher-to-Single-Comment":
                data.public = 'true',
                    data.contentRelated = 'true',
                    data.single = 'true',
                    data.teacherAfforded = 'true',
                    data.interactions = 'Comment',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Student-Single-Comment":
                data.public = 'true',
                    data.contentRelated = 'true',
                    data.single = 'true',
                    data.teacherAfforded = 'false',
                    data.interactions = 'Comment',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Teacher-to-Multiple-Comment":
                data.public = 'true',
                    data.contentRelated = 'true',
                    data.single = 'false',
                    data.teacherAfforded = 'true',
                    data.interactions = 'Comment',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Student-Multiple-Comment":
                data.public = 'true',
                    data.contentRelated = 'true',
                    data.single = 'false',
                    data.teacherAfforded = 'false',
                    data.interactions = 'Comment',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Single-Discipline":
                data.public = 'true',
                    data.contentRelated = 'false',
                    data.single = 'true',
                    data.teacherAfforded = 'true',
                    data.interactions = 'Discipline',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Multiple-Discipline":
                data.public = 'true',
                    data.contentRelated = 'false',
                    data.single = 'false',
                    data.teacherAfforded = 'true',
                    data.interactions = 'Discipline',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Single-Appraisal":
                data.public = 'true',
                    data.contentRelated = 'false',
                    data.single = 'true',
                    data.teacherAfforded = 'true',
                    data.interactions = 'Appraisal',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Multiple-Appraisal":
                data.public = 'true',
                    data.contentRelated = 'false',
                    data.single = 'false',
                    data.teacherAfforded = 'true',
                    data.interactions = 'Appraisal',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Teacher-to-Single-Procedural":
                data.public = 'true',
                    data.contentRelated = 'false',
                    data.single = 'true',
                    data.teacherAfforded = 'true',
                    data.interactions = 'Procedural',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Student-Single-Procedural":
                data.public = 'true',
                    data.contentRelated = 'false',
                    data.single = 'true',
                    data.teacherAfforded = 'false',
                    data.interactions = 'Procedural',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Teacher-to-Multiple-Procedural":
                data.public = 'true',
                    data.contentRelated = 'false',
                    data.single = 'false',
                    data.teacherAfforded = 'true',
                    data.interactions = 'Procedural',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Student-Multiple-Procedural":
                data.public = 'true',
                    data.contentRelated = 'false',
                    data.single = 'false',
                    data.teacherAfforded = 'false',
                    data.interactions = 'Procedural',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Teacher-to-Single-Non-Public":
                data.public = 'false',
                    data.contentRelated = 'N/A',
                    data.single = 'true',
                    data.teacherAfforded = 'true',
                    data.interactions = 'N/A',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Student-to-Teacher-Non-Public":
                data.public = 'false',
                    data.contentRelated = 'N/A',
                    data.single = 'true',
                    data.teacherAfforded = 'false',
                    data.interactions = 'N/A',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Teacher-to-Multiple-Non-Public":
                data.public = 'false',
                    data.contentRelated = 'N/A',
                    data.single = 'false',
                    data.teacherAfforded = 'true',
                    data.interactions = 'N/A',
                    data.responseOpportunityType = 'N/A'
                break;
            case "Students-to-Teacher-Non-Public":
                data.public = 'false',
                    data.contentRelated = 'N/A',
                    data.single = 'false',
                    data.teacherAfforded = 'false',
                    data.interactions = 'N/A',
                    data.responseOpportunityType = 'N/A'
                break;
            }

            switch (data.technologiesInUseTeacher) {
            case "whiteboard":
                data.whiteboard = 'true',
                    data.projector = 'false',
                    data.bookTeacher = 'false',
                    data.smartboard = 'false',
                    data.noneTeacher = 'false'
                break;
            case "projector":
                data.whiteboard = 'false',
                    data.projector = 'true',
                    data.bookTeacher = 'false',
                    data.smartboard = 'false',
                    data.noneTeacher = 'false'
                break;
            case "bookTeacher":
                data.whiteboard = 'false',
                    data.projector = 'false',
                    data.bookTeacher = 'true',
                    data.smartboard = 'false',
                    data.noneTeacher = 'false'
                break;
            case "smartboard":
                data.whiteboard = 'false',
                    data.projector = 'false',
                    data.bookTeacher = 'false',
                    data.smartboard = 'true',
                    data.noneTeacher = 'false'
                break;
            case "noneTeacher":
                data.whiteboard = 'false',
                    data.projector = 'false',
                    data.bookTeacher = 'false',
                    data.smartboard = 'false',
                    data.noneTeacher = 'true'
                break;
            }

            switch (data.technologiesInUseStudents) {
            case "computer":
                data.computer = 'true',
                    data.bookStudent = 'false',
                    data.noneStudent = 'false'
                break;
            case "bookStudent":
                data.computer = 'false',
                    data.bookStudent = 'true',
                    data.noneStudent = 'false'
                break;
            case "bookAndComputer":
                data.computer = 'true',
                    data.bookStudent = 'true',
                    data.noneStudent = 'false'
                break;
            case "noneStudent":
                data.computer = 'false',
                    data.bookStudent = 'false',
                    data.noneStudent = 'true'
                break;
            }

            //create Object with all data
            var newData = {
                id: id,
                date: date,
                time: time,
                comment: data.comment,
                learningConfiguration: data.learningConfiguration,
                whiteboard: data.whiteboard,
                projector: data.projector,
                bookTeacher: data.bookTeacher,
                smartboard: data.smartboard,
                noneTeacher: data.noneTeacher,
                computer: data.computer,
                bookStudent: data.bookStudent,
                noneStudent: data.noneStudent,
                locationTeacher: data.locationTeacher,
                public: data.public,
                contentRelated: data.contentRelated,
                teacherAfforded: data.teacherAfforded,
                interactions: data.interactions,
                single: data.single,
                responseOpportunityType: data.responseOpportunityType,
            }
            
            //Set value of undefined or empty data to "N/A"
            for (var property in newData) {
                if (newData.hasOwnProperty(property)) {
                    if (newData[property] == undefined || newData[property] == '') {
                        newData[property] = 'N/A';
                    }
                }
            }

            //reset value of comment
            data.comment = undefined;
            resolve(newData);
        });
    }
    return {
        formatData: formatData
    }
})