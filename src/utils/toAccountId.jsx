export function toAccountId(input) {
  const cleanInput = input.trim()

  if (cleanInput.length === 17) {
    const steamId = BigInt(cleanInput)
    const accountId = steamId - 76561197960265728n
    return accountId.toString()
  }

  return cleanInput
}
