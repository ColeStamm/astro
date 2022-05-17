/// <reference types="cypress" />
/// <reference path="../src/components.d.ts" />

declare namespace Cypress {
    type SafeChainable<T> = Omit<Chainable<T>, 'then'> & Promise<T>

    interface Chainable<Subject = any> {
        get<K extends keyof HTMLElementTagNameMap>(
            selector: K,
            options?: Partial<Loggable & Timeoutable & Withinable & Shadow>
        ): SafeChainable<JQuery<HTMLElementTagNameMap[K]>>
        get<E extends Node = HTMLElement>(
            selector: string,
            options?: Partial<Loggable & Timeoutable & Withinable & Shadow>
        ): SafeChainable<JQuery<E>>
        get<S = any>(
            alias: string,
            options?: Partial<Loggable & Timeoutable & Withinable & Shadow>
        ): SafeChainable<S>

        visitComponent(value: string): void
    }
}
