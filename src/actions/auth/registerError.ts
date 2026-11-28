// Turns an error body from the API (Spring ProblemDetail) into {message}, or null on success.
export function toActionError(data) {
    const status = Number(data?.status);
    if (!data || !(status >= 400)) return null;
    const fieldErrors = data.Errors || data.errors;
    const message = fieldErrors && typeof fieldErrors === "object"
        ? Object.values(fieldErrors).join(", ")
        : data.detail || data.message || data.title || "Registration failed.";
    return {message};
}
