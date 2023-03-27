export async function sleep(timeout?: number, callback?: () => void) {
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((r) => setTimeout(r, timeout || 100));
  if (callback) callback();
}
