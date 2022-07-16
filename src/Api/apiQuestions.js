const apiQuestions = [
    {
        idQuestion: '1',
        name: "pregunta de prueba",
        questions: [
            {
                title: "¿Qué edad tienes?",
                    useInput: true,
                    placeholder: "Ingrese edad",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
            },
            {
                title: "¿Qué edad tienes2?",
                    useInput: true,
                    placeholder: "Ingrese edad",
                    response: {
                        button1: "Atrás",
                        button2: "Siguiente"
                    }
            },
        ]
    }
]
export default apiQuestions



/*{
    title: "En que ciudad quieres operarte",
    useInput: false,
    placeholder: "",
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
        ]
    }
},
{
    title: "Seleccione el cirujano de tu preferencia",
    useInput: true,
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
                img: "https://i.picsum.photos/id/188/300/300.jpg?hmac=O1Fgsa5q091m_1eNHYtavDoVNb6yIklGq1A67yv5_vk",
                city: "Medellín",
                assessment: 4
            },
            {
                name: "Dr. Daniel Correa",
                description: "Cirujano Plástico y Estético",
                img: "https://i.picsum.photos/id/880/300/300.jpg?hmac=oXC1t0jViOdGm6k__5wE0t1X0riYREqUm9z2CZuIfEI",
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
        ]
    }
},
{
    title: "¿Vas a realizar tu proceso de recuperación en Colombia?",
    useInput: false,
    placeholder: "",
    response: {
        button1: "no",
        button2: "si"
    }
},
{
    title: "Selecciona en donde quieres realizar tu proceso de recuperación",
    useInput: false,
    placeholder: "",
    response: {
        button1: {
            title: "Casa de recuperación",
            img: "https://i.picsum.photos/id/999/200/200.jpg?hmac=iwXALEStJtHL4Thxk_YbLNHNmjq9ZrIQYFUvtxndOaU"
        },
        button2: {
            title: "Hotel",
            img: "https://i.picsum.photos/id/640/200/200.jpg?hmac=iFmWtlROU2QVjs0GSK5LASqVkXu6yl8MIQHJrpra6PA"
        }
    }
},
{
    title: "Seleccione la casa de recuperación de su preferencia",
    useInput: true,
    response: {
        recoveryHouse: [
            {
                placeholder: "Elija casa de recuperación"
            },
            {
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
        ],
        hotel: [
            {
                placeholder: "Elija hotel"
            },
            {
                medellin: [
                    {
                        neighborhood: "Poblado",
                        description: "Los Balsos",
                        img: "https://i.picsum.photos/id/731/300/300.jpg?hmac=4_3jlsewTHgqjDYM8OHOcI6OUv6lbjnSE13is8wP7Vc",
                        assessment: 4
                    },
                    {
                        "neighborhood": "Laureles",
                        "description": "Laureles Campestre",
                        "img": "https://i.picsum.photos/id/943/300/300.jpg?hmac=x7WDIrsXZhlmkST5DorT2wKbdmbbfXmIbyTKWHllg58",
                        "assessment": 5
                    },
                    {
                        "neighborhood": "Poblado",
                        "description": "Castropol",
                        "img": "https://i.picsum.photos/id/66/300/300.jpg?hmac=APJ89rPffyxEpwGal4lGOxbsSWEhcPTY1Pw6gUEHB70",
                        "assessment": 5
                    },
                    {
                        "neighborhood": "Poblado",
                        "description": "Manila",
                        "img": "https://i.picsum.photos/id/348/300/300.jpg?hmac=wkcO7Tj40eNEQP6HOQ9jBualRFsCavnenW-EEu8o7Ys",
                        "assessment": 3
                    },
                    {
                        "neighborhood": "Poblado",
                        "description": "Patio Bonito",
                        "img": "https://i.picsum.photos/id/879/300/300.jpg?hmac=ehpWmwDQacQBPS7a2xm6i7R7wQ4cc0FEEEDbWav3sdA",
                        "assessment": 4
                    },
                    {
                        "neighborhood": "Belén",
                        "description": "Belén la Palma",
                        "img": "https://i.picsum.photos/id/13/300/300.jpg?hmac=KpKrVHSxw7oTYqaH6Go7ulaMqAocY3zzej1sqIi6fRQ",
                        "assessment": 3
                    }
                ]
            }
        ]
    }
},
{
    "title": "Seleccione la Efermera de su preferencia",
    "useInput": true,
    "placeholder": "Elija Enfermera",
    "response": {
        "doctors": [
            {
                "name": "Marian Restrepo",
                "experience": "4 años de Experiencia",
                "avatar": "https://i.picsum.photos/id/758/300/300.jpg?hmac=JdmQPsV_vTdIhWzwEIHhcmA5tmuC_DOHB6O5PUVualQ",
                "city": "Medellín",
                "assessment": 5
            },
            {
                "name": "Antonia Rodriguez",
                "experience": "8 años de Experiencia",
                "avatar": "https://i.picsum.photos/id/536/300/300.jpg?hmac=jc8wwzhIRp8-aFORQGaxnHycNfXcprvPX0oKawN4-C0",
                "city": "Medellín",
                "assessment": 4
            },
            {
                "name": "Susana Ruíz",
                "experience": "2 años de Experiencia",
                "avatar": "https://i.picsum.photos/id/800/300/300.jpg?hmac=17xBHpSghjDxOt1RjhArmUtIP-Fv0z8Fk6uXIY0wvWw",
                "city": "Medellín",
                "assessment": 5
            },
            {
                "name": "Paola Gomez",
                "experience": "1 años de Experiencia",
                "avatar": "https://i.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA",
                "city": "Medellín",
                "assessment": 5
            },
            {
                "name": "Ana Marín",
                "experience": "3 años de Experiencia",
                "avatar": "https://i.picsum.photos/id/984/300/300.jpg?hmac=nNJwsEJribYLYZT-XI2HF5Ovd6jFrSzzkfpkoYj_zao",
                "city": "Medellín",
                "assessment": 4
            },
            {
                "name": "Laura Cardona",
                "experience": "1 años de Experiencia",
                "avatar": "https://i.picsum.photos/id/516/300/300.jpg?hmac=rjKkPPkY2QLwGN8JBF5Af6y910lX5PaPaXpqbxr1-IU",
                "city": "Medellín",
                "assessment": 3
            },
            {
                "name": "Carolina Herrera",
                "experience": "3 años de Experiencia",
                "avatar": "https://i.picsum.photos/id/45/300/300.jpg?hmac=4xBaRob30OZKvORvIar-A2GqUCvsEac5ve4nrWuzn0w",
                "city": "Medellín",
                "assessment": 4
            },
            {
                "name": "Luisa Acosta",
                "experience": "2 años de Experiencia",
                "avatar": "https://i.picsum.photos/id/62/300/300.jpg?hmac=JkaOmZr8So-hvPO3Mya00sE2pvIQtLZjGMldqbPFiqc",
                "city": "Medellín",
                "assessment": 5
            },
            {
                "name": "Marta Giraldo",
                "experience": "4 años de Experiencia",
                "avatar": "https://i.picsum.photos/id/421/300/300.jpg?hmac=7vF4ivvohPVAng1rECOJPHlpeZj0DK5eOJWEduSseR4",
                "city": "Medellín",
                "assessment": 5
            }
        ]
    }
},
{
    "title": "¿Deseas incluir un plan nutricional en tu proceso de recuperación?",
    "useInput": false,
    "placeholder": "",
    "response": {
        "button1": "no",
        "button2": "si"
    }
},
{
    "title": "¿Vas a necesitar transporte?",
    "useInput": false,
    "placeholder": "",
    "response": {
        "button1": "no",
        "button2": "si"
    }
},
{
    "title": "¿Seleccione chofer y vehículo de su preferencia?",
    "useInput": true,
    "placeholder": "Selecione Transporte",
    "response": {
        "Transporte": [
            {
                "chofer": "Luis Duran",
                "choferImg": "https://i.picsum.photos/id/156/300/300.jpg?hmac=rGLAWZy_0JcFB5YMaO_wu9TChlrg9K6UqlSCCWbVa_Y",
                "car": "Chevrolet Cruze",
                "carImg": "https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/cruze-premier-5-e1565908395458.jpg?resize=650,433",
                "city": "Medellín",
                "assessment": 4
            },
            {
                "name": "Carlos Marín",
                "choferImg": "https://i.picsum.photos/id/1076/300/300.jpg?hmac=Nyv9lBi6xcTR9iOySfgGlf24hAYdDRaHQ7nJQim1naA",
                "car": "Nissan Sentra",
                "carImg": "https://www.thedrive.com/content/2021/03/73572C33-7C8E-4895-9267-473FA35D488F_1_201_a-scaled.jpeg?quality=85&auto=webp&optimize=high&quality=70&width=2018",
                "city": "Medellín",
                "assessment": 5
            },
            {
                "name": "Paula Muñoz",
                "choferImg": "https://i.picsum.photos/id/700/300/300.jpg?hmac=nAc9k92vOFl8i6K84MMZgC_uwyhaIydCz34BEY8O0Ps",
                "car": "Hyundai Elactra",
                "carImg": "https://www.samarins.com/reviews/img/hyundai-elantra-2014.jpg",
                "city": "Medellín",
                "assessment": 3
            },
            {
                "name": "Marian Mora",
                "choferImg": "https://i.picsum.photos/id/46/300/300.jpg?hmac=d0_MNL7cjS7tre8_kfeiCGuF_l8Fz6qcD6k2lOB73EU",
                "car": "Tesla Model X",
                "carImg": "https://i.pinimg.com/originals/e4/c2/3d/e4c23db7eaf2f902568b9c596ba955ab.jpg",
                "city": "Medellín",
                "assessment": 5
            },
            {
                "name": "Mario Mena",
                "choferImg": "https://i.picsum.photos/id/101/300/300.jpg?hmac=otCBSyFuH-eJf1aGys81tPdEqAXy0zxvMT81fYTv4C8",
                "car": "BMW",
                "carImg": "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2019/12/12171546/IMG_5383.jpg",
                "city": "Medellín",
                "assessment": 4
            },
            {
                "name": "Melisa Rivero",
                "choferImg": "https://i.picsum.photos/id/497/300/300.jpg?hmac=dtw7nGJRHPRmarbydsHN2XR_rN784bu4R-Wrfj3tY6E",
                "car": "Hyundai",
                "carImg": "https://www.manualesdetodo.net/wp-content/uploads/2020/10/2014-accent-hyundai-u.jpg",
                "city": "Medellín",
                "assessment": 5
            },
            {
                "name": "Lucas Ferrer",
                "choferImg": "https://i.picsum.photos/id/42/300/300.jpg?hmac=4m-5oL1k_PEXemEhSsagOlAeKjwF-hha0yC6B_T9-9o",
                "car": "Toyota Corolla",
                "carImg": "https://i.pinimg.com/originals/aa/82/89/aa828991f7df5441863c38a0a7198894.jpg",
                "city": "Medellín",
                "assessment": 3
            },
            {
                "name": "Marta Toro",
                "choferImg": "https://i.picsum.photos/id/53/300/300.jpg?hmac=YAuaha56Qqkoz5v03NRQhB0hPeVomxdGzpBTpSkUkNE",
                "car": "Mercedes",
                "carImg": "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/06/17115300/20C0257_020.jpg",
                "city": "Medellín",
                "assessment": 5
            },
            {
                "name": "Camilo Navarro",
                "choferImg": "https://i.picsum.photos/id/276/300/300.jpg?hmac=9ojBAYusSkbkLhQc8rr9BMIwXHSNSkBfQM2g1V9KaVk",
                "car": "Chevrolet",
                "carImg": "https://mattmakes.org/wp-content/uploads/2020/12/redesign-and-review-chevrolet-malibu-2020-price.jpg",
                "city": "Medellín",
                "assessment": 4
            }
        ]
    }
},
{
    "title": "¿Deseas incluir una Sim Card?",
    "useInput": false,
    "placeholder": "",
    "response": {
        "button1": "no",
        "button2": "si"
    }
},
{
    "title": "¿Deseas incluir un tour antes o después de tu operación?",
    "useInput": false,
    "placeholder": "",
    "response": {
        "button1": "no",
        "button2": "si"
    }
},
{
    "title": "¿Para donde deseas ir?",
    "useInput": true,
    "placeholder": "Seleccione Lugar",
    "response": {
        "tours": [
            {
                "city": "Santa Marta",
                "tour": "Parque Nacional Tairona",
                "img": "https://travelgrafia.co/wp-content/uploads/2019/05/playas-cerca-a-santa-marta.jpg",
                "assessment": 4
            },
            {
                "city": "Cartagena",
                "tour": "Ciudad Amurallada",
                "img": "https://images.squarespace-cdn.com/content/v1/5785d42ee58c62418fa80880/1544049396811-HVMJTV64MNNVZP1DQLO4/DSC01610.jpg?format=500w",
                "assessment": 5
            },
            {
                "city": "La Guajira",
                "tour": "Desiertos",
                "img": "https://i.pinimg.com/564x/3b/9f/82/3b9f82d82b028773ffb3dbb9d9412b1c.jpg",
                "assessment": 4
            },
            {
                "city": "La Macarena - Meta",
                "tour": "Caño Cristales",
                "img": "https://www.infobae.com/new-resizer/wAD9R8Fg6zOTYJP3yqLPMAgLTfE=/1440x1440/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/11111513/Ca%C3%B1o-cristales.jpg",
                "assessment": 3
            },
            {
                "city": "Guatapé",
                "tour": "Piedra del Peñol",
                "img": "https://i.pinimg.com/564x/22/02/b5/2202b5487a9be7fd995082148ca3126b.jpg",
                "assessment": 5
            },
            {
                "city": "Boyacá",
                "tour": "El Cocuy",
                "img": "https://live.staticflickr.com/7322/9397648854_b5dad7fe3e_h.jpg",
                "assessment": 5
            },
            {
                "city": "Salento",
                "tour": "Valle de Cocura",
                "img": "https://funlifecrisis.com/wp-content/uploads/2018/11/valle-do-cocura-hike-salento-colombia.jpg",
                "assessment": 4
            },
            {
                "city": "San Andrés",
                "tour": "Islas de San Andrés",
                "img": "https://i.pinimg.com/originals/7d/c7/d8/7dc7d89feef93681fd6639d6b5256cbf.jpg",
                "assessment": 4
            },
            {
                "city": "El Chocó",
                "tour": "Capurganá",
                "img": "https://i.pinimg.com/564x/72/a1/9c/72a19c91ac194cf86ac111e381beb857.jpg",
                "assessment": 4
            }
        ]
    }
},
{
    "title": "Seleccione fechas del tour",
    "useInput": true,
    "placeholder": "Seleccione Los Días",
    "response": {
        "button1": "Atrás",
        "button2": "Siguiente"
    }
},
{
    "title": "Agenda tu cita de valoración virttual para la cirugía",
    "useInput": true,
    "placeholder": "Seleccione Fecha",
    "response": {
        "button1": "Atrás",
        "button2": "Siguiente"
    }
},
{
    "title": "Listo!!",
    "useInput": false,
    "placeholder": "",
    "response": {
        "button1": "",
        "button2": "Siguiente",
        "paragrap": "¡Estás a sólo un paso para lucir como siempre has deseado!"
    }
}*/