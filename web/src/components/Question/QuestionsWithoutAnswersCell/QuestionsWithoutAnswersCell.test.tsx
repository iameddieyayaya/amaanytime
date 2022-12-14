import { render } from '@redwoodjs/testing/web'

import { Loading, Empty, Failure, Success } from './QuestionsWithoutAnswersCell'
import { standard } from './QuestionsWithoutAnswersCell.mock'

describe('Questions Cell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success questions={standard().questions} />)
    }).not.toThrow()
  })
})
