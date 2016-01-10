describe('Lessons Service', function () {

  var lessonsService, Loki, lessons, rootScope;

  beforeEach(function () {
    //load the module
    module('qtsi.services');

    lessons = {
      get: function() { },
      insert: function() { },
      update: function() { },
      remove: function() { },
      data: "myDummyData"
    };

    Loki = function() {
      this.loadDatabase = function(_, f) { f(); };
      this.getCollection = function() { return lessons; };
      this.addCollection = function() { return lessons; };
    };

    module(function ($provide) {
      $provide.value('Loki', Loki);
    });

    //inject the factory for testing
    inject(function (_LessonService_, _$rootScope_) {
      lessonService = _LessonService_;
      rootScope = _$rootScope_;
    });
  });


  //check to see if it has the expected functions
  it('should have an initDB, getAllLessons, getOneLesson, addLesson, updateLesson and deleteLesson functions', function () {
    expect(angular.isFunction(lessonService.initDB)).toBe(true);
    expect(angular.isFunction(lessonService.getAllLessons)).toBe(true);
    expect(angular.isFunction(lessonService.getOneLesson)).toBe(true);
    expect(angular.isFunction(lessonService.addLesson)).toBe(true);
    expect(angular.isFunction(lessonService.updateLesson)).toBe(true);
    expect(angular.isFunction(lessonService.deleteLesson)).toBe(true);
  });


  describe('getAllLessons', function() {

    it('returns a promise', function() {
      lessonService.initDB();
      expect(lessonService.getAllLessons().then).toBeDefined()
    });

    it('resolves to lessons.data', function(done) {
      lessonService.initDB();
      lessonService.getAllLessons().then(function(results) {
        expect(results).toBe(lessons.data);
        done();
      });
      rootScope.$apply();
    })
  });
});
