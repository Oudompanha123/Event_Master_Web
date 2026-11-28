// API errors come back as ProblemDetail: field errors in `Errors`, otherwise `detail`.
export function apiErrorMessage(res): string {
    if (res?.Errors && typeof res.Errors === "object") return Object.values(res.Errors).join(", ");
    return res?.detail || res?.message || "Something went wrong. Please try again.";
}
