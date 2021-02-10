import { storiesOf } from '@storybook/react'
import Header from '../Header/Header'

storiesOf('Header', module).add('basic', () => {
  return <Header inverse={false} />
})
