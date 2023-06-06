import { makeFoo } from "../src/fooModule";

describe("foo", () => {
    it("should be made", () => {
        expect(makeFoo()).toEqualSome("foo")
    })
})