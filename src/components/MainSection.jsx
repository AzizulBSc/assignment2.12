import React from 'react'
import Form from './Form'
import DataTable from './DataTable'
import { Provider } from 'react-redux'
import store from '../redux/store'
export default function MainSection() {
  return (
    <Provider store={store}>
    <section>
   <Form></Form>
   <DataTable></DataTable>
  </section>
  </Provider>
  )
}
