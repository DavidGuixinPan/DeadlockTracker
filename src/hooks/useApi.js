import { useEffect, useState } from "react"

export function useApi(apiFunction, argument, shouldRun) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadData() {
      if (!shouldRun) return
      setData(null)
      setError(null)

      try {
        const result = await apiFunction(argument)
        setData(result)
      } catch (err) {
        setError(err.message)
      }
    }

    loadData()
  }, [argument, shouldRun])
  return { data, error }
}