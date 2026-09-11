import { useState } from 'react'
import type * as React from 'react'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { primaryNav, footerLinks } from './index'

type Result = { id: string; title: string; description: string }
type SearchState = 'idle' | 'loading' | 'results' | 'empty' | 'error' | 'success'

const records: Result[] = [
  {
    id: 'keyboard',
    title: 'Keyboard access checklist',
    description: 'A short checklist for testing focus, order, and activation without a mouse.',
  },
  {
    id: 'content',
    title: 'Content structure guide',
    description: 'Ways to use headings, labels, and instructions so a page explains itself.',
  },
  {
    id: 'responsive',
    title: 'Responsive workflow notes',
    description: 'Questions to ask when a workflow moves from a wide screen to a narrow one.',
  },
]

function searchRecords(query: string): Promise<Result[]> {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (query.toLowerCase() === 'error') {
        reject(new Error('The example service could not complete the search.'))
        return
      }
      if (query.toLowerCase() === 'empty') {
        resolve([])
        return
      }
      const matches = records.filter((record) =>
        `${record.title} ${record.description}`.toLowerCase().includes(query.toLowerCase()),
      )
      resolve(matches)
    }, 500)
  })
}

function SearchResultsPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Result[]>([])
  const [state, setState] = useState<SearchState>('idle')
  const [message, setMessage] = useState('Enter a word or phrase to search the example records.')
  const [validation, setValidation] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmed = query.trim()
    setValidation('')
    if (!trimmed) {
      setState('idle')
      setValidation('Enter a search term.')
      setMessage('Enter a search term before searching.')
      return
    }
    setState('loading')
    setMessage('Searching…')
    try {
      const nextResults = await searchRecords(trimmed)
      setResults(nextResults)
      if (nextResults.length === 0) {
        setState('empty')
        setMessage(`No results found for “${trimmed}”. Try a different search term.`)
      } else {
        setState('results')
        setMessage(
          `${nextResults.length} result${nextResults.length === 1 ? '' : 's'} found for “${trimmed}”.`,
        )
      }
    } catch {
      setResults([])
      setState('error')
      setMessage('Search failed. Try again or change the search term.')
    }
  }

  function selectResult(title: string) {
    setState('success')
    setMessage(`Selected “${title}”. In a real application, this would open the record.`)
  }

  return (
    <PageShell>
      <SkipLink />
      <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
      <Main>
        <div className="max-w-3xl space-y-10 pb-12 pt-8">
          <section className="space-y-4" aria-labelledby="search-heading">
            <p className="text-sm font-medium text-muted-foreground">Workflow example</p>
            <h1 id="search-heading" className="text-4xl font-semibold tracking-tight">
              Search and results
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Search a small set of example records. The page keeps the form available while it
              shows normal, loading, empty, error, validation, and success states.
            </p>
          </section>

          <form
            id="search-results-form"
            className="space-y-4 rounded-xl border p-5"
            aria-labelledby="search-form-heading"
            onSubmit={handleSubmit}
          >
            <h2 id="search-form-heading" className="text-xl font-semibold">
              Find a record
            </h2>
            <div className="space-y-2">
              <label htmlFor="search-query" className="font-medium">
                Search term
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="search-query"
                  name="query"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-invalid={Boolean(validation)}
                  aria-describedby={validation ? 'search-validation' : 'search-help'}
                  className="min-h-9 min-w-0 flex-1 rounded-lg border bg-background px-3 py-2 outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  placeholder="Try accessibility or empty"
                />
                <Button id="search-submit" type="submit" isDisabled={state === 'loading'}>
                  {state === 'loading' ? 'Searching…' : 'Search'}
                </Button>
              </div>
              <p id="search-help" className="text-sm text-muted-foreground">
                Try `accessibility`, `empty`, or `error` to inspect each example state.
              </p>
              {validation && (
                <p
                  id="search-validation"
                  role="alert"
                  className="text-sm font-medium text-destructive"
                >
                  {validation}
                </p>
              )}
            </div>
          </form>

          <section aria-labelledby="results-heading" className="space-y-4">
            <div
              id="search-status"
              role="status"
              aria-live="polite"
              className="rounded-lg bg-muted/50 px-4 py-3 text-sm"
            >
              {message}
            </div>
            <h2 id="results-heading" className="text-2xl font-semibold tracking-tight">
              Results
            </h2>
            {state === 'empty' && (
              <p className="rounded-xl border border-dashed p-6 text-muted-foreground">
                No records matched this search. Edit the term and search again.
              </p>
            )}
            {state === 'error' && (
              <div className="rounded-xl border border-destructive/50 p-6">
                <p className="font-medium">We could not load results.</p>
                <p className="mt-2 text-muted-foreground">
                  Check the term or try the request again.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-4"
                  onPress={() =>
                    void handleSubmit(
                      new Event('submit') as unknown as React.FormEvent<HTMLFormElement>,
                    )
                  }
                >
                  Try again
                </Button>
              </div>
            )}
            {(state === 'results' || state === 'success') && (
              <ul className="grid gap-4" aria-label="Search results">
                {results.map((result) => (
                  <li key={result.id}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{result.title}</CardTitle>
                        <CardDescription>{result.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          type="button"
                          variant="outline"
                          onPress={() => selectResult(result.title)}
                        >
                          Open record
                        </Button>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </Main>
      <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
    </PageShell>
  )
}

export { SearchResultsPage }
