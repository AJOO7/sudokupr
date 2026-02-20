import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Smoke Tests', () => {
    it('renders the home page by default', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        )
        // Check for Hero text using text content which is more robust
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Strategy/i)
    })

    it('renders the about page', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <App />
            </MemoryRouter>
        )
        expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument()
    })

    it('renders the services page', () => {
        render(
            <MemoryRouter initialEntries={['/services']}>
                <App />
            </MemoryRouter>
        )
        expect(screen.getByRole('heading', { name: /What we do/i })).toBeInTheDocument()
    })

    it('renders the contact page', () => {
        render(
            <MemoryRouter initialEntries={['/contact']}>
                <App />
            </MemoryRouter>
        )
        expect(screen.getByRole('heading', { name: /Let’s/i })).toBeInTheDocument()
    })
})
