import React from 'react'
import "../style/Volunteer.css"

export default function Volunteer() {
  return (
    <>
      <div className="container d-flex justify-content-evenly">
        <div className="areas education">
           <div className='areas-img d-flex justify-content-center align-items-center '>
            <img src='logo.png'/>
           </div>
           <div className="description">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi saepe deleniti id in soluta similique hic distinctio totam molestias ex minima provident voluptatem, doloremque error quod eum magni eius sapiente earum? Aperiam error nobis, ut eaque maiores dolor quae expedita, minima rerum illum ex voluptatibus quas? Ducimus harum ex quod!
           </div>
        </div>

        <div className="areas health">
        <div className='areas-img d-flex justify-content-center align-items-center'>
            <img src='logo.png'/>
           </div>
           <div className="description">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam commodi, dolorem adipisci accusantium, iusto nam, nemo quo praesentium exercitationem sint eius asperiores ex atque id. Reiciendis nihil dolores ducimus molestiae recusandae quo, molestias facere aut facilis consequatur praesentium voluptate explicabo quia expedita odio repellendus, aliquam, blanditiis voluptatum necessitatibus maiores repellat!
           </div>
        </div>
      </div>
    </>
  )
}
