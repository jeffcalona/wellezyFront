const allQuestions = [
        {
            procedure: "Cirugia de senos - mamaria, Mastopexia",
            idProcedure: "1",
            questions: [
                {
                    title: "¿Qué edad tienes?",
                    useInput: true,
                    useButton: true,
                    useComponent: false,
                    placeholder: "Ingrese edad",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    title: "¿Cuántos hijos tienes",
                    useInput: true,
                    useButton: true,
                    useComponent: false,
                    placeholder: "Ingrese número de hijos",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    title: "¿Qué talla de brasier eres?",
                    useInput: true,
                    useButton: true,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    title: "¿En que talla de brasier quieres quedar?",
                    useInput: true,
                    useButton: true,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    title: "En que ciudad quieres operarte",
                    useInput: false,
                    useButton: false,
                    useComponent: true,
                    component: "CityQuestion",
                    placeholder: "Elija Ciudad",
                    response: {
                        cities: [
                            {
                                "name": "Medellín",
                                "numberDoctors": 106
                            },
                            {
                                "name": "Barranquilla",
                                "numberDoctors": 36
                            },
                            {
                                "name": "Cali",
                                "numberDoctors": 70
                            },
                            {
                                "name": "Bogotá",
                                "numberDoctors": 14
                            }
                        ]
                    }
                }
            ]
        },
        {
            procedure: "Estetica vaginal - Tensado Vaginal con Laser",
            idProcedure: "4",
            questions: [
                {
                    title: "¿Qué edad tienes numero 2?",
                    useInput: true,
                    placeholder: "Ingrese edad",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    title: "¿Cuántos hijos tienes numero 2",
                    placeholder: "Ingrese número de hijos",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    title: "¿Qué talla de brasier eres numero 2?",
                    placeholder: "Seleccione talla",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    title: "¿En que talla de brasier quieres quedar numero 2?",
                    placeholder: "Seleccione talla",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                }
            ]
        }
    ]
export default allQuestions