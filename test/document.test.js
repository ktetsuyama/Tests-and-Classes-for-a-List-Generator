const {
	Component,
	Header,
	TaskListItem,
	TaskList,
} = require("../lib/document");

describe("Component", () => {
	describe("render", () => {
		it("should throw an error when render is called directly", () => {
			// arrange
			const err = Error;

			// act

			// assert
			expect(result).toEqual(err);
		});
	});
});
