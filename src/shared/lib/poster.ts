// Shown when an event has no poster (or a value that isn't an absolute URL).
export const FALLBACK_POSTER =
    "https://firebasestorage.googleapis.com/v0/b/cloud-storage-next-8e2cc.appspot.com/o/paolo-feser-d6UCfbY3zMc-unsplash.jpg?alt=media&token=9624e26d-387d-4aa2-a802-f4065464745f";

export const posterSrc = (url?: string | null): string =>
    url && /^https?:\/\//.test(url) ? url : FALLBACK_POSTER;

export const formatEventDate = (value?: string | null): string =>
    value ? new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "";
