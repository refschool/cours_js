function test() {
    console.log('test 1')
}

function test(name) {
    console.log('test avec param= ', name)
}

function test(test) {
    test()
    console.log('test 2')
}

test('toto')