export function bugsEnabled(): boolean {
  // Enabled by default; disable if either env flag is set to "true"
  const disabled =
    (import.meta as any)?.env?.VITE_FF_DISABLE_BUGS === "true" ||
    (import.meta as any)?.env?.FF_DISABLE_BUGS === "true";
  return !disabled;
}


