import React from 'react'
import './Header.css'
import cat from '../../assets/cat.png'
import dog from '../../assets/dog.png'
import rabbit from '../../assets/rabbit.png'
import photo from '../../assets/photo-portrait.png'

const Header = () => {
  return (
    <div className='ctn-header'>
      <div className='header-text'>
        <h1>Tu familia es importante para nosotros</h1>
        <h3>Estamos 24 horas al día disponibles para la salud de tus mascotas</h3>
        <button className='header-button'>Inicia sesión</button>
      </div>
      <div className='header-photos'>
        {/* <div className='ctn-icons'>
          <img className='cat' src={cat}/>
          <img className='dog' src={dog}/>
          <img className='rabbit' src={rabbit}/>
        </div> */}
        {/* <img src='https://s3-alpha-sig.figma.com/img/1c00/5e0d/dd5a32efa2ac1a00f4b6651ffd2b1df8?Expires=1682899200&Signature=AnxQ--HpLiTt5d8CGHuVtEsMPbG-CX8PiDBtGZoEH4oLr2Swi7VfgiRk08g-BWKGwTX56STUGzhv-SJzsp~MP2C9UdSRmIsfeeSpxu2MenH4v0MI~P5-viO-56RfGVKtFRQYFSihccRybQKkyWQFooNtMzsfkO4eXNN-QgTXtBRQpsyEurm~uJEnadIG6cxXx8d7QyhSbFszq3r~gO-qiScb1tzzoXTYAU66q4720J3ZtZkpLQ9P7YJeKjcFalX36RYSldiUhFKx4~h2BaioRTKhRSNZtltip32fSOATa4FIqixUpt7GF6lQiwor~2rQ-KH6WovZ1UfI7YnyO4R8ng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' className='portrait' alt='photo'></img> */}
        <img src={photo} className='portrait' alt='photo'/>
      </div>
      
    </div>
  )
}

export default Header
