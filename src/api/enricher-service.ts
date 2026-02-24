// Mock enrichers for demo mode
const mockEnrichers = [
  { name: 'domain_to_ip', category: 'Domain', description: 'Resolve domain to IP addresses', input_type: 'domain', output_type: 'ip' },
  { name: 'domain_to_whois', category: 'Domain', description: 'Get WHOIS information', input_type: 'domain', output_type: 'whois' },
  { name: 'domain_to_subdomains', category: 'Domain', description: 'Find subdomains', input_type: 'domain', output_type: 'domain' },
  { name: 'ip_to_geolocation', category: 'IP', description: 'Get IP geolocation', input_type: 'ip', output_type: 'ip' },
  { name: 'ip_to_asn', category: 'IP', description: 'Get ASN information', input_type: 'ip', output_type: 'asn' },
  { name: 'email_to_breaches', category: 'Email', description: 'Check for data breaches', input_type: 'email', output_type: 'breach' },
  { name: 'username_to_social', category: 'Social', description: 'Find social media accounts', input_type: 'username', output_type: 'social_account' },
]

export const enricherService = {
  get: async (type?: string): Promise<any> => {
    if (type) {
      return Promise.resolve(mockEnrichers.filter(e => e.category === type))
    }
    return Promise.resolve(mockEnrichers)
  },
  launch: async (enricherName: string, body: BodyInit): Promise<any> => {
    return Promise.resolve({ task_id: 'mock-task-1', status: 'pending' })
  }
}
