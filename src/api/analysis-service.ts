// Mock analysis data for demo mode
const mockAnalyses = [
  { id: 'analysis-1', title: 'Domain Analysis', investigation_id: '1', content: {}, created_at: new Date().toISOString() }
]

export const analysisService = {
  get: async (): Promise<any> => {
    return Promise.resolve(mockAnalyses)
  },
  getByInvestigationId: async (investigationId: string): Promise<any> => {
    return Promise.resolve(mockAnalyses.filter(a => a.investigation_id === investigationId))
  },
  getById: async (analysisId: string): Promise<any> => {
    return Promise.resolve(mockAnalyses.find(a => a.id === analysisId) || mockAnalyses[0])
  },
  create: async (body: BodyInit): Promise<any> => {
    return Promise.resolve({ id: 'new-analysis', title: 'New Analysis' })
  },
  update: async (analysisId: string, body: BodyInit): Promise<any> => {
    return Promise.resolve({ success: true })
  },
  delete: async (analysisId: string): Promise<any> => {
    return Promise.resolve({ success: true })
  }
}
