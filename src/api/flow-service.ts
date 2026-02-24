// Mock flows for demo mode
const mockFlows = [
  { id: 'flow-1', name: 'Domain Recon', description: 'Full domain reconnaissance', category: ['Domain'], created_at: new Date().toISOString(), last_updated_at: new Date().toISOString() },
  { id: 'flow-2', name: 'IP Analysis', description: 'Analyze IP addresses', category: ['IP'], created_at: new Date().toISOString(), last_updated_at: new Date().toISOString() },
]

export const flowService = {
  get: async (type?: string): Promise<any> => {
    if (type) {
      return Promise.resolve(mockFlows.filter(f => f.category.includes(type)))
    }
    return Promise.resolve(mockFlows)
  },
  getById: async (flowId: string): Promise<any> => {
    return Promise.resolve(mockFlows.find(f => f.id === flowId) || mockFlows[0])
  },
  create: async (body: BodyInit): Promise<any> => {
    return Promise.resolve({ id: 'new-flow', name: 'New Flow' })
  },
  update: async (flowId: string, body: BodyInit): Promise<any> => {
    return Promise.resolve({ success: true })
  },
  compute: async (flowId: string, body: BodyInit): Promise<any> => {
    return Promise.resolve({ result: [] })
  },
  delete: async (flowId: string): Promise<any> => {
    return Promise.resolve({ success: true })
  },
  launch: async (flowId: string, body: BodyInit): Promise<any> => {
    return Promise.resolve({ task_id: 'mock-task', status: 'pending' })
  },
  getRawMaterial: async (): Promise<any> => {
    return Promise.resolve({ types: [], enrichers: [] })
  },
  getRawMaterialForType: async (type: string): Promise<any> => {
    return Promise.resolve({ enrichers: [] })
  }
}
