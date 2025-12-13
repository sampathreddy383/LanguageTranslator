import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { SearchComponent } from "./SearchComponent";

describe("SearchComponent",()=>{
    test("calls setword on input change",()=>{
        const setword=vi.fn()
        render(
            <SearchComponent word=""
            setword={setword}
            languageSelected="en"
            setLanguageSelected={vi.fn()}
            />
        )

        fireEvent.change(screen.getByLabelText(/search for a word/i),{
            target:{value:"hello"}
        })

        expect(setword).toHaveBeenCalledWith("hello")
    });

    test("calls setLanguageSelected on select change",()=>{
        const setLanguageSelected=vi.fn()
        render(
            <SearchComponent word=""
            setword={vi.fn()}
            languageSelected="en"
            setLanguageSelected={setLanguageSelected}
            />
        )

        fireEvent.change(screen.getByLabelText(/select language/i),{
            target:{value:"es"}
        })

        expect(setLanguageSelected).toHaveBeenCalledWith("es")
    })
})