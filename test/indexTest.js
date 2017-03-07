function add(num) {
	return ++num;
}
describe('测试add函数', function () {
	it('1+1应该等于2', function () {
		expect(add(1)).toBe(2);
	})
})
