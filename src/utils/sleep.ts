export async function sleep(timeout?: number, callback?: () => void) {
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((r) => setTimeout(r, timeout || 200));
  if (callback) callback();
}
