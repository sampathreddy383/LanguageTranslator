import {render,screen} from '@testing-library/react'
import {test,describe,expect} from 'vitest'
import { Header } from './Header'

describe("Header",()=>{
    test("renders searched word",()=>{
        render(<Header word="Hello"/>)
        expect(screen.getByText(/hello/i)).toBeInTheDocument()
    })
})