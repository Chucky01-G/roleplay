import test from 'japa'

test.group('Math Utils', (): void => {
  test('soma de 2 + 2 = 4', (assert) => {
    assert.equal(2 + 2, 4)
  })
})
