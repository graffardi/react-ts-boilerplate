import React from 'react'

import { ISample, useSample } from '../stores/SampleContext'

interface Props extends ISample {}

const Sample = (props: Props) => <div>{props.value}</div>

export default useSample(Sample)
