import { Space } from 'antd'
import FormComp from './TestComp/FormComp'
import FormSpace from './TestComp/Form-space'

import './style/App.css'
import TestGrid from './TestComp/TestGrid'
import RegisterPage from './TestComp/GPT'

const App = () => {
  return (
    <Space direction="vertical" size="middle" className='container-main' >
      <section className='container-section'>
        {/* <FormSpace /> */}
        {/* <TestGrid/> */}
        {/* <FormComp/> */}
        <RegisterPage />
      </section>

      <section className='container-section'>
        {localStorage.getItem('formData1')}

      </section>

    </Space>
  )
}

export default App