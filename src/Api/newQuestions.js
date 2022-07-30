const allQuestions = [
        {
            procedure: "Cirugia de senos - mamaria, Mastopexia",
            idProcedure: 1,
            questions: [
                {
                    idQuestion: 1,
                    info: "",
                    title: "¿Qué edad tienes?",
                    useInput: true,
                    useButton: true,
                    useComponent: false,
                    useDate: false,
                    useYesOrNot: false,
                    useInteractiveButon: false,
                    placeholder: "Ingrese edad",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 2,
                    info: "",
                    title: "¿Cuántos hijos tienes?",
                    useInput: true,
                    useButton: true,
                    useYesOrNot: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    useDate: false,
                    placeholder: "Ingrese número de hijos",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 3,
                    info: "",
                    title: "¿Qué talla de brasier eres?",
                    useInput: true,
                    useButton: true,
                    useYesOrNot: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    useDate: false,
                    placeholder: "Seleccione talla",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 4,
                    info: "",
                    title: "¿En que talla de brasier quieres quedar?",
                    useInput: true,
                    useButton: true,
                    useYesOrNot: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    useDate: false,
                    placeholder: "Seleccione talla",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 4,
                    info: "",
                    title: "¿En que ciudad quieres operarte?",
                    useInput: false,
                    useComponent: true,
                    useYesOrNot: false,
                    useInteractiveButon: false,
                    useDate: false,
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
                    idQuestion: 5,
                    info: "",
                    title: "Seleccione el cirujano de tu preferencia",
                    useInput: false,
                    useComponent: true,
                    useYesOrNot: false,
                    useInteractiveButon: false,
                    useDate: false,
                    component: "DoctorsQuestion",
                    placeholder: "Elija cirujano",
                    response: {
                        doctors: [
                            {
                                name: "Dr. William Jimenez",
                                slug: "Dr_William_Jimenez",
                                description: "Cirujano Plástico",
                                avatar: "https://pdtclientsolutions.com/wellezy/img/wellezy/users/WhatsApp-Image-2022-06-06-at-11.00.34-AM.jpeg",
                                city: "Medellín",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dr. Julio Cesar Eusse",
                                slug: "Dr_Julio_Cesar_Eusse",
                                description: "Cirujana Plástica y Estética Reconstructiva",
                                avatar: "https://pdtclientsolutions.com/wellezy/img/wellezy/users/Julios-Cesar-eusse.jpeg",
                                city: "Medellín",
                                gender: "Dama",
                                Procedimiento: [
                                    'plastica'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dr. Hugo Javier Mejia",
                                slug: "Dr_Hugo_Javier_Mejia",
                                description: "Cirujano Plástico y Estético",
                                avatar: "https://pdtclientsolutions.com/wellezy/img/wellezy/users/Hugo-Javier-Mejia.png",
                                city: "Medellín",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dr José David Salazar",
                                slug: "Dr_José_David_Salazar",
                                description: "Cirujana Plástica y Estética Reconstructiva",
                                avatar: "https://pdtclientsolutions.com/wellezy/img/wellezy/users/Jose-david-salazar.png",
                                city: "Medellín",
                                gender: "Dama",
                                Procedimiento: [
                                    'plastica', 'general'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dr. Fabio Alberto Arango",
                                slug: "Dr_Fabio_Alberto_Arango",
                                description: "Cirujano Plástico",
                                avatar: "https://pdtclientsolutions.com/wellezy/img/wellezy/users/Fabio-Alberto-arango.png",
                                city: "Medellín",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dr. Erick Almenarez",
                                slug: "Dr_Erick_Almenarez",
                                description: "Cirujana Plástica",
                                avatar: "https://pdtclientsolutions.com/wellezy/img/wellezy/users/Erik-Almenarez.jpeg",
                                city: "Medellín",
                                gender: "Dama",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 3
                            },
                            {
                                name: "Dr. Hernann Daza",
                                slug: "Dr_Hernann_Daza",
                                description: "Cirujana Plástica",
                                avatar: "https://pdtclientsolutions.com/wellezy/img/wellezy/users/Hernan-Daza.jpeg",
                                city: "Medellín",
                                gender: "Dama",
                                Procedimiento: [
                                    'plastica', 'general'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dr. Manuel Mercado",
                                slug: "dr_Manuel_Mercado",
                                description: "Cirujano Plástico y Estética Reconstructiva",
                                avatar: "https://pdtclientsolutions.com/wellezy/img/wellezy/users/Manuel-Mercado.png",
                                city: "Medellín",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dra. Sandra Valentina",
                                slug: "Dra_Sandra_Valentina",
                                description: "Cirujano Plástico",
                                avatar: "https://pdtclientsolutions.com/wellezy/img/wellezy/users/Sandra-valencia.png",
                                city: "Medellín",
                                gender: "Caballero",
                                Procedimiento: [
                                    'general'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dr. Alvaro Correa",
                                slug: "dr-alvaro-correa",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/593/500/500.jpg?hmac=tTKq5xoCbA7u-XjimfpDlDBKVk28TkZfki-FLFKNSP0",
                                city: "Medellín",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 3
                            },
                            {
                                name: "Dr. Felipe Buendia",
                                slug: "dr-felipe-buendia",
                                description: "Cirujano Plástico y Estético",
                                avatar: "https://i.picsum.photos/id/435/500/500.jpg?hmac=3a9tBEGcwt0oZdKXmaPnp9mBEpd1Qp5IkmDaXTQj5go",
                                city: "Medellín",
                                gender: "Caballero",
                                Procedimiento: [
                                    'estética', 'general'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dra. Liliana Fernandez",
                                slug: "dra-liliana-fernandez",
                                description: "Cirujana Plástica",
                                avatar: "https://i.picsum.photos/id/6/500/500.jpg?hmac=BV78_cgdwZQNfQorKlCsS4-47_DG0MJ3GZqiDBfeHbI",
                                city: "Medellín",
                                gender: "Dama",
                                Procedimiento: [
                                    'plastica', 'estética'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dr. Mauricio Linares",
                                slug: "dr-mauricio-linares",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/740/500/500.jpg?hmac=jnq-I2KYtjUXT1UJMlMFx0HrjDAk3FCe3yPyYEnxl-k",
                                city: "Bogotá",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dr. Hugo Cortes",
                                slug: "dr-hugo-cortes",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/283/500/500.jpg?hmac=k9A6l1oJ3N0hNB1V0xKPKxmB7Ar5Xdy-aqNdwqkNDUc",
                                city: "Bogotá",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dr. Jaime Roberto Arias",
                                slug: "dr-jaime-roberto-arias",
                                description: "Cirujano Plástico y Estético",
                                avatar: "https://i.picsum.photos/id/376/500/500.jpg?hmac=T32nkxwsxIyVf_KzAw9mqHfcl36epPedy9QORnJGoTM",
                                city: "Cali",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dra. Juliana Aguirre",
                                slug: "dra-juliana-aguirre",
                                description: "Cirujana Plástica",
                                avatar: "https://i.picsum.photos/id/506/500/500.jpg?hmac=BYrIaxLp-KtrJuj8yi-NqJw-tWEyGrponrzphcgZnj8",
                                city: "Cali",
                                gender: "Dama",
                                Procedimiento: [
                                    'estética', 'general'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dr. Nelson Zapata",
                                slug: "dr-nelson-zapata",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/391/500/500.jpg?hmac=uaovpLGqdyuUjUClr8i1iFKoJcqfudsFeJT9YMKgmjk",
                                city: "Cali",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dra. Viviana Lacera",
                                slug: "dra-viviana-lacera",
                                description: "Cirujana Plástica",
                                avatar: "https://i.picsum.photos/id/981/500/500.jpg?hmac=jI0JpUDEQuFcGv4b05zl90aEzbjiq62ejNmdxDFfurQ",
                                city: "Medellín",
                                gender: "Dama",
                                Procedimiento: [
                                    'plastica', 'estética'
                                ],
                                assessment: 3
                            },
                            {
                                name: "Dr. Camilo Rafael Torres",
                                slug: "dr-camilo-rafael-torres",
                                description: "Cirujano Plástico y Estético",
                                avatar: "https://i.picsum.photos/id/694/500/500.jpg?hmac=cEe2DO9tVxp0o0HjSI5RboKc75ofkq50NvKBIlB_0fQ",
                                city: "Cali",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'general'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dra. Lorena Galeano",
                                slug: "dra-lorena-galeano",
                                description: "Cirujana Plástica, Estética y Recostructiva",
                                avatar: "https://i.picsum.photos/id/387/500/500.jpg?hmac=1QmctCe6JuOK66mhfGHPpkRC_hm5myYZaTU3TffRId4",
                                city: "Medellín",
                                gender: "Dama",
                                Procedimiento: [
                                    'plastica', 'general'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dr. Juan Mario Escobar 2",
                                slug: "dr-juan-mario-escobar-2",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/168/300/300.jpg?hmac=4m069iOglhq_N0vxSdJrKHQi0406HThIKEJllrqOELE",
                                city: "Medellín",
                                gender: "Caballero",
                                Procedimiento: [
                                    'estética', 'general'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dra. Nicole Echeverry Salja 2",
                                slug: "dra-nicole-echeverry-salja-2",
                                description: "Cirujana Plástica y Estética Reconstructiva",
                                avatar: "https://i.picsum.photos/id/188/300/300.jpg?hmac=O1Fgsa5q091m_1eNHYtavDoVNb6yIklGq1A67yv5_vk",
                                city: "Medellín",
                                gender: "Dama",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dr. Daniel Correa 2",
                                slug: "dr-daniel-correa2",
                                description: "Cirujano Plástico y Estético",
                                avatar: "https://i.picsum.photos/id/880/300/300.jpg?hmac=oXC1t0jViOdGm6k__5wE0t1X0riYREqUm9z2CZuIfEI",
                                city: "Medellín",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dra. Elizabeth Giraldo 2",
                                slug: "dra-elizabeth-giraldo-2",
                                description: "Cirujana Plástica y Estética Reconstructiva",
                                avatar: "https://i.picsum.photos/id/573/300/300.jpg?hmac=eB8bNuMfnFGtyA4SdNvGHVw2bCJzRa2O8FabHr1sb40",
                                city: "Medellín",
                                gender: "Dama",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dr. Felipe Ruso 2",
                                slug: "dr-felipe-ruso-2",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/492/300/300.jpg?hmac=wwoIgwZiIgird4Ys0Jac4brMJjAReIdSuqNu8gR0m7k",
                                city: "Medellín",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dra. Karen Castro 2",
                                slug: "dra-karen-castro-2",
                                description: "Cirujana Plástica",
                                avatar: "https://i.picsum.photos/id/335/300/300.jpg?hmac=WLsVURtOcUdU-vMyASCLwpmjlhToIWHNzMNghKfzsJE",
                                city: "Medellín",
                                gender: "Dama",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 3
                            },
                            {
                                name: "Dra. Carolina Gomez 2",
                                slug: "dra-carolina-gomez-2",
                                description: "Cirujana Plástica",
                                avatar: "https://i.picsum.photos/id/580/300/300.jpg?hmac=OBswUmJO205IOKj3lc--Nl2Y1WuPCB5iPcjco4BWb4o",
                                city: "Medellín",
                                gender: "Dama",
                                Procedimiento: [
                                    'estética', 'general'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dr. Rachid Gorron Maloof 2",
                                slug: "dr-rachid-gorron-maloof-2",
                                description: "Cirujano Plástico y Estética Reconstructiva",
                                avatar: "https://i.picsum.photos/id/116/300/300.jpg?hmac=8JS9-IMlHf_mp6RrUTuEudQm8gd32We08MRO1UJ2cTY",
                                city: "Medellín",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dr. Juan Carlos Herrera 2",
                                slug: "dr-juan-carlos-herrera-2",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/278/300/300.jpg?hmac=Bh4VWDzT60r3pjIARd3W_U8e8SR-2ApJ3X6WLwS8SKs",
                                city: "Medellín",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dr. Alvaro Correa 2",
                                slug: "dr-alvaro-correa-2",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/593/500/500.jpg?hmac=tTKq5xoCbA7u-XjimfpDlDBKVk28TkZfki-FLFKNSP0",
                                city: "Medellín",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 3
                            },
                            {
                                name: "Dr. Felipe Buendia 2",
                                slug: "dr-felipe-buendia-2",
                                description: "Cirujano Plástico y Estético",
                                avatar: "https://i.picsum.photos/id/435/500/500.jpg?hmac=3a9tBEGcwt0oZdKXmaPnp9mBEpd1Qp5IkmDaXTQj5go",
                                city: "Medellín",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dra. Liliana Fernandez 2",
                                slug: "dra-liliana-fernandez-2",
                                description: "Cirujana Plástica",
                                avatar: "https://i.picsum.photos/id/6/500/500.jpg?hmac=BV78_cgdwZQNfQorKlCsS4-47_DG0MJ3GZqiDBfeHbI",
                                city: "Medellín",
                                gender: "Dama",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dr. Mauricio Linares 2",
                                slug: "dr-mauricio-linares-2",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/740/500/500.jpg?hmac=jnq-I2KYtjUXT1UJMlMFx0HrjDAk3FCe3yPyYEnxl-k",
                                city: "Bogotá",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dr. Hugo Cortes 2",
                                slug: "dr-hugo-cortes-2",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/283/500/500.jpg?hmac=k9A6l1oJ3N0hNB1V0xKPKxmB7Ar5Xdy-aqNdwqkNDUc",
                                city: "Bogotá",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dr. Jaime Roberto Arias 2",
                                slug: "dr-jaime-roberto-arias-2",
                                description: "Cirujano Plástico y Estético",
                                avatar: "https://i.picsum.photos/id/376/500/500.jpg?hmac=T32nkxwsxIyVf_KzAw9mqHfcl36epPedy9QORnJGoTM",
                                city: "Cali",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dra. Juliana Aguirre 2",
                                slug: "dra-juliana-aguirre-2",
                                description: "Cirujana Plástica",
                                avatar: "https://i.picsum.photos/id/506/500/500.jpg?hmac=BYrIaxLp-KtrJuj8yi-NqJw-tWEyGrponrzphcgZnj8",
                                city: "Cali",
                                gender: "Dama",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 4
                            },
                            {
                                name: "Dr. Nelson Zapata 2",
                                slug: "dr-nelson-zapata-2",
                                description: "Cirujano Plástico",
                                avatar: "https://i.picsum.photos/id/391/500/500.jpg?hmac=uaovpLGqdyuUjUClr8i1iFKoJcqfudsFeJT9YMKgmjk",
                                city: "Barranquilla",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética', 'general'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dra. Viviana Lacera 2",
                                slug: "dra-viviana-lacera-2",
                                description: "Cirujana Plástica",
                                avatar: "https://i.picsum.photos/id/981/500/500.jpg?hmac=jI0JpUDEQuFcGv4b05zl90aEzbjiq62ejNmdxDFfurQ",
                                city: "Barranquilla",
                                gender: "Dama",
                                Procedimiento: [
                                    'estética', 'general'
                                ],
                                assessment: 3
                            },
                            {
                                name: "Dr. Camilo Rafael Torres 2",
                                slug: "dr-camilo-rafael-torres-2",
                                description: "Cirujano Plástico y Estético",
                                avatar: "https://i.picsum.photos/id/694/500/500.jpg?hmac=cEe2DO9tVxp0o0HjSI5RboKc75ofkq50NvKBIlB_0fQ",
                                city: "Cali",
                                gender: "Caballero",
                                Procedimiento: [
                                    'plastica', 'estética'
                                ],
                                assessment: 5
                            },
                            {
                                name: "Dra. Lorena Galeano 2",
                                slug: "dr-camilo-rafael-torres-2",
                                description: "Cirujana Plástica, Estética y Recostructiva",
                                avatar: "https://i.picsum.photos/id/387/500/500.jpg?hmac=1QmctCe6JuOK66mhfGHPpkRC_hm5myYZaTU3TffRId4",
                                city: "Barranquilla",
                                gender: "Dama",
                                Procedimiento: [
                                    'estética', 'general'
                                ],
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 6,
                    info: "",
                    title: "¿Vas a realizar tu proceso de recuperaciónen Colombia?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useComponent: false,
                    useDate: false,
                    placeholder: "Seleccione talla",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 7,
                    info: "",
                    title: "Selecciona en donde quieres realizar tuproceso de recuperación",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: true,
                    useComponent: false,
                    useDate: false,
                    placeholder: "Seleccione talla",
                    response: {
                        interactive1: {
                            img: "https://i.picsum.photos/id/204/300/300.jpg?hmac=nMn3k2irZFRlOEdAxFaKapzdO5cuwF8eQv5HbhP9Lyw",
                            description: "casa de recuperación",
                            recoveryHouse: {
                                Medellín: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Barranquilla: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Cali: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - C",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - C",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - C",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - C",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - C",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - C",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Bogotá: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
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
                    idQuestion: 8,
                    info: "",
                    title: "¿Desea incluir Enfermera en su recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    useDate: false,
                    placeholder: "Seleccione talla",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 9,
                    info: "",
                    title: "Seleccione la Enfermera de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    useDate: false,
                    component: 'NurseQuestion',
                    placeholder: "Elija Enfermera",
                    response: {
                        nurse: [
                            {
                                name: "Marian Restrepo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/758/300/300.jpg?hmac=JdmQPsV_vTdIhWzwEIHhcmA5tmuC_DOHB6O5PUVualQ",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Antonia Rodriguez",
                                experience: "8 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/536/300/300.jpg?hmac=jc8wwzhIRp8-aFORQGaxnHycNfXcprvPX0oKawN4-C0",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Susana Ruíz",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Paola Gomez",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Ana Marín",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/984/300/300.jpg?hmac=nNJwsEJribYLYZT-XI2HF5Ovd6jFrSzzkfpkoYj_zao",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Laura Cardona",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/516/300/300.jpg?hmac=rjKkPPkY2QLwGN8JBF5Af6y910lX5PaPaXpqbxr1-IU",
                                city: "Medellín",
                                assessment: 3
                            },
                            {
                                name: "Carolina Herrera",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/45/300/300.jpg?hmac=4xBaRob30OZKvORvIar-A2GqUCvsEac5ve4nrWuzn0w",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Luisa Acosta",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/62/300/300.jpg?hmac=JkaOmZr8So-hvPO3Mya00sE2pvIQtLZjGMldqbPFiqc",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Marta Giraldo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/421/300/300.jpg?hmac=7vF4ivvohPVAng1rECOJPHlpeZj0DK5eOJWEduSseR4",
                                city: "Medellín",
                                assessment: 5
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 10,
                    info: "usePressNot",
                    title: "¿Deseas incluir un plan nutricional en tu proceso de recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    useDate: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 11,
                    info: '',
                    title: "¿Vas a necesitar transporte?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    useDate: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 12,
                    info: "",
                    title: "Seleccione chofer y vehículo de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    useDate: false,
                    component: 'ChoferQuestion',
                    placeholder: "Seleccione Transporte",
                    response: {
                        transport: [
                            {
                                choferName: "Luis Duran",
                                choferAvatar: "https://i.picsum.photos/id/156/300/300.jpg?hmac=rGLAWZy_0JcFB5YMaO_wu9TChlrg9K6UqlSCCWbVa_Y",
                                carChoferModel: "Chevrolet Cruze",
                                carChoferImg: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/cruze-premier-5-e1565908395458.jpg?resize=650,433",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Carlos Marín",
                                choferAvatar: "https://i.picsum.photos/id/1076/300/300.jpg?hmac=Nyv9lBi6xcTR9iOySfgGlf24hAYdDRaHQ7nJQim1naA",
                                carChoferModel: "Nissan Sentra",
                                carChoferImg: "https://www.thedrive.com/content/2021/03/73572C33-7C8E-4895-9267-473FA35D488F_1_201_a-scaled.jpeg?quality=85&auto=webp&optimize=high&quality=70&width=2018",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Paula Muñoz",
                                choferAvatar: "https://i.picsum.photos/id/700/300/300.jpg?hmac=nAc9k92vOFl8i6K84MMZgC_uwyhaIydCz34BEY8O0Ps",
                                carChoferModel: "Hyundai Elactra",
                                carChoferImg: "https://www.samarins.com/reviews/img/hyundai-elantra-2014.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marian Mora",
                                choferAvatar: "https://i.picsum.photos/id/46/300/300.jpg?hmac=d0_MNL7cjS7tre8_kfeiCGuF_l8Fz6qcD6k2lOB73EU",
                                carChoferModel: "Tesla Model X",
                                carChoferImg: "https://i.pinimg.com/originals/e4/c2/3d/e4c23db7eaf2f902568b9c596ba955ab.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Mario Mena",
                                choferAvatar: "https://i.picsum.photos/id/101/300/300.jpg?hmac=otCBSyFuH-eJf1aGys81tPdEqAXy0zxvMT81fYTv4C8",
                                carChoferModel: "BMW",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2019/12/12171546/IMG_5383.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Melisa Rivero",
                                choferAvatar: "https://i.picsum.photos/id/497/300/300.jpg?hmac=dtw7nGJRHPRmarbydsHN2XR_rN784bu4R-Wrfj3tY6E",
                                carChoferModel: "Hyundai",
                                carChoferImg: "https://www.manualesdetodo.net/wp-content/uploads/2020/10/2014-accent-hyundai-u.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Lucas Ferrer",
                                choferAvatar: "https://i.picsum.photos/id/42/300/300.jpg?hmac=4m-5oL1k_PEXemEhSsagOlAeKjwF-hha0yC6B_T9-9o",
                                carChoferModel: "Toyota Corolla",
                                carChoferImg: "https://i.pinimg.com/originals/aa/82/89/aa828991f7df5441863c38a0a7198894.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marta Toro",
                                choferAvatar: "https://i.picsum.photos/id/53/300/300.jpg?hmac=YAuaha56Qqkoz5v03NRQhB0hPeVomxdGzpBTpSkUkNE",
                                carChoferModel: "Mercedes",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/06/17115300/20C0257_020.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Camilo Navarro",
                                choferAvatar: "https://i.picsum.photos/id/276/300/300.jpg?hmac=9ojBAYusSkbkLhQc8rr9BMIwXHSNSkBfQM2g1V9KaVk",
                                carChoferModel: "Chevrolet",
                                carChoferImg: "https://mattmakes.org/wp-content/uploads/2020/12/redesign-and-review-chevrolet-malibu-2020-price.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 13,
                    info: 'usePressNot',
                    title: "¿Deseas incluir una Sim Card?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    useDate: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 14,
                    info: 'date',
                    title: "¿Deseas incluir un tour antes o después de tu operación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    useDate: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 15,
                    info: "",
                    title: "¿Para donde deseas ir?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    useDate: false,
                    component: 'TourQuestion',
                    placeholder: "Seleccione Lugar",
                    response: {
                        tours: [
                            {
                                id: "Tour 1",
                                city: "Santa Marta",
                                tour: "Parque Nacional Tairona",
                                img: "https://travelgrafia.co/wp-content/uploads/2019/05/playas-cerca-a-santa-marta.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 2",
                                city: "Cartagena",
                                tour: "Ciudad Amurallada",
                                img: "https://images.squarespace-cdn.com/content/v1/5785d42ee58c62418fa80880/1544049396811-HVMJTV64MNNVZP1DQLO4/DSC01610.jpg?format=500w",
                                assessment: 5
                            },
                            {
                                id: "Tour 3",
                                city: "La Guajira",
                                tour: "Desiertos",
                                img: "https://i.pinimg.com/564x/3b/9f/82/3b9f82d82b028773ffb3dbb9d9412b1c.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 4",
                                city: "La Macarena - Meta",
                                tour: "Caño Cristales",
                                img: "https://www.infobae.com/new-resizer/wAD9R8Fg6zOTYJP3yqLPMAgLTfE=/1440x1440/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/11111513/Ca%C3%B1o-cristales.jpg",
                                assessment: 3
                            },
                            {
                                id: "Tour 5",
                                city: "Guatapé",
                                tour: "Piedra del Peñol",
                                img: "https://i.pinimg.com/564x/22/02/b5/2202b5487a9be7fd995082148ca3126b.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 6",
                                city: "Boyacá",
                                tour: "El Cocuy",
                                img: "https://live.staticflickr.com/7322/9397648854_b5dad7fe3e_h.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 7",
                                city: "Salento",
                                tour: "Valle de Cocura",
                                img: "https://funlifecrisis.com/wp-content/uploads/2018/11/valle-do-cocura-hike-salento-colombia.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 8",
                                city: "San Andrés",
                                tour: "Islas de San Andrés",
                                img: "https://i.pinimg.com/originals/7d/c7/d8/7dc7d89feef93681fd6639d6b5256cbf.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 9",
                                city: "El Chocó",
                                tour: "Capurganá",
                                img: "https://i.pinimg.com/564x/72/a1/9c/72a19c91ac194cf86ac111e381beb857.jpg",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 16,
                    info: "",
                    title: "Seleccione fechas del tour",
                    useInput: false,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    useDate: true,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 17,
                    info: "",
                    title: "Agenda tu cita de valoración virtual para la cirugía",
                    useInput: false,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    useDate: true,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente",
                    }
                },
                {
                    idQuestion: 18,
                    info: "",
                    title: "¡Ya casi terminamos! Sólo queda agendar la fecha de tu vuelo",
                    useInput: false,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    useDate: false,
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente",
                        button3: "Seleccione Fecha"
                    }
                },
                {
                    idQuestion: 19,
                    info: "",
                    title: "Listo!!",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    useDate: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente",
                        button3: "Finalizar"
                    }
                }
            ]
        },
        //Cirugia de senos - mamaria, Mamoplastia
        {
            procedure: "Cirugia de senos - mamaria, Mamoplastia",
            idProcedure: 2,
            questions: [
                {
                    idQuestion: 1,
                    info: "",
                    title: "¿Qué edad tienes -  Cirugia de senos - mamaria, Mamoplastia?",
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
                    idQuestion: 2,
                    info: "",
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
                    idQuestion: 3,
                    info: "",
                    title: "¿Qué talla de brasier eres",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 5,
                    info: "",
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
                    idQuestion: 6,
                    info: "",
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
                    idQuestion: 7,
                    info: "",
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
                                Medellín: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Barranquilla: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Cali: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - C",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - C",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - C",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - C",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - C",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - C",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Bogotá: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
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
                    idQuestion: 8,
                    info: "",
                    title: "¿Desea incluir Enfermera en su recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 9,
                    info: "",
                    title: "Seleccione la Enfermera de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'NurseQuestion',
                    placeholder: "Elija Enfermera",
                    response: {
                        nurse: [
                            {
                                name: "Marian Restrepo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/758/300/300.jpg?hmac=JdmQPsV_vTdIhWzwEIHhcmA5tmuC_DOHB6O5PUVualQ",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Antonia Rodriguez",
                                experience: "8 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/536/300/300.jpg?hmac=jc8wwzhIRp8-aFORQGaxnHycNfXcprvPX0oKawN4-C0",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Susana Ruíz",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Paola Gomez",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Ana Marín",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/984/300/300.jpg?hmac=nNJwsEJribYLYZT-XI2HF5Ovd6jFrSzzkfpkoYj_zao",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Laura Cardona",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/516/300/300.jpg?hmac=rjKkPPkY2QLwGN8JBF5Af6y910lX5PaPaXpqbxr1-IU",
                                city: "Medellín",
                                assessment: 3
                            },
                            {
                                name: "Carolina Herrera",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/45/300/300.jpg?hmac=4xBaRob30OZKvORvIar-A2GqUCvsEac5ve4nrWuzn0w",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Luisa Acosta",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/62/300/300.jpg?hmac=JkaOmZr8So-hvPO3Mya00sE2pvIQtLZjGMldqbPFiqc",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Marta Giraldo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/421/300/300.jpg?hmac=7vF4ivvohPVAng1rECOJPHlpeZj0DK5eOJWEduSseR4",
                                city: "Medellín",
                                assessment: 5
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 10,
                    info: "usePressNot",
                    title: "¿Deseas incluir un plan nutricional en tu proceso de recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 11,
                    info: '',
                    title: "¿Vas a necesitar transporte?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 12,
                    info: "",
                    title: "Seleccione chofer y vehículo de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'ChoferQuestion',
                    placeholder: "Seleccione Transporte",
                    response: {
                        transport: [
                            {
                                choferName: "Luis Duran",
                                choferAvatar: "https://i.picsum.photos/id/156/300/300.jpg?hmac=rGLAWZy_0JcFB5YMaO_wu9TChlrg9K6UqlSCCWbVa_Y",
                                carChoferModel: "Chevrolet Cruze",
                                carChoferImg: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/cruze-premier-5-e1565908395458.jpg?resize=650,433",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Carlos Marín",
                                choferAvatar: "https://i.picsum.photos/id/1076/300/300.jpg?hmac=Nyv9lBi6xcTR9iOySfgGlf24hAYdDRaHQ7nJQim1naA",
                                carChoferModel: "Nissan Sentra",
                                carChoferImg: "https://www.thedrive.com/content/2021/03/73572C33-7C8E-4895-9267-473FA35D488F_1_201_a-scaled.jpeg?quality=85&auto=webp&optimize=high&quality=70&width=2018",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Paula Muñoz",
                                choferAvatar: "https://i.picsum.photos/id/700/300/300.jpg?hmac=nAc9k92vOFl8i6K84MMZgC_uwyhaIydCz34BEY8O0Ps",
                                carChoferModel: "Hyundai Elactra",
                                carChoferImg: "https://www.samarins.com/reviews/img/hyundai-elantra-2014.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marian Mora",
                                choferAvatar: "https://i.picsum.photos/id/46/300/300.jpg?hmac=d0_MNL7cjS7tre8_kfeiCGuF_l8Fz6qcD6k2lOB73EU",
                                carChoferModel: "Tesla Model X",
                                carChoferImg: "https://i.pinimg.com/originals/e4/c2/3d/e4c23db7eaf2f902568b9c596ba955ab.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Mario Mena",
                                choferAvatar: "https://i.picsum.photos/id/101/300/300.jpg?hmac=otCBSyFuH-eJf1aGys81tPdEqAXy0zxvMT81fYTv4C8",
                                carChoferModel: "BMW",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2019/12/12171546/IMG_5383.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Melisa Rivero",
                                choferAvatar: "https://i.picsum.photos/id/497/300/300.jpg?hmac=dtw7nGJRHPRmarbydsHN2XR_rN784bu4R-Wrfj3tY6E",
                                carChoferModel: "Hyundai",
                                carChoferImg: "https://www.manualesdetodo.net/wp-content/uploads/2020/10/2014-accent-hyundai-u.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Lucas Ferrer",
                                choferAvatar: "https://i.picsum.photos/id/42/300/300.jpg?hmac=4m-5oL1k_PEXemEhSsagOlAeKjwF-hha0yC6B_T9-9o",
                                carChoferModel: "Toyota Corolla",
                                carChoferImg: "https://i.pinimg.com/originals/aa/82/89/aa828991f7df5441863c38a0a7198894.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marta Toro",
                                choferAvatar: "https://i.picsum.photos/id/53/300/300.jpg?hmac=YAuaha56Qqkoz5v03NRQhB0hPeVomxdGzpBTpSkUkNE",
                                carChoferModel: "Mercedes",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/06/17115300/20C0257_020.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Camilo Navarro",
                                choferAvatar: "https://i.picsum.photos/id/276/300/300.jpg?hmac=9ojBAYusSkbkLhQc8rr9BMIwXHSNSkBfQM2g1V9KaVk",
                                carChoferModel: "Chevrolet",
                                carChoferImg: "https://mattmakes.org/wp-content/uploads/2020/12/redesign-and-review-chevrolet-malibu-2020-price.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 13,
                    info: 'usePressNot',
                    title: "¿Deseas incluir una Sim Card?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 14,
                    info: '',
                    title: "¿Deseas incluir un tour antes o después de tu operación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 15,
                    info: "",
                    title: "¿Para donde deseas ir?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'TourQuestion',
                    placeholder: "Seleccione Lugar",
                    response: {
                        tours: [
                            {
                                id: "Tour 1",
                                city: "Santa Marta",
                                tour: "Parque Nacional Tairona",
                                img: "https://travelgrafia.co/wp-content/uploads/2019/05/playas-cerca-a-santa-marta.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 2",
                                city: "Cartagena",
                                tour: "Ciudad Amurallada",
                                img: "https://images.squarespace-cdn.com/content/v1/5785d42ee58c62418fa80880/1544049396811-HVMJTV64MNNVZP1DQLO4/DSC01610.jpg?format=500w",
                                assessment: 5
                            },
                            {
                                id: "Tour 3",
                                city: "La Guajira",
                                tour: "Desiertos",
                                img: "https://i.pinimg.com/564x/3b/9f/82/3b9f82d82b028773ffb3dbb9d9412b1c.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 4",
                                city: "La Macarena - Meta",
                                tour: "Caño Cristales",
                                img: "https://www.infobae.com/new-resizer/wAD9R8Fg6zOTYJP3yqLPMAgLTfE=/1440x1440/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/11111513/Ca%C3%B1o-cristales.jpg",
                                assessment: 3
                            },
                            {
                                id: "Tour 5",
                                city: "Guatapé",
                                tour: "Piedra del Peñol",
                                img: "https://i.pinimg.com/564x/22/02/b5/2202b5487a9be7fd995082148ca3126b.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 6",
                                city: "Boyacá",
                                tour: "El Cocuy",
                                img: "https://live.staticflickr.com/7322/9397648854_b5dad7fe3e_h.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 7",
                                city: "Salento",
                                tour: "Valle de Cocura",
                                img: "https://funlifecrisis.com/wp-content/uploads/2018/11/valle-do-cocura-hike-salento-colombia.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 8",
                                city: "San Andrés",
                                tour: "Islas de San Andrés",
                                img: "https://i.pinimg.com/originals/7d/c7/d8/7dc7d89feef93681fd6639d6b5256cbf.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 9",
                                city: "El Chocó",
                                tour: "Capurganá",
                                img: "https://i.pinimg.com/564x/72/a1/9c/72a19c91ac194cf86ac111e381beb857.jpg",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 16,
                    info: "",
                    title: "Seleccione fechas del tour",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 17,
                    info: "",
                    title: "Agenda tu cita de valoración virtual para la cirugía",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 18,
                    info: "",
                    title: "¡Ya casi terminamos! Sólo queda agendar la fecha de tu vuelo",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 19,
                    info: "",
                    title: "Listo!!",
                    useInput: false,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente",
                        button3: "Finalizar"
                    }
                }
            ]
        },
        //Cirugia de senos - mamaria, Reducción Mamaria
        {
            procedure: "Cirugia de senos - mamaria, Reducción Mamaria",
            idProcedure: 3,
            questions: [
                {
                    idQuestion: 1,
                    info: "",
                    title: "¿Qué edad tienes -  Cirugia de senos - mamaria, Reducción Mamaria?",
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
                    idQuestion: 2,
                    info: "",
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
                    idQuestion: 3,
                    info: "",
                    title: "¿Qué talla de brasier eres",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 5,
                    info: "",
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
                    idQuestion: 6,
                    info: "",
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
                    idQuestion: 7,
                    info: "",
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
                                Medellín: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Barranquilla: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Cali: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - C",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - C",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - C",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - C",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - C",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - C",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Bogotá: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
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
                    idQuestion: 8,
                    info: "",
                    title: "¿Desea incluir Enfermera en su recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 9,
                    info: "",
                    title: "Seleccione la Enfermera de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'NurseQuestion',
                    placeholder: "Elija Enfermera",
                    response: {
                        nurse: [
                            {
                                name: "Marian Restrepo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/758/300/300.jpg?hmac=JdmQPsV_vTdIhWzwEIHhcmA5tmuC_DOHB6O5PUVualQ",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Antonia Rodriguez",
                                experience: "8 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/536/300/300.jpg?hmac=jc8wwzhIRp8-aFORQGaxnHycNfXcprvPX0oKawN4-C0",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Susana Ruíz",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Paola Gomez",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Ana Marín",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/984/300/300.jpg?hmac=nNJwsEJribYLYZT-XI2HF5Ovd6jFrSzzkfpkoYj_zao",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Laura Cardona",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/516/300/300.jpg?hmac=rjKkPPkY2QLwGN8JBF5Af6y910lX5PaPaXpqbxr1-IU",
                                city: "Medellín",
                                assessment: 3
                            },
                            {
                                name: "Carolina Herrera",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/45/300/300.jpg?hmac=4xBaRob30OZKvORvIar-A2GqUCvsEac5ve4nrWuzn0w",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Luisa Acosta",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/62/300/300.jpg?hmac=JkaOmZr8So-hvPO3Mya00sE2pvIQtLZjGMldqbPFiqc",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Marta Giraldo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/421/300/300.jpg?hmac=7vF4ivvohPVAng1rECOJPHlpeZj0DK5eOJWEduSseR4",
                                city: "Medellín",
                                assessment: 5
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 10,
                    info: "usePressNot",
                    title: "¿Deseas incluir un plan nutricional en tu proceso de recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 11,
                    info: '',
                    title: "¿Vas a necesitar transporte?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 12,
                    info: "",
                    title: "Seleccione chofer y vehículo de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'ChoferQuestion',
                    placeholder: "Seleccione Transporte",
                    response: {
                        transport: [
                            {
                                choferName: "Luis Duran",
                                choferAvatar: "https://i.picsum.photos/id/156/300/300.jpg?hmac=rGLAWZy_0JcFB5YMaO_wu9TChlrg9K6UqlSCCWbVa_Y",
                                carChoferModel: "Chevrolet Cruze",
                                carChoferImg: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/cruze-premier-5-e1565908395458.jpg?resize=650,433",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Carlos Marín",
                                choferAvatar: "https://i.picsum.photos/id/1076/300/300.jpg?hmac=Nyv9lBi6xcTR9iOySfgGlf24hAYdDRaHQ7nJQim1naA",
                                carChoferModel: "Nissan Sentra",
                                carChoferImg: "https://www.thedrive.com/content/2021/03/73572C33-7C8E-4895-9267-473FA35D488F_1_201_a-scaled.jpeg?quality=85&auto=webp&optimize=high&quality=70&width=2018",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Paula Muñoz",
                                choferAvatar: "https://i.picsum.photos/id/700/300/300.jpg?hmac=nAc9k92vOFl8i6K84MMZgC_uwyhaIydCz34BEY8O0Ps",
                                carChoferModel: "Hyundai Elactra",
                                carChoferImg: "https://www.samarins.com/reviews/img/hyundai-elantra-2014.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marian Mora",
                                choferAvatar: "https://i.picsum.photos/id/46/300/300.jpg?hmac=d0_MNL7cjS7tre8_kfeiCGuF_l8Fz6qcD6k2lOB73EU",
                                carChoferModel: "Tesla Model X",
                                carChoferImg: "https://i.pinimg.com/originals/e4/c2/3d/e4c23db7eaf2f902568b9c596ba955ab.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Mario Mena",
                                choferAvatar: "https://i.picsum.photos/id/101/300/300.jpg?hmac=otCBSyFuH-eJf1aGys81tPdEqAXy0zxvMT81fYTv4C8",
                                carChoferModel: "BMW",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2019/12/12171546/IMG_5383.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Melisa Rivero",
                                choferAvatar: "https://i.picsum.photos/id/497/300/300.jpg?hmac=dtw7nGJRHPRmarbydsHN2XR_rN784bu4R-Wrfj3tY6E",
                                carChoferModel: "Hyundai",
                                carChoferImg: "https://www.manualesdetodo.net/wp-content/uploads/2020/10/2014-accent-hyundai-u.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Lucas Ferrer",
                                choferAvatar: "https://i.picsum.photos/id/42/300/300.jpg?hmac=4m-5oL1k_PEXemEhSsagOlAeKjwF-hha0yC6B_T9-9o",
                                carChoferModel: "Toyota Corolla",
                                carChoferImg: "https://i.pinimg.com/originals/aa/82/89/aa828991f7df5441863c38a0a7198894.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marta Toro",
                                choferAvatar: "https://i.picsum.photos/id/53/300/300.jpg?hmac=YAuaha56Qqkoz5v03NRQhB0hPeVomxdGzpBTpSkUkNE",
                                carChoferModel: "Mercedes",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/06/17115300/20C0257_020.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Camilo Navarro",
                                choferAvatar: "https://i.picsum.photos/id/276/300/300.jpg?hmac=9ojBAYusSkbkLhQc8rr9BMIwXHSNSkBfQM2g1V9KaVk",
                                carChoferModel: "Chevrolet",
                                carChoferImg: "https://mattmakes.org/wp-content/uploads/2020/12/redesign-and-review-chevrolet-malibu-2020-price.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 13,
                    info: 'usePressNot',
                    title: "¿Deseas incluir una Sim Card?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 14,
                    info: '',
                    title: "¿Deseas incluir un tour antes o después de tu operación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 15,
                    info: "",
                    title: "¿Para donde deseas ir?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'TourQuestion',
                    placeholder: "Seleccione Lugar",
                    response: {
                        tours: [
                            {
                                id: "Tour 1",
                                city: "Santa Marta",
                                tour: "Parque Nacional Tairona",
                                img: "https://travelgrafia.co/wp-content/uploads/2019/05/playas-cerca-a-santa-marta.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 2",
                                city: "Cartagena",
                                tour: "Ciudad Amurallada",
                                img: "https://images.squarespace-cdn.com/content/v1/5785d42ee58c62418fa80880/1544049396811-HVMJTV64MNNVZP1DQLO4/DSC01610.jpg?format=500w",
                                assessment: 5
                            },
                            {
                                id: "Tour 3",
                                city: "La Guajira",
                                tour: "Desiertos",
                                img: "https://i.pinimg.com/564x/3b/9f/82/3b9f82d82b028773ffb3dbb9d9412b1c.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 4",
                                city: "La Macarena - Meta",
                                tour: "Caño Cristales",
                                img: "https://www.infobae.com/new-resizer/wAD9R8Fg6zOTYJP3yqLPMAgLTfE=/1440x1440/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/11111513/Ca%C3%B1o-cristales.jpg",
                                assessment: 3
                            },
                            {
                                id: "Tour 5",
                                city: "Guatapé",
                                tour: "Piedra del Peñol",
                                img: "https://i.pinimg.com/564x/22/02/b5/2202b5487a9be7fd995082148ca3126b.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 6",
                                city: "Boyacá",
                                tour: "El Cocuy",
                                img: "https://live.staticflickr.com/7322/9397648854_b5dad7fe3e_h.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 7",
                                city: "Salento",
                                tour: "Valle de Cocura",
                                img: "https://funlifecrisis.com/wp-content/uploads/2018/11/valle-do-cocura-hike-salento-colombia.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 8",
                                city: "San Andrés",
                                tour: "Islas de San Andrés",
                                img: "https://i.pinimg.com/originals/7d/c7/d8/7dc7d89feef93681fd6639d6b5256cbf.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 9",
                                city: "El Chocó",
                                tour: "Capurganá",
                                img: "https://i.pinimg.com/564x/72/a1/9c/72a19c91ac194cf86ac111e381beb857.jpg",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 16,
                    info: "",
                    title: "Seleccione fechas del tour",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 17,
                    info: "",
                    title: "Agenda tu cita de valoración virtual para la cirugía",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 18,
                    info: "",
                    title: "¡Ya casi terminamos! Sólo queda agendar la fecha de tu vuelo",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 19,
                    info: "",
                    title: "Listo!!",
                    useInput: false,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente",
                        button3: "Finalizar"
                    }
                }
            ]
        },
        //Estetica vaginal - Tensado Vaginal con Laser
        {
            procedure: "Estetica vaginal - Tensado Vaginal con Laser",
            idProcedure: 4,
            questions: [
                {
                    idQuestion: 1,
                    info: "",
                    title: "¿Qué edad tienes -  Estetica vaginal - Tensado Vaginal con Laser?",
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
                    idQuestion: 2,
                    info: "",
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
                    idQuestion: 3,
                    info: "",
                    title: "¿Qué talla de brasier eres",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 5,
                    info: "",
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
                    idQuestion: 6,
                    info: "",
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
                    idQuestion: 7,
                    info: "",
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
                                Medellín: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Barranquilla: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Cali: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - C",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - C",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - C",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - C",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - C",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - C",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Bogotá: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
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
                    idQuestion: 8,
                    info: "",
                    title: "¿Desea incluir Enfermera en su recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 9,
                    info: "",
                    title: "Seleccione la Enfermera de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'NurseQuestion',
                    placeholder: "Elija Enfermera",
                    response: {
                        nurse: [
                            {
                                name: "Marian Restrepo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/758/300/300.jpg?hmac=JdmQPsV_vTdIhWzwEIHhcmA5tmuC_DOHB6O5PUVualQ",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Antonia Rodriguez",
                                experience: "8 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/536/300/300.jpg?hmac=jc8wwzhIRp8-aFORQGaxnHycNfXcprvPX0oKawN4-C0",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Susana Ruíz",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Paola Gomez",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Ana Marín",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/984/300/300.jpg?hmac=nNJwsEJribYLYZT-XI2HF5Ovd6jFrSzzkfpkoYj_zao",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Laura Cardona",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/516/300/300.jpg?hmac=rjKkPPkY2QLwGN8JBF5Af6y910lX5PaPaXpqbxr1-IU",
                                city: "Medellín",
                                assessment: 3
                            },
                            {
                                name: "Carolina Herrera",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/45/300/300.jpg?hmac=4xBaRob30OZKvORvIar-A2GqUCvsEac5ve4nrWuzn0w",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Luisa Acosta",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/62/300/300.jpg?hmac=JkaOmZr8So-hvPO3Mya00sE2pvIQtLZjGMldqbPFiqc",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Marta Giraldo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/421/300/300.jpg?hmac=7vF4ivvohPVAng1rECOJPHlpeZj0DK5eOJWEduSseR4",
                                city: "Medellín",
                                assessment: 5
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 10,
                    info: "usePressNot",
                    title: "¿Deseas incluir un plan nutricional en tu proceso de recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 11,
                    info: '',
                    title: "¿Vas a necesitar transporte?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 12,
                    info: "",
                    title: "Seleccione chofer y vehículo de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'ChoferQuestion',
                    placeholder: "Seleccione Transporte",
                    response: {
                        transport: [
                            {
                                choferName: "Luis Duran",
                                choferAvatar: "https://i.picsum.photos/id/156/300/300.jpg?hmac=rGLAWZy_0JcFB5YMaO_wu9TChlrg9K6UqlSCCWbVa_Y",
                                carChoferModel: "Chevrolet Cruze",
                                carChoferImg: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/cruze-premier-5-e1565908395458.jpg?resize=650,433",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Carlos Marín",
                                choferAvatar: "https://i.picsum.photos/id/1076/300/300.jpg?hmac=Nyv9lBi6xcTR9iOySfgGlf24hAYdDRaHQ7nJQim1naA",
                                carChoferModel: "Nissan Sentra",
                                carChoferImg: "https://www.thedrive.com/content/2021/03/73572C33-7C8E-4895-9267-473FA35D488F_1_201_a-scaled.jpeg?quality=85&auto=webp&optimize=high&quality=70&width=2018",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Paula Muñoz",
                                choferAvatar: "https://i.picsum.photos/id/700/300/300.jpg?hmac=nAc9k92vOFl8i6K84MMZgC_uwyhaIydCz34BEY8O0Ps",
                                carChoferModel: "Hyundai Elactra",
                                carChoferImg: "https://www.samarins.com/reviews/img/hyundai-elantra-2014.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marian Mora",
                                choferAvatar: "https://i.picsum.photos/id/46/300/300.jpg?hmac=d0_MNL7cjS7tre8_kfeiCGuF_l8Fz6qcD6k2lOB73EU",
                                carChoferModel: "Tesla Model X",
                                carChoferImg: "https://i.pinimg.com/originals/e4/c2/3d/e4c23db7eaf2f902568b9c596ba955ab.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Mario Mena",
                                choferAvatar: "https://i.picsum.photos/id/101/300/300.jpg?hmac=otCBSyFuH-eJf1aGys81tPdEqAXy0zxvMT81fYTv4C8",
                                carChoferModel: "BMW",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2019/12/12171546/IMG_5383.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Melisa Rivero",
                                choferAvatar: "https://i.picsum.photos/id/497/300/300.jpg?hmac=dtw7nGJRHPRmarbydsHN2XR_rN784bu4R-Wrfj3tY6E",
                                carChoferModel: "Hyundai",
                                carChoferImg: "https://www.manualesdetodo.net/wp-content/uploads/2020/10/2014-accent-hyundai-u.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Lucas Ferrer",
                                choferAvatar: "https://i.picsum.photos/id/42/300/300.jpg?hmac=4m-5oL1k_PEXemEhSsagOlAeKjwF-hha0yC6B_T9-9o",
                                carChoferModel: "Toyota Corolla",
                                carChoferImg: "https://i.pinimg.com/originals/aa/82/89/aa828991f7df5441863c38a0a7198894.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marta Toro",
                                choferAvatar: "https://i.picsum.photos/id/53/300/300.jpg?hmac=YAuaha56Qqkoz5v03NRQhB0hPeVomxdGzpBTpSkUkNE",
                                carChoferModel: "Mercedes",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/06/17115300/20C0257_020.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Camilo Navarro",
                                choferAvatar: "https://i.picsum.photos/id/276/300/300.jpg?hmac=9ojBAYusSkbkLhQc8rr9BMIwXHSNSkBfQM2g1V9KaVk",
                                carChoferModel: "Chevrolet",
                                carChoferImg: "https://mattmakes.org/wp-content/uploads/2020/12/redesign-and-review-chevrolet-malibu-2020-price.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 13,
                    info: 'usePressNot',
                    title: "¿Deseas incluir una Sim Card?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 14,
                    info: '',
                    title: "¿Deseas incluir un tour antes o después de tu operación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 15,
                    info: "",
                    title: "¿Para donde deseas ir?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'TourQuestion',
                    placeholder: "Seleccione Lugar",
                    response: {
                        tours: [
                            {
                                id: "Tour 1",
                                city: "Santa Marta",
                                tour: "Parque Nacional Tairona",
                                img: "https://travelgrafia.co/wp-content/uploads/2019/05/playas-cerca-a-santa-marta.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 2",
                                city: "Cartagena",
                                tour: "Ciudad Amurallada",
                                img: "https://images.squarespace-cdn.com/content/v1/5785d42ee58c62418fa80880/1544049396811-HVMJTV64MNNVZP1DQLO4/DSC01610.jpg?format=500w",
                                assessment: 5
                            },
                            {
                                id: "Tour 3",
                                city: "La Guajira",
                                tour: "Desiertos",
                                img: "https://i.pinimg.com/564x/3b/9f/82/3b9f82d82b028773ffb3dbb9d9412b1c.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 4",
                                city: "La Macarena - Meta",
                                tour: "Caño Cristales",
                                img: "https://www.infobae.com/new-resizer/wAD9R8Fg6zOTYJP3yqLPMAgLTfE=/1440x1440/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/11111513/Ca%C3%B1o-cristales.jpg",
                                assessment: 3
                            },
                            {
                                id: "Tour 5",
                                city: "Guatapé",
                                tour: "Piedra del Peñol",
                                img: "https://i.pinimg.com/564x/22/02/b5/2202b5487a9be7fd995082148ca3126b.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 6",
                                city: "Boyacá",
                                tour: "El Cocuy",
                                img: "https://live.staticflickr.com/7322/9397648854_b5dad7fe3e_h.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 7",
                                city: "Salento",
                                tour: "Valle de Cocura",
                                img: "https://funlifecrisis.com/wp-content/uploads/2018/11/valle-do-cocura-hike-salento-colombia.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 8",
                                city: "San Andrés",
                                tour: "Islas de San Andrés",
                                img: "https://i.pinimg.com/originals/7d/c7/d8/7dc7d89feef93681fd6639d6b5256cbf.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 9",
                                city: "El Chocó",
                                tour: "Capurganá",
                                img: "https://i.pinimg.com/564x/72/a1/9c/72a19c91ac194cf86ac111e381beb857.jpg",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 16,
                    info: "",
                    title: "Seleccione fechas del tour",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 17,
                    info: "",
                    title: "Agenda tu cita de valoración virtual para la cirugía",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 18,
                    info: "",
                    title: "¡Ya casi terminamos! Sólo queda agendar la fecha de tu vuelo",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 19,
                    info: "",
                    title: "Listo!!",
                    useInput: false,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente",
                        button3: "Finalizar"
                    }
                }
            ]
        },
        //cirugia corporal - gluteoplastia
        {
            procedure: "cirugia corporal - gluteoplastia",
            idProcedure: 5,
            questions: [
                {
                    idQuestion: 1,
                    info: "",
                    title: "¿Qué edad tienes -  cirugia corporal - gluteoplastia?",
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
                    idQuestion: 2,
                    info: "",
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
                    idQuestion: 3,
                    info: "",
                    title: "¿Qué talla de brasier eres",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 5,
                    info: "",
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
                    idQuestion: 6,
                    info: "",
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
                    idQuestion: 7,
                    info: "",
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
                                Medellín: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Barranquilla: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Cali: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - C",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - C",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - C",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - C",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - C",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - C",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Bogotá: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
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
                    idQuestion: 8,
                    info: "",
                    title: "¿Desea incluir Enfermera en su recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 9,
                    info: "",
                    title: "Seleccione la Enfermera de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'NurseQuestion',
                    placeholder: "Elija Enfermera",
                    response: {
                        nurse: [
                            {
                                name: "Marian Restrepo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/758/300/300.jpg?hmac=JdmQPsV_vTdIhWzwEIHhcmA5tmuC_DOHB6O5PUVualQ",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Antonia Rodriguez",
                                experience: "8 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/536/300/300.jpg?hmac=jc8wwzhIRp8-aFORQGaxnHycNfXcprvPX0oKawN4-C0",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Susana Ruíz",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Paola Gomez",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Ana Marín",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/984/300/300.jpg?hmac=nNJwsEJribYLYZT-XI2HF5Ovd6jFrSzzkfpkoYj_zao",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Laura Cardona",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/516/300/300.jpg?hmac=rjKkPPkY2QLwGN8JBF5Af6y910lX5PaPaXpqbxr1-IU",
                                city: "Medellín",
                                assessment: 3
                            },
                            {
                                name: "Carolina Herrera",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/45/300/300.jpg?hmac=4xBaRob30OZKvORvIar-A2GqUCvsEac5ve4nrWuzn0w",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Luisa Acosta",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/62/300/300.jpg?hmac=JkaOmZr8So-hvPO3Mya00sE2pvIQtLZjGMldqbPFiqc",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Marta Giraldo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/421/300/300.jpg?hmac=7vF4ivvohPVAng1rECOJPHlpeZj0DK5eOJWEduSseR4",
                                city: "Medellín",
                                assessment: 5
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 10,
                    info: "usePressNot",
                    title: "¿Deseas incluir un plan nutricional en tu proceso de recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 11,
                    info: '',
                    title: "¿Vas a necesitar transporte?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 12,
                    info: "",
                    title: "Seleccione chofer y vehículo de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'ChoferQuestion',
                    placeholder: "Seleccione Transporte",
                    response: {
                        transport: [
                            {
                                choferName: "Luis Duran",
                                choferAvatar: "https://i.picsum.photos/id/156/300/300.jpg?hmac=rGLAWZy_0JcFB5YMaO_wu9TChlrg9K6UqlSCCWbVa_Y",
                                carChoferModel: "Chevrolet Cruze",
                                carChoferImg: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/cruze-premier-5-e1565908395458.jpg?resize=650,433",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Carlos Marín",
                                choferAvatar: "https://i.picsum.photos/id/1076/300/300.jpg?hmac=Nyv9lBi6xcTR9iOySfgGlf24hAYdDRaHQ7nJQim1naA",
                                carChoferModel: "Nissan Sentra",
                                carChoferImg: "https://www.thedrive.com/content/2021/03/73572C33-7C8E-4895-9267-473FA35D488F_1_201_a-scaled.jpeg?quality=85&auto=webp&optimize=high&quality=70&width=2018",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Paula Muñoz",
                                choferAvatar: "https://i.picsum.photos/id/700/300/300.jpg?hmac=nAc9k92vOFl8i6K84MMZgC_uwyhaIydCz34BEY8O0Ps",
                                carChoferModel: "Hyundai Elactra",
                                carChoferImg: "https://www.samarins.com/reviews/img/hyundai-elantra-2014.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marian Mora",
                                choferAvatar: "https://i.picsum.photos/id/46/300/300.jpg?hmac=d0_MNL7cjS7tre8_kfeiCGuF_l8Fz6qcD6k2lOB73EU",
                                carChoferModel: "Tesla Model X",
                                carChoferImg: "https://i.pinimg.com/originals/e4/c2/3d/e4c23db7eaf2f902568b9c596ba955ab.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Mario Mena",
                                choferAvatar: "https://i.picsum.photos/id/101/300/300.jpg?hmac=otCBSyFuH-eJf1aGys81tPdEqAXy0zxvMT81fYTv4C8",
                                carChoferModel: "BMW",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2019/12/12171546/IMG_5383.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Melisa Rivero",
                                choferAvatar: "https://i.picsum.photos/id/497/300/300.jpg?hmac=dtw7nGJRHPRmarbydsHN2XR_rN784bu4R-Wrfj3tY6E",
                                carChoferModel: "Hyundai",
                                carChoferImg: "https://www.manualesdetodo.net/wp-content/uploads/2020/10/2014-accent-hyundai-u.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Lucas Ferrer",
                                choferAvatar: "https://i.picsum.photos/id/42/300/300.jpg?hmac=4m-5oL1k_PEXemEhSsagOlAeKjwF-hha0yC6B_T9-9o",
                                carChoferModel: "Toyota Corolla",
                                carChoferImg: "https://i.pinimg.com/originals/aa/82/89/aa828991f7df5441863c38a0a7198894.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marta Toro",
                                choferAvatar: "https://i.picsum.photos/id/53/300/300.jpg?hmac=YAuaha56Qqkoz5v03NRQhB0hPeVomxdGzpBTpSkUkNE",
                                carChoferModel: "Mercedes",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/06/17115300/20C0257_020.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Camilo Navarro",
                                choferAvatar: "https://i.picsum.photos/id/276/300/300.jpg?hmac=9ojBAYusSkbkLhQc8rr9BMIwXHSNSkBfQM2g1V9KaVk",
                                carChoferModel: "Chevrolet",
                                carChoferImg: "https://mattmakes.org/wp-content/uploads/2020/12/redesign-and-review-chevrolet-malibu-2020-price.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 13,
                    info: 'usePressNot',
                    title: "¿Deseas incluir una Sim Card?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 14,
                    info: '',
                    title: "¿Deseas incluir un tour antes o después de tu operación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 15,
                    info: "",
                    title: "¿Para donde deseas ir?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'TourQuestion',
                    placeholder: "Seleccione Lugar",
                    response: {
                        tours: [
                            {
                                id: "Tour 1",
                                city: "Santa Marta",
                                tour: "Parque Nacional Tairona",
                                img: "https://travelgrafia.co/wp-content/uploads/2019/05/playas-cerca-a-santa-marta.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 2",
                                city: "Cartagena",
                                tour: "Ciudad Amurallada",
                                img: "https://images.squarespace-cdn.com/content/v1/5785d42ee58c62418fa80880/1544049396811-HVMJTV64MNNVZP1DQLO4/DSC01610.jpg?format=500w",
                                assessment: 5
                            },
                            {
                                id: "Tour 3",
                                city: "La Guajira",
                                tour: "Desiertos",
                                img: "https://i.pinimg.com/564x/3b/9f/82/3b9f82d82b028773ffb3dbb9d9412b1c.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 4",
                                city: "La Macarena - Meta",
                                tour: "Caño Cristales",
                                img: "https://www.infobae.com/new-resizer/wAD9R8Fg6zOTYJP3yqLPMAgLTfE=/1440x1440/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/11111513/Ca%C3%B1o-cristales.jpg",
                                assessment: 3
                            },
                            {
                                id: "Tour 5",
                                city: "Guatapé",
                                tour: "Piedra del Peñol",
                                img: "https://i.pinimg.com/564x/22/02/b5/2202b5487a9be7fd995082148ca3126b.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 6",
                                city: "Boyacá",
                                tour: "El Cocuy",
                                img: "https://live.staticflickr.com/7322/9397648854_b5dad7fe3e_h.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 7",
                                city: "Salento",
                                tour: "Valle de Cocura",
                                img: "https://funlifecrisis.com/wp-content/uploads/2018/11/valle-do-cocura-hike-salento-colombia.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 8",
                                city: "San Andrés",
                                tour: "Islas de San Andrés",
                                img: "https://i.pinimg.com/originals/7d/c7/d8/7dc7d89feef93681fd6639d6b5256cbf.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 9",
                                city: "El Chocó",
                                tour: "Capurganá",
                                img: "https://i.pinimg.com/564x/72/a1/9c/72a19c91ac194cf86ac111e381beb857.jpg",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 16,
                    info: "",
                    title: "Seleccione fechas del tour",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 17,
                    info: "",
                    title: "Agenda tu cita de valoración virtual para la cirugía",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 18,
                    info: "",
                    title: "¡Ya casi terminamos! Sólo queda agendar la fecha de tu vuelo",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 19,
                    info: "",
                    title: "Listo!!",
                    useInput: false,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente",
                        button3: "Finalizar"
                    }
                }
            ]
        },
        //cirugia corporal - Lipoabdominoplastia
        {
            procedure: "cirugia corporal - Lipoabdominoplastia",
            idProcedure: 6,
            questions: [
                {
                    idQuestion: 1,
                    info: "",
                    title: "¿Qué edad tienes -  cirugia corporal - Lipoabdominoplastia?",
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
                    idQuestion: 2,
                    info: "",
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
                    idQuestion: 3,
                    info: "",
                    title: "¿Qué talla de brasier eres",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 5,
                    info: "",
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
                    idQuestion: 6,
                    info: "",
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
                    idQuestion: 7,
                    info: "",
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
                                Medellín: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Barranquilla: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Cali: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - C",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - C",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - C",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - C",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - C",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - C",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Bogotá: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
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
                    idQuestion: 8,
                    info: "",
                    title: "¿Desea incluir Enfermera en su recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 9,
                    info: "",
                    title: "Seleccione la Enfermera de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'NurseQuestion',
                    placeholder: "Elija Enfermera",
                    response: {
                        nurse: [
                            {
                                name: "Marian Restrepo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/758/300/300.jpg?hmac=JdmQPsV_vTdIhWzwEIHhcmA5tmuC_DOHB6O5PUVualQ",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Antonia Rodriguez",
                                experience: "8 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/536/300/300.jpg?hmac=jc8wwzhIRp8-aFORQGaxnHycNfXcprvPX0oKawN4-C0",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Susana Ruíz",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Paola Gomez",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Ana Marín",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/984/300/300.jpg?hmac=nNJwsEJribYLYZT-XI2HF5Ovd6jFrSzzkfpkoYj_zao",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Laura Cardona",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/516/300/300.jpg?hmac=rjKkPPkY2QLwGN8JBF5Af6y910lX5PaPaXpqbxr1-IU",
                                city: "Medellín",
                                assessment: 3
                            },
                            {
                                name: "Carolina Herrera",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/45/300/300.jpg?hmac=4xBaRob30OZKvORvIar-A2GqUCvsEac5ve4nrWuzn0w",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Luisa Acosta",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/62/300/300.jpg?hmac=JkaOmZr8So-hvPO3Mya00sE2pvIQtLZjGMldqbPFiqc",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Marta Giraldo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/421/300/300.jpg?hmac=7vF4ivvohPVAng1rECOJPHlpeZj0DK5eOJWEduSseR4",
                                city: "Medellín",
                                assessment: 5
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 10,
                    info: "usePressNot",
                    title: "¿Deseas incluir un plan nutricional en tu proceso de recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 11,
                    info: '',
                    title: "¿Vas a necesitar transporte?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 12,
                    info: "",
                    title: "Seleccione chofer y vehículo de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'ChoferQuestion',
                    placeholder: "Seleccione Transporte",
                    response: {
                        transport: [
                            {
                                choferName: "Luis Duran",
                                choferAvatar: "https://i.picsum.photos/id/156/300/300.jpg?hmac=rGLAWZy_0JcFB5YMaO_wu9TChlrg9K6UqlSCCWbVa_Y",
                                carChoferModel: "Chevrolet Cruze",
                                carChoferImg: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/cruze-premier-5-e1565908395458.jpg?resize=650,433",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Carlos Marín",
                                choferAvatar: "https://i.picsum.photos/id/1076/300/300.jpg?hmac=Nyv9lBi6xcTR9iOySfgGlf24hAYdDRaHQ7nJQim1naA",
                                carChoferModel: "Nissan Sentra",
                                carChoferImg: "https://www.thedrive.com/content/2021/03/73572C33-7C8E-4895-9267-473FA35D488F_1_201_a-scaled.jpeg?quality=85&auto=webp&optimize=high&quality=70&width=2018",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Paula Muñoz",
                                choferAvatar: "https://i.picsum.photos/id/700/300/300.jpg?hmac=nAc9k92vOFl8i6K84MMZgC_uwyhaIydCz34BEY8O0Ps",
                                carChoferModel: "Hyundai Elactra",
                                carChoferImg: "https://www.samarins.com/reviews/img/hyundai-elantra-2014.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marian Mora",
                                choferAvatar: "https://i.picsum.photos/id/46/300/300.jpg?hmac=d0_MNL7cjS7tre8_kfeiCGuF_l8Fz6qcD6k2lOB73EU",
                                carChoferModel: "Tesla Model X",
                                carChoferImg: "https://i.pinimg.com/originals/e4/c2/3d/e4c23db7eaf2f902568b9c596ba955ab.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Mario Mena",
                                choferAvatar: "https://i.picsum.photos/id/101/300/300.jpg?hmac=otCBSyFuH-eJf1aGys81tPdEqAXy0zxvMT81fYTv4C8",
                                carChoferModel: "BMW",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2019/12/12171546/IMG_5383.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Melisa Rivero",
                                choferAvatar: "https://i.picsum.photos/id/497/300/300.jpg?hmac=dtw7nGJRHPRmarbydsHN2XR_rN784bu4R-Wrfj3tY6E",
                                carChoferModel: "Hyundai",
                                carChoferImg: "https://www.manualesdetodo.net/wp-content/uploads/2020/10/2014-accent-hyundai-u.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Lucas Ferrer",
                                choferAvatar: "https://i.picsum.photos/id/42/300/300.jpg?hmac=4m-5oL1k_PEXemEhSsagOlAeKjwF-hha0yC6B_T9-9o",
                                carChoferModel: "Toyota Corolla",
                                carChoferImg: "https://i.pinimg.com/originals/aa/82/89/aa828991f7df5441863c38a0a7198894.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marta Toro",
                                choferAvatar: "https://i.picsum.photos/id/53/300/300.jpg?hmac=YAuaha56Qqkoz5v03NRQhB0hPeVomxdGzpBTpSkUkNE",
                                carChoferModel: "Mercedes",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/06/17115300/20C0257_020.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Camilo Navarro",
                                choferAvatar: "https://i.picsum.photos/id/276/300/300.jpg?hmac=9ojBAYusSkbkLhQc8rr9BMIwXHSNSkBfQM2g1V9KaVk",
                                carChoferModel: "Chevrolet",
                                carChoferImg: "https://mattmakes.org/wp-content/uploads/2020/12/redesign-and-review-chevrolet-malibu-2020-price.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 13,
                    info: 'usePressNot',
                    title: "¿Deseas incluir una Sim Card?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 14,
                    info: '',
                    title: "¿Deseas incluir un tour antes o después de tu operación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 15,
                    info: "",
                    title: "¿Para donde deseas ir?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'TourQuestion',
                    placeholder: "Seleccione Lugar",
                    response: {
                        tours: [
                            {
                                id: "Tour 1",
                                city: "Santa Marta",
                                tour: "Parque Nacional Tairona",
                                img: "https://travelgrafia.co/wp-content/uploads/2019/05/playas-cerca-a-santa-marta.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 2",
                                city: "Cartagena",
                                tour: "Ciudad Amurallada",
                                img: "https://images.squarespace-cdn.com/content/v1/5785d42ee58c62418fa80880/1544049396811-HVMJTV64MNNVZP1DQLO4/DSC01610.jpg?format=500w",
                                assessment: 5
                            },
                            {
                                id: "Tour 3",
                                city: "La Guajira",
                                tour: "Desiertos",
                                img: "https://i.pinimg.com/564x/3b/9f/82/3b9f82d82b028773ffb3dbb9d9412b1c.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 4",
                                city: "La Macarena - Meta",
                                tour: "Caño Cristales",
                                img: "https://www.infobae.com/new-resizer/wAD9R8Fg6zOTYJP3yqLPMAgLTfE=/1440x1440/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/11111513/Ca%C3%B1o-cristales.jpg",
                                assessment: 3
                            },
                            {
                                id: "Tour 5",
                                city: "Guatapé",
                                tour: "Piedra del Peñol",
                                img: "https://i.pinimg.com/564x/22/02/b5/2202b5487a9be7fd995082148ca3126b.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 6",
                                city: "Boyacá",
                                tour: "El Cocuy",
                                img: "https://live.staticflickr.com/7322/9397648854_b5dad7fe3e_h.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 7",
                                city: "Salento",
                                tour: "Valle de Cocura",
                                img: "https://funlifecrisis.com/wp-content/uploads/2018/11/valle-do-cocura-hike-salento-colombia.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 8",
                                city: "San Andrés",
                                tour: "Islas de San Andrés",
                                img: "https://i.pinimg.com/originals/7d/c7/d8/7dc7d89feef93681fd6639d6b5256cbf.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 9",
                                city: "El Chocó",
                                tour: "Capurganá",
                                img: "https://i.pinimg.com/564x/72/a1/9c/72a19c91ac194cf86ac111e381beb857.jpg",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 16,
                    info: "",
                    title: "Seleccione fechas del tour",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 17,
                    info: "",
                    title: "Agenda tu cita de valoración virtual para la cirugía",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 18,
                    info: "",
                    title: "¡Ya casi terminamos! Sólo queda agendar la fecha de tu vuelo",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 19,
                    info: "",
                    title: "Listo!!",
                    useInput: false,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente",
                        button3: "Finalizar"
                    }
                }
            ]
        },
        //cirugia corporal - lipomarcacion
        {
            procedure: "cirugia corporal - lipomarcacion",
            idProcedure: 7,
            questions: [
                {
                    idQuestion: 1,
                    info: "",
                    title: "¿Qué edad tienes -  cirugia corporal - lipomarcacion?",
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
                    idQuestion: 2,
                    info: "",
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
                    idQuestion: 3,
                    info: "",
                    title: "¿Qué talla de brasier eres",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 5,
                    info: "",
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
                    idQuestion: 6,
                    info: "",
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
                    idQuestion: 7,
                    info: "",
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
                                Medellín: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Barranquilla: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Cali: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - C",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - C",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - C",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - C",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - C",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - C",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Bogotá: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
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
                    idQuestion: 8,
                    info: "",
                    title: "¿Desea incluir Enfermera en su recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 9,
                    info: "",
                    title: "Seleccione la Enfermera de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'NurseQuestion',
                    placeholder: "Elija Enfermera",
                    response: {
                        nurse: [
                            {
                                name: "Marian Restrepo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/758/300/300.jpg?hmac=JdmQPsV_vTdIhWzwEIHhcmA5tmuC_DOHB6O5PUVualQ",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Antonia Rodriguez",
                                experience: "8 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/536/300/300.jpg?hmac=jc8wwzhIRp8-aFORQGaxnHycNfXcprvPX0oKawN4-C0",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Susana Ruíz",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Paola Gomez",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Ana Marín",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/984/300/300.jpg?hmac=nNJwsEJribYLYZT-XI2HF5Ovd6jFrSzzkfpkoYj_zao",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Laura Cardona",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/516/300/300.jpg?hmac=rjKkPPkY2QLwGN8JBF5Af6y910lX5PaPaXpqbxr1-IU",
                                city: "Medellín",
                                assessment: 3
                            },
                            {
                                name: "Carolina Herrera",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/45/300/300.jpg?hmac=4xBaRob30OZKvORvIar-A2GqUCvsEac5ve4nrWuzn0w",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Luisa Acosta",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/62/300/300.jpg?hmac=JkaOmZr8So-hvPO3Mya00sE2pvIQtLZjGMldqbPFiqc",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Marta Giraldo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/421/300/300.jpg?hmac=7vF4ivvohPVAng1rECOJPHlpeZj0DK5eOJWEduSseR4",
                                city: "Medellín",
                                assessment: 5
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 10,
                    info: "usePressNot",
                    title: "¿Deseas incluir un plan nutricional en tu proceso de recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 11,
                    info: '',
                    title: "¿Vas a necesitar transporte?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 12,
                    info: "",
                    title: "Seleccione chofer y vehículo de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'ChoferQuestion',
                    placeholder: "Seleccione Transporte",
                    response: {
                        transport: [
                            {
                                choferName: "Luis Duran",
                                choferAvatar: "https://i.picsum.photos/id/156/300/300.jpg?hmac=rGLAWZy_0JcFB5YMaO_wu9TChlrg9K6UqlSCCWbVa_Y",
                                carChoferModel: "Chevrolet Cruze",
                                carChoferImg: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/cruze-premier-5-e1565908395458.jpg?resize=650,433",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Carlos Marín",
                                choferAvatar: "https://i.picsum.photos/id/1076/300/300.jpg?hmac=Nyv9lBi6xcTR9iOySfgGlf24hAYdDRaHQ7nJQim1naA",
                                carChoferModel: "Nissan Sentra",
                                carChoferImg: "https://www.thedrive.com/content/2021/03/73572C33-7C8E-4895-9267-473FA35D488F_1_201_a-scaled.jpeg?quality=85&auto=webp&optimize=high&quality=70&width=2018",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Paula Muñoz",
                                choferAvatar: "https://i.picsum.photos/id/700/300/300.jpg?hmac=nAc9k92vOFl8i6K84MMZgC_uwyhaIydCz34BEY8O0Ps",
                                carChoferModel: "Hyundai Elactra",
                                carChoferImg: "https://www.samarins.com/reviews/img/hyundai-elantra-2014.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marian Mora",
                                choferAvatar: "https://i.picsum.photos/id/46/300/300.jpg?hmac=d0_MNL7cjS7tre8_kfeiCGuF_l8Fz6qcD6k2lOB73EU",
                                carChoferModel: "Tesla Model X",
                                carChoferImg: "https://i.pinimg.com/originals/e4/c2/3d/e4c23db7eaf2f902568b9c596ba955ab.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Mario Mena",
                                choferAvatar: "https://i.picsum.photos/id/101/300/300.jpg?hmac=otCBSyFuH-eJf1aGys81tPdEqAXy0zxvMT81fYTv4C8",
                                carChoferModel: "BMW",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2019/12/12171546/IMG_5383.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Melisa Rivero",
                                choferAvatar: "https://i.picsum.photos/id/497/300/300.jpg?hmac=dtw7nGJRHPRmarbydsHN2XR_rN784bu4R-Wrfj3tY6E",
                                carChoferModel: "Hyundai",
                                carChoferImg: "https://www.manualesdetodo.net/wp-content/uploads/2020/10/2014-accent-hyundai-u.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Lucas Ferrer",
                                choferAvatar: "https://i.picsum.photos/id/42/300/300.jpg?hmac=4m-5oL1k_PEXemEhSsagOlAeKjwF-hha0yC6B_T9-9o",
                                carChoferModel: "Toyota Corolla",
                                carChoferImg: "https://i.pinimg.com/originals/aa/82/89/aa828991f7df5441863c38a0a7198894.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marta Toro",
                                choferAvatar: "https://i.picsum.photos/id/53/300/300.jpg?hmac=YAuaha56Qqkoz5v03NRQhB0hPeVomxdGzpBTpSkUkNE",
                                carChoferModel: "Mercedes",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/06/17115300/20C0257_020.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Camilo Navarro",
                                choferAvatar: "https://i.picsum.photos/id/276/300/300.jpg?hmac=9ojBAYusSkbkLhQc8rr9BMIwXHSNSkBfQM2g1V9KaVk",
                                carChoferModel: "Chevrolet",
                                carChoferImg: "https://mattmakes.org/wp-content/uploads/2020/12/redesign-and-review-chevrolet-malibu-2020-price.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 13,
                    info: 'usePressNot',
                    title: "¿Deseas incluir una Sim Card?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 14,
                    info: '',
                    title: "¿Deseas incluir un tour antes o después de tu operación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 15,
                    info: "",
                    title: "¿Para donde deseas ir?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'TourQuestion',
                    placeholder: "Seleccione Lugar",
                    response: {
                        tours: [
                            {
                                id: "Tour 1",
                                city: "Santa Marta",
                                tour: "Parque Nacional Tairona",
                                img: "https://travelgrafia.co/wp-content/uploads/2019/05/playas-cerca-a-santa-marta.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 2",
                                city: "Cartagena",
                                tour: "Ciudad Amurallada",
                                img: "https://images.squarespace-cdn.com/content/v1/5785d42ee58c62418fa80880/1544049396811-HVMJTV64MNNVZP1DQLO4/DSC01610.jpg?format=500w",
                                assessment: 5
                            },
                            {
                                id: "Tour 3",
                                city: "La Guajira",
                                tour: "Desiertos",
                                img: "https://i.pinimg.com/564x/3b/9f/82/3b9f82d82b028773ffb3dbb9d9412b1c.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 4",
                                city: "La Macarena - Meta",
                                tour: "Caño Cristales",
                                img: "https://www.infobae.com/new-resizer/wAD9R8Fg6zOTYJP3yqLPMAgLTfE=/1440x1440/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/11111513/Ca%C3%B1o-cristales.jpg",
                                assessment: 3
                            },
                            {
                                id: "Tour 5",
                                city: "Guatapé",
                                tour: "Piedra del Peñol",
                                img: "https://i.pinimg.com/564x/22/02/b5/2202b5487a9be7fd995082148ca3126b.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 6",
                                city: "Boyacá",
                                tour: "El Cocuy",
                                img: "https://live.staticflickr.com/7322/9397648854_b5dad7fe3e_h.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 7",
                                city: "Salento",
                                tour: "Valle de Cocura",
                                img: "https://funlifecrisis.com/wp-content/uploads/2018/11/valle-do-cocura-hike-salento-colombia.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 8",
                                city: "San Andrés",
                                tour: "Islas de San Andrés",
                                img: "https://i.pinimg.com/originals/7d/c7/d8/7dc7d89feef93681fd6639d6b5256cbf.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 9",
                                city: "El Chocó",
                                tour: "Capurganá",
                                img: "https://i.pinimg.com/564x/72/a1/9c/72a19c91ac194cf86ac111e381beb857.jpg",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 16,
                    info: "",
                    title: "Seleccione fechas del tour",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 17,
                    info: "",
                    title: "Agenda tu cita de valoración virtual para la cirugía",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 18,
                    info: "",
                    title: "¡Ya casi terminamos! Sólo queda agendar la fecha de tu vuelo",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 19,
                    info: "",
                    title: "Listo!!",
                    useInput: false,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente",
                        button3: "Finalizar"
                    }
                }
            ]
        },
        //cirugia corporal - lipotransferencia
        {
            procedure: "cirugia corporal - lipotransferencia",
            idProcedure: 8,
            questions: [
                {
                    idQuestion: 1,
                    info: "",
                    title: "¿Qué edad tienes -  cirugia corporal - lipotransferencia?",
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
                    idQuestion: 2,
                    info: "",
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
                    idQuestion: 3,
                    info: "",
                    title: "¿Qué talla de brasier eres",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 5,
                    info: "",
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
                    idQuestion: 6,
                    info: "",
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
                    idQuestion: 7,
                    info: "",
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
                                Medellín: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Barranquilla: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Cali: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - C",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - C",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - C",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - C",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - C",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - C",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Bogotá: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
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
                    idQuestion: 8,
                    info: "",
                    title: "¿Desea incluir Enfermera en su recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 9,
                    info: "",
                    title: "Seleccione la Enfermera de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'NurseQuestion',
                    placeholder: "Elija Enfermera",
                    response: {
                        nurse: [
                            {
                                name: "Marian Restrepo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/758/300/300.jpg?hmac=JdmQPsV_vTdIhWzwEIHhcmA5tmuC_DOHB6O5PUVualQ",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Antonia Rodriguez",
                                experience: "8 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/536/300/300.jpg?hmac=jc8wwzhIRp8-aFORQGaxnHycNfXcprvPX0oKawN4-C0",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Susana Ruíz",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Paola Gomez",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Ana Marín",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/984/300/300.jpg?hmac=nNJwsEJribYLYZT-XI2HF5Ovd6jFrSzzkfpkoYj_zao",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Laura Cardona",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/516/300/300.jpg?hmac=rjKkPPkY2QLwGN8JBF5Af6y910lX5PaPaXpqbxr1-IU",
                                city: "Medellín",
                                assessment: 3
                            },
                            {
                                name: "Carolina Herrera",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/45/300/300.jpg?hmac=4xBaRob30OZKvORvIar-A2GqUCvsEac5ve4nrWuzn0w",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Luisa Acosta",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/62/300/300.jpg?hmac=JkaOmZr8So-hvPO3Mya00sE2pvIQtLZjGMldqbPFiqc",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Marta Giraldo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/421/300/300.jpg?hmac=7vF4ivvohPVAng1rECOJPHlpeZj0DK5eOJWEduSseR4",
                                city: "Medellín",
                                assessment: 5
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 10,
                    info: "usePressNot",
                    title: "¿Deseas incluir un plan nutricional en tu proceso de recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 11,
                    info: '',
                    title: "¿Vas a necesitar transporte?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 12,
                    info: "",
                    title: "Seleccione chofer y vehículo de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'ChoferQuestion',
                    placeholder: "Seleccione Transporte",
                    response: {
                        transport: [
                            {
                                choferName: "Luis Duran",
                                choferAvatar: "https://i.picsum.photos/id/156/300/300.jpg?hmac=rGLAWZy_0JcFB5YMaO_wu9TChlrg9K6UqlSCCWbVa_Y",
                                carChoferModel: "Chevrolet Cruze",
                                carChoferImg: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/cruze-premier-5-e1565908395458.jpg?resize=650,433",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Carlos Marín",
                                choferAvatar: "https://i.picsum.photos/id/1076/300/300.jpg?hmac=Nyv9lBi6xcTR9iOySfgGlf24hAYdDRaHQ7nJQim1naA",
                                carChoferModel: "Nissan Sentra",
                                carChoferImg: "https://www.thedrive.com/content/2021/03/73572C33-7C8E-4895-9267-473FA35D488F_1_201_a-scaled.jpeg?quality=85&auto=webp&optimize=high&quality=70&width=2018",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Paula Muñoz",
                                choferAvatar: "https://i.picsum.photos/id/700/300/300.jpg?hmac=nAc9k92vOFl8i6K84MMZgC_uwyhaIydCz34BEY8O0Ps",
                                carChoferModel: "Hyundai Elactra",
                                carChoferImg: "https://www.samarins.com/reviews/img/hyundai-elantra-2014.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marian Mora",
                                choferAvatar: "https://i.picsum.photos/id/46/300/300.jpg?hmac=d0_MNL7cjS7tre8_kfeiCGuF_l8Fz6qcD6k2lOB73EU",
                                carChoferModel: "Tesla Model X",
                                carChoferImg: "https://i.pinimg.com/originals/e4/c2/3d/e4c23db7eaf2f902568b9c596ba955ab.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Mario Mena",
                                choferAvatar: "https://i.picsum.photos/id/101/300/300.jpg?hmac=otCBSyFuH-eJf1aGys81tPdEqAXy0zxvMT81fYTv4C8",
                                carChoferModel: "BMW",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2019/12/12171546/IMG_5383.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Melisa Rivero",
                                choferAvatar: "https://i.picsum.photos/id/497/300/300.jpg?hmac=dtw7nGJRHPRmarbydsHN2XR_rN784bu4R-Wrfj3tY6E",
                                carChoferModel: "Hyundai",
                                carChoferImg: "https://www.manualesdetodo.net/wp-content/uploads/2020/10/2014-accent-hyundai-u.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Lucas Ferrer",
                                choferAvatar: "https://i.picsum.photos/id/42/300/300.jpg?hmac=4m-5oL1k_PEXemEhSsagOlAeKjwF-hha0yC6B_T9-9o",
                                carChoferModel: "Toyota Corolla",
                                carChoferImg: "https://i.pinimg.com/originals/aa/82/89/aa828991f7df5441863c38a0a7198894.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marta Toro",
                                choferAvatar: "https://i.picsum.photos/id/53/300/300.jpg?hmac=YAuaha56Qqkoz5v03NRQhB0hPeVomxdGzpBTpSkUkNE",
                                carChoferModel: "Mercedes",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/06/17115300/20C0257_020.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Camilo Navarro",
                                choferAvatar: "https://i.picsum.photos/id/276/300/300.jpg?hmac=9ojBAYusSkbkLhQc8rr9BMIwXHSNSkBfQM2g1V9KaVk",
                                carChoferModel: "Chevrolet",
                                carChoferImg: "https://mattmakes.org/wp-content/uploads/2020/12/redesign-and-review-chevrolet-malibu-2020-price.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 13,
                    info: 'usePressNot',
                    title: "¿Deseas incluir una Sim Card?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 14,
                    info: '',
                    title: "¿Deseas incluir un tour antes o después de tu operación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 15,
                    info: "",
                    title: "¿Para donde deseas ir?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'TourQuestion',
                    placeholder: "Seleccione Lugar",
                    response: {
                        tours: [
                            {
                                id: "Tour 1",
                                city: "Santa Marta",
                                tour: "Parque Nacional Tairona",
                                img: "https://travelgrafia.co/wp-content/uploads/2019/05/playas-cerca-a-santa-marta.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 2",
                                city: "Cartagena",
                                tour: "Ciudad Amurallada",
                                img: "https://images.squarespace-cdn.com/content/v1/5785d42ee58c62418fa80880/1544049396811-HVMJTV64MNNVZP1DQLO4/DSC01610.jpg?format=500w",
                                assessment: 5
                            },
                            {
                                id: "Tour 3",
                                city: "La Guajira",
                                tour: "Desiertos",
                                img: "https://i.pinimg.com/564x/3b/9f/82/3b9f82d82b028773ffb3dbb9d9412b1c.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 4",
                                city: "La Macarena - Meta",
                                tour: "Caño Cristales",
                                img: "https://www.infobae.com/new-resizer/wAD9R8Fg6zOTYJP3yqLPMAgLTfE=/1440x1440/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/11111513/Ca%C3%B1o-cristales.jpg",
                                assessment: 3
                            },
                            {
                                id: "Tour 5",
                                city: "Guatapé",
                                tour: "Piedra del Peñol",
                                img: "https://i.pinimg.com/564x/22/02/b5/2202b5487a9be7fd995082148ca3126b.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 6",
                                city: "Boyacá",
                                tour: "El Cocuy",
                                img: "https://live.staticflickr.com/7322/9397648854_b5dad7fe3e_h.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 7",
                                city: "Salento",
                                tour: "Valle de Cocura",
                                img: "https://funlifecrisis.com/wp-content/uploads/2018/11/valle-do-cocura-hike-salento-colombia.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 8",
                                city: "San Andrés",
                                tour: "Islas de San Andrés",
                                img: "https://i.pinimg.com/originals/7d/c7/d8/7dc7d89feef93681fd6639d6b5256cbf.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 9",
                                city: "El Chocó",
                                tour: "Capurganá",
                                img: "https://i.pinimg.com/564x/72/a1/9c/72a19c91ac194cf86ac111e381beb857.jpg",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 16,
                    info: "",
                    title: "Seleccione fechas del tour",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 17,
                    info: "",
                    title: "Agenda tu cita de valoración virtual para la cirugía",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 18,
                    info: "",
                    title: "¡Ya casi terminamos! Sólo queda agendar la fecha de tu vuelo",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 19,
                    info: "",
                    title: "Listo!!",
                    useInput: false,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente",
                        button3: "Finalizar"
                    }
                }
            ]
        },
        //cirugia corporal - liposuccion
        {
            procedure: "cirugia corporal - liposuccion",
            idProcedure: 9,
            questions: [
                {
                    idQuestion: 1,
                    info: "",
                    title: "¿Qué edad tienes -  cirugia corporal - liposuccion?",
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
                    idQuestion: 2,
                    info: "",
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
                    idQuestion: 3,
                    info: "",
                    title: "¿Qué talla de brasier eres",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 4,
                    info: "",
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
                    idQuestion: 5,
                    info: "",
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
                    idQuestion: 6,
                    info: "",
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
                    idQuestion: 7,
                    info: "",
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
                                Medellín: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Barranquilla: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Cali: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - C",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - C",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - C",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - C",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - C",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - C",
                                        description: "Belén la Palma",
                                        img: "https://i.picsum.photos/id/541/300/300.jpg?hmac=mU76LGR5SaGfCRc8p09wzyxejuMkmEWXiCiRwoXRw9Y",
                                        assessment: 3
                                    }
                                ],
                                Bogotá: [
                                    {
                                        id: "recoveryHouse 1",
                                        neighborhood: "Poblado - B",
                                        description: "Los Balsos",
                                        img: "https://i.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 2",
                                        neighborhood: "Laureles - B",
                                        description: "Laureles Campestre",
                                        img: "https://i.picsum.photos/id/343/300/300.jpg?hmac=U-DyYS8TDOO9wwhRiPp287g4Iau9PcYwdXb9JjdsU6w",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 3",
                                        neighborhood: "Poblado - B",
                                        description: "Castropol",
                                        img: "https://i.picsum.photos/id/58/300/300.jpg?hmac=TcjrTyIduJRx_iVy1czdSq2sNKO7bPyBwTyeWQFhM1Q",
                                        assessment: 5
                                    },
                                    {
                                        id: "recoveryHouse 4",
                                        neighborhood: "Poblado - B",
                                        description: "Manila",
                                        img: "https://i.picsum.photos/id/334/300/300.jpg?hmac=Ase3LpyCdCzLfDfIpfcWpdJSyZIFZeAerh-nxIGGkK0",
                                        assessment: 3
                                    },
                                    {
                                        id: "recoveryHouse 5",
                                        neighborhood: "Poblado - B",
                                        description: "Patio Bonito",
                                        img: "https://i.picsum.photos/id/544/300/300.jpg?hmac=kbODSPEzAZCvJfHJb-rqePPxdN8ubZdpQkeW0XyOl50",
                                        assessment: 4
                                    },
                                    {
                                        id: "recoveryHouse 6",
                                        neighborhood: "Belén - B",
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
                    idQuestion: 8,
                    info: "",
                    title: "¿Desea incluir Enfermera en su recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "Seleccione talla",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 9,
                    info: "",
                    title: "Seleccione la Enfermera de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'NurseQuestion',
                    placeholder: "Elija Enfermera",
                    response: {
                        nurse: [
                            {
                                name: "Marian Restrepo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/758/300/300.jpg?hmac=JdmQPsV_vTdIhWzwEIHhcmA5tmuC_DOHB6O5PUVualQ",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Antonia Rodriguez",
                                experience: "8 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/536/300/300.jpg?hmac=jc8wwzhIRp8-aFORQGaxnHycNfXcprvPX0oKawN4-C0",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Susana Ruíz",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Paola Gomez",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Ana Marín",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/984/300/300.jpg?hmac=nNJwsEJribYLYZT-XI2HF5Ovd6jFrSzzkfpkoYj_zao",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Laura Cardona",
                                experience: "1 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/516/300/300.jpg?hmac=rjKkPPkY2QLwGN8JBF5Af6y910lX5PaPaXpqbxr1-IU",
                                city: "Medellín",
                                assessment: 3
                            },
                            {
                                name: "Carolina Herrera",
                                experience: "3 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/45/300/300.jpg?hmac=4xBaRob30OZKvORvIar-A2GqUCvsEac5ve4nrWuzn0w",
                                city: "Medellín",
                                assessment: 4
                            },
                            {
                                name: "Luisa Acosta",
                                experience: "2 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/62/300/300.jpg?hmac=JkaOmZr8So-hvPO3Mya00sE2pvIQtLZjGMldqbPFiqc",
                                city: "Medellín",
                                assessment: 5
                            },
                            {
                                name: "Marta Giraldo",
                                experience: "4 años de Experiencia",
                                avatar: "https://i.picsum.photos/id/421/300/300.jpg?hmac=7vF4ivvohPVAng1rECOJPHlpeZj0DK5eOJWEduSseR4",
                                city: "Medellín",
                                assessment: 5
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 10,
                    info: "usePressNot",
                    title: "¿Deseas incluir un plan nutricional en tu proceso de recuperación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 11,
                    info: '',
                    title: "¿Vas a necesitar transporte?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 12,
                    info: "",
                    title: "Seleccione chofer y vehículo de su preferencia",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'ChoferQuestion',
                    placeholder: "Seleccione Transporte",
                    response: {
                        transport: [
                            {
                                choferName: "Luis Duran",
                                choferAvatar: "https://i.picsum.photos/id/156/300/300.jpg?hmac=rGLAWZy_0JcFB5YMaO_wu9TChlrg9K6UqlSCCWbVa_Y",
                                carChoferModel: "Chevrolet Cruze",
                                carChoferImg: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/cruze-premier-5-e1565908395458.jpg?resize=650,433",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Carlos Marín",
                                choferAvatar: "https://i.picsum.photos/id/1076/300/300.jpg?hmac=Nyv9lBi6xcTR9iOySfgGlf24hAYdDRaHQ7nJQim1naA",
                                carChoferModel: "Nissan Sentra",
                                carChoferImg: "https://www.thedrive.com/content/2021/03/73572C33-7C8E-4895-9267-473FA35D488F_1_201_a-scaled.jpeg?quality=85&auto=webp&optimize=high&quality=70&width=2018",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Paula Muñoz",
                                choferAvatar: "https://i.picsum.photos/id/700/300/300.jpg?hmac=nAc9k92vOFl8i6K84MMZgC_uwyhaIydCz34BEY8O0Ps",
                                carChoferModel: "Hyundai Elactra",
                                carChoferImg: "https://www.samarins.com/reviews/img/hyundai-elantra-2014.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marian Mora",
                                choferAvatar: "https://i.picsum.photos/id/46/300/300.jpg?hmac=d0_MNL7cjS7tre8_kfeiCGuF_l8Fz6qcD6k2lOB73EU",
                                carChoferModel: "Tesla Model X",
                                carChoferImg: "https://i.pinimg.com/originals/e4/c2/3d/e4c23db7eaf2f902568b9c596ba955ab.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Mario Mena",
                                choferAvatar: "https://i.picsum.photos/id/101/300/300.jpg?hmac=otCBSyFuH-eJf1aGys81tPdEqAXy0zxvMT81fYTv4C8",
                                carChoferModel: "BMW",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2019/12/12171546/IMG_5383.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            },
                            {
                                choferName: "Melisa Rivero",
                                choferAvatar: "https://i.picsum.photos/id/497/300/300.jpg?hmac=dtw7nGJRHPRmarbydsHN2XR_rN784bu4R-Wrfj3tY6E",
                                carChoferModel: "Hyundai",
                                carChoferImg: "https://www.manualesdetodo.net/wp-content/uploads/2020/10/2014-accent-hyundai-u.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Lucas Ferrer",
                                choferAvatar: "https://i.picsum.photos/id/42/300/300.jpg?hmac=4m-5oL1k_PEXemEhSsagOlAeKjwF-hha0yC6B_T9-9o",
                                carChoferModel: "Toyota Corolla",
                                carChoferImg: "https://i.pinimg.com/originals/aa/82/89/aa828991f7df5441863c38a0a7198894.jpg",
                                choferCity: "Medellín",
                                assessment: 3
                            },
                            {
                                choferName: "Marta Toro",
                                choferAvatar: "https://i.picsum.photos/id/53/300/300.jpg?hmac=YAuaha56Qqkoz5v03NRQhB0hPeVomxdGzpBTpSkUkNE",
                                carChoferModel: "Mercedes",
                                carChoferImg: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/06/17115300/20C0257_020.jpg",
                                choferCity: "Medellín",
                                assessment: 5
                            },
                            {
                                choferName: "Camilo Navarro",
                                choferAvatar: "https://i.picsum.photos/id/276/300/300.jpg?hmac=9ojBAYusSkbkLhQc8rr9BMIwXHSNSkBfQM2g1V9KaVk",
                                carChoferModel: "Chevrolet",
                                carChoferImg: "https://mattmakes.org/wp-content/uploads/2020/12/redesign-and-review-chevrolet-malibu-2020-price.jpg",
                                choferCity: "Medellín",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 13,
                    info: 'usePressNot',
                    title: "¿Deseas incluir una Sim Card?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 14,
                    info: '',
                    title: "¿Deseas incluir un tour antes o después de tu operación?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: true,
                    useInteractiveButon: false,
                    useComponent: false,
                    placeholder: "",
                    response: {
                        buttonNo: "No",
                        buttonYes: "Si"
                    }
                },
                {
                    idQuestion: 15,
                    info: "",
                    title: "¿Para donde deseas ir?",
                    useInput: false,
                    useButton: false,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: true,
                    component: 'TourQuestion',
                    placeholder: "Seleccione Lugar",
                    response: {
                        tours: [
                            {
                                id: "Tour 1",
                                city: "Santa Marta",
                                tour: "Parque Nacional Tairona",
                                img: "https://travelgrafia.co/wp-content/uploads/2019/05/playas-cerca-a-santa-marta.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 2",
                                city: "Cartagena",
                                tour: "Ciudad Amurallada",
                                img: "https://images.squarespace-cdn.com/content/v1/5785d42ee58c62418fa80880/1544049396811-HVMJTV64MNNVZP1DQLO4/DSC01610.jpg?format=500w",
                                assessment: 5
                            },
                            {
                                id: "Tour 3",
                                city: "La Guajira",
                                tour: "Desiertos",
                                img: "https://i.pinimg.com/564x/3b/9f/82/3b9f82d82b028773ffb3dbb9d9412b1c.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 4",
                                city: "La Macarena - Meta",
                                tour: "Caño Cristales",
                                img: "https://www.infobae.com/new-resizer/wAD9R8Fg6zOTYJP3yqLPMAgLTfE=/1440x1440/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/11111513/Ca%C3%B1o-cristales.jpg",
                                assessment: 3
                            },
                            {
                                id: "Tour 5",
                                city: "Guatapé",
                                tour: "Piedra del Peñol",
                                img: "https://i.pinimg.com/564x/22/02/b5/2202b5487a9be7fd995082148ca3126b.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 6",
                                city: "Boyacá",
                                tour: "El Cocuy",
                                img: "https://live.staticflickr.com/7322/9397648854_b5dad7fe3e_h.jpg",
                                assessment: 5
                            },
                            {
                                id: "Tour 7",
                                city: "Salento",
                                tour: "Valle de Cocura",
                                img: "https://funlifecrisis.com/wp-content/uploads/2018/11/valle-do-cocura-hike-salento-colombia.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 8",
                                city: "San Andrés",
                                tour: "Islas de San Andrés",
                                img: "https://i.pinimg.com/originals/7d/c7/d8/7dc7d89feef93681fd6639d6b5256cbf.jpg",
                                assessment: 4
                            },
                            {
                                id: "Tour 9",
                                city: "El Chocó",
                                tour: "Capurganá",
                                img: "https://i.pinimg.com/564x/72/a1/9c/72a19c91ac194cf86ac111e381beb857.jpg",
                                assessment: 4
                            }
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 16,
                    info: "",
                    title: "Seleccione fechas del tour",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 17,
                    info: "",
                    title: "Agenda tu cita de valoración virtual para la cirugía",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 18,
                    info: "",
                    title: "¡Ya casi terminamos! Sólo queda agendar la fecha de tu vuelo",
                    useInput: true,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
                },
                {
                    idQuestion: 19,
                    info: "",
                    title: "Listo!!",
                    useInput: false,
                    useButton: true,
                    useYesOrNotButton: false,
                    useInteractiveButon: false,
                    useComponent: false,
                    component: '',
                    placeholder: "Seleccione Fecha",
                    response: {
                        tours: [
                            "hola"
                        ],
                        button1: "Atrás",
                        button2: "Siguiente",
                        button3: "Finalizar"
                    }
                }
            ]
        }
    ]
export default allQuestions