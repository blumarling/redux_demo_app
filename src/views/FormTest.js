import React, {useEffect} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"

// oggetto di valudazione istanziato con YUP
// ha una sintassi a punti molto semplice da configurare
// controllare la documentazione per maggiori dettagli
const FormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .min(20, 'Troooooppo corta')
    .email('Email NON valida')
    .required('Richiesta'),
});


const FormTest = () => {

  const handleSubmit = (values, actions) => {
    // prova a vedere il console log
    console.log({values, actions})
    // hai a disposizione values utile per poi mandare la POST o la PUT
    // e le action per resettare successivamente la form o altre operazioni
    // che altrimenti dovresti fare a mano

    // se tutto torna qui possiamo fare la nostra post (con fetch o axios ecc ecc)

  }

  // oggetto di configurazione iniziale
  // necessario per react
  const initialValues = {
    email: '',
    telephone: '+39',
    color: 'red',
    privacy: false,
    firstName: ''
  }

  return (
    <div className="customForm">

      {/* usiamo formik e i suoi componenti nella forma più semplice */}
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={FormValidationSchema}
      >
        {/* questo è un children "funzione" di react
        è una funzione che porta delle props e torna altri componenti
        in questo caso porta i values della from così da far reagire
        la form live e creare condizioni e comportameni avanzati */}

        {({values}) => (
          <Form>

          <div>
            <Field type="email" name="email" placeholder="Email"/>
            <div className="errorLabel">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div>
            <Field type="telephone" name="telephone" placeholder="Telefono"/>
          </div>

          <div>
            <Field type="checkbox" name="privacy" />
          </div>
          
          {values.privacy && <div>
            {/* un campo condizionale */}
            <Field type="text" name="firstName" placeholder="First Name"/>
            <div className="errorLabel">
              <ErrorMessage name="firstName" />
            </div>
          </div>}

          <div>
            <Field component="select" name="color">
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
          </div>

          <button type="submit">Submit</button>
        </Form>
        )}

      </Formik>

    </div>
  )

}

export default FormTest