import { render, screen } from '@testing-library/react'
import Placeholder from '..'
import '@testing-library/jest-dom'

describe('Placeholder Test', () => {
    it('should render placeholder', () => {
        render(<Placeholder data-testid="placeholder" />)
        const placeholder = screen.getByTestId('placeholder')
        expect(placeholder).toBeInTheDocument()
    })

    it('should render placeholder with alt', () => {
        render(<Placeholder data-testid="placeholder" alt="Placeholder" />)
        const placeholder = screen.getByTestId('placeholder')
        expect(placeholder).toHaveAttribute('alt', 'Placeholder')
    })

    it('should render placeholder with width and height', () => {
        render(<Placeholder data-testid="placeholder" width={300} height={300} />)
        const placeholder = screen.getByTestId('placeholder')
        expect(placeholder).toHaveAttribute('width', '300')
        expect(placeholder).toHaveAttribute('height', '300')
    })

    it('should throw an error if width or height is smaller than or equal 0', () => {
        expect(() =>
            render(<Placeholder data-testid="placeholder" width={0} height={0} />),
        ).toThrowError('width and height must be greater than 0')
    })

    it('should throw an error if width or height is not a number', () => {
        expect(() =>
            // @ts-ignore
            render(<Placeholder data-testid="placeholder" width="300" height={0} />),
        ).toThrowError('width and height must be a number')
    })
})
