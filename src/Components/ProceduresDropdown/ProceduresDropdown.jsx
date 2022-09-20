import React from 'react'
import CirugiaCorporalImg from './Assets/Img/CirugiaCorporalImg.jpg'
import CirugiaFacialImg from './Assets/Img/CirugiaFacialImg.png'
import CirugiaMamariaImg from './Assets/Img/CirugiaMamariaImg.png'
import TatamientoCapilarImg from './Assets/Img/TatamientoCapilarImg.jpeg'
import TratamientoFacialImg from './Assets/Img/TratamientoFacialImg.jpeg'
import TratamientoCorporalImg from './Assets/Img/TratamientoCorporalImg.jpeg'
import EsteticaVaginalImg from './Assets/Img/EsteticaVaginalImg.png'
import Gluteoplastia from './Assets/Img/Gluteoplastia.png'
import LipoabdominoplastiaImg from './Assets/Img/LipoabdominoplastiaImg.png'
import Lipomarcacion from './Assets/Img/Lipomarcacion.png'
import Lipotransferencia from './Assets/Img/Lipotransferencia.png'
import Liposuccion from './Assets/Img/Liposuccion.png'
import Abdominoplastia from './Assets/Img/Abdominoplastia.png'
import Blefaroplastia from './Assets/Img/Blefaroplastia.png'
import Rinoplastia from './Assets/Img/Rinoplastia.png'
import Otoplastia from './Assets/Img/Otoplastia.png'
import Lipopapada from './Assets/Img/Lipopapada.png'
import Bichectomia from './Assets/Img/Bichectomia.png'
import Mamoplastia from './Assets/Img/Mamoplastia.png'
import Mastopexia from './Assets/Img/Mastopexia.png'
import ReduccionMamaria from './Assets/Img/ReduccionMamaria.png'
import TransplanteCapilar from './Assets/Img/TransplanteCapilar.jpeg'
import RegeneracionCapilar from './Assets/Img/RegeneracionCapilar.jpeg'
import TratamientoOjeras from './Assets/Img/TratamientoOjeras.jpeg'
import TratamientoEfectoPrincesa from './Assets/Img/TratamientoEfectoPrincesa.jpeg'
import TratamientoAcne from './Assets/Img/TratamientoAcne.jpeg'
import RejuvenecimientoFacial from './Assets/Img/RejuvenecimientoFacial.jpeg'
import TratamientoArrugasManchas from './Assets/Img/TratamientoArrugasManchas.jpeg'
import TratamientoFotoEnvejecimiento from './Assets/Img/TratamientoFotoEnvejecimiento.jpeg'
import TratamientoEstrias from './Assets/Img/TratamientoEstrias.jpeg'
import TratamientoCelulitis from './Assets/Img/TratamientoCelulitis.jpeg'
import EliminacionTatuajes from './Assets/Img/EliminacionTatuajes.jpeg'
import TratamientoTodoTipoCicatrices from './Assets/Img/TratamientoTodoTipoCicatrices.jpeg'
import DepilacionLaser from './Assets/Img/DepilacionLaser.jpeg'
import TensadoVaginalLaser from './Assets/Img/TensadoVaginalLaser.png'
import Labioplastia from './Assets/Img/Labioplastia.png'
import './Assets/styles.css'
import ProcedureCategoryDropdown from '../ProcedureCategoryDropdown/ProcedureCategoryDropdown'

const proceduresNav = [
    {
        id: 1,
        img: CirugiaCorporalImg,
        name: 'cirugía corporal',
        procedureDrop: [
            {id: 1, img: Gluteoplastia, title: 'gluteoplastia'},
            {id: 2, img: LipoabdominoplastiaImg, title: 'Lipoabdominoplastia'},
            {id: 3, img: Lipomarcacion, title: 'Lipomarcación'},
            {id: 4, img: Lipotransferencia, title: 'Lipotransferencia'},
            {id: 5, img: Liposuccion, title: 'Liposucción'},
            {id: 6, img: Abdominoplastia, title: 'Abdominoplastia'}
        ]
    },
    {
        id: 2,
        img: CirugiaFacialImg,
        name: 'cirugía facial',
        procedureDrop: [
            {id: 1, img: Blefaroplastia, title: 'Blefaroplastia'},
            {id: 2, img: Rinoplastia, title: 'Rinoplastia'},
            {id: 3, img: Otoplastia, title: 'Otoplastia'},
            {id: 4, img: Lipopapada, title: 'Lipopapada'},
            {id: 5, img: Bichectomia, title: 'Bichectomia'}
        ]
    },
    {
        id: 3,
        img: CirugiaMamariaImg,
        name: 'cirugía mamaria',
        procedureDrop: [
            {id: 1, img: Mamoplastia, title: 'Mamoplastia'},
            {id: 2, img: Mastopexia, title: 'Mastopexia'},
            {id: 3, img: ReduccionMamaria, title: 'Reducción mamaria'}
        ]
    },
    {
        id: 4,
        img: TatamientoCapilarImg,
        name: 'tratamiento capilar',
        procedureDrop: [
            {id: 1, img: TransplanteCapilar, title: 'Transplante capilar'},
            {id: 2, img: RegeneracionCapilar, title: 'Regeneración capilar'}
        ]
    },
    {
        id: 5,
        img: TratamientoFacialImg,
        name: 'tratamiento facial',
        procedureDrop: [
            {id: 1, img: TratamientoOjeras, title: 'Tratamiento de Ojeras'},
            {id: 2, img: TratamientoEfectoPrincesa, title: 'Tratamiento Efecto Princesa'},
            {id: 3, img: TratamientoAcne, title: 'Tratamiento para el Acne'},
            {id: 4, img: RejuvenecimientoFacial, title: 'Rejuvenecimiento Facial'},
            {id: 5, img: TratamientoArrugasManchas, title: 'Tratamiento para Arrugas y Manchas'},
            {id: 6, img: TratamientoFotoEnvejecimiento, title: 'Tratamiento para el Foto Envejecimiento'},
        ]
    },
    {
        id: 6,
        img: TratamientoCorporalImg,
        name: 'tratamiento corporal',
        procedureDrop: [
            {id: 1, img: TratamientoEstrias, title: 'Tratamiento para las Estrias'},
            {id: 2, img: TratamientoCelulitis, title: 'Tratamiento para la Celulitis'},
            {id: 3, img: EliminacionTatuajes, title: 'Eliminación de Tatuajes'},
            {id: 4, img: TratamientoTodoTipoCicatrices, title: 'Tratamiento para Todo Tipo de Cicatrices'},
            {id: 5, img: DepilacionLaser, title: 'Depilación Láser'}
        ]
    },
    {
        id: 7,
        img: EsteticaVaginalImg,
        name: 'estética vaginal',
        procedureDrop: [
            {id: 1, img: TensadoVaginalLaser, title: 'Tensado Vaginal con Láser'},
            {id: 2, img: Labioplastia, title: 'Labioplastia'}
        ]
    }
]


const ProceduresDropdown = ({ dropdMenu, lickCategoryClicked, ClickedCategory }) => {
  return (
    <div className={dropdMenu ? 'cardProceduresDropdown_Burguer' : 'cardProceduresDropdown'}>
        <div className='cardProceduresDropdown_'>
            {proceduresNav.map((procedureCategory) => {
                return (
                    <ProcedureCategoryDropdown categoryProceduresImg={procedureCategory.img} categoryProceduresTitle={procedureCategory.name} catego={procedureCategory.procedureDrop} dropdMenu={dropdMenu} idCategory={procedureCategory.id} lickCategoryClicked={lickCategoryClicked} linkCategory={`procedure/${procedureCategory.id}`} ClickedCategory={ClickedCategory}/>
                )
            })}
        </div>
    </div>
  )
}

export default ProceduresDropdown