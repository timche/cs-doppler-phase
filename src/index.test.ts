import { expect, test } from "vitest";
import { getDopplerPhase } from "./";

test("returns `phase1`", () => {
	expect(
		getDopplerPhase(
			"-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-KmsjwPKvBmm5D19V5i_rEpLPigVC7vCwwOj6rYJjHcAFtN1mB_1TryevvjJTu7p6bwHJjunIhsH6PzRzlgE0YbrA9gaSaVxzAUM53KYio",
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
