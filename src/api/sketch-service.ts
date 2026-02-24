// Mock data for demo mode (no backend)
// All nodes are AI agents represented by lobster icons in red
const AGENT_COLOR = '#ef4444' // Lobster red
const AGENT_ICON = '/icon.png' // Lobster icon

const mockGraphData = {
  nds: [
    { id: '1', nodeType: 'agent', nodeLabel: 'Research Agent', nodeProperties: { role: 'Research', task: 'Market Analysis' }, nodeSize: 6, nodeColor: AGENT_COLOR, nodeIcon: null, nodeImage: AGENT_ICON, nodeFlag: null, nodeShape: null, nodeMetadata: {}, x: 0, y: 0 },
    { id: '2', nodeType: 'agent', nodeLabel: 'Data Collector', nodeProperties: { role: 'Research', task: 'Data Gathering' }, nodeSize: 4, nodeColor: AGENT_COLOR, nodeIcon: null, nodeImage: AGENT_ICON, nodeFlag: null, nodeShape: null, nodeMetadata: {}, x: 150, y: -100 },
    { id: '3', nodeType: 'agent', nodeLabel: 'Analyst Agent', nodeProperties: { role: 'Research', task: 'Data Analysis' }, nodeSize: 4, nodeColor: AGENT_COLOR, nodeIcon: null, nodeImage: AGENT_ICON, nodeFlag: null, nodeShape: null, nodeMetadata: {}, x: 150, y: 100 },
    { id: '4', nodeType: 'agent', nodeLabel: 'PRD Writer', nodeProperties: { role: 'Product', task: 'Requirements Doc' }, nodeSize: 5, nodeColor: AGENT_COLOR, nodeIcon: null, nodeImage: AGENT_ICON, nodeFlag: null, nodeShape: null, nodeMetadata: {}, x: -200, y: 0 },
    { id: '5', nodeType: 'agent', nodeLabel: 'Product Manager', nodeProperties: { role: 'Product', task: 'Planning' }, nodeSize: 5, nodeColor: AGENT_COLOR, nodeIcon: null, nodeImage: AGENT_ICON, nodeFlag: null, nodeShape: null, nodeMetadata: {}, x: -200, y: 150 },
    { id: '6', nodeType: 'agent', nodeLabel: 'Developer Agent', nodeProperties: { role: 'Development', task: 'Code Writing' }, nodeSize: 4, nodeColor: AGENT_COLOR, nodeIcon: null, nodeImage: AGENT_ICON, nodeFlag: null, nodeShape: null, nodeMetadata: {}, x: 300, y: 0 },
    { id: '7', nodeType: 'agent', nodeLabel: 'Code Reviewer', nodeProperties: { role: 'Development', task: 'Code Review' }, nodeSize: 5, nodeColor: AGENT_COLOR, nodeIcon: null, nodeImage: AGENT_ICON, nodeFlag: null, nodeShape: null, nodeMetadata: {}, x: 450, y: 0 },
    { id: '8', nodeType: 'agent', nodeLabel: 'QA Agent', nodeProperties: { role: 'Review', task: 'Testing' }, nodeSize: 7, nodeColor: AGENT_COLOR, nodeIcon: null, nodeImage: AGENT_ICON, nodeFlag: null, nodeShape: null, nodeMetadata: {}, x: 450, y: 150 },
    { id: '9', nodeType: 'agent', nodeLabel: 'UX Tester', nodeProperties: { role: 'Review', task: 'UX Testing' }, nodeSize: 4, nodeColor: AGENT_COLOR, nodeIcon: null, nodeImage: AGENT_ICON, nodeFlag: null, nodeShape: null, nodeMetadata: {}, x: 150, y: 200 },
    { id: '10', nodeType: 'agent', nodeLabel: 'Feedback Agent', nodeProperties: { role: 'Feedback', task: 'Customer Feedback' }, nodeSize: 5, nodeColor: AGENT_COLOR, nodeIcon: null, nodeImage: AGENT_ICON, nodeFlag: null, nodeShape: null, nodeMetadata: {}, x: -200, y: -150 },
  ],
  rls: [
    { id: 'e1', source: '1', target: '2', type: 'DELEGATES_TO', label: 'DELEGATES_TO' },
    { id: 'e2', source: '1', target: '3', type: 'DELEGATES_TO', label: 'DELEGATES_TO' },
    { id: 'e3', source: '1', target: '4', type: 'SENDS_TO', label: 'SENDS_TO' },
    { id: 'e4', source: '2', target: '5', type: 'REPORTS_TO', label: 'REPORTS_TO' },
    { id: 'e5', source: '4', target: '6', type: 'HANDS_OFF_TO', label: 'HANDS_OFF_TO' },
    { id: 'e6', source: '6', target: '7', type: 'REQUESTS_REVIEW', label: 'REQUESTS_REVIEW' },
    { id: 'e7', source: '7', target: '8', type: 'SENDS_TO', label: 'SENDS_TO' },
    { id: 'e8', source: '8', target: '9', type: 'COLLABORATES', label: 'COLLABORATES' },
    { id: 'e9', source: '9', target: '10', type: 'SENDS_FEEDBACK', label: 'SENDS_FEEDBACK' },
    { id: 'e10', source: '10', target: '1', type: 'INFORMS', label: 'INFORMS' },
  ]
}

const mockSketch = {
  id: 'sketch-1',
  title: 'Domain Investigation Sketch',
  description: 'Investigating example.com infrastructure',
  investigation_id: '1',
  owner_id: 'demo',
  status: 'active',
  created_at: new Date().toISOString(),
}

export const sketchService = {
  get: async (): Promise<any> => {
    return Promise.resolve([mockSketch])
  },
  getById: async (sketchId: string): Promise<any> => {
    return Promise.resolve(mockSketch)
  },
  getGraphDataById: async (sketchId: string, inline: boolean = false): Promise<any> => {
    return Promise.resolve(mockGraphData)
  },
  create: async (body: BodyInit): Promise<any> => {
    return Promise.resolve({ id: 'new-sketch', title: 'New Sketch', status: 'active' })
  },
  delete: async (sketchId: string): Promise<any> => {
    return Promise.resolve({ success: true })
  },
  addNode: async (sketchId: string, body: BodyInit): Promise<any> => {
    return Promise.resolve({ success: true })
  },
  addEdge: async (sketchId: string, body: BodyInit): Promise<any> => {
    return Promise.resolve({ success: true })
  },
  mergeNodes: async (sketchId: string, body: BodyInit): Promise<any> => {
    return Promise.resolve({ success: true })
  },
  deleteNodes: async (sketchId: string, body: BodyInit): Promise<any> => {
    return Promise.resolve({ success: true })
  },
  deleteEdges: async (sketchId: string, body: BodyInit): Promise<any> => {
    return Promise.resolve({ success: true })
  },
  updateNode: async (sketchId: string, body: BodyInit): Promise<any> => {
    return Promise.resolve({ success: true })
  },
  updateEdge: async (sketchId: string, body: BodyInit): Promise<any> => {
    return Promise.resolve({ success: true })
  },
  getNodeNeighbors: async (sketchId: string, nodeId: string): Promise<any> => {
    // Return mock neighbors based on the node
    const node = mockGraphData.nds.find(n => n.id === nodeId)
    if (!node) return Promise.resolve({ nds: [], rls: [] })

    // Find connected edges
    const connectedEdges = mockGraphData.rls.filter(e => e.source === nodeId || e.target === nodeId)
    // Find neighbor node IDs
    const neighborIds = new Set<string>()
    connectedEdges.forEach(e => {
      if (e.source === nodeId) neighborIds.add(e.target)
      if (e.target === nodeId) neighborIds.add(e.source)
    })
    // Get neighbor nodes
    const neighborNodes = mockGraphData.nds.filter(n => neighborIds.has(n.id) || n.id === nodeId)

    return Promise.resolve({ nds: neighborNodes, rls: connectedEdges })
  },
  types: async (): Promise<any> => {
    return Promise.resolve([
      { id: 1, type: 'entity', key: 'domain', icon: 'Globe', label: 'Domain', color: '#22c55e', label_key: 'domain', description: 'A domain name', fields: [{ name: 'domain', label: 'Domain', type: 'text', required: true }] },
      { id: 2, type: 'entity', key: 'ip', icon: 'Server', label: 'IP Address', color: '#3b82f6', label_key: 'ip', description: 'An IP address', fields: [{ name: 'ip', label: 'IP Address', type: 'text', required: true }] },
      { id: 3, type: 'entity', key: 'email', icon: 'Mail', label: 'Email', color: '#f59e0b', label_key: 'email', description: 'An email address', fields: [{ name: 'email', label: 'Email', type: 'email', required: true }] },
      { id: 4, type: 'entity', key: 'individual', icon: 'User', label: 'Individual', color: '#8b5cf6', label_key: 'name', description: 'A person', fields: [{ name: 'name', label: 'Name', type: 'text', required: true }] },
      { id: 5, type: 'entity', key: 'organization', icon: 'Building', label: 'Organization', color: '#ec4899', label_key: 'name', description: 'An organization', fields: [{ name: 'name', label: 'Name', type: 'text', required: true }] },
      { id: 6, type: 'entity', key: 'username', icon: 'AtSign', label: 'Username', color: '#06b6d4', label_key: 'username', description: 'A username', fields: [{ name: 'username', label: 'Username', type: 'text', required: true }] },
      { id: 7, type: 'entity', key: 'phone', icon: 'Phone', label: 'Phone', color: '#84cc16', label_key: 'phone', description: 'A phone number', fields: [{ name: 'phone', label: 'Phone', type: 'tel', required: true }] },
      { id: 8, type: 'entity', key: 'wallet', icon: 'Wallet', label: 'Crypto Wallet', color: '#f97316', label_key: 'address', description: 'A crypto wallet', fields: [{ name: 'address', label: 'Address', type: 'text', required: true }] },
    ])
  },
  update: async (sketchId: string, body: BodyInit): Promise<any> => {
    return Promise.resolve({ success: true })
  },
  analyzeImportFile: async (sketchId: string, file: File): Promise<any> => {
    return Promise.resolve({ entities: [] })
  },
  executeImport: async (sketchId: string, entityMappings: any, edges: any): Promise<any> => {
    return Promise.resolve({ success: true })
  },
  updateNodePositions: async (sketchId: string, positions: any): Promise<any> => {
    return Promise.resolve({ success: true })
  },
  exportSketch: async (sketchId: string, format: 'json' = 'json'): Promise<any> => {
    return Promise.resolve(mockGraphData)
  }
}
