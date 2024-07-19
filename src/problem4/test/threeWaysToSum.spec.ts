import { expect } from "chai";

import { sum_to_n_a, sum_to_n_b, sum_to_n_c } from "../src/threeWaysToSum";

describe("sum_to_n_a", () => {
  it("should return 0 when n is -1", () => {
    expect(sum_to_n_a(-1)).to.equal(0);
  });

  it("should return 0 when n is 0", () => {
    expect(sum_to_n_a(0)).to.equal(0);
  });

  it("should return 1 when n is 1", () => {
    expect(sum_to_n_a(1)).to.equal(1);
  });

  it("should return 55 when n is 10", () => {
    expect(sum_to_n_a(10)).to.equal(55);
  });

  it("should return 5050 when n is 100", () => {
    expect(sum_to_n_a(100)).to.equal(5050);
  });
});

describe("sum_to_n_b", () => {
  it("should return 0 when n is -1", () => {
    expect(sum_to_n_b(-1)).to.equal(0);
  });

  it("should return 0 when n is 0", () => {
    expect(sum_to_n_b(0)).to.equal(0);
  });

  it("should return 1 when n is 1", () => {
    expect(sum_to_n_b(1)).to.equal(1);
  });

  it("should return 55 when n is 10", () => {
    expect(sum_to_n_b(10)).to.equal(55);
  });

  it("should return 5050 when n is 100", () => {
    expect(sum_to_n_b(100)).to.equal(5050);
  });
});

describe("sum_to_n_c", () => {
  it("should return 0 when n is -1", () => {
    expect(sum_to_n_c(-1)).to.equal(0);
  });

  it("should return 0 when n is 0", () => {
    expect(sum_to_n_c(0)).to.equal(0);
  });

  it("should return 1 when n is 1", () => {
    expect(sum_to_n_c(1)).to.equal(1);
  });

  it("should return 55 when n is 10", () => {
    expect(sum_to_n_c(10)).to.equal(55);
  });

  it("should return 5050 when n is 100", () => {
    expect(sum_to_n_c(100)).to.equal(5050);
  });
});
