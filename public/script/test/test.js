class TestResult {
    constructor(testCase) {
        this.passed = true;
        this.result = null;
        this.testCase = testCase;
    }
}

runTests();
function runTests() {
    setupTest_Line_doLinesIntersect();
    setupTest_Point_isPointOnLine();
    setupTest_Point_calculateDistance();
}

function setupTest_Line_doLinesIntersect() {
    let testCases = [{
        l1: new Line(new Point(0, 50), new Point(100, 50)),
        l2: new Line(new Point(50, 0), new Point(50, 100)),
        expected: true
    },{
        l1: new Line(new Point(0, 50), new Point(100, 50)),
        l2: new Line(new Point(0, 75), new Point(100, 75)),
        expected: false
    },{
        l1: new Line(new Point(0, 50), new Point(100, 50)),
        l2: new Line(new Point(50, 0), new Point(50, 45)),
        expected: false
    }];

    let testResults = [];
    testCases.forEach((testCase) => {
        testResults.push(runTest_Line_doLinesIntersect(testCase));
    });

    writeTestResults("Line.doLinesIntersect(line1, line2)", testResults);
}

function runTest_Line_doLinesIntersect(testCase) {
    let testResult = new TestResult(testCase);

    testResult.result = Line.doLinesIntersect(testCase.l1, testCase.l2);
    if (testResult.result != testCase.expected) {
        testResult.passed = false;
    }

    return testResult;
}

function setupTest_Point_isPointOnLine() {
    let testCases = [{
        point: new Point(0, 50),
        line: new Line(new Point(0, 50), new Point(100, 50)),
        expected: true
    },{
        point: new Point(10, 50),
        line: new Line(new Point(0, 50), new Point(100, 50)),
        expected: true
    },{
        point: new Point(101, 50),
        line: new Line(new Point(0, 50), new Point(100, 50)),
        expected: false
    }];

    let testResults = [];
    testCases.forEach((testCase) => {
        testResults.push(runTest_Point_isPointOnLine(testCase));
    });

    writeTestResults("Point.isPointOnLine(point, line)", testResults);
}

function runTest_Point_isPointOnLine(testCase) {
    let testResult = new TestResult(testCase);

    testResult.result = Point.isPointOnLine(testCase.point, testCase.line);
    if (testResult.result != testCase.expected) {
        testResult.passed = false;
    }

    return testResult;
}

function setupTest_Point_calculateDistance() {
    let testCases = [{
        p1: new Point(0, 50),
        p2: new Point(0, 50),
        expected: 0
    },{
        p1: new Point(0, 50),
        p2: new Point(0, 100),
        expected: 50
    }];

    let testResults = [];
    testCases.forEach((testCase) => {
        testResults.push(runTest_Point_calculateDistance(testCase));
    });

    writeTestResults("Point.calculateDistance(point1, point2)", testResults);
}

function runTest_Point_calculateDistance(testCase) {
    let testResult = new TestResult(testCase);

    testResult.result = Point.calculateDistanceBetween(testCase.p1, testCase.p2);
    if (testResult.result != testCase.expected) {
        testResult.passed = false;
    }

    return testResult;
}

function writeTestResults(groupName, testResults) {
    console.group('Test: ' + groupName);

    testResults.forEach((result) => {
        console.groupCollapsed('%c  %c' + (result.passed == false ? ' failed' : ' passed'), 
            'border-radius: 50%; background-color: ' + (result.passed == false ? 'red' : 'green'),
            'background-color: transparent;');

        console.table({
            Result: { value: result.result },
            Expected: { value: result.testCase.expected },
            TestCase: { value: result.testCase }
            
        });
        console.groupEnd();
    });
    console.groupEnd();
}