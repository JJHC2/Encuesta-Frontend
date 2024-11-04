import React from 'react'
import {Form,Row,Col} from 'react-bootstrap'
const PreguntaRadioGroup = ({pregunta,opciones,seleccion,onChange}) => {
  return (
    <div>
        <Form.Group className="mb-4">
            <Form.Label>{pregunta}</Form.Label>
            <Row>
                {opciones.map((opcion, index) => (
                    <Col key={index}>
                        <Form.Check
                            type="radio"
                            label={opcion}
                            name={pregunta}
                            value={opcion}
                            checked={seleccion === opcion}
                            onChange={(e) => onChange(opcion)}
                        />
                    </Col>
                ))}
            </Row>
        </Form.Group>
    </div>
  )
}

export default PreguntaRadioGroup
