import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api'

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Package API
export const getPackages = async () => {
  const response = await api.get('/packages')
  return response.data
}

export const getPackageById = async (id: string) => {
  const response = await api.get(`/packages/${id}`)
  return response.data
}

// Lead API
export const submitLead = async (leadData: {
  name: string
  email: string
  phone: string
  event: string
  message: string
}) => {
  const response = await api.post('/leads', leadData)
  return response.data
}

// Events API
export const getEvents = async () => {
  const response = await api.get('/events')
  return response.data
}

export const getEventById = async (id: string) => {
  const response = await api.get(`/events/${id}`)
  return response.data
}
