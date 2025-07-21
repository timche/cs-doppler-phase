import { expect, test } from "vitest";
import { getDopplerPhase } from "./";

test("returns `phase1`", () => {
	expect(
		getDopplerPhase(
			"i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1M5vahf6lsK_WBMWad_up5oPFlSjuMhRUmoDjUpZjwJSTQAVp5Xco0W7UItUPuk4XiMr_q4gXXidkXzn73jipJvCw-4r1QWPEkr_DX2lrFYLAjoc5U3elI6r0",
		),
	).toBe("phase1");
});

test("returns `null`", () => {
	expect(getDopplerPhase("test")).toBe(null);
});

test("throws if not string", () => {
	// @ts-expect-error
	expect(() => getDopplerPhase(123)).toThrowError(
		"Expected a string, got number",
	);
});
