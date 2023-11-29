describe('First Test', () => {
    let testVariable:any ;
    beforeEach(() => {
        testVariable = {};
    });

    it('should return true if a is true', () => {
        //arrange the test variable
        testVariable.a = false;
        //act
        testVariable.a = true;

        //assertion
        expect(testVariable.a).toBe(true);
    })
});
