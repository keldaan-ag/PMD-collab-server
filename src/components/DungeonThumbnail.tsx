import { Dungeon, DungeonData } from '../types'

export function DungeonThumbnail(props:{dungeon:Dungeon}){
    return <div className='nes-container nes-pointer' style={{
        margin:'10px',
         padding:'10px',
         maxWidth:'160px',
         backgroundColor:'white',
         display:'flex',
         flexFlow:'column',
         alignItems:'center',
         justifyContent:'space-between',
         border:'2px solid black'
         }}>
        <img key={props.dungeon} src={process.env.PUBLIC_URL + '/preview/' + props.dungeon + '-preview.png'} alt={props.dungeon}/>
        <p style={{fontSize:'0.55em'}}>{DungeonData[props.dungeon].name}</p>
    </div>
}