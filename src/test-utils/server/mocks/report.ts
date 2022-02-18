export const get = async () => await
  fetch('./genetic-test-report.pdf')
  .then((res) => res.arrayBuffer()); 