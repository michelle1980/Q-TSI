describe('Positions Service', function () {


  beforeEach(function () {
    //load the module
    module('qtsi.services');

    setNumeration = {
      setNumeration: function () { }
    }


    //inject the factory for testing
    inject(function (_PositionsService_) {
      positionsService = _PositionsService_;
    });
  });

  //check to see if it has the expected functions
  it('should implement a setNumeration function', function () {
    expect(angular.isFunction(positionsService.setNumeration)).toBe(true);
  });

  describe('setNumeration', function () {

    it("is defined", function () {
      expect(setNumeration).not.toBeUndefined();
    });

    var rowOne = ['1', '5', '9', '13'];
    var rowTwo = ['2', '6', '10', '14'];
    var rowThree = ['3', '7', '11', '15'];
    var rowFour = ['4', '8', '12', '16'];
    var rowFive = ['1', '2', '3', '4'];
    var rowSix = ['5', '6', '7', '8'];
    var rowSeven = ['9', '10', '11', '12'];
    var rowEight = ['13', '14', '15', '16'];

    it("should return expected result if boardposition is top", function () {

      var boardposition = 'top';
      var result = positionsService.setNumeration(boardposition);

      expect(result.positions_1).toEqual(rowOne);
      expect(result.positions_2).toEqual(rowTwo);
      expect(result.positions_3).toEqual(rowThree);
      expect(result.positions_4).toEqual(rowFour);
    });

    it("should return expected result if boardposition is left", function () {

      var boardposition = 'left';
      var result = positionsService.setNumeration(boardposition);

      expect(result.positions_1).toEqual(rowFive);
      expect(result.positions_2).toEqual(rowSix);
      expect(result.positions_3).toEqual(rowSeven);
      expect(result.positions_4).toEqual(rowEight);
    });

    it("should return expected result if boardposition is right", function () {

      var boardposition = 'right';
      var result = positionsService.setNumeration(boardposition);

      expect(result.positions_1).toEqual(rowEight);
      expect(result.positions_2).toEqual(rowSeven);
      expect(result.positions_3).toEqual(rowSix);
      expect(result.positions_4).toEqual(rowFive);
    });
  })
});
