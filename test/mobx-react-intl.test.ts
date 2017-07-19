import { LocaleStore } from "../src/mobx-react-intl"

/**
 * LocaleStore test
 */
describe("LocaleStore test", () => {
  it("LocaleStore is instantiable", () => {
    expect(new LocaleStore("en", {})).toBeInstanceOf(LocaleStore)
  })
})
