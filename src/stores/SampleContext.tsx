import React, { useState, ReactNode, createContext } from 'react'

interface ISampleActions {
  setValue: (value: string) => void
}

export interface ISample {
  value: string
  actions: ISampleActions
}

interface Props {
  children: ReactNode
}

export const SampleContext = createContext({})

const SampleProvider = (props: Props) => {
  const [value, setValue] = useState('Sample')

  return (
    <SampleContext.Provider
      value={{
        value,
        actions: {
          setValue
        }
      }}
    >
      {props.children}
    </SampleContext.Provider>
  )
}

export const useSample = (Component: React.ComponentType<ISample>) => (props: any) => (
  <SampleContext.Consumer>{store => <Component {...props} {...store} />}</SampleContext.Consumer>
)

export default SampleProvider
