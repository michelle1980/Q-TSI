describe('Format Data Service', function () {


  beforeEach(function () {
    //load the module
    module('qtsi.services');

    formatData = {
      formatData: function () { }
    }


    //inject the factory for testing
    inject(function (_FormatDataService_) {
      formatDataService = _FormatDataService_;
    });
  });

  //check to see if it has the expected functions
  it('should implement a formatData function', function () {
    expect(angular.isFunction(formatDataService.formatData)).toBe(true);
  });

  describe('formatData', function () {

    it("is defined", function () {
      expect(formatData).not.toBeUndefined();
    });

    var na = 'N/A';
    var isTrue = 'true';


    /**********************************************TESTING INTEARACTIONS**********************************************/

    it("should return expected result if interaction is Direct", function () {

      var data = {
        interactions: 'Direct'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).toEqual(isTrue);
      expect(result.teacherAfforded).toEqual(isTrue);
      expect(result.interactions).toEqual('Response Opportunity');
      expect(result.single).toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual('Direct');
    });

    it("should return expected result if interaction is Volunteer", function () {

      var data = {
        interactions: 'Volunteer'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).toEqual(isTrue);
      expect(result.teacherAfforded).toEqual(isTrue);
      expect(result.interactions).toEqual('Response Opportunity');
      expect(result.single).toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual('Volunteer');
    });

    it("should return expected result if interaction is Call Out Single", function () {

      var data = {
        interactions: 'Call Out Single'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).toEqual(isTrue);
      expect(result.teacherAfforded).toEqual(isTrue);
      expect(result.interactions).toEqual('Response Opportunity');
      expect(result.single).toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual('Call Out Single');
    });

    it("should return expected result if interaction is Call Out Multiple", function () {

      var data = {
        interactions: 'Call Out Multiple'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).toEqual(isTrue);
      expect(result.teacherAfforded).toEqual(isTrue);
      expect(result.interactions).toEqual('Response Opportunity');
      expect(result.single).not.toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual('Call Out Multiple');
    });


    it("should return expected result if interaction is Teacher to Single - Comment", function () {

      var data = {
        interactions: 'Teacher to Single - Comment'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).toEqual(isTrue);
      expect(result.teacherAfforded).toEqual(isTrue);
      expect(result.interactions).toEqual('Comment');
      expect(result.single).toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if interaction is Student Single - Comment", function () {

      var data = {
        interactions: 'Student Single - Comment'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).toEqual(isTrue);
      expect(result.teacherAfforded).not.toEqual(isTrue);
      expect(result.interactions).toEqual('Comment');
      expect(result.single).toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if interaction is Student Single - Comment", function () {

      var data = {
        interactions: 'Teacher to Multiple - Comment'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).toEqual(isTrue);
      expect(result.teacherAfforded).toEqual(isTrue);
      expect(result.interactions).toEqual('Comment');
      expect(result.single).not.toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if interaction is Student Multiple - Comment", function () {

      var data = {
        interactions: 'Student Multiple - Comment'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).toEqual(isTrue);
      expect(result.teacherAfforded).not.toEqual(isTrue);
      expect(result.interactions).toEqual('Comment');
      expect(result.single).not.toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if interaction is Single - Discipline", function () {

      var data = {
        interactions: 'Single - Discipline'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).not.toEqual(isTrue);
      expect(result.teacherAfforded).toEqual(isTrue);
      expect(result.interactions).toEqual('Discipline');
      expect(result.single).toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if interaction is Multiple - Discipline", function () {

      var data = {
        interactions: 'Multiple - Discipline'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).not.toEqual(isTrue);
      expect(result.teacherAfforded).toEqual(isTrue);
      expect(result.interactions).toEqual('Discipline');
      expect(result.single).not.toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if interaction is Single - Appraisal", function () {

      var data = {
        interactions: 'Single - Appraisal'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).not.toEqual(isTrue);
      expect(result.teacherAfforded).toEqual(isTrue);
      expect(result.interactions).toEqual('Appraisal');
      expect(result.single).toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });


    it("should return expected result if interaction is Multiple - Appraisal", function () {

      var data = {
        interactions: 'Multiple - Appraisal'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).not.toEqual(isTrue);
      expect(result.teacherAfforded).toEqual(isTrue);
      expect(result.interactions).toEqual('Appraisal');
      expect(result.single).not.toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if interaction is Teacher to Single - Procedural", function () {

      var data = {
        interactions: 'Teacher to Single - Procedural'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).not.toEqual(isTrue);
      expect(result.teacherAfforded).toEqual(isTrue);
      expect(result.interactions).toEqual('Procedural');
      expect(result.single).toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if interaction is Teacher to Student Single - Procedural", function () {

      var data = {
        interactions: 'Student Single - Procedural'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).not.toEqual(isTrue);
      expect(result.teacherAfforded).not.toEqual(isTrue);
      expect(result.interactions).toEqual('Procedural');
      expect(result.single).toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if interaction is Teacher to Multiple - Procedural", function () {

      var data = {
        interactions: 'Teacher to Multiple - Procedural'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).not.toEqual(isTrue);
      expect(result.teacherAfforded).toEqual(isTrue);
      expect(result.interactions).toEqual('Procedural');
      expect(result.single).not.toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if interaction is Student Multiple - Procedural", function () {

      var data = {
        interactions: 'Student Multiple - Procedural'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(isTrue);
      expect(result.contentRelated).not.toEqual(isTrue);
      expect(result.teacherAfforded).not.toEqual(isTrue);
      expect(result.interactions).toEqual('Procedural');
      expect(result.single).not.toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if interaction is Teacher to Single - Non-Public", function () {

      var data = {
        interactions: 'Teacher to Single - Non-Public'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).not.toEqual(isTrue);
      expect(result.contentRelated).toEqual(na);
      expect(result.teacherAfforded).toEqual(isTrue);
      expect(result.interactions).toEqual(na);
      expect(result.single).toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if interaction is Student to Teacher - Non-Public", function () {

      var data = {
        interactions: 'Student to Teacher - Non-Public'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).not.toEqual(isTrue);
      expect(result.contentRelated).toEqual(na);
      expect(result.teacherAfforded).not.toEqual(isTrue);
      expect(result.interactions).toEqual(na);
      expect(result.single).toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if interaction is Teacher to Multiple - Non-Public", function () {

      var data = {
        interactions: 'Teacher to Multiple - Non-Public'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).not.toEqual(isTrue);
      expect(result.contentRelated).toEqual(na);
      expect(result.teacherAfforded).toEqual(isTrue);
      expect(result.interactions).toEqual(na);
      expect(result.single).not.toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if interaction is Students to Teacher - Non-Public", function () {

      var data = {
        interactions: 'Students to Teacher - Non-Public'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).not.toEqual(isTrue);
      expect(result.contentRelated).toEqual(na);
      expect(result.teacherAfforded).not.toEqual(isTrue);
      expect(result.interactions).toEqual(na);
      expect(result.single).not.toEqual(isTrue);
      expect(result.responseOpportunityType).toEqual(na);
    });

    /**************************************************TESTING EVENTS**************************************************/

    /*****************************************TECHNOLOGIES IN USE BY TEACHER******************************************/
    it("should return expected result if technologies in use by teacher is whiteboard", function () {

      var data = {
        technologiesInUseTeacher: 'whiteboard'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(isTrue);
      expect(result.projector).not.toEqual(isTrue);
      expect(result.bookTeacher).not.toEqual(isTrue);
      expect(result.smartboard).not.toEqual(isTrue);
      expect(result.noneTeacher).not.toEqual(isTrue);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(na);
      expect(result.contentRelated).toEqual(na);
      expect(result.teacherAfforded).toEqual(na);
      expect(result.interactions).toEqual(na);
      expect(result.single).toEqual(na);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if technologies in use by teacher is projector", function () {

      var data = {
        technologiesInUseTeacher: 'projector'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).not.toEqual(isTrue);
      expect(result.projector).toEqual(isTrue);
      expect(result.bookTeacher).not.toEqual(isTrue);
      expect(result.smartboard).not.toEqual(isTrue);
      expect(result.noneTeacher).not.toEqual(isTrue);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(na);
      expect(result.contentRelated).toEqual(na);
      expect(result.teacherAfforded).toEqual(na);
      expect(result.interactions).toEqual(na);
      expect(result.single).toEqual(na);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if technologies in use by teacher is bookTeacher", function () {

      var data = {
        technologiesInUseTeacher: 'bookTeacher'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).not.toEqual(isTrue);
      expect(result.projector).not.toEqual(isTrue);
      expect(result.bookTeacher).toEqual(isTrue);
      expect(result.smartboard).not.toEqual(isTrue);
      expect(result.noneTeacher).not.toEqual(isTrue);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(na);
      expect(result.contentRelated).toEqual(na);
      expect(result.teacherAfforded).toEqual(na);
      expect(result.interactions).toEqual(na);
      expect(result.single).toEqual(na);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if technologies in use by teacher is smartboard", function () {

      var data = {
        technologiesInUseTeacher: 'smartboard'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).not.toEqual(isTrue);
      expect(result.projector).not.toEqual(isTrue);
      expect(result.bookTeacher).not.toEqual(isTrue);
      expect(result.smartboard).toEqual(isTrue);
      expect(result.noneTeacher).not.toEqual(isTrue);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(na);
      expect(result.contentRelated).toEqual(na);
      expect(result.teacherAfforded).toEqual(na);
      expect(result.interactions).toEqual(na);
      expect(result.single).toEqual(na);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if technologies in use by teacher is noneTeacher", function () {

      var data = {
        technologiesInUseTeacher: 'noneTeacher'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).not.toEqual(isTrue);
      expect(result.projector).not.toEqual(isTrue);
      expect(result.bookTeacher).not.toEqual(isTrue);
      expect(result.smartboard).not.toEqual(isTrue);
      expect(result.noneTeacher).toEqual(isTrue);
      expect(result.computer).toEqual(na);
      expect(result.bookStudent).toEqual(na);
      expect(result.noneStudent).toEqual(na);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(na);
      expect(result.contentRelated).toEqual(na);
      expect(result.teacherAfforded).toEqual(na);
      expect(result.interactions).toEqual(na);
      expect(result.single).toEqual(na);
      expect(result.responseOpportunityType).toEqual(na);
    });

    /*****************************************TECHNOLOGIES IN USE BY STUDENTS******************************************/
    it("should return expected result if technologies in use by students is computer", function () {

      var data = {
        technologiesInUseStudents: 'computer'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);
      var na = 'N/A';
      var isTrue = 'true';

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(isTrue);
      expect(result.bookStudent).not.toEqual(isTrue);
      expect(result.noneStudent).not.toEqual(isTrue);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(na);
      expect(result.contentRelated).toEqual(na);
      expect(result.teacherAfforded).toEqual(na);
      expect(result.interactions).toEqual(na);
      expect(result.single).toEqual(na);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if technologies in use by students is book", function () {

      var data = {
        technologiesInUseStudents: 'book'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);
      var na = 'N/A';
      var isTrue = 'true';

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).not.toEqual(isTrue);
      expect(result.bookStudent).toEqual(isTrue);
      expect(result.noneStudent).not.toEqual(isTrue);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(na);
      expect(result.contentRelated).toEqual(na);
      expect(result.teacherAfforded).toEqual(na);
      expect(result.interactions).toEqual(na);
      expect(result.single).toEqual(na);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if technologies in use by students is bookAndComputer", function () {

      var data = {
        technologiesInUseStudents: 'bookAndComputer'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);
      var na = 'N/A';
      var isTrue = 'true';

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).toEqual(isTrue);
      expect(result.bookStudent).toEqual(isTrue);
      expect(result.noneStudent).not.toEqual(isTrue);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(na);
      expect(result.contentRelated).toEqual(na);
      expect(result.teacherAfforded).toEqual(na);
      expect(result.interactions).toEqual(na);
      expect(result.single).toEqual(na);
      expect(result.responseOpportunityType).toEqual(na);
    });

    it("should return expected result if technologies in use by students is noneStudent", function () {

      var data = {
        technologiesInUseStudents: 'noneStudent'
      }

      var datetime = new Date();
      var date = ("0" + datetime.getDate()).slice(-2) + "." + ("0" + (datetime.getMonth() + 1)).slice(-2) + "." +
        datetime.getFullYear();
      var time = ("0" + datetime.getHours()).slice(-2) + ":" + ("0" + datetime.getMinutes()).slice(-2);
      var na = 'N/A';
      var isTrue = 'true';

      var result = formatDataService.formatData(data);

      expect(result.idO).toEqual(na);
      expect(result.date).toEqual(date);
      expect(result.time).toEqual(time);
      expect(result.comment).toEqual(na);
      expect(result.learningConfiguration).toEqual(na);
      expect(result.whiteboard).toEqual(na);
      expect(result.projector).toEqual(na);
      expect(result.bookTeacher).toEqual(na);
      expect(result.smartboard).toEqual(na);
      expect(result.noneTeacher).toEqual(na);
      expect(result.computer).not.toEqual(isTrue);
      expect(result.bookStudent).not.toEqual(isTrue);
      expect(result.noneStudent).toEqual(isTrue);
      expect(result.locationTeacher).toEqual(na);
      expect(result.public).toEqual(na);
      expect(result.contentRelated).toEqual(na);
      expect(result.teacherAfforded).toEqual(na);
      expect(result.interactions).toEqual(na);
      expect(result.single).toEqual(na);
      expect(result.responseOpportunityType).toEqual(na);
    });
  })
});
