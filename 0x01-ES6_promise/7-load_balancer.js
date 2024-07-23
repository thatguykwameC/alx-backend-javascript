/**
 * Executes the load balancer function that returns a promise that resolves
 * or rejects as soon as any of the given promises resolve or reject.
 *
 * @param {Promise} chinaDownload - The promise representing the download
 * from China.
 * @param {Promise} USDownload - The promise representing the download from
 * the US.
 * @return {Promise} A promise that resolves or rejects as soon as any of
 * the given promises resolve or reject.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
