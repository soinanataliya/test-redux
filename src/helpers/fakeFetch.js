const fakeFetch = () => (
  new Promise((resolve) => setTimeout(resolve, 2000))
)

export default fakeFetch
