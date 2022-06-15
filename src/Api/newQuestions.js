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
                    useYesOrNot: false,
                    useInteractiveButon: false,
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
                    useYesOrNot: false,
                    useInteractiveButon: false,
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
                    useYesOrNot: false,
                    useInteractiveButon: false,
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
                    useYesOrNot: false,
                    useInteractiveButon: false,
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
                    useComponent: true,
                    useYesOrNot: false,
                    useInteractiveButon: false,
                    component: "CityQuestion",
                    placeholder: "Elija Ciudad",
                    response: {
                        cities: [
                            {
                                name: "Medellín",
                                numberDoctors: 106
                            },
                            {
                                name: "Barranquilla",
                                numberDoctors: 36
                            },
                            {
                                name: "Cali",
                                numberDoctors: 70
                            },
                            {
                                name: "Bogotá",
                                numberDoctors: 14
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {   
                    title: "Seleccione el cirujano de tu preferencia",
                    useInput: false,
                    useComponent: true,
                    useYesOrNot: false,
                    useInteractiveButon: false,
                    component: "DoctorsQuestion",
                    placeholder: "Elija cirujano",
                    response: {
                        doctors: [
                            {
                                name: "Dr. Juan Mario Escobar",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/168/300/300.jpg?hmac=4m069iOglhq_N0vxSdJrKHQi0406HThIKEJllrqOELE",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Dra. Nicole Echeverry Salja",
                                description: "Cirujana Plástica y Estética Reconstructiva",
                                avatar: "https://i.picsum.photos/id/188/300/300.jpg?hmac=O1Fgsa5q091m_1eNHYtavDoVNb6yIklGq1A67yv5_vk",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Dr. Daniel Correa",
                                description: "Cirujano Plástico y Estético",
                                avatar: "https://i.picsum.photos/id/880/300/300.jpg?hmac=oXC1t0jViOdGm6k__5wE0t1X0riYREqUm9z2CZuIfEI",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Dra. Elizabeth Giraldo",
                                description: "Cirujana Plástica y Estética Reconstructiva",
                                avatar: "https://i.picsum.photos/id/573/300/300.jpg?hmac=eB8bNuMfnFGtyA4SdNvGHVw2bCJzRa2O8FabHr1sb40",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Dr. Felipe Ruso",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/492/300/300.jpg?hmac=wwoIgwZiIgird4Ys0Jac4brMJjAReIdSuqNu8gR0m7k",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Dra. Karen Castro",
                                description: "Cirujana Plástica",
                                avatar: "https://i.picsum.photos/id/335/300/300.jpg?hmac=WLsVURtOcUdU-vMyASCLwpmjlhToIWHNzMNghKfzsJE",
                                city: "Medellín",
                                assessment: 3
                            },
                            {
                                name: "Dra. Carolina Gomez",
                                description: "Cirujana Plástica",
                                avatar: "https://i.picsum.photos/id/580/300/300.jpg?hmac=OBswUmJO205IOKj3lc--Nl2Y1WuPCB5iPcjco4BWb4o",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Dr. Rachid Gorron Maloof",
                                description: "Cirujano Plástico y Estética Reconstructiva",
                                avatar: "https://i.picsum.photos/id/116/300/300.jpg?hmac=8JS9-IMlHf_mp6RrUTuEudQm8gd32We08MRO1UJ2cTY",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Dr. Juan Carlos Herrera",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/278/300/300.jpg?hmac=Bh4VWDzT60r3pjIARd3W_U8e8SR-2ApJ3X6WLwS8SKs",
                                city: "Medellín",
                                assessment: 5
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    title: "¿Vas a realizar tu proceso de recuperaciónen Colombia?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    title: "Selecciona en donde quieres realizar tuproceso de recuperación",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: true,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        interactive1: {
                            img: "https://i.picsum.photos/id/204/300/300.jpg?hmac=nMn3k2irZFRlOEdAxFaKapzdO5cuwF8eQv5HbhP9Lyw",
                            description: "casa de recuperación",
                            recoveryHouse: {
                                medellin: [
                                    {
                                        neighborhood: "Poblado",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        neighborhood: "Laureles",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        neighborhood: "Poblado",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        neighborhood: "Poblado",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        neighborhood: "Poblado",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        neighborhood: "Belén",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ]
                            }

                        },
                        interactive2: {
                            img: "https://i.picsum.photos/id/390/300/300.jpg?hmac=vIwFiXdW16lazu7WfEtZYsQ3UJSXWKISG7tOiTT-nhc",
                            description: "hotel"
                        },
                    }
                },
                {
                    title: "¿Desea incluir Enfermera en su recuperación?",
                    useInput: true,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
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