// Mock data for demo mode (no backend)
const mockInvestigations = [
  {
    id: '1',
    name: 'Domain Investigation',
    description: 'Investigating suspicious domain activity',
    status: 'active',
    created_at: new Date().toISOString(),
    last_updated_at: new Date().toISOString(),
    sketches: [
      { id: 'sketch-1', title: 'Main Graph', description: 'Primary investigation graph', status: 'active', investigation_id: '1', created_at: new Date().toISOString(), last_updated_at: new Date().toISOString(), owner: { id: 'demo', first_name: 'Demo', last_name: 'User' }, owner_id: 'demo' }
    ],
    analyses: [
      { id: 'analysis-1', title: 'Domain Analysis', investigation_id: '1', created_at: new Date().toISOString(), last_updated_at: new Date().toISOString() }
    ],
    owner: { id: 'demo', first_name: 'Demo', last_name: 'User' },
    owner_id: 'demo',
  },
  {
    id: '2',
    name: 'Network Recon',
    description: 'Network reconnaissance and mapping',
    status: 'active',
    created_at: new Date().toISOString(),
    last_updated_at: new Date().toISOString(),
    sketches: [
      { id: 'sketch-2', title: 'Network Map', description: 'Network topology map', status: 'active', investigation_id: '2', created_at: new Date().toISOString(), last_updated_at: new Date().toISOString() }
    ],
    analyses: [],
    owner: { id: 'demo', first_name: 'Demo', last_name: 'User' },
    owner_id: 'demo',
  },
]

export const investigationService = {
  get: async (): Promise<any> => {
    // Return mock data for demo mode
    return Promise.resolve(mockInvestigations)
  },
  getById: async (investigationId: string): Promise<any> => {
    // Return mock data for demo mode
    return Promise.resolve(mockInvestigations.find(i => i.id === investigationId) || mockInvestigations[0])
  },
  create: async (body: BodyInit): Promise<any> => {
    // Mock create - just return a new investigation
    return Promise.resolve({ id: '3', name: 'New Investigation', status: 'active' })
  },
  delete: async (investigationId: string): Promise<any> => {
    // Mock delete
    return Promise.resolve({ success: true })
  }
}
