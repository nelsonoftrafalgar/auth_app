class TokenStorage {
  private activeTokens: string[] = []

  insertToken = (token: string) => {
    this.activeTokens = [...this.activeTokens, token]
  }

  removeToken = (token: string) => {
    this.activeTokens = this.activeTokens.filter((activeToken) => token !== activeToken)
  }

  isActive = (token: string) => {
    const match = this.activeTokens.find((activeToken) => token === activeToken)

    return Boolean(match)
  }
}

export const tokenStorage = new TokenStorage()